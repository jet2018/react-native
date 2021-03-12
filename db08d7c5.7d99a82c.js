(window.webpackJsonp=window.webpackJsonp||[]).push([[922],{1009:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),i=(n(0),n(1176)),r={id:"tutorial",title:"Learn the Basics"},s={unversionedId:"tutorial",id:"version-0.64/tutorial",isDocsHomePage:!1,title:"Learn the Basics",description:"React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, state, and props. If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.",source:"@site/versioned_docs/version-0.64/tutorial.md",slug:"/tutorial",permalink:"/docs/tutorial",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.64/tutorial.md",version:"0.64",lastUpdatedAt:1615576460},c=[{value:"Hello World",id:"hello-world",children:[]},{value:"What&#39;s going on here?",id:"whats-going-on-here",children:[]},{value:"Components",id:"components",children:[]},{value:"Props",id:"props",children:[]},{value:"State",id:"state",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Native is like React, but it uses native components instead of web components as building blocks. So to understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like JSX, components, ",Object(i.b)("inlineCode",{parentName:"p"},"state"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"props"),". If you already know React, you still need to learn some React-Native-specific stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not."),Object(i.b)("p",null,"Let's do this thing."),Object(i.b)("h2",{id:"hello-world"},"Hello World"),Object(i.b)("p",null,'In accordance with the ancient traditions of our people, we must first build an app that does nothing except say "Hello, world!". Here it is:'),Object(i.b)("div",{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20HelloWorldApp%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20flex%3A%201%2C%0A%20%20%20%20%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%20%20%20%20%7D%7D%3E%0A%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%0A%7D%0Aexport%20default%20HelloWorldApp%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(i.b)("p",null,"If you are feeling curious, you can play around with sample code directly in the web simulators. You can also paste it into your ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," file to create a real app on your local machine."),Object(i.b)("h2",{id:"whats-going-on-here"},"What's going on here?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"First of all, we need to import ",Object(i.b)("inlineCode",{parentName:"li"},"React")," to be able to use ",Object(i.b)("inlineCode",{parentName:"li"},"JSX"),", which will then be transformed to the native components of each platform."),Object(i.b)("li",{parentName:"ol"},"On line 2, we import the ",Object(i.b)("inlineCode",{parentName:"li"},"Text")," and ",Object(i.b)("inlineCode",{parentName:"li"},"View")," components from ",Object(i.b)("inlineCode",{parentName:"li"},"react-native"))),Object(i.b)("p",null,"Then we find the ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldApp")," function, which is a ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components"},"functional component")," and behaves in the same way as in React for the web. This function returns a ",Object(i.b)("inlineCode",{parentName:"p"},"View")," component with some styles and a",Object(i.b)("inlineCode",{parentName:"p"},"Text")," as its child."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Text")," component allows us to render a text, while the ",Object(i.b)("inlineCode",{parentName:"p"},"View")," component renders a container. This container has several styles applied, let's analyze what each one is doing."),Object(i.b)("p",null,"The first style that we find is ",Object(i.b)("inlineCode",{parentName:"p"},"flex: 1"),", the ",Object(i.b)("a",{parentName:"p",href:"layout-props#flex"},Object(i.b)("inlineCode",{parentName:"a"},"flex")),' prop will define how your items are going to "fill" over the available space along your main axis. Since we only have one container, it will take all the available space of the parent component. In this case, it is the only component, so it will take all the available screen space.'),Object(i.b)("p",null,"The following style is ",Object(i.b)("a",{parentName:"p",href:"layout-props#justifycontent"},Object(i.b)("inlineCode",{parentName:"a"},"justifyContent")),': "center". This aligns children of a container in the center of the container\'s main axis. Finally, we have ',Object(i.b)("a",{parentName:"p",href:"layout-props#alignitems"},Object(i.b)("inlineCode",{parentName:"a"},"alignItems")),': "center", which aligns children of a container in the center of the container\'s cross axis.'),Object(i.b)("p",null,"Some of the things in here might not look like JavaScript to you. Don't panic. ",Object(i.b)("em",{parentName:"p"},"This is the future"),"."),Object(i.b)("p",null,"First of all, ES2015 (also known as ES6) is a set of improvements to JavaScript that is now part of the official standard, but not yet supported by all browsers, so often it isn't used yet in web development. React Native ships with ES2015 support, so you can use this stuff without worrying about compatibility. ",Object(i.b)("inlineCode",{parentName:"p"},"import"),", ",Object(i.b)("inlineCode",{parentName:"p"},"export"),", ",Object(i.b)("inlineCode",{parentName:"p"},"const")," and ",Object(i.b)("inlineCode",{parentName:"p"},"from")," in the example above are all ES2015 features. If you aren't familiar with ES2015, you can probably pick it up by reading through sample code like this tutorial has. If you want, ",Object(i.b)("a",{parentName:"p",href:"https://babeljs.io/learn-es2015/"},"this page")," has a good overview of ES2015 features."),Object(i.b)("p",null,"The other unusual thing in this code example is ",Object(i.b)("inlineCode",{parentName:"p"},"<View><Text>Hello world!</Text></View>"),". This is JSX - a syntax for embedding XML within JavaScript. Many frameworks use a specialized templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, except instead of web things like ",Object(i.b)("inlineCode",{parentName:"p"},"<div>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<span>"),", you use React components. In this case, ",Object(i.b)("inlineCode",{parentName:"p"},"<Text>")," is a ",Object(i.b)("a",{parentName:"p",href:"intro-react-native-components"},"Core Component")," that displays some text and ",Object(i.b)("inlineCode",{parentName:"p"},"View")," is like the ",Object(i.b)("inlineCode",{parentName:"p"},"<div>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<span>"),"."),Object(i.b)("h2",{id:"components"},"Components"),Object(i.b)("p",null,"So this code is defining ",Object(i.b)("inlineCode",{parentName:"p"},"HelloWorldApp"),", a new ",Object(i.b)("inlineCode",{parentName:"p"},"Component"),". When you're building a React Native app, you'll be making new components a lot. Anything you see on the screen is some sort of component."),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"Most components can be customized when they are created, with different parameters. These creation parameters are called props."),Object(i.b)("p",null,"Your own components can also use ",Object(i.b)("inlineCode",{parentName:"p"},"props"),". This lets you make a single component that is used in many different places in your app, with slightly different properties in each place. Refer to ",Object(i.b)("inlineCode",{parentName:"p"},"props.{NAME}")," in your functional components or ",Object(i.b)("inlineCode",{parentName:"p"},"this.props.{NAME}")," in your class components. Here's an example:"),Object(i.b)("div",{className:"snack-player","data-snack-name":"Hello Props","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20center%3A%20%7B%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%0A%7D)%0A%0Aconst%20Greeting%20%3D%20(props)%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.center%7D%3E%0A%20%20%20%20%20%20%3CText%3EHello%20%7Bprops.name%7D!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20LotsOfGreetings%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%5Bstyles.center%2C%20%7Btop%3A%2050%7D%5D%7D%3E%0A%20%20%20%20%20%20%3CGreeting%20name%3D'Rexxar'%20%2F%3E%0A%20%20%20%20%20%20%3CGreeting%20name%3D'Jaina'%20%2F%3E%0A%20%20%20%20%20%20%3CGreeting%20name%3D'Valeera'%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20LotsOfGreetings%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(i.b)("p",null,"Using ",Object(i.b)("inlineCode",{parentName:"p"},"name")," as a prop lets us customize the ",Object(i.b)("inlineCode",{parentName:"p"},"Greeting")," component, so we can reuse that component for each of our greetings. This example also uses the ",Object(i.b)("inlineCode",{parentName:"p"},"Greeting")," component in JSX. The power to do this is what makes React so cool."),Object(i.b)("p",null,"The other new thing going on here is the ",Object(i.b)("a",{parentName:"p",href:"/docs/view"},Object(i.b)("inlineCode",{parentName:"a"},"View"))," component. A ",Object(i.b)("a",{parentName:"p",href:"/docs/view"},Object(i.b)("inlineCode",{parentName:"a"},"View"))," is useful as a container for other components, to help control style and layout."),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"props")," and the basic ",Object(i.b)("a",{parentName:"p",href:"/docs/text"},Object(i.b)("inlineCode",{parentName:"a"},"Text")),", ",Object(i.b)("a",{parentName:"p",href:"/docs/image"},Object(i.b)("inlineCode",{parentName:"a"},"Image")),", and ",Object(i.b)("a",{parentName:"p",href:"/docs/view"},Object(i.b)("inlineCode",{parentName:"a"},"View"))," components, you can build a wide variety of static screens. To learn how to make your app change over time, you need to ",Object(i.b)("a",{parentName:"p",href:"#state"},"learn about State"),"."),Object(i.b)("h2",{id:"state"},"State"),Object(i.b)("p",null,"Unlike props ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html#props-are-read-only"},"that are read-only")," and should not be modified, the ",Object(i.b)("inlineCode",{parentName:"p"},"state")," allows React components to change their output over time in response to user actions, network responses and anything else."),Object(i.b)("h4",{id:"whats-the-difference-between-state-and-props-in-react"},"What's the difference between state and props in React?"),Object(i.b)("p",null,"In a React component, the props are the variables that we pass from a parent component to a child component. Similarly, the state are also variables, with the difference that they are not passed as parameters, but rather that the component initializes and manages them internally."),Object(i.b)("h4",{id:"are-there-differences-between-react-and-react-native-to-handle-the-state"},"Are there differences between React and React Native to handle the state?"),Object(i.b)("div",{className:"two-columns"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"// ReactJS Counter Example using Hooks!\n\nimport React, { useState } from 'react';\n\n\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className=\"container\">\n      <p>You clicked {count} times</p>\n      <button\n        onClick={() => setCount(count + 1)}>\n        Click me!\n      </button>\n    </div>\n  );\n};\n\n\n// CSS\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"// React Native Counter Example using Hooks!\n\nimport React, { useState } from 'react';\nimport { View, Text, Button, StyleSheet } from 'react-native';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <View style={styles.container}>\n      <Text>You clicked {count} times</Text>\n      <Button\n        onPress={() => setCount(count + 1)}\n        title=\"Click me!\"\n      />\n    </View>\n  );\n};\n\n// React Native Styles\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center'\n  }\n});\n"))),Object(i.b)("p",null,"As shown above, there is no difference in handling the ",Object(i.b)("inlineCode",{parentName:"p"},"state")," between ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"React")," and ",Object(i.b)("inlineCode",{parentName:"p"},"React Native"),". You can use the state of your components both in classes and in functional components using ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),"!"),Object(i.b)("p",null,"In the following example we will show the same above counter example using classes."),Object(i.b)("div",{className:"snack-player","data-snack-name":"Hello Classes","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%0A%20%20StyleSheet%2C%0A%20%20TouchableOpacity%2C%0A%20%20Text%2C%0A%20%20View%2C%0A%7D%20from%20'react-native'%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20count%3A%200%0A%20%20%7D%0A%0A%20%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%0A%20%20%7D%0A%0A%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%3CText%3EClick%20me%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20You%20clicked%20%7B%20this.state.count%20%7D%20times%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%23DDDDDD'%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20marginBottom%3A%2010%0A%20%20%7D%0A%7D)%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0},1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||b[u]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);