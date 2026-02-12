import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { parsed } = loadEnv();

console.log(parsed);

export default defineConfig({
  html: {
    title: parsed.APPLICATION_NAME,
  },
  plugins: [pluginReact()],
  source: {
    define: {
      'process.env': JSON.stringify(parsed),
    },
  },
});
