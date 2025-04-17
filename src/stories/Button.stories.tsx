import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/data-entry';

const meta = {
  title: 'Data Entry/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

Buttons allow users to take actions with a single click or tap.

## Usage
Use buttons to enable user interaction with your application. Different variants help communicate the level of emphasis.

## Accessibility
- Ensure proper contrast between button text and background
- Use the \`aria-label\` attribute when button text isn't descriptive enough
- Include focus states for keyboard navigation
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Controls the size of the button' 
    },
    variant: { 
      control: { type: 'select' },
      options: ['solid', 'outline', 'ghost', 'link'],
      description: 'Controls the visual style of the button' 
    },
    colorScheme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Controls the color scheme of the button'
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Controls the border radius of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take the full width of its container'
    },
    children: { 
      control: 'text', 
      description: 'The content of the button' 
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    colorScheme: 'primary',
    variant: 'solid',
    size: 'md',
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    colorScheme: 'secondary',
    variant: 'solid',
    size: 'md',
  }
};

export const Success: Story = {
  args: {
    children: 'Button',
    colorScheme: 'success',
    variant: 'solid',
    size: 'md',
  }
};

export const Danger: Story = {
  args: {
    children: 'Button',
    colorScheme: 'danger',
    variant: 'solid',
    size: 'md',
  }
};

export const Variants: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: 'Loading',
    isLoading: true,
  }
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <Button
          leftIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
          }
        >
          Left Icon
        </Button>
        <Button
          rightIcon={
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          }
        >
          Right Icon
        </Button>
      </div>
    </div>
  ),
};

export const Roundedness: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Button rounded="none">Square</Button>
      <Button rounded="sm">Small radius</Button>
      <Button rounded="md">Medium radius</Button>
      <Button rounded="lg">Large radius</Button>
      <Button rounded="full">Fully rounded</Button>
    </div>
  ),
};