import React from 'react';

export interface AlertProps {
  /** The type/severity of the alert */
  status?: 'info' | 'success' | 'warning' | 'error';
  /** The title of the alert */
  title?: string;
  /** The description/message of the alert */
  children: React.ReactNode;
  /** Whether to show an icon */
  withIcon?: boolean;
  /** Whether the alert is dismissible */
  isDismissible?: boolean;
  /** Callback when alert is dismissed */
  onClose?: () => void;
  /** The variant style of the alert */
  variant?: 'solid' | 'subtle' | 'outline' | 'left-accent';
  /** Additional CSS class */
  className?: string;
}

/**
 * Alert component for feedback messages and notifications
 */
export const Alert: React.FC<AlertProps> = ({
  status = 'info',
  title,
  children,
  withIcon = true,
  isDismissible = false,
  onClose,
  variant = 'subtle',
  className = '',
}) => {
  // Status-based styling
  const statusStyles = {
    info: {
      solid: 'bg-blue-500 text-white',
      subtle: 'bg-blue-50 text-blue-800',
      outline: 'border border-blue-500 text-blue-800',
      'left-accent': 'border-l-4 border-blue-500 bg-blue-50 text-blue-800',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    },
    success: {
      solid: 'bg-green-500 text-white',
      subtle: 'bg-green-50 text-green-800',
      outline: 'border border-green-500 text-green-800',
      'left-accent': 'border-l-4 border-green-500 bg-green-50 text-green-800',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    warning: {
      solid: 'bg-amber-500 text-white',
      subtle: 'bg-amber-50 text-amber-800',
      outline: 'border border-amber-500 text-amber-800',
      'left-accent': 'border-l-4 border-amber-500 bg-amber-50 text-amber-800',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
    },
    error: {
      solid: 'bg-red-500 text-white',
      subtle: 'bg-red-50 text-red-800',
      outline: 'border border-red-500 text-red-800',
      'left-accent': 'border-l-4 border-red-500 bg-red-50 text-red-800',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      ),
    },
  };

  return (
    <div
      className={`
        rounded-md p-4
        ${statusStyles[status][variant]}
        ${className}
      `}
      role="alert"
    >
      <div className="flex">
        {withIcon && (
          <div className="flex-shrink-0 mr-3">
            {statusStyles[status].icon}
          </div>
        )}
        <div className="flex-grow">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <div className={`text-sm ${!title ? 'font-medium' : ''}`}>
            {children}
          </div>
        </div>
        {isDismissible && onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                className={`
                  inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${variant === 'solid' 
                    ? 'bg-white bg-opacity-25 hover:bg-opacity-30 focus:ring-offset-blue-600' 
                    : `${status}-100 hover:bg-${status}-200 focus:ring-${status}-500`}
                `}
                onClick={onClose}
              >
                <span className="sr-only">Dismiss</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;