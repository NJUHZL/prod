(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70df1dac"],{"33dc":function(e,t,n){"use strict";var i=n("799d"),s=n.n(i);s.a},"62c4":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"mainbox"},[n("div",{staticClass:"mainbody"},[n("h3",{staticStyle:{color:"white",float:"top"},attrs:{align:"center"}},[e._v("注册")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],staticStyle:{"margin-top":"20px"},attrs:{id:"nickname",type:"text",align:"center",placeholder:"请输入昵称，长度在2到15个字符之间"},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticStyle:{"margin-top":"20px"},attrs:{id:"password",type:"password",align:"center",placeholder:"请输入密码，长度在6到20个字符之间"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirm,expression:"passwordConfirm"}],staticStyle:{"margin-top":"20px"},attrs:{id:"passwordConfirm",type:"password",align:"center",placeholder:"确认密码"},domProps:{value:e.passwordConfirm},on:{input:function(t){t.target.composing||(e.passwordConfirm=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticStyle:{"margin-top":"20px"},attrs:{id:"email",type:"text",placeholder:"请输入邮箱地址"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.identifyCode,expression:"identifyCode"}],staticStyle:{"margin-top":"20px",width:"40%"},attrs:{id:"identifyCode",type:"text",placeholder:"请输入验证码"},domProps:{value:e.identifyCode},on:{input:function(t){t.target.composing||(e.identifyCode=t.target.value)}}}),n("button",{attrs:{id:"sendEmail"},on:{click:function(t){return e.sendEmail()}}},[e._v("获取验证码")]),n("br"),n("button",{staticClass:"bigButton",attrs:{id:"signup"},on:{click:function(t){return e.register()}}},[e._v("注册")]),n("br"),e._m(0)])]),e._m(1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"20px"}},[n("a",{staticStyle:{"font-size":"16px",color:"yellow"},attrs:{href:"/login"}},[e._v("已有账号，立即登录")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"/"}},[n("img",{staticStyle:{width:"8%",position:"fixed",top:"20px",left:"6%"},attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/hzl_logo.png"}})])}],a=(n("96cf"),n("3b8d")),r=n("cebc"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("ac2c")),c=n("5880"),d={name:"signup",data:function(){return{nickname:"",password:"",passwordConfirm:"",email:"",identifyCode:""}},computed:Object(r["a"])({},Object(c["mapState"])({registerResult:function(e){return e.user.registerResult},identifyCodeHasSend:function(e){return e.user.identifyCodeHasSend},token:function(e){return e.user.token}})),mounted:function(){var e=this;$("#nickname").change(function(){console.log(e.nickname),e.nickname.length<2?(alert("用户名长度过短"),$("#signup").attr("disabled",!0),this.focus()):e.nickname.length>15?(alert("用户名长度过长"),$("#signup").attr("disabled",!0),this.focus()):$("#signup").attr("disabled",!1)}),$("#password").change(function(){console.log(e.password),e.password.length<6?(alert("密码长度过短"),$("#signup").attr("disabled",!0),this.focus()):e.password.length>20?(alert("密码长度过长"),$("#signup").attr("disabled",!0),this.focus()):$("#signup").attr("disabled",!1)}),$("#passwordConfirm").change(function(){e.passwordConfirm!=e.password?(alert("密码前后不一致"),$("#signup").attr("disabled",!0),this.focus()):$("#signup").attr("disabled",!1)})},methods:{register:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch(o["k"],{email:this.email,nickname:this.nickname,password:this.password,identifyCode:this.identifyCode,token:this.token});case 2:console.log(this.registerResult),1===this.registerResult.code?(this.$message({message:"注册成功",type:"success"}),this.$router.push({name:"login"})):this.$message({message:this.registerResult.msg,type:"error"});case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),sendEmail:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch(o["l"],{user_email:this.email});case 2:console.log("SIGN UP: "+this.identifyCodeHasSend),0===this.identifyCodeHasSend?this.$message({message:"发送失败，请检查邮箱正确性",type:"error"}):($("#sendEmail").attr("disabled",!0),t=60,n=setInterval(function(){t--,t>=0?$("#sendEmail").html(t+"s后可重发送"):($("#sendEmail").html("发送验证码"),$("#sendEmail").attr("disabled",!1),clearTimeout(n),t=60)},1e3));case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},l=d,u=(n("33dc"),n("2877")),p=Object(u["a"])(l,i,s,!1,null,"580f075e",null);t["default"]=p.exports},"799d":function(e,t,n){}}]);
//# sourceMappingURL=chunk-70df1dac.83d50deb.js.map