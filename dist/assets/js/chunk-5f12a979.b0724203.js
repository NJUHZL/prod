(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f12a979"],{"0024":function(t,e,n){"use strict";var i=n("933f"),a=n.n(i);a.a},"1f09":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole",staticStyle:{width:"100%",float:"top"},attrs:{id:"nav"}},[n("el-menu",{staticClass:"el-menu-demo",staticStyle:{"padding-left":"10%","padding-right":"10%",border:"none"},attrs:{mode:"horizontal","background-color":"transparent","text-color":"#fff","active-text-color":"lightskyblue",id:"navBody"}},[n("el-menu-item",{staticStyle:{"padding-bottom":"2px"},attrs:{index:"1"}},[n("a",{attrs:{href:"/"}},[n("img",{staticStyle:{width:"58px"},attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/hzl_logo.png"}})])]),n("el-menu-item",{attrs:{id:"evaluate",index:"3"}},[n("a",{attrs:{href:"/"}},[t._v("首页")])]),n("el-menu-item",{attrs:{id:"guide",index:"4"}},[n("a",{attrs:{href:"/news"}},[t._v("新闻")])]),n("el-menu-item",{attrs:{index:"5",disabled:""}},[n("a",{attrs:{href:"/courses"}},[t._v("课程")])]),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"6"}},[n("a",{attrs:{href:"/login",id:"login"}},[t._v("登录")]),t._v("\n      /\n      "),n("a",{attrs:{href:"/signup",id:"signup"}},[t._v("注册")])])],1)],1)},a=[],o={inject:["reload"],name:"navi",data:function(){return{activeIndex:"1"}},mounted:function(){if("online"===localStorage.njuhzl_state){var t=this;$("#login").text("切换账号"),$("#signup").attr("href","#"),$("#signup").text("退出登录"),$("#signup").on("click",function(){console.log("logout"),localStorage.removeItem("njuhzl_state"),localStorage.removeItem("njuhzl_root"),t.reload()})}}},s=o,r=(n("e833"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,"05406fef",null);e["a"]=c.exports},"588b":function(t,e,n){"use strict";var i=n("9bd2"),a=n.n(i);a.a},"77ad":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"},style:{minHeight:t.minHeight+"px"}},[n("div",{attrs:{id:"navi"}},[n("navi")],1),n("router-view",{attrs:{id:"main"}}),n("foot",{attrs:{id:"foot"}}),n("div",{attrs:{id:"rightBar"}},[n("rightBar")],1)],1)},a=[],o=n("1f09"),s=n("77b9"),r=n("f96e"),c={name:"DefaultLayout",data:function(){return{minHeight:0}},components:{navi:o["a"],foot:s["a"],rightBar:r["a"]},mounted:function(){this.minHeight=window.screen.availHeight,console.log(this.minHeight),console.log(document.body.scrollHeight),document.body.scrollHeight<=this.minHeight?$("#foot").css("position","absolute"):$("#foot").css("position","inherit")}},l=c,u=(n("a89a"),n("2877")),h=Object(u["a"])(l,i,a,!1,null,"c25e6cae",null);e["default"]=h.exports},"77b9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[t._v("\n    @2018 by "),n("p",{staticStyle:{color:"white",display:"inline-block"}},[t._v("Nanjing University")]),n("a",{staticStyle:{display:"inline-block","margin-left":"30px",color:"lightgoldenrodyellow"},attrs:{href:"http://www.miitbeian.gov.cn/"}},[t._v("苏ICP备19010277号-1")])])}],o={name:"foot"},s=o,r=(n("0024"),n("2877")),c=Object(r["a"])(s,i,a,!1,null,"c75f1336",null);e["a"]=c.exports},"933f":function(t,e,n){},"9bd2":function(t,e,n){},a89a:function(t,e,n){"use strict";var i=n("dba4"),a=n.n(i);a.a},dba4:function(t,e,n){},dc36:function(t,e,n){},e833:function(t,e,n){"use strict";var i=n("dc36"),a=n.n(i);a.a},f96e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightBarContainer"},[n("div",{attrs:{id:"share"}},[t._m(0),n("div",{attrs:{id:"shareContainer"}},[n("img",{staticClass:"shareChoice",attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/qq.png"},on:{click:t.qqShare}}),n("img",{staticClass:"shareChoice",attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/wechat.png"}}),n("img",{staticClass:"shareChoice",attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/sina.png"},on:{click:t.sinaShare}})])]),t._m(1),t._m(2),t._m(3),n("div")])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem"},[n("i",{staticClass:"el-icon-share"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem",attrs:{id:"favourite"}},[n("i",{staticClass:"el-icon-star-off"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem"},[n("a",[t._v("意见"),n("br"),t._v("反馈")]),n("i",{staticClass:"el-icon-edit-outline"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem",attrs:{id:"backTop"}},[n("a",[t._v("返回"),n("br"),t._v("顶部")]),n("i",{staticClass:"el-icon-caret-top"})])}],o="NJU核真录",s="http://193.112.82.110:3030/",r="../assets/img/hzl_logo.png",c={name:"rightBar",mounted:function(){var t=$("#backTop");t.on("click",function(){$("html,body").animate({scrollTop:0},500)}),$(window).on("scroll",function(){$(window).scrollTop()>$(window).height()?t.fadeIn():t.fadeOut()}),$(window).trigger("scroll"),$("#favourite").click(function(){var t=-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL";document.all?window.external.addFavorite("http://localhost:8080","trust平台"):window.sidebar?window.sidebar.addPanel("trust平台","http://localhost:8080",""):alert("您可以尝试通过快捷键"+t+" + D 加入到收藏夹~")}),$("#share").hover(function(){$("#shareContainer").animate({width:"toggle"},350)})},methods:{qqShare:function(){var t="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary="+encodeURIComponent(o)+"&url="+encodeURIComponent(s||document.location)+"&pics="+encodeURIComponent(r);window.open(t,"newwindow","height=400,width=400,top=100,left=100")},sinaShare:function(){var t="http://v.t.sina.com.cn/share/share.php?title="+encodeURIComponent(o)+"&url="+encodeURIComponent(s||document.location)+"&pics="+encodeURIComponent(r);window.open(t,"newwindow","height=400,width=400,top=100,left=100")}}},l=c,u=(n("588b"),n("2877")),h=Object(u["a"])(l,i,a,!1,null,"45a167c5",null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-5f12a979.b0724203.js.map