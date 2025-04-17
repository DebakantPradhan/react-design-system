import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./Input-xErcTqY9.js";import"./index-D4lIrffr.js";const A=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),H=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),_={title:"Data Entry/Input",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Input Component

Input fields allow users to enter and edit text.

## Usage
Input fields enable user input and data collection. They can be styled with various states and appearances.

## Accessibility
- Always use proper labels
- Provide error messages when validation fails
- Support keyboard navigation
- Include helper text for context
        `}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the input field"},variant:{control:{type:"select"},options:["outline","filled","flushed","unstyled"],description:"Visual style of the input"},label:{control:"text",description:"Label for the input field"},disabled:{control:"boolean",description:"Disables the input"},isLoading:{control:"boolean",description:"Shows a loading indicator"},error:{control:"text",description:"Error message to display"},helperText:{control:"text",description:"Helper text below the input"},fullWidth:{control:"boolean",description:"Makes the input take full width"},placeholder:{control:"text",description:"Placeholder text"}}},r={args:{placeholder:"Enter text...",label:"Default Input"}},l={args:{label:"Email Address",placeholder:"your-email@example.com",type:"email"}},s={args:{label:"Password",type:"password",helperText:"Password must be at least 8 characters long."}},t={args:{label:"Username",value:"user@",error:"Username must not contain special characters."}},o={args:{label:"Disabled Input",value:"This field cannot be edited",disabled:!0}},n={render:()=>e.jsxs("div",{className:"flex flex-col space-y-4 w-64",children:[e.jsx(a,{label:"Search",placeholder:"Search...",startIcon:e.jsx(A,{})}),e.jsx(a,{label:"Email",placeholder:"your-email@example.com",startIcon:e.jsx(H,{})})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col space-y-4 w-64",children:[e.jsx(a,{label:"Outline (Default)",variant:"outline",placeholder:"Outline variant"}),e.jsx(a,{label:"Filled",variant:"filled",placeholder:"Filled variant"}),e.jsx(a,{label:"Flushed",variant:"flushed",placeholder:"Flushed variant"}),e.jsx(a,{label:"Unstyled",variant:"unstyled",placeholder:"Unstyled variant"})]})},c={render:()=>e.jsxs("div",{className:"flex flex-col space-y-4 w-64",children:[e.jsx(a,{label:"Small",size:"sm",placeholder:"Small input"}),e.jsx(a,{label:"Medium (Default)",size:"md",placeholder:"Medium input"}),e.jsx(a,{label:"Large",size:"lg",placeholder:"Large input"})]})},d={args:{label:"Loading State",isLoading:!0,placeholder:"Loading..."}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Default Input'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,x,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'your-email@example.com',
    type: 'email'
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Password must be at least 8 characters long.'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,w,I;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    value: 'user@',
    error: 'Username must not contain special characters.'
  }
}`,...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var S,j,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    value: 'This field cannot be edited',
    disabled: true
  }
}`,...(L=(j=o.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var D,E,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-64">
      <Input label="Search" placeholder="Search..." startIcon={<SearchIcon />} />
      <Input label="Email" placeholder="your-email@example.com" startIcon={<EmailIcon />} />
    </div>
}`,...(z=(E=n.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var k,W,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-64">
      <Input label="Outline (Default)" variant="outline" placeholder="Outline variant" />
      <Input label="Filled" variant="filled" placeholder="Filled variant" />
      <Input label="Flushed" variant="flushed" placeholder="Flushed variant" />
      <Input label="Unstyled" variant="unstyled" placeholder="Unstyled variant" />
    </div>
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var U,F,M;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col space-y-4 w-64">
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium (Default)" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,P,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Loading State",
    isLoading: true,
    placeholder: "Loading..."
  }
}`,...(O=(P=d.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const R=["Default","WithLabel","WithHelperText","WithError","Disabled","WithIcons","Variants","Sizes","Loading"];export{r as Default,o as Disabled,d as Loading,c as Sizes,i as Variants,t as WithError,s as WithHelperText,n as WithIcons,l as WithLabel,R as __namedExportsOrder,_ as default};
