import{c,_ as o,b as a,d as l,e as t,t as i,F as d,g as n,k as u}from"./index-C1mmmaZh.js";/**
 * @license lucide-vue-next v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),m={class:"placeholder-content"},p={class:"artistic-text"},y={class:"artistic-subtitle"},v={class:"minimal-elements"},g={__name:"ArtisticPlaceholder",props:{text:{type:String,default:"项目"},subtitle:{type:String,default:"PROJECT"},type:{type:String,default:"project",validator:e=>["project","blog","featured"].includes(e)},size:{type:String,default:"medium",validator:e=>["small","medium","large"].includes(e)}},setup(e){return(_,s)=>(l(),a("div",{class:u(["artistic-placeholder",[`placeholder-${e.type}`,e.size]])},[t("div",m,[t("div",p,i(e.text),1),t("div",y,i(e.subtitle),1)]),s[0]||(s[0]=t("div",{class:"subtle-overlay"},null,-1)),t("div",v,[(l(),a(d,null,n(3,r=>t("div",{class:"element",key:r})),64))])],2))}},b=o(g,[["__scopeId","data-v-2f8b7b31"]]);export{b as A,f as C,k as a};
