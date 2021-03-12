(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?i.a.createElement(b,s(s({ref:t},p),{},{components:n})):i.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(8),o=(n(0),n(1176)),r={id:"communication-android",title:"Communication between native and React Native"},s={unversionedId:"communication-android",id:"version-0.62/communication-android",isDocsHomePage:!1,title:"Communication between native and React Native",description:"In Integrating with Existing Apps guide and Native UI Components guide we learn how to embed React Native in a native component and vice versa. When we mix native and React Native components, we'll eventually find a need to communicate between these two worlds. Some ways to achieve that have been already mentioned in other guides. This article summarizes available techniques.",source:"@site/versioned_docs/version-0.62/communication-android.md",slug:"/communication-android",permalink:"/docs/0.62/communication-android",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/communication-android.md",version:"0.62",lastUpdatedAt:1603945169},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Properties",id:"properties",children:[{value:"Passing properties from native to React Native",id:"passing-properties-from-native-to-react-native",children:[]},{value:"Passing properties from React Native to native",id:"passing-properties-from-react-native-to-native",children:[]},{value:"Limits of properties",id:"limits-of-properties",children:[]}]},{value:"Other ways of cross-language interaction (events and native modules)",id:"other-ways-of-cross-language-interaction-events-and-native-modules",children:[{value:"Calling React Native functions from native (events)",id:"calling-react-native-functions-from-native-events",children:[]},{value:"Calling native functions from React Native (native modules)",id:"calling-native-functions-from-react-native-native-modules",children:[]}]}],p={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In ",Object(o.b)("a",{parentName:"p",href:"integration-with-existing-apps"},"Integrating with Existing Apps guide")," and ",Object(o.b)("a",{parentName:"p",href:"native-components-android"},"Native UI Components guide")," we learn how to embed React Native in a native component and vice versa. When we mix native and React Native components, we'll eventually find a need to communicate between these two worlds. Some ways to achieve that have been already mentioned in other guides. This article summarizes available techniques."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"React Native is inspired by React, so the basic idea of the information flow is similar. The flow in React is one-directional. We maintain a hierarchy of components, in which each component depends only on its parent and its own internal state. We do this with properties: data is passed from a parent to its children in a top-down manner. If an ancestor component relies on the state of its descendant, one should pass down a callback to be used by the descendant to update the ancestor."),Object(o.b)("p",null,"The same concept applies to React Native. As long as we are building our application purely within the framework, we can drive our app with properties and callbacks. But, when we mix React Native and native components, we need some specific, cross-language mechanisms that would allow us to pass information between them."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"Properties are the most straightforward way of cross-component communication. So we need a way to pass properties both from native to React Native, and from React Native to native."),Object(o.b)("h3",{id:"passing-properties-from-native-to-react-native"},"Passing properties from native to React Native"),Object(o.b)("p",null,"You can pass properties down to the React Native app by providing a custom implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"ReactActivityDelegate")," in your main activity. This implementation should override ",Object(o.b)("inlineCode",{parentName:"p"},"getLaunchOptions")," to return a ",Object(o.b)("inlineCode",{parentName:"p"},"Bundle")," with the desired properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'public class MainActivity extends ReactActivity {\n  @Override\n  protected ReactActivityDelegate createReactActivityDelegate() {\n    return new ReactActivityDelegate(this, getMainComponentName()) {\n      @Override\n      protected Bundle getLaunchOptions() {\n        Bundle initialProperties = new Bundle();\n        ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n                "http://foo.com/bar1.png",\n                "http://foo.com/bar2.png"\n        ));\n        initialProperties.putStringArrayList("images", imageList);\n        return initialProperties;\n      }\n    };\n  }\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, Image } from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{ uri: imgURI }} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ReactRootView")," provides a read-write property ",Object(o.b)("inlineCode",{parentName:"p"},"appProperties"),". After ",Object(o.b)("inlineCode",{parentName:"p"},"appProperties")," is set, the React Native app is re-rendered with new properties. The update is only performed when the new updated properties differ from the previous ones."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'Bundle updatedProps = mReactRootView.getAppProperties();\nArrayList<String> imageList = new ArrayList<String>(Arrays.asList(\n        "http://foo.com/bar3.png",\n        "http://foo.com/bar4.png"\n));\nupdatedProps.putStringArrayList("images", imageList);\n\nmReactRootView.setAppProperties(updatedProps);\n')),Object(o.b)("p",null,"It is fine to update properties anytime. However, updates have to be performed on the main thread. You use the getter on any thread."),Object(o.b)("p",null,"There is no way to update only a few properties at a time. We suggest that you build it into your own wrapper instead."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," Currently, JS function ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUpdateProps")," of the top level RN component will not be called after a prop update. However, you can access the new props in ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," function.")),Object(o.b)("h3",{id:"passing-properties-from-react-native-to-native"},"Passing properties from React Native to native"),Object(o.b)("p",null,"The problem exposing properties of native components is covered in detail in ",Object(o.b)("a",{parentName:"p",href:"native-components-android#3-expose-view-property-setters-using-reactprop-or-reactpropgroup-annotation"},"this article"),". In short, properties that are to be reflected in JavaScript needs to be exposed as setter method annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"@ReactProp"),", then use them in React Native as if the component was an ordinary React Native component."),Object(o.b)("h3",{id:"limits-of-properties"},"Limits of properties"),Object(o.b)("p",null,"The main drawback of cross-language properties is that they do not support callbacks, which would allow us to handle bottom-up data bindings. Imagine you have a small RN view that you want to be removed from the native parent view as a result of a JS action. There is no way to do that with props, as the information would need to go bottom-up."),Object(o.b)("p",null,"Although we have a flavor of cross-language callbacks (",Object(o.b)("a",{parentName:"p",href:"native-modules-android#callbacks"},"described here"),"), these callbacks are not always the thing we need. The main problem is that they are not intended to be passed as properties. Rather, this mechanism allows us to trigger a native action from JS, and handle the result of that action in JS."),Object(o.b)("h2",{id:"other-ways-of-cross-language-interaction-events-and-native-modules"},"Other ways of cross-language interaction (events and native modules)"),Object(o.b)("p",null,"As stated in the previous chapter, using properties comes with some limitations. Sometimes properties are not enough to drive the logic of our app and we need a solution that gives more flexibility. This chapter covers other communication techniques available in React Native. They can be used for internal communication (between JS and native layers in RN) as well as for external communication (between RN and the 'pure native' part of your app)."),Object(o.b)("p",null,"React Native enables you to perform cross-language function calls. You can execute custom native code from JS and vice versa. Unfortunately, depending on the side we are working on, we achieve the same goal in different ways. For native - we use events mechanism to schedule an execution of a handler function in JS, while for React Native we directly call methods exported by native modules."),Object(o.b)("h3",{id:"calling-react-native-functions-from-native-events"},"Calling React Native functions from native (events)"),Object(o.b)("p",null,"Events are described in detail in ",Object(o.b)("a",{parentName:"p",href:"native-components-android#events"},"this article"),". Note that using events gives us no guarantees about execution time, as the event is handled on a separate thread."),Object(o.b)("p",null,"Events are powerful, because they allow us to change React Native components without needing a reference to them. However, there are some pitfalls that you can fall into while using them:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As events can be sent from anywhere, they can introduce spaghetti-style dependencies into your project."),Object(o.b)("li",{parentName:"ul"},"Events share namespace, which means that you may encounter some name collisions. Collisions will not be detected statically, which makes them hard to debug."),Object(o.b)("li",{parentName:"ul"},"If you use several instances of the same React Native component and you want to distinguish them from the perspective of your event, you'll likely need to introduce identifiers and pass them along with events (you can use the native view's ",Object(o.b)("inlineCode",{parentName:"li"},"reactTag")," as an identifier).")),Object(o.b)("h3",{id:"calling-native-functions-from-react-native-native-modules"},"Calling native functions from React Native (native modules)"),Object(o.b)("p",null,"Native modules are Java classes that are available in JS. Typically one instance of each module is created per JS bridge. They can export arbitrary functions and constants to React Native. They have been covered in detail in ",Object(o.b)("a",{parentName:"p",href:"native-modules-android"},"this article"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Warning")),": All native modules share the same namespace. Watch out for name collisions when creating new ones.")))}l.isMDXComponent=!0}}]);