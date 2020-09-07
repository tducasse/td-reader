<script>
  import NewFeed from "./NewFeed.svelte";
  import ActiveFeeds from "./ActiveFeeds.svelte";
  import Articles from "./Articles.svelte";
  import { feeds } from "./store.js";

  const remove = (name) => {
    const newFeeds = $feeds.filter((el) => el.name !== name);
    feeds.set(newFeeds);
  };

  const add = (feed) => {
    if (!feed.name || !feed.url) {
      return false;
    }
    if ($feeds.find((el) => el.name === feed.name || el.url === feed.url)) {
      return false;
    }
    const newFeeds = $feeds.concat(feed);
    feeds.set(newFeeds);
  };
</script>

<style>
</style>

<main>
  <NewFeed {add} />
  <ActiveFeeds feeds={$feeds} {remove} />
  <Articles feeds={$feeds} />
</main>
