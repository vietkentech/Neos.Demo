const t=window.Neos.h;import{a as e}from "./chunk-f4dbbb4e.js";class r{constructor(){this.theme="regular"}className(){return e("wrapper","t-"+this.theme)}render(){return t("div",{class:this.className()},t("slot",null))}static get is(){return"neos-toolbar-separator"}static get encapsulation(){return"shadow"}static get properties(){return{theme:{type:String,attr:"theme"}}}static get style(){return".sc-neos-toolbar-separator-h{height:40px;margin:0;padding:0;margin:4px;height:calc(100% - 8px);border-left:.55px solid var(--neos-color-bright,#999)}"}}export{r as NeosToolbarSeparator};