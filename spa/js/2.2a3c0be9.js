(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{a96c:function(t,e,s){},ad78:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("q-ajax-bar",{ref:"bar",staticClass:"bg-rev",attrs:{position:"top",size:"5px","skip-hijack":""}}),o("div",{staticClass:"container main-content"},[o("div",{staticClass:"row q-pt-xs"},[o("main",{staticClass:"col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12 post-details-page"},[t.isDone?[null!=t.post_details?o("PostsCard",{attrs:{post:t.post_details,isEdit:!0,isEnabled:!0,openSinglePage:!1},on:{"update:key":t.updateNewsfeedKey,"update:post":t.updatePostLog,"delete:post":t.deletePostLog}}):t._e(),o("ul",{staticClass:"comments-list"},[t.notfound?o("NotFound"):t._e(),o("CreatePosts",{on:{"add:post":t.addPostLog}}),null!=t.post_details?o("div",[o("div",{staticClass:"card text-center bb-all",staticStyle:{"border-radius":"0"}},[o("div",{staticClass:"row justify-center q-my-xs"},[o("div",{staticClass:"q-mr-md pointer",class:"normal"==t.active_reply?"active":"inactive",on:{click:function(e){return e.stopPropagation(),t.activeReplies("normal")}}},[t._v("All Replies")]),o("div",{staticClass:"q-mr-md pointer",class:"public_figures"==t.active_reply?"active":"inactive",on:{click:function(e){return e.stopPropagation(),t.activeReplies("public_figures")}}},[t._v("Public Figure Replies")]),o("div",{staticClass:"q-mr-md pointer",class:"top_engagements"==t.active_reply?"active":"inactive",on:{click:function(e){return e.stopPropagation(),t.activeReplies("top_engagements")}}},[t._v("Top Engagement")])])]),"normal"==t.active_reply?o("ReplyingTo",{attrs:{post_comments:t.post_details.post_comments,username:t.post_details.username},on:{"delete:post":t.deletePostLog}}):"public_figures"==t.active_reply?o("ReplyingTo",{attrs:{post_comments:t.post_details.post_comments_public_figures,username:t.post_details.username},on:{"delete:post":t.deletePostLog}}):"top_engagements"==t.active_reply?o("ReplyingTo",{attrs:{post_comments:t.post_details.post_comments_top_engagements,username:t.post_details.username},on:{"delete:post":t.deletePostLog}}):t._e()],1):t._e()],1)]:t._e()],2),o("aside",{staticClass:"col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12"},[o("div",[o("div",{staticClass:"widget w-wethear",staticStyle:{padding:"0"}},[o("img",{staticClass:"rounded",attrs:{src:"/img/ads/ad-left-1.png"}})])]),o("FollowSuggestions"),o("FeaturedMembers")],1),o("aside",{staticClass:"col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"},[o("div",[o("img",{staticClass:"rounded",attrs:{src:s("aec4"),alt:"logo"}})]),o("News",{attrs:{revNews:t.revNews}}),o("div",[o("a",{staticClass:"r-link",attrs:{href:"https://www.paypal.me/revolutionusa",target:"_blank",rel:"noopener noreferrer"},on:{mouseover:function(e){return t.hover("contribution-ads","iconcontribution-ads",e)},mouseout:function(e){return t.unhover("contribution-ads","iconcontribution-ads",e)}}},[o("img",{ref:"iconcontribution-ads",attrs:{src:"/img/icons/primary/common/contribution-ads.png",alt:"Rev Contribution"}})])])],1)])])],1)},i=[],a=s("2f62"),n=s("7a6b"),r=s("64c1"),l=s("df68"),c=s("be4d"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"comments-list child-comments"},[s("PostsCard",{attrs:{post:t.comments,isEdit:!0,isEnabled:!0}})],1)},d=[],u={name:"Comments",computed:{},props:{comments:{type:Object,required:!0}},components:{PostsCard:r["a"]}},m=u,_=s("2877"),g=Object(_["a"])(m,p,d,!1,null,null,null),v=g.exports,h=s("5a20"),b=s("b35e"),f=s("51eb"),C=s("ce42"),P=s("625a"),y=s("cd5d"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.post_comments.length?s("div",t._l(t.post_comments,(function(e,o){return s("div",{key:o,staticClass:"child-comments"},[s("div",{staticClass:"absolute-position"},[s("span",[t._v("Replying to ")]),s("span",{staticClass:"text-rev pointer",on:{click:function(){return t.$router.push("/"+t.username)}}},[t._v("\n            @"+t._s(t.username)+"\n          ")])]),s("PostsCard",{attrs:{post:e,isEdit:!0,isEnabled:!0,openSinglePage:!1},on:{"delete:post":function(e){return t.$emit("delete:post",e)}}})],1)})),0):s("div",{staticClass:"q-pa-lg text-p text-center ui-block",staticStyle:{"border-radius":"0","border-top":"none"}},[t._v("No Comments")])},E=[],O={name:"ReplyingTo",mixins:[h["a"]],props:{post_comments:{required:!0},username:{required:!0}},components:{PostsCard:r["a"]}},T=O,x=(s("d458"),Object(_["a"])(T,w,E,!1,null,"7049788a",null)),R=x.exports,N=s("21a0"),$={name:"NewsFeed",mixins:[h["a"],f["a"],b["a"],C["a"]],data(){return{active_reply:"normal",rev_post_arr:[],revNews:[],post_details:null,user:null,isDone:!1,notfound:!1,me:this.$q.localStorage.getItem("rev_user")}},components:{RevPosts:n["a"],News:l["a"],PostsCard:r["a"],Comments:v,NotFound:c["a"],FeaturedMembers:P["a"],FollowSuggestions:y["a"],ReplyingTo:R,CreatePosts:N["a"]},mounted(){this.runMounted()},watch:{$route(t,e){this.runMounted()}},computed:{...Object(a["e"])("posts",["rev_posts"])},methods:{...Object(a["b"])("posts",["getPostById"]),...Object(a["d"])("posts",["UPDATE_BOOKMARK_POST","SHARE_POST","EDIT_POST","INIT_COMMENT_COUNTER"]),...Object(a["d"])("user",["TOGGLE_DIALOG","TOGGLE_SHARE_DIALOG"]),...Object(a["d"])("config",["UPDATE_ACTIVE_KEY"]),activeReplies(t){this.active_reply=t},runMounted(){this.$refs.bar.stop(),this.user=this.$q.localStorage.getItem("rev_user"),this.getPostDetails(this.$route.params.post_id)},updateNewsfeedKey(t){this.post_details[t.key]=t.value},getPostDetails(t,e=!0){try{this.$refs.bar.start(),e&&(this.single_post=!0),this.post_details=null,this.getPostById({id_post:t,count:1}).then((t=>{this.$refs.bar.stop(),t.status?(this.revNews=t.results.rev_posts,null==t.results.user_id?this.notfound=!0:(this.INIT_COMMENT_COUNTER(t.results.comments),this.post_details=t.results),this.isDone=!0):(this.notfound=!0,this.$revfunc.notification(t.message))})).catch((t=>{}))}catch(s){logger("error",s)}},goToRoute(t){this.$router.push("/"+t)},onLoadDone(t=!1){this.$refs.bar.stop(),this.loopDone&&this.loopDone(t)},addPostLog(t){const e={...t};e.parent_post=!1,e.id_parent_post=0,this.post_details.post_comments.push(e),this.post_details.comments=parseInt(this.post_details.comments)+1},updatePostLog(t){this.post_details.id_post==t.id_post&&(this.post_details=t)},deletePostLog(t){let e=!1;const s=["post_comments_public_figures","post_comments_top_engagements","post_comments"],o=t.id;for(let i=s.length-1;i>=0;i--){const t=s[i];let a=this.post_details[t].filter((t=>t.id_post==o)).length;for(let s=this.post_details[t].length-1;s>=0;s--)if(this.post_details[t][s].id_post==o&&(a--,this.post_details[t].splice(s,1),e=!0),!a)break}e&&(this.post_details.comments=parseInt(this.post_details.comments)-1),this.post_details.id_post==o&&(this.post_details=null,this.notfound=!0,this.$revfunc.notification("Content is not available"))}}};window.fbAsyncInit();var k=$,I=(s("ed58"),s("9989")),L=s("7ea5"),S=s("eebe"),j=s.n(S),q=Object(_["a"])(k,o,i,!1,null,"544b3094",null);e["default"]=q.exports;j()(q,"components",{QPage:I["a"],QAjaxBar:L["a"]})},c79b:function(t,e,s){},d458:function(t,e,s){"use strict";s("c79b")},ed58:function(t,e,s){"use strict";s("a96c")}}]);