# davids-neighbour.com

This is the [Hugo](https://gohugo.io) setup and content for davids-neighbour.com. DNB is hosted on Netlify and most of this repository is set up to work on Netlify and use it's features (like minification).

# setup and update algolia search

- copy `.env.sample` to `.env`
- fill in the info from https://www.algolia.com/apps &gt; API keys
- run `npm install -g atomic-algolia` to install globally 
- run `npm run algolia` whenever there are updates to the content

# release

- setup signed tags with `npm version patch`
- create release with `npm run release`