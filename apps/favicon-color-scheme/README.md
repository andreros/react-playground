# React System Color Scheme depending Favicon

React project implementing a favicon that changes with the operating system color scheme (light or dark).

The initial favicon load is based in this article: [https://catalin.red/svg-favicon-light-dark-theme/](https://catalin.red/svg-favicon-light-dark-theme/)

Once the initial load is made, a React hook takes over and listens to the System color scheme changes through a media query and injects the correct favicon version into the document `<head />` tag.

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
pnpm run dev --workspace=favicon-color-scheme

# build a version of the application for distribution
pnpm run build --workspace=favicon-color-scheme

# run the built version from the `dist` folder
pnpm run preview --workspace=favicon-color-scheme

# reset and reinstall the application
pnpm run nuke
```

### Code Quality

```bash
# from the `react-playground` root folder run the following commands:

# run BiomeJS
pnpm run lint

# run BiomeJS and fix all automatically fixable problems
pnpm run lint:fix
```
