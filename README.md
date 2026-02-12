# React Playground

React playground, a collection of react applications implemening various aspects and technologies needed in commercial products.

- [`favicon-color-scheme`](apps/favicon-color-scheme/README.md) - React application implementing a favicon that changes with the operating system color scheme (light or dark);
- [`mermaid`](apps/mermaid/README.md) - React application illustrating the usage of Mermaid diagrams inside a React application.
- [`tic-tac-toe`](apps/tic-tac-toe/README.md) - React application implementing a simple version of the Tic-tac-toe game.
- [`sample`](apps/sample/README.md) - Sample React application to help bootstrap a new application inside this React playground.

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
# install all the application dependencies
pnpm i

# start the application in development mode
pnpm run dev --workspace=<name-in-package-json-file>

# build a version of the application for distribution
pnpm run build --workspace=<name-in-package-json-file>

# run the built version from the `dist` folder
pnpm run preview --workspace=<name-in-package-json-file>

# reset and reinstall the application
pnpm run nuke
```

### Code Quality

```bash
# run BiomeJS
pnpm run lint

# run BiomeJS and fix all automatically fixable problems
pnpm run lint:fix
```
