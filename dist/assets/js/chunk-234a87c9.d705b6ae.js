(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-234a87c9"],{"0024":function(t,e,n){"use strict";var a=n("933f"),i=n.n(a);i.a},"01ed":function(t,e,n){},"1c7a":function(t,e,n){"use strict";var a=n("dbc4"),i=n.n(a);i.a},"1f09":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whole",staticStyle:{width:"100%",float:"top"},attrs:{id:"nav"}},[n("el-menu",{staticClass:"el-menu-demo",staticStyle:{"padding-left":"10%","padding-right":"10%",border:"none"},attrs:{mode:"horizontal","background-color":"transparent","text-color":"#fff","active-text-color":"lightskyblue",id:"navBody"}},[n("el-menu-item",{staticStyle:{"padding-bottom":"2px"},attrs:{index:"1"}},[n("a",{attrs:{href:"/"}},[n("img",{staticStyle:{width:"58px"},attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/hzl_logo.png"}})])]),n("el-menu-item",{attrs:{id:"evaluate",index:"3"}},[n("a",{attrs:{href:"/"}},[t._v("首页")])]),n("el-menu-item",{attrs:{id:"guide",index:"4"}},[n("a",{attrs:{href:"/news"}},[t._v("新闻")])]),n("el-menu-item",{attrs:{index:"5",disabled:""}},[n("a",{attrs:{href:"/courses"}},[t._v("课程")])]),n("el-menu-item",{staticStyle:{float:"right"},attrs:{index:"6"}},[n("a",{attrs:{href:"/login",id:"login"}},[t._v("登录")]),t._v("\n      /\n      "),n("a",{attrs:{href:"/signup",id:"signup"}},[t._v("注册")])])],1)],1)},i=[],s={inject:["reload"],name:"navi",data:function(){return{activeIndex:"1"}},mounted:function(){if("online"===localStorage.njuhzl_state){var t=this;$("#login").text("切换账号"),$("#signup").attr("href","#"),$("#signup").text("退出登录"),$("#signup").on("click",function(){console.log("logout"),localStorage.removeItem("njuhzl_state"),localStorage.removeItem("njuhzl_root"),t.reload()})}}},c=s,o=(n("e833"),n("2877")),r=Object(o["a"])(c,a,i,!1,null,"05406fef",null);e["a"]=r.exports},"588b":function(t,e,n){"use strict";var a=n("9bd2"),i=n.n(a);i.a},"77b9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"foot"},[t._v("\n    @2018 by "),n("p",{staticStyle:{color:"white",display:"inline-block"}},[t._v("Nanjing University")]),n("a",{staticStyle:{display:"inline-block","margin-left":"30px",color:"lightgoldenrodyellow"},attrs:{href:"http://www.miitbeian.gov.cn/"}},[t._v("苏ICP备19010277号-1")])])}],s={name:"foot"},c=s,o=(n("0024"),n("2877")),r=Object(o["a"])(c,a,i,!1,null,"c75f1336",null);e["a"]=r.exports},"8ad8":function(t,e,n){},"933f":function(t,e,n){},"9bd2":function(t,e,n){},a082:function(t,e,n){},a9e8:function(t,e,n){"use strict";var a=n("01ed"),i=n.n(a);i.a},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("div",{attrs:{id:"navi"}},[n("navi")],1),n("div",[n("carousel",{}),t._m(0),n("div",{staticStyle:{"margin-left":"10%","margin-top":"80px"}},[t._l(t.latestPassage,function(e,a){return n("abstract",{key:a,staticStyle:{cursor:"pointer","vertical-align":"top"},attrs:{title:e.title,abstract:e.abstract,postTime:e.date},nativeOn:{click:function(n){return t.showDetail(e.id)}}})}),n("img",{staticStyle:{width:"2%",display:"inline-block","vertical-align":"top","padding-top":"10px"},attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/commentIcon.png"}}),n("div",{staticStyle:{width:"18%",display:"inline-block","vertical-align":"top"}},t._l(t.latestComments,function(e,a){return n("recommendComment",{key:a,staticStyle:{cursor:"pointer","vertical-align":"top"},attrs:{comment:e.comment,postTime:e.postTime},nativeOn:{click:function(n){return t.showDetail(e.passageID)}}})}),1)],2),n("banner",{staticClass:"banner",staticStyle:{"margin-top":"120px"}}),t._m(1)],1),n("foot",{attrs:{id:"foot"}}),n("div",{attrs:{id:"rightBar"}},[n("rightBar")],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content",staticStyle:{"margin-top":"100px"}},[n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticClass:"el-card is-always-shadow function-card"},[n("img",{attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/事实核查.png"}})]),n("div",{staticClass:"el-card is-always-shadow function-card"},[n("img",{attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/可视化新闻.png"}})]),n("div",{staticClass:"el-card is-always-shadow function-card"},[n("img",{attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/研究中心.png"}})]),n("div",{staticClass:"el-card is-always-shadow function-card"},[n("img",{attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/质量报告.png"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center","padding-bottom":"60px"}},[n("div",{staticClass:"introBlock"},[n("h2",[n("i",{staticClass:"el-icon-success",staticStyle:{color:"lightblue"}}),t._v("  新闻核实")]),n("p",[t._v("“核真录”始终免费开放的功能，为公众提供免费的新闻核实、查验服务，对各种假新闻、错误信息、谣言等进行核查和澄清。")]),n("a",[t._v("更多信息 "),n("p",{staticStyle:{"font-size":"10px",display:"inline-block"}},[t._v(">>")])])]),n("div",{staticClass:"introBlock"},[n("h2",[n("i",{staticClass:"el-icon-success",staticStyle:{color:"lightblue"}}),t._v("  课程培训")]),n("p",[t._v("“核真录”开拓新闻素养课程培训作为会员订阅付费内容，我们将长期连续提供专业的新闻素养教学课程及实施案例分析。")]),n("a",[t._v("更多信息 "),n("p",{staticStyle:{"font-size":"10px",display:"inline-block"}},[t._v(">>")])])]),n("div",{staticClass:"introBlock"},[n("h2",[n("i",{staticClass:"el-icon-success",staticStyle:{color:"lightblue"}}),t._v("  行研报告")]),n("p",[t._v("“核真录”开拓媒介研究报告作为会员订阅付费内容，我们将以会员付费订阅的方式定期向订阅的会员推送最前沿的媒介研究报告。")]),n("a",[t._v("更多信息 "),n("p",{staticStyle:{"font-size":"10px",display:"inline-block"}},[t._v(">>")])])])])}],s=(n("96cf"),n("3b8d")),c=n("cebc"),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("1f09")),r=n("77b9"),l=n("f96e"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bannerContainer",staticStyle:{width:"100%"},attrs:{id:"banner"}},[n("div",{staticStyle:{"text-align":"center"}},[n("h1",[t._v("Hello and welcome to our websites!")]),n("p",{staticStyle:{"line-height":"30px"}},[n("a",[t._v("核真录")]),t._v("是一个为了实现目标社会价值，"),n("br"),t._v("发展的集内容生产、信息素养教学与媒介研究于一体的创新平台。"),n("br"),t._v("\n      我们以"),n("a",[t._v("核查")]),t._v("和"),n("a",[t._v("澄清")]),t._v("各种假新闻、错误信息、谣言为主要任务，始终对公众免费开放，"),n("br"),t._v("\n      为公众提供免费的"),n("a",[t._v("信息核实")]),t._v("、"),n("a",[t._v("查验服务")]),t._v("。\n    ")])])])}],h={name:"banner"},p=h,m=(n("1c7a"),n("2877")),f=Object(m["a"])(p,u,d,!1,null,"80e90d9a",null),v=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block",staticStyle:{width:"100%","margin-bottom":"30px"}},[n("el-carousel",{attrs:{height:"500px"}},t._l(t.hotPassage,function(e){return n("el-carousel-item",{key:e.id},[n("img",{staticStyle:{width:"100%","z-index":"-1"},attrs:{src:e.coverPicture}}),n("h1",{staticStyle:{height:"30px"},on:{click:function(n){return t.showDetail(e.id)}}},[t._v(t._s(e.title))]),n("br"),n("div",{staticClass:"back"})])}),1)],1)},_=[],b=n("5880"),w=n("ac2c"),y={name:"carousel",data:function(){return{carouselPassages:[{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/realistic.png",name:"文章1",index:1},{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/banner.png",name:"文章2",index:2}]}},methods:{showDetail:function(t){console.log(t),localStorage.njuhzl_passageID=t,this.$router.push({name:"passageDetail"})}},computed:Object(c["a"])({},Object(b["mapState"])({hotPassage:function(t){return t.passage.hotPassage}})),mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(w["c"]);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},C=y,x=(n("dbe2"),Object(m["a"])(C,g,_,!1,null,"13837b04",null)),S=x.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"20%",padding:"10px",height:"200px",display:"inline-block",position:"relative"}},[n("h3",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.abstract))]),n("p",{staticClass:"postTime"},[t._v("发布时间 "+t._s(t.postTime))])])},k=[],$={name:"abstract",props:{title:{type:String,default:"这是新闻的标题"},abstract:{type:String,default:"凛晓宜高卧，淹留更起沉。\n孤人行古径，三雀跃幽林。\n雨冷松针倦，风潮瓦黛深。\n瑶池银杏树，只砌一园金。\n"},postTime:{type:String,default:"2018-12-11    21:02:25"}}},j=$,I=(n("cdde"),Object(m["a"])(j,z,k,!1,null,"6f073011",null)),O=I.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%",padding:"5px",height:"100px",position:"relative"}},[n("p",[t._v(t._s(t.comment))]),n("p",{staticClass:"postTime"},[t._v(t._s(t.postTime))])])},T=[],q={name:"recommendComment",props:{comment:{type:String,default:"冷冷秋风隐隐潺，行经夜半紫金山。\n千方清臭疲神醒，百载幽林山鬼还。\n建邺英灵终建业，中山浩气镇钟山。\n紫薇问我将何往，御剑直登玄武关。"},postTime:{type:String,default:"2018-12-11    22:07:51"}}},D=q,R=(n("c4d7"),Object(m["a"])(D,E,T,!1,null,"f91505fe",null)),P=R.exports,B={name:"Home",components:{banner:v,carousel:S,abstract:O,recommendComment:P,navi:o["a"],foot:r["a"],rightBar:l["a"]},methods:{showDetail:function(t){this.$router.push({name:"passageDetail",params:{passageID:t}})}},computed:Object(c["a"])({},Object(b["mapState"])({latestPassage:function(t){return t.home.latestPassage},latestComments:function(t){return t.home.latestComments}})),mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(w["e"]);case 2:return t.next=4,this.$store.dispatch(w["d"]);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},U=B,J=(n("a9e8"),Object(m["a"])(U,a,i,!1,null,"9f6f9114",null));e["default"]=J.exports},c4d7:function(t,e,n){"use strict";var a=n("8ad8"),i=n.n(a);i.a},cdde:function(t,e,n){"use strict";var a=n("a082"),i=n.n(a);i.a},dbc4:function(t,e,n){},dbe2:function(t,e,n){"use strict";var a=n("fa76"),i=n.n(a);i.a},dc36:function(t,e,n){},e833:function(t,e,n){"use strict";var a=n("dc36"),i=n.n(a);i.a},f96e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightBarContainer"},[n("div",{attrs:{id:"share"}},[t._m(0),n("div",{attrs:{id:"shareContainer"}},[n("img",{staticClass:"shareChoice",attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/qq.png"},on:{click:t.qqShare}}),n("img",{staticClass:"shareChoice",attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/wechat.png"}}),n("img",{staticClass:"shareChoice",attrs:{src:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/sina.png"},on:{click:t.sinaShare}})])]),t._m(1),t._m(2),t._m(3),n("div")])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem"},[n("i",{staticClass:"el-icon-share"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem",attrs:{id:"favourite"}},[n("i",{staticClass:"el-icon-star-off"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem"},[n("a",[t._v("意见"),n("br"),t._v("反馈")]),n("i",{staticClass:"el-icon-edit-outline"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightItem",attrs:{id:"backTop"}},[n("a",[t._v("返回"),n("br"),t._v("顶部")]),n("i",{staticClass:"el-icon-caret-top"})])}],s="NJU核真录",c="http://193.112.82.110:3030/",o="../assets/img/hzl_logo.png",r={name:"rightBar",mounted:function(){var t=$("#backTop");t.on("click",function(){$("html,body").animate({scrollTop:0},500)}),$(window).on("scroll",function(){$(window).scrollTop()>$(window).height()?t.fadeIn():t.fadeOut()}),$(window).trigger("scroll"),$("#favourite").click(function(){var t=-1!=navigator.userAgent.toLowerCase().indexOf("mac")?"Command/Cmd":"CTRL";document.all?window.external.addFavorite("http://localhost:8080","trust平台"):window.sidebar?window.sidebar.addPanel("trust平台","http://localhost:8080",""):alert("您可以尝试通过快捷键"+t+" + D 加入到收藏夹~")}),$("#share").hover(function(){$("#shareContainer").animate({width:"toggle"},350)})},methods:{qqShare:function(){var t="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary="+encodeURIComponent(s)+"&url="+encodeURIComponent(c||document.location)+"&pics="+encodeURIComponent(o);window.open(t,"newwindow","height=400,width=400,top=100,left=100")},sinaShare:function(){var t="http://v.t.sina.com.cn/share/share.php?title="+encodeURIComponent(s)+"&url="+encodeURIComponent(c||document.location)+"&pics="+encodeURIComponent(o);window.open(t,"newwindow","height=400,width=400,top=100,left=100")}}},l=r,u=(n("588b"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"45a167c5",null);e["a"]=d.exports},fa76:function(t,e,n){}}]);
//# sourceMappingURL=chunk-234a87c9.d705b6ae.js.map