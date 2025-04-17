import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/typography';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Text Component

Text component is used for rendering paragraphs and other text content.

## Usage
Use the Text component for body text, captions, labels, and other text content.

## Accessibility
- Ensure proper color contrast for readability
- Use appropriate font sizes for different use cases
- Consider line height and spacing for readability
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'div', 'label'],
      description: 'The element to render as'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Font size'
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight'
    },
    variant: {
      control: { type: 'select' },
      options: ['body', 'caption', 'helper', 'code'],
      description: 'Text style variant'
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate text with ellipsis'
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment'
    },
    color: {
      control: 'color',
      description: 'Text color'
    },
    italic: {
      control: 'boolean',
      description: 'Whether to italicize the text'
    },
    underline: {
      control: 'boolean',
      description: 'Whether to underline the text'
    },
    children: {
      control: 'text',
      description: 'Text content'
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a sample text paragraph',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3">
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="md">Medium Text (Default)</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-3">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-3">
      <Text variant="body">Body text for regular paragraphs</Text>
      <Text variant="caption">Caption text for image captions and small texts</Text>
      <Text variant="helper">Helper text for forms and additional information</Text>
      <Text variant="code">Code variant for displaying code snippets</Text>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div className="space-y-5 max-w-md">
      <Text align="left" className="border border-dashed border-gray-300 p-2">
        This text is aligned to the left. This is typically the default alignment for most text.
      </Text>
      <Text align="center" className="border border-dashed border-gray-300 p-2">
        This text is centered. Use this for headings or important text that should be highlighted.
      </Text>
      <Text align="right" className="border border-dashed border-gray-300 p-2">
        This text is aligned to the right. This can be useful for specific UI elements.
      </Text>
      <Text align="justify" className="border border-dashed border-gray-300 p-2">
        This text is justified. This creates a cleaner edge on both sides of the text block, which can be good for longer content sections in multiple paragraphs.
      </Text>
    </div>
  ),
};

export const Styling: Story = {
  render: () => (
    <div className="space-y-3">
      <Text>Normal text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text italic underline>Italic and underlined text</Text>
      <Text color="#2563EB">Colored text</Text>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div className="max-w-xs">
      <Text truncate>
        This is a very long text that will be truncated because it doesn't fit in the container and we've applied the truncate prop to make it show an ellipsis.
      </Text>
    </div>
  ),
};

export const DifferentElements: Story = {
  render: () => (
    <div className="space-y-3">
      <Text as="p">This is rendered as a paragraph</Text>
      <Text as="span">This is rendered as a span</Text>
      <Text as="div">This is rendered as a div</Text>
      <div>
        <Text as="label" htmlFor="example">This is rendered as a label</Text>
        <input id="example" className="ml-2 border border-gray-300 rounded px-2 py-1" />
      </div>
    </div>
  ),
};