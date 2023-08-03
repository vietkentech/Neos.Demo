Neos.loadBundle("dojb2tby",["exports","./chunk-9cbb6aa8.js"],function(e,t){var n=window.Neos.h,o=function(){function e(){this.closed=!1}return e.prototype.neosVisibilitySwitchedHandler=function(e){this.isOpen=e.detail,this.queueVisibiltyChange()},e.prototype.componentDidLoad=function(){this.isOpen=!this.closed,this.queueVisibiltyChange()},e.prototype.queueVisibiltyChange=function(){var e=this;this.isOpen?setTimeout(function(){e.isVisible=!0},200):this.isVisible=!1},e.prototype.wrapperClassName=function(){return t.classnames("content-wrapper",{"content-wrapper--open":this.isOpen,"content-wrapper--visible":this.isVisible})},e.prototype.render=function(){return n("section",{role:"group"},n("neos-inspector-group-header",{icon:this.icon,label:this.label,open:this.isOpen}),n("div",{class:this.wrapperClassName()},n("div",{class:"content"},n("slot",null)),n("footer",null,n("slot",{name:"footer"}))))},Object.defineProperty(e,"is",{get:function(){return"neos-inspector-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{closed:{type:Boolean,attr:"closed"},icon:{type:String,attr:"icon"},isOpen:{state:!0},isVisible:{state:!0},label:{type:String,attr:"label"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"neosVisibilitySwitched",method:"neosVisibilitySwitchedHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-neos-inspector-group-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block}.sc-neos-inspector-group-h   header.sc-neos-inspector-group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-neos-inspector-group-h   .toggle.sc-neos-inspector-group{margin-left:auto}.sc-neos-inspector-group-h   .content-wrapper.sc-neos-inspector-group{height:auto;overflow:hidden}.sc-neos-inspector-group-h   .content-wrapper--open.sc-neos-inspector-group{height:0}.sc-neos-inspector-group-h   .content-wrapper--visible.sc-neos-inspector-group{overflow:visible}.sc-neos-inspector-group-h{border-top:1px solid var(--neos-color-dark,#3f3f3f);border-bottom:1px solid var(--neos-color-dark,#3f3f3f);margin-top:-1px}.sc-neos-inspector-group-h   .content-wrapper.sc-neos-inspector-group{-webkit-transition:max-height .4s ease-in-out,opacity .5s ease-in-out;transition:max-height .4s ease-in-out,opacity .5s ease-in-out;max-height:0;opacity:0}.sc-neos-inspector-group-h   .content-wrapper--open.sc-neos-inspector-group{max-height:1000px;height:auto;opacity:1}.sc-neos-inspector-group-h   .content.sc-neos-inspector-group{padding:16px 4px 6px}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){this.open=!0,this.isHovered=!1}return e.prototype.neosVisibilitySwitchedHandlerHandler=function(){this.neosVisibilitySwitched.emit(!this.open)},e.prototype.mouseEnterHandler=function(){this.isHovered=!0},e.prototype.mouseLeaveHandler=function(){this.isHovered=!1},e.prototype.chevronIcon=function(){return this.open?"chevron-up":"chevron-down"},e.prototype.buttonTheme=function(){return this.isHovered?"brand":"transparent"},e.prototype.render=function(){var e=this;return n("header",{onMouseEnter:function(){return e.mouseEnterHandler()},onMouseLeave:function(){return e.mouseLeaveHandler()},onClick:function(){return e.neosVisibilitySwitchedHandlerHandler()}},n("neos-icon",{squared:!0,name:this.icon,type:"solid"}),n("neos-label",{theme:"bold",label:this.label}),n("div",{class:"toggle"},n("neos-button",{squared:!0,theme:this.buttonTheme()},n("neos-icon",{name:this.chevronIcon(),type:"solid"}))))},Object.defineProperty(e,"is",{get:function(){return"neos-inspector-group-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{icon:{type:String,attr:"icon"},isHovered:{state:!0},label:{type:String,attr:"label"},open:{type:Boolean,attr:"open"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"neosVisibilitySwitched",method:"neosVisibilitySwitched",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-neos-inspector-group-header-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block}.sc-neos-inspector-group-header-h   header.sc-neos-inspector-group-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.sc-neos-inspector-group-header-h   .toggle.sc-neos-inspector-group-header{margin-left:auto}"},enumerable:!0,configurable:!0}),e}();e.NeosInspectorGroup=o,e.NeosInspectorGroupHeader=i,Object.defineProperty(e,"__esModule",{value:!0})});