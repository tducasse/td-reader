<script>
  export let add;
  let name;
  let url;

  const submit = () => {
    add({ url, name });
    url = "";
    name = "";
  };

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
      url: "https://www.reddit.com/r/programming/hot/.rss",
      name: "Reddit Programming",
    },
  ];
</script>

<style>
  input {
    border-radius: 10px;
  }
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

  .container {
    display: flex;
    flex-direction: row;
  }

  .sample {
    color: whitesmoke;
  }

  .inner {
    padding-top: 12px;
    position: absolute;
  }

  .feed-button {
    margin: 6px;
    border-radius: 10px;
  }

  .left {
    flex: 1;
  }
</style>

<div class="container">
  <form class="left" on:submit|preventDefault={submit}>
    <input id="new-feed-url" placeholder="URL" bind:value={url} />
    <input id="new-feed-name" placeholder="Name" bind:value={name} />
    <button type="submit">Add new feed</button>
  </form>
  <details class="sample right">
    <summary>Sample feeds</summary>
    <div class="inner">
      {#each sampleFeeds as feed}
        <button
          class="feed-button"
          on:click={() => add(feed)}>{feed.name}</button>
      {/each}
    </div>
  </details>
</div>
