(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"0ea4":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("section",[s("div",{staticClass:"container ticketcolor px-0 main-content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col col-md-3 col-12"},[s("SideNavProfile")],1),s("div",{staticClass:"col col-md-9 col-12"},[s("div",{staticClass:"ui-block"},[s("div",{staticClass:"ui-block-title"},[s("h6",{staticClass:"title"},[s("span",[t._v("View Ticket")])]),s("button",{staticClass:"btn rev-btn rev-btn-text pull-right",on:{click:function(e){return t.$router.push("/newticket")}}},[t._v("\n                Back\n              ")])]),s("div",{staticClass:"ui-block-content"},[s("div",{staticClass:"tickets-list no-action"},[s("div",{staticClass:"ticket-info mb-3"},[s("div",{staticClass:"media"},[s("div",{staticClass:"image-holder"},[s("img",{staticClass:"ticketsimage",attrs:{src:t.$revfunc.uploadPath()+"../assets/images/ticket.jpg",alt:t.ticket.category_name}})]),s("div",{staticClass:"media-body"},[s("h6",[t._v(t._s(t.ticket.ticket_title))]),s("p",[s("i",{staticClass:"feather icon-briefcase text-theme-secondary"}),t._v("\n                        "+t._s(t.ticket.category_name)+"\n                      ")]),0==t.ticket.status?s("span",{staticClass:"badge badge-pill badge-success"},[t._v("New")]):1==t.ticket.status?s("span",{staticClass:"badge badge-pill badge-warning"},[t._v("In Progress")]):2==t.ticket.status?s("span",{staticClass:"badge badge-pill badge-danger"},[t._v("Closed")]):t._e(),"L"==t.ticket.priority?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v("Low")]):"M"==t.ticket.priority?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v("Medium")]):"H"==t.ticket.priority?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v("High")]):"U"==t.ticket.priority?s("span",{staticClass:"badge badge-pill badge-secondary"},[t._v("Urgent")]):t._e(),s("span",{staticClass:"badge badge-pill badge-light"},[t._v("\n                        "+t._s(t.$revfunc.timeSince(t.ticket.created_on)))])])])])]),s("div",{staticClass:"mt20 mb20 ui-block-title"},[s("p",{staticClass:"mb-3",staticStyle:{display:"block"},domProps:{innerHTML:t._s(t.ticket.ticket_description)}}),null!=t.ticket.ticket_file&&t.ticket.ticket_file?s("a",{staticClass:"btn btn-primary btn-oval",attrs:{href:t.$revfunc.uploadPath()+"user"+t.ticket.created_by+"/images/"+t.ticket.ticket_file,target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"feather icon-download"}),t._v(" Download Attachment\n                ")]):t._e()])]),s("div",{staticClass:"ui-block-mytitle2"},[s("h5",[t._v("Replies")])]),s("div",{staticClass:"col-12"},[t.replies?s("div",{staticClass:"tickets-list"},t._l(t.replies,(function(e){return s("div",{staticClass:"ticket-info"},[s("div",{staticClass:"media"},[s("div",{staticClass:"image-holder"},[null==e.profile_image||""==e.profile_image?s("img",{staticClass:"ticketsimage",attrs:{src:t.$revfunc.uploadPath()+"../assets/images/user.jpg",alt:e.full_name}}):0==e.emp?s("img",{staticClass:"ticketsimage",attrs:{src:t.$revfunc.uploadPath()+"user"+e.created_by+"/images/"+e["profile_image"],alt:e.full_name},on:{click:function(){return t.$router.push("/"+e.username)}}}):s("img",{staticClass:"ticketsimage",attrs:{src:t.$revfunc.uploadPath()+"employees/profile-img/"+e["profile_image"],alt:e.full_name}})]),s("div",{staticClass:"media-body"},[s("a",{staticClass:"h6 post__author-name fn",on:{click:function(){return t.$router.push("/"+e.username)}}},[t._v("\n                        "+t._s(e.full_name)+"\n                        "),e.badge&&"none"!=e.badge?s("img",{staticClass:"revbadge-postcard",attrs:{src:"none"!=e.badge?"/img/badges/"+e.badge+".png":"",alt:"author"}}):t._e()]),0==e.emp?s("div",{staticClass:"text-rev"},[t._v("\n                        @"+t._s(e.username)+"\n                      ")]):s("div",{staticClass:"text-rev"},[t._v("\n                        "+t._s(e.role_name)+"\n                      ")]),s("span",{staticClass:"badge badge-pill badge-light"},[t._v("\n                        "+t._s(t.$revfunc.timeSince(e.created_on))+"\n                      ")])])]),s("div",{staticClass:"mt-3 mb-3 mt10 mb10"},[s("p",{domProps:{innerHTML:t._s(e.reply_content)}}),e.reply_file&&null!=e.reply_file?s("a",{staticClass:"r-link btn btn-primary btn-oval",attrs:{href:t.$revfunc.uploadPath()+"user"+t.ticket.created_by+"/images/"+e.reply_file,target:"_blank",rel:"noopener noreferrer"}},[s("i",{staticClass:"feather icon-download"}),t._v(" Download\n                      Attachment")]):t._e()])])})),0):s("div",[s("div",{staticClass:"text-center mt30 mb30"},[s("div",{staticClass:"mb5"},[s("img",{attrs:{src:"/img/no-replies.png",alt:"Tickets"}})])])])]),s("div",{staticClass:"ui-block-mytitle2"},[s("h5",[t._v("Reply to Ticket")])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"tile-content"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"inputAttachment"}},[t._v("Reply")]),s("q-editor",{attrs:{"min-height":"5rem",toolbar:[["left","center","right","justify"],["bold","italic","strike","underline"],["unordered","ordered","removeFormat"],["undo","redo"]]},model:{value:t.reply_content,callback:function(e){t.reply_content=e},expression:"reply_content"}})],1),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"inputAttachment"}},[t._v("Attachment")]),s("div",{staticClass:"custom-file"},[t.mediaShow?t._e():[s("button",{staticClass:"options-message upload-btn-wrapper flat",attrs:{type:"button"},on:{mouseover:function(e){return t.hover("camera","iconcamera",e,!1)},mouseout:function(e){return t.unhover("camera","iconcamera",e,!1)}}},[s("q-input",{staticClass:"file-input",attrs:{accept:t.IMAGE_ACCEPT,filled:"",type:"file",multiple:""},on:{input:function(e){t.file=e},change:function(e){return t.chooseImage()}}}),t.loading?s("i",{staticClass:"fas fa-spinner fa-1-5x fa-spin text-rev"}):s("img",{ref:"iconcamera",staticClass:"icon-rev-md",attrs:{src:"/img/icons/primary/"+t.mode+"/camera.png"}}),s("q-tooltip",{staticClass:"bg-primary",attrs:{anchor:"top middle",self:"bottom middle",offset:[10,-5]}},[t._v("\n                          Image\n                        ")])],1)],t.mediaShow?s("ul",{staticClass:"q-pa-md",staticStyle:{display:"flex"}},[s("li",{staticClass:"q-px-xs",staticStyle:{position:"relative"}},["mp4"==t.mediaShow.type||"mov"==t.mediaShow.type||"avi"==t.mediaShow.type||"mpeg"==t.mediaShow.type?s("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[s("source",{attrs:{src:t.mediaShow.path,type:"video/mp4"}}),t._v("\n                          Your browser does not support HTML video.\n                        ")]):s("img",{staticStyle:{"max-width":"inherit",width:"50px",height:"50px","border-radius":"5px",border:"1px solid #e1e1e1"},attrs:{src:t.mediaShow.path}}),s("q-btn",{staticClass:"text-red",staticStyle:{position:"absolute",top:"0"},attrs:{flat:"",icon:"fa fa-times",size:"sm"},on:{click:function(e){return t.removeMedia()}}})],1)]):t._e()],2),s("small",[t._v("Ticket Attachment Info")])]),s("div",{staticClass:"row q-mt-xl"},[s("div",{staticClass:"col col-6"},[s("button",{staticClass:"btn btn-primary btn-lg full-width rev-btn rev-btn-text",attrs:{id:"replyTicketButton",type:"button",flat:""},on:{click:function(e){return t.onSubmit()}}},[t.loading?s("span",[s("i",{staticClass:"fa-2x fas fa-spinner fa-spin"})]):s("div",[t._v("Reply to Ticket")])])]),s("div",{staticClass:"text-center col col-6"},[s("button",{staticClass:"btn btn-lg w-100 rev-btn rev-btn-text",attrs:{type:"button",flat:""},on:{click:function(e){return t.$revfunc.goBack()}}},[t._v("\n                      Cancel Changes\n                    ")])])])])])])])])])])])},a=[],n=s("2f62"),c=s("2b90"),l=s("2aee"),o=s("b35e"),r=s("8716"),d={mixins:[o["a"]],name:"Ticket",data(){return{IMAGE_ACCEPT:r["d"],token:this.$q.cookies.get("w_token"),loading:!1,ticket:!1,replies:!1,reply_content:"",s_attachmentImages:"",mediaShow:!1}},components:{SideNavTicket:c["a"],SideNavProfile:l["a"]},watch:{$route(t,e){this.runMounted()}},mounted(){this.runMounted()},methods:{...Object(n["b"])("config",["uploadMedia"]),...Object(n["b"])("tickets",["getTicketById","saveTicketReply"]),runMounted(){this.onReset(),this.getMyTicket({ticket_id:this.$route.params.id,token:this.token})},removeMedia(t){this.s_attachmentImages="",this.mediaShow=!1},chooseImage(){this.loading=!0;const t=new FormData;t.append("file",this.file),t.append("token",this.token),this.uploadMedia(t,"images").then((t=>{this.loading=!1,this.$revfunc.notification(t.message,{position:"top-right"}),t.status&&(this.mediaShow={type:t.success_files[0].type,path:t.success_files[0].full_path},this.getFile(t))})).catch((t=>{}))},getFile(t){t.success_files&&t.success_files.map((t=>{this.s_attachmentImages=t.name}))},getMyTicket(t){this.getTicketById(t).then((t=>{this.loading=!1,t.success&&(this.ticket=t.results.ticket,this.replies=t.results.replies)})).catch((t=>{}))},onSubmit(){let t={reply_content:this.reply_content,attachment:this.s_attachmentImages,ticket_id:this.$route.params.id,token:this.token,seen:0};this.loading=!0,this.saveTicketReply(t).then((t=>{this.loading=!1,this.$revfunc.notification(t.message,{position:"top-right"}),t.success&&this.runMounted()})).catch((t=>{}))},onReset(){this.reply_content="",this.s_attachmentImages="",this.mediaShow=!1}}},p=d,m=(s("95b5"),s("2877")),u=s("9989"),g=s("d66b"),h=s("27f9"),b=s("05c0"),v=s("9c40"),f=s("eebe"),_=s.n(f),k=Object(m["a"])(p,i,a,!1,null,"451731a2",null);e["default"]=k.exports;_()(k,"components",{QPage:u["a"],QEditor:g["a"],QInput:h["a"],QTooltip:b["a"],QBtn:v["a"]})},"95b5":function(t,e,s){"use strict";s("d5ff")},d5ff:function(t,e,s){}}]);