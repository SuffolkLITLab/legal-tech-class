"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[4545],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(7462),a=n(3366),s=(n(7294),n(3905)),r=["components"],i={slug:"theming-docassemble",title:"Applying custom themes",sidebar_label:"Applying custom themes"},l=void 0,c={unversionedId:"practical-guide-docassemble/theming-docassemble",id:"practical-guide-docassemble/theming-docassemble",title:"Applying custom themes",description:"Customizing Docassemble's visual appearance",source:"@site/docs/practical-guide-docassemble/theming-docassemble.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/theming-docassemble",permalink:"/legal-tech-class/docs/practical-guide-docassemble/theming-docassemble",draft:!1,editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/theming-docassemble.md",tags:[],version:"current",frontMatter:{slug:"theming-docassemble",title:"Applying custom themes",sidebar_label:"Applying custom themes"},sidebar:"someSidebar",previous:{title:"Repeated Information (Groups)",permalink:"/legal-tech-class/docs/repeated-information"},next:{title:"Translating your interview",permalink:"/legal-tech-class/docs/practical-guide-docassemble/translating-interviews"}},u={},p=[{value:"Customizing Docassemble&#39;s visual appearance",id:"customizing-docassembles-visual-appearance",level:2},{value:"Creating a custom CSS theme with Bootstrap.build",id:"creating-a-custom-css-theme-with-bootstrapbuild",level:3},{value:"Creating a custom theme from source instead of with a theme generator",id:"creating-a-custom-theme-from-source-instead-of-with-a-theme-generator",level:3},{value:"Using custom fonts in the frontend",id:"using-custom-fonts-in-the-frontend",level:3},{value:"Using custom fonts when creating PDF files from DOCX templates",id:"using-custom-fonts-when-creating-pdf-files-from-docx-templates",level:3},{value:"See also",id:"see-also",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"customizing-docassembles-visual-appearance"},"Customizing Docassemble's visual appearance"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#bootstrap%20theme"},"Themes")," can be used to control\nDocassemble interviews':"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"colors"),(0,s.kt)("li",{parentName:"ul"},"fonts"),(0,s.kt)("li",{parentName:"ul"},"button appearance"),(0,s.kt)("li",{parentName:"ul"},"size and shape of inputs")),(0,s.kt)("p",null,"You can use an off the shelf theme, but note that as of this writing Docassemble is built\naround Bootstrap 5.2. Most themes you find online may be Bootstrap 4 or earlier. Using a\ntheme from an older version of Bootstrap may result in visual and other interface glitches."),(0,s.kt)("h3",{id:"creating-a-custom-css-theme-with-bootstrapbuild"},"Creating a custom CSS theme with Bootstrap.build"),(0,s.kt)("p",null,"If you want to build a custom theme, encompassing colors, fonts, button styles and other\noptions that are configurable with css, you can:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"build one from Bootstrap 5 source"),(0,s.kt)("li",{parentName:"ol"},"start with a theme generator tool like ",(0,s.kt)("a",{parentName:"li",href:"https://bootstrap.build/"},"bootstrap.build"),"\nand in some cases, add some custom CSS to make it work with Docassemble.")),(0,s.kt)("p",null,"Using bootstrap.build is the simplest option for most authors."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Visit the ",(0,s.kt)("a",{parentName:"li",href:"https://bootstrap.build/"},"bootstrap.build")," website."),(0,s.kt)("li",{parentName:"ol"},"Click the button to open the Builder"),(0,s.kt)("li",{parentName:"ol"},"Customize the options that you want to customize. Typically those will include:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Under color system, the $gray/$blue/etc. colors, if you use a matching color in your theme"),(0,s.kt)("li",{parentName:"ul"},"Under color system, almost always the variables ",(0,s.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"success"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"warning"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"danger"),",\n",(0,s.kt)("inlineCode",{parentName:"li"},"light")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"dark")),(0,s.kt)("li",{parentName:"ul"},"Under Typography, customize any fonts that you wish to use"),(0,s.kt)("li",{parentName:"ul"},"Under forms, you may want to customize button size and rounded edges"))),(0,s.kt)("li",{parentName:"ol"},'Click the "export theme" button (it may be hidden behind a banner at the top of the page) and choose the\n"bootstrap.min.css" option. Rename this theme to be more specific. Optionally, download the ',(0,s.kt)("inlineCode",{parentName:"li"},"_variables.scss")," file\nso that you can easily load and adjust your settings in future.")),(0,s.kt)("p",null,"Add this theme to your Docassemble playground using the Folders | Static menu."),(0,s.kt)("p",null,"Next, you will need to make a small adjustment to the theme generated by bootstrap.build.\nCopy and paste the code below into the ",(0,s.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css")," file (or your new file name)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".visually-hidden {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n  \n.bg-dark {\n  background-color: #1a73e8!important;  /* replace with your desired nav bar color */\n}\n")),(0,s.kt)("p",null,"We have identified the small patches above that are required to use Bootstrap.build to make\na Docassemble theme, but you may run into more. The safest way to create a theme for\nDocassemble is by building it from source, following the instructions below."),(0,s.kt)("h3",{id:"creating-a-custom-theme-from-source-instead-of-with-a-theme-generator"},"Creating a custom theme from source instead of with a theme generator"),(0,s.kt)("p",null,"The Bootstrap documentation ",(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/download/"},"covers the details of theming"),"."),(0,s.kt)("p",null,"While the above instructions to use bootstrap.build can work well in most\ncircumstances, you may run into small interface bugs introduced by the theme\ngenerator. If you prefer more control over building the theme, first,\n",(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/getting-started/download/"},"download")," the\nBootstrap source. As of this writing, the latest version you can use is 5.2."),(0,s.kt)("p",null,"Use a computer with a current version of Node. The instructions on this page\nassume you are using an Ubuntu Linux computer with Node installed, but they\nshould be the same on any workstation. They were tested on a machine running\nWindows 11 with Ubuntu running under Windows Subsystem for Linux (WSL)."),(0,s.kt)("p",null,"It also assumes that you have VS Code installed, but you can use any text\neditor of your choice."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/twbs/bootstrap/releases/download/v5.1.3/bootstrap-5.1.3-dist.zip\nunzip bootstrap-5.1.3-dist.zip\ncd bootstrap-5.1.3\nnpm install\n")),(0,s.kt)("p",null,"Now, create a new ",(0,s.kt)("inlineCode",{parentName:"p"},"custom.scss")," file inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"scss")," subfolder in the\n",(0,s.kt)("inlineCode",{parentName:"p"},"bootstrap-5.1.3")," folder. Detailed instructions on what this file can contain\nare in the ",(0,s.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/customize/sass/#importing"},"Bootstrap\ndocumentation"),"."),(0,s.kt)("p",null,"You can use a ",(0,s.kt)("a",{parentName:"p",href:"https://huemint.com/bootstrap-basic/"},"color theme generator")," like\n",(0,s.kt)("a",{parentName:"p",href:"https://huemint.com/bootstrap-basic/"},"Huemint.com")," to make sure that you have a\nconsistent set of all 9 Bootstrap variables. When you use the color theme\ngenerator, at the bottom of the page, you will see a small snippet of code that\nyou can copy into the customs.scss file."),(0,s.kt)("p",null,"For example, your new custom.scss might look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},'// Custom.scss\n// Option A: Include all of Bootstrap\n\n// Include any default variable overrides here (though functions won\'t be available)\n\n$white: #ffffff;\n\n$theme-colors: (\n    "light":      #d8e2a5,\n    "dark":       #1b1b1b,\n    "primary":    #25dec6,\n    "secondary":  #375b5a,\n    "info":       #d74d72,\n    "success":    #0cb545,\n    "warning":    #f4ca0b,\n    "danger":     #fa043c,\n);\n\n// Note: we placed our custom.scss file in the bootstrap path for simplicity,\n// so we use a different path than in the bootstrap documentation\n// @import "../node_modules/bootstrap/scss/bootstrap";\n@import "bootstrap";\n\n// Then add additional custom code here\n')),(0,s.kt)("p",null,"Now, use ",(0,s.kt)("inlineCode",{parentName:"p"},"npm")," to compile the theme file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/bootstrap-5.1.3\nnpm run css-compile\n")),(0,s.kt)("p",null,"Your new ",(0,s.kt)("inlineCode",{parentName:"p"},"custom.css")," file is in the\n~/bootstrap-5.1.3/dist/css",(0,s.kt)("inlineCode",{parentName:"p"},"directory. Copy this file to your Docassemble"),"static",(0,s.kt)("inlineCode",{parentName:"p"},"folder and reference it as a"),"bootstrap theme`."),(0,s.kt)("h3",{id:"using-custom-fonts-in-the-frontend"},"Using custom fonts in the frontend"),(0,s.kt)("p",null,"You can use custom webfonts with Docassemble, just like you can with any other web\nproduct."),(0,s.kt)("p",null,"This ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts"},"Mozilla guide about web\nfonts"),"\nis a good place to start."),(0,s.kt)("p",null,"If you do not already have a .woff or .woff2 file but you do have a TrueType\n(TTF) or OpenType (OTF) file that you are licensed to distribute, you can create\none with a ",(0,s.kt)("a",{parentName:"p",href:"https://www.fontsquirrel.com/tools/webfont-generator"},"free online web font\ntool"),"."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Once you have a .woff file, upload it to the /static folder of a Docassemble playground."),(0,s.kt)("li",{parentName:"ol"},"Add an ",(0,s.kt)("inlineCode",{parentName:"li"},"@font-face")," directive to your bootstrap.css file (or a separate CSS file that you\nreference in the ",(0,s.kt)("inlineCode",{parentName:"li"},"features")," block of your interview)")),(0,s.kt)("p",null,"You cannot include Mako tags in your CSS file, so in order to use the new font face, you should\nadd it to a Docassemble package and then install the package on your server. "),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},"@font-face {\n    font-family: 'my_font';\n    src: url('/packagestatic/docassemble.MyTheme/my_font.woff2') format('woff2'),\n         url('/packagestatic/docassemble.MyTheme/my_font.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n")),(0,s.kt)("p",null,"In the example above, MyTheme is a Docassemble package that is installed\nserver-wide. my_font is both the name of a web font and the name of the WOFF file."),(0,s.kt)("h3",{id:"using-custom-fonts-when-creating-pdf-files-from-docx-templates"},"Using custom fonts when creating PDF files from DOCX templates"),(0,s.kt)("p",null,"If you would like to use a font ",(0,s.kt)("strong",{parentName:"p"},"other than")," the Microsoft fonts popular in\nthe late 1990s-2000 era (Arial, Times New Roman, Courier) then you will need to\ninstall the fonts on your Docassemble server."),(0,s.kt)("p",null,"Make sure that you have a license for each font you want to install."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Locate the .otf or .ttf file representing the font that you want to use\ninside your Word template (note that these are often in c:\\windows\\fonts",")"),(0,s.kt)("li",{parentName:"ol"},"Copy the font to your docassemble server"),(0,s.kt)("li",{parentName:"ol"},"Copy the font inside the docker container"),(0,s.kt)("li",{parentName:"ol"},"reset the font cache"),(0,s.kt)("li",{parentName:"ol"},"restart the docassemble supervisor processes")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scp ~/myfont.ttf apps.example.com:\nssh apps.example.com\ndocker cp myfont.ttf mycontainer:/usr/share/fonts\ndocker exec mycontainer /bin/bash\nfc-cache -f -v\nsupervisorctl restart uwsgi\nsupervisorctl start reset\nsupervisorctl -s http://localhost:9001 restart unoconv\n")),(0,s.kt)("p",null,"Instead of copying the fonts to /usr/share/fonts, you could likely copy\nthem to ",(0,s.kt)("inlineCode",{parentName:"p"},"/var/www/.fonts"),". This has the advantage of being writable by the\nweb process from a Python module."),(0,s.kt)("p",null,"If the font still does not appear to be installed (try generating a PDF with the\ncustom font),you may need to do a ",(0,s.kt)("inlineCode",{parentName:"p"},"docker stop -t 600 mycontainer")," followed by a\n",(0,s.kt)("inlineCode",{parentName:"p"},"docker start mycontainer"),"."),(0,s.kt)("h2",{id:"see-also"},"See also"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/docassemble-AssemblyLine-documentation/docs/customization/overview"},"Customizing Assembly Line interviews"))))}d.isMDXComponent=!0}}]);