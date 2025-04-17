# devk-react-ui

A comprehensive React component library built with TypeScript and Tailwind CSS, documented with Storybook. This design system is suitable for enterprise applications, featuring customizable typography, data entry, and feedback components.

## Demo

Check out the live Storybook demo: [ui-storybook-v1.vercel.app](https://ui-storybook-v1.vercel.app)

## Installation

```bash
npm install devk-react-ui
```

## Usage

Import the pre-bundled styles and components:

```jsx
// In your main application file
import 'devk-react-ui/styles.css';
import { Button, Heading, Alert } from 'devk-react-ui';

function App() {
  return (
    <div>
      <Heading level="h1">Welcome to My App</Heading>
      <p>This is a sample application using the design system</p>
      <Button variant="solid" colorScheme="primary">Click Me</Button>
      <Alert status="success">Operation completed successfully!</Alert>
    </div>
  );
}
```

## Component Categories

### Typography

The typography system includes components for creating consistent text hierarchies:

```jsx
// Headings (h1-h6)
<Heading level="h1">Heading Level 1</Heading>
<Heading level="h2" variant="display">Display Heading</Heading>
<Heading level="h3" align="center">Centered Heading</Heading>

// Text (paragraphs, captions, labels, helper text)
<Text>Regular body text</Text>
<Text variant="caption">Caption text</Text>
<Text variant="label">Form Label</Text>
<Text variant="helper" size="sm">Helper text providing guidance</Text>
```

#### Heading Props
- `level`: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
- `variant`: "display" | "default" | "subtle"
- `align`: "left" | "center" | "right"

#### Text Props
- `variant`: "body" | "caption" | "label" | "helper"
- `weight`: "regular" | "medium" | "bold"
- `size`: "xs" | "sm" | "md" | "lg"
- `as`: "p" | "span" | "div" 

### Data Entry Components

#### Button

The Button component supports multiple variants, sizes, and color schemes:

```jsx
// Basic usage
<Button>Default Button</Button>

// Variations
<Button variant="solid" colorScheme="primary">Primary</Button>
<Button variant="outline" colorScheme="secondary">Secondary</Button>
<Button variant="ghost" colorScheme="danger">Ghost</Button>
<Button variant="link" colorScheme="info">Link</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button isLoading>Loading</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

#### Button Props
- `variant`: "solid" | "outline" | "ghost" | "link"
- `colorScheme`: "primary" | "secondary" | "success" | "danger" | "warning" | "info"
- `size`: "xs" | "sm" | "md" | "lg" | "xl"
- `rounded`: "none" | "sm" | "md" | "lg" | "full"
- `isLoading`: boolean
- `disabled`: boolean
- `fullWidth`: boolean
- `leftIcon`: React node
- `rightIcon`: React node

### Feedback Components

#### Alert

The Alert component is used to display important messages to users:

```jsx
// Basic usage
<Alert status="info">This is an informational alert.</Alert>

// With title
<Alert status="success" title="Success">Operation completed successfully!</Alert>

// Variants
<Alert variant="subtle" status="warning">Subtle variant</Alert>
<Alert variant="solid" status="error">Solid variant</Alert>
<Alert variant="left-accent" status="info">Left accent variant</Alert>
<Alert variant="top-accent" status="success">Top accent variant</Alert>

// With close button
<Alert status="info" onClose={() => console.log('Alert closed')}>
  Closable alert
</Alert>
```

#### Alert Props
- `status`: "info" | "success" | "warning" | "error"
- `variant`: "subtle" | "solid" | "left-accent" | "top-accent"
- `title`: string
- `onClose`: function
- `icon`: React node

## Accessibility

Components in this design system are built with accessibility in mind:

- All components support keyboard navigation
- ARIA attributes are used appropriately
- Color contrast ratios meet WCAG standards
- Components scale well across different screen sizes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build the library
npm run build
```

### Building for Production

```bash
# Build the component library
npm run build

# Build Storybook for deployment
npm run build-storybook
```

## Advanced Customization with Tailwind

If you need more customization options, you can configure Tailwind CSS in your project:

```bash
# Install peer dependencies
npm install tailwindcss postcss autoprefixer postcss-import
npx tailwindcss init -p
```

Configure your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/devk-react-ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Ensure your `postcss.config.js` includes:

```js
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

This approach allows you to customize the design system with your own theme configuration.
