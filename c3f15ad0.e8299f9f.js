(window.webpackJsonp=window.webpackJsonp||[]).push([[821],{1176:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||l;return r?a.a.createElement(m,b(b({ref:t},c),{},{components:r})):a.a.createElement(m,b({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<l;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},916:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),l=(r(0),r(1176)),o={id:"progressbarandroid",title:"ProgressBarAndroid"},b={unversionedId:"progressbarandroid",id:"version-0.60/progressbarandroid",isDocsHomePage:!1,title:"ProgressBarAndroid",description:"Android-only React component used to indicate that the app is loading or there is some activity in the app.",source:"@site/versioned_docs/version-0.60/progressbarandroid.md",slug:"/progressbarandroid",permalink:"/docs/0.60/progressbarandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/progressbarandroid.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/components",previous:{title:"PickerIOS",permalink:"/docs/0.60/pickerios"},next:{title:"ProgressViewIOS",permalink:"/docs/0.60/progressviewios"}},i=[{value:"Props",id:"props",children:[{value:"<code>animating</code>",id:"animating",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>indeterminate</code>",id:"indeterminate",children:[]},{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>styleAttr</code>",id:"styleattr",children:[]},{value:"<code>testID</code>",id:"testid",children:[]}]}],c={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Android-only React component used to indicate that the app is loading or there is some activity in the app."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import React, { Component } from \'react\';\nimport {\n  ProgressBarAndroid,\n  StyleSheet,\n  View\n} from \'react-native\';\n\nexport default class App extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <ProgressBarAndroid />\n        <ProgressBarAndroid styleAttr="Horizontal" />\n        <ProgressBarAndroid\n          styleAttr="Horizontal"\n          color="#2196F3"\n        />\n        <ProgressBarAndroid\n          styleAttr="Horizontal"\n          indeterminate={false}\n          progress={0.5}\n        />\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: \'space-evenly\',\n    padding: 10\n  }\n});\n')),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/0.60/view#props"},"View Props"),"."),Object(l.b)("h3",{id:"animating"},Object(l.b)("inlineCode",{parentName:"h3"},"animating")),Object(l.b)("p",null,"Whether to show the ProgressBar (true, the default) or hide it (false)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"color"},Object(l.b)("inlineCode",{parentName:"h3"},"color")),Object(l.b)("p",null,"Color of the progress bar."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/0.60/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"indeterminate"},Object(l.b)("inlineCode",{parentName:"h3"},"indeterminate")),Object(l.b)("p",null,"If the progress bar will show indeterminate progress. Note that this can only be false if styleAttr is Horizontal, and requires a ",Object(l.b)("inlineCode",{parentName:"p"},"progress")," value."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"indeterminateType"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"progress"},Object(l.b)("inlineCode",{parentName:"h3"},"progress")),Object(l.b)("p",null,"The progress value (between 0 and 1)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"styleattr"},Object(l.b)("inlineCode",{parentName:"h3"},"styleAttr")),Object(l.b)("p",null,"Style of the ProgressBar. One of:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Horizontal"),Object(l.b)("li",{parentName:"ul"},"Normal (default)"),Object(l.b)("li",{parentName:"ul"},"Small"),Object(l.b)("li",{parentName:"ul"},"Large"),Object(l.b)("li",{parentName:"ul"},"Inverse"),Object(l.b)("li",{parentName:"ul"},"SmallInverse"),Object(l.b)("li",{parentName:"ul"},"LargeInverse")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0}}]);