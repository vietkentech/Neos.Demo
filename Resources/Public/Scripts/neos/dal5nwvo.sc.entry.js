const t=window.Neos.h;class e{constructor(){this.didBlurAfterEdit=!1,this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.compact=!1,this.value=""}valueChanged(){const t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.neosChange.emit({value:e})}componentDidLoad(){this.neosInputDidLoad.emit()}componentDidUnload(){this.nativeInput=void 0,this.neosInputDidUnload.emit()}onInput(t){t.target&&(this.value=t.target&&t.target.value||""),this.neosInput.emit(t)}onBlur(){this.focusChanged(),this.neosBlur.emit()}onFocus(){this.focusChanged(),this.neosFocus.emit()}focusChanged(){this.clearOnEdit&&!this.hasFocus()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}inputKeydown(){this.checkClearOnEdit()}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)}clearTextInput(){this.value=""}hasFocus(){return this.nativeInput===document.activeElement}hasValue(){return""!==this.value}render(){return t("label",null,t("neos-form-input-wrapper",{label:this.label,compact:this.compact},t("slot",{name:"metadata",slot:"metadata"}),t("slot",{name:"before",slot:"before"}),t("input",{ref:t=>this.nativeInput=t,"aria-disabled":!!this.disabled&&"true",accept:this.accept,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.value,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.inputKeydown.bind(this)}),t("slot",{name:"after",slot:"after"})))}static get is(){return"neos-form-input"}static get encapsulation(){return"shadow"}static get properties(){return{accept:{type:String,attr:"accept"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},autofocus:{type:Boolean,attr:"autofocus"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},compact:{type:Boolean,attr:"compact"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},inputmode:{type:String,attr:"inputmode"},label:{type:String,attr:"label"},max:{type:String,attr:"max"},maxlength:{type:Number,attr:"maxlength"},min:{type:String,attr:"min"},minlength:{type:Number,attr:"minlength"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},pattern:{type:String,attr:"pattern"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},results:{type:Number,attr:"results"},size:{type:Number,attr:"size"},spellcheck:{type:Boolean,attr:"spellcheck"},step:{type:String,attr:"step"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"neosInput",method:"neosInput",bubbles:!0,cancelable:!0,composed:!0},{name:"neosChange",method:"neosChange",bubbles:!0,cancelable:!0,composed:!0},{name:"neosBlur",method:"neosBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"neosFocus",method:"neosFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"neosInputDidLoad",method:"neosInputDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"neosInputDidUnload",method:"neosInputDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-neos-form-input-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block}.sc-neos-form-input-h   input.sc-neos-form-input{-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px;line-height:40px;margin:0;-webkit-transition:all .18s ease-in;transition:all .18s ease-in}.sc-neos-form-input-h   label.sc-neos-form-input{margin:0}.sc-neos-form-input-h   .input.sc-neos-form-input{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.sc-neos-form-input-h{color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;line-height:1.1}.sc-neos-form-input-h, .sc-neos-form-input-h   input.sc-neos-form-input{font-weight:400;font-size:14px}.sc-neos-form-input-h   input.sc-neos-form-input{background-color:var(--neos-background-dark-color,#323232);border:0;outline:1px solid transparent;outline-offset:0;-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;padding:0 16px}.sc-neos-form-input-h   input.sc-neos-form-input:focus:enabled, .sc-neos-form-input-h   input.sc-neos-form-input:hover:enabled{outline:2px solid var(--neos-color-primary,#00adee);outline-offset:-2px}.sc-neos-form-input-h   input.sc-neos-form-input:focus:enabled{background-color:var(--neos-color-brightest,#fff);color:var(--neos-color-brightest-contrast,#000);outline:2px solid var(--neos-color-brightest,#fff)}.sc-neos-form-input-h   input[disabled].sc-neos-form-input{cursor:not-allowed;opacity:.85}"}}export{e as NeosFormInput};