import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-D4lIrffr.js";import{M as D}from"./Modal-CLldaZV9.js";import{B as s}from"./Input-xErcTqY9.js";const A={title:"Feedback/Modal",component:D,parameters:{layout:"centered",docs:{description:{component:`
# Modal Component

Modals are dialog overlays that prevent the user from interacting with the rest of the application until an action is taken.

## Usage
Use modals to focus user attention on important tasks or information that requires immediate action.

## Accessibility
- Set appropriate aria attributes
- Ensure keyboard navigation works correctly inside the modal
- When a modal opens, focus should move to the modal
- When the modal closes, focus should return to the element that opened it
        `}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Header text for the modal"},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Controls the width of the modal"},isOpen:{control:"boolean",description:"Whether the modal is visible"},onClose:{action:"closed",description:"Function called when the modal is closed"},closeOnEsc:{control:"boolean",description:"Whether to close the modal when Escape key is pressed"},closeOnOverlayClick:{control:"boolean",description:"Whether to close the modal when clicking the overlay"},isCentered:{control:"boolean",description:"Whether to center the modal vertically"},showCloseButton:{control:"boolean",description:"Whether to show the close button in the header"}}},o=t=>{const[z,i]=F.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{onClick:()=>i(!0),children:"Open Modal"}),e.jsx(D,{isOpen:z,onClose:()=>i(!1),...t,children:t.children||e.jsx("div",{children:e.jsx("p",{className:"text-gray-700",children:"This is the content of the modal dialog. You can put any content here."})})})]})},r={args:{},render:()=>e.jsx(o,{title:"Basic Modal"})},a={args:{},render:()=>e.jsx(o,{title:"Modal with Footer",footer:e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(s,{variant:"outline",colorScheme:"secondary",children:"Cancel"}),e.jsx(s,{children:"Submit"})]})})},n={args:{},render:()=>e.jsx("div",{className:"space-y-4 flex flex-col items-center",children:["sm","md","lg","xl","full"].map(t=>e.jsx(o,{title:`${t.toUpperCase()} Modal`,size:t,children:e.jsxs("p",{className:"text-gray-700",children:["This modal has ",e.jsx("strong",{children:t})," size"]})},t))})},l={args:{},render:()=>e.jsx(o,{title:"Centered Modal",isCentered:!0,children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4",children:e.jsx("svg",{className:"h-6 w-6 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}),e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Payment successful"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Your payment has been processed successfully."})]})})},d={args:{},render:()=>e.jsx(o,{title:"Create Account",size:"lg",footer:e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(s,{variant:"outline",colorScheme:"secondary",children:"Cancel"}),e.jsx(s,{colorScheme:"primary",children:"Create Account"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),e.jsx("input",{type:"text",name:"name",id:"name",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border",placeholder:"John Doe"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",id:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border",placeholder:"john@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),e.jsx("input",{type:"password",name:"password",id:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"})]})]})})},c={args:{},render:()=>e.jsx(o,{title:"Confirm Deletion",size:"sm",isCentered:!0,footer:e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(s,{variant:"outline",colorScheme:"secondary",children:"Cancel"}),e.jsx(s,{colorScheme:"danger",children:"Delete"})]}),children:e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0",children:e.jsx("svg",{className:"h-6 w-6 text-red-600",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-base font-semibold leading-6 text-gray-900",children:"Delete Item"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this item? This action cannot be undone."})})]})]})})};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: () => <ModalDemo title="Basic Modal" />
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,p,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: () => <ModalDemo title="Modal with Footer" footer={<div className="flex justify-end space-x-4">
          <Button variant="outline" colorScheme="secondary">Cancel</Button>
          <Button>Submit</Button>
        </div>} />
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,b,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="space-y-4 flex flex-col items-center">
      {['sm', 'md', 'lg', 'xl', 'full'].map(size => <ModalDemo key={size} title={\`\${size.toUpperCase()} Modal\`} size={size as any}>
          <p className="text-gray-700">
            This modal has <strong>{size}</strong> size
          </p>
        </ModalDemo>)}
    </div>
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,j,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: () => <ModalDemo title="Centered Modal" isCentered={true}>
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">Payment successful</h3>
        <p className="mt-2 text-sm text-gray-500">
          Your payment has been processed successfully.
        </p>
      </div>
    </ModalDemo>
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,k,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  render: () => <ModalDemo title="Create Account" size="lg" footer={<div className="flex justify-end space-x-4">
          <Button variant="outline" colorScheme="secondary">Cancel</Button>
          <Button colorScheme="primary">Create Account</Button>
        </div>}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" name="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
        </div>
      </div>
    </ModalDemo>
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,S,B;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: () => <ModalDemo title="Confirm Deletion" size="sm" isCentered={true} footer={<div className="flex justify-end space-x-4">
          <Button variant="outline" colorScheme="secondary">Cancel</Button>
          <Button colorScheme="danger">Delete</Button>
        </div>}>
      <div className="text-center sm:text-left">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Delete Item</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </ModalDemo>
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const T=["Default","WithFooter","Sizes","Centered","FormModal","ConfirmationModal"];export{l as Centered,c as ConfirmationModal,r as Default,d as FormModal,n as Sizes,a as WithFooter,T as __namedExportsOrder,A as default};
