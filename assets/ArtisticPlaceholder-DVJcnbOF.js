import{c as d,_ as p,b as l,d as i,e,t as c,F as o,g as r,x as n,k as u}from"./index-DjLcNY7o.js";/**
 * @license lucide-vue-next v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=d("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.519.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=d("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),y={class:"placeholder-content"},m={class:"artistic-text"},v={class:"artistic-subtitle"},h={class:"floating-elements"},g={class:"particle-system"},k={__name:"ArtisticPlaceholder",props:{text:{type:String,default:"项目"},subtitle:{type:String,default:"PROJECT"},type:{type:String,default:"project",validator:t=>["project","blog","featured"].includes(t)},size:{type:String,default:"medium",validator:t=>["small","medium","large"].includes(t)}},setup(t){return(_,a)=>(i(),l("div",{class:u(["artistic-placeholder",[`placeholder-${t.type}`,t.size]])},[e("div",y,[e("div",m,c(t.text),1),e("div",v,c(t.subtitle),1)]),a[0]||(a[0]=e("div",{class:"placeholder-overlay"},null,-1)),e("div",h,[(i(),l(o,null,r(5,s=>e("div",{class:"floating-element",key:s,style:n({animationDelay:`${s*.3}s`})},null,4)),64))]),a[1]||(a[1]=e("div",{class:"geometric-shapes"},[e("div",{class:"shape shape-1"}),e("div",{class:"shape shape-2"}),e("div",{class:"shape shape-3"})],-1)),e("div",g,[(i(),l(o,null,r(8,s=>e("div",{class:"particle",key:s,style:n({animationDelay:`${s*.2}s`})},null,4)),64))])],2))}},S=p(k,[["__scopeId","data-v-22cd2b24"]]);export{S as A,b as C,x as a};
