(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da3d5da0"],{1244:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navi"},[a("img",{staticClass:"logo",attrs:{src:e.logoURL}}),a("el-menu",{attrs:{"default-active":"1"},on:{select:e.fetchOneClassOfPassageList}},[a("el-menu-item",{attrs:{index:"事实核查"}},[a("div",{staticClass:"menu-item"},[a("div",[e._v("事实核查")]),a("div",{staticClass:"number"},[e._v("1")])])]),a("el-menu-item",{attrs:{index:"可视化新闻"}},[a("div",{staticClass:"menu-item"},[a("div",[e._v("可视化新闻")]),a("div",{staticClass:"number"},[e._v("1")])])]),a("el-menu-item",{attrs:{index:"研究中心"}},[a("div",{staticClass:"menu-item"},[a("div",[e._v("研究中心")]),a("div",{staticClass:"number"},[e._v("1")])])]),a("el-menu-item",{attrs:{index:"质量报告"}},[a("div",{staticClass:"menu-item"},[a("div",[e._v("每周质量报告")]),a("div",{staticClass:"number"},[e._v("1")])])])],1)],1)},s=[],i=a("cebc"),c=a("5880"),r=a("ac2c"),m={name:"LeftNavi",data:function(){return{logoURL:"http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/realistic.png"}},computed:Object(i["a"])({},Object(c["mapState"])({currentClass:function(e){return e.passage.currentClass},oneClassOfPassageList:function(e){return e.passage.oneClassOfPassageList}})),methods:{fetchOneClassOfPassageList:function(e){this.$store.dispatch(r["g"],e),this.$store.dispatch(r["m"],e),this.$router.push("/news")}}},l=m,o=(a("289e"),a("2877")),u=Object(o["a"])(l,n,s,!1,null,"6e0ed8ac",null);t["a"]=u.exports},"1a3d":function(e,t,a){},"289e":function(e,t,a){"use strict";var n=a("4e8f"),s=a.n(n);s.a},"4e8f":function(e,t,a){},7310:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"navi"},[a("LeftNavi")],1),a("div",{staticClass:"body"},[a("div",{staticClass:"top"},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[e._v(e._s(e.passageInfo.title))]),a("div",{staticClass:"info"},[e._v("\n          "+e._s(e.passageInfo.newsSource)+", "+e._s(e.passageInfo.newsClass)+", "+e._s(e.passageInfo.postTime)+"\n          "),e._l(e.passageInfo.keywords,function(t){return a("p",{key:t,staticStyle:{display:"inline-block"}},[e._v(", "+e._s(t))])})],2)])]),a("div",{staticClass:"block",staticStyle:{width:"90%","margin-left":"5%"}},[a("el-carousel",e._l(e.passageInfo.picUrls,function(e){return a("el-carousel-item",{key:e},[a("img",{staticStyle:{width:"100%"},attrs:{src:e}})])}),1)],1),a("div",{staticClass:"content",domProps:{innerHTML:e._s(e.passageInfo.content)}}),a("passage-comment")],1)])},s=[],i=(a("96cf"),a("3b8d")),c=a("cebc"),r=a("5880"),m=a("ac2c"),l=a("1244"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.commentList,function(e){return a("Item",{key:e.commentID,attrs:{content:e.content,commentID:e.commentID,email:e.user.email,nickname:e.user.nickname,femail:e.fatherUser.email,fnickname:e.fatherUser.nickname,hasFather:0!==e.fatherCommentID,time:e.time}})}),1)},u=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"item-body"},[a("div",{staticClass:"align-left"},[a("div",{staticClass:"item-title"},[a("div",{staticClass:"nickname"},[e._v(e._s(e.nickname))]),e.hasFather?a("div",{staticClass:"reply"},[a("small",[e._v("回复")]),e._v("\n          "+e._s(e.fnickname)+"\n        ")]):e._e()]),a("div",{staticClass:"content"},[e._v(e._s(e.content))])]),a("div",{staticClass:"align-right"},[a("div",{staticClass:"reply",on:{click:function(t){return e.doReply()}}},[e._v("回复")]),a("div",{staticClass:"time"},[e._v(e._s(e.time))])])]),e.isReply?a("div",[a("comment-input",{attrs:{email:e.email,nickname:e.nickname,femail:e.email,fnickname:e.nickname,hasFather:!0}})],1):e._e()])},d=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"comment-body"},[a("div",{staticClass:"align-left"},[e.hasFather?a("div",{staticClass:"reply"},[a("small",[e._v("回复")]),e._v("\n      "+e._s(e.fnickname)+"\n    ")]):e._e()]),e._m(0)])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"align-right"},[a("textarea")])}],h={name:"CommentInput",props:{femail:{type:String,default:""},fnickname:{type:String,default:""},email:{type:String,required:!0},nickname:{type:String,required:!0},hasFather:{type:Boolean,default:!1}},data:function(){return{content:""}}},g=h,_=(a("ea70"),a("2877")),C=Object(_["a"])(g,p,v,!1,null,null,null),k=C.exports,b={name:"Item",components:{CommentInput:k},data:function(){return{isReply:!1}},props:{femail:{type:String,default:""},fnickname:{type:String,default:""},email:{type:String,required:!0},nickname:{type:String,required:!0},content:{type:String,required:!0},time:{type:String,required:!0},hasFather:{type:Boolean,default:!1}},computed:Object(c["a"])({},Object(r["mapState"])({userProfile:function(e){return e.user.userProfile}})),methods:{doReply:function(){this.isReply=!0,console.log(this.userProfile)}}},y=b,I=(a("b05b"),Object(_["a"])(y,f,d,!1,null,null,null)),q=I.exports,x={name:"PassageComment",components:{Item:q},data:function(){return{commentList:[{passageID:"001",commentID:1,fatherCommentID:0,user:{email:"1111@qq.cm",nickname:"小红"},fatherUser:{email:"xxx",nickname:"xxx"},content:"谁都不顿肤色如部分热量和规范不是简单方便家里人办法部分蓝色人逼疯了人分别是离开的不服输腹背受敌老人服可是大润发世界的方式软件部分",time:"2019-01-01"},{passageID:"001",commentID:2,fatherCommentID:2,user:{email:"222@qq.com",nickname:"小明"},fatherUser:{email:"333@qq.com",nickname:"小红"},content:"啦啦啦啦啦啦啦绅士手当地丰富四川省地方",time:"2018-02-09"},{passageID:"001",commentID:2,fatherCommentID:4,user:{email:"222@qq.com",nickname:"小明"},fatherUser:{email:"333@qq.com",nickname:"小红"},content:"啦啦啦啦啦啦啦低筋粉 i 里度过黑色 i 如果本来部分是路人粉绅士手当地丰富四川省地方",time:"2018-02-09"},{passageID:"001",commentID:2,fatherCommentID:0,user:{email:"222@qq.com",nickname:"小明"},fatherUser:{email:"333@qq.com",nickname:"小红"},content:"啦啦啦啦啦啦啦绅士我当机立断我国日是，的毫不费力虽然很烦手当地丰富四川省地方",time:"2018-02-09"}]}},props:{},methods:{}},D=x,O=Object(_["a"])(D,o,u,!1,null,null,null),S=O.exports,w={name:"PassageDetail",components:{LeftNavi:l["a"],PassageComment:S},computed:Object(c["a"])({},Object(r["mapState"])({passageInfo:function(e){return e.passage.passageInfo}})),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch(m["h"],{id:this.$route.params.passageID});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},j=w,L=(a("9c6b"),Object(_["a"])(j,n,s,!1,null,"3b73c418",null));t["default"]=L.exports},9978:function(e,t,a){},"9c6b":function(e,t,a){"use strict";var n=a("9978"),s=a.n(n);s.a},acec:function(e,t,a){},b05b:function(e,t,a){"use strict";var n=a("1a3d"),s=a.n(n);s.a},ea70:function(e,t,a){"use strict";var n=a("acec"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-da3d5da0.54f4f894.js.map