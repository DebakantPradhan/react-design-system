import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as t}from"./Modal-CLldaZV9.js";import"./index-D4lIrffr.js";const H={title:"Feedback/Alert",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Alert Component

Alerts are used to communicate a state that affects a system, feature or page.

## Usage
Use alerts to display short, important messages that attract the user's attention without interrupting their work.

## Accessibility
- Use appropriate ARIA roles
- Ensure sufficient color contrast
- Don't rely on color alone to convey information
        `}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Title of the alert"},children:{control:"text",description:"Content of the alert"},status:{control:{type:"select"},options:["info","success","warning","error"],description:"Type of the alert"},variant:{control:{type:"select"},options:["solid","subtle","outline"],description:"Visual style of the alert"},onClose:{action:"closed",description:"Function called when the alert is dismissed"}}},s={args:{title:"Information",children:"This is an informational alert to provide guidance.",status:"info"}},r={args:{title:"Success",children:"Your profile has been updated successfully.",status:"success"}},a={args:{title:"Warning",children:"Your account is about to exceed its storage limit.",status:"warning"}},i={args:{title:"Error",children:"There was an error processing your request.",status:"error"}},n={args:{title:"Dismissible Alert",children:"You can close this alert by clicking the X button.",status:"info",onClose:()=>console.log("Alert closed")}},o={args:{children:"Default content"},render:()=>e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(t,{title:"Solid Variant",status:"info",variant:"solid",children:"This alert uses the solid variant style."}),e.jsx(t,{title:"Subtle Variant",status:"info",variant:"subtle",children:"This alert uses the subtle variant style."}),e.jsx(t,{title:"Outline Variant",status:"info",variant:"outline",children:"This alert uses the outline variant style."})]})},l={args:{children:"Default content"},render:()=>e.jsxs("div",{className:"space-y-4 w-full max-w-md",children:[e.jsx(t,{title:"Information",status:"info",children:"This is an informational alert to provide guidance."}),e.jsx(t,{title:"Success",status:"success",children:"Your profile has been updated successfully."}),e.jsx(t,{title:"Warning",status:"warning",children:"Your account is about to exceed its storage limit."}),e.jsx(t,{title:"Error",status:"error",children:"There was an error processing your request."})]})},c={args:{children:"Default content"},render:()=>e.jsx(t,{title:"Update Available",status:"info",children:e.jsxs("div",{className:"mt-2",children:[e.jsx("p",{children:"A new version is available. See what's new in version 2.0:"}),e.jsxs("ul",{className:"list-disc pl-5 mt-2",children:[e.jsx("li",{children:"Improved performance"}),e.jsx("li",{children:"New dark mode theme"}),e.jsx("li",{children:"Bug fixes and improvements"})]}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{className:"bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm",children:"Update Now"})})]})})},u={args:{children:"Default content"},render:()=>e.jsx(t,{title:"Custom Styled Alert",status:"success",className:"border-l-4 border-green-600 bg-gradient-to-r from-green-50 to-white",children:"This alert has custom styling applied using Tailwind utility classes."})},d={args:{children:"Default content"},render:()=>e.jsxs("div",{className:"space-y-2 w-full max-w-md",children:[e.jsx(t,{status:"info",className:"py-2",children:"This is a compact alert without a title."}),e.jsx(t,{status:"success",className:"py-2",children:"Your changes have been saved."}),e.jsx(t,{status:"warning",className:"py-2",children:"Session expires in 5 minutes."}),e.jsx(t,{status:"error",className:"py-2",children:"Failed to save changes."})]})};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    children: 'This is an informational alert to provide guidance.',
    status: 'info'
  }
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Success',
    children: 'Your profile has been updated successfully.',
    status: 'success'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,x,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    children: 'Your account is about to exceed its storage limit.',
    status: 'warning'
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,A,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Error',
    children: 'There was an error processing your request.',
    status: 'error'
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var N,j,T;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible Alert',
    children: 'You can close this alert by clicking the X button.',
    status: 'info',
    onClose: () => console.log('Alert closed')
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var C,D,Y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Default content'
  },
  render: () => <div className="space-y-4 w-full max-w-md">
      <Alert title="Solid Variant" status="info" variant="solid">
        This alert uses the solid variant style.
      </Alert>
      <Alert title="Subtle Variant" status="info" variant="subtle">
        This alert uses the subtle variant style.
      </Alert>
      <Alert title="Outline Variant" status="info" variant="outline">
        This alert uses the outline variant style.
      </Alert>
    </div>
}`,...(Y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var W,E,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Default content'
  },
  render: () => <div className="space-y-4 w-full max-w-md">
      <Alert title="Information" status="info">
        This is an informational alert to provide guidance.
      </Alert>
      <Alert title="Success" status="success">
        Your profile has been updated successfully.
      </Alert>
      <Alert title="Warning" status="warning">
        Your account is about to exceed its storage limit.
      </Alert>
      <Alert title="Error" status="error">
        There was an error processing your request.
      </Alert>
    </div>
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var V,U,k;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Default content'
  },
  render: () => <Alert title="Update Available" status="info">
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
}`,...(k=(U=c.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var q,B,F;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Default content'
  },
  render: () => <Alert title="Custom Styled Alert" status="success" className="border-l-4 border-green-600 bg-gradient-to-r from-green-50 to-white">
      This alert has custom styling applied using Tailwind utility classes.
    </Alert>
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var R,O,X;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Default content'
  },
  render: () => <div className="space-y-2 w-full max-w-md">
      <Alert status="info" className="py-2">
        This is a compact alert without a title.
      </Alert>
      <Alert status="success" className="py-2">
        Your changes have been saved.
      </Alert>
      <Alert status="warning" className="py-2">
        Session expires in 5 minutes.
      </Alert>
      <Alert status="error" className="py-2">
        Failed to save changes.
      </Alert>
    </div>
}`,...(X=(O=d.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};const J=["Info","Success","Warning","Error","WithCloseButton","Variants","TypesShowcase","WithRichContent","CustomStyling","CompactAlert"];export{d as CompactAlert,u as CustomStyling,i as Error,s as Info,r as Success,l as TypesShowcase,o as Variants,a as Warning,n as WithCloseButton,c as WithRichContent,J as __namedExportsOrder,H as default};
