import mermaid from 'mermaid';
import { useEffect, useMemo, useRef, useState } from 'react';

export type TMermaidProps = {
	/**
	 * Additional class names for the component.
	 * @optional
	 */
	className?: string;

	/**
	 * The Mermaid diagram to be loaded.
	 */
	diagram: string;
};

export const MermaidDiagram: React.FC<TMermaidProps> = ({ className, diagram }) => {
	const container = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<string>('');

	useEffect(() => {
		if (!container.current || !diagram) return;

		const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
		const element = document.createElement('div');
		element.id = id;
		container.current.appendChild(element);

		mermaid.render(id, diagram).then(({ svg, bindFunctions }) => {
			setContent(svg);
			if (container.current) bindFunctions?.(container.current);
		});
	}, [diagram]);

	const rootClasses = useMemo(() => {
		let result = 'mermaid-diagram mermaid';

		if (className) result = `${result} ${className}`;

		return result;
	}, [className]);

	if (!diagram) return null;

	return <div className={rootClasses} ref={container} dangerouslySetInnerHTML={{ __html: content }} />;
};
