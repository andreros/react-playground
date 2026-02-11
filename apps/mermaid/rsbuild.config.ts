import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
	html: {
		title: 'React Mermaid Application'
	},
	plugins: [pluginReact()]
});
