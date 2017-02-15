# React Universal Typescript

> React starter for building universal apps with Typescript, Webpack 2, Apollo

> Adapted from [react-starter's feature/apollo branch](https://github.com/richardkall/react-starter/tree/feature/apollo) 

## Features

- [x] [Typescript](https://typescriptlang.org/)
- [x] [TSLint](https://palantir.github.io/tslint/)
- [x] [Express](http://expressjs.com/)
- [x] [React](http://facebook.github.io/react/)
- [x] [React Router v4](https://reacttraining.com/react-router/api)
- [x] [Redux](http://redux.js.org/)
- [x] [Apollo Client](http://dev.apollodata.com/)
- [x] [Styled Components](https://styled-components.com/)
- [x] [Webpack v2](https://webpack.js.org/)

## Getting Started

### Install 

```bash
$ npm install
$ yarn
```

**Run**

- Developer server

```bash
$ npm run start-dev
$ yarn run start-dev
```

- Production server

```bash
$ NODE_ENV=production npm run build && npm start
```

**Optimizing the GraphQL experience**

- Install

```bash
$ npm install apollo-codegen graphql-document-collector -g
$ yarn global add apollo-codegen graphql-document-collector
```

- Download schema

```bash
$ apollo-codegen download-schema ADD-ENDPOINT-HERE --output schema.json
```

- Generate type annotations for TypeScript

```bash
$ npm run generate-graphql-types
$ yarn run generate-graphql-types
```
- Collect all .graphql files

```bash
$ npm run generate-graphql-documents
$ yarn run generate-graphql-documents
```