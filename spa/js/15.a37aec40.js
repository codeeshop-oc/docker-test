(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"27da":function(t,a,s){},"43f4":function(t,a,s){"use strict";s("27da")},fd4f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-12"},[s("q-page",[s("q-card",{staticClass:"q-pa-sm q-mb-md"},[s("q-item",[s("q-item-section",[s("q-item-label",{staticClass:"text-subtitle1"},[t._v("Active")])],1),s("q-item-section",{attrs:{side:""}},[s("q-toggle",{attrs:{color:"red"},model:{value:t.campaign_status,callback:function(a){t.campaign_status=a},expression:"campaign_status"}})],1)],1)],1),s("div",{staticClass:"text-bold q-pa-xs label-css"},[t._v("Current Campaigns")]),s("q-list",{staticClass:"shadow-2 q-mb-md"},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-white list-bordered ads-list-padding"},[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",{attrs:{rounded:"",size:"65px"}},[s("img",{staticClass:"list-img",attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1),s("q-item-section",{staticClass:"q-pb-sm"},[s("q-item-text",{staticClass:"text-bold title",attrs:{lines:"0"}},[t._v("\n                Feature Your Post\n              ")]),s("q-item-text",{staticClass:"desc",attrs:{lines:"0"}},[t._v("\n                Get more people to see\n              ")])],1),s("q-item-section",{attrs:{side:""}},[s("q-btn",{attrs:{flat:"",icon:"mdi-chevron-right",size:"18pt"},on:{click:function(){return t.$router.push("campaign")}}})],1)],1)],1),s("div",{staticClass:"text-bold q-pa-xs label-css"},[t._v("Results")]),s("q-card",{staticClass:"q-pa-sm q-mb-md"},[s("q-tabs",{staticClass:"text-grey text-h4",staticStyle:{height:"50px"},attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicato":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[s("q-tab",{attrs:{name:"today",label:"Today","no-caps":""}}),s("q-tab",{staticClass:"text-bold",attrs:{name:"one-day",label:"1 day","no-caps":""}}),s("q-tab",{staticClass:"text-bold",attrs:{name:"seven-days",label:"7 day","no-caps":""}}),s("q-tab",{attrs:{name:"lifetime",label:"Lifetime","no-caps":""}})],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[s("q-tab-panel",{attrs:{name:"today"}},[s("q-item",{staticClass:"adjust-top"},[s("q-item-section",{staticClass:"text-center text-subtitle1"},[s("q-item-label",[t._v("Oct 10th, 2020")])],1)],1)],1),s("q-tab-panel",{attrs:{name:"one-day"}},[s("q-item",{staticClass:"adjust-top"},[s("q-item-section",{staticClass:"text-center text-subtitle1"},[s("q-item-label",[t._v("Oct 9th, 2020 - Oct 10th, 2020")])],1)],1)],1),s("q-tab-panel",{staticClass:"no-padding",attrs:{name:"seven-days"}},[s("q-item",{staticClass:"adjust-top q-my-sm"},[s("q-item-section",{staticClass:"text-center text-subtitle1"},[s("q-item-label",[t._v("Oct 3rd, 2020 - Oct 11th, 2020")])],1)],1),s("q-list",[s("div",{staticClass:"row q-page-container q-px-sm"},[s("div",{staticClass:"col-6 q-pr-sm"},[s("q-card",{staticClass:"card-rounded-rev q-pb-sm q-mb-sm shadow-12"},[s("q-card-section",[s("q-checkbox",{attrs:{val:"444",color:"red-10"},model:{value:t.impressions,callback:function(a){t.impressions=a},expression:"impressions"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h5 text-bold text-right q-pr-md q-pt-md"},[t._v("4,500")]),s("q-item-label",{staticClass:"text-right text-weight-light text-grey-8 q-pr-md q-pb-sm"},[t._v("Impressions")])],1)],1),s("q-card",{staticClass:"card-rounded-rev q-pb-sm shadow-12 text-grad-box"},[s("q-card-section",[s("q-icon",{staticClass:"text-white",attrs:{name:"fas fa-user-friends",size:"22px"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h5 text-left q-pl-md q-pt-md text-white"},[t._v("+ 29")]),s("q-item-label",{staticClass:"text-left text-weight-light q-pl-md q-pb-sm text-white"},[t._v("New Connections")])],1)],1)],1),s("div",{staticClass:"col-6 q-pl-sm"},[s("q-card",{staticClass:"card-rounded-rev q-pb-sm q-mb-sm shadow-12 text-grad-box",staticStyle:{height:"70%"}},[s("q-card-section"),s("q-item-section")],1),s("q-card",{staticClass:"card-rounded-rev q-pb-sm q-mb-md shadow-12"},[s("q-card-section",[s("q-icon",{staticClass:"float-right",staticStyle:{color:"#4eb6d1"},attrs:{name:"fas fa-dollar-sign",size:"22px"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-h5 text-left q-pl-md q-pt-md text-weight-medium"},[t._v("$60.00")]),s("q-item-label",{staticClass:"text-left q-pl-xl q-ml-sm",attrs:{caption:""}},[t._v("Spent")])],1)],1)],1)])])],1),s("q-tab-panel",{attrs:{name:"lifetime"}},[s("q-item",{staticClass:"adjust-top"},[s("q-item-section",{staticClass:"text-center text-subtitle1"},[s("q-item-label",[t._v("Lifetime")])],1)],1)],1)],1)],1),s("div",{staticClass:"q-pa-xs text-rev"},[t._v("See All campaigns")])],1)],1)])])},i=[],l={name:"Campaign",data(){return{impressions:!1,campaign_status:!1,tab:"today"}},mounted(){}},c=l,n=(s("43f4"),s("2877")),r=s("9989"),o=s("f09f"),m=s("66e5"),d=s("4074"),q=s("0170"),p=s("9564"),b=s("1c1c"),x=s("cb32"),u=s("9c40"),v=s("429b"),C=s("7460"),g=s("eb85"),h=s("adad"),f=s("823b"),w=s("09e3"),_=s("a370"),y=s("8f8e"),Q=s("0016"),k=s("714f"),S=s("eebe"),j=s.n(S),O=Object(n["a"])(c,e,i,!1,null,"dc85a072",null);a["default"]=O.exports;j()(O,"components",{QPage:r["a"],QCard:o["a"],QItem:m["a"],QItemSection:d["a"],QItemLabel:q["a"],QToggle:p["a"],QList:b["a"],QAvatar:x["a"],QBtn:u["a"],QTabs:v["a"],QTab:C["a"],QSeparator:g["a"],QTabPanels:h["a"],QTabPanel:f["a"],QPageContainer:w["a"],QCardSection:_["a"],QCheckbox:y["a"],QIcon:Q["a"]}),j()(O,"directives",{Ripple:k["a"]})}}]);