(window.webpackJsonp=window.webpackJsonp||[]).push([[1014],{1099:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var i=n(3),a=n(8),r=(n(0),n(1176)),o={title:"Building <InputAccessoryView> For React Native",author:"Peter Argany",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/PeteTheHeat",authorImageURL:"https://avatars3.githubusercontent.com/u/6011080?s=400&u=028e28081107d0ab16a5cb22baca43c080f5fa50&v=4",authorTwitter:"peterargany",tags:["engineering"]},s={permalink:"/blog/2018/03/22/building-input-accessory-view-for-react-native",source:"@site/blog/2018-03-22-building-input-accessory-view-for-react-native.md",description:"Motivation",date:"2018-03-22T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Building <InputAccessoryView> For React Native",readingTime:5.875,truncated:!1,prevItem:{title:"Built with React Native - The Build.com app",permalink:"/blog/2018/04/09/build-com-app"},nextItem:{title:"Using AWS with React Native",permalink:"/blog/2018/03/05/AWS-app-sync"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Background",id:"background",children:[]},{value:"API Design",id:"api-design",children:[]},{value:"Pitfalls",id:"pitfalls",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"When will I be able to use this?",id:"when-will-i-be-able-to-use-this",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"Three years ago, a GitHub issue was opened to support input accessory view from React Native."),Object(r.b)("img",{src:"/blog/assets/input-accessory-1.png"}),Object(r.b)("p",null,"In the ensuing years, there have been countless '+1s', various workarounds, and zero concrete changes to RN on this issue - until today. Starting with iOS, ",Object(r.b)("a",{parentName:"p",href:"/docs/inputaccessoryview"},"we're exposing an API")," for accessing the native input accessory view and we are excited to share how we built it."),Object(r.b)("h2",{id:"background"},"Background"),Object(r.b)("p",null,"What exactly is an input accessory view? Reading ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiresponder/1621119-inputaccessoryview?language=objc"},"Apple's developer documentation"),", we learn that it's a custom view which can be anchored to the top of the system keyboard whenever a receiver becomes the first responder. Anything that inherits from ",Object(r.b)("inlineCode",{parentName:"p"},"UIResponder")," can redeclare the ",Object(r.b)("inlineCode",{parentName:"p"},".inputAccessoryView")," property as read-write, and manage a custom view here. The responder infrastructure mounts the view, and keeps it in sync with the system keyboard. Gestures which dismiss the keyboard, like a drag or tap, are applied to the input accessory view at the framework level. This allows us to build content with interactive keyboard dismissal, an integral feature in top-tier messaging apps like iMessage and WhatsApp."),Object(r.b)("p",null,"There are two common use cases for anchoring a view to the top of the keyboard. The first is creating a keyboard toolbar, like the Facebook composer background picker."),Object(r.b)("img",{src:"/blog/assets/input-accessory-2.gif",style:{float:"left",paddingRight:70,paddingTop:20}}),Object(r.b)("p",null,"In this scenario, the keyboard is focused on a text input field, and the input accessory view is used to provide additional keyboard functionality. This functionality is contextual to the type of input field. In a mapping application it could be address suggestions, or in a text editor, it could be rich text formatting tools."),Object(r.b)("hr",{style:{clear:"both",marginBottom:20}}),Object(r.b)("p",null,"The Objective-C UIResponder who owns the ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," in this scenario should be clear. The ",Object(r.b)("inlineCode",{parentName:"p"},"<TextInput>")," has become first responder, and under the hood this becomes an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"UITextView")," or ",Object(r.b)("inlineCode",{parentName:"p"},"UITextField"),"."),Object(r.b)("p",null,"The second common scenario is sticky text inputs:"),Object(r.b)("img",{src:"/blog/assets/input-accessory-3.gif",style:{float:"left",paddingRight:70,paddingTop:20}}),Object(r.b)("p",null,"Here, the text input is actually part of the input accessory view itself. This is commonly used in messaging applications, where a message can be composed while scrolling through a thread of previous messages."),Object(r.b)("hr",{style:{clear:"both",marginBottom:20}}),Object(r.b)("p",null,"Who owns the ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," in this example? Can it be the ",Object(r.b)("inlineCode",{parentName:"p"},"UITextView")," or ",Object(r.b)("inlineCode",{parentName:"p"},"UITextField")," again? The text input is ",Object(r.b)("em",{parentName:"p"},"inside")," the input accessory view, this sounds like a circular dependency. Solving this issue alone is ",Object(r.b)("a",{parentName:"p",href:"http://derpturkey.com/uitextfield-docked-like-ios-messenger/"},"another blog post")," in itself. Spoilers: the owner is a generic ",Object(r.b)("inlineCode",{parentName:"p"},"UIView")," subclass who we manually tell to ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiresponder/1621113-becomefirstresponder?language=objc"},"becomeFirstResponder"),"."),Object(r.b)("h2",{id:"api-design"},"API Design"),Object(r.b)("p",null,"We now know what an ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," is, and how we want to use it. The next step is designing an API that makes sense for both use cases, and works well with existing React Native components like ",Object(r.b)("inlineCode",{parentName:"p"},"<TextInput>"),"."),Object(r.b)("p",null,"For keyboard toolbars, there are a few things we want to consider:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"We want to be able to hoist any generic React Native view hierarchy into the ",Object(r.b)("inlineCode",{parentName:"li"},"<InputAccessoryView>"),"."),Object(r.b)("li",{parentName:"ol"},"We want this generic and detached view hierarchy to accept touches and be able to manipulate application state."),Object(r.b)("li",{parentName:"ol"},"We want to link an ",Object(r.b)("inlineCode",{parentName:"li"},"<InputAccessoryView>")," to a particular ",Object(r.b)("inlineCode",{parentName:"li"},"<TextInput>"),"."),Object(r.b)("li",{parentName:"ol"},"We want to be able to share an ",Object(r.b)("inlineCode",{parentName:"li"},"<InputAccessoryView>")," across multiple text inputs, without duplicating any code.")),Object(r.b)("p",null,"We can achieve #1 using a concept similar to ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/portals.html"},"React portals"),". In this design, we portal React Native views to a ",Object(r.b)("inlineCode",{parentName:"p"},"UIView")," hierarchy managed by the responder infrastructure. Since React Native views render as UIViews, this is actually quite straightforward - we can just override:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex")),Object(r.b)("p",null,"and pipe all the subviews to a new UIView hierarchy. For #2, we set up a new ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Base/RCTTouchHandler.h"},"RCTTouchHandler")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>"),". State updates are achieved by using regular event callbacks. For #3 and #4, we use the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/React/Views/UIView%2BReact.h#L28"},"nativeID")," field to locate the accessory view UIView hierarchy in native code during the creation of a ",Object(r.b)("inlineCode",{parentName:"p"},"<TextInput>")," component. This function uses the ",Object(r.b)("inlineCode",{parentName:"p"},".inputAccessoryView")," property of the underlying native text input. Doing this effectively links ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," to ",Object(r.b)("inlineCode",{parentName:"p"},"<TextInput>")," in their ObjC implementations."),Object(r.b)("p",null,"Supporting sticky text inputs (scenario 2) adds a few more constraints. For this design, the input accessory view has a text input as a child, so linking via nativeID is not an option. Instead, we set the ",Object(r.b)("inlineCode",{parentName:"p"},".inputAccessoryView")," of a generic off-screen ",Object(r.b)("inlineCode",{parentName:"p"},"UIView")," to our native ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," hierarchy. By manually telling this generic ",Object(r.b)("inlineCode",{parentName:"p"},"UIView")," to become first responder, the hierarchy is mounted by responder infrastructure. This concept is explained thoroughly in the aforementioned blog post."),Object(r.b)("h2",{id:"pitfalls"},"Pitfalls"),Object(r.b)("p",null,"Of course not everything was smooth sailing while building this API. Here are a few pitfalls we encountered, along with how we fixed them."),Object(r.b)("p",null,"An initial idea for building this API involved listening to ",Object(r.b)("inlineCode",{parentName:"p"},"NSNotificationCenter")," for UIKeyboardWill(Show/Hide/ChangeFrame) events. This pattern is used in some open-sourced libraries, and internally in some parts of the Facebook app. Unfortunately, ",Object(r.b)("inlineCode",{parentName:"p"},"UIKeyboardDidChangeFrame")," events were not being called in time to update the ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," frame on swipes. Also, changes in keyboard height are not captured by these events. This creates a class of bugs that manifest like this:"),Object(r.b)("img",{src:"/blog/assets/input-accessory-4.gif",style:{float:"left",paddingRight:70,paddingTop:20}}),Object(r.b)("p",null,"On iPhone X, text and emoji keyboard are different heights. Most applications using keyboard events to manipulate text input frames had to fix the above bug. Our solution was to commit to using the ",Object(r.b)("inlineCode",{parentName:"p"},".inputAccessoryView")," property, which meant that the responder infrastructure handles frame updates like this."),Object(r.b)("hr",{style:{clear:"both",marginBottom:20}}),Object(r.b)("p",null,"Another tricky bug we encountered was avoiding the home pill on iPhone X. You may be thinking, \u201cApple developed ",Object(r.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiview/2891102-safearealayoutguide?language=objc"},"safeAreaLayoutGuide")," for this very reason, this is trivial!\u201d. We were just as naive. The first issue is that the native ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," implementation has no window to anchor to until the moment it is about to appear. That's alright, we can override ",Object(r.b)("inlineCode",{parentName:"p"},"-(BOOL)becomeFirstResponder")," and enforce layout constraints there. Adhering to these constraints bumps the accessory view up, but another bug arises: ",Object(r.b)("img",{src:"/blog/assets/input-accessory-5.gif",style:{float:"left",paddingRight:70,paddingTop:20}})),Object(r.b)("p",null,"The input accessory view successfully avoids the home pill, but now content behind the unsafe area is visible. The solution lies in this ",Object(r.b)("a",{parentName:"p",href:"http://www.openradar.me/34411433"},"radar"),". I wrapped the native ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," hierarchy in a container which doesn't conform to the ",Object(r.b)("inlineCode",{parentName:"p"},"safeAreaLayoutGuide")," constraints. The native container covers the content in the unsafe area, while the ",Object(r.b)("inlineCode",{parentName:"p"},"<InputAccessoryView>")," stays within the safe area boundaries."),Object(r.b)("hr",{style:{clear:"both",marginBottom:20}}),Object(r.b)("h2",{id:"example-usage"},"Example Usage"),Object(r.b)("p",null,"Here's an example which builds a keyboard toolbar button to reset ",Object(r.b)("inlineCode",{parentName:"p"},"<TextInput>")," state."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"class TextInputAccessoryViewExample extends React.Component<\n  {},\n  *\n> {\n  constructor(props) {\n    super(props);\n    this.state = { text: 'Placeholder Text' };\n  }\n\n  render() {\n    const inputAccessoryViewID = 'inputAccessoryView1';\n    return (\n      <View>\n        <TextInput\n          style={styles.default}\n          inputAccessoryViewID={inputAccessoryViewID}\n          onChangeText={(text) => this.setState({ text })}\n          value={this.state.text}\n        />\n        <InputAccessoryView nativeID={inputAccessoryViewID}>\n          <View style={{ backgroundColor: 'white' }}>\n            <Button\n              onPress={() =>\n                this.setState({ text: 'Placeholder Text' })\n              }\n              title=\"Reset Text\"\n            />\n          </View>\n        </InputAccessoryView>\n      </View>\n    );\n  }\n}\n")),Object(r.b)("p",null,"Another example for ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/84ef7bc372ad870127b3e1fb8c13399fe09ecd4d/RNTester/js/InputAccessoryViewExample.js"},"Sticky Text Inputs can be found in the repository"),"."),Object(r.b)("h2",{id:"when-will-i-be-able-to-use-this"},"When will I be able to use this?"),Object(r.b)("p",null,"The full commit for this feature implementation is ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/commit/38197c8230657d567170cdaf8ff4bbb4aee732b8"},"here"),". ",Object(r.b)("a",{parentName:"p",href:"/docs/next/inputaccessoryview"},Object(r.b)("inlineCode",{parentName:"a"},"<InputAccessoryView>"))," will be available in the upcoming v0.55.0 release."),Object(r.b)("p",null,"Happy keyboarding :)"))}l.isMDXComponent=!0},1176:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),h=i,d=b["".concat(o,".").concat(h)]||b[h]||u[h]||r;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);