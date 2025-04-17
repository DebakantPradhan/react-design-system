import React, { forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** The variant of the input */
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
  /** Error message to display */
  error?: string;
  /** Label for the input */
  label?: string;
  /** Helper text below the input */
  helperText?: string;
  /** Icon to display at the start of the input */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of the input */
  endIcon?: React.ReactNode;
  /** Whether the input is full width */
  fullWidth?: boolean;
  /** Whether the input is in a loading state */
  isLoading?: boolean;
}

/**
 * Input component for data entry
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      error,
      label,
      helperText,
      startIcon,
      endIcon,
      className = '',
      fullWidth = false,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const sizeStyles = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-4 py-3 text-lg',
    };
    
    const variantStyles = {
      outline: `border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`,
      filled: `bg-gray-100 border-transparent ${error ? 'focus:ring-red-500' : 'focus:bg-white focus:border-blue-500 focus:ring-blue-500'}`,
      flushed: `border-b-2 rounded-none px-0 ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`,
      unstyled: 'border-none shadow-none focus:ring-0 p-0',
    };
    
    const stateStyles = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : '';
    const widthStyles = fullWidth ? 'w-full' : '';
    const roundedStyles = variant === 'flushed' ? '' : 'rounded';
    
    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {startIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={`
              ${baseStyles}
              ${sizeStyles[size]}
              ${variantStyles[variant]}
              ${stateStyles}
              ${widthStyles}
              ${roundedStyles}
              ${startIcon ? 'pl-10' : ''}
              ${endIcon || isLoading ? 'pr-10' : ''}
              ${className}
            `}
            disabled={disabled || isLoading}
            aria-invalid={!!error}
            aria-describedby={helperText ? `${props.id}-helper-text` : undefined}
            {...props}
          />
          
          {isLoading && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="animate-spin h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
          
          {endIcon && !isLoading && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {endIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p 
            className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}
            id={props.id ? `${props.id}-helper-text` : undefined}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;