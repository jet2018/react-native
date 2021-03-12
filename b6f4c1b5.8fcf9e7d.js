(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(r,".").concat(m)]||p[m]||h[m]||o;return n?i.a.createElement(b,s(s({ref:t},c),{},{components:n})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},864:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),o=(n(0),n(1176)),r={id:"height-and-width",title:"Height and Width"},s={unversionedId:"height-and-width",id:"version-0.62/height-and-width",isDocsHomePage:!1,title:"Height and Width",description:"A component's height and width determine its size on the screen.",source:"@site/versioned_docs/version-0.62/height-and-width.md",slug:"/height-and-width",permalink:"/docs/0.62/height-and-width",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/height-and-width.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",previous:{title:"Style",permalink:"/docs/0.62/style"},next:{title:"Layout with Flexbox",permalink:"/docs/0.62/flexbox"}},l=[{value:"Fixed Dimensions",id:"fixed-dimensions",children:[]},{value:"Flex Dimensions",id:"flex-dimensions",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A component's height and width determine its size on the screen."),Object(o.b)("h2",{id:"fixed-dimensions"},"Fixed Dimensions"),Object(o.b)("p",null,"The general way to set the dimensions of a component is by adding a fixed ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," to style. All dimensions in React Native are unitless, and represent density-independent pixels."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Height and Width","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20FixedDimensionsBasics()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%2050%2C%20height%3A%2050%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20100%2C%20height%3A%20100%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bwidth%3A%20150%2C%20height%3A%20150%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"Setting dimensions this way is common for components that should always render at exactly the same size, regardless of screen dimensions."),Object(o.b)("h2",{id:"flex-dimensions"},"Flex Dimensions"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"flex")," in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use ",Object(o.b)("inlineCode",{parentName:"p"},"flex: 1"),", which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the ",Object(o.b)("inlineCode",{parentName:"p"},"flex")," given, the higher the ratio of space a component will take compared to its siblings."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," or ",Object(o.b)("inlineCode",{parentName:"p"},"flex"),", the parent will have dimensions of 0 and the ",Object(o.b)("inlineCode",{parentName:"p"},"flex")," children will not be visible.")),Object(o.b)("div",{className:"snack-player","data-snack-name":"Flex Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20function%20FlexDimensionsBasics()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%2F%2F%20Try%20removing%20the%20%60flex%3A%201%60%20on%20the%20parent%20View.%0A%20%20%20%20%20%20%2F%2F%20The%20parent%20will%20not%20have%20dimensions%2C%20so%20the%20children%20can't%20expand.%0A%20%20%20%20%20%20%2F%2F%20What%20if%20you%20add%20%60height%3A%20300%60%20instead%20of%20%60flex%3A%201%60%3F%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20backgroundColor%3A%20'powderblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%202%2C%20backgroundColor%3A%20'skyblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%203%2C%20backgroundColor%3A%20'steelblue'%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("p",null,"After you can control a component's size, the next step is to ",Object(o.b)("a",{parentName:"p",href:"/docs/0.62/flexbox"},"learn how to lay it out on the screen"),"."))}d.isMDXComponent=!0}}]);