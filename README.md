[![Build Status](https://travis-ci.com/GX-CHEN/react-redux-boilerplate.svg?branch=master)](https://travis-ci.com/GX-CHEN/react-redux-boilerplate)

## react-redux-boilerplate

A fully set-up boilerplate project which contains React (from Facebook create-react-app), Redux, Router, Antd (UI lib), and devDependencies for linter, formatter and watcher.

### Demo Website

https://react-redux-boilerplate-giphy.herokuapp.com/

### Why create this boilerplate

When I try to start some personal projects with React/Redux, I have difficulty of finding good boilerplate. There are few boilderplate I found, but none of are ideal for me:

1.  Some boilerplate has very old packages version
2.  Many of the boilerplate has no BE call, and just use the (kinda boring) counter example. So no good convention to follow for separting model (API call service), and handle async
3.  Some boilerplate put reducer & action in same file, which in my opinion not good practice for big project

So based on other people's boilderplate, I created a new one which has API call example, follow best practice file structure, get all the package to be latest, and use React16.3 new syntax

### Documentation

I use the standard JS block comments in each file to describe their purpose.

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

### License

Standard MIT license which you can find here [LICENSE](./LICENSE).

## Authors

- **Gongxia Chen @GX-CHEN** - _Initial work_
