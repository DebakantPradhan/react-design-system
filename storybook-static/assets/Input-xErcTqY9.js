import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-D4lIrffr.js";const N=({size:m="md",variant:o="solid",colorScheme:t="primary",fullWidth:i=!1,isLoading:r=!1,rounded:n="md",leftIcon:a,rightIcon:u,className:d="",disabled:l,children:c,...s})=>{const f="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",g={xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-5 py-2.5 text-base",xl:"px-6 py-3 text-lg"},p={none:"rounded-none",sm:"rounded-sm",md:"rounded",lg:"rounded-lg",full:"rounded-full"},h={primary:{solid:"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",outline:"border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",ghost:"text-blue-600 hover:bg-blue-50 focus:ring-blue-500",link:"text-blue-600 hover:underline focus:ring-blue-500 p-0"},secondary:{solid:"bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",outline:"border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500",ghost:"text-gray-600 hover:bg-gray-50 focus:ring-gray-500",link:"text-gray-600 hover:underline focus:ring-gray-500 p-0"},success:{solid:"bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",outline:"border border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500",ghost:"text-green-500 hover:bg-green-50 focus:ring-green-500",link:"text-green-500 hover:underline focus:ring-green-500 p-0"},danger:{solid:"bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",outline:"border border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500",ghost:"text-red-500 hover:bg-red-50 focus:ring-red-500",link:"text-red-500 hover:underline focus:ring-red-500 p-0"},warning:{solid:"bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500",outline:"border border-amber-500 text-amber-500 hover:bg-amber-50 focus:ring-amber-500",ghost:"text-amber-500 hover:bg-amber-50 focus:ring-amber-500",link:"text-amber-500 hover:underline focus:ring-amber-500 p-0"},info:{solid:"bg-sky-500 hover:bg-sky-600 text-white focus:ring-sky-500",outline:"border border-sky-500 text-sky-500 hover:bg-sky-50 focus:ring-sky-500",ghost:"text-sky-500 hover:bg-sky-50 focus:ring-sky-500",link:"text-sky-500 hover:underline focus:ring-sky-500 p-0"}},b=l||r?"opacity-50 cursor-not-allowed":"",y=i?"w-full":"";return e.jsxs("button",{className:`
        ${f}
        ${g[m]}
        ${p[n]} 
        ${h[t][o]}
        ${b}
        ${y}
        ${d}
      `,disabled:l||r,...s,children:[r&&e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),a&&e.jsx("span",{className:"mr-2",children:a}),c,u&&e.jsx("span",{className:"ml-2",children:u})]})};N.__docgenInfo={description:"Button component for user interactions",methods:[],displayName:"Button",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"The size of the button",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'ghost' | 'link'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"The visual style variant of the button",defaultValue:{value:"'solid'",computed:!1}},colorScheme:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"The color scheme of the button",defaultValue:{value:"'primary'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the button fills its container width",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the button is in a loading state",defaultValue:{value:"false",computed:!1}},rounded:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"The border radius of the button",defaultValue:{value:"'md'",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Whether the button has an icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Whether the button has an icon on the right"},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const v=w.forwardRef(({size:m="md",variant:o="outline",error:t,label:i,helperText:r,startIcon:n,endIcon:a,className:u="",fullWidth:d=!1,isLoading:l=!1,disabled:c,...s},f)=>{const g="transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",p={sm:"px-2 py-1 text-sm",md:"px-4 py-2",lg:"px-4 py-3 text-lg"},h={outline:`border ${t?"border-red-500 focus:ring-red-500":"border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`,filled:`bg-gray-100 border-transparent ${t?"focus:ring-red-500":"focus:bg-white focus:border-blue-500 focus:ring-blue-500"}`,flushed:`border-b-2 rounded-none px-0 ${t?"border-red-500 focus:ring-red-500":"border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`,unstyled:"border-none shadow-none focus:ring-0 p-0"},b=c?"opacity-50 cursor-not-allowed bg-gray-100":"",y=d?"w-full":"",x=o==="flushed"?"":"rounded";return e.jsxs("div",{className:`${d?"w-full":""}`,children:[i&&e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:i}),e.jsxs("div",{className:"relative",children:[n&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:n}),e.jsx("input",{ref:f,className:`
              ${g}
              ${p[m]}
              ${h[o]}
              ${b}
              ${y}
              ${x}
              ${n?"pl-10":""}
              ${a||l?"pr-10":""}
              ${u}
            `,disabled:c||l,"aria-invalid":!!t,"aria-describedby":r?`${s.id}-helper-text`:void 0,...s}),l&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:e.jsxs("svg",{className:"animate-spin h-4 w-4 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}),a&&!l&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:a})]}),(t||r)&&e.jsx("p",{className:`mt-1 text-sm ${t?"text-red-600":"text-gray-500"}`,id:s.id?`${s.id}-helper-text`:void 0,children:t||r})]})});v.displayName="Input";v.__docgenInfo={description:"Input component for data entry",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the input",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'flushed' | 'unstyled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'flushed'"},{name:"literal",value:"'unstyled'"}]},description:"The variant of the input",defaultValue:{value:"'outline'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message to display"},label:{required:!1,tsType:{name:"string"},description:"Label for the input"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input"},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the start of the input"},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the end of the input"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the input is full width",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the input is in a loading state",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};export{N as B,v as I};
