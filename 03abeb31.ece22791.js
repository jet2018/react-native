(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,h=b["".concat(i,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1177:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},1178:function(e,t,n){"use strict";var o=n(0),a=n(1179);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1179:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},1180:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(1178),i=n(1177),l=n(68),s=n.n(l),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,d=e.groupId,p=e.className,h=Object(r.a)(),g=h.tabGroupChoices,m=h.setTabGroupChoices,f=Object(o.useState)(l),v=f[0],O=f[1],j=o.Children.toArray(e.children);if(null!=d){var y=g[d];null!=y&&y!==v&&b.some((function(e){return e.value===y}))&&O(y)}var w=function(e){O(e),null!=d&&m(d,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(o.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},1181:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1182:function(e,t,n){"use strict";var o=n(7),a=!!o.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!o.a.canUseDOM&&navigator.platform.startsWith("Win"),i=a?"ios":"android",l=a?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},1193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png"},1215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png"},1216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif"},1217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif"},1218:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ReactDevToolsDollarR-1d3a289a44523b92e252a3c65fb82a83.gif"},147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(1176)),i=n(1180),l=n(1181),s=n(1182),c={id:"debugging",title:"Debugging"},u={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging",description:"Accessing the In-App Developer Menu",source:"@site/../docs/debugging.md",slug:"/debugging",permalink:"/docs/next/debugging",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/debugging.md",version:"current",lastUpdatedAt:1614762030,sidebar:"docs",previous:{title:"Fast Refresh",permalink:"/docs/next/fast-refresh"},next:{title:"Symbolicating a stack trace",permalink:"/docs/next/symbolication"}},b=[{value:"Accessing the In-App Developer Menu",id:"accessing-the-in-app-developer-menu",children:[]},{value:"Enabling Fast Refresh",id:"enabling-fast-refresh",children:[]},{value:"Enabling Keyboard Shortcuts",id:"enabling-keyboard-shortcuts",children:[]},{value:"LogBox",id:"logbox",children:[{value:"Console Errors and Warnings",id:"console-errors-and-warnings",children:[]},{value:"Unhandled Errors",id:"unhandled-errors",children:[]},{value:"Syntax Errors",id:"syntax-errors",children:[]}]},{value:"Chrome Developer Tools",id:"chrome-developer-tools",children:[{value:"Debugging using a custom JavaScript debugger",id:"debugging-using-a-custom-javascript-debugger",children:[]}]},{value:"Safari Developer Tools",id:"safari-developer-tools",children:[]},{value:"React Developer Tools",id:"react-developer-tools",children:[{value:"Integration with React Native Inspector",id:"integration-with-react-native-inspector",children:[]},{value:"Inspecting Component Instances",id:"inspecting-component-instances",children:[]}]},{value:"Performance Monitor",id:"performance-monitor",children:[]},{value:"Debugging Application State",id:"debugging-application-state",children:[]},{value:"Accessing console logs",id:"accessing-console-logs",children:[]},{value:"Debugging on a device with Chrome Developer Tools",id:"debugging-on-a-device-with-chrome-developer-tools",children:[]},{value:"Debugging native code",id:"debugging-native-code",children:[]}],d={toc:b};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"accessing-the-in-app-developer-menu"},"Accessing the In-App Developer Menu"),Object(r.b)("p",null,'You can access the developer menu by shaking your device or by selecting "Shake Gesture" inside the Hardware menu in the iOS Simulator. You can also use the ',Object(r.b)("inlineCode",{parentName:"p"},"\u2318D")," keyboard shortcut when your app is running in the iOS Simulator, or ",Object(r.b)("inlineCode",{parentName:"p"},"\u2318M")," when running in an Android emulator on Mac OS and ",Object(r.b)("inlineCode",{parentName:"p"},"Ctrl+M")," on Windows and Linux. Alternatively for Android, you can run the command ",Object(r.b)("inlineCode",{parentName:"p"},"adb shell input keyevent 82")," to open the dev menu (82 being the Menu key code)."),Object(r.b)("p",null,Object(r.b)("img",{src:n(1193).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The Developer Menu is disabled in release (production) builds.")),Object(r.b)("h2",{id:"enabling-fast-refresh"},"Enabling Fast Refresh"),Object(r.b)("p",null,"Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. While debugging, it can help to have ",Object(r.b)("a",{parentName:"p",href:"/docs/next/fast-refresh"},"Fast Refresh"),' enabled. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. When enabled, most of your edits should be visible within a second or two.'),Object(r.b)("h2",{id:"enabling-keyboard-shortcuts"},"Enabling Keyboard Shortcuts"),Object(r.b)("p",null,'React Native supports a few keyboard shortcuts in the iOS Simulator. They are described below. To enable them, open the Hardware menu, select Keyboard, and make sure that "Connect Hardware Keyboard" is checked.'),Object(r.b)("h2",{id:"logbox"},"LogBox"),Object(r.b)("p",null,"Errors and warnings in development builds are displayed in LogBox inside your app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"LogBox is automatically disabled in release (production) builds.")),Object(r.b)("h3",{id:"console-errors-and-warnings"},"Console Errors and Warnings"),Object(r.b)("p",null,"Console errors and warnings are displayed as on-screen notifications with a red or yellow badge, and the number of errors or warning in the console respectively. To view a console error or warnings, tap the notification to view the full screen information about the log and to paginate through all of the logs in the console."),Object(r.b)("p",null,"These notifications can be hidden using ",Object(r.b)("inlineCode",{parentName:"p"},"LogBox.ignoreAllLogs()"),". This is useful when giving product demos, for example. Additionally, notifications can be hidden on a per-log basis via ",Object(r.b)("inlineCode",{parentName:"p"},"LogBox.ignoreLogs()"),". This is useful when there's a noisy warning that cannot be fixed, like those in a third-party dependency."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Ignore logs as a last resort and create a task to fix any logs that are ignored.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { LogBox } from 'react-native';\n\n// Ignore log notification by message:\nLogBox.ignoreLogs(['Warning: ...']);\n\n// Ignore all log notifications:\nLogBox.ignoreAllLogs();\n")),Object(r.b)("h3",{id:"unhandled-errors"},"Unhandled Errors"),Object(r.b)("p",null,"Unhandled JavaScript errors such as ",Object(r.b)("inlineCode",{parentName:"p"},"undefined is not a function")," will automatically open a full screen LogBox error with the source of the error. These errors are dismissable and minimizable so that you can see the state of your app when these errors occur, but should always be addressed."),Object(r.b)("h3",{id:"syntax-errors"},"Syntax Errors"),Object(r.b)("p",null,"When syntax error occurs the full screen LogBox error will automatically open with the stack trace and location of the syntax error. This error is not dismissable because it represents invalid JavaScript execution that must be fixed before continuing with your app. To dismiss these errors, fix the syntax error and either save to automatically dismiss (with Fast Refresh enabled) or cmd+r to reload (with Fast Refresh disabled)."),Object(r.b)("h2",{id:"chrome-developer-tools"},"Chrome Developer Tools"),Object(r.b)("p",null,'To debug the JavaScript code in Chrome, select "Debug JS Remotely" from the Developer Menu. This will open a new tab at ',Object(r.b)("a",{parentName:"p",href:"http://localhost:8081/debugger-ui"},"http://localhost:8081/debugger-ui"),"."),Object(r.b)("p",null,"Select ",Object(r.b)("inlineCode",{parentName:"p"},"Tools \u2192 Developer Tools")," from the Chrome Menu to open the ",Object(r.b)("a",{parentName:"p",href:"https://developer.chrome.com/devtools"},"Developer Tools"),". You may also access the DevTools using keyboard shortcuts (",Object(r.b)("inlineCode",{parentName:"p"},"\u2318\u2325I")," on macOS, ",Object(r.b)("inlineCode",{parentName:"p"},"Ctrl")," ",Object(r.b)("inlineCode",{parentName:"p"},"Shift")," ",Object(r.b)("inlineCode",{parentName:"p"},"I")," on Windows). You may also want to enable ",Object(r.b)("a",{parentName:"p",href:"http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511"},"Pause On Caught Exceptions")," for a better debugging experience."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: on Android, if the times between the debugger and device have drifted; things such as animation, event behavior, etc., might not work properly or the results may not be accurate. Please correct this by running ",Object(r.b)("inlineCode",{parentName:"p"},'adb shell "date `date +%m%d%H%M%Y.%S%3N`"')," on your debugger machine. Root access is required for the use in real device.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: the React Developer Tools Chrome extension does not work with React Native, but you can use its standalone version instead. Read ",Object(r.b)("a",{parentName:"p",href:"/docs/next/debugging#react-developer-tools"},"this section")," to learn how.")),Object(r.b)("h3",{id:"debugging-using-a-custom-javascript-debugger"},"Debugging using a custom JavaScript debugger"),Object(r.b)("p",null,"To use a custom JavaScript debugger in place of Chrome Developer Tools, set the ",Object(r.b)("inlineCode",{parentName:"p"},"REACT_DEBUGGER"),' environment variable to a command that will start your custom debugger. You can then select "Debug JS Remotely" from the Developer Menu to start debugging.'),Object(r.b)("p",null,"The debugger will receive a list of all project roots, separated by a space. For example, if you set ",Object(r.b)("inlineCode",{parentName:"p"},'REACT_DEBUGGER="node /path/to/launchDebugger.js --port 2345 --type ReactNative"'),", then the command ",Object(r.b)("inlineCode",{parentName:"p"},"node /path/to/launchDebugger.js --port 2345 --type ReactNative /path/to/reactNative/app")," will be used to start your debugger."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Custom debugger commands executed this way should be short-lived processes, and they shouldn't produce more than 200 kilobytes of output.")),Object(r.b)("h2",{id:"safari-developer-tools"},"Safari Developer Tools"),Object(r.b)("p",null,'You can use Safari to debug the iOS version of your app without having to enable "Debug JS Remotely".'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enable Develop menu in Safari: ",Object(r.b)("inlineCode",{parentName:"li"},'Preferences \u2192 Advanced \u2192 Select "Show Develop menu in menu bar"')),Object(r.b)("li",{parentName:"ul"},"Select your app's JSContext: ",Object(r.b)("inlineCode",{parentName:"li"},"Develop \u2192 Simulator \u2192 JSContext")),Object(r.b)("li",{parentName:"ul"},"Safari's Web Inspector should open which has a Console and a Debugger")),Object(r.b)("p",null,"While sourcemaps may not be enabled by default, you can follow ",Object(r.b)("a",{parentName:"p",href:"http://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html"},"this guide")," or ",Object(r.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GrGqIIz51k4"},"video")," to enable them and set break points at the right places in the source code."),Object(r.b)("p",null,'However, every time the app is reloaded (using live reload, or by manually reloading), a new JSContext is created. Choosing "Automatically Show Web Inspectors for JSContexts" saves you from having to select the latest JSContext manually.'),Object(r.b)("h2",{id:"react-developer-tools"},"React Developer Tools"),Object(r.b)("p",null,"You can use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/master/packages/react-devtools"},"the standalone version of React Developer Tools")," to debug the React component hierarchy. To use it, install the ",Object(r.b)("inlineCode",{parentName:"p"},"react-devtools")," package globally:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Version 4 of ",Object(r.b)("inlineCode",{parentName:"p"},"react-devtools")," requires ",Object(r.b)("inlineCode",{parentName:"p"},"react-native")," version 0.62 or higher to work properly.")),Object(r.b)(i.a,{groupId:"package-manager",defaultValue:s.a.defaultPackageManager,values:s.a.packageManagers,mdxType:"Tabs"},Object(r.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g react-devtools\n"))),Object(r.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"yarn global add react-devtools\n")))),Object(r.b)("p",null,"Now run ",Object(r.b)("inlineCode",{parentName:"p"},"react-devtools")," from the terminal to launch the standalone DevTools app:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"react-devtools\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"React DevTools",src:n(1215).default})),Object(r.b)("p",null,"It should connect to your simulator within a few seconds."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: if you prefer to avoid global installations, you can add ",Object(r.b)("inlineCode",{parentName:"p"},"react-devtools")," as a project dependency. Add the ",Object(r.b)("inlineCode",{parentName:"p"},"react-devtools")," package to your project using ",Object(r.b)("inlineCode",{parentName:"p"},"npm install --save-dev react-devtools"),", then add ",Object(r.b)("inlineCode",{parentName:"p"},'"react-devtools": "react-devtools"')," to the ",Object(r.b)("inlineCode",{parentName:"p"},"scripts")," section in your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", and then run ",Object(r.b)("inlineCode",{parentName:"p"},"npm run react-devtools")," from your project folder to open the DevTools.")),Object(r.b)("h3",{id:"integration-with-react-native-inspector"},"Integration with React Native Inspector"),Object(r.b)("p",null,'Open the in-app developer menu and choose "Toggle Inspector". It will bring up an overlay that lets you tap on any UI element and see information about it:'),Object(r.b)("p",null,Object(r.b)("img",{alt:"React Native Inspector",src:n(1216).default})),Object(r.b)("p",null,"However, when ",Object(r.b)("inlineCode",{parentName:"p"},"react-devtools")," is running, Inspector will enter a collapsed mode, and instead use the DevTools as primary UI. In this mode, clicking on something in the simulator will bring up the relevant components in the DevTools:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"React DevTools Inspector Integration",src:n(1217).default})),Object(r.b)("p",null,'You can choose "Toggle Inspector" in the same menu to exit this mode.'),Object(r.b)("h3",{id:"inspecting-component-instances"},"Inspecting Component Instances"),Object(r.b)("p",null,"When debugging JavaScript in Chrome, you can inspect the props and state of the React components in the browser console."),Object(r.b)("p",null,"First, follow the instructions for debugging in Chrome to open the Chrome console."),Object(r.b)("p",null,"Make sure that the dropdown in the top left corner of the Chrome console says ",Object(r.b)("inlineCode",{parentName:"p"},"debuggerWorker.js"),". ",Object(r.b)("strong",{parentName:"p"},"This step is essential.")),Object(r.b)("p",null,"Then select a React component in React DevTools. There is a search box at the top that helps you find one by name. As soon as you select it, it will be available as ",Object(r.b)("inlineCode",{parentName:"p"},"$r")," in the Chrome console, letting you inspect its props, state, and instance properties."),Object(r.b)("p",null,Object(r.b)("img",{alt:"React DevTools Chrome Console Integration",src:n(1218).default})),Object(r.b)("h2",{id:"performance-monitor"},"Performance Monitor"),Object(r.b)("p",null,'You can enable a performance overlay to help you debug performance problems by selecting "Perf Monitor" in the Developer Menu.'),Object(r.b)("hr",{style:{marginTop:25,marginBottom:25}}),Object(r.b)("h2",{id:"debugging-application-state"},"Debugging Application State"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron"},"Reactotron")," is an open-source desktop app that allows you to inspect Redux or MobX-State-Tree application state as well as view custom logs, run custom commands such as resetting state, store and restore state snapshots, and other helpful debugging features for React Native apps."),Object(r.b)("p",null,"You can view installation instructions ",Object(r.b)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron"},"in the README"),". If you're using Expo, here is an article detailing ",Object(r.b)("a",{parentName:"p",href:"https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a"},"how to install on Expo"),"."),Object(r.b)("h1",{id:"native-debugging"},"Native Debugging"),Object(r.b)("div",{className:"banner-native-code-required"},Object(r.b)("h3",null,"Projects with Native Code Only"),Object(r.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",Object(r.b)("code",null,"expo-cli")," workflow, see the guide on ",Object(r.b)("a",{href:"https://docs.expo.io/versions/latest/workflow/customizing/",target:"_blank"},"ejecting")," to use this API.")),Object(r.b)("h2",{id:"accessing-console-logs"},"Accessing console logs"),Object(r.b)("p",null,"You can display the console logs for an iOS or Android app by using the following commands in a terminal while the app is running:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npx react-native log-ios\nnpx react-native log-android\n")),Object(r.b)("p",null,"You may also access these through ",Object(r.b)("inlineCode",{parentName:"p"},"Debug \u2192 Open System Log...")," in the iOS Simulator or by running ",Object(r.b)("inlineCode",{parentName:"p"},"adb logcat *:S ReactNative:V ReactNativeJS:V")," in a terminal while an Android app is running on a device or emulator."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you're using Create React Native App or Expo CLI, console logs already appear in the same terminal output as the bundler.")),Object(r.b)("h2",{id:"debugging-on-a-device-with-chrome-developer-tools"},"Debugging on a device with Chrome Developer Tools"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you're using Create React Native App or Expo CLI, this is configured for you already.")),Object(r.b)("p",null,"On iOS devices, open the file ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/RCTWebSocketExecutor.m"},Object(r.b)("inlineCode",{parentName:"a"},"RCTWebSocketExecutor.m")),' and change "localhost" to the IP address of your computer, then select "Debug JS Remotely" from the Developer Menu.'),Object(r.b)("p",null,"On Android 5.0+ devices connected via USB, you can use the ",Object(r.b)("a",{parentName:"p",href:"http://developer.android.com/tools/help/adb.html"},Object(r.b)("inlineCode",{parentName:"a"},"adb")," command line tool")," to setup port forwarding from the device to your computer:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"adb reverse tcp:8081 tcp:8081")),Object(r.b)("p",null,'Alternatively, select "Dev Settings" from the Developer Menu, then update the "Debug server host for device" setting to match the IP address of your computer.'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you run into any issues, it may be possible that one of your Chrome extensions is interacting in unexpected ways with the debugger. Try disabling all of your extensions and re-enabling them one-by-one until you find the problematic extension.")),Object(r.b)("h2",{id:"debugging-native-code"},"Debugging native code"),Object(r.b)("p",null,"When working with native code, such as when writing native modules, you can launch the app from Android Studio or Xcode and take advantage of the native debugging features (setting up breakpoints, etc.) as you would in case of building a standard native app."))}p.isMDXComponent=!0}}]);