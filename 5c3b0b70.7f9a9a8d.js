(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{1176:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=i,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(m,s(s({ref:n},l),{},{components:t})):a.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},514:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var i=t(3),a=t(8),o=(t(0),t(1176)),r={id:"usewindowdimensions",title:"useWindowDimensions"},s={unversionedId:"usewindowdimensions",id:"usewindowdimensions",isDocsHomePage:!1,title:"useWindowDimensions",description:"`jsx",source:"@site/../docs/usewindowdimensions.md",slug:"/usewindowdimensions",permalink:"/docs/next/usewindowdimensions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/usewindowdimensions.md",version:"current",lastUpdatedAt:1607356774,sidebar:"api",previous:{title:"useColorScheme",permalink:"/docs/next/usecolorscheme"},next:{title:"BackHandler",permalink:"/docs/next/backhandler"}},c=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>fontScale</code>",id:"fontscale",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>width</code>",id:"width",children:[]}]}],l={toc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { useWindowDimensions } from 'react-native';\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useWindowDimensions")," automatically updates ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," values when screen size changes. You can get your application window's width and height like so:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const windowWidth = useWindowDimensions().width;\nconst windowHeight = useWindowDimensions().height;\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"useWindowDimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20useWindowDimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20window%20%3D%20useWindowDimensions()%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bwindow.height%7D%2C%20width%20-%20%24%7Bwindow.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-hooks#usedimensions"},"useDimensions")," hook from the community ",Object(o.b)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-hooks"},"React native hooks")," library aims to make handling screen/window size changes easier to work with."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/DaniAkash/react-native-responsive-dimensions"},"React Native Responsive Dimensions")," also comes with responsive hooks.")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"fontscale"},Object(o.b)("inlineCode",{parentName:"h3"},"fontScale")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().fontScale;\n")),Object(o.b)("p",null,"The scale of the font currently used. Some operating systems allow users to scale their font sizes larger or smaller for reading comfort. This property will let you know what is in effect."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"height"},Object(o.b)("inlineCode",{parentName:"h3"},"height")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().height;\n")),Object(o.b)("p",null,"The height in pixels of the window or screen your app occupies."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"scale"},Object(o.b)("inlineCode",{parentName:"h3"},"scale")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().scale;\n")),Object(o.b)("p",null,"The pixel ratio of the device your app is running on."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A value of ",Object(o.b)("inlineCode",{parentName:"p"},"1")," indicates PPI/DPI of 96 (76 on some platforms). ",Object(o.b)("inlineCode",{parentName:"p"},"2")," indicates a Retina or high DPI display.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"width"},Object(o.b)("inlineCode",{parentName:"h3"},"width")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"useWindowDimensions().width;\n")),Object(o.b)("p",null,"The width in pixels of the window or screen your app occupies."))}d.isMDXComponent=!0}}]);