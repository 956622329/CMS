(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-694509c2"],{1288:function(e,t,c){},"1ae4":function(e,t,c){e.exports=c.p+"img/logo.1829caec.svg"},"2a626":function(e,t,c){},"5e7a":function(e,t,c){"use strict";c("1288")},"6d49":function(e,t,c){"use strict";c("7e9a")},"7e9a":function(e,t,c){},"85d4":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o={class:"main"},r={class:"page-info"};function a(e,t,c,a,l,u){var b=Object(n["resolveComponent"])("nav-menu"),i=Object(n["resolveComponent"])("el-aside"),d=Object(n["resolveComponent"])("nav-header"),j=Object(n["resolveComponent"])("el-header"),O=Object(n["resolveComponent"])("router-view"),s=Object(n["resolveComponent"])("el-main"),p=Object(n["resolveComponent"])("el-container");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createVNode"])(p,{class:"main-content"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{width:e.isCollapse?"60px":"210px"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{collapse:e.isCollapse},null,8,["collapse"])]})),_:1},8,["width"]),Object(n["createVNode"])(p,{class:"page"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(j,{class:"page-header"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{onFoldChange:e.handleFoldChanage},null,8,["onFoldChange"])]})),_:1}),Object(n["createVNode"])(s,{class:"page-content"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",r,[Object(n["createVNode"])(O)])]})),_:1})]})),_:1})]})),_:1})])}c("b0c0");var l=c("1ae4"),u=c.n(l),b=function(e){return Object(n["pushScopeId"])("data-v-5f4f91aa"),e=e(),Object(n["popScopeId"])(),e},i={class:"nav-menu"},d={class:"logo"},j=b((function(){return Object(n["createElementVNode"])("img",{class:"img",src:u.a,alt:"logo"},null,-1)})),O={key:0,class:"title"};function s(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("el-icon"),u=Object(n["resolveComponent"])("el-menu-item"),b=Object(n["resolveComponent"])("el-sub-menu"),s=Object(n["resolveComponent"])("el-menu");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createElementVNode"])("div",d,[j,e.collapse?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",O,"Vue3+TS"))]),Object(n["createVNode"])(s,{"default-active":e.defaultValue,class:"el-menu-vertical","background-color":"#0c2135",collapse:e.collapse,"text-color":"#b7bdc3","active-text-color":"#0a60bd"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.userMenus,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t.id},[1===t.type?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:0,index:t.id+""},{title:Object(n["withCtx"])((function(){return[t.icon?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.menuIconName(t.icon))))]})),_:2},1024)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.name),1)]})),default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.children,(function(t){return Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:t.id,index:t.id+"",onClick:function(c){return e.handleMenuItemClick(t)}},{title:Object(n["withCtx"])((function(){return[t.icon?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.menuIconName(t.icon))))]})),_:2},1024)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.name),1)]})),_:2},1032,["index","onClick"])})),128))]})),_:2},1032,["index"])):2===t.type?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:1,index:t.id+""},{default:Object(n["withCtx"])((function(){return[t.icon?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.menuIconName(t.icon))))]})),_:2},1024)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(t.name),1)]})),_:2},1032,["index"])):Object(n["createCommentVNode"])("",!0)],64)})),128))]})),_:1},8,["default-active","collapse"])])}c("159b"),c("ac1f"),c("1276"),c("fb6a");var p=c("0613"),m=c("6c02"),f=c("09e6"),C=Object(n["defineComponent"])({props:{collapse:{type:Boolean,default:!1}},setup:function(){var e=Object(p["c"])(),t=Object(n["computed"])((function(){return e.state.login.userMenus})),c=Object(m["d"])(),o=Object(m["c"])(),r=o.path,a=Object(f["d"])(t.value,r),l=Object(n["ref"])(a.id+""),u=function(e){var t;c.push({path:null!==(t=e.url)&&void 0!==t?t:"/not-found"})},b=function(e){var t="";return e.slice(8).split("-").forEach((function(e){t=t+e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})),t};return{userMenus:t,menuIconName:b,handleMenuItemClick:u,defaultValue:l}}});c("5e7a");C.render=s,C.__scopeId="data-v-5f4f91aa";var v=C,k=v,h={class:"nav-header"},B={class:"content"};function N(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("el-icon"),u=Object(n["resolveComponent"])("Fold"),b=Object(n["resolveComponent"])("tc-breadcrumb"),i=Object(n["resolveComponent"])("user-info");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",h,[e.isFold?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,class:"fold-menu",onClick:e.handleFoldClick},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])("Expand")))]})),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.isFold?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:1,class:"fold-menu",onClick:e.handleFoldClick},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u)]})),_:1},8,["onClick"])),Object(n["createElementVNode"])("div",B,[Object(n["createVNode"])(b,{breadcrumbs:e.breadcrumbs},null,8,["breadcrumbs"]),Object(n["createVNode"])(i)])])}var V={class:"user-info"},w={class:"el-dropdown-link"},x=Object(n["createTextVNode"])("退出登录"),g=Object(n["createTextVNode"])("用户信息"),_=Object(n["createTextVNode"])("系统管理");function y(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("el-avatar"),u=Object(n["resolveComponent"])("arrow-down"),b=Object(n["resolveComponent"])("el-icon"),i=Object(n["resolveComponent"])("el-dropdown-item"),d=Object(n["resolveComponent"])("el-dropdown-menu"),j=Object(n["resolveComponent"])("el-dropdown");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",V,[Object(n["createVNode"])(j,null,{dropdown:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{icon:"CircleClose"},{default:Object(n["withCtx"])((function(){return[x]})),_:1}),Object(n["createVNode"])(i,{divided:""},{default:Object(n["withCtx"])((function(){return[g]})),_:1}),Object(n["createVNode"])(i,null,{default:Object(n["withCtx"])((function(){return[_]})),_:1})]})),_:1})]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("span",w,[Object(n["createVNode"])(l,{size:35,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.name),1),Object(n["createVNode"])(b,{class:"el-icon--right"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u)]})),_:1})])]})),_:1})])}var E=Object(n["defineComponent"])({setup:function(){var e=Object(p["c"])(),t=Object(n["computed"])((function(){return e.state.login.userInfo.name}));return{name:t}}});c("96ea");E.render=y,E.__scopeId="data-v-15a70904";var F=E,I={class:"nav-breadcrumb"};function D(e,t,c,o,r,a){var l=Object(n["resolveComponent"])("el-breadcrumb-item"),u=Object(n["resolveComponent"])("el-breadcrumb");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",I,[Object(n["createVNode"])(u,{separator:"/"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.breadcrumbs,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:e.name,to:{path:e.path}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])})),128))]})),_:1})])}var S=Object(n["defineComponent"])({props:{breadcrumbs:{type:Array,defalut:function(){return[]}}},setup:function(){return{}}});S.render=D;var M=S,T=M,L=Object(n["defineComponent"])({components:{UserInfo:F,TcBreadcrumb:T},emits:["foldChange"],setup:function(e,t){var c=t.emit,o=Object(n["ref"])(!1),r=function(){o.value=!o.value,c("foldChange",o.value)},a=Object(p["c"])(),l=a.state.login.userMenus,u=Object(n["computed"])((function(){var e=Object(m["c"])(),t=e.path;return Object(f["c"])(l,t)}));return{isFold:o,handleFoldClick:r,breadcrumbs:u}}});c("c9ed");L.render=N,L.__scopeId="data-v-37e2b0cf";var J=L,U=J,z=Object(n["defineComponent"])({components:{NavMenu:k,NavHeader:U},setup:function(){var e=Object(n["ref"])(!1),t=function(t){e.value=t};return{isCollapse:e,handleFoldChanage:t}}});c("6d49");z.render=a,z.__scopeId="data-v-090a3d88";t["default"]=z},"96ea":function(e,t,c){"use strict";c("cdab")},c9ed:function(e,t,c){"use strict";c("2a626")},cdab:function(e,t,c){}}]);
//# sourceMappingURL=chunk-694509c2.0eef3106.js.map