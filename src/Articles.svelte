<script>
  import Article from "./Article.svelte";
  import { uniqBy, orderBy, groupBy } from "lodash-es";

  export let feeds;

  let articles = [];

  let parser = new RSSParser();
  const fetchArticles = async ({ name, url }) => {
    const currentArticles = [];
    let feed = await parser.parseURL(CORS_API + url);
    feed.items.forEach((item) => {
      currentArticles.push({
        ...item,
        name,
        standardDate: item.isoDate || item.pubDate,
      });
    });
    return currentArticles;
  };

  $: (async () => {
    let newArticles = [];
    await Promise.all(
      feeds.map(async (feed) => {
        const nextArticles = await fetchArticles(feed);
        newArticles = newArticles.concat(nextArticles);
      })
    );
    const groupedDates = groupBy(
      newArticles,
      ({ standardDate }) => !!standardDate
    );
    articles = orderBy(
      uniqBy(groupedDates.true, "link"),
      "standardDate",
      "desc"
    ).concat(groupedDates.false);
  })();
</script>

<style>
</style>

<div>
  {#each articles as article}
    <Article {article} />
  {/each}
</div>
