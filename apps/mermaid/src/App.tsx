import mermaid from 'mermaid';

import { MermaidDiagram } from './components/mermaid';

import './App.css';

// Initialize Mermaid
// MermaidConfig: https://mermaid.js.org/config/setup/mermaid/interfaces/MermaidConfig.html
mermaid.initialize({
	startOnLoad: false
});

const diagram = `
graph TD
    A[Chart Definition] --> B(Preview)
    B --> C{decide}
    C --> D[Keep]
    C --> E[Edit Definition]
    E --> B
    D --> F[Save Image and Code]
    F --> B
`;

export const App: React.FC = () => (
	<div className='content'>
		<h1>React Mermaid Application</h1>
		<h2>Mermaid diagram</h2>
		<MermaidDiagram diagram={diagram} />
	</div>
);
