<script>
  export let add;

  const sampleFeeds = [
    {
      url: "https://news.ycombinator.com/rss",
      name: "Hacker News",
    },
    {
      url: "https://www.echojs.com/rss",
      name: "Echo JS",
    },
    {
      url: "https://www.reddit.com/r/programming/.rss",
      name: "Reddit Programming",
    },
  ];
</script>

<style>
  button {
    background-color: darkslategray;
    color: whitesmoke;
    cursor: pointer;
    border-radius: 10px;
  }
  button:hover {
    background-color: #555;
  }

  button:active {
    background-color: black;
  }

  .sample {
    color: whitesmoke;
  }

  .inner {
    padding-top: 12px;
  }

  .feed-button {
    margin: 6px;
    border-radius: 10px;
  }

  .title {
    margin-bottom: 6px;
    font-weight: bold;
    font-size: large;
    color: whitesmoke;
  }
</style>

<details class="sample right">
  <summary class="title">Sample feeds</summary>
  <div class="inner">
    {#each sampleFeeds as feed}
      <button
        class="feed-button"
        on:click={() => add(feed)}>{feed.name}</button>
    {/each}
  </div>
</details>
