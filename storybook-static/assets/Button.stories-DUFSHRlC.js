import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./Input-xErcTqY9.js";import"./index-D4lIrffr.js";const G={title:"Data Entry/Button",component:n,parameters:{layout:"centered",docs:{description:{component:`
# Button Component

Buttons allow users to take actions with a single click or tap.

## Usage
Use buttons to enable user interaction with your application. Different variants help communicate the level of emphasis.

## Accessibility
- Ensure proper contrast between button text and background
- Use the \`aria-label\` attribute when button text isn't descriptive enough
- Include focus states for keyboard navigation
        `}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Controls the size of the button"},variant:{control:{type:"select"},options:["solid","outline","ghost","link"],description:"Controls the visual style of the button"},colorScheme:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info"],description:"Controls the color scheme of the button"},rounded:{control:{type:"select"},options:["none","sm","md","lg","full"],description:"Controls the border radius of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},isLoading:{control:"boolean",description:"Whether the button is in a loading state"},fullWidth:{control:"boolean",description:"Whether the button should take the full width of its container"},children:{control:"text",description:"The content of the button"}}},o={args:{children:"Button",colorScheme:"primary",variant:"solid",size:"md"}},t={args:{children:"Button",colorScheme:"secondary",variant:"solid",size:"md"}},r={args:{children:"Button",colorScheme:"success",variant:"solid",size:"md"}},s={args:{children:"Button",colorScheme:"danger",variant:"solid",size:"md"}},i={render:()=>e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(n,{variant:"solid",children:"Solid"}),e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"ghost",children:"Ghost"}),e.jsx(n,{variant:"link",children:"Link"})]})},a={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(n,{size:"xs",children:"Extra Small"}),e.jsx(n,{size:"sm",children:"Small"}),e.jsx(n,{size:"md",children:"Medium"}),e.jsx(n,{size:"lg",children:"Large"}),e.jsx(n,{size:"xl",children:"Extra Large"})]})},c={args:{children:"Loading",isLoading:!0}},d={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(n,{leftIcon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),e.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),e.jsx("polyline",{points:"7 3 7 8 15 8"})]}),children:"Left Icon"}),e.jsx(n,{rightIcon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]}),children:"Right Icon"})]})})},l={render:()=>e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(n,{rounded:"none",children:"Square"}),e.jsx(n,{rounded:"sm",children:"Small radius"}),e.jsx(n,{rounded:"md",children:"Medium radius"}),e.jsx(n,{rounded:"lg",children:"Large radius"}),e.jsx(n,{rounded:"full",children:"Fully rounded"})]})};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    colorScheme: 'primary',
    variant: 'solid',
    size: 'md'
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    colorScheme: 'secondary',
    variant: 'solid',
    size: 'md'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,B,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    colorScheme: 'success',
    variant: 'solid',
    size: 'md'
  }
}`,...(y=(B=r.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var f,j,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    colorScheme: 'danger',
    variant: 'solid',
    size: 'md'
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,k,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex space-x-4">
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var b,z,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
}`,...(I=(z=a.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var N,W,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    isLoading: true
  }
}`,...(C=(W=c.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var E,M,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex space-x-4">
        <Button leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>}>
          Left Icon
        </Button>
        <Button rightIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>}>
          Right Icon
        </Button>
      </div>
    </div>
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var D,V,O;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex space-x-4">
      <Button rounded="none">Square</Button>
      <Button rounded="sm">Small radius</Button>
      <Button rounded="md">Medium radius</Button>
      <Button rounded="lg">Large radius</Button>
      <Button rounded="full">Fully rounded</Button>
    </div>
}`,...(O=(V=l.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const H=["Primary","Secondary","Success","Danger","Variants","Sizes","Loading","WithIcons","Roundedness"];export{s as Danger,c as Loading,o as Primary,l as Roundedness,t as Secondary,a as Sizes,r as Success,i as Variants,d as WithIcons,H as __namedExportsOrder,G as default};
