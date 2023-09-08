"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[5547],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(b,a(a({ref:t},d),{},{components:n})):r.createElement(b,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={slug:"editing-docusaurus",title:"Editing",sidebar_label:"Editing"},s=void 0,u={unversionedId:"appendices/editing-docusaurus",id:"appendices/editing-docusaurus",title:"Editing",description:"Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store.",source:"@site/docs/appendices/editing-docusaurus.md",sourceDirName:"appendices",slug:"/appendices/editing-docusaurus",permalink:"/legal-tech-class/docs/appendices/editing-docusaurus",draft:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/appendices/editing-docusaurus.md",tags:[],version:"current",frontMatter:{slug:"editing-docusaurus",title:"Editing",sidebar_label:"Editing"},sidebar:"someSidebar",previous:{title:"Tutorials",permalink:"/legal-tech-class/docs/tutorials"}},d={},c=[{value:"Quick start",id:"quick-start",level:2},{value:"Installing the remark-mermaid plugin",id:"installing-the-remark-mermaid-plugin",level:2},{value:"How I enabled the mermaid plugin (don&#39;t need to re-do this step)",id:"how-i-enabled-the-mermaid-plugin-dont-need-to-re-do-this-step",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store."),(0,o.kt)("p",null,"In VS Code, you can install the plugins:"),(0,o.kt)("p",null,"Remote - WSL\nMarkdown Preview Enhanced\nMarkdown Preview Mermaid"),(0,o.kt)("p",null,"To see what you are doing as you work."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"git clone"),(0,o.kt)("p",null,"install yarn, node and npm"),(0,o.kt)("p",null,"run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," inside the git repository to download all Node dependencies."),(0,o.kt)("h2",{id:"installing-the-remark-mermaid-plugin"},"Installing the remark-mermaid plugin"),(0,o.kt)("p",null,"You don't need to re-do this. But here are my configuration notes:"),(0,o.kt)("p",null,"to create mermaid graphs, use remark-mermaid plugin. This should install when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")),(0,o.kt)("p",null,"To build on your environment, you need to install dependencies for chrome-headless"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget\n")),(0,o.kt)("h3",{id:"how-i-enabled-the-mermaid-plugin-dont-need-to-re-do-this-step"},"How I enabled the mermaid plugin (don't need to re-do this step)"),(0,o.kt)("p",null,"edit docusaurus.config.js\nAt top of file, add\n",(0,o.kt)("inlineCode",{parentName:"p"},"const mermaid = require('remark-mermaid')")),(0,o.kt)("p",null,'In the "docs" block, add ',(0,o.kt)("inlineCode",{parentName:"p"},"remarkPlugins: [mermaid],"),"\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/advanced/plugins"},"https://mdxjs.com/advanced/plugins")," which explains how remark plugins work. Not explained in Docusaurus documentation."))}m.isMDXComponent=!0}}]);