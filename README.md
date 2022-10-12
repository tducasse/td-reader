# TD's reader
[![Netlify Status](https://api.netlify.com/api/v1/badges/1079bc57-9eb5-4b4e-9efa-0ba2565e2aae/deploy-status)](https://app.netlify.com/sites/td-reader/deploys)

TD's reader is a client-side only RSS feed reader.
Available [here](https://reader.tducasse.com).

Interesting points:
- written in Svelte
- the list of feeds is stored in `localStorage`. This means that there's no login required, which was the main requirement (I didn't want to have to set up a proper backend)
- getting a feed from another website often breaks, because of CORS. So I've got a CORS-proxy (using a fork of [cors-anywhere](https://github.com/Rob--W/cors-anywhere)), hosted on Heroku, which purpose is to add the CORS headers. The only whitelisted domain is the one to which this app is deployed, so that it doesn't just become an open proxy!
- the feeds are parsed using [rss-parser](https://github.com/rbren/rss-parser)
- once parsed, the articles are sorted by date (when the feed returns one)
- there's nothing clever about how I handle inner links to external websites: most RSS feeds seem to just return this in the content, so it would require some parsing on my side

# what I could do to make it better
- just use it more often: because it's not currently super good UX wise, I just don't 😬
- parse things better: maybe find a way to add js snippets to allow custom parsing from a user's perspective
- add automatic parsing for common platforms (hackernews, reddit, etc)
