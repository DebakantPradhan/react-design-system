import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as a}from"./Text-Db-5sZMh.js";const R={title:"Typography/Heading",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Heading Component

Headings are used to create a hierarchical structure for your content.

## Usage
Use headings to create clear content hierarchy. Choose the appropriate level (h1-h6) based on the document structure.

## Accessibility
- Maintain proper heading hierarchy (h1 → h2 → h3...)
- Don't skip heading levels
- Use only one h1 per page
- Ensure sufficient color contrast
        `}}},tags:["autodocs"],argTypes:{as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],description:"The heading level to render"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl"],description:"Custom size override"},weight:{control:{type:"select"},options:["light","normal","medium","semibold","bold","extrabold"],description:"Font weight"},truncate:{control:"boolean",description:"Whether to truncate text with ellipsis"},align:{control:{type:"select"},options:["left","center","right"],description:"Text alignment"},color:{control:"color",description:"Text color"},children:{control:"text",description:"Heading content"}}},s={args:{as:"h1",children:"Heading 1"}},i={args:{as:"h2",children:"Heading 2"}},r={args:{as:"h3",children:"Heading 3"}},n={args:{as:"h4",children:"Heading 4"}},d={args:{as:"h2"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{as:"h2",weight:"light",children:"Light Heading"}),e.jsx(a,{as:"h2",weight:"normal",children:"Normal Heading"}),e.jsx(a,{as:"h2",weight:"medium",children:"Medium Heading"}),e.jsx(a,{as:"h2",weight:"semibold",children:"Semibold Heading"}),e.jsx(a,{as:"h2",weight:"bold",children:"Bold Heading"}),e.jsx(a,{as:"h2",weight:"extrabold",children:"Extra Bold Heading"})]})},o={args:{as:"h2"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{as:"h2",size:"xs",children:"Extra Small Size"}),e.jsx(a,{as:"h2",size:"sm",children:"Small Size"}),e.jsx(a,{as:"h2",size:"md",children:"Medium Size"}),e.jsx(a,{as:"h2",size:"lg",children:"Large Size"}),e.jsx(a,{as:"h2",size:"xl",children:"Extra Large Size"}),e.jsx(a,{as:"h2",size:"2xl",children:"2X Large Size"}),e.jsx(a,{as:"h2",size:"3xl",children:"3X Large Size"}),e.jsx(a,{as:"h2",size:"4xl",children:"4X Large Size"})]})},t={args:{as:"h3"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{as:"h3",align:"left",children:"Left Aligned"}),e.jsx(a,{as:"h3",align:"center",children:"Center Aligned"}),e.jsx(a,{as:"h3",align:"right",children:"Right Aligned"})]})},c={args:{as:"h3"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{as:"h3",color:"#2563EB",children:"Primary Color"}),e.jsx(a,{as:"h3",color:"#16A34A",children:"Success Color"}),e.jsx(a,{as:"h3",color:"#DC2626",children:"Danger Color"})]})},l={args:{as:"h1"},render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{as:"h1",children:"Page Title (H1)"}),e.jsx(a,{as:"h2",children:"Section Title (H2)"}),e.jsxs("div",{className:"ml-4",children:[e.jsx(a,{as:"h3",children:"Subsection Title (H3)"}),e.jsxs("div",{className:"ml-4",children:[e.jsx(a,{as:"h4",children:"Nested Title (H4)"}),e.jsxs("div",{className:"ml-4",children:[e.jsx(a,{as:"h5",children:"Deep Nested Title (H5)"}),e.jsx("div",{className:"ml-4",children:e.jsx(a,{as:"h6",children:"Deepest Level (H6)"})})]})]})]})]})};var g,h,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    as: 'h1',
    children: 'Heading 1'
  }
}`,...(m=(h=s.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var H,p,x;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    as: 'h2',
    children: 'Heading 2'
  }
}`,...(x=(p=i.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,S,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    as: 'h3',
    children: 'Heading 3'
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,z,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    as: 'h4',
    children: 'Heading 4'
  }
}`,...(y=(z=n.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var N,C,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    as: 'h2'
  },
  // Provide required 'as' property
  render: () => <div className="space-y-4">
      <Heading as="h2" weight="light">Light Heading</Heading>
      <Heading as="h2" weight="normal">Normal Heading</Heading>
      <Heading as="h2" weight="medium">Medium Heading</Heading>
      <Heading as="h2" weight="semibold">Semibold Heading</Heading>
      <Heading as="h2" weight="bold">Bold Heading</Heading>
      <Heading as="h2" weight="extrabold">Extra Bold Heading</Heading>
    </div>
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,b,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    as: 'h2'
  },
  // Provide required 'as' property
  render: () => <div className="space-y-4">
      <Heading as="h2" size="xs">Extra Small Size</Heading>
      <Heading as="h2" size="sm">Small Size</Heading>
      <Heading as="h2" size="md">Medium Size</Heading>
      <Heading as="h2" size="lg">Large Size</Heading>
      <Heading as="h2" size="xl">Extra Large Size</Heading>
      <Heading as="h2" size="2xl">2X Large Size</Heading>
      <Heading as="h2" size="3xl">3X Large Size</Heading>
      <Heading as="h2" size="4xl">4X Large Size</Heading>
    </div>
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var A,f,E;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    as: 'h3'
  },
  // Provide required 'as' property
  render: () => <div className="space-y-4">
      <Heading as="h3" align="left">Left Aligned</Heading>
      <Heading as="h3" align="center">Center Aligned</Heading>
      <Heading as="h3" align="right">Right Aligned</Heading>
    </div>
}`,...(E=(f=t.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var D,P,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    as: 'h3'
  },
  // Provide required 'as' property
  render: () => <div className="space-y-4">
      <Heading as="h3" color="#2563EB">Primary Color</Heading>
      <Heading as="h3" color="#16A34A">Success Color</Heading>
      <Heading as="h3" color="#DC2626">Danger Color</Heading>
    </div>
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var X,q,M;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    as: 'h1'
  },
  // Provide required 'as' property
  render: () => <div className="space-y-3">
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
}`,...(M=(q=l.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const U=["HeadingOne","HeadingTwo","HeadingThree","HeadingFour","CustomWeight","CustomSizes","Alignment","ColoredHeadings","HeadingHierarchy"];export{t as Alignment,c as ColoredHeadings,o as CustomSizes,d as CustomWeight,n as HeadingFour,l as HeadingHierarchy,s as HeadingOne,r as HeadingThree,i as HeadingTwo,U as __namedExportsOrder,R as default};
