Neos.loadBundle("6gvlnuth",["exports"],function(e){var t=window.Neos.h,r=function(){function e(){this.compact=!1}return e.prototype.renderHeader=function(){return t("div",{class:"header"},t("div",{class:"label"},t("neos-label",{label:this.label})),t("div",{class:"metadata"},t("slot",{name:"metadata"})))},e.prototype.wrapperClassName=function(){return!1===this.compact?"label-wrapper":"label-wrapper label-wrapper--compact"},e.prototype.render=function(){return t("div",{class:this.wrapperClassName()},!1===this.compact?this.renderHeader():null,t("div",{class:"content"},t("slot",{name:"before"}),t("slot",null),t("slot",{name:"after"})))},Object.defineProperty(e,"is",{get:function(){return"neos-form-input-wrapper"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{compact:{type:Boolean,attr:"compact"},label:{type:String,attr:"label"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}:host .header,:host .label-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}:host .header{width:100%}:host{display:-ms-flexbox;display:flex;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;line-height:1.1}:host,:host .header{font-size:14px}:host .label-wrapper{-ms-flex:1;flex:1;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:16px}:host .label-wrapper--compact{margin-top:-8px;margin-bottom:2px}:host .metadata{margin-left:auto;margin-right:1px}:host .content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 0 100%;flex:1 0 100%;margin-top:8px}:host slot[name=metadata]::slotted(neos-badge){margin-right:0;margin-left:6px}:host slot[name=before]::slotted(*){margin-right:2px}:host slot[name=after]::slotted(*){margin-left:2px}"},enumerable:!0,configurable:!0}),e}();e.NeosFormInputWrapper=r,Object.defineProperty(e,"__esModule",{value:!0})});