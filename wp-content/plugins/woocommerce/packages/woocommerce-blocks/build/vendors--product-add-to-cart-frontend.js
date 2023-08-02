(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[90],{337:function(e,t,n){"use strict";var r=n(0),i=n(12);const a=Object(r.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(i.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));t.a=a},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8),i=(n(355),n(295),n(13),n(365),n(394),n(392),n(356));function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(i.a)(t)}r.useInsertionEffect?r.useInsertionEffect:r.useLayoutEffect},431:function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return r.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return r.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return r.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return r.findChunks}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findAll=function(e){var t=e.autoEscape,a=e.caseSensitive,o=void 0!==a&&a,c=e.findChunks,l=void 0===c?r:c,s=e.sanitize,u=e.searchWords,d=e.textToHighlight;return i({chunksToHighlight:n({chunks:l({autoEscape:t,caseSensitive:o,sanitize:s,searchWords:u,textToHighlight:d})}),totalLength:d?d.length:0})};var n=t.combineChunks=function(e){var t=e.chunks;return t.sort((function(e,t){return e.start-t.start})).reduce((function(e,t){if(0===e.length)return[t];var n=e.pop();if(t.start<=n.end){var r=Math.max(n.end,t.end);e.push({highlight:!1,start:n.start,end:r})}else e.push(n,t);return e}),[])},r=function(e){var t=e.autoEscape,n=e.caseSensitive,r=e.sanitize,i=void 0===r?a:r,o=e.searchWords,c=e.textToHighlight;return c=i(c),o.filter((function(e){return e})).reduce((function(e,r){r=i(r),t&&(r=r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"));for(var a=new RegExp(r,n?"g":"gi"),o=void 0;o=a.exec(c);){var l=o.index,s=a.lastIndex;s>l&&e.push({highlight:!1,start:l,end:s}),o.index===a.lastIndex&&a.lastIndex++}return e}),[])};t.findChunks=r;var i=t.fillInChunks=function(e){var t=e.chunksToHighlight,n=e.totalLength,r=[],i=function(e,t,n){t-e>0&&r.push({start:e,end:t,highlight:n})};if(0===t.length)i(0,n,!1);else{var a=0;t.forEach((function(e){i(a,e.start,!1),i(e.start,e.end,!0),a=e.end})),i(a,n,!1)}return r};function a(e){return e}}])},495:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"Text",(function(){return _})),n.d(r,"block",(function(){return R})),n.d(r,"positive",(function(){return N})),n.d(r,"destructive",(function(){return W})),n.d(r,"muted",(function(){return M})),n.d(r,"highlighterText",(function(){return $})),n.d(r,"upperCase",(function(){return I}));var i=n(9),a=n(0),o=n(7),c=n(4),l=n.n(c),s=n(10),u=function({icon:e,size:t=24,...n}){return Object(a.cloneElement)(e,{width:t,height:t,...n})},d=n(12),b=Object(a.createElement)(d.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)(d.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),f=n(354),p=n(353),h=n(348),g=n(515),m=n(472),x=n(471),O=n(302),j=n(468),v=n(470);const y=Object(O.a)({name:"hdknak",styles:"display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"}),w="…",k={auto:"auto",head:"head",middle:"middle",tail:"tail",none:"none"},z={ellipsis:w,ellipsizeMode:k.auto,limit:0,numberOfLines:0};var S=n(366),C=n.n(S),E=n(395),F=n.n(E);let H;const L=C()((function(e){var t,n;if("string"!=typeof e)return"";if("string"==typeof(n=e)&&F()(n).isValid())return e;if(!e.includes("var("))return"";if("undefined"==typeof document)return"";const r=function(){if("undefined"!=typeof document){if(!H){const e=document.createElement("div");e.setAttribute("data-g2-color-computation-node",""),document.body.appendChild(e),H=e}return H}}();if(!r)return"";r.style.background=e;const i=null===(t=window)||void 0===t?void 0:t.getComputedStyle(r).background;return r.style.background="",i||""}));var T=n(461),B=n(347),P={colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:"18px",fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",controlPaddingX:"12px",controlPaddingXLarge:"calc(12px * 1.3334)",controlPaddingXSmall:"calc(12px / 1.3334)",controlBackgroundColor:T.a.white,controlBorderRadius:"2px",controlBorderColor:T.a.gray[700],controlBoxShadow:"transparent",controlBorderColorHover:T.a.gray[700],controlBoxShadowFocus:"0 0 0, 0.5px, "+T.a.admin,controlDestructiveBorderColor:T.a.alert.red,controlHeight:"30px",controlHeightLarge:"calc( 30px * 1.2 )",controlHeightSmall:"calc( 30px * 0.8 )",controlHeightXSmall:"calc( 30px * 0.6 )",cardBorderRadius:"2px",cardPaddingXSmall:""+Object(B.a)(2),cardPaddingSmall:""+Object(B.a)(4),cardPaddingMedium:`${Object(B.a)(4)} ${Object(B.a)(6)}`,cardPaddingLarge:`${Object(B.a)(6)} ${Object(B.a)(8)}`,surfaceBackgroundColor:T.a.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:T.a.white,surfaceColor:T.a.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"};const _=Object(O.a)("color:",T.a.black,";line-height:",P.fontLineHeightBase,";margin:0;",""),R=Object(O.a)({name:"4zleql",styles:"display:block"}),N=Object(O.a)("color:",T.a.alert.green,";",""),W=Object(O.a)("color:",T.a.alert.red,";",""),M=Object(O.a)("color:",T.a.mediumGray.text,";",""),$=Object(O.a)("mark{background:",T.a.alert.yellow,";border-radius:2px;box-shadow:0 0 0 1px rgba( 0, 0, 0, 0.05 ) inset,0 -1px 0 rgba( 0, 0, 0, 0.1 ) inset;}",""),I=Object(O.a)({name:"50zrmy",styles:"text-transform:uppercase"});var D=n(431);const A=C()(e=>{const t={};for(const n in e)t[n.toLowerCase()]=e[n];return t}),V={body:13,caption:10,footnote:11,largeTitle:28,subheadline:12,title:20};function X(e=13){if(e in V)return X(V[e]);if("number"!=typeof e){const t=parseFloat(e);if(Number.isNaN(t))return e;e=t}return`calc((${e} / 13) * ${P.fontSize})`}[1,2,3,4,5,6].flatMap(e=>[e,e.toString()]);var q=Object(x.a)({as:"span",useHook:function(e){const{adjustLineHeightForInnerControls:t,align:n,children:i,className:c,color:l,ellipsizeMode:s,isDestructive:u=!1,display:d,highlightEscape:b=!1,highlightCaseSensitive:f=!1,highlightWords:p,highlightSanitize:h,isBlock:g=!1,letterSpacing:m,lineHeight:x,optimizeReadabilityFor:S,size:C,truncate:E=!1,upperCase:H=!1,variant:N,weight:I=P.fontWeight,...V}=Object(j.a)(e,"Text");let q=i;const G=Array.isArray(p),J="caption"===C;if(G){if("string"!=typeof i)throw new TypeError("`children` of `Text` must only be `string` types when `highlightWords` is defined");q=function({activeClassName:e="",activeIndex:t=-1,activeStyle:n,autoEscape:r,caseSensitive:i=!1,children:o,findChunks:c,highlightClassName:l="",highlightStyle:s={},highlightTag:u="mark",sanitize:d,searchWords:b=[],unhighlightClassName:f="",unhighlightStyle:p}){if(!o)return null;if("string"!=typeof o)return o;const h=o,g=Object(D.findAll)({autoEscape:r,caseSensitive:i,findChunks:c,sanitize:d,searchWords:b,textToHighlight:h}),m=u;let x,O=-1,j="";return g.map((r,o)=>{const c=h.substr(r.start,r.end-r.start);if(r.highlight){let r;O++,r="object"==typeof l?i?l[c]:(l=A(l))[c.toLowerCase()]:l;const u=O===+t;j=`${r} ${u?e:""}`,x=!0===u&&null!==n?Object.assign({},s,n):s;const d={children:c,className:j,key:o,style:x};return"string"!=typeof m&&(d.highlightIndex=O),Object(a.createElement)(m,d)}return Object(a.createElement)("span",{children:c,className:f,key:o,style:p})})}({autoEscape:b,children:i,caseSensitive:f,searchWords:p,sanitize:h})}let K;!0===E&&(K="auto"),!1===E&&(K="none");const U=function(e){const{className:t,children:n,ellipsis:r=w,ellipsizeMode:i=k.auto,limit:c=0,numberOfLines:l=0,...s}=Object(j.a)(e,"Truncate"),u=function(e="",t){const n={...z,...t},{ellipsis:r,ellipsizeMode:i,limit:a}=n;if(i===k.none)return e;let c,l;switch(i){case k.head:c=0,l=a;break;case k.middle:c=Math.floor(a/2),l=Math.floor(a/2);break;default:c=a,l=0}return i!==k.auto?function(e,t,n,r){if("string"!=typeof e)return"";const i=e.length,a=~~t,c=~~n,l=Object(o.isNil)(r)?w:r;return 0===a&&0===c||a>=i||c>=i||a+c>=i?e:0===c?e.slice(0,a)+l:e.slice(0,a)+l+e.slice(i-c)}(e,c,l,r):e}("string"==typeof n?n:"",{ellipsis:r,ellipsizeMode:i,limit:c,numberOfLines:l}),d=i===k.auto;return{...s,className:Object(a.useMemo)(()=>{const e={};return e.numberOfLines=Object(O.a)("-webkit-box-orient:vertical;-webkit-line-clamp:",l,";display:-webkit-box;overflow:hidden;",""),Object(O.b)(d&&!l&&y,d&&!!l&&e.numberOfLines,t)},[t,l,d]),children:u}}({...V,className:Object(a.useMemo)(()=>{const e={},i=function(e,t){if(t)return t;if(!e)return;let n=`calc(${P.controlHeight} + ${Object(B.a)(2)})`;switch(e){case"large":n=`calc(${P.controlHeightLarge} + ${Object(B.a)(2)})`;break;case"small":n=`calc(${P.controlHeightSmall} + ${Object(B.a)(2)})`;break;case"xSmall":n=`calc(${P.controlHeightXSmall} + ${Object(B.a)(2)})`}return n}(t,x);if(e.Base=Object(O.a)({color:l,display:d,fontSize:X(C),fontWeight:I,lineHeight:i,letterSpacing:m,textAlign:n},"",""),e.upperCase=Object(O.a)({name:"50zrmy",styles:"text-transform:uppercase"}),e.optimalTextColor=null,S){const t="dark"==("#000000"===function(e){const t=L(e);return F.a.isReadable(t,"#000000")?"#000000":"#ffffff"}(S)?"dark":"light");e.optimalTextColor=t?Object(O.a)({color:T.a.black},"",""):Object(O.a)({color:T.a.white},"","")}return Object(O.b)(_,e.Base,e.optimalTextColor,u&&W,!!G&&$,g&&R,J&&M,N&&r[N],H&&e.upperCase,c)},[t,n,c,l,d,g,J,u,G,m,x,S,C,H,N,I]),children:i,ellipsizeMode:s||K});return!E&&Array.isArray(i)&&(q=a.Children.map(i,e=>Object(o.isPlainObject)(e)&&"props"in e&&Object(v.b)(e,["Link"])?Object(a.cloneElement)(e,{size:e.props.size||"inherit"}):e)),{...U,children:E?U.children:q}},name:"Text"}),G=n(1);const J=new RegExp(/-left/g),K=new RegExp(/-right/g),U=new RegExp(/Left/g),Q=new RegExp(/Right/g);function Y(e={},t){return()=>t?Object(G.isRTL)()?Object(h.a)(t,""):Object(h.a)(e,""):Object(G.isRTL)()?Object(h.a)(((e={})=>Object(o.mapKeys)(e,(e,t)=>function(e){return"left"===e?"right":"right"===e?"left":J.test(e)?e.replace(J,"-right"):K.test(e)?e.replace(K,"-left"):U.test(e)?e.replace(U,"Right"):Q.test(e)?e.replace(Q,"Left"):e}(t)))(e),""):Object(h.a)(e,"")}var Z={name:"1n8met0",styles:"padding-top:0"};const ee=()=>Z;var te={name:"1739oy8",styles:"z-index:1"};const ne=({isFocused:e})=>e?te:"";var re={name:"2o6p8u",styles:"justify-content:space-between"},ie={name:"14qk3ip",styles:"align-items:flex-start;flex-direction:column-reverse"},ae={name:"hbng6e",styles:"align-items:flex-start;flex-direction:column"};const oe=({labelPosition:e})=>{switch(e){case"top":return ae;case"bottom":return ie;case"edge":return re;default:return""}},ce=Object(p.a)(g.a,{target:"e1cr7zh17"})("position:relative;border-radius:2px;",ee," ",ne," ",oe,";");var le={name:"wyxldh",styles:"margin:0 !important"},se={name:"1d3w5wq",styles:"width:100%"};const ue=Object(p.a)("div",{target:"e1cr7zh16"})("align-items:center;box-sizing:border-box;border-radius:inherit;display:flex;flex:1;position:relative;",({disabled:e})=>{const t=e?T.a.ui.backgroundDisabled:T.a.ui.background;return Object(h.a)({backgroundColor:t},"","")}," ",({hideLabel:e})=>e?le:null," ",({__unstableInputWidth:e,labelPosition:t})=>e?"side"===t?"":"edge"===t?Object(h.a)({flex:"0 0 "+e},"",""):Object(h.a)({width:e},"",""):se,";");var de={name:"103r1kr",styles:"&::-webkit-input-placeholder{line-height:normal;}"};Object(p.a)("input",{target:"e1cr7zh15"})("&&&{background-color:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:",T.a.black,";display:block;margin:0;outline:none;padding-left:8px;padding-right:8px;width:100%;",({isDragging:e,dragCursor:t})=>{let n="",r="";return e&&(n=Object(h.a)("cursor:",t,";user-select:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}","")),e&&t&&(r=Object(h.a)("&:active{cursor:",t,";}","")),Object(h.a)(n," ",r,";","")}," ",({disabled:e})=>e?Object(h.a)({color:T.a.ui.textDisabled},"",""):""," ",({size:e})=>{const t={default:"13px",small:"11px"}[e];return t?Object(h.a)("font-size:","16px",";@media ( min-width: 600px ){font-size:",t,";}",""):""}," ",({size:e})=>{const t={default:{height:30,lineHeight:1,minHeight:30},small:{height:24,lineHeight:1,minHeight:24}},n=t[e]||t.default;return Object(h.a)(n,"","")}," ",()=>de,";}");var be={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"};const fe=()=>be,pe=({labelPosition:e})=>{let t=4;return"edge"!==e&&"side"!==e||(t=0),Object(h.a)({paddingTop:0,paddingBottom:t},"","")},he=Object(p.a)(q,{target:"e1cr7zh14"})("&&&{box-sizing:border-box;color:currentColor;display:block;margin:0;max-width:100%;z-index:1;",pe," ",fe,";}"),ge=e=>Object(a.createElement)(he,Object(i.a)({},e,{as:"label"})),me=Object(p.a)(m.a,{target:"e1cr7zh13"})({name:"1b6uupn",styles:"max-width:calc( 100% - 10px )"}),xe=Object(p.a)("div",{target:"e1cr7zh12"})("&&&{box-sizing:border-box;border-radius:inherit;bottom:0;left:0;margin:0;padding:0;pointer-events:none;position:absolute;right:0;top:0;",({disabled:e,isFocused:t})=>{let n=t?T.a.ui.borderFocus:T.a.ui.border,r=null;return t&&(r=`0 0 0 1px ${T.a.ui.borderFocus} inset`),e&&(n=T.a.ui.borderDisabled),Object(h.a)({boxShadow:r,borderColor:n,borderStyle:"solid",borderWidth:1},"","")}," ",Y({paddingLeft:2}),";}"),Oe=Object(p.a)("span",{target:"e1cr7zh11"})({name:"pvvbxf",styles:"box-sizing:border-box;display:block"}),je=Object(p.a)("span",{target:"e1cr7zh10"})({name:"pvvbxf",styles:"box-sizing:border-box;display:block"});var ve=Object(a.memo)((function({disabled:e=!1,isFocused:t=!1}){return Object(a.createElement)(xe,{"aria-hidden":"true",className:"components-input-control__backdrop",disabled:e,isFocused:t})})),ye=n(39);function we({children:e,hideLabelFromVision:t,htmlFor:n,...r}){return e?t?Object(a.createElement)(ye.a,{as:"label",htmlFor:n},e):Object(a.createElement)(ge,Object(i.a)({htmlFor:n},r),e):null}var ke=Object(a.forwardRef)((function e({__unstableInputWidth:t,children:n,className:r,disabled:o=!1,hideLabelFromVision:c=!1,labelPosition:l,id:u,isFocused:d=!1,label:b,prefix:f,size:p="default",suffix:h,...g},m){const x=function(t){const n=Object(s.useInstanceId)(e);return t||"input-base-control-"+n}(u),O=c||!b;return Object(a.createElement)(ce,Object(i.a)({},g,function({labelPosition:e}){const t={};switch(e){case"top":t.direction="column",t.gap=0;break;case"bottom":t.direction="column-reverse",t.gap=0;break;case"edge":t.justify="space-between"}return t}({labelPosition:l}),{className:r,isFocused:d,labelPosition:l,ref:m,__unstableVersion:"next"}),Object(a.createElement)(me,null,Object(a.createElement)(we,{className:"components-input-control__label",hideLabelFromVision:c,labelPosition:l,htmlFor:x,size:p},b)),Object(a.createElement)(ue,{__unstableInputWidth:t,className:"components-input-control__container",disabled:o,hideLabel:O,isFocused:d,labelPosition:l},f&&Object(a.createElement)(Oe,{className:"components-input-control__prefix"},f),n,h&&Object(a.createElement)(je,{className:"components-input-control__suffix"},h),Object(a.createElement)(ve,{"aria-hidden":"true",disabled:o,isFocused:d,label:b,size:p})))}));const ze=Object(p.a)("select",{target:"e12x0a391"})("&&&{appearance:none;background:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:",T.a.black,";display:block;margin:0;width:100%;",({disabled:e})=>e?Object(h.a)({color:T.a.ui.textDisabled},"",""):"",";",({size:e})=>{const t={default:"13px",small:"11px"}[e];return t?Object(h.a)("font-size:","16px",";@media ( min-width: 600px ){font-size:",t,";}",""):""},";",({size:e})=>{const t={default:{height:30,lineHeight:1,minHeight:30},small:{height:24,lineHeight:1,minHeight:24}},n=t[e]||t.default;return Object(h.a)(n,"","")},";",Y({paddingLeft:8,paddingRight:24})(),";}"),Se=Object(p.a)("div",{target:"e12x0a390"})("align-items:center;bottom:0;box-sizing:border-box;display:flex;padding:0 4px;pointer-events:none;position:absolute;top:0;",Y({right:0})()," svg{display:block;}");const Ce=Object(a.forwardRef)((function e({className:t,disabled:n=!1,help:r,hideLabelFromVision:c,id:d,label:p,multiple:h=!1,onBlur:g=o.noop,onChange:m=o.noop,onFocus:x=o.noop,options:O=[],size:j="default",value:v,labelPosition:y="top",...w},k){const[z,S]=Object(a.useState)(!1),C=function(t){const n=Object(s.useInstanceId)(e);return t||"inspector-select-control-"+n}(d),E=r?C+"__help":void 0;if(Object(o.isEmpty)(O))return null;const F=l()("components-select-control",t);return Object(a.createElement)(f.a,{help:r},Object(a.createElement)(ke,Object(i.a)({className:F,disabled:n,hideLabelFromVision:c,id:C,isFocused:z,label:p,size:j,suffix:Object(a.createElement)(Se,null,Object(a.createElement)(u,{icon:b,size:18})),labelPosition:y},w),Object(a.createElement)(ze,Object(i.a)({},w,{"aria-describedby":E,className:"components-select-control__input",disabled:n,id:C,multiple:h,onBlur:e=>{g(e),S(!1)},onChange:e=>{if(h){const t=[...e.target.options].filter(({selected:e})=>e).map(({value:e})=>e);m(t)}else m(e.target.value,{event:e})},onFocus:e=>{x(e),S(!0)},ref:k,size:j,value:v}),O.map((e,t)=>{const n=e.id||`${e.label}-${e.value}-${t}`;return Object(a.createElement)("option",{key:n,value:e.value,disabled:e.disabled},e.label)}))))}));t.a=Ce},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(8);function i(e,t,n){var i=this,a=Object(r.useRef)(null),o=Object(r.useRef)(0),c=Object(r.useRef)(null),l=Object(r.useRef)([]),s=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(e),b=Object(r.useRef)(!0);d.current=e;var f=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var p=!!(n=n||{}).leading,h=!("trailing"in n)||!!n.trailing,g="maxWait"in n,m=g?Math.max(+n.maxWait||0,t):null;return Object(r.useEffect)((function(){return b.current=!0,function(){b.current=!1}}),[]),Object(r.useMemo)((function(){var e=function(e){var t=l.current,n=s.current;return l.current=s.current=null,o.current=e,u.current=d.current.apply(n,t)},n=function(e,t){f&&cancelAnimationFrame(c.current),c.current=f?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!b.current)return!1;var n=e-a.current,r=e-o.current;return!a.current||n>=t||n<0||g&&r>=m},x=function(t){return c.current=null,h&&l.current?e(t):(l.current=s.current=null,u.current)},O=function(){var e=Date.now();if(r(e))return x(e);if(b.current){var i=e-a.current,c=e-o.current,l=t-i,s=g?Math.min(l,m-c):l;n(O,s)}},j=function(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];var h=Date.now(),m=r(h);if(l.current=d,s.current=i,a.current=h,m){if(!c.current&&b.current)return o.current=a.current,n(O,t),p?e(a.current):u.current;if(g)return n(O,t),e(a.current)}return c.current||n(O,t),u.current};return j.cancel=function(){c.current&&(f?cancelAnimationFrame(c.current):clearTimeout(c.current)),o.current=0,l.current=a.current=s.current=c.current=null},j.isPending=function(){return!!c.current},j.flush=function(){return c.current?x(Date.now()):u.current},j}),[p,g,t,m,h,f])}}}]);