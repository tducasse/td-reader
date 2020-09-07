<script>
  import NewFeed from "./NewFeed.svelte";
  import ActiveFeeds from "./ActiveFeeds.svelte";
  import Articles from "./Articles.svelte";
  import { feeds } from "./store.js";
  import SampleFeeds from "./SampleFeeds.svelte";

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

  let open = false;

  const openNav = () => {
    document.getElementsByTagName("aside")[0].style.width = "250px";
    document.getElementsByTagName("main")[0].style.marginLeft = "250px";
    open = true;
  };

  const closeNav = () => {
    document.getElementsByTagName("aside")[0].style.width = 0;
    document.getElementsByTagName("main")[0].style.marginLeft = 0;
    open = false;
  };

  const toggleNav = () => {
    if (open) {
      closeNav();
    } else {
      openNav();
    }
  };
</script>

<style>
  /* The side navigation menu */
  aside {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }

  /* Position and style the close button (top right corner) */
  aside .close-button {
    position: absolute;
    top: 0;
    right: 12px;
    margin-left: 50px;
    color: whitesmoke;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: large;
  }

  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  main {
    transition: margin-left 0.5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    aside {
      padding-top: 15px;
    }
  }

  .menu {
    background-color: darkslategray;
    color: whitesmoke;
    cursor: pointer;
    padding: 6px;
    border-radius: 10px;
  }
  .menu:hover {
    background-color: #555;
  }

  .menu:active {
    background-color: black;
  }
</style>

<aside>
  <button class="close-button" on:click={toggleNav}>&times;</button>
  <NewFeed {add} />
  <SampleFeeds {add} />
  <ActiveFeeds feeds={$feeds} {remove} />
</aside>
<main>
  <span class="menu" on:click={toggleNav}>MENU</span>
  <Articles feeds={$feeds} />
</main>
