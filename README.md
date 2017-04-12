# React Starter Typescript

> React starter for building universal apps with Typescript, Webpack 2, Apollo

> Adapted from [react-starter's feature/apollo branch](https://github.com/richardkall/react-starter/tree/feature/apollo)

> Using as a starting point for my project so it's a bit opinionated.

## Features

- [x] [Typescript](https://typescriptlang.org/)
- [x] [TSLint](https://palantir.github.io/tslint/)
- [x] [Express](http://expressjs.com/)
- [x] [React](http://facebook.github.io/react/)
- [x] [React Router v4](https://reacttraining.com/react-router/api)
- [x] [Apollo Client](http://dev.apollodata.com/)
- [x] [Styled Components](https://styled-components.com/)
- [x] [Webpack v2](https://webpack.js.org/)

## Getting Started

### Install 

```bash
$ npm/yarn install
```

**Run**

- Developer server

```bash
$ npm/yarn run start-dev
```

- Production server

```bash
$ NODE_ENV=production npm run build && npm start
```

- Introspect Schema

```bash
$ apollo-codegen introspect-schema https://api.graph.cool/simple/v1/cixm67lmh1yjd0177j5cwt47t --output schema.json
```