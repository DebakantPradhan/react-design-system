import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/data-entry';

// Creating icons for the examples
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const meta = {
  title: 'Data Entry/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Input Component

Input fields allow users to enter and edit text.

## Usage
Input fields enable user input and data collection. They can be styled with various states and appearances.

## Accessibility
- Always use proper labels
- Provide error messages when validation fails
- Support keyboard navigation
- Include helper text for context
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field'
    },
    variant: {
      control: { type: 'select' },
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      description: 'Visual style of the input'
    },
    label: {
      control: 'text',
      description: 'Label for the input field'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input'
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading indicator'
    },
    error: {
      control: 'text',
      description: 'Error message to display'
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the input take full width'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Default Input',
  }
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'your-email@example.com',
    type: 'email',
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Password must be at least 8 characters long.',
  }
};

export const WithError: Story = {
  args: {
    label: 'Username',
    value: 'user@',
    error: 'Username must not contain special characters.',
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    value: 'This field cannot be edited',
    disabled: true,
  }
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-64">
      <Input
        label="Search"
        placeholder="Search..."
        startIcon={<SearchIcon />}
      />
      <Input
        label="Email"
        placeholder="your-email@example.com"
        startIcon={<EmailIcon />}
      />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-64">
      <Input
        label="Outline (Default)"
        variant="outline"
        placeholder="Outline variant"
      />
      <Input
        label="Filled"
        variant="filled"
        placeholder="Filled variant"
      />
      <Input
        label="Flushed"
        variant="flushed"
        placeholder="Flushed variant"
      />
      <Input
        label="Unstyled"
        variant="unstyled"
        placeholder="Unstyled variant"
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4 w-64">
      <Input
        label="Small"
        size="sm"
        placeholder="Small input"
      />
      <Input
        label="Medium (Default)"
        size="md"
        placeholder="Medium input"
      />
      <Input
        label="Large"
        size="lg"
        placeholder="Large input"
      />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    label: "Loading State",
    isLoading: true,
    placeholder: "Loading...",
  }
};