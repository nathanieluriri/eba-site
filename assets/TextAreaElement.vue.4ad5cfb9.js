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

import{d as V,c as u,a as i,b as r,f as n,i as a,Q as f,t as m,w as g,R as k,e as x,h as q,p as E,n as L}from"./entry.285a7035.js";import{i as O}from"./HtmlInput.vue.53d3c79f.js";import{S as T}from"./ShortLabel.7af1ff63.js";const B=["innerHTML"],F={key:1},S={key:0},C=["placeholder","name","data-q","data-required"],U={key:2,id:"error-container",class:"error"},N=V({__name:"TextAreaElement",props:{kind:{type:String},item:{type:Object},formLabelVisible:{type:Boolean},formFieldsValue:{type:Object},errors:{type:Object,default:()=>({})}},emits:["addOrUpdateError"],setup(e,{expose:b,emit:y}){const t=e,o=u(()=>t.kind=="survey"),s=u(()=>t.errors[t.item.tag]),h=()=>{if(o.value)return;const l=t.formFieldsValue[t.item.tag];t.item.required&&O(l)?c(t.item.tag,`${t.item.label} is required`):c(t.item.tag,null)},c=(l,d)=>{y("addOrUpdateError",{tag:l,error:d})};return b({validate:h,item:t.item}),(l,d)=>(i(),r("div",{class:L(["form-builder--item field-container",{"d-none":e.item.hidden,"form-builder--item-input":n(o)}])},[n(o)&&e.item.description!==void 0?(i(),r("label",{key:0,innerHTML:e.item.description,class:"item-description"},null,8,B)):a("",!0),e.formLabelVisible?(i(),r("label",F,[f(m(e.item.label)+" ",1),e.item.required?(i(),r("span",S,"*")):a("",!0)])):a("",!0),g(x("textarea",{"onUpdate:modelValue":d[0]||(d[0]=v=>e.formFieldsValue[e.item.tag]=v),placeholder:!e.formLabelVisible&&e.item.required?e.item.placeholder+"*":e.item.placeholder,name:e.item.tag,class:"form-control","data-q":e.item.hiddenFieldQueryKey,"data-required":e.item.required},null,8,C),[[k,e.formFieldsValue[e.item.tag]]]),n(s)?(i(),r("div",U,m(n(s)),1)):a("",!0),e.item.shortLabel?(i(),q(T,{key:3},{default:E(()=>[f(m(e.item.shortLabel),1)]),_:1})):a("",!0)],2))}});export{N as _};


}
/*
     FILE ARCHIVED ON 13:10:41 Sep 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:16:17 Jul 17, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.523
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.034
  esindex: 0.011
  cdx.remote: 65.789
  LoadShardBlock: 232.218 (3)
  PetaboxLoader3.datanode: 135.933 (4)
  load_resource: 561.519
  PetaboxLoader3.resolve: 414.024
*/