(window.webpackJsonp=window.webpackJsonp||[]).push([[938],{1023:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),o=(a(0),a(1176)),c={id:"switch",title:"Switch"},l={unversionedId:"switch",id:"version-0.64/switch",isDocsHomePage:!1,title:"Switch",description:"Renders a boolean input.",source:"@site/versioned_docs/version-0.64/switch.md",slug:"/switch",permalink:"/docs/switch",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.64/switch.md",version:"0.64",lastUpdatedAt:1615576460,sidebar:"version-0.64/components",previous:{title:"StatusBar",permalink:"/docs/statusbar"},next:{title:"Text",permalink:"/docs/text"}},b=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"View Props",id:"view-props",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:'<code>ios_backgroundColor</code> <div class="label ios">iOS</div>',id:"ios_backgroundcolor-ios",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[]},{value:"<code>trackColor</code>",id:"trackcolor",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],i={toc:b};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Renders a boolean input."),Object(o.b)("p",null,"This is a controlled component that requires an ",Object(o.b)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",Object(o.b)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%22%23767577%22%2C%20true%3A%20%22%2381b0ff%22%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%22%23f5dd4b%22%20%3A%20%22%23f4f3f4%22%7D%0A%20%20%20%20%20%20%20%20ios_backgroundColor%3D%22%233e3e3e%22%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%0A%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("h3",{id:"view-props"},Object(o.b)("a",{parentName:"h3",href:"/docs/view#props"},"View Props")),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",{parentName:"p",href:"/docs/view#props"},"View Props"),"."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"disabled"},Object(o.b)("inlineCode",{parentName:"h3"},"disabled")),Object(o.b)("p",null,"If true the user won't be able to toggle the switch."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"bool"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"false"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"ios_backgroundcolor-ios"},Object(o.b)("inlineCode",{parentName:"h3"},"ios_backgroundColor")," ",Object(o.b)("div",{class:"label ios"},"iOS")),Object(o.b)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is ",Object(o.b)("inlineCode",{parentName:"p"},"false")," or when the switch is disabled (and the switch is translucent)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/colors"},"color"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onchange"},Object(o.b)("inlineCode",{parentName:"h3"},"onChange")),Object(o.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use ",Object(o.b)("inlineCode",{parentName:"p"},"onValueChange")," instead."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"function")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"onvaluechange"},Object(o.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(o.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use ",Object(o.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"function")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"thumbcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"thumbColor")),Object(o.b)("p",null,"Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/docs/colors"},"color"))))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"trackcolor"},Object(o.b)("inlineCode",{parentName:"h3"},"trackColor")),Object(o.b)("p",null,"Custom colors for the switch track."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"iOS"),": When the switch value is ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",Object(o.b)("a",{parentName:"p",href:"/docs/switch#ios_backgroundColor"},Object(o.b)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"object: { false: ",Object(o.b)("a",{parentName:"td",href:"/docs/colors"},"color"),", true: ",Object(o.b)("a",{parentName:"td",href:"/docs/colors"},"color")," }")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"value"},Object(o.b)("inlineCode",{parentName:"h3"},"value")),Object(o.b)("p",null,"The value of the switch. If true the switch will be turned on. Default value is false."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"bool")))))}d.isMDXComponent=!0},1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,h=s["".concat(c,".").concat(u)]||s[u]||p[u]||o;return a?r.a.createElement(h,l(l({ref:t},i),{},{components:a})):r.a.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);