<script>
  import { select_multiple_value } from "svelte/internal";

  export let add;
  let name;
  let url;
  let subreddit;
  let selected = "custom";

  const select = (name) => {
    selected = name;
  };

  const submit = () => {
    add({ url, name });
    url = "";
    name = "";
  };

  const submitReddit = () => {
    if (!subreddit) {
      return false;
    }
    add({
      name: `Reddit ${subreddit}`,
      url: `https://reddit.com/r/${subreddit}.rss`,
    });
    subreddit = "";
    name = "";
    url = "";
  };
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

  .title {
    margin-bottom: 6px;
    font-weight: bold;
    font-size: large;
    color: whitesmoke;
  }
</style>

<div class="title">Add a new feed</div>
<button on:click={() => select('reddit')}>Reddit</button>
<button on:click={() => select('custom')}>Custom</button>
{#if selected === 'reddit'}
  <form on:submit|preventDefault={submitReddit}>
    <input
      id="new-feed-name"
      placeholder="Subreddit name"
      bind:value={subreddit} />
    <button type="submit">Add new subreddit</button>
  </form>
{:else if selected === 'custom'}
  <form on:submit|preventDefault={submit}>
    <input id="new-feed-url" placeholder="URL" bind:value={url} />
    <input id="new-feed-name" placeholder="Name" bind:value={name} />
    <button type="submit">Add new feed</button>
  </form>
{/if}
