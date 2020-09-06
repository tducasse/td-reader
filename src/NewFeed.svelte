<script>
  export let add;
  let name;
  let url;

  const submit = () => {
    add({ url, name });
  };
</script>

<form on:submit|preventDefault={submit}>
  <input id="new-feed-url" placeholder="URL" bind:value={url} />
  <input id="new-feed-name" placeholder="Name" bind:value={name} />
  <button type="submit">Add new feed</button>
</form>
