(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(h,o(o({ref:t},l),{},{components:n})):r.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},762:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(1176)),p={id:"appstate",title:"AppState"},o={unversionedId:"appstate",id:"version-0.61/appstate",isDocsHomePage:!1,title:"AppState",description:"AppState can tell you if the app is in the foreground or background, and notify you when the state changes.",source:"@site/versioned_docs/version-0.61/appstate.md",slug:"/appstate",permalink:"/docs/0.61/appstate",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/appstate.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"AppRegistry",permalink:"/docs/0.61/appregistry"},next:{title:"\ud83d\udea7 AsyncStorage",permalink:"/docs/0.61/asyncstorage"}},c=[{value:"App States",id:"app-states",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Events",id:"events",children:[{value:"<code>change</code>",id:"change",children:[]},{value:"<code>focus</code>",id:"focus",children:[]},{value:"<code>blur</code>",id:"blur",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>currentState</code>",id:"currentstate",children:[]}]}],l={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AppState")," can tell you if the app is in the foreground or background, and notify you when the state changes."),Object(i.b)("p",null,"AppState is frequently used to determine the intent and proper behavior when handling push notifications."),Object(i.b)("h3",{id:"app-states"},"App States"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"active")," - The app is running in the foreground"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"background")," - The app is running in the background. The user is either:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"in another app"),Object(i.b)("li",{parentName:"ul"},"on the home screen"),Object(i.b)("li",{parentName:"ul"},"[Android]"," on another ",Object(i.b)("inlineCode",{parentName:"li"},"Activity")," (even if it was launched by your app)"))),Object(i.b)("li",{parentName:"ul"},"[iOS]"," ",Object(i.b)("inlineCode",{parentName:"li"},"inactive")," - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call")),Object(i.b)("p",null,"For more information, see ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"},"Apple's documentation")),Object(i.b)("h3",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"To see the current state, you can check ",Object(i.b)("inlineCode",{parentName:"p"},"AppState.currentState"),", which will be kept up-to-date. However, ",Object(i.b)("inlineCode",{parentName:"p"},"currentState")," will be null at launch while ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," retrieves it over the bridge."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { AppState, Text } from 'react-native';\n\nclass AppStateExample extends Component {\n  state = {\n    appState: AppState.currentState\n  };\n\n  componentDidMount() {\n    AppState.addEventListener(\n      'change',\n      this._handleAppStateChange\n    );\n  }\n\n  componentWillUnmount() {\n    AppState.removeEventListener(\n      'change',\n      this._handleAppStateChange\n    );\n  }\n\n  _handleAppStateChange = (nextAppState) => {\n    if (\n      this.state.appState.match(/inactive|background/) &&\n      nextAppState === 'active'\n    ) {\n      console.log('App has come to the foreground!');\n    }\n    this.setState({ appState: nextAppState });\n  };\n\n  render() {\n    return <Text>Current state is: {this.state.appState}</Text>;\n  }\n}\n")),Object(i.b)("p",null,'This example will only ever appear to say "Current state is: active" because the app is only visible to the user when in the ',Object(i.b)("inlineCode",{parentName:"p"},"active")," state, and the null state will happen only momentarily."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("h3",{id:"change"},Object(i.b)("inlineCode",{parentName:"h3"},"change")),Object(i.b)("p",null,"This even is received when the app state has changed. The listener is called with one of ",Object(i.b)("a",{parentName:"p",href:"/docs/0.61/appstate#app-states"},"the current app state values"),"."),Object(i.b)("h3",{id:"focus"},Object(i.b)("inlineCode",{parentName:"h3"},"focus")),Object(i.b)("p",null,"[Android only]"," Received when the app gains focus (the user is interacting with the app)."),Object(i.b)("h3",{id:"blur"},Object(i.b)("inlineCode",{parentName:"h3"},"blur")),Object(i.b)("p",null,"[Android only]"," Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"},"notification drawer"),". ",Object(i.b)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",Object(i.b)("inlineCode",{parentName:"p"},"blur")," event will get fired."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"addEventListener(type, handler);\n")),Object(i.b)("p",null,"Add a handler to AppState changes by listening to the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and providing the handler"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"removeEventListener(type, handler);\n")),Object(i.b)("p",null,"Remove a handler by passing the ",Object(i.b)("inlineCode",{parentName:"p"},"change")," event type and the handler"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"currentstate"},Object(i.b)("inlineCode",{parentName:"h3"},"currentState")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"AppState.currentState;\n")))}s.isMDXComponent=!0}}]);