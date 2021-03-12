(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},860:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(8),a=(n(0),n(1176)),i={id:"devsettings",title:"DevSettings"},c={unversionedId:"devsettings",id:"version-0.63/devsettings",isDocsHomePage:!1,title:"DevSettings",description:"The DevSettings module exposes methods for customizing settings for developers in development.",source:"@site/versioned_docs/version-0.63/devsettings.md",slug:"/devsettings",permalink:"/docs/0.63/devsettings",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/devsettings.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"AppState",permalink:"/docs/0.63/appstate"},next:{title:"Dimensions",permalink:"/docs/0.63/dimensions"}},s=[{value:"Methods",id:"methods",children:[{value:"<code>addMenuItem()</code>",id:"addmenuitem",children:[]},{value:"<code>reload()</code>",id:"reload",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"DevSettings")," module exposes methods for customizing settings for developers in development."),Object(a.b)("hr",null),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"addmenuitem"},Object(a.b)("inlineCode",{parentName:"h3"},"addMenuItem()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static addMenuItem(title: string, handler: function)\n")),Object(a.b)("p",null,"Add a custom menu item to the developer menu:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"DevSettings.addMenuItem('Show Secret Dev Screen', () => {\n  Alert.alert('Showing secret dev screen!');\n});\n")),Object(a.b)("h3",{id:"reload"},Object(a.b)("inlineCode",{parentName:"h3"},"reload()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static reload()\n")),Object(a.b)("p",null,"Reload the application. Can be invoked directly or on user interaction:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'<Button title="Reload" onPress={() => DevSettings.reload()} />\n')))}d.isMDXComponent=!0}}]);