var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

import{d as w,I as x,o as y,a as t,b as o,Q as E,t as b,f as h,h as c,i as I,q as i,s as d,e as S,P as g}from"./entry.285a7035.js";import{u as B,w as D}from"./constants.7efca516.js";import{u as P}from"./useRedirectAction.bae2b155.js";import"./HLConst.8f085cc8.js";const k=i(()=>d(()=>import("./CalendarComponentv3.a8f13ddf.js"),["./_calendarServices.cf9d17c3.css","./app.5efdd9e1.css","./_main.5ace9fc9.css","./TextElement.0b941f97.css","./TextBoxListElement.b602ad61.css","./OptionElement.05aaf420.css","./FormComponent.c88fe4ba.css","./vue-multiselect.eb3eab67.css","./CalendarRecurringAppointments.3ef96c60.css","./ghl-payment-element.7c35df0b.css","./CalendarPaymentPage.72901707.css","./CalendarComponentv3.ab1b24b4.css"],import.meta.url).then(e=>e.default||e)),L=i(()=>d(()=>import("./CalendarCompNew.85eb171b.js"),["./TextElement.0b941f97.css","./TextBoxListElement.b602ad61.css","./OptionElement.05aaf420.css","./FormComponent.c88fe4ba.css","./vue-multiselect.eb3eab67.css","./app.5efdd9e1.css","./CalendarRecurringAppointments.3ef96c60.css","./DatePick.6beced99.css","./CalendarComponent.2125eb92.css","./_main.5ace9fc9.css","./_calendarServices.cf9d17c3.css","./ghl-payment-element.7c35df0b.css","./CalendarPaymentPage.72901707.css","./CalendarComponentv3.ab1b24b4.css"],import.meta.url).then(e=>e.default||e)),O={key:0,class:"form-error"},R=S("i",{class:"fas fa-exclamation-triangle"},null,-1),N=w({__name:"Calendar",props:{element:{type:Object,required:!0}},setup(e){const s=e,{t:m}=x(),u=B(),f=g(),{redirectOnSubmit:v}=P();function a(){v(s.element)}return y(async()=>{const n=await $fetch(f.public.newBaseURL+`/get-whitelabel?locationId=${u.value.locationId}`);D("wl",n.whitelabelUrl)}),(n,T)=>{var l,r;const C=k,_=L;return t(),o("div",null,[e.element.extra.calendarId&&e.element.extra.calendarId.value==="none"?(t(),o("div",O,[R,E(" "+b(h(m)("unable_to_fetch_calendar")),1)])):(r=(l=e.element)==null?void 0:l.calendarData)!=null&&r.isTeamSelected?(t(),c(C,{key:1,"calendar-data":e.element.calendarData,calendarElementClass:e.element.id,redirect:e.element.extra.action&&e.element.extra.action.value==="none",onOnSubmit:a,"funnel-preview":!0,"direct-widget":!1},null,8,["calendar-data","calendarElementClass","redirect"])):e.element.calendarData?(t(),c(_,{key:2,"calendar-data":e.element.calendarData,calendarElementClass:e.element.id,redirect:e.element.extra.action&&e.element.extra.action.value==="none","funnel-preview":!0,onOnSubmit:a},null,8,["calendar-data","calendarElementClass","redirect"])):I("",!0)])}}});export{N as default};


}
/*
     FILE ARCHIVED ON 08:25:18 Sep 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:15:41 Jul 17, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.516
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.019
  esindex: 0.011
  cdx.remote: 16.737
  LoadShardBlock: 98.745 (3)
  PetaboxLoader3.datanode: 170.966 (5)
  load_resource: 290.725 (2)
  PetaboxLoader3.resolve: 158.359 (2)
*/