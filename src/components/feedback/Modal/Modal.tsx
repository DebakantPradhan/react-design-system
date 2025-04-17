import React, { useEffect } from 'react';

export interface ModalProps {
  /** Whether the modal is visible */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** The title of the modal */
  title?: React.ReactNode;
  /** The content of the modal */
  children: React.ReactNode;
  /** The actions/buttons in the modal footer */
  footer?: React.ReactNode;
  /** The size of the modal */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether to close when clicking outside */
  closeOnOverlayClick?: boolean;
  /** Whether to close when pressing Escape key */
  closeOnEsc?: boolean;
  /** Whether to center the modal vertically */
  isCentered?: boolean;
  /** Whether to show a close button */
  showCloseButton?: boolean;
}

/**
 * Modal dialog component for important information or actions
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  isCentered = true,
  showCloseButton = true,
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (closeOnEsc && isOpen && event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      // Restore scrolling when modal closes
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, closeOnEsc, onClose]);
  
  if (!isOpen) return null;
  
  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full m-4',
  };
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close only if the click was directly on the overlay (not its children)
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        aria-hidden="true"
      ></div>
      
      {/* Modal */}
      <div 
        className={`flex ${isCentered ? 'items-center' : 'items-start'} justify-center min-h-screen p-4 text-center sm:p-0`}
        onClick={handleOverlayClick}
      >
        <div 
          className={`
            relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-full
            ${sizeClasses[size]}
          `}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="px-4 pt-5 pb-4 sm:px-6 sm:pt-6 border-b border-gray-200 flex justify-between items-center">
              {title && (
                <h3 className="text-lg font-medium text-gray-900" id="modal-title">
                  {title}
                </h3>
              )}
              
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg 
                    className="h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="px-4 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-4">
            {children}
          </div>
          
          {/* Footer */}
          {footer && (
            <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-50 border-t border-gray-200">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;