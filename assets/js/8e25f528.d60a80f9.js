(self.webpackChunkwiznet_cloud_docs_system=self.webpackChunkwiznet_cloud_docs_system||[]).push([[576],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,g=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5636:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),l={slug:"/rule_engine",sidebar_label:"Rule Engine",sidebar_position:5},a={unversionedId:"Dashboard/Rule engine",id:"Dashboard/Rule engine",isDocsHomePage:!1,title:"Rule engine",description:"Introduce of device rule engine",source:"@site/docs/Dashboard/Rule engine.md",sourceDirName:"Dashboard",slug:"/rule_engine",permalink:"/rule_engine",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Dashboard/Rule engine.md",version:"current",sidebar_label:"Rule Engine",sidebarPosition:5,frontMatter:{slug:"/rule_engine",sidebar_label:"Rule Engine",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Introduce of dashboard",permalink:"/introduce_of_dashboard"}},u=[{value:"Introduce of device rule engine",id:"introduce-of-device-rule-engine",children:[]},{value:"How to set device rule engine",id:"how-to-set-device-rule-engine",children:[]},{value:"how to edit device rule engine",id:"how-to-edit-device-rule-engine",children:[]},{value:"how to delete device rule engine",id:"how-to-delete-device-rule-engine",children:[]},{value:"device list",id:"device-list",children:[]},{value:"Next",id:"next",children:[]}],c={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduce-of-device-rule-engine"},"Introduce of device rule engine"),(0,o.kt)("p",null,"The data type that a IoT device certified to WIZnet is already defined by the manufacturer, and this has the advantage of being selectively utilized for specific applications. After registering the IoT device, the user is required to define user rules through ",(0,o.kt)("inlineCode",{parentName:"p"},"Rule Engine"),". At least one user rule should be defined for all data received from the registered IoT device."),(0,o.kt)("h2",{id:"how-to-set-device-rule-engine"},"How to set device rule engine"),(0,o.kt)("p",null,"When IoT device registration is complete, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Set Device Rule")," on IoT device in the list."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3624).Z})),(0,o.kt)("p",null,"In IoT device setting menu, you can check the data types already defined by the manufacturer. Users define user rules for each data type."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8722).Z})),(0,o.kt)("p",null,"The user can provide additional rules in addition to the three basic rules. If you assign a data rule, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Data range")," indicated by the rule."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Users may add more than the three basic rules for a component with Multiple Rules function"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5008).Z})),(0,o.kt)("h2",{id:"how-to-edit-device-rule-engine"},"how to edit device rule engine"),(0,o.kt)("p",null,"To edit the created rule, click ",(0,o.kt)("inlineCode",{parentName:"p"},"View Details"),", a submenu of View rules as shown below, edit the existing rule through ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," button, and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3676).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8902).Z})),(0,o.kt)("h2",{id:"how-to-delete-device-rule-engine"},"how to delete device rule engine"),(0,o.kt)("p",null,"To delete the created rule, you can delete the existing rule through ",(0,o.kt)("inlineCode",{parentName:"p"},"Remove")," button, which is a submenu of View rules, as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9656).Z})),(0,o.kt)("h2",{id:"device-list"},"device list"),(0,o.kt)("p",null,"Devices certified to WIZnet Cloud are as follows."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WizFi360-EVB-Mini"),(0,o.kt)("li",{parentName:"ul"},"WizFi360-EVB-Shield"),(0,o.kt)("li",{parentName:"ul"},"W510S2C")),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("p",null,"Learn how to register IoT device"),(0,o.kt)("p",null,"IoT \ub514\ubc14\uc774\uc2a4\uc758 \uc704\uc988\ub124\ud2b8 \ud074\ub77c\uc6b0\ub4dc \uc811\uc18d\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubd05\uc2dc\ub2e4"),(0,o.kt)("p",null,"Learn how to create user dashboard"),(0,o.kt)("p",null,"\ub300\uc2dc\ubcf4\ub4dc \uc704\uc82f \uc0dd\uc131\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\uc2dc\ub2e4"))}d.isMDXComponent=!0},3624:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rule_engine_1-e72da1956788e45c8e631098a89fa9d7.png"},8722:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rule_engine_2-d71537716375f2c6f934880a4164f0b2.png"},5008:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rule_engine_3-4d8c0f7862282d05440f3b4910b7cafd.png"},3676:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rule_engine_4-395bdc1e4dd3884b001fc804ec42e193.png"},8902:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rule_engine_5-359cf309735aa69d716069bcfbae6b27.png"},9656:function(e,t,n){"use strict";t.Z=n.p+"assets/images/rule_engine_6-4c0f426c42dcfdf9083ca85835f3cdf1.png"}}]);