Neos.loadBundle("jqjmvbpn",["exports","./chunk-9cbb6aa8.js"],function(e,r){var t=window.Neos.h,n=function(){function e(){this.theme="regular"}return e.prototype.wrapperClassName=function(){return r.classnames("wrapper","t-"+this.theme)},e.prototype.render=function(){return t("div",{class:this.wrapperClassName()},t("div",{class:"zone"},t("slot",null)),t("div",{class:"zone"},t("slot",{name:"secondary"})))},Object.defineProperty(e,"is",{get:function(){return"neos-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{theme:{type:String,attr:"theme"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}:host .wrapper{height:40px}:host .wrapper,:host .zone{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap}:host .zone~.zone{margin-left:auto}:host{width:100%}:host .t-regular{background-color:var(--neos-color-neutral,#323232)}:host .t-dark{background-color:var(--neos-color-darker,#222)}"},enumerable:!0,configurable:!0}),e}();e.NeosToolbar=n,Object.defineProperty(e,"__esModule",{value:!0})});