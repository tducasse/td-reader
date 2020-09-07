<script>
  export let article;
</script>

<style>
  .article {
    border: 1px solid lightslategray;
    border-radius: 10px;
    padding: 12px;
    margin: 6px 0 6px 0;
    background-color: darkcyan;
  }

  .wrapper {
    margin-top: 12px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  .title {
    font-weight: bold;
  }

  .info-container {
    font-size: x-small;
  }

  .name {
    font-weight: bold;
  }

  .inner {
    margin-top: 6px;
  }

  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  details {
    margin-bottom: 12px;
  }

  a {
    background-color: darkslategray;
    color: white;
    border-radius: 10px;
    padding: 3px 6px;
    text-decoration: none;
  }

  a:hover {
    background-color: #555;
  }

  a:active {
    background-color: black;
  }

  a:visited {
    background-color: lightslategray;
    color: black;
  }
</style>

{#if article}
  <div class="wrapper">
    <div class="article">
      <details>
        <summary>
          <div class="title-container">
            <span class="title"> {article.title} </span>
            <span class="info-container"><span
                class="name">{article.name}</span> - {article.standardDate ? new Date(article.standardDate).toLocaleString() : 'no date'}</span>
          </div>
        </summary>
        <div class="inner">
          {@html article.content}
        </div>
      </details>
      <a href={article.link}>Open</a>
    </div>
  </div>
{/if}
