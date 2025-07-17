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

import{s as L}from"./vue-multiselect.esm.f3270b7e.js";import{i as k}from"./HtmlInput.vue.53d3c79f.js";import{S as E}from"./ShortLabel.7af1ff63.js";import{d as F,r as S,c as m,a as r,b as n,f as a,i as o,Q as h,t as f,l as C,h as x,p as T,n as U}from"./entry.285a7035.js";const q=["innerHTML"],w={key:1},B={key:0},N={key:2,id:"error-container",class:"error"},P=F({__name:"OptionElement",props:{kind:{type:String},item:{type:Object},formLabelVisible:{type:Boolean},formFieldsValue:{type:Object},errors:{type:Object,default:()=>({})}},emits:["addOrUpdateError","handleFieldLogicChange"],setup(e,{expose:v,emit:p}){const t=e,g=S(),s=m(()=>t.kind=="survey"),y=m(()=>t.errors[t.item.tag]),d=m(()=>t.item.type==="single_options"),b=m(()=>t.item.type==="multiple_options"),O=(l,i)=>{g.value=l,s.value&&d.value&&p("handleFieldLogicChange",{...i,selectedOption:l})},V=()=>{if(s.value)return;const l=g.value;let i;d.value?i=k(l):b.value&&(i=l?!l.length:!0),t.item.required&&i?u(t.item.tag,`${t.item.label} is required`):u(t.item.tag,null),!t.item.dataType==="MULTIPLE_OPTIONS"&&t.formFieldsValue[t.item.tag]&&!t.item.picklistOptions.includes(t.formFieldsValue[t.item.tag])&&u(t.item.tag,`${t.item.label} having invalid value`)},u=(l,i)=>{p("addOrUpdateError",{tag:l,error:i})};return v({validate:V,item:t.item}),(l,i)=>(r(),n("div",{class:U(["form-builder--item field-container",{"d-none":e.item.hidden,"form-builder--item-input":a(s)}])},[a(s)&&e.item.description!==void 0?(r(),n("label",{key:0,innerHTML:e.item.description,class:"item-description"},null,8,q)):o("",!0),e.formLabelVisible?(r(),n("label",w,[h(f(e.item.label)+" ",1),e.item.required?(r(),n("span",B,"*")):o("",!0)])):o("",!0),C(a(L),{modelValue:e.formFieldsValue[e.item.tag],"onUpdate:modelValue":i[0]||(i[0]=c=>e.formFieldsValue[e.item.tag]=c),placeholder:!e.formLabelVisible&&e.item.required?e.item.placeholder+"*":e.item.placeholder,name:e.item.tag,options:e.item.picklistOptions,allowEmpty:!a(d),multiple:!!a(b),"show-labels":!1,closeOnSelect:!0,class:"multi_select_form",onSelect:i[1]||(i[1]=c=>{O(c,e.item)})},null,8,["modelValue","placeholder","name","options","allowEmpty","multiple"]),a(y)?(r(),n("div",N,f(a(y)),1)):o("",!0),e.item.shortLabel?(r(),x(E,{key:3},{default:T(()=>[h(f(e.item.shortLabel),1)]),_:1})):o("",!0)],2))}});export{P as _};


}
/*
     FILE ARCHIVED ON 13:10:41 Sep 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:16:19 Jul 17, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.604
  exclusion.robots: 0.032
  exclusion.robots.policy: 0.02
  esindex: 0.01
  cdx.remote: 49.162
  LoadShardBlock: 183.618 (3)
  PetaboxLoader3.datanode: 153.136 (5)
  PetaboxLoader3.resolve: 503.949 (3)
  load_resource: 579.592 (2)
*/