/*! For license information please see Main.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3)},function(e,t,n){},function(e,t){var n,r,o,l,i,c;n=jQuery,r=(new Date).getTime(),o=n.event.special,l=n.event.handle||n.event.dispatch,i="scroll.scrollstart"+r,c="scroll.scrollend"+r,o.scrollstart={setup:function(){var e;n(this).bind(i,(function(t){null==e?(t.type="scrollstart",l.apply(this,arguments)):clearTimeout(e),e=setTimeout((function(){e=null}),o.scrollend.delay)}))},teardown:function(){n(this).unbind(i)}},o.scrollend={delay:300,setup:function(){var e;n(this).bind(c,(function(t){var n=this,r=arguments;clearTimeout(e),e=setTimeout((function(){t.type="scrollend",l.apply(n,r)}),o.scrollend.delay)}))},teardown:function(){n(this).unbind(c)}},n.isScrolled=!1,n(window).bind("scrollstart scrollend",(function(e){n.isScrolled="scrollstart"==e.type,n("body")[n.isScrolled?"addClass":"removeClass"]("is-scrolled")}))},function(e,t){var n,r;n=jQuery,r=n(".top-navigation-wrap"),n(window).on("scrollstart scrollend",(function(){r.toggleClass("scrolling",n(document).scrollTop()>0)}))}]);
//# sourceMappingURL=Main.js.map