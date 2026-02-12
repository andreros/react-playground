# React Mermaid Example Application

[Mermaid.JS](https://mermaid.js.org/) is a syntax extension for markdown that allows you to create diagrams and visualizations using a simple, text-based scripting language called Mermaid. It is especially popular for embedding charts and diagrams directly in markdown documents, like those used in documentation, wikis, and dev notes.

This application illustrates the usage of Mermaid diagrams inside a React application. For further usage info, please visit [Mermaid.JS Docs](https://mermaid.js.org/intro/).

For further information, please check [MERMAID.md](MERMAID.md).

## Application Tech Stack

-   `React` framework (with Typescript) for the overall application development;
-   `Typescript` coding language;
-   `Mermaid` for diagram rendering;

## Application Support and Tools

-   `Webpack` to bundle the application and serve it in development mode;

## Application Code Quality

-   `BiomeJS` for code formatting and linting;

## Application scripts

From the project root folder, please execute any of the following commands in a terminal window:

### Installation and application bootstrap

```bash
# from the `react-playground` root folder run the following commands:

# install the application dependencies
npm i

# start the application in development mode
npm run dev --workspace=mermaid

# build a version of the application for distribution
npm run build --workspace=mermaid

# serve the built version from the `dist` folder
npm run serve --workspace=mermaid

# reset and reinstall the application
npm run nuke
```

### Code Quality

```bash
# from the `react-playground` root folder run the following commands:

# run BiomeJS
pnpm run lint

# run BiomeJS and fix all automatically fixable problems
pnpm run lint:fix
```
