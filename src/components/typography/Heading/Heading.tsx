import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** The heading level (h1-h6) */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Size override, independent of heading level */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  /** Whether to truncate text */
  truncate?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Custom color */
  color?: string;
}

/**
 * Heading component for section titles
 */
export const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h2',
  size,
  weight = 'bold',
  truncate = false,
  align = 'left',
  color,
  className = '',
  children,
  ...props
}) => {
  const defaultSizes = {
    h1: 'text-4xl',
    h2: 'text-3xl',
    h3: 'text-2xl',
    h4: 'text-xl',
    h5: 'text-lg',
    h6: 'text-base',
  };
  
  const customSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };
  
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  // Use either custom size or default based on heading level
  const sizeClass = size ? customSizes[size] : defaultSizes[Tag];
  
  return (
    <Tag
      className={`
        ${sizeClass}
        ${weights[weight]}
        ${alignments[align]}
        ${truncate ? 'truncate' : ''}
        leading-tight
        ${className}
      `}
      style={{ color: color || 'inherit' }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;