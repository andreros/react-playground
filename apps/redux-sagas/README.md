# React Redux Sagas Example Application

This application illustrates the usage of [Redux Sagas](https://redux-saga.js.org/) inside a React application.

Please, install [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) from the [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for better debugging.

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `Axios` for data access through a restful API;
-   `Tailwind` for component styling;
-   [`Typesafe Actions`](https://github.com/piotrwitek/typesafe-actions) to reduce types verbosity and complexity in Redux Architecture;

## Application Support and Tools

-   `pnPm` as package manager;
-   `Rsbuild` to bundle the application and serve it in development mode;
-   [`https://jsonplaceholder.typicode.com/`](https://jsonplaceholder.typicode.com/) as the data service;

## Application Code Quality

-   `BiomeJS` for code formatting and linting;

## Application scripts

From the project root folder, please execute any of the following commands in a terminal window:

### Installation and application bootstrap

```bash
# from the `react-playground` root folder run the following commands:

# install the application dependencies
pnpm i

# start the application in development mode
pnpm run dev --workspace=redux-sagas

# build a version of the application for distribution
pnpm run build --workspace=redux-sagas

# run the built version from the `dist` folder
pnpm run preview --workspace=redux-sagas
```

### Code Quality

```bash
# from the `react-playground` root folder run the following commands:

# run BiomeJS
pnpm run lint

# run BiomeJS and fix all automatically fixable problems
pnpm run lint:fix
```
