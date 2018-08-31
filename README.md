[![Build Status](https://travis-ci.com/GX-CHEN/react-redux-boilerplate.svg?branch=master)](https://travis-ci.com/GX-CHEN/react-redux-boilerplate)

# react-redux-boilerplate (giphy search)

## What is this?
A fully set-up boilerplate project which contains React (from Facebook create-react-app), Redux, Router, Antd (UI lib), and devDependencies for linter, formatter and watcher.

### What makes this boilerplate standout

There're already many React/Redux boilderplate online, why do I create an extra one? It's because when I try to start personal projects with React/Redux, I have difficulty of finding a boilerplate fully satisfies me. There following are common issues:

1.  Some boilerplate has very old packages version (update package version will very likely to break something)
2.  Many of the boilerplate has no backend call, and just use the (kinda boring) counter example. So no good convention to follow for separating model (API call service), or async handling
3.  Some boilerplate put reducer & action in same file, which in my opinion not good practice for big project

So based on other existing boilderplates, I created a new one which has API call example, follow best practice file structure, get all the package up-to-date (within reasonable range), and use React16.3 new syntax

## Demo Website

https://react-redux-boilerplate-giphy.herokuapp.com/

## What can it do?
- Top button in the page is to find currently trending gif images in giphy.com
- Type in the search box will trigger live search for the keyword from user input
- A list view of giphy titles will display when "get trending" or "search"
- Click on title in the list view, user will navigate to gif details page, which display actual gif


## How to build

### For running in local

```bash
cd react-redux-boilerplate
npm install
npm start
```

A new Chrome tab will automatically open with localhost:3000, which is the URL project running on

### For create deploy-ready build

```bash
npm run build
```

## License

Standard MIT license which you can find here [LICENSE](./LICENSE).

## Authors

- **Gongxia Chen @GX-CHEN** - _Initial work_