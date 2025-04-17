import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../components/typography';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Heading Component

Headings are used to create a hierarchical structure for your content.

## Usage
Use headings to create clear content hierarchy. Choose the appropriate level (h1-h6) based on the document structure.

## Accessibility
- Maintain proper heading hierarchy (h1 → h2 → h3...)
- Don't skip heading levels
- Use only one h1 per page
- Ensure sufficient color contrast
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'The heading level to render'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      description: 'Custom size override'
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Font weight'
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate text with ellipsis'
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment'
    },
    color: {
      control: 'color',
      description: 'Text color'
    },
    children: {
      control: 'text',
      description: 'Heading content'
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingOne: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1',
  },
};

export const HeadingTwo: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2',
  },
};

export const HeadingThree: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3',
  },
};

export const HeadingFour: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4',
  },
};

export const CustomWeight: Story = {
  args: { as: 'h2' }, // Provide required 'as' property
  render: () => (
    <div className="space-y-4">
      <Heading as="h2" weight="light">Light Heading</Heading>
      <Heading as="h2" weight="normal">Normal Heading</Heading>
      <Heading as="h2" weight="medium">Medium Heading</Heading>
      <Heading as="h2" weight="semibold">Semibold Heading</Heading>
      <Heading as="h2" weight="bold">Bold Heading</Heading>
      <Heading as="h2" weight="extrabold">Extra Bold Heading</Heading>
    </div>
  ),
};

export const CustomSizes: Story = {
  args: { as: 'h2' }, // Provide required 'as' property
  render: () => (
    <div className="space-y-4">
      <Heading as="h2" size="xs">Extra Small Size</Heading>
      <Heading as="h2" size="sm">Small Size</Heading>
      <Heading as="h2" size="md">Medium Size</Heading>
      <Heading as="h2" size="lg">Large Size</Heading>
      <Heading as="h2" size="xl">Extra Large Size</Heading>
      <Heading as="h2" size="2xl">2X Large Size</Heading>
      <Heading as="h2" size="3xl">3X Large Size</Heading>
      <Heading as="h2" size="4xl">4X Large Size</Heading>
    </div>
  ),
};

export const Alignment: Story = {
  args: { as: 'h3' }, // Provide required 'as' property
  render: () => (
    <div className="space-y-4">
      <Heading as="h3" align="left">Left Aligned</Heading>
      <Heading as="h3" align="center">Center Aligned</Heading>
      <Heading as="h3" align="right">Right Aligned</Heading>
    </div>
  ),
};

export const ColoredHeadings: Story = {
  args: { as: 'h3' }, // Provide required 'as' property
  render: () => (
    <div className="space-y-4">
      <Heading as="h3" color="#2563EB">Primary Color</Heading>
      <Heading as="h3" color="#16A34A">Success Color</Heading>
      <Heading as="h3" color="#DC2626">Danger Color</Heading>
    </div>
  ),
};

export const HeadingHierarchy: Story = {
  args: { as: 'h1' }, // Provide required 'as' property
  render: () => (
    <div className="space-y-3">
      <Heading as="h1">Page Title (H1)</Heading>
      <Heading as="h2">Section Title (H2)</Heading>
      <div className="ml-4">
        <Heading as="h3">Subsection Title (H3)</Heading>
        <div className="ml-4">
          <Heading as="h4">Nested Title (H4)</Heading>
          <div className="ml-4">
            <Heading as="h5">Deep Nested Title (H5)</Heading>
            <div className="ml-4">
              <Heading as="h6">Deepest Level (H6)</Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};