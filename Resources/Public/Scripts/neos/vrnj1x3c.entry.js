const e=window.Neos.h;class t{constructor(){this.iconType="solid"}neosItemSelectedHandler(e){e.preventDefault(),this.neosItemSelected.emit(this.label)}render(){return e("a",{href:"#",class:"dropdown-item",onClick:e=>this.neosItemSelectedHandler(e)},this.icon?e("div",{class:"icon"},e("neos-icon",{name:this.icon,type:this.iconType})):null,e("div",{class:"selected-label"},this.label))}static get is(){return"neos-dropdown-item"}static get encapsulation(){return"shadow"}static get properties(){return{icon:{type:String,attr:"icon"},iconType:{type:String,attr:"icon-type"},label:{type:String,attr:"label"}}}static get events(){return[{name:"neosItemSelected",method:"neosItemSelected",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block}:host .dropdown-item{-ms-flex:1;flex:1;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px;line-height:40px;-webkit-transition:all 50ms ease-in;transition:all 50ms ease-in}:host{color:#fff;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:14px;line-height:1.1}:host .dropdown-item{display:-ms-flexbox;display:flex;background-color:var(--neos-background-dark-color,#323232);border:0;outline:1px solid var(--neos-color-darker,#222);-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;padding:0 0 0 16px;text-decoration:none}:host .dropdown-item:hover{background-color:var(--neos-color-primary,#00adee)}:host .icon{margin-right:.65em}:host .toggle{margin-left:auto}"}}export{t as NeosDropdownItem};