(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66],{"6d88":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"q-account-settings"}},[e("q-ajax-bar",{ref:"bar",staticClass:"bg-rev",attrs:{position:"top",size:"5px","skip-hijack":""}}),e("TopHeader"),e("div",{staticClass:"container px-0 main-content"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3 col-sm-4 col-12"},[e("SideNavProfile")],1),e("div",{staticClass:"col-lg-9 col-sm-8 col-12"},[e("div",{staticClass:"ui-block"},[t._m(0),e("div",{staticClass:"ui-block-content p-4"},[t._l(t.array,(function(i){return[e("div",{staticClass:"description-toggle"},[e("div",{staticClass:"description-toggle-content"},[e("div",{staticClass:"h6"},[t._v(t._s(i.text))]),i.subtext?e("span",{staticClass:"text-span"},[t._v(t._s(i.subtext))]):t._e()]),e("div",{staticClass:"togglebutton"},[e("label",[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.text_notification[i.key]},on:{change:function(e){return t.changeCheck(e,i.key)}}}),e("span",{staticClass:"toggle"})])])]),e("hr")]})),e("div",{staticClass:"row q-mt-xl"},[e("div",{staticClass:"col col-md-12 col-sm-12 col-12"},[e("button",{staticClass:"btn btn-primary btn-lg full-width rev-btn rev-btn-text",attrs:{type:"button",flat:""},on:{click:function(i){return t.onSubmit()}}},[t.loading?e("span",[e("i",{staticClass:"fa-2x fas fa-spinner fa-spin"})]):e("div",[t._v("Save all Changes")])])])])],2)])])])])],1)},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ui-block-title"},[e("h6",{staticClass:"title"},[t._v("Text Notification")])])}],n=e("2f62"),o=e("57e1"),c=e("2aee"),l={name:"TextNotifications",data(){return{array:[{key:"fav_follows",text:"Favorite Follows"},{key:"re_rev",text:"Re-Revs"},{key:"responses",text:"Responses"},{key:"reactions",text:"Reactions"},{key:"pvt_msg_notification",text:"Private Message Notification"},{key:"new_follower",text:"New Followers"},{key:"tagged",text:"Tagging in Revs/Photos"}],loading:!1,notification:{},text_notification:{}}},components:{SideNavProfile:c["a"],TopHeader:o["a"]},mounted(){this.array.map((t=>{this.text_notification[t.key]=!1})),this.userDetails()},methods:{...Object(n["b"])("user",["getProfileInfo","userActions","accountSetting"]),changeCheck(t,i){1==t.target.checked?this.text_notification[i]=!0:this.text_notification[i]=!1},userDetails(){this.$refs.bar.start(),this.getProfileInfo({user_id:this.$q.localStorage.getItem("rev_user").userId}).then((t=>{this.$refs.bar.stop(),t.status&&(this.notification=JSON.parse(t.results.user.notification),this.text_notification=this.notification.text_notification)})).catch((t=>{}))},onSubmit(){this.loading=!0,this.notification["text_notification"]={},this.array.map((t=>{this.notification["text_notification"][t.key]=this.text_notification[t.key]})),this.accountSetting({notification:JSON.stringify(this.notification)}).then((t=>{this.loading=!1,this.$revfunc.notification(t.message)})).catch((t=>{}))}}},r=l,f=e("2877"),u=e("7ea5"),h=e("eebe"),d=e.n(h),g=Object(f["a"])(r,s,a,!1,null,null,null);i["default"]=g.exports;d()(g,"components",{QAjaxBar:u["a"]})}}]);