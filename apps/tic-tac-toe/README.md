# React Tic-Tac-Toe Application

React project implementing the Tic-Tac-Toe game I made to play with my son. This project was initally vibe coded.

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
pnpm run dev --workspace=tic-tac-toe

# build a version of the application for distribution
pnpm run build --workspace=tic-tac-toe

# run the built version from the `dist` folder
pnpm run preview --workspace=tic-tac-toe

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
