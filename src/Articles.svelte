<script>
  import Article from "./Article.svelte";
  import { onMount } from "svelte";

  export let feeds;

  const articles = [];

  onMount(async () => {
    if (!feeds) {
      return false;
    }
    await Promise.all(
      feeds.map(async (feed) => {
        const res = await fetch(`${window.origin}/api/cors?url='${feed.url}`);
        if (res.status !== 200) {
          console.log(`Request error fetching ${feed.url}`);
        } else {
          console.log(res.body);
          //res.body.pipe(feedparser);
        }
      })
    );
  });
</script>

<div>
  {#each articles as article}
    <Article {article} />
  {/each}
</div>
