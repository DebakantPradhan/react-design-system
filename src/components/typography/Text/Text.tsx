import React from 'react';

export interface TextProps {
  /** The element type to render as */
  as?: 'p' | 'span' | 'div' | 'label';
  /** The size of the text */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** Text style variant */
  variant?: 'body' | 'caption' | 'helper' | 'code';
  /** Whether to truncate text with ellipsis */
  truncate?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Custom text color */
  color?: string;
  /** Whether to italicize the text */
  italic?: boolean;
  /** Whether to underline the text */
  underline?: boolean;
  /** Additional class name */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
  /** All other props */
  [x: string]: any;
}

/**
 * Text component for paragraphs, spans, and other text elements
 */
export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'md',
  weight = 'normal',
  variant = 'body',
  truncate = false,
  align = 'left',
  color,
  italic = false,
  underline = false,
  className = '',
  children,
  ...props
}) => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };
  
  const variants = {
    body: 'leading-normal',
    caption: 'text-sm text-gray-600',
    helper: 'text-xs text-gray-500',
    code: 'font-mono bg-gray-100 px-1 py-0.5 rounded',
  };
  
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  return (
    <Component
      className={`
        ${sizes[size]}
        ${weights[weight]}
        ${variants[variant]}
        ${alignments[align]}
        ${truncate ? 'truncate' : ''}
        ${italic ? 'italic' : ''}
        ${underline ? 'underline' : ''}
        ${className}
      `}
      style={{ color: color || 'inherit' }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;