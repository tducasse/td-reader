<script>
  export let feeds;
  export let remove;
</script>

<style>
  .feed-name {
    margin-right: 6px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 6px;
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: darkslategray;
    color: whitesmoke;
    display: flex;
  }

  .cross {
    margin-left: 3px;
  }
  .cross:hover {
    cursor: pointer;
  }

  .title {
    margin-bottom: 6px;
    font-weight: bold;
    font-size: large;
    color: whitesmoke;
  }

  .container {
    margin-bottom: 12px;
  }

  .left {
    flex: 1;
  }
</style>

<div class="container">
  <div class="title">Active feeds</div>
  {#each feeds as feed}
    <div class="feed-name">
      <span class="left"> {feed.name}</span>
      <span class="cross" on:click={() => remove(feed.name)}> &times; </span>
    </div>
  {/each}
</div>
