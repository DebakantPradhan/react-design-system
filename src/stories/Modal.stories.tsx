import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../components/feedback';
import { Button } from '../components/data-entry';

const meta = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Modal Component

Modals are dialog overlays that prevent the user from interacting with the rest of the application until an action is taken.

## Usage
Use modals to focus user attention on important tasks or information that requires immediate action.

## Accessibility
- Set appropriate aria attributes
- Ensure keyboard navigation works correctly inside the modal
- When a modal opens, focus should move to the modal
- When the modal closes, focus should return to the element that opened it
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Header text for the modal'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Controls the width of the modal'
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is visible'
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the modal is closed'
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Whether to close the modal when Escape key is pressed'
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether to close the modal when clicking the overlay'
    },
    isCentered: {
      control: 'boolean',
      description: 'Whether to center the modal vertically'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button in the header'
    }
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

// Wrapper component to handle modal state
const ModalDemo = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...props}
      >
        {props.children || (
          <div>
            <p className="text-gray-700">
              This is the content of the modal dialog. You can put any content here.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: () => <ModalDemo title="Basic Modal" />,
};

export const WithFooter: Story = {
  args: {},
  render: () => (
    <ModalDemo 
      title="Modal with Footer"
      footer={
        <div className="flex justify-end space-x-4">
          <Button variant="outline" colorScheme="secondary">Cancel</Button>
          <Button>Submit</Button>
        </div>
      }
    />
  ),
};

export const Sizes: Story = {
  args: {},
  render: () => (
    <div className="space-y-4 flex flex-col items-center">
      {['sm', 'md', 'lg', 'xl', 'full'].map(size => (
        <ModalDemo 
          key={size}
          title={`${size.toUpperCase()} Modal`}
          size={size as any}
        >
          <p className="text-gray-700">
            This modal has <strong>{size}</strong> size
          </p>
        </ModalDemo>
      ))}
    </div>
  ),
};

export const Centered: Story = {
  args: {},
  render: () => (
    <ModalDemo 
      title="Centered Modal"
      isCentered={true}
    >
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Payment successful</h3>
        <p className="mt-2 text-sm text-gray-500">
          Your payment has been processed successfully.
        </p>
      </div>
    </ModalDemo>
  ),
};

export const FormModal: Story = {
  args: {},
  render: () => (
    <ModalDemo 
      title="Create Account"
      size="lg"
      footer={
        <div className="flex justify-end space-x-4">
          <Button variant="outline" colorScheme="secondary">Cancel</Button>
          <Button colorScheme="primary">Create Account</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
          />
        </div>
      </div>
    </ModalDemo>
  ),
};

export const ConfirmationModal: Story = {
  args: {},
  render: () => (
    <ModalDemo 
      title="Confirm Deletion"
      size="sm"
      isCentered={true}
      footer={
        <div className="flex justify-end space-x-4">
          <Button variant="outline" colorScheme="secondary">Cancel</Button>
          <Button colorScheme="danger">Delete</Button>
        </div>
      }
    >
      <div className="text-center sm:text-left">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Delete Item</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </ModalDemo>
  ),
};