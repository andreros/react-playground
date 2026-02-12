import { useMemo } from 'react';

export type TComponentProps = {
  /**
   * Additional class names for the component.
   * @optional
   */
  className?: string;
};

export const Component: React.FC<TComponentProps> = ({ className }) => {
  const rootClasses = useMemo(() => {
    let result = 'component';

    if (className) result = `${result} ${className}`;

    return result;
  }, [className]);

  return <div className={rootClasses}>Component</div>;
};
