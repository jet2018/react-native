(window.webpackJsonp=window.webpackJsonp||[]).push([[901],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),u=r,f=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?n.a.createElement(f,c(c({ref:t},p),{},{components:a})):n.a.createElement(f,c({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},990:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),o=(a(0),a(1176)),i={id:"safeareaview",title:"SafeAreaView"},c={unversionedId:"safeareaview",id:"safeareaview",isDocsHomePage:!1,title:"SafeAreaView",description:"The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.",source:"@site/../docs/safeareaview.md",slug:"/safeareaview",permalink:"/docs/next/safeareaview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/safeareaview.md",version:"current",lastUpdatedAt:1604421713,sidebar:"components",previous:{title:"InputAccessoryView",permalink:"/docs/next/inputaccessoryview"},next:{title:"Image Style Props",permalink:"/docs/next/image-style-props"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:"<code>emulateUnlessSupported</code>",id:"emulateunlesssupported",children:[]}]}],p={toc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The purpose of ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone X)."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"To use, wrap your top level view with a ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," with a ",Object(o.b)("inlineCode",{parentName:"p"},"flex: 1")," style applied to it. You may also want to use a background color that matches your application's design."),Object(o.b)("div",{className:"snack-player","data-snack-name":"SafeAreaView","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20SafeAreaView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EPage%20content%3C%2FText%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"view-props"},Object(o.b)("a",{parentName:"h3",href:"/docs/next/view#props"},"View Props")),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/docs/next/view#props"},"View Props"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As padding is used to implement the behavior of the component, padding rules in styles applied to a ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," will be ignored and can cause different results depending on the platform. See ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/22211"},"#22211")," for details.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"emulateunlesssupported"},Object(o.b)("inlineCode",{parentName:"h3"},"emulateUnlessSupported")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"bool"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"true")))))}s.isMDXComponent=!0}}]);