class CookieJar{constructor(){}set(e,t,n){var a="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),a="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+a+"; path=/"}get(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var i=n[a];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null}erase(e){document.cookie=e+"=; Max-Age=-99999999"}}class Alert{constructor(e,t){this.alert=document.querySelector(e),this.closeButton=this.alert.querySelector(".alert-close"),this.type=this.alert.dataset.type,this.cookieID=this.alert.id,this.cookies=t,this.init()}open(){this.alert.dataset.open=!0}close(){this.alert.dataset.open=!1,this.cookies.set("alert-"+this.cookieID,"hide",0)}init(){this.closeButton.addEventListener("click",()=>{this.close()}),this.cookies.get("alert-"+this.cookieID)||this.cookies.set("alert-"+this.cookieID,"show",0),"show"==this.cookies.get("alert-"+this.cookieID)?this.open():this.close()}}class UltraAnimate{constructor(e){return this.element=document.querySelector(e),this.delay=this.delay.bind(this),this}show(){return this.delay?setTimeout(()=>{this.element.classList.add("visible")},this.delay):this.element.classList.add("visible"),this}delay(e){return this.delay=e,this}}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var win=window,raf=win.requestAnimationFrame||win.webkitRequestAnimationFrame||win.mozRequestAnimationFrame||win.msRequestAnimationFrame||function(e){return setTimeout(e,16)},win$1=window,caf=win$1.cancelAnimationFrame||win$1.mozCancelAnimationFrame||function(e){clearTimeout(e)};function extend(){for(var e,t,n,a=arguments[0]||{},i=1,r=arguments.length;i<r;i++)if(null!==(e=arguments[i]))for(t in e)a!==(n=e[t])&&void 0!==n&&(a[t]=n);return a}function checkStorageValue(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function setLocalStorage(e,t,n,a){if(a)try{e.setItem(t,n)}catch(e){}return n}function getSlideId(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function getBody(){var e=document,t=e.body;return t||((t=e.createElement("body")).fake=!0),t}var docElement=document.documentElement;function setFakeBody(e){var t="";return e.fake&&(t=docElement.style.overflow,e.style.background="",e.style.overflow=docElement.style.overflow="hidden",docElement.appendChild(e)),t}function resetFakeBody(e,t){e.fake&&(e.remove(),docElement.style.overflow=t,docElement.offsetHeight)}function calc(){var e=document,t=getBody(),n=setFakeBody(t),a=e.createElement("div"),i=!1;t.appendChild(a);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=s[l],a.style.width=r,100===a.offsetWidth){i=r.replace(o,"");break}}catch(e){}return t.fake?resetFakeBody(t,n):a.remove(),i}function percentageLayout(){var e,t=document,n=getBody(),a=setFakeBody(n),i=t.createElement("div"),r=t.createElement("div"),o="";i.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,i.appendChild(r),n.appendChild(i),e=Math.abs(i.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?resetFakeBody(n,a):i.remove(),e}function mediaquerySupport(){var e,t=document,n=getBody(),a=setFakeBody(n),i=t.createElement("div"),r=t.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",i.className="tns-mq-test",n.appendChild(r),n.appendChild(i),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(t.createTextNode(o)),e=window.getComputedStyle?window.getComputedStyle(i).position:i.currentStyle.position,n.fake?resetFakeBody(n,a):i.remove(),"absolute"===e}function createStyleSheet(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function addCSSRule(e,t,n,a){"insertRule"in e?e.insertRule(t+"{"+n+"}",a):e.addRule(t,n,a)}function removeCSSRule(e,t){"deleteRule"in e?e.deleteRule(t):e.removeRule(t)}function getCssRulesLength(e){return("insertRule"in e?e.cssRules:e.rules).length}function toDegree(e,t){return Math.atan2(e,t)*(180/Math.PI)}function getTouchDirection(e,t){var n=!1,a=Math.abs(90-Math.abs(e));return a>=90-t?n="horizontal":a<=t&&(n="vertical"),n}function forEach(e,t,n){for(var a=0,i=e.length;a<i;a++)t.call(n,e[a],a)}var classListSupport="classList"in document.createElement("_"),hasClass=classListSupport?function(e,t){return e.classList.contains(t)}:function(e,t){return e.className.indexOf(t)>=0},addClass=classListSupport?function(e,t){hasClass(e,t)||e.classList.add(t)}:function(e,t){hasClass(e,t)||(e.className+=" "+t)},removeClass=classListSupport?function(e,t){hasClass(e,t)&&e.classList.remove(t)}:function(e,t){hasClass(e,t)&&(e.className=e.className.replace(t,""))};function hasAttr(e,t){return e.hasAttribute(t)}function getAttr(e,t){return e.getAttribute(t)}function isNodeList(e){return void 0!==e.item}function setAttrs(e,t){if(e=isNodeList(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var a in t)e[n].setAttribute(a,t[a])}function removeAttrs(e,t){e=isNodeList(e)||e instanceof Array?e:[e];for(var n=(t=t instanceof Array?t:[t]).length,a=e.length;a--;)for(var i=n;i--;)e[a].removeAttribute(t[i])}function arrayFromNodeList(e){for(var t=[],n=0,a=e.length;n<a;n++)t.push(e[n]);return t}function hideElement(e,t){"none"!==e.style.display&&(e.style.display="none")}function showElement(e,t){"none"===e.style.display&&(e.style.display="")}function isVisible(e){return"none"!==window.getComputedStyle(e).display}function whichProperty(e){if("string"==typeof e){var t=[e],n=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(a){"ms"===a&&"transform"!==e||t.push(a+n)}),e=t}for(var a=document.createElement("fakeelement"),i=0;i<e.length;i++){var r=e[i];if(void 0!==a.style[r])return r}return!1}function has3DTransforms(e){if(!e)return!1;if(!window.getComputedStyle)return!1;var t,n=document,a=getBody(),i=setFakeBody(a),r=n.createElement("p"),o=e.length>9?"-"+e.slice(0,-9).toLowerCase()+"-":"";return o+="transform",a.insertBefore(r,null),r.style[e]="translate3d(1px,1px,1px)",t=window.getComputedStyle(r).getPropertyValue(o),a.fake?resetFakeBody(a,i):r.remove(),void 0!==t&&t.length>0&&"none"!==t}function getEndProperty(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}var supportsPassive=!1;try{var opts=Object.defineProperty({},"passive",{get:function(){supportsPassive=!0}});window.addEventListener("test",null,opts)}catch(e){}var passiveOption=!!supportsPassive&&{passive:!0};function addEvents(e,t,n){for(var a in t){var i=["touchstart","touchmove"].indexOf(a)>=0&&!n&&passiveOption;e.addEventListener(a,t[a],i)}}function removeEvents(e,t){for(var n in t){var a=["touchstart","touchmove"].indexOf(n)>=0&&passiveOption;e.removeEventListener(n,t[n],a)}}function Events(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){t.type=e,this.topics[e]&&this.topics[e].forEach(function(n){n(t,e)})}}}function jsTransform(e,t,n,a,i,r,o){var s=Math.min(r,10),l=i.indexOf("%")>=0?"%":"px",u=(i=i.replace(l,""),Number(e.style[t].replace(n,"").replace(a,"").replace(l,""))),c=(i-u)/r*s;setTimeout(function i(){r-=s;u+=c;e.style[t]=n+u+l+a;r>0?setTimeout(i,s):o()},s)}var tns=function(e){e=extend({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},e||{});var t=document,n=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},i={},r=e.useLocalStorage;if(r){var o=navigator.userAgent,s=new Date;try{(i=n.localStorage)?(i.setItem(s,s),r=i.getItem(s)==s,i.removeItem(s)):r=!1,r||(i={})}catch(e){r=!1}r&&(i.tnsApp&&i.tnsApp!==o&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){i.removeItem(e)}),localStorage.tnsApp=o)}var l=i.tC?checkStorageValue(i.tC):setLocalStorage(i,"tC",calc(),r),u=i.tPL?checkStorageValue(i.tPL):setLocalStorage(i,"tPL",percentageLayout(),r),c=i.tMQ?checkStorageValue(i.tMQ):setLocalStorage(i,"tMQ",mediaquerySupport(),r),d=i.tTf?checkStorageValue(i.tTf):setLocalStorage(i,"tTf",whichProperty("transform"),r),f=i.t3D?checkStorageValue(i.t3D):setLocalStorage(i,"t3D",has3DTransforms(d),r),v=i.tTDu?checkStorageValue(i.tTDu):setLocalStorage(i,"tTDu",whichProperty("transitionDuration"),r),h=i.tTDe?checkStorageValue(i.tTDe):setLocalStorage(i,"tTDe",whichProperty("transitionDelay"),r),m=i.tADu?checkStorageValue(i.tADu):setLocalStorage(i,"tADu",whichProperty("animationDuration"),r),p=i.tADe?checkStorageValue(i.tADe):setLocalStorage(i,"tADe",whichProperty("animationDelay"),r),g=i.tTE?checkStorageValue(i.tTE):setLocalStorage(i,"tTE",getEndProperty(v,"Transition"),r),y=i.tAE?checkStorageValue(i.tAE):setLocalStorage(i,"tAE",getEndProperty(m,"Animation"),r),C=n.console&&"function"==typeof n.console.warn,E=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],x={};if(E.forEach(function(n){if("string"==typeof e[n]){var a=e[n],i=t.querySelector(a);if(x[n]=a,!i||!i.nodeName)return void(C&&console.warn("Can't find",e[n]));e[n]=i}}),!(e.container.children.length<1)){var w=e.responsive,b=e.nested,S="carousel"===e.mode;if(w){0 in w&&(e=extend(e,w[0]),delete w[0]);var A={};for(var T in w){var L=w[T];L="number"==typeof L?{items:L}:L,A[T]=L}w=A,A=null}if(S||function e(t){for(var n in t)S||("slideBy"===n&&(t[n]="page"),"edgePadding"===n&&(t[n]=!1),"autoHeight"===n&&(t[n]=!1)),"responsive"===n&&e(t[n])}(e),!S){e.axis="horizontal",e.slideBy="page",e.edgePadding=!1;var M=e.animateIn,k=e.animateOut,B=e.animateDelay,R=e.animateNormal}var N,D,P="horizontal"===e.axis,O=t.createElement("div"),I=t.createElement("div"),H=e.container,F=H.parentNode,q=H.outerHTML,z=H.children,W=z.length,V=_t(),j=!1;w&&Cn(),S&&(H.className+=" tns-vpfix");var G,Q,U,X,Y,J=e.autoWidth,K=nn("fixedWidth"),$=nn("edgePadding"),_=nn("gutter"),Z=en(),ee=nn("center"),te=J?1:Math.floor(nn("items")),ne=nn("slideBy"),ae=e.viewportMax||e.fixedWidthViewportWidth,ie=nn("arrowKeys"),re=nn("speed"),oe=e.rewind,se=!oe&&e.loop,le=nn("autoHeight"),ue=nn("controls"),ce=nn("controlsText"),de=nn("nav"),fe=nn("touch"),ve=nn("mouseDrag"),he=nn("autoplay"),me=nn("autoplayTimeout"),pe=nn("autoplayText"),ge=nn("autoplayHoverPause"),ye=nn("autoplayResetOnVisibility"),Ce=createStyleSheet(),Ee=e.lazyload,xe=(e.lazyloadSelector,[]),we=se?(X=function(){if(J||K&&!ae)return W-1;var t=K?"fixedWidth":"items",n=[];if((K||e[t]<W)&&n.push(e[t]),w)for(var a in w){var i=w[a][t];i&&(K||i<W)&&n.push(i)}return n.length||n.push(0),Math.ceil(K?ae/Math.min.apply(null,n):Math.max.apply(null,n))}(),Y=S?Math.ceil((5*X-W)/2):4*X-W,Y=Math.max(X,Y),tn("edgePadding")?Y+1:Y):0,be=S?W+2*we:W+we,Se=!(!K&&!J||se),Ae=K?Un():null,Te=!S||!se,Le=P?"left":"top",Me="",ke="",Be=K?function(){return ee&&!se?W-1:Math.ceil(-Ae/(K+_))}:J?function(){for(var e=be;e--;)if(G[e]>=-Ae)return e}:function(){return ee&&S&&!se?W-1:se||S?Math.max(0,be-Math.ceil(te)):be-1},Re=Jt(nn("startIndex")),Ne=Re,De=(Yt(),0),Pe=J?null:Be(),Oe=e.preventActionWhenRunning,Ie=e.swipeAngle,He=!Ie||"?",Fe=!1,qe=e.onInit,ze=new Events,We=" tns-slider tns-"+e.mode,Ve=H.id||getSlideId(),je=nn("disable"),Ge=!1,Qe=e.freezable,Ue=!(!Qe||J)&&yn(),Xe=!1,Ye={click:ta,keydown:function(e){e=ua(e);var t=[a.LEFT,a.RIGHT].indexOf(e.keyCode);t>=0&&(0===t?mt.disabled||ta(e,-1):pt.disabled||ta(e,1))}},Je={click:function(e){if(Fe){if(Oe)return;Zn()}var t=ca(e=ua(e));for(;t!==Et&&!hasAttr(t,"data-nav");)t=t.parentNode;if(hasAttr(t,"data-nav")){var n=St=Number(getAttr(t,"data-nav")),a=K||J?n*W/wt:n*te,i=at?n:Math.min(Math.ceil(a),W-1);ea(i,e),At===n&&(Rt&&oa(),St=-1)}},keydown:function(e){e=ua(e);var n=t.activeElement;if(!hasAttr(n,"data-nav"))return;var i=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(e.keyCode),r=Number(getAttr(n,"data-nav"));i>=0&&(0===i?r>0&&la(Ct[r-1]):1===i?r<wt-1&&la(Ct[r+1]):(St=r,ea(r,e)))}},Ke={mouseover:function(){Rt&&(aa(),Nt=!0)},mouseout:function(){Nt&&(na(),Nt=!1)}},$e={visibilitychange:function(){t.hidden?Rt&&(aa(),Pt=!0):Pt&&(na(),Pt=!1)}},_e={keydown:function(e){e=ua(e);var t=[a.LEFT,a.RIGHT].indexOf(e.keyCode);t>=0&&ta(e,0===t?-1:1)}},Ze={touchstart:ha,touchmove:ma,touchend:pa,touchcancel:pa},et={mousedown:ha,mousemove:ma,mouseup:pa,mouseleave:pa},tt=tn("controls"),nt=tn("nav"),at=!!J||e.navAsThumbnails,it=tn("autoplay"),rt=tn("touch"),ot=tn("mouseDrag"),st="tns-slide-active",lt="tns-complete",ut={load:function(e){Mn(ca(e))},error:function(e){t=ca(e),addClass(t,"failed"),kn(t);var t}},ct="force"===e.preventScrollOnTouch;if(tt)var dt,ft,vt=e.controlsContainer,ht=e.controlsContainer?e.controlsContainer.outerHTML:"",mt=e.prevButton,pt=e.nextButton,gt=e.prevButton?e.prevButton.outerHTML:"",yt=e.nextButton?e.nextButton.outerHTML:"";if(nt)var Ct,Et=e.navContainer,xt=e.navContainer?e.navContainer.outerHTML:"",wt=J?W:ya(),bt=0,St=-1,At=$t(),Tt=At,Lt="tns-nav-active",Mt="Carousel Page ",kt=" (Current Slide)";if(it)var Bt,Rt,Nt,Dt,Pt,Ot="forward"===e.autoplayDirection?1:-1,It=e.autoplayButton,Ht=e.autoplayButton?e.autoplayButton.outerHTML:"",Ft=["<span class='tns-visually-hidden'>"," animation</span>"];if(rt||ot)var qt,zt,Wt={},Vt={},jt=!1,Gt=P?function(e,t){return e.x-t.x}:function(e,t){return e.y-t.y};J||Xt(je||Ue),d&&(Le=d,Me="translate",f?(Me+=P?"3d(":"3d(0px, ",ke=P?", 0px, 0px)":", 0px)"):(Me+=P?"X(":"Y(",ke=")")),S&&(H.className=H.className.replace("tns-vpfix","")),function(){tn("gutter");O.className="tns-outer",I.className="tns-inner",O.id=Ve+"-ow",I.id=Ve+"-iw",""===H.id&&(H.id=Ve);We+=u||J?" tns-subpixel":" tns-no-subpixel",We+=l?" tns-calc":" tns-no-calc",J&&(We+=" tns-autowidth");We+=" tns-"+e.axis,H.className+=We,S?((N=t.createElement("div")).id=Ve+"-mw",N.className="tns-ovh",O.appendChild(N),N.appendChild(I)):O.appendChild(I);if(le){var n=N||I;n.className+=" tns-ah"}if(F.insertBefore(O,H),I.appendChild(H),forEach(z,function(e,t){addClass(e,"tns-item"),e.id||(e.id=Ve+"-item"+t),!S&&R&&addClass(e,R),setAttrs(e,{"aria-hidden":"true",tabindex:"-1"})}),we){for(var a=t.createDocumentFragment(),i=t.createDocumentFragment(),r=we;r--;){var o=r%W,s=z[o].cloneNode(!0);if(removeAttrs(s,"id"),i.insertBefore(s,i.firstChild),S){var c=z[W-1-o].cloneNode(!0);removeAttrs(c,"id"),a.appendChild(c)}}H.insertBefore(a,H.firstChild),H.appendChild(i),z=H.children}}(),function(){if(!S)for(var t=Re,a=Re+Math.min(W,te);t<a;t++){var i=z[t];i.style.left=100*(t-Re)/te+"%",addClass(i,M),removeClass(i,R)}P&&(u||J?(addCSSRule(Ce,"#"+Ve+" > .tns-item","font-size:"+n.getComputedStyle(z[0]).fontSize+";",getCssRulesLength(Ce)),addCSSRule(Ce,"#"+Ve,"font-size:0;",getCssRulesLength(Ce))):S&&forEach(z,function(e,t){e.style.marginLeft=function(e){return l?l+"("+100*e+"% / "+be+")":100*e/be+"%"}(t)}));if(c){if(v){var r=N&&e.autoHeight?un(e.speed):"";addCSSRule(Ce,"#"+Ve+"-mw",r,getCssRulesLength(Ce))}r=an(e.edgePadding,e.gutter,e.fixedWidth,e.speed,e.autoHeight),addCSSRule(Ce,"#"+Ve+"-iw",r,getCssRulesLength(Ce)),S&&(r=P&&!J?"width:"+rn(e.fixedWidth,e.gutter,e.items)+";":"",v&&(r+=un(re)),addCSSRule(Ce,"#"+Ve,r,getCssRulesLength(Ce))),r=P&&!J?on(e.fixedWidth,e.gutter,e.items):"",e.gutter&&(r+=sn(e.gutter)),S||(v&&(r+=un(re)),m&&(r+=cn(re))),r&&addCSSRule(Ce,"#"+Ve+" > .tns-item",r,getCssRulesLength(Ce))}else{Pn(),I.style.cssText=an($,_,K,le),S&&P&&!J&&(H.style.width=rn(K,_,te));var r=P&&!J?on(K,_,te):"";_&&(r+=sn(_)),r&&addCSSRule(Ce,"#"+Ve+" > .tns-item",r,getCssRulesLength(Ce))}if(w&&c)for(var o in w){o=parseInt(o);var s=w[o],r="",d="",f="",h="",p="",g=J?null:nn("items",o),y=nn("fixedWidth",o),C=nn("speed",o),E=nn("edgePadding",o),x=nn("autoHeight",o),b=nn("gutter",o);v&&N&&nn("autoHeight",o)&&"speed"in s&&(d="#"+Ve+"-mw{"+un(C)+"}"),("edgePadding"in s||"gutter"in s)&&(f="#"+Ve+"-iw{"+an(E,b,y,C,x)+"}"),S&&P&&!J&&("fixedWidth"in s||"items"in s||K&&"gutter"in s)&&(h="width:"+rn(y,b,g)+";"),v&&"speed"in s&&(h+=un(C)),h&&(h="#"+Ve+"{"+h+"}"),("fixedWidth"in s||K&&"gutter"in s||!S&&"items"in s)&&(p+=on(y,b,g)),"gutter"in s&&(p+=sn(b)),!S&&"speed"in s&&(v&&(p+=un(C)),m&&(p+=cn(C))),p&&(p="#"+Ve+" > .tns-item{"+p+"}"),(r=d+f+h+p)&&Ce.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Ce.cssRules.length)}}(),dn();var Qt=se?S?function(){var e=De,t=Pe;e+=ne,t-=ne,$?(e+=1,t-=1):K&&(Z+_)%(K+_)&&(t-=1),we&&(Re>t?Re-=W:Re<e&&(Re+=W))}:function(){if(Re>Pe)for(;Re>=De+W;)Re-=W;else if(Re<De)for(;Re<=Pe-W;)Re+=W}:function(){Re=Math.max(De,Math.min(Pe,Re))},Ut=S?function(){Gn(H,""),v||!re?(Jn(),re&&isVisible(H)||Zn()):jsTransform(H,Le,Me,ke,Xn(),re,Zn),P||ga()}:function(){xe=[];var e={};e[g]=e[y]=Zn,removeEvents(z[Ne],e),addEvents(z[Re],e),Kn(Ne,M,k,!0),Kn(Re,R,M),g&&y&&re&&isVisible(H)||Zn()};return{version:"2.9.2",getInfo:Ea,events:ze,goTo:ea,play:function(){he&&!Rt&&(ra(),Dt=!1)},pause:function(){Rt&&(oa(),Dt=!0)},isOn:j,updateSliderHeight:In,refresh:dn,destroy:function(){if(Ce.disabled=!0,Ce.ownerNode&&Ce.ownerNode.remove(),removeEvents(n,{resize:pn}),ie&&removeEvents(t,_e),vt&&removeEvents(vt,Ye),Et&&removeEvents(Et,Je),removeEvents(H,Ke),removeEvents(H,$e),It&&removeEvents(It,{click:sa}),he&&clearInterval(Bt),S&&g){var a={};a[g]=Zn,removeEvents(H,a)}fe&&removeEvents(H,Ze),ve&&removeEvents(H,et);var i=[q,ht,gt,yt,xt,Ht];for(var r in E.forEach(function(t,n){var a="container"===t?O:e[t];if("object"==typeof a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],e[t]=r?r.nextElementSibling:o.firstElementChild}}),E=M=k=B=R=P=O=I=H=F=q=z=W=D=V=J=K=$=_=Z=te=ne=ae=ie=re=oe=se=le=Ce=Ee=G=xe=we=be=Se=Ae=Te=Le=Me=ke=Be=Re=Ne=De=Pe=Ie=He=Fe=qe=ze=We=Ve=je=Ge=Qe=Ue=Xe=Ye=Je=Ke=$e=_e=Ze=et=tt=nt=at=it=rt=ot=st=lt=ut=Q=ue=ce=vt=ht=mt=pt=dt=ft=de=Et=xt=Ct=wt=bt=St=At=Tt=Lt=Mt=kt=he=me=Ot=pe=ge=It=Ht=ye=Ft=Bt=Rt=Nt=Dt=Pt=Wt=Vt=qt=jt=zt=Gt=fe=ve=null,this)"rebuild"!==r&&(this[r]=null);j=!1},rebuild:function(){return tns(extend(e,x))}}}function Xt(e){e&&(ue=de=fe=ve=ie=he=ge=ye=!1)}function Yt(){for(var e=S?Re-we:Re;e<0;)e+=W;return e%W+1}function Jt(e){return e=e?Math.max(0,Math.min(se?W-1:W-te,e)):0,S?e+we:e}function Kt(e){for(null==e&&(e=Re),S&&(e-=we);e<0;)e+=W;return Math.floor(e%W)}function $t(){var e,t=Kt();return e=at?t:K||J?Math.ceil((t+1)*wt/W-1):Math.floor(t/te),!se&&S&&Re===Pe&&(e=wt-1),e}function _t(){return n.innerWidth||t.documentElement.clientWidth||t.body.clientWidth}function Zt(e){return"top"===e?"afterbegin":"beforeend"}function en(){var e=$?2*$-_:0;return function e(n){var a,i,r=t.createElement("div");return n.appendChild(r),i=(a=r.getBoundingClientRect()).right-a.left,r.remove(),i||e(n.parentNode)}(F)-e}function tn(t){if(e[t])return!0;if(w)for(var n in w)if(w[n][t])return!0;return!1}function nn(t,n){if(null==n&&(n=V),"items"===t&&K)return Math.floor((Z+_)/(K+_))||1;var a=e[t];if(w)for(var i in w)n>=parseInt(i)&&t in w[i]&&(a=w[i][t]);return"slideBy"===t&&"page"===a&&(a=nn("items")),S||"slideBy"!==t&&"items"!==t||(a=Math.floor(a)),a}function an(e,t,n,a,i){var r="";if(void 0!==e){var o=e;t&&(o-=t),r=P?"margin: 0 "+o+"px 0 "+e+"px;":"margin: "+e+"px 0 "+o+"px 0;"}else if(t&&!n){var s="-"+t+"px";r="margin: 0 "+(P?s+" 0 0":"0 "+s+" 0")+";"}return!S&&i&&v&&a&&(r+=un(a)),r}function rn(e,t,n){return e?(e+t)*be+"px":l?l+"("+100*be+"% / "+n+")":100*be/n+"%"}function on(e,t,n){var a;if(e)a=e+t+"px";else{S||(n=Math.floor(n));var i=S?be:n;a=l?l+"(100% / "+i+")":100/i+"%"}return a="width:"+a,"inner"!==b?a+";":a+" !important;"}function sn(e){var t="";!1!==e&&(t=(P?"padding-":"margin-")+(P?"right":"bottom")+": "+e+"px;");return t}function ln(e,t){var n=e.substring(0,e.length-t).toLowerCase();return n&&(n="-"+n+"-"),n}function un(e){return ln(v,18)+"transition-duration:"+e/1e3+"s;"}function cn(e){return ln(m,17)+"animation-duration:"+e/1e3+"s;"}function dn(){if(tn("autoHeight")||J||!P){var e=H.querySelectorAll("img");forEach(e,function(e){var t=e.src;t&&t.indexOf("data:image")<0?(addEvents(e,ut),e.src="",e.src=t,addClass(e,"loading")):Ee||Mn(e)}),raf(function(){Nn(arrayFromNodeList(e),function(){Q=!0})}),!J&&P&&(e=Bn(Re,Math.min(Re+te-1,be-1))),Ee?fn():raf(function(){Nn(arrayFromNodeList(e),fn)})}else S&&Yn(),hn(),mn()}function fn(){if(J){var e=se?Re:W-1;!function t(){z[e-1].getBoundingClientRect().right.toFixed(2)===z[e].getBoundingClientRect().left.toFixed(2)?vn():setTimeout(function(){t()},16)}()}else vn()}function vn(){P&&!J||(Hn(),J?(Ae=Un(),Qe&&(Ue=yn()),Pe=Be(),Xt(je||Ue)):ga()),S&&Yn(),hn(),mn()}function hn(){if(Fn(),O.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+An()+"</span>  of "+W+"</div>"),U=O.querySelector(".tns-liveregion .current"),it){var t=he?"stop":"start";It?setAttrs(It,{"data-action":t}):e.autoplayButtonOutput&&(O.insertAdjacentHTML(Zt(e.autoplayPosition),'<button data-action="'+t+'">'+Ft[0]+t+Ft[1]+pe[0]+"</button>"),It=O.querySelector("[data-action]")),It&&addEvents(It,{click:sa}),he&&(ra(),ge&&addEvents(H,Ke),ye&&addEvents(H,$e))}if(nt){if(Et)setAttrs(Et,{"aria-label":"Carousel Pagination"}),forEach(Ct=Et.children,function(e,t){setAttrs(e,{"data-nav":t,tabindex:"-1","aria-label":Mt+(t+1),"aria-controls":Ve})});else{for(var n="",a=at?"":'style="display:none"',i=0;i<W;i++)n+='<button data-nav="'+i+'" tabindex="-1" aria-controls="'+Ve+'" '+a+' aria-label="'+Mt+(i+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",O.insertAdjacentHTML(Zt(e.navPosition),n),Et=O.querySelector(".tns-nav"),Ct=Et.children}if(Ca(),v){var r=v.substring(0,v.length-18).toLowerCase(),o="transition: all "+re/1e3+"s";r&&(o="-"+r+"-"+o),addCSSRule(Ce,"[aria-controls^="+Ve+"-item]",o,getCssRulesLength(Ce))}setAttrs(Ct[At],{"aria-label":Mt+(At+1)+kt}),removeAttrs(Ct[At],"tabindex"),addClass(Ct[At],Lt),addEvents(Et,Je)}tt&&(vt||mt&&pt||(O.insertAdjacentHTML(Zt(e.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ve+'">'+ce[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ve+'">'+ce[1]+"</button></div>"),vt=O.querySelector(".tns-controls")),mt&&pt||(mt=vt.children[0],pt=vt.children[1]),e.controlsContainer&&setAttrs(vt,{"aria-label":"Carousel Navigation",tabindex:"0"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&setAttrs([mt,pt],{"aria-controls":Ve,tabindex:"-1"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&(setAttrs(mt,{"data-controls":"prev"}),setAttrs(pt,{"data-controls":"next"})),dt=zn(mt),ft=zn(pt),jn(),vt?addEvents(vt,Ye):(addEvents(mt,Ye),addEvents(pt,Ye))),En()}function mn(){if(S&&g){var a={};a[g]=Zn,addEvents(H,a)}fe&&addEvents(H,Ze,e.preventScrollOnTouch),ve&&addEvents(H,et),ie&&addEvents(t,_e),"inner"===b?ze.on("outerResized",function(){gn(),ze.emit("innerLoaded",Ea())}):(w||K||J||le||!P)&&addEvents(n,{resize:pn}),le&&("outer"===b?ze.on("innerLoaded",Rn):je||Rn()),Ln(),je?bn():Ue&&wn(),ze.on("indexChanged",Dn),"inner"===b&&ze.emit("innerLoaded",Ea()),"function"==typeof qe&&qe(Ea()),j=!0}function pn(e){raf(function(){gn(ua(e))})}function gn(n){if(j){"outer"===b&&ze.emit("outerResized",Ea(n)),V=_t();var a,i=D,r=!1;w&&(Cn(),(a=i!==D)&&ze.emit("newBreakpointStart",Ea(n)));var o,s,l=te,u=je,d=Ue,f=ie,v=ue,h=de,m=fe,p=ve,g=he,y=ge,C=ye,E=Re;if(a){var x=K,A=le,T=ce,L=ee,B=pe;if(!c)var N=_,O=$}if(ie=nn("arrowKeys"),ue=nn("controls"),de=nn("nav"),fe=nn("touch"),ee=nn("center"),ve=nn("mouseDrag"),he=nn("autoplay"),ge=nn("autoplayHoverPause"),ye=nn("autoplayResetOnVisibility"),a&&(je=nn("disable"),K=nn("fixedWidth"),re=nn("speed"),le=nn("autoHeight"),ce=nn("controlsText"),pe=nn("autoplayText"),me=nn("autoplayTimeout"),c||($=nn("edgePadding"),_=nn("gutter"))),Xt(je),Z=en(),P&&!J||je||(Hn(),P||(ga(),r=!0)),(K||J)&&(Ae=Un(),Pe=Be()),(a||K)&&(te=nn("items"),ne=nn("slideBy"),(s=te!==l)&&(K||J||(Pe=Be()),Qt())),a&&je!==u&&(je?bn():function(){if(!Ge)return;if(Ce.disabled=!1,H.className+=We,Yn(),se)for(var e=we;e--;)S&&showElement(z[e]),showElement(z[be-e-1]);if(!S)for(var t=Re,n=Re+W;t<n;t++){var a=z[t],i=t<Re+te?M:R;a.style.left=100*(t-Re)/te+"%",addClass(a,i)}xn(),Ge=!1}()),Qe&&(a||K||J)&&(Ue=yn())!==d&&(Ue?(Jn(Xn(Jt(0))),wn()):(!function(){if(!Xe)return;$&&c&&(I.style.margin="");if(we)for(var e="tns-transparent",t=we;t--;)S&&removeClass(z[t],e),removeClass(z[be-t-1],e);xn(),Xe=!1}(),r=!0)),Xt(je||Ue),he||(ge=ye=!1),ie!==f&&(ie?addEvents(t,_e):removeEvents(t,_e)),ue!==v&&(ue?vt?showElement(vt):(mt&&showElement(mt),pt&&showElement(pt)):vt?hideElement(vt):(mt&&hideElement(mt),pt&&hideElement(pt))),de!==h&&(de?showElement(Et):hideElement(Et)),fe!==m&&(fe?addEvents(H,Ze,e.preventScrollOnTouch):removeEvents(H,Ze)),ve!==p&&(ve?addEvents(H,et):removeEvents(H,et)),he!==g&&(he?(It&&showElement(It),Rt||Dt||ra()):(It&&hideElement(It),Rt&&oa())),ge!==y&&(ge?addEvents(H,Ke):removeEvents(H,Ke)),ye!==C&&(ye?addEvents(t,$e):removeEvents(t,$e)),a){if(K===x&&ee===L||(r=!0),le!==A&&(le||(I.style.height="")),ue&&ce!==T&&(mt.innerHTML=ce[0],pt.innerHTML=ce[1]),It&&pe!==B){var F=he?1:0,q=It.innerHTML,G=q.length-B[F].length;q.substring(G)===B[F]&&(It.innerHTML=q.substring(0,G)+pe[F])}}else ee&&(K||J)&&(r=!0);if((s||K&&!J)&&(wt=ya(),Ca()),(o=Re!==E)?(ze.emit("indexChanged",Ea()),r=!0):s?o||Dn():(K||J)&&(Ln(),Fn(),Sn()),s&&!S&&function(){for(var e=Re+Math.min(W,te),t=be;t--;){var n=z[t];t>=Re&&t<e?(addClass(n,"tns-moving"),n.style.left=100*(t-Re)/te+"%",addClass(n,M),removeClass(n,R)):n.style.left&&(n.style.left="",addClass(n,R),removeClass(n,M)),removeClass(n,k)}setTimeout(function(){forEach(z,function(e){removeClass(e,"tns-moving")})},300)}(),!je&&!Ue){if(a&&!c&&(le===autoheightTem&&re===speedTem||Pn(),$===O&&_===N||(I.style.cssText=an($,_,K,re,le)),P)){S&&(H.style.width=rn(K,_,te));var Q=on(K,_,te)+sn(_);removeCSSRule(Ce,getCssRulesLength(Ce)-1),addCSSRule(Ce,"#"+Ve+" > .tns-item",Q,getCssRulesLength(Ce))}le&&Rn(),r&&(Yn(),Ne=Re)}a&&ze.emit("newBreakpointEnd",Ea(n))}}function yn(){if(!K&&!J)return W<=(ee?te-(te-1)/2:te);var e=K?(K+_)*W:G[W],t=$?Z+2*$:Z+_;return ee&&(t-=K?(Z-K)/2:(Z-(G[Re+1]-G[Re]-_))/2),e<=t}function Cn(){for(var e in D=0,w)e=parseInt(e),V>=e&&(D=e)}function En(){!he&&It&&hideElement(It),!de&&Et&&hideElement(Et),ue||(vt?hideElement(vt):(mt&&hideElement(mt),pt&&hideElement(pt)))}function xn(){he&&It&&showElement(It),de&&Et&&showElement(Et),ue&&(vt?showElement(vt):(mt&&showElement(mt),pt&&showElement(pt)))}function wn(){if(!Xe){if($&&(I.style.margin="0px"),we)for(var e="tns-transparent",t=we;t--;)S&&addClass(z[t],e),addClass(z[be-t-1],e);En(),Xe=!0}}function bn(){if(!Ge){if(Ce.disabled=!0,H.className=H.className.replace(We.substring(1),""),removeAttrs(H,["style"]),se)for(var e=we;e--;)S&&hideElement(z[e]),hideElement(z[be-e-1]);if(P&&S||removeAttrs(I,["style"]),!S)for(var t=Re,n=Re+W;t<n;t++){var a=z[t];removeAttrs(a,["style"]),removeClass(a,M),removeClass(a,R)}En(),Ge=!0}}function Sn(){var e=An();U.innerHTML!==e&&(U.innerHTML=e)}function An(){var e=Tn(),t=e[0]+1,n=e[1]+1;return t===n?t+"":t+" to "+n}function Tn(e){null==e&&(e=Xn());var t,n,a,i=Re;if(ee||$?(J||K)&&(n=-(parseFloat(e)+$),a=n+Z+2*$):J&&(n=G[Re],a=n+Z),J)G.forEach(function(e,r){r<be&&((ee||$)&&e<=n+.5&&(i=r),a-e>=.5&&(t=r))});else{if(K){var r=K+_;ee||$?(i=Math.floor(n/r),t=Math.ceil(a/r-1)):t=i+Math.ceil(Z/r)-1}else if(ee||$){var o=te-1;if(ee?(i-=o/2,t=Re+o/2):t=Re+o,$){var s=$*te/Z;i-=s,t+=s}i=Math.floor(i),t=Math.ceil(t)}else t=i+te-1;i=Math.max(i,0),t=Math.min(t,be-1)}return[i,t]}function Ln(){Ee&&!je&&Bn.apply(null,Tn()).forEach(function(e){if(!hasClass(e,lt)){var t={};t[g]=function(e){e.stopPropagation()},addEvents(e,t),addEvents(e,ut),e.src=getAttr(e,"data-src");var n=getAttr(e,"data-srcset");n&&(e.srcset=n),addClass(e,"loading")}})}function Mn(e){addClass(e,"loaded"),kn(e)}function kn(e){addClass(e,"tns-complete"),removeClass(e,"loading"),removeEvents(e,ut)}function Bn(e,t){for(var n=[];e<=t;)forEach(z[e].querySelectorAll("img"),function(e){n.push(e)}),e++;return n}function Rn(){var e=Bn.apply(null,Tn());raf(function(){Nn(e,In)})}function Nn(e,t){return Q?t():(e.forEach(function(t,n){hasClass(t,lt)&&e.splice(n,1)}),e.length?void raf(function(){Nn(e,t)}):t())}function Dn(){Ln(),Fn(),Sn(),jn(),function(){if(de&&(At=St>=0?St:$t(),St=-1,At!==Tt)){var e=Ct[Tt],t=Ct[At];setAttrs(e,{tabindex:"-1","aria-label":Mt+(Tt+1)}),removeClass(e,Lt),setAttrs(t,{"aria-label":Mt+(At+1)+kt}),removeAttrs(t,"tabindex"),addClass(t,Lt),Tt=At}}()}function Pn(){S&&le&&(N.style[v]=re/1e3+"s")}function On(e,t){for(var n=[],a=e,i=Math.min(e+t,be);a<i;a++)n.push(z[a].offsetHeight);return Math.max.apply(null,n)}function In(){var e=le?On(Re,te):On(we,W),t=N||I;t.style.height!==e&&(t.style.height=e+"px")}function Hn(){G=[0];var e=P?"left":"top",t=P?"right":"bottom",n=z[0].getBoundingClientRect()[e];forEach(z,function(a,i){i&&G.push(a.getBoundingClientRect()[e]-n),i===be-1&&G.push(a.getBoundingClientRect()[t]-n)})}function Fn(){var e=Tn(),t=e[0],n=e[1];forEach(z,function(e,a){a>=t&&a<=n?hasAttr(e,"aria-hidden")&&(removeAttrs(e,["aria-hidden","tabindex"]),addClass(e,st)):hasAttr(e,"aria-hidden")||(setAttrs(e,{"aria-hidden":"true",tabindex:"-1"}),removeClass(e,st))})}function qn(e){return e.nodeName.toLowerCase()}function zn(e){return"button"===qn(e)}function Wn(e){return"true"===e.getAttribute("aria-disabled")}function Vn(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function jn(){if(ue&&!oe&&!se){var e=dt?mt.disabled:Wn(mt),t=ft?pt.disabled:Wn(pt),n=Re<=De,a=!oe&&Re>=Pe;n&&!e&&Vn(dt,mt,!0),!n&&e&&Vn(dt,mt,!1),a&&!t&&Vn(ft,pt,!0),!a&&t&&Vn(ft,pt,!1)}}function Gn(e,t){v&&(e.style[v]=t)}function Qn(e){return null==e&&(e=Re),J?(Z-($?_:0)-(G[e+1]-G[e]-_))/2:K?(Z-K)/2:(te-1)/2}function Un(){var e=Z+($?_:0)-(K?(K+_)*be:G[be]);return ee&&!se&&(e=K?-(K+_)*(be-1)-Qn():Qn(be-1)-G[be-1]),e>0&&(e=0),e}function Xn(e){var t;if(null==e&&(e=Re),P&&!J)if(K)t=-(K+_)*e,ee&&(t+=Qn());else{var n=d?be:te;ee&&(e-=Qn()),t=100*-e/n}else t=-G[e],ee&&J&&(t+=Qn());return Se&&(t=Math.max(t,Ae)),t+=!P||J||K?"px":"%"}function Yn(e){Gn(H,"0s"),Jn(e)}function Jn(e){null==e&&(e=Xn()),H.style[Le]=Me+e+ke}function Kn(e,t,n,a){var i=e+te;se||(i=Math.min(i,be));for(var r=e;r<i;r++){var o=z[r];a||(o.style.left=100*(r-Re)/te+"%"),B&&h&&(o.style[h]=o.style[p]=B*(r-e)/1e3+"s"),removeClass(o,t),addClass(o,n),a&&xe.push(o)}}function $n(e,t){Te&&Qt(),(Re!==Ne||t)&&(ze.emit("indexChanged",Ea()),ze.emit("transitionStart",Ea()),le&&Rn(),Rt&&e&&["click","keydown"].indexOf(e.type)>=0&&oa(),Fe=!0,Ut())}function _n(e){return e.toLowerCase().replace(/-/g,"")}function Zn(e){if(S||Fe){if(ze.emit("transitionEnd",Ea(e)),!S&&xe.length>0)for(var t=0;t<xe.length;t++){var n=xe[t];n.style.left="",p&&h&&(n.style[p]="",n.style[h]=""),removeClass(n,k),addClass(n,R)}if(!e||!S&&e.target.parentNode===H||e.target===H&&_n(e.propertyName)===_n(Le)){if(!Te){var a=Re;Qt(),Re!==a&&(ze.emit("indexChanged",Ea()),Yn())}"inner"===b&&ze.emit("innerLoaded",Ea()),Fe=!1,Ne=Re}}}function ea(e,t){if(!Ue)if("prev"===e)ta(t,-1);else if("next"===e)ta(t,1);else{if(Fe){if(Oe)return;Zn()}var n=Kt(),a=0;if("first"===e?a=-n:"last"===e?a=S?W-te-n:W-1-n:("number"!=typeof e&&(e=parseInt(e)),isNaN(e)||(t||(e=Math.max(0,Math.min(W-1,e))),a=e-n)),!S&&a&&Math.abs(a)<te){var i=a>0?1:-1;a+=Re+a-W>=De?W*i:2*W*i*-1}Re+=a,S&&se&&(Re<De&&(Re+=W),Re>Pe&&(Re-=W)),Kt(Re)!==Kt(Ne)&&$n(t)}}function ta(e,t){if(Fe){if(Oe)return;Zn()}var n;if(!t){for(var a=ca(e=ua(e));a!==vt&&[mt,pt].indexOf(a)<0;)a=a.parentNode;var i=[mt,pt].indexOf(a);i>=0&&(n=!0,t=0===i?-1:1)}if(oe){if(Re===De&&-1===t)return void ea("last",e);if(Re===Pe&&1===t)return void ea("first",e)}t&&(Re+=ne*t,J&&(Re=Math.floor(Re)),$n(n||e&&"keydown"===e.type?e:null))}function na(){Bt=setInterval(function(){ta(null,Ot)},me),Rt=!0}function aa(){clearInterval(Bt),Rt=!1}function ia(e,t){setAttrs(It,{"data-action":e}),It.innerHTML=Ft[0]+e+Ft[1]+t}function ra(){na(),It&&ia("stop",pe[1])}function oa(){aa(),It&&ia("start",pe[0])}function sa(){Rt?(oa(),Dt=!0):(ra(),Dt=!1)}function la(e){e.focus()}function ua(e){return da(e=e||n.event)?e.changedTouches[0]:e}function ca(e){return e.target||n.event.srcElement}function da(e){return e.type.indexOf("touch")>=0}function fa(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function va(){return getTouchDirection(toDegree(Vt.y-Wt.y,Vt.x-Wt.x),Ie)===e.axis}function ha(e){if(Fe){if(Oe)return;Zn()}he&&Rt&&aa(),jt=!0,zt&&(caf(zt),zt=null);var t=ua(e);ze.emit(da(e)?"touchStart":"dragStart",Ea(e)),!da(e)&&["img","a"].indexOf(qn(ca(e)))>=0&&fa(e),Vt.x=Wt.x=t.clientX,Vt.y=Wt.y=t.clientY,S&&(qt=parseFloat(H.style[Le].replace(Me,"")),Gn(H,"0s"))}function ma(e){if(jt){var t=ua(e);Vt.x=t.clientX,Vt.y=t.clientY,S?zt||(zt=raf(function(){!function e(t){if(!He)return void(jt=!1);caf(zt);jt&&(zt=raf(function(){e(t)}));"?"===He&&(He=va());if(He){!ct&&da(t)&&(ct=!0);try{t.type&&ze.emit(da(t)?"touchMove":"dragMove",Ea(t))}catch(e){}var n=qt,a=Gt(Vt,Wt);if(!P||K||J)n+=a,n+="px";else{var i=d?a*te*100/((Z+_)*be):100*a/(Z+_);n+=i,n+="%"}H.style[Le]=Me+n+ke}}(e)})):("?"===He&&(He=va()),He&&(ct=!0)),ct&&e.preventDefault()}}function pa(t){if(jt){zt&&(caf(zt),zt=null),S&&Gn(H,""),jt=!1;var n=ua(t);Vt.x=n.clientX,Vt.y=n.clientY;var a=Gt(Vt,Wt);if(Math.abs(a)){if(!da(t)){var i=ca(t);addEvents(i,{click:function e(t){fa(t),removeEvents(i,{click:e})}})}S?zt=raf(function(){if(P&&!J){var e=-a*te/(Z+_);e=a>0?Math.floor(e):Math.ceil(e),Re+=e}else{var n=-(qt+a);if(n<=0)Re=De;else if(n>=G[be-1])Re=Pe;else for(var i=0;i<be&&n>=G[i];)Re=i,n>G[i]&&a<0&&(Re+=1),i++}$n(t,a),ze.emit(da(t)?"touchEnd":"dragEnd",Ea(t))}):He&&ta(t,a>0?-1:1)}}"auto"===e.preventScrollOnTouch&&(ct=!1),Ie&&(He="?"),he&&!Rt&&na()}function ga(){(N||I).style.height=G[Re+te]-G[Re]+"px"}function ya(){var e=K?(K+_)*W/Z:W/te;return Math.min(Math.ceil(e),W)}function Ca(){if(de&&!at&&wt!==bt){var e=bt,t=wt,n=showElement;for(bt>wt&&(e=wt,t=bt,n=hideElement);e<t;)n(Ct[e]),e++;bt=wt}}function Ea(e){return{container:H,slideItems:z,navContainer:Et,navItems:Ct,controlsContainer:vt,hasControls:tt,prevButton:mt,nextButton:pt,items:te,slideBy:ne,cloneCount:we,slideCount:W,slideCountNew:be,index:Re,indexCached:Ne,displayIndex:Yt(),navCurrentIndex:At,navCurrentIndexCached:Tt,pages:wt,pagesCached:bt,sheet:Ce,isOn:j,event:e||{}}}C&&console.warn("No slides found in",e.container)};const cookies=new CookieJar;if(document.getElementById("challenge")){new Alert("#challenge",cookies)}if(document.getElementById("cheers")){new Alert("#cheers",cookies)}if(window.onload=(()=>{new UltraAnimate(".ribbon-wrapper").delay(400).show()}),document.querySelector(".quotes-slider")){tns({container:".quotes-slider",items:1,smode:"carousel",center:!1,nav:!1,controls:!0,speed:400,items:1,controlsText:["<",">"],autoHeight:!0,swipeAngle:15,loop:!0})}