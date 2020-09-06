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
  }

  .cross {
    margin-left: 3px;
  }
  .cross:hover {
    cursor: pointer;
  }
</style>

<div>
  {#each feeds as feed}
    <span class="feed-name">
      {feed.name}
      <span class="cross" on:click={() => remove(feed.name)}> &times; </span>
    </span>
  {/each}
</div>
