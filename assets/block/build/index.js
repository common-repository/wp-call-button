!function(t){var e={};function n(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return t[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(l,o,function(e){return t[e]}.bind(null,o));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=window.wp.i18n},function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.wp.components},function(t,e,n){var l;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var l=arguments[e];if(l){var c=typeof l;if("string"===c||"number"===c)t.push(l);else if(Array.isArray(l)&&l.length){var a=o.apply(null,l);a&&t.push(a)}else if("object"===c)for(var r in l)n.call(l,r)&&l[r]&&t.push(r)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(l=function(){return o}.apply(e,[]))||(t.exports=l)}()},function(t,e){t.exports=window.wp.blocks},function(t,e,n){"use strict";n.r(e);var l=n(1),o=n(2);const c=({})=>Object(l.createElement)(o.Icon,{icon:Object(l.createElement)("svg",{x:"0px",y:"0px",width:"459px",height:"459px",viewBox:"0 0 459 459"},Object(l.createElement)("path",{d:"M91.8,198.9c35.7,71.4,96.9,130.05,168.3,168.3L316.2,311.1c7.649-7.649,17.85-10.199,25.5-5.1c28.05,10.2,58.649,15.3,91.8,15.3c15.3,0,25.5,10.2,25.5,25.5v86.7c0,15.3-10.2,25.5-25.5,25.5C193.8,459,0,265.2,0,25.5C0,10.2,10.2,0,25.5,0h89.25c15.3,0,25.5,10.2,25.5,25.5c0,30.6,5.1,61.2,15.3,91.8c2.55,7.65,0,17.85-5.1,25.5L91.8,198.9z"}))});var a=n(3),r=n.n(a),b=n(0);const{InspectorControls:u,PanelColorSettings:i,RichText:s}=window.wpcallbtnshim;var p=n(4);Object(p.registerBlockType)("wp-call-button/wp-call-button-block",{title:Object(b.__)("WP Call Button","wp-call-button"),description:Object(b.__)("Adds a clickable phone link (quick call button), so people can easily call your business phone.","wp-call-button"),icon:"phone",category:"common",keywords:[Object(b.__)("click to call button","wp-call-button"),Object(b.__)("call now button","wp-call-button"),Object(b.__)("phone","wp-call-button")],attributes:{btn_text:{type:"string",default:wpcallbtn_block_vars.data_call_btn_text},btn_color:{type:"string",default:"#269041"},btn_txt_color:{type:"string",default:"#fff"},hide_phone_icon:{type:"boolean",default:!1},class_for_call_btn:{type:"string",default:"wp-call-button-block-button wp-call-button-block-button-normal"},btn_font_size:{type:"number",default:16},btn_center_align:{type:"boolean",default:!1}},edit:({attributes:t,setAttributes:e})=>{const n=t.btn_text,a=t.btn_color,p=t.btn_txt_color,_=t.hide_phone_icon||!1,f=t.btn_center_align||!1,m=t.btn_font_size||16,w=[{name:Object(b.__)("Green","wp-call-button"),color:"#269041"},{name:Object(b.__)("Blue","wp-call-button"),color:"#12A5F4"},{name:Object(b.__)("Red","wp-call-button"),color:"red"},{name:Object(b.__)("Yellow","wp-call-button"),color:"yellow"},{name:Object(b.__)("Silver","wp-call-button"),color:"silver"},{name:Object(b.__)("Gray","wp-call-button"),color:"gray"},{name:Object(b.__)("Black","wp-call-button"),color:"black"}],d=[{name:Object(b.__)("White","wp-call-button"),color:"#fff"},{name:Object(b.__)("Black","wp-call-button"),color:"#000"}],j=[{name:Object(b.__)("Small","wp-call-button"),slug:"small",size:16},{name:Object(b.__)("Big","wp-call-button"),slug:"big",size:24}],{wpcallbtn_phone_num:O,settingsUrl:g}=window.wpcallbtn_block_vars;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(u,{key:"controls"},Object(l.createElement)(o.PanelBody,null,!O&&Object(l.createElement)(o.Notice,{status:"error",isDismissible:!1},Object(l.createElement)("p",null,Object(b.__)("Please set the phone number in the global settings.","wp-call-button")),Object(l.createElement)(o.Button,{isPrimary:!0,isSmall:!0,href:g},Object(b.__)("Go to settings","wp-call-button"))),Object(l.createElement)("hr",null),Object(l.createElement)(o.FontSizePicker,{fontSizes:j,onChange:t=>{e({btn_font_size:t})},value:m,disableCustomFontSizes:!0}),Object(l.createElement)(o.ToggleControl,{checked:_,onChange:t=>{e({hide_phone_icon:t})},label:Object(b.__)("Hide phone icon?","wp-call-button")}),Object(l.createElement)(o.ToggleControl,{checked:f,onChange:t=>{e({btn_center_align:t}),e({class_for_call_btn:(_?"wp-call-button-block-button-no-phone":"wp-call-button-block-button")+(t?" wp-call-button-block-button-center":" wp-call-button-block-button-normal")})},label:Object(b.__)("Center align call button?","wp-call-button")})),Object(l.createElement)(i,{title:Object(b.__)("Color settings:","wp-call-button"),initialOpen:!0,colorSettings:[{value:a,onChange:t=>{e({btn_color:t})},label:Object(b.__)("Background color:","wp-call-button"),disableCustomColors:!1,colors:w},{value:p,onChange:t=>{e({btn_txt_color:t})},label:Object(b.__)("Text color:","wp-call-button"),disableCustomColors:!1,colors:d}]})),Object(l.createElement)("p",{className:r()({"wp-call-button-block-button":!0,"wp-call-button-block-button-no-phone":_,"wp-call-button-block-button-center":f,"wp-call-button-block-button-normal":!f,[t.className]:!0})},Object(l.createElement)("span",{className:"wp-call-button-in-btn",style:{color:p,background:a,fontSize:m?m+"px":void 0}},!_&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)(c,null)," "),Object(l.createElement)(s,{key:"richtext",tagName:"span",onChange:t=>{e({btn_text:t})},value:n,formattingControls:[],multiline:!1}))))},save:()=>null})}]);