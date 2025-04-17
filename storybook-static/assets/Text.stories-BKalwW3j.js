import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./Text-Db-5sZMh.js";const F={title:"Typography/Text",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Text Component

Text component is used for rendering paragraphs and other text content.

## Usage
Use the Text component for body text, captions, labels, and other text content.

## Accessibility
- Ensure proper color contrast for readability
- Use appropriate font sizes for different use cases
- Consider line height and spacing for readability
        `}}},tags:["autodocs"],argTypes:{as:{control:{type:"select"},options:["p","span","div","label"],description:"The element to render as"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Font size"},weight:{control:{type:"select"},options:["light","normal","medium","semibold","bold"],description:"Font weight"},variant:{control:{type:"select"},options:["body","caption","helper","code"],description:"Text style variant"},truncate:{control:"boolean",description:"Whether to truncate text with ellipsis"},align:{control:{type:"select"},options:["left","center","right","justify"],description:"Text alignment"},color:{control:"color",description:"Text color"},italic:{control:"boolean",description:"Whether to italicize the text"},underline:{control:"boolean",description:"Whether to underline the text"},children:{control:"text",description:"Text content"}}},r={args:{children:"This is a sample text paragraph"}},s={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{size:"xs",children:"Extra Small Text"}),e.jsx(t,{size:"sm",children:"Small Text"}),e.jsx(t,{size:"md",children:"Medium Text (Default)"}),e.jsx(t,{size:"lg",children:"Large Text"}),e.jsx(t,{size:"xl",children:"Extra Large Text"})]})},a={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{weight:"light",children:"Light weight text"}),e.jsx(t,{weight:"normal",children:"Normal weight text"}),e.jsx(t,{weight:"medium",children:"Medium weight text"}),e.jsx(t,{weight:"semibold",children:"Semibold weight text"}),e.jsx(t,{weight:"bold",children:"Bold weight text"})]})},i={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"body",children:"Body text for regular paragraphs"}),e.jsx(t,{variant:"caption",children:"Caption text for image captions and small texts"}),e.jsx(t,{variant:"helper",children:"Helper text for forms and additional information"}),e.jsx(t,{variant:"code",children:"Code variant for displaying code snippets"})]})},n={render:()=>e.jsxs("div",{className:"space-y-5 max-w-md",children:[e.jsx(t,{align:"left",className:"border border-dashed border-gray-300 p-2",children:"This text is aligned to the left. This is typically the default alignment for most text."}),e.jsx(t,{align:"center",className:"border border-dashed border-gray-300 p-2",children:"This text is centered. Use this for headings or important text that should be highlighted."}),e.jsx(t,{align:"right",className:"border border-dashed border-gray-300 p-2",children:"This text is aligned to the right. This can be useful for specific UI elements."}),e.jsx(t,{align:"justify",className:"border border-dashed border-gray-300 p-2",children:"This text is justified. This creates a cleaner edge on both sides of the text block, which can be good for longer content sections in multiple paragraphs."})]})},o={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{children:"Normal text"}),e.jsx(t,{italic:!0,children:"Italic text"}),e.jsx(t,{underline:!0,children:"Underlined text"}),e.jsx(t,{italic:!0,underline:!0,children:"Italic and underlined text"}),e.jsx(t,{color:"#2563EB",children:"Colored text"})]})},d={render:()=>e.jsx("div",{className:"max-w-xs",children:e.jsx(t,{truncate:!0,children:"This is a very long text that will be truncated because it doesn't fit in the container and we've applied the truncate prop to make it show an ellipsis."})})},l={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{as:"p",children:"This is rendered as a paragraph"}),e.jsx(t,{as:"span",children:"This is rendered as a span"}),e.jsx(t,{as:"div",children:"This is rendered as a div"}),e.jsxs("div",{children:[e.jsx(t,{as:"label",htmlFor:"example",children:"This is rendered as a label"}),e.jsx("input",{id:"example",className:"ml-2 border border-gray-300 rounded px-2 py-1"})]})]})};var c,x,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a sample text paragraph'
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text size="xs">Extra Small Text</Text>
      <Text size="sm">Small Text</Text>
      <Text size="md">Medium Text (Default)</Text>
      <Text size="lg">Large Text</Text>
      <Text size="xl">Extra Large Text</Text>
    </div>
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var T,u,b;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var f,y,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text variant="body">Body text for regular paragraphs</Text>
      <Text variant="caption">Caption text for image captions and small texts</Text>
      <Text variant="helper">Helper text for forms and additional information</Text>
      <Text variant="code">Code variant for displaying code snippets</Text>
    </div>
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,w,N;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-5 max-w-md">
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
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,z,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text>Normal text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text italic underline>Italic and underlined text</Text>
      <Text color="#2563EB">Colored text</Text>
    </div>
}`,...(E=(z=o.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var U,C,B;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="max-w-xs">
      <Text truncate>
        This is a very long text that will be truncated because it doesn't fit in the container and we've applied the truncate prop to make it show an ellipsis.
      </Text>
    </div>
}`,...(B=(C=d.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var D,I,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text as="p">This is rendered as a paragraph</Text>
      <Text as="span">This is rendered as a span</Text>
      <Text as="div">This is rendered as a div</Text>
      <div>
        <Text as="label" htmlFor="example">This is rendered as a label</Text>
        <input id="example" className="ml-2 border border-gray-300 rounded px-2 py-1" />
      </div>
    </div>
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const M=["Default","Sizes","Weights","Variants","Alignments","Styling","Truncated","DifferentElements"];export{n as Alignments,r as Default,l as DifferentElements,s as Sizes,o as Styling,d as Truncated,i as Variants,a as Weights,M as __namedExportsOrder,F as default};
