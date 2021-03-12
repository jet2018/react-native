(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1057:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(1176)),i={id:"toastandroid",title:"ToastAndroid"},s={unversionedId:"toastandroid",id:"version-0.60/toastandroid",isDocsHomePage:!1,title:"ToastAndroid",description:"This exposes the native ToastAndroid module as a JS module. This has a function 'show' which takes the following parameters:",source:"@site/versioned_docs/version-0.60/toastandroid.md",slug:"/toastandroid",permalink:"/docs/0.60/toastandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/toastandroid.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"TimePickerAndroid",permalink:"/docs/0.60/timepickerandroid"},next:{title:"Transforms",permalink:"/docs/0.60/transforms"}},c=[{value:"Advanced usage:",id:"advanced-usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>show()</code>",id:"show",children:[]},{value:"<code>showWithGravity()</code>",id:"showwithgravity",children:[]},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>SHORT</code>",id:"short",children:[]},{value:"<code>LONG</code>",id:"long",children:[]},{value:"<code>TOP</code>",id:"top",children:[]},{value:"<code>BOTTOM</code>",id:"bottom",children:[]},{value:"<code>CENTER</code>",id:"center",children:[]}]}],d={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This exposes the native ToastAndroid module as a JS module. This has a function 'show' which takes the following parameters:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"String message: A string with the text to toast"),Object(o.b)("li",{parentName:"ol"},"int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG")),Object(o.b)("p",null,"There is also a function ",Object(o.b)("inlineCode",{parentName:"p"},"showWithGravity")," to specify the layout gravity. May be ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER."),Object(o.b)("p",null,"The 'showWithGravityAndOffset' function adds on the ability to specify offset These offset values will translate to pixels."),Object(o.b)("p",null,"Basic usage:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { ToastAndroid } from 'react-native';\n\nToastAndroid.show(\n  'A pikachu appeared nearby !',\n  ToastAndroid.SHORT\n);\nToastAndroid.showWithGravity(\n  'All Your Base Are Belong To Us',\n  ToastAndroid.SHORT,\n  ToastAndroid.CENTER\n);\nToastAndroid.showWithGravityAndOffset(\n  'A wild toast appeared!',\n  ToastAndroid.LONG,\n  ToastAndroid.BOTTOM,\n  25,\n  50\n);\n")),Object(o.b)("h3",{id:"advanced-usage"},"Advanced usage:"),Object(o.b)("p",null,"The ToastAndroid API is imperative and this might present itself as an issue, but there is actually a way(hack) to expose a declarative component from it. See an example below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { View, Button, ToastAndroid } from 'react-native';\n\n// a component that calls the imperative ToastAndroid API\nconst Toast = (props) => {\n  if (props.visible) {\n    ToastAndroid.showWithGravityAndOffset(\n      props.message,\n      ToastAndroid.LONG,\n      ToastAndroid.BOTTOM,\n      25,\n      50\n    );\n    return null;\n  }\n  return null;\n};\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false\n    };\n  }\n\n  handleButtonPress = () => {\n    this.setState(\n      {\n        visible: true\n      },\n      () => {\n        this.hideToast();\n      }\n    );\n  };\n\n  hideToast = () => {\n    this.setState({\n      visible: false\n    });\n  };\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Toast visible={this.state.visible} message=\"Example\" />\n        <Button\n          title=\"Toggle Modal\"\n          onPress={this.handleButtonPress}\n        />\n      </View>\n    );\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"show"},Object(o.b)("inlineCode",{parentName:"h3"},"show()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static show(message, duration)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"showwithgravity"},Object(o.b)("inlineCode",{parentName:"h3"},"showWithGravity()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static showWithGravity(message, duration, gravity)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"showwithgravityandoffset"},Object(o.b)("inlineCode",{parentName:"h3"},"showWithGravityAndOffset()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"short"},Object(o.b)("inlineCode",{parentName:"h3"},"SHORT")),Object(o.b)("p",null,"Indicates the duration on the screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.SHORT;\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"long"},Object(o.b)("inlineCode",{parentName:"h3"},"LONG")),Object(o.b)("p",null,"Indicates the duration on the screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.LONG;\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"top"},Object(o.b)("inlineCode",{parentName:"h3"},"TOP")),Object(o.b)("p",null,"Indicates the position on the screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.TOP;\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"bottom"},Object(o.b)("inlineCode",{parentName:"h3"},"BOTTOM")),Object(o.b)("p",null,"Indicates the position on the screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.BOTTOM;\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"center"},Object(o.b)("inlineCode",{parentName:"h3"},"CENTER")),Object(o.b)("p",null,"Indicates the position on the screen."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"ToastAndroid.CENTER;\n")))}l.isMDXComponent=!0},1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return n?a.a.createElement(h,s(s({ref:t},d),{},{components:n})):a.a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);