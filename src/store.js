import { writable } from "svelte/store";

const defaultFeeds = '[]'
const storedFeeds = localStorage.getItem("feeds") || defaultFeeds;
export const feeds = writable(JSON.parse(storedFeeds));
feeds.subscribe(value => {
  localStorage.setItem("feeds", value ? JSON.stringify(value) : defaultFeeds);
});