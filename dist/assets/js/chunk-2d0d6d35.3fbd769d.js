(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],domProps:{value:e.email},on:{input:function(n){n.target.composing||(e.email=n.target.value)}}}),t("button",{on:{click:function(n){return e.onSendCode()}}},[e._v("发生验证码")]),e.identifyCodeHasSend?t("div",[e._v("验证码已发送至"+e._s(e.email))]):e._e()])},o=[],a=t("cebc"),u=t("5880"),r=t("ac2c"),d={name:"Register",data:function(){return{email:"xxxxxx"}},computed:Object(a["a"])({},Object(u["mapState"])({identifyCodeHasSend:function(e){return e.user.identifyCodeHasSend},registerResult:function(e){return e.user.registerResult}})),methods:{onSendCode:function(){this.$store.dispatch(r["l"],"xxx")}}},c=d,s=t("2877"),l=Object(s["a"])(c,i,o,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d6d35.3fbd769d.js.map