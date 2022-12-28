'use strict;'
const A0={viewport:null,viewport_width:0,pages_container:null,nr_pages:0,lst_pages:null,current_page_idx:0,previous_page_idx:0,client_onResize:null,client_onClick:null,mouse_or_touch:null,PAGE_FREE:0,PAGE_LANDSCAPE:1,PAGE_PORTRAIT:-1,page_before_rotate:-1,page_mode:0,page_rotate_id:0};function g13(t){return document.getElementById(t)}function g11(t,i){return(i=i||document).getElementsByTagName(t)[0]}function g12(t,i){return(i=i||document).getElementsByTagName(t)}function g9(t,i=document){return i.querySelector(t)}function g10(t,i=document){return i.querySelectorAll(t)}function g1(t,i){for(i=i.toUpperCase();t.tagName!==i;)t=t.parentNode;return t}function g14(s,h=null){return new Promise((t,i)=>setTimeout(t,s,h))}function g5(i,t){t.forEach(t=>null!==t&&i.appendChild(t))}function g8(t,i){t=getComputedStyle(document.documentElement).getPropertyValue("--"+t.split("--").pop()).trim();return i?parseInt(t,10):t}function g6(t){for(var i=t.length-1;0<i;i--){var s=Math.floor(Math.random()*(i+1)),h=t[i];t[i]=t[s],t[s]=h}}function g7(t){return t.concat()}function g2(t,i){return t.includes(i)?t.splice(t.indexOf(i),1).pop():null}function g3(t,i){return i>=t.length?null:t.splice(i,1).pop()}function g0(t){return g3(t,Math.f13(0,t.length-1))}function g4(t){return t[Math.f13(0,t.length-1)]}A0.f20=function(t,i){this.viewport=document.getElementById("AppViewport"),this.pages_container=document.getElementById("AppPagesContainer"),this.lst_pages=Array.from(document.querySelectorAll(".AppPage")),this.nr_pages=this.lst_pages.length,window.hasOwnProperty("cordova")?this.mouse_or_touch="mousedown":this.mouse_or_touch=void 0!==window.ontouchstart?"touchstart":"mousedown",A0.f14(null),this.client_onResize=t||null,this.client_onClick=i||null,window.visualViewport.addEventListener("resize",A0.f14.bind(this))},A0.f14=function(t){this.viewport_width=this.viewport.offsetWidth,this.viewport.style.height=window.visualViewport.height+"px",this.pages_container.style.width=this.nr_pages*this.viewport_width+"px",this.pages_container.style.left=-this.current_page_idx*this.viewport.offsetWidth+"px",this.lst_pages.forEach(t=>t.style.width=this.viewport_width+"px"),this.f6(),this.f9(),null!==this.client_onResize&&this.client_onResize(this.viewport_width,this.viewport.offsetHeight)},A0.f15=function(){return this.viewport_width},A0.f12=function(){return this.viewport.offsetHeight},A0.f16=function(t=""){if("string"==typeof t){var i=0,s=t;for(t=this.current_page_idx;i<this.nr_pages;){if(this.lst_pages[i].id===s){t=i;break}i++}}return this.pages_container.style.left=-t*this.viewport.offsetWidth+"px",this.previous_page_idx=this.current_page_idx,this.current_page_idx=t},A0.f7=function(){return this.current_page_idx},A0.f3=function(){return this.lst_pages[this.current_page_idx].id},A0.f6=function(){this.f16(this.current_page_idx)},A0.f4=function(){this.f16(this.current_page_idx)},A0.f11=function(t,i){this.page_mode=t,this.page_rotate_id=i,this.f9()},A0.f9=function(){return this.show_page=!1,this.page_mode!==this.PAGE_FREE&&(Math.sign(this.viewport.offsetWidth-this.viewport.offsetHeight)!==this.page_mode?(-1===this.page_before_rotate&&(this.page_before_rotate=this.current_page_idx),this.f16(this.page_rotate_id),this.show_page=!0):-1!==this.page_before_rotate&&(this.f16(this.page_before_rotate),this.page_before_rotate=-1,this.show_page=!0)),this.show_page||this.f6(),this.show_page},A0.f0=function(t,i){t.addEventListener(this.mouse_or_touch,this.f17.bind(this,i)),t.addEventListener("contextmenu",this.f8.bind(this))},A0.f5=function(t,i,s){"mousedown"===(i="MOUSE||TOUCH"===i?this.mouse_or_touch:i)&&t.addEventListener("contextmenu",this.f8.bind(this)),t.addEventListener(i,s)},A0.f10=function(t){return t.stopPropagation(),t.preventDefault(),t.target},A0.f17=function(t,i){this.f10(i),null!==this.client_onClick&&this.client_onClick(t,i.target)},A0.f8=function(t){this.f10(t),t.target.click()},A0.f1=function(t){"serviceWorker"in navigator&&"https:"===window.location.protocol&&void 0===window.cordova&&navigator.serviceWorker.register(t).then(t=>{}).catch(t=>{})},A0.A2={element:null,timer:0,seconds:0},A0.A2.f20=function(t){this.element=t instanceof Node?t:g13(t)},A0.A2.f18=function(){clearTimeout(this.timer),this.seconds=-1,this.f21()},A0.A2.f21=function(){this.seconds+=1,this.element.innerHTML=this.seconds,this.timer=setTimeout(this.f21.bind(this),1e3)},A0.A2.f22=function(t=null){clearTimeout(this.timer),null!==t&&(this.element.innerHTML=t)},A0.A1={},A0.A1.f19=function(){return 0<navigator.maxTouchPoints},A0.A1.f23=function(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},A0.A1.f2=function(){document.fullscreenElement||!this.f19()||this.f23()||document.documentElement.requestFullscreen instanceof Function&&document.documentElement.requestFullscreen({navigationUI:"hide"})},Math.f13=function(t,i){return Math.floor(Math.random()*(i-t+1))+t};class C0{#p53=null;#p51=1/0;#p42=1/0;#p32=1/0;#p31=1/0;#p25=null;constructor(t,i=!1){this.#p53=t,!0===i?this.#p25=this.#P24():i instanceof Node&&(this.#p25=i,this.#p25.id=this.#p53,this.#p25.classList.add("FlexBoxEntity"))}#P24(){var t=document.createElement("div");return t.id=this.#p53,t.classList.add("FlexBoxEntity"),t}M75(){return this.#p53}M33(){return[this.#p51,this.#p42]}M44(){return this.#p25}f15(){return this.#p32}f12(){return this.#p31}M72(){return this.#p51}M63(){return this.#p42}f14(t,i,s,h){this.M34(s,h),this.M64(t,i)}M34(t,i){this.#p51=t,this.#p42=i,null!==this.#p25&&(this.#p25.style.top=t+"px",this.#p25.style.left=i+"px")}M64(t,i){this.#p32=t,this.#p31=i,null!==this.#p25&&(this.#p25.style.width=t+"px",this.#p25.style.height=i+"px")}}class E3 extends C0{#p11=null;#p26=null;#p33=null;#p8=[];constructor(t,i,s,h,e=!1){super(t,e),this.#p11=i,this.#p26=s,this.#p33=h,e&&this.M44().classList.add("FlexBox")}M49(t,i=!0){this.#p8[i?"push":"unshift"](t),this.M1()}M27(t){g2(this.#p8,t),this.M1()}f14(t,i,s,h){super.f14(t,i,s,h),this.M1()}M8(i,s){0<this.#p8.length&&this.#p8.forEach(t=>t.M64(i,s))}M1(){var i,s,h,e;0!==this.#p8.length&&(s=i=0,this.#p8.forEach(t=>{i+=t.f15(),s+=t.f12()}),i!==1/0)&&s!==1/0&&("row"===this.#p11?(h=this.#P7(this.#p26)(!0,"width",i),e=this.#P7(this.#p33)(!1,"height",s)):(e=this.#P7(this.#p26)(!0,"height",s),h=this.#P7(this.#p33)(!1,"width",i)),this.#p8.forEach(t=>{t.M34(e.shift(),h.shift())}))}M24(i){this.#p8.forEach(t=>i(t))}#P7(t){return"center"===t?this.#P0.bind(this):"start"===t?this.#P2.bind(this):"end"===t?this.#P5.bind(this):"evenly"===t?this.#P1.bind(this):void 0}#P8(t,i){for(var s,h="width"===i?this.M63():this.M72(),e=[],n=0;n<this.#p8.length;++n)t&&0<n&&(s=this.#p8[n-1],h+="width"===i?s.f15():s.f12()),e.push(h);return e}#P2(t,i,s){return this.#P8(t,i)}#P0(t,i,s){for(var h,e=this.#P8(t,i),n=this.#p8.length,p="width"===i?this.f15():this.f12(),r=Math.round((p-s)/2),o=0;o<n;++o)t?e[o]+=r:(h=this.#p8[o],e[o]+=Math.round((p-("width"===i?h.f15():h.f12()))/2));return e}#P5(t,i,s){for(var h,e=this.#P8(t,i),n=this.#p8.length,p="width"===i?this.f15():this.f12(),r=Math.round(p-s),o=0;o<n;++o)t?e[o]+=r:(h=this.#p8[o],e[o]+=p-("width"===i?h.f15():h.f12()));return e}#P1(t,i,s){for(var h=this.#P8(t,i),e=this.#p8.length,t="width"===i?this.f15():this.f12(),n=Math.round((t-s)/(e+1)),p=0;p<e;++p)h[p]+=(p+1)*n;return h}}class E4 extends C0{#p53=null;#p43=-1;#p34=-1;#p35=-1;#p27=!0;#p22=!1;#p1=!0;#p23=null;constructor(t,i,s){super("Card_"+t,!0),this.#p53=t,this.#p43=i.id,this.#p34=s.nr,this.#p35=i.color,this.e_body=null,this.e_face=null,this.e_back=null,this.e_value=null,this.e_value_nr=null,this.e_suit=null,this.M55(s.symbol,s.nr),this.e_suit.innerHTML=i.symbol,this.M9(this.#p1)}M15(){return this.e_body}M9(t){(this.#p1=t)&&(this.M66()||this.M76())?this.e_value_nr.classList.remove("Hidden"):this.e_value_nr.classList.add("Hidden")}M55(t,i){this.e_body=document.createElement("div"),this.e_body.classList.add("CardBody"),this.e_body.classList.add("Clickable"),this.e_face=document.createElement("div"),this.e_face.classList.add("CardFace"),this.e_body.appendChild(this.e_face),this.e_back=document.createElement("div"),this.e_back.classList.add("CardBack"),this.e_body.appendChild(this.e_back),this.e_value=document.createElement("p"),this.e_value.classList.add("CardValue"),this.e_value.classList.add("CardValue"+this.#p35);var s=document.createElement("span"),t=(s.innerHTML=t,this.e_value.appendChild(s),this.e_face.appendChild(this.e_value),this.e_value_nr=document.createElement("span"),(this.M66()||this.M76())&&(this.e_value_nr.innerHTML=i),this.e_value.appendChild(this.e_value_nr),this.e_suit=document.createElement("p"),this.e_suit.classList.add("CardSuit"),this.e_suit.classList.add("CardSuit"+this.#p35),this.e_face.appendChild(this.e_suit),this.#p27||this.e_body.classList.add("FaceDown"),this.M66()?this.e_face.classList.add("CardRoyal"):this.M67()?this.e_face.classList.add("CardJoker"):this.M76()&&this.e_face.classList.add("CardAce"),this.M44());t.classList.add("Card"),t.classList.add("CardSmooth"),t.appendChild(this.e_body)}M56(){return this.#p34}M65(){return this.#p43}M57(){return this.#p35}M64(t,i){super.M64(t,i),this.e_value.style.fontSize=Math.round(.3*t)+"px",this.e_value.children.length&&(this.e_value.children[1].style.fontSize=Math.round(.2*t)+"px"),this.e_suit.style.fontSize=Math.round(.4*t)+"px"}M50(t){this.#p27=t,this.e_body.classList[t?"remove":"add"]("FaceDown")}M35(t){this.#p22=t,this.e_body.classList[t?"add":"remove"]("CardSelected")}M16(){return this.M35(!this.#p22),this.#p22}M36(t){this.#p23=t}M78(t){return this.#p23===t}M37(){return this.#p23}M66(){return[k17,k13,k18].includes(this.#p34)}M67(){return this.#p34===k12}M76(){return this.#p34===k22}M58(){return this.#p27}M45(){return this.#p22}M51(t){this.M44().classList[t?"add":"remove"]("CardHidden")}M52(t){this.M44().classList[t?"add":"remove"]("CardSmooth")}M53(t){this.M44().style.zIndex=t}M28(){return this.M66()||this.M76()}}class C1{#p24=null;#p28=null;#p44=null;#p5=null;#p13=null;#p45=null;#p9=null;#p2=null;#p15=null;#p10=null;#p16=null;#p46=null;#p36=null;#p0=null;#p3=null;#p47=!1;#p37=0;#p38=0;#p14=[{id:"enemy_draw",txt:"Enemy draw"},{id:"hand_discard",txt:"Hand discard"},{id:"hand_draw",txt:"Hand draw"},{id:"hand_action",txt:"Hand action"}];constructor(){this.clicked_card=null,A0.f20(this.#P31.bind(this),this.#P32.bind(this)),A0.f1("sw-v1.js"),A0.A2.f20("txt_time"),this.#p24=g13("GameViewport"),this.#p28=new E1("Dungeon",k8,!1),this.#p44=new E1("Hand",k8,!0),this.#p5=new E2("Dungeon"),this.#p13=new E2("Hand"),this.#p9=this.#p5.M42(),this.#p2=this.#p5.M23(),this.#p15=this.#p13.M42(),this.#p10=this.#p13.M23(),this.#p45=new C4(k20),this.#p16=new C2(k21),this.#p46=new C5(g13("MenuPannel"),g13("MenuIcon")),this.#p0=new C0("DungeonPilesInfo",g13("DungeonPilesInfo")),this.#p5.M49(this.#p0),this.#p3=new C0("HandPilesInfo",g13("HandPilesInfo")),this.#p13.M49(this.#p3),this.#p36=new C3(this.#p3.M44()),this.#p24.appendChild(this.#p28.M44()),this.#p24.appendChild(this.#p44.M44()),g5(this.#p24,this.#p5.M43()),g5(this.#p24,this.#p13.M43()),g13("Play").appendChild(this.#p16.M44()),A0.f5(window,"contextmenu",A0.f10.bind(A0)),A0.f0(this.#p10.M15(),this.#p10),A0.f0(this.#p15.M15(),this.#p15),A0.f0(this.#p2.M15(),this.#p2),A0.f0(g13("HomeCard"),null),A0.f0(g13("MenuIcon"),null),Array.from(g12("p",g13("MenuPannel"))).forEach(t=>{t.classList.add("Clickable"),A0.f0(t,null)}),this.#P31(0,0),this.#P29(),this.#p46.M80(),this.#P33(),g13("AppViewport").classList.remove("AppInit")}#P33(){this.Dungeon=this.#p28,this.DungeonDraw=this.#p9,this.DungeonDiscard=this.#p2,this.Hand=this.#p44,this.HandDraw=this.#p15,this.HandDiscard=this.#p10,this.Deck=this.#p45,this.Messenger=this.#p16,this.Menu=this.#p46}#P28(){k23=k23_0,k19=k19_0,k17=11,k13=12;for(var t of k19)"J"===t.value?t.value=k17:"Q"===t.value&&(t.value=k13)}#P29(){for(var t,i=!0;null!==(t=this.#p45.M71());)this.#p24.appendChild(t.M44()),A0.f0(t.M15(),t),((i=!i)?this.#p2:this.#p10).M68(t)}#P31(t,i){var s=this.#p24.offsetTop,h=this.#p24.offsetWidth,e=Math.round(h/4),n=Math.round(this.#p24.offsetHeight/4),[e,s]=this.#P23(e,n,s);this.#p45.M32(e,s),this.#p5.f14(h,n,0,0,e,s),this.#p28.f14(h,n,n,0),this.#p44.f14(h,n,2*n,0),this.#p13.f14(h,n,3*n,0,e,s),this.#p16.f14(h,Math.round(s/2),0,this.#p24.offsetLeft)}#P23(t,i,s){var s=3*s,t=t-s,h=Math.round(t*k3);return i-s<h&&(h=i-s,t=Math.round(h/k3)),[t,h]}#P20(t){"MenuIcon"===t?this.#p46.M73():"Play"===t?"Play"===A0.f3()?this.#P34():(this.#p46.M61(!0),this.#p46.M81(),A0.f16("Play")):"Home"===t?(this.#p46.M80(),this.#p46.M61(!1),A0.f16("Home")):"Info"===t&&A0.f16(t)}#P32(t,i){return this.#p46.IsIcon(i)?this.#P20(i.id.split("_").pop()):"HomeCard"===i.id?this.#P20("Play"):void(this.#p47||(t instanceof E4?this.#P25(t):t instanceof E0?this.#P21(t):"DungeonPilesInfo"===i.id&&(A0.A2.f22(""),this.#P34())))}#P25(t){var i;this.clicked_card=t,this.#p47||(i=t.M37(),t.M58()?i===this.#p44?t.M16():this.#p38===k4?this.#P14(t).then(t=>{this.#P22()}).catch(t=>{this.#p16.M40("Hand action &raquo; "+t+".")}):this.#p38===k1&&(t=this.#p14[k1],this.#p16.M40("No time to capture &raquo; Current phase: "+t.txt),this.#p44.M0()):this.#P21(i))}#P21(t){this.#p47||(t===this.#p9||t===this.#p2?t===this.#p2&&this.M79("dungeon"):t===this.#p15?this.M79("hand"):this.#p38!==k1?this.#P35("No time to discard &raquo; Current phase: "+this.#p14[this.#p38].txt):this.#P10())}#P10(){this.busy=!0;const i=this.#p44.M6();var t=i.length;const s=k8-this.#p44.M46()+t;this.#P17(.33,t,t=>{this.#p10.M68(this.#p44.M47(i.pop()))}).then(t=>(this.#P22(),this.#P13(s))).then(t=>this.#P12(this.#p15,this.#p44,s)).then(t=>{this.busy=!1,this.#P22()})}#P34(){this.#p47||(this.#p47=!0,this.#p37=0,this.#p38=0,this.#p36.M77(),this.#p9.M60(0),this.#p15.M60(0),this.#p46.M80(),g13("Menu_Play").classList.add("Hidden"),A0.A2.f22(""),this.#P9(),this.#p45.M77(),this.#p45.M70(),this.#P16(),this.#P11(),this.#p9.M60(k0),this.#p15.M60(k0),this.#P12(this.#p9,this.#p28,k8).then(t=>this.#P12(this.#p15,this.#p44,k8)).then(t=>this.#P18()).then(t=>{this.#P22(),A0.A2.f18(),g13("Menu_Play").classList.remove("Hidden"),this.#p47=!1}))}#P22(){this.#p38=(this.#p38+1)%this.#p14.length;this.#p14[this.#p38];this.#p38===k5&&(this.#p37+=1),this.#p10.M54(this.#p38===k1),this.#p38===k5?this.#P12(this.#p9,this.#p28,1).then(t=>{0===this.#p28.M46()?(A0.A2.f22(),this.#p16.M40("Congratulations! You scored: "+this.#p36.M62())):this.#P22()}):this.#p38===k1&&0===this.#p44.M46()&&(this.#P22(),this.#P10())}#P9(){this.#p45.M39(t=>t.M52(!1)),this.#p28.M48(this.#p2),this.#p44.M48(this.#p10),this.#p9.M12(this.#p2),this.#p15.M12(this.#p10),setTimeout(t=>this.#p45.M39(t=>t.M52(!0)),0)}#P26(t,i){for(var s;0<t.length;)(s=t.pop()).M37().M47(s),i.M68(s)}#P16(){var t=this.#p45.M5(t=>{var i=t.M56();return 2<=i&&i<=4||t.M67()});this.#P26(t,this.#p15)}#P11(){this.#P26(this.#p45.M3(),this.#p9)}#P12(i,s,t){return this.#P17(.33,Math.min(t,i.M46()),t=>{s.M68(i.M20())})}#P17(t,i,s){if(0===i)return Promise.resolve(null);for(var h=[],e=k0*t,n=0;0<i--;)h.push(g14(n).then(t=>{s()})),n+=e;return h.push(g14(n-e+k0)),Promise.all(h)}#P18(){var t=this.#p28.M5(t=>t.M28()),s=.75*k0;const[h,e]=this.#p9.M11();for(var n=[],i=t.length,p=0;0<i--;){let i=t.pop();n.push(g14(p).then(t=>{this.#p28.M47(i),i.M53(0),i.M50(!1),i.M34(h,e)})),n.push(g14(p+=s,i).then(t=>{this.#p9.M10(t),this.#p28.M68(this.#p9.M20())})),p+=s}return n.push(g14(p-s+k0)),Promise.all(n)}#P13(t){return this.#p15.M46()>=t?Promise.resolve(null):(this.#p10.M30(),this.#P17(.2,this.#p10.M46(),t=>{this.#p15.M10(this.#p10.M20())}))}#P35(t){this.#p16.M40(t)}#P14(t){var i=this.#p44.M6();return 0===i.length?Promise.reject("Select at least a card from your hand"):this.#P6(t,i)?this.#P15("cec",t,i):this.#P3(t,i)?this.#P15("ecc",t,i):this.#P4(t,i)?this.#P15("stc",t,i):Promise.reject("That is not a valid hand action")}#P6(t,i){var s=this.#p45.M14(i);return null!==s&&s===t.M65()&&(i=this.#p45.M7(i,s),!isNaN(i))&&i>=t.M56()}#P3(t,i){var s=i[0];return 1===i.length&&!s.M28()&&!t.M28()&&this.#p28.M13(t)&&(s.M65()!==t.M65()||s.M56()<t.M56())}#P4(t,i){return 2===i.length&&!this.#p45.M22(i,t=>t.M28())}#P15(h,t,i){this.#p36.M74(h,t,i);const e=i.concat(t);return this.#P17(.66,e.length,t=>{var i=e.pop(),s=i.M37();s.M47(i),"cec"===h?this.#p10.M68(i):"ecc"===h?this.#p2.M68(i):"stc"===h&&(s===this.#p44?this.#p2.M68(i):this.#p9.M10(i))}).then(t=>Promise.resolve(h))}M79(t="hand"){console.debug("| HELP:",t);const i=[0,0,0,0],s=[[],[],[],[]];var h,t="hand"===t?this.#p44.M59().concat(this.#p15.M59()).concat(this.#p10.M59()):this.#p2.M59();for(h in t.forEach(t=>{t.M67()||(i[t.M65()]+=1,s[t.M65()].push(t.M56()))}),i)console.debug("|",k16[h].padStart(8," "),":",i[h].toString().padStart(2," "),"=",s[h].sort((t,i)=>t-i).join(", "))}}class E0 extends E3{#p53=null;#p17=[];#p39=0;#p6=!1;#p48=null;#p18=null;constructor(t){super(t,"column","center","center",!0),this.#p53=t,this.#p48=new C0(this.#p53+"_Base",!0),this.M49(this.#p48);t=this.#p48.M44();t.classList.add("CardPileBase"),t.classList.add("Clickable"),this.#p18=document.createElement("p"),this.#p18.classList.add("Hidden"),t.appendChild(this.#p18)}M17(){return this.#p48.M44()}M59(){return g7(this.#p17)}M18(t){this.#p6=t,0<this.#p17.length&&this.#p17[this.#p17.length-1].M50(t)}M19(t,i){this.M8(t,i),this.M1(),this.#P19(),this.#p18.style.fontSize=Math.round(.09*t)+"px"}#P19(){const[i,s]=this.#p48.M33();this.#p17.forEach(t=>t.M34(i,s))}M25(){var i=1;this.#p17.forEach(t=>t.M53(i++))}M60(t){this.#p39=t}M29(t){this.M68(t,!0)}M10(t){this.M68(t,!1)}M68(t,i=!0){var s,h;this.#p17.includes(t)||(this.#p17[i?"push":"unshift"](t),this.#p18.innerHTML=this.#p17.length,[s,h]=this.#p48.M33(),t.M35(!1),t.M50(!1),t.M34(s,h),i?t.M53(100+this.#p17.length):t.M53(0),t.M36(this),g14(this.#p39).then(t=>{this.M25(),this.M2()}))}M11(){return this.#p48.M33()}M20(){var t;return 0===this.#p17.length?null:((t=this.#p17.pop()).M53(100+this.#p17.length),t.M51(!1),this.M2(),this.#p18.innerHTML=this.#p17.length,t)}M2(){var t=this.#p17.length-1;if(0<=t){var i=this.#p17[t];for(i.M51(!1),i.M50(this.#p6),--t;0<=t;--t)(i=this.#p17[t]).M51(!0),i.M50(!1)}}M69(){return 0===this.#p17.length}M46(){return this.#p17.length}M47(t){if(this.#p17.includes(t))return g2(this.#p17,t),t.M51(!1),this.#p18.innerHTML=this.#p17.length,this.M2(),t}M38(t){this.#p18.classList[t?"remove":"add"]("Hidden"),t&&(this.#p18.innerHTML=this.#p17.length)}M12(t){for(var i;0<this.#p17.length;)i=this.#p17[0],this.M47(i),t.M68(i)}M15(){return this.#p48.M44()}M30(){1<this.#p17.length&&(g6(this.#p17),this.M25(),this.M2())}M54(t){this.M44().classList[t?"add":"remove"]("Highlight")}}class E1 extends E3{#p53=null;#p19=0;#p29=!1;#p17=[];constructor(t,i,s){super(t,"row","evenly","center",!0),this.#p53=t,this.#p29=s,this.#p19=i}f14(t,i,s,h){super.f14(t,i,s,h)}M68(t){this.#p17.length===this.#p19||this.#p17.includes(t)||(t.M36(this),t.M50(!0),t.M53(100+this.#p17.length),this.#p17.unshift(t),this.M49(t,!1))}M47(t){if(this.#p17.includes(t))return g2(this.#p17,t),this.M27(t),t}M48(t){for(var i;0<this.#p17.length;)i=this.#p17[0],this.M47(i),t.M68(i)}M5(t){return this.#p17.filter(t)}M6(){return this.#p17.filter(t=>t.M45())}M0(){this.#p17.filter(t=>t.M45()).forEach(t=>t.M35(!1))}M13(t){return this.#p17[this.#p17.length-1]===t}M46(){return this.#p17.length}M59(){return g7(this.#p17)}}class C4{#p17=[];#p7=[];#p20=0;constructor(t){this.#p20=t,this.#P30()}#P30(){for(var t,i,s,h=0,e=[],n=0;n<4;++n)for(s=this.M31(n),e.includes(s)||e.push(s),i=2;i<=14;++i)t=new E4(h++,{id:n,symbol:this.M26(n),color:s},{nr:i,symbol:this.M21(i)}),this.#p17.push(t);for(var p=0,r=1;r<=this.#p20;++r)t=new E4(h++,{id:k15,symbol:this.M26(k15),color:e[p]},{nr:k12,symbol:this.M21(k12)}),this.#p17.push(t),p=(1+p)%e.length}f14(i,s){this.M39(t=>t.M64(i,s))}M39(t){this.#p17.forEach(t),this.#p7.forEach(t)}M70(){g6(this.#p17)}M71(){var t;return 0===this.#p17.length?null:(t=g0(this.#p17),this.#p7.push(t),t)}M77(){for(;this.#p7.length;)this.#p17.push(this.#p7.pop())}M26(i){return k23.filter(t=>t.id===i).pop().symbol}M31(i){return k23.filter(t=>t.id===i).pop().color}M21(i){return i===k12||11<=i&&i<=13||i===k22?k19.filter(t=>t.value===i).pop().symbol:i}M32(i,s){this.M39(t=>t.M64(i,s))}M5(t){t=this.#p17.filter(t);return t.forEach(t=>{g2(this.#p17,t),this.#p7.push(t)}),t}M46(){return this.#p17.length}M3(){for(var t=[];0<this.#p17.length;){var i=this.#p17.pop();this.#p7.push(i),t.push(i)}return t}M22(t,i){var s=!1;return t.forEach(t=>{i(t)&&(s=!0)}),s}M7(t,i=null){var s,h,e;return 0===t.length||null===(i=null===i?this.M14(t):i)?NaN:(e=h=s=0,t.forEach(t=>{t.M67()?s+=1:(t=t.M56(),h+=t,e<t&&(e=t))}),0<s&&(h+=s*e),h)}M14(t){var i,s;return 0!==t.length&&(s=!(i=null),t.forEach(t=>{t.M67()||null!==(i=null===i?t.M65():i)&&t.M65()!==i&&(s=!1)}),s)?i:null}}class C2{#p25=null;#p52=null;#p21=0;#p40=0;constructor(t){this.#p25=document.createElement("div"),this.#p25.id="Messenger",this.#p52=document.createElement("p"),this.#p25.appendChild(this.#p52),this.#p21=t<1e3?1e3*t:t}M44(){return this.#p25}f14(t,i,s,h){this.#p25.style.width=t+"px",this.#p25.style.height=i+"px",this.#p25.style.left=h+"px",this.#p52.style.fontSize=Math.min(Math.round(.25*i),17)+"px",this.M80()}M80(){this.#p25.style.top=-1.1*this.#p25.offsetHeight+"px"}M4(t,i){0<this.#p21&&this.M40("<span>"+t+"</span>: "+i)}M40(t){0<this.#p21&&(clearTimeout(this.#p40),this.#p40=setTimeout(this.M80.bind(this),this.#p21),this.#p52.innerHTML=t,this.#p25.style.top=0)}M41(t){clearTimeout(this.timer),this.#p52.innerHTML=t,this.#p25.style.top=0}}class C5{#p25=null;#p49=null;constructor(t,i){this.#p25=t,this.#p49=i}M81(){this.#p25.style.right=0}M80(){this.#p25.style.right=-1.1*this.#p25.offsetWidth+"px"}M73(){"0px"===this.#p25.style.right?this.M80():this.M81()}M61(t=!0){this.#p49.classList[t?"remove":"add"]("Hidden")}IsIcon(t){return t.id.startsWith("Menu")}}class E2 extends E3{#p53=null;#p50=null;#p30=null;constructor(t){super("PilesRow_"+t,"row","evenly","center",!1),this.#p53=t,this.#p50=new E0(t+"_Draw"),this.#p30=new E0(t+"_Discard"),this.#p30.M38(!0),this.#p50.M38(!0),this.M49(this.#p50),this.M49(this.#p30)}f14(t,i,s,h,e,n){super.f14(t,i,s,h),this.M8(Math.min(Math.round(t/3),i),i),this.M1(),this.M24(t=>{t instanceof E0?t.M19(e,n):t.M44().style.fontSize=Math.round(.12*e)+"px"})}M42(){return this.#p50}M23(){return this.#p30}M43(){return[this.M44(),this.#p50.M44(),this.#p30.M44(),this.#p50.M17(),this.#p30.M17()]}}class C3{#p25=null;#p41=0;#p12=0;#p4=0;constructor(t){this.#p25=t}M77(){this.#p41=0,this.#p12=0,this.#p4=0,this.#P27()}M74(t,i,s){"cec"===t?(this.#p41+=i.M56(),i.M28()&&(this.#p12+=1,this.#p4+=i.M56())):"ecc"!==t&&"stc"!==t||s.forEach(t=>this.#p41-=t.M56()),this.#P27()}#P27(){g13("txt_score").innerHTML=this.#p41,g13("txt_nr_captures").innerHTML=this.#p12,g13("txt_percent_captures").innerHTML=Math.round(this.#p4/k2*100)}M62(){return this.#p41}}const k3=16/11,k20=2,k21=5,k8=4,k0=g8("CARD_TRANSLATE_TIME",!0),k5=0,k1=1,k6=2,k4=3,k2=200,k7=16,k10=0,k11=1,k9=2,k14=3,k15=4,k16=["hearts","spades","diamonds","clubs","joker"],k12=0,k17=11,k13=12,k18=13,k22=14,k23=[{id:k10,symbol:"&hearts;",color:"Red"},{id:k11,symbol:"&spades;",color:"Black"},{id:k9,symbol:"&diams;",color:"Red"},{id:k14,symbol:"&clubs;",color:"Black"},{id:k15,symbol:"",color:""}],k19=[{value:k17,symbol:"J"},{value:k13,symbol:"Q"},{value:k18,symbol:"K"},{value:k12,symbol:"&#x2605;"},{value:k22,symbol:"A"}];window.addEventListener("load",()=>{new C1});