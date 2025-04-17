import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** The visual style variant of the button */
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  /** The color scheme of the button */
  colorScheme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /** Whether the button fills its container width */
  fullWidth?: boolean;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** The border radius of the button */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  /** Whether the button has an icon */
  leftIcon?: React.ReactNode;
  /** Whether the button has an icon on the right */
  rightIcon?: React.ReactNode;
}

/**
 * Button component for user interactions
 */
export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'solid',
  colorScheme = 'primary',
  fullWidth = false,
  isLoading = false,
  rounded = 'md',
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-lg',
  };
  
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  // Define color schemes
  const colorSchemes = {
    primary: {
      solid: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      link: 'text-blue-600 hover:underline focus:ring-blue-500 p-0',
    },
    secondary: {
      solid: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
      outline: 'border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
      link: 'text-gray-600 hover:underline focus:ring-gray-500 p-0',
    },
    success: {
      solid: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
      outline: 'border border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500',
      ghost: 'text-green-500 hover:bg-green-50 focus:ring-green-500',
      link: 'text-green-500 hover:underline focus:ring-green-500 p-0',
    },
    danger: {
      solid: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
      outline: 'border border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500',
      ghost: 'text-red-500 hover:bg-red-50 focus:ring-red-500',
      link: 'text-red-500 hover:underline focus:ring-red-500 p-0',
    },
    warning: {
      solid: 'bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500',
      outline: 'border border-amber-500 text-amber-500 hover:bg-amber-50 focus:ring-amber-500',
      ghost: 'text-amber-500 hover:bg-amber-50 focus:ring-amber-500',
      link: 'text-amber-500 hover:underline focus:ring-amber-500 p-0',
    },
    info: {
      solid: 'bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-500',
      outline: 'border border-sky-500 text-sky-500 hover:bg-sky-50 focus:ring-sky-500',
      ghost: 'text-sky-500 hover:bg-sky-50 focus:ring-sky-500',
      link: 'text-sky-500 hover:underline focus:ring-sky-500 p-0',
    },
  };

  // State specific styles
  const disabledStyles = disabled || isLoading ? 'opacity-50 cursor-not-allowed' : '';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${roundedStyles[rounded]} 
        ${colorSchemes[colorScheme][variant]}
        ${disabledStyles}
        ${widthStyles}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;