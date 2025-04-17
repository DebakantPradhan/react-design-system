import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../components/feedback';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Alert Component

Alerts are used to communicate a state that affects a system, feature or page.

## Usage
Use alerts to display short, important messages that attract the user's attention without interrupting their work.

## Accessibility
- Use appropriate ARIA roles
- Ensure sufficient color contrast
- Don't rely on color alone to convey information
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the alert'
    },
    children: {
      control: 'text',
      description: 'Content of the alert'
    },
    status: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Type of the alert'
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'subtle', 'outline'],
      description: 'Visual style of the alert'
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the alert is dismissed'
    }
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    title: 'Information',
    children: 'This is an informational alert to provide guidance.',
    status: 'info'
  }
};

export const Success: Story = {
  args: {
    title: 'Success',
    children: 'Your profile has been updated successfully.',
    status: 'success'
  }
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    children: 'Your account is about to exceed its storage limit.',
    status: 'warning'
  }
};

export const Error: Story = {
  args: {
    title: 'Error',
    children: 'There was an error processing your request.',
    status: 'error'
  }
};

export const WithCloseButton: Story = {
  args: {
    title: 'Dismissible Alert',
    children: 'You can close this alert by clicking the X button.',
    status: 'info',
    onClose: () => console.log('Alert closed')
  }
};

export const Variants: Story = {
  args: { children: 'Default content' },
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Alert 
        title="Solid Variant" 
        status="info" 
        variant="solid" 
      >
        This alert uses the solid variant style.
      </Alert>
      <Alert 
        title="Subtle Variant" 
        status="info" 
        variant="subtle" 
      >
        This alert uses the subtle variant style.
      </Alert>
      <Alert 
        title="Outline Variant" 
        status="info" 
        variant="outline" 
      >
        This alert uses the outline variant style.
      </Alert>
    </div>
  ),
};

export const TypesShowcase: Story = {
  args: { children: 'Default content' },
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Alert 
        title="Information" 
        status="info" 
      >
        This is an informational alert to provide guidance.
      </Alert>
      <Alert 
        title="Success" 
        status="success" 
      >
        Your profile has been updated successfully.
      </Alert>
      <Alert 
        title="Warning" 
        status="warning" 
      >
        Your account is about to exceed its storage limit.
      </Alert>
      <Alert 
        title="Error" 
        status="error" 
      >
        There was an error processing your request.
      </Alert>
    </div>
  ),
};

export const WithRichContent: Story = {
  args: { children: 'Default content' },
  render: () => (
    <Alert
      title="Update Available"
      status="info"
    >
      <div className="mt-2">
        <p>A new version is available. See what's new in version 2.0:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Improved performance</li>
          <li>New dark mode theme</li>
          <li>Bug fixes and improvements</li>
        </ul>
        <div className="mt-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm">
            Update Now
          </button>
        </div>
      </div>
    </Alert>
  ),
};

export const CustomStyling: Story = {
  args: { children: 'Default content' },
  render: () => (
    <Alert
      title="Custom Styled Alert"
      status="success"
      className="border-l-4 border-green-600 bg-gradient-to-r from-green-50 to-white"
    >
      This alert has custom styling applied using Tailwind utility classes.
    </Alert>
  ),
};

export const CompactAlert: Story = {
  args: { children: 'Default content' },
  render: () => (
    <div className="space-y-2 w-full max-w-md">
      <Alert
        status="info"
        className="py-2"
      >
        This is a compact alert without a title.
      </Alert>
      <Alert
        status="success"
        className="py-2"
      >
        Your changes have been saved.
      </Alert>
      <Alert
        status="warning"
        className="py-2"
      >
        Session expires in 5 minutes.
      </Alert>
      <Alert
        status="error"
        className="py-2"
      >
        Failed to save changes.
      </Alert>
    </div>
  ),
};