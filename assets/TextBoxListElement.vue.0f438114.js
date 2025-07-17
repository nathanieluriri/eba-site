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

import{d as T,c as b,a as l,b as r,f as o,i as s,Q as v,t as u,e as i,n as g,F as B,k as E,w as F,R as O,h as S,p as w}from"./entry.285a7035.js";import{S as U}from"./ShortLabel.7af1ff63.js";const j=["innerHTML"],C={key:1},q={key:0},M={class:"col-md-12"},N=["for"],D={class:"option col-8 pl-0 mb-2"},H=["id","onUpdate:modelValue","name"],_={key:2,id:"error-container",class:"error"},R=T({__name:"TextBoxListElement",props:{kind:{type:String},item:{type:Object},formLabelVisible:{type:Boolean},formFieldsValue:{type:Object},localTagId:{type:String},errors:{type:Object,default:()=>({})}},emits:["addOrUpdateError"],setup(e,{expose:x,emit:V}){const t=e,y=b(()=>t.kind=="form"),d=b(()=>t.kind=="survey"),h=b(()=>t.errors[t.item.tag]),k=()=>{if(d.value)return;const m=t.formFieldsValue[t.item.tag];if(t.item.required){const n=Object.values(m);if(n.filter(a=>a===""||a===void 0||a==null).length===n.length){f(t.item.tag,`${t.item.label} is required`);return}f(t.item.tag,null)}else f(t.item.tag,null)},f=(m,n)=>{V("addOrUpdateError",{tag:m,error:n})};return x({validate:k,item:t.item}),(m,n)=>(l(),r("div",{class:g(["form-builder--item field-container",{"d-none":e.item.hidden,"form-builder--item-input":o(d)}])},[o(d)&&e.item.description!==void 0?(l(),r("label",{key:0,innerHTML:e.item.description,class:"item-description"},null,8,j)):s("",!0),e.formLabelVisible?(l(),r("label",C,[v(u(e.item.label)+" ",1),e.item.required?(l(),r("span",q,"*")):s("",!0)])):s("",!0),i("div",{class:g({"row ":o(d),"textbox-list-opt":o(y)})},[i("div",M,[i("table",{class:g({"w-100":o(y)})},[i("tbody",null,[(l(!0),r(B,null,E(e.item.picklistOptions,(c,a)=>(l(),r("tr",{key:a},[i("td",null,[i("label",{for:"textbox_"+e.item.tag+"_"+a+"_"+e.localTagId},u(c.label),9,N)]),i("td",null,[i("div",D,[F(i("input",{id:"textbox_"+e.item.tag+"_"+a+"_"+e.localTagId,ref_for:!0,ref:"textbox_"+e.item.tag+"_"+a,"onUpdate:modelValue":L=>e.formFieldsValue[e.item.tag][c.id]=L,name:e.item.tag,type:"text",class:"form-control",placeholder:"Value"},null,8,H),[[O,e.formFieldsValue[e.item.tag][c.id]]])])])]))),128))])],2)])],2),o(h)?(l(),r("div",_,u(o(h)),1)):s("",!0),e.item.shortLabel?(l(),S(U,{key:3},{default:w(()=>[v(u(e.item.shortLabel),1)]),_:1})):s("",!0)],2))}});export{R as _};


}
/*
     FILE ARCHIVED ON 13:10:41 Sep 21, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:16:14 Jul 17, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.724
  exclusion.robots: 0.034
  exclusion.robots.policy: 0.021
  esindex: 0.014
  cdx.remote: 131.474
  LoadShardBlock: 53.786 (3)
  PetaboxLoader3.datanode: 111.35 (5)
  load_resource: 605.14 (2)
  PetaboxLoader3.resolve: 494.921 (2)
*/