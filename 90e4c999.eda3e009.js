(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{1176:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,d=p["".concat(b,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(d,c(c({ref:t},o),{},{components:a})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},720:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(1176)),b={id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"},c={unversionedId:"asyncstorage",id:"version-0.62/asyncstorage",isDocsHomePage:!1,title:"\ud83d\udea7 AsyncStorage",description:"Deprecated. Use @react-native-community/async-storage instead.",source:"@site/versioned_docs/version-0.62/asyncstorage.md",slug:"/asyncstorage",permalink:"/docs/0.62/asyncstorage",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/asyncstorage.md",version:"0.62",lastUpdatedAt:1603945169},i=[{value:"Methods",id:"methods",children:[{value:"<code>getItem()</code>",id:"getitem",children:[]},{value:"<code>setItem()</code>",id:"setitem",children:[]},{value:"<code>removeItem()</code>",id:"removeitem",children:[]},{value:"<code>mergeItem()</code>",id:"mergeitem",children:[]},{value:"<code>clear()</code>",id:"clear",children:[]},{value:"<code>getAllKeys()</code>",id:"getallkeys",children:[]},{value:"<code>flushGetRequests()</code>",id:"flushgetrequests",children:[]},{value:"<code>multiGet()</code>",id:"multiget",children:[]},{value:"<code>multiSet()</code>",id:"multiset",children:[]},{value:"<code>multiRemove()</code>",id:"multiremove",children:[]},{value:"<code>multiMerge()</code>",id:"multimerge",children:[]}]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(l.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-async-storage"},"@react-native-community/async-storage")," instead.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage."),Object(l.b)("p",null,"It is recommended that you use an abstraction on top of ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," directly for anything more than light usage since it operates globally."),Object(l.b)("p",null,"On iOS, ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," will use either ",Object(l.b)("a",{parentName:"p",href:"http://rocksdb.org/"},"RocksDB")," or SQLite based on what is available."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," JavaScript code is a facade that provides a clear JavaScript API, real ",Object(l.b)("inlineCode",{parentName:"p"},"Error")," objects, and non-multi functions. Each method in the API returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,"Importing the ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," library:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import { AsyncStorage } from 'react-native';\n")),Object(l.b)("p",null,"Persisting data:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"_storeData = async () => {\n  try {\n    await AsyncStorage.setItem(\n      '@MySuperStore:key',\n      'I like to save it.'\n    );\n  } catch (error) {\n    // Error saving data\n  }\n};\n")),Object(l.b)("p",null,"Fetching data:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"_retrieveData = async () => {\n  try {\n    const value = await AsyncStorage.getItem('TASKS');\n    if (value !== null) {\n      // We have data!!\n      console.log(value);\n    }\n  } catch (error) {\n    // Error retrieving data\n  }\n};\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"getitem"},Object(l.b)("inlineCode",{parentName:"h3"},"getItem()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)\n")),Object(l.b)("p",null,"Fetches an item for a ",Object(l.b)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Key of the item to fetch.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"?(error: ?Error, result: ?string) => void"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with a result if found or any error.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setitem"},Object(l.b)("inlineCode",{parentName:"h3"},"setItem()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),Object(l.b)("p",null,"Sets the value for a ",Object(l.b)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Key of the item to set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"value"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Value to set for the ",Object(l.b)("inlineCode",{parentName:"td"},"key"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"?(error: ?Error) => void"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with any error.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removeitem"},Object(l.b)("inlineCode",{parentName:"h3"},"removeItem()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static removeItem(key: string, [callback]: ?(error: ?Error) => void)\n")),Object(l.b)("p",null,"Removes an item for a ",Object(l.b)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Key of the item to remove.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"?(error: ?Error) => void"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with any error.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"mergeitem"},Object(l.b)("inlineCode",{parentName:"h3"},"mergeItem()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),Object(l.b)("p",null,"Merges an existing ",Object(l.b)("inlineCode",{parentName:"p"},"key")," value with an input value, assuming both values are stringified JSON. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE:")," This is not supported by all native implementations."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Key of the item to modify.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"value"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"New value to merge for the ",Object(l.b)("inlineCode",{parentName:"td"},"key"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"?(error: ?Error) => void"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with any error.")))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"let UID123_object = {\n  name: 'Chris',\n  age: 30,\n  traits: { hair: 'brown', eyes: 'brown' }\n};\n// You only need to define what will be added or updated\nlet UID123_delta = {\n  age: 31,\n  traits: { eyes: 'blue', shoe_size: 10 }\n};\n\nAsyncStorage.setItem(\n  'UID123',\n  JSON.stringify(UID123_object),\n  () => {\n    AsyncStorage.mergeItem(\n      'UID123',\n      JSON.stringify(UID123_delta),\n      () => {\n        AsyncStorage.getItem('UID123', (err, result) => {\n          console.log(result);\n        });\n      }\n    );\n  }\n);\n\n// Console log result:\n// => {'name':'Chris','age':31,'traits':\n//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"clear"},Object(l.b)("inlineCode",{parentName:"h3"},"clear()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static clear([callback]: ?(error: ?Error) => void)\n")),Object(l.b)("p",null,"Erases ",Object(l.b)("em",{parentName:"p"},"all")," ",Object(l.b)("inlineCode",{parentName:"p"},"AsyncStorage")," for all clients, libraries, etc. You probably don't want to call this; use ",Object(l.b)("inlineCode",{parentName:"p"},"removeItem")," or ",Object(l.b)("inlineCode",{parentName:"p"},"multiRemove")," to clear only your app's keys. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},"?(error: ?Error) => void"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with any error.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getallkeys"},Object(l.b)("inlineCode",{parentName:"h3"},"getAllKeys()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)\n")),Object(l.b)("p",null,"Gets ",Object(l.b)("em",{parentName:"p"},"all")," keys known to your app; for all callers, libraries, etc. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?(error: ?Error, keys: ?Array<string>) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with all keys found and any error.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flushgetrequests"},Object(l.b)("inlineCode",{parentName:"h3"},"flushGetRequests()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static flushGetRequests(): [object Object]\n")),Object(l.b)("p",null,"Flushes any pending requests using a single batch call to get the data."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"multiget"},Object(l.b)("inlineCode",{parentName:"h3"},"multiGet()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array <string>>) => void)\n")),Object(l.b)("p",null,"This allows you to batch the fetching of items given an array of ",Object(l.b)("inlineCode",{parentName:"p"},"key")," inputs. Your callback will be invoked with an array of corresponding key-value pairs found:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])\n")),Object(l.b)("p",null,"The method returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"keys"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Array<string>")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Array of key for the items to get.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>, result: ?Array<Array <string>>) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with a key-value array of the results, plus an array of any key-specific errors found.")))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"AsyncStorage.getAllKeys((err, keys) => {\n  AsyncStorage.multiGet(keys, (err, stores) => {\n    stores.map((result, i, store) => {\n      // get at each store's key/value so you can work with it\n      let key = store[i][0];\n      let value = store[i][1];\n    });\n  });\n});\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"multiset"},Object(l.b)("inlineCode",{parentName:"h3"},"multiSet()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static multiSet(keyValuePairs: Array<Array <string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),Object(l.b)("p",null,"Use this as a batch operation for storing multiple key-value pairs. When the operation completes you'll get a single callback with any errors:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"multiSet([['k1', 'val1'], ['k2', 'val2']], cb);\n")),Object(l.b)("p",null,"The method returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"keyValuePairs"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Array<Array <string>>")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Array of key-value array for the items to set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with an array of any key-specific errors found.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"multiremove"},Object(l.b)("inlineCode",{parentName:"h3"},"multiRemove()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static multiRemove(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)\n")),Object(l.b)("p",null,"Call this to batch the deletion of all keys in the ",Object(l.b)("inlineCode",{parentName:"p"},"keys")," array. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"keys"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Array<string>")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Array of key for the items to delete.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called an array of any key-specific errors found.")))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"let keys = ['k1', 'k2'];\nAsyncStorage.multiRemove(keys, (err) => {\n  // keys k1 & k2 removed, if they existed\n  // do most stuff after removal (if you want)\n});\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"multimerge"},Object(l.b)("inlineCode",{parentName:"h3"},"multiMerge()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static multiMerge(keyValuePairs: Array<Array <string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),Object(l.b)("p",null,"Batch operation to merge in existing and new values for a given set of keys. This assumes that the values are stringified JSON. Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"NOTE"),": This is not supported by all native implementations."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"keyValuePairs"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"Array<Array <string>>")),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"Array of key-value array for the items to merge.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"callback"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Function that will be called with an array of any key-specific errors found.")))),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'// first user, initial values\nlet UID234_object = {\n  name: \'Chris\',\n  age: 30,\n  traits: { hair: \'brown\', eyes: \'brown\' }\n};\n\n// first user, delta values\nlet UID234_delta = {\n  age: 31,\n  traits: { eyes: \'blue\', shoe_size: 10 }\n};\n\n// second user, initial values\nlet UID345_object = {\n  name: \'Marge\',\n  age: 25,\n  traits: { hair: \'blonde\', eyes: \'blue\' }\n};\n\n// second user, delta values\nlet UID345_delta = {\n  age: 26,\n  traits: { eyes: \'green\', shoe_size: 6 }\n};\n\nlet multi_set_pairs = [\n  [\'UID234\', JSON.stringify(UID234_object)],\n  [\'UID345\', JSON.stringify(UID345_object)]\n];\nlet multi_merge_pairs = [\n  [\'UID234\', JSON.stringify(UID234_delta)],\n  [\'UID345\', JSON.stringify(UID345_delta)]\n];\n\nAsyncStorage.multiSet(multi_set_pairs, (err) => {\n  AsyncStorage.multiMerge(multi_merge_pairs, (err) => {\n    AsyncStorage.multiGet([\'UID234\', \'UID345\'], (err, stores) => {\n      stores.map((result, i, store) => {\n        let key = store[i][0];\n        let val = store[i][1];\n        console.log(key, val);\n      });\n    });\n  });\n});\n\n// Console log results:\n// => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}\n// => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}\n')))}s.isMDXComponent=!0}}]);