const e=window.Neos.h;class t{constructor(){this.compact=!1}renderHeader(){return e("div",{class:"header"},e("div",{class:"label"},e("neos-label",{label:this.label})),e("div",{class:"metadata"},e("slot",{name:"metadata"})))}wrapperClassName(){return!1===this.compact?"label-wrapper":"label-wrapper label-wrapper--compact"}render(){return e("div",{class:this.wrapperClassName()},!1===this.compact?this.renderHeader():null,e("div",{class:"content"},e("slot",{name:"before"}),e("slot",null),e("slot",{name:"after"})))}static get is(){return"neos-form-input-wrapper"}static get encapsulation(){return"shadow"}static get properties(){return{compact:{type:Boolean,attr:"compact"},label:{type:String,attr:"label"}}}static get style(){return".sc-neos-form-input-wrapper-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.sc-neos-form-input-wrapper-h   .header.sc-neos-form-input-wrapper, .sc-neos-form-input-wrapper-h   .label-wrapper.sc-neos-form-input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:end;align-items:flex-end}.sc-neos-form-input-wrapper-h   .header.sc-neos-form-input-wrapper{width:100%}.sc-neos-form-input-wrapper-h{display:-ms-flexbox;display:flex;color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;line-height:1.1}.sc-neos-form-input-wrapper-h, .sc-neos-form-input-wrapper-h   .header.sc-neos-form-input-wrapper{font-size:14px}.sc-neos-form-input-wrapper-h   .label-wrapper.sc-neos-form-input-wrapper{-ms-flex:1;flex:1;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:16px}.sc-neos-form-input-wrapper-h   .label-wrapper--compact.sc-neos-form-input-wrapper{margin-top:-8px;margin-bottom:2px}.sc-neos-form-input-wrapper-h   .metadata.sc-neos-form-input-wrapper{margin-left:auto;margin-right:1px}.sc-neos-form-input-wrapper-h   .content.sc-neos-form-input-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 0 100%;flex:1 0 100%;margin-top:8px}.sc-neos-form-input-wrapper-h slot[name=metadata].sc-neos-form-input-wrapper-s > neos-badge{margin-right:0;margin-left:6px}.sc-neos-form-input-wrapper-h slot[name=before].sc-neos-form-input-wrapper-s > *{margin-right:2px}.sc-neos-form-input-wrapper-h slot[name=after].sc-neos-form-input-wrapper-s > *{margin-left:2px}"}}export{t as NeosFormInputWrapper};