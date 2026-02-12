# React i18next Example Application

This application illustrates a basic implementation of i18n (internationalization) in a React project using the following libraries:

- i18next: [https://www.i18next.com/](https://www.i18next.com/)
- react-i18next: [https://react.i18next.com/](https://react.i18next.com/)

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;

## Application Support and Tools

-   `pnPm` as package manager;
-   `Rsbuild` to bundle the application and serve it in development mode;

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
pnpm run dev --workspace=i18next

# build a version of the application for distribution
pnpm run build --workspace=i18next

# run the built version from the `dist` folder
pnpm run preview --workspace=i18next
```

### Code Quality

```bash
# from the `react-playground` root folder run the following commands:

# run BiomeJS
pnpm run lint

# run BiomeJS and fix all automatically fixable problems
pnpm run lint:fix
```
