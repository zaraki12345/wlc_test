/*! jQuery UI - v1.11.4 - 2016-02-16
* http://jqueryui.com
* Includes: effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){var t="ui-effects-",i=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var c=this,d=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===d?(n instanceof l?f(u,function(e,t){n[t.cache]&&(c[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!c[a]&&s.to){if("alpha"===e||null==n[e])return;c[a]=s.to(c._rgba)}c[a][t.idx]=i(n[e],t,!0)}),c[a]&&0>e.inArray(null,c[a].slice(0,3))&&(c[a][3]=1,s.from&&(c._rgba=s.from(c[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=c[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,c=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=c?l/u:l/(2-u),[Math.round(t)%360,i,c,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),c="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(e,t){var s=c["object"===r?e:t.idx];null==s&&(s=d[t.idx]),d[t.idx]=i(s,t)}),u?(n=l(u(d)),n[o]=d,n):l(d)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(t,i){var s,n,o={};for(s in i)n=i[s],t[s]!==n&&(a[s]||(e.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,s){e.fx.step[s]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(i.style(e.elem,s,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(n,function(e,t){i[t]&&o[t+"Class"](i[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function i(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function s(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,i){for(var s=0;i.length>s;s++)null!==i[s]&&e.data(t+i[s],e[0].style[i[s]])},restore:function(e,i){var s,n;for(n=0;i.length>n;n++)null!==i[n]&&(s=e.data(t+i[n]),void 0===s&&(s=""),e.css(i[n],s))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=i.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(t):this.queue(a||"fx",t)},show:function(e){return function(t){if(s(t))return e.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(t){if(s(t))return e.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(t){if(s(t)||"boolean"==typeof t)return e.apply(this,arguments);var n=i.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),c=t.direction||"up",d=r.test(c),p=d?"height":"width",f=d?"top":"left",m=h.test(c),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,c=t.direction||"up",d=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,b=o.queue(),y=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-d:2*d).animate(a,m,g)),l&&(d/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g).animate(a,m,g),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",c="vertical"===u,d=c?"height":"width",p=c?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[d](),l&&(n.css(d,0),n.css(p,a/2)),f[d]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",c={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),c[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===c*d&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,c=t.pieces?Math.round(Math.sqrt(t.pieces)):3,d=c,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/c),b=[];for(a=0;c>a;a++)for(h=g.top+a*_,u=a-(c-1)/2,o=0;d>o;o++)r=g.left+o*v,l=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(m?l*v:0),top:h+(m?u*_:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*_),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,c=/([0-9]+)%/.exec(u),d=!!t.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],c&&(u=parseInt(c[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(_=_.concat(c),o.from=e.effects.setTransition(o,c,a.from.y,o.from),o.to=e.effects.setTransition(o,c,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(d),o.from=e.effects.setTransition(o,d,a.from.x,o.from),o.to=e.effects.setTransition(o,d,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(_=_.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,_),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(c=c.concat(["marginTop","marginBottom"]).concat(u),d=d.concat(["marginLeft","marginRight"]),l=r.concat(c).concat(d),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,c,a.from.y,i.from),i.to=e.effects.setTransition(i,c,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,d,a.from.x,i.from),i.to=e.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,c=0,d=n.queue(),p=d.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),c=1),s=1;l>s;s++)n.animate({opacity:c},u,t.easing),c=1-c;n.animate({opacity:c},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,c=Math.round(t.duration/u),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),_=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,m[d]=(p?"+=":"-=")+2*h,g[d]=(p?"-=":"+=")+2*h,n.animate(f,c,t.easing),s=1;l>s;s++)n.animate(m,c,t.easing).animate(g,c,t.easing);n.animate(m,c,t.easing).animate(f,c/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,c={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),c[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},c=s.offset(),d=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-r,left:c.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){d.remove(),i()})}});

/*! jQuery Timepicker Addon - v1.4.4 - 2014-03-29
* http://trentrichardson.com/examples/timepicker
* Copyright (c) 2014 Trent Richardson; Licensed MIT */
(function ($) {

  /*
  * Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
  */
  $.ui.timepicker = $.ui.timepicker || {};
  if ($.ui.timepicker.version) {
    return;
  }

  /*
  * Extend jQueryUI, get it started with our version number
  */
  $.extend($.ui, {
    timepicker: {
      version: "1.4.4"
    }
  });

  /* 
  * Timepicker manager.
  * Use the singleton instance of this class, $.timepicker, to interact with the time picker.
  * Settings for (groups of) time pickers are maintained in an instance object,
  * allowing multiple different settings on the same page.
  */
  var Timepicker = function () {
    this.regional = []; // Available regional settings, indexed by language code
    this.regional[''] = { // Default regional settings
      currentText: 'Now',
      closeText: 'Done',
      amNames: ['AM', 'A'],
      pmNames: ['PM', 'P'],
      timeFormat: 'HH:mm',
      timeSuffix: '',
      timeOnlyTitle: 'Choose Time',
      timeText: 'Time',
      hourText: 'Hour',
      minuteText: 'Minute',
      secondText: 'Second',
      millisecText: 'Millisecond',
      microsecText: 'Microsecond',
      timezoneText: 'Time Zone',
      isRTL: false
    };
    this._defaults = { // Global defaults for all the datetime picker instances
      showButtonPanel: true,
      timeOnly: false,
      timeOnlyShowDate: false,
      showHour: null,
      showMinute: null,
      showSecond: null,
      showMillisec: null,
      showMicrosec: null,
      showTimezone: null,
      showTime: true,
      stepHour: 1,
      stepMinute: 1,
      stepSecond: 1,
      stepMillisec: 1,
      stepMicrosec: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      microsec: 0,
      timezone: null,
      hourMin: 0,
      minuteMin: 0,
      secondMin: 0,
      millisecMin: 0,
      microsecMin: 0,
      hourMax: 23,
      minuteMax: 59,
      secondMax: 59,
      millisecMax: 999,
      microsecMax: 999,
      minDateTime: null,
      maxDateTime: null,
      maxTime: null,
      minTime: null,
      onSelect: null,
      hourGrid: 0,
      minuteGrid: 0,
      secondGrid: 0,
      millisecGrid: 0,
      microsecGrid: 0,
      alwaysSetTime: true,
      separator: ' ',
      altFieldTimeOnly: true,
      altTimeFormat: null,
      altSeparator: null,
      altTimeSuffix: null,
      pickerTimeFormat: null,
      pickerTimeSuffix: null,
      showTimepicker: true,
      timezoneList: null,
      addSliderAccess: false,
      sliderAccessArgs: null,
      controlType: 'slider',
      defaultValue: null,
      parse: 'strict'
    };
    $.extend(this._defaults, this.regional['']);
  };

  $.extend(Timepicker.prototype, {
    $input: null,
    $altInput: null,
    $timeObj: null,
    inst: null,
    hour_slider: null,
    minute_slider: null,
    second_slider: null,
    millisec_slider: null,
    microsec_slider: null,
    timezone_select: null,
    maxTime: null,
    minTime: null,
    hour: 0,
    minute: 0,
    second: 0,
    millisec: 0,
    microsec: 0,
    timezone: null,
    hourMinOriginal: null,
    minuteMinOriginal: null,
    secondMinOriginal: null,
    millisecMinOriginal: null,
    microsecMinOriginal: null,
    hourMaxOriginal: null,
    minuteMaxOriginal: null,
    secondMaxOriginal: null,
    millisecMaxOriginal: null,
    microsecMaxOriginal: null,
    ampm: '',
    formattedDate: '',
    formattedTime: '',
    formattedDateTime: '',
    timezoneList: null,
    units: ['hour', 'minute', 'second', 'millisec', 'microsec'],
    support: {},
    control: null,

    /* 
    * Override the default settings for all instances of the time picker.
    * @param  {Object} settings  object - the new settings to use as defaults (anonymous object)
    * @return {Object} the manager object
    */
    setDefaults: function (settings) {
      extendRemove(this._defaults, settings || {});
      return this;
    },

    /*
    * Create a new Timepicker instance
    */
    _newInst: function ($input, opts) {
      var tp_inst = new Timepicker(),
        inlineSettings = {},
        fns = {},
        overrides, i;

      for (var attrName in this._defaults) {
        if (this._defaults.hasOwnProperty(attrName)) {
          var attrValue = $input.attr('time:' + attrName);
          if (attrValue) {
            try {
              inlineSettings[attrName] = eval(attrValue);
            } catch (err) {
              inlineSettings[attrName] = attrValue;
            }
          }
        }
      }

      overrides = {
        beforeShow: function (input, dp_inst) {
          if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
            return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
          }
        },
        onChangeMonthYear: function (year, month, dp_inst) {
          // Update the time as well : this prevents the time from disappearing from the $input field.
          tp_inst._updateDateTime(dp_inst);
          if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
            tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
          }
        },
        onClose: function (dateText, dp_inst) {
          if (tp_inst.timeDefined === true && $input.val() !== '') {
            tp_inst._updateDateTime(dp_inst);
          }
          if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
            tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
          }
        }
      };
      for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
          fns[i] = opts[i] || null;
        }
      }

      tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, {
        evnts: fns,
        timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
      });
      tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (val) {
        return val.toUpperCase();
      });
      tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (val) {
        return val.toUpperCase();
      });

      // detect which units are supported
      tp_inst.support = detectSupport(
          tp_inst._defaults.timeFormat + 
          (tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : '') +
          (tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : ''));

      // controlType is string - key to our this._controls
      if (typeof(tp_inst._defaults.controlType) === 'string') {
        if (tp_inst._defaults.controlType === 'slider' && typeof($.ui.slider) === 'undefined') {
          tp_inst._defaults.controlType = 'select';
        }
        tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
      }
      // controlType is an object and must implement create, options, value methods
      else {
        tp_inst.control = tp_inst._defaults.controlType;
      }

      // prep the timezone options
      var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60,
          0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840];
      if (tp_inst._defaults.timezoneList !== null) {
        timezoneList = tp_inst._defaults.timezoneList;
      }
      var tzl = timezoneList.length, tzi = 0, tzv = null;
      if (tzl > 0 && typeof timezoneList[0] !== 'object') {
        for (; tzi < tzl; tzi++) {
          tzv = timezoneList[tzi];
          timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) };
        }
      }
      tp_inst._defaults.timezoneList = timezoneList;

      // set the default units
      tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) :
              ((new Date()).getTimezoneOffset() * -1);
      tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin :
              tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
      tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin :
              tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
      tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin :
              tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second;
      tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin :
              tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
      tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin :
              tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
      tp_inst.ampm = '';
      tp_inst.$input = $input;

      if (tp_inst._defaults.altField) {
        tp_inst.$altInput = $(tp_inst._defaults.altField).css({
          cursor: 'pointer'
        }).focus(function () {
          $input.trigger("focus");
        });
      }

      if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
        tp_inst._defaults.minDate = new Date();
      }
      if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
        tp_inst._defaults.maxDate = new Date();
      }

      // datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
      if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
        tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
      }
      if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
        tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
      }
      if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
        tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
      }
      if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
        tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
      }
      tp_inst.$input.bind('focus', function () {
        tp_inst._onFocus();
      });

      return tp_inst;
    },

    /*
    * add our sliders to the calendar
    */
    _addTimePicker: function (dp_inst) {
      var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

      this.timeDefined = this._parseTime(currDT);
      this._limitMinMaxDateTime(dp_inst, false);
      this._injectTimePicker();
    },

    /*
    * parse the time string from input value or _setTime
    */
    _parseTime: function (timeString, withDate) {
      if (!this.inst) {
        this.inst = $.datepicker._getInst(this.$input[0]);
      }

      if (withDate || !this._defaults.timeOnly) {
        var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
        try {
          var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
          if (!parseRes.timeObj) {
            return false;
          }
          $.extend(this, parseRes.timeObj);
        } catch (err) {
          $.timepicker.log("Error parsing the date/time string: " + err +
                  "\ndate/time string = " + timeString +
                  "\ntimeFormat = " + this._defaults.timeFormat +
                  "\ndateFormat = " + dp_dateFormat);
          return false;
        }
        return true;
      } else {
        var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
        if (!timeObj) {
          return false;
        }
        $.extend(this, timeObj);
        return true;
      }
    },

    /*
    * generate and inject html for timepicker into ui datepicker
    */
    _injectTimePicker: function () {
      var $dp = this.inst.dpDiv,
        o = this.inst.settings,
        tp_inst = this,
        litem = '',
        uitem = '',
        show = null,
        max = {},
        gridSize = {},
        size = null,
        i = 0,
        l = 0;

      // Prevent displaying twice
      if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
        var noDisplay = ' style="display:none;"',
          html = '<div class="ui-timepicker-div' + (o.isRTL ? ' ui-timepicker-rtl' : '') + '"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
                '<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

        // Create the markup
        for (i = 0, l = this.units.length; i < l; i++) {
          litem = this.units[i];
          uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
          show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem];

          // Added by Peter Medeiros:
          // - Figure out what the hour/minute/second max should be based on the step values.
          // - Example: if stepMinute is 15, then minMax is 45.
          max[litem] = parseInt((o[litem + 'Max'] - ((o[litem + 'Max'] - o[litem + 'Min']) % o['step' + uitem])), 10);
          gridSize[litem] = 0;

          html += '<dt class="ui_tpicker_' + litem + '_label"' + (show ? '' : noDisplay) + '>' + o[litem + 'Text'] + '</dt>' +
                '<dd class="ui_tpicker_' + litem + '"><div class="ui_tpicker_' + litem + '_slider"' + (show ? '' : noDisplay) + '></div>';

          if (show && o[litem + 'Grid'] > 0) {
            html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

            if (litem === 'hour') {
              for (var h = o[litem + 'Min']; h <= max[litem]; h += parseInt(o[litem + 'Grid'], 10)) {
                gridSize[litem]++;
                var tmph = $.datepicker.formatTime(this.support.ampm ? 'hht' : 'HH', {hour: h}, o);
                html += '<td data-for="' + litem + '">' + tmph + '</td>';
              }
            }
            else {
              for (var m = o[litem + 'Min']; m <= max[litem]; m += parseInt(o[litem + 'Grid'], 10)) {
                gridSize[litem]++;
                html += '<td data-for="' + litem + '">' + ((m < 10) ? '0' : '') + m + '</td>';
              }
            }

            html += '</tr></table></div>';
          }
          html += '</dd>';
        }
        
        // Timezone
        var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone;
        html += '<dt class="ui_tpicker_timezone_label"' + (showTz ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
        html += '<dd class="ui_tpicker_timezone" ' + (showTz ? '' : noDisplay) + '></dd>';

        // Create the elements from string
        html += '</dl></div>';
        var $tp = $(html);

        // if we only want time picker...
        if (o.timeOnly === true) {
          $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
          $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
        }
        
        // add sliders, adjust grids, add events
        for (i = 0, l = tp_inst.units.length; i < l; i++) {
          litem = tp_inst.units[i];
          uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
          show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem];

          // add the slider
          tp_inst[litem + '_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_' + litem + '_slider'), litem, tp_inst[litem], o[litem + 'Min'], max[litem], o['step' + uitem]);

          // adjust the grid and add click event
          if (show && o[litem + 'Grid'] > 0) {
            size = 100 * gridSize[litem] * o[litem + 'Grid'] / (max[litem] - o[litem + 'Min']);
            $tp.find('.ui_tpicker_' + litem + ' table').css({
              width: size + "%",
              marginLeft: o.isRTL ? '0' : ((size / (-2 * gridSize[litem])) + "%"),
              marginRight: o.isRTL ? ((size / (-2 * gridSize[litem])) + "%") : '0',
              borderCollapse: 'collapse'
            }).find("td").click(function (e) {
                var $t = $(this),
                  h = $t.html(),
                  n = parseInt(h.replace(/[^0-9]/g), 10),
                  ap = h.replace(/[^apm]/ig),
                  f = $t.data('for'); // loses scope, so we use data-for

                if (f === 'hour') {
                  if (ap.indexOf('p') !== -1 && n < 12) {
                    n += 12;
                  }
                  else {
                    if (ap.indexOf('a') !== -1 && n === 12) {
                      n = 0;
                    }
                  }
                }
                
                tp_inst.control.value(tp_inst, tp_inst[f + '_slider'], litem, n);

                tp_inst._onTimeChange();
                tp_inst._onSelectHandler();
              }).css({
                cursor: 'pointer',
                width: (100 / gridSize[litem]) + '%',
                textAlign: 'center',
                overflow: 'hidden'
              });
          } // end if grid > 0
        } // end for loop

        // Add timezone options
        this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
        $.fn.append.apply(this.timezone_select,
        $.map(o.timezoneList, function (val, idx) {
          return $("<option />").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val);
        }));
        if (typeof(this.timezone) !== "undefined" && this.timezone !== null && this.timezone !== "") {
          var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset() * -1;
          if (local_timezone === this.timezone) {
            selectLocalTimezone(tp_inst);
          } else {
            this.timezone_select.val(this.timezone);
          }
        } else {
          if (typeof(this.hour) !== "undefined" && this.hour !== null && this.hour !== "") {
            this.timezone_select.val(o.timezone);
          } else {
            selectLocalTimezone(tp_inst);
          }
        }
        this.timezone_select.change(function () {
          tp_inst._onTimeChange();
          tp_inst._onSelectHandler();
        });
        // End timezone options
        
        // inject timepicker into datepicker
        var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
        if ($buttonPanel.length) {
          $buttonPanel.before($tp);
        } else {
          $dp.append($tp);
        }

        this.$timeObj = $tp.find('.ui_tpicker_time');

        if (this.inst !== null) {
          var timeDefined = this.timeDefined;
          this._onTimeChange();
          this.timeDefined = timeDefined;
        }

        // slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
        if (this._defaults.addSliderAccess) {
          var sliderAccessArgs = this._defaults.sliderAccessArgs,
            rtl = this._defaults.isRTL;
          sliderAccessArgs.isRTL = rtl;
            
          setTimeout(function () { // fix for inline mode
            if ($tp.find('.ui-slider-access').length === 0) {
              $tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

              // fix any grids since sliders are shorter
              var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
              if (sliderAccessWidth) {
                $tp.find('table:visible').each(function () {
                  var $g = $(this),
                    oldWidth = $g.outerWidth(),
                    oldMarginLeft = $g.css(rtl ? 'marginRight' : 'marginLeft').toString().replace('%', ''),
                    newWidth = oldWidth - sliderAccessWidth,
                    newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
                    css = { width: newWidth, marginRight: 0, marginLeft: 0 };
                  css[rtl ? 'marginRight' : 'marginLeft'] = newMarginLeft;
                  $g.css(css);
                });
              }
            }
          }, 10);
        }
        // end slideAccess integration

        tp_inst._limitMinMaxDateTime(this.inst, true);
      }
    },

    /*
    * This function tries to limit the ability to go outside the
    * min/max date range
    */
    _limitMinMaxDateTime: function (dp_inst, adjustSliders) {
      var o = this._defaults,
        dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

      if (!this._defaults.showTimepicker) {
        return;
      } // No time so nothing to check here

      if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
        var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
          minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

        if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
          this.hourMinOriginal = o.hourMin;
          this.minuteMinOriginal = o.minuteMin;
          this.secondMinOriginal = o.secondMin;
          this.millisecMinOriginal = o.millisecMin;
          this.microsecMinOriginal = o.microsecMin;
        }

        if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) {
          this._defaults.hourMin = minDateTime.getHours();
          if (this.hour <= this._defaults.hourMin) {
            this.hour = this._defaults.hourMin;
            this._defaults.minuteMin = minDateTime.getMinutes();
            if (this.minute <= this._defaults.minuteMin) {
              this.minute = this._defaults.minuteMin;
              this._defaults.secondMin = minDateTime.getSeconds();
              if (this.second <= this._defaults.secondMin) {
                this.second = this._defaults.secondMin;
                this._defaults.millisecMin = minDateTime.getMilliseconds();
                if (this.millisec <= this._defaults.millisecMin) {
                  this.millisec = this._defaults.millisecMin;
                  this._defaults.microsecMin = minDateTime.getMicroseconds();
                } else {
                  if (this.microsec < this._defaults.microsecMin) {
                    this.microsec = this._defaults.microsecMin;
                  }
                  this._defaults.microsecMin = this.microsecMinOriginal;
                }
              } else {
                this._defaults.millisecMin = this.millisecMinOriginal;
                this._defaults.microsecMin = this.microsecMinOriginal;
              }
            } else {
              this._defaults.secondMin = this.secondMinOriginal;
              this._defaults.millisecMin = this.millisecMinOriginal;
              this._defaults.microsecMin = this.microsecMinOriginal;
            }
          } else {
            this._defaults.minuteMin = this.minuteMinOriginal;
            this._defaults.secondMin = this.secondMinOriginal;
            this._defaults.millisecMin = this.millisecMinOriginal;
            this._defaults.microsecMin = this.microsecMinOriginal;
          }
        } else {
          this._defaults.hourMin = this.hourMinOriginal;
          this._defaults.minuteMin = this.minuteMinOriginal;
          this._defaults.secondMin = this.secondMinOriginal;
          this._defaults.millisecMin = this.millisecMinOriginal;
          this._defaults.microsecMin = this.microsecMinOriginal;
        }
      }

      if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
        var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
          maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

        if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
          this.hourMaxOriginal = o.hourMax;
          this.minuteMaxOriginal = o.minuteMax;
          this.secondMaxOriginal = o.secondMax;
          this.millisecMaxOriginal = o.millisecMax;
          this.microsecMaxOriginal = o.microsecMax;
        }

        if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) {
          this._defaults.hourMax = maxDateTime.getHours();
          if (this.hour >= this._defaults.hourMax) {
            this.hour = this._defaults.hourMax;
            this._defaults.minuteMax = maxDateTime.getMinutes();
            if (this.minute >= this._defaults.minuteMax) {
              this.minute = this._defaults.minuteMax;
              this._defaults.secondMax = maxDateTime.getSeconds();
              if (this.second >= this._defaults.secondMax) {
                this.second = this._defaults.secondMax;
                this._defaults.millisecMax = maxDateTime.getMilliseconds();
                if (this.millisec >= this._defaults.millisecMax) {
                  this.millisec = this._defaults.millisecMax;
                  this._defaults.microsecMax = maxDateTime.getMicroseconds();
                } else {
                  if (this.microsec > this._defaults.microsecMax) {
                    this.microsec = this._defaults.microsecMax;
                  }
                  this._defaults.microsecMax = this.microsecMaxOriginal;
                }
              } else {
                this._defaults.millisecMax = this.millisecMaxOriginal;
                this._defaults.microsecMax = this.microsecMaxOriginal;
              }
            } else {
              this._defaults.secondMax = this.secondMaxOriginal;
              this._defaults.millisecMax = this.millisecMaxOriginal;
              this._defaults.microsecMax = this.microsecMaxOriginal;
            }
          } else {
            this._defaults.minuteMax = this.minuteMaxOriginal;
            this._defaults.secondMax = this.secondMaxOriginal;
            this._defaults.millisecMax = this.millisecMaxOriginal;
            this._defaults.microsecMax = this.microsecMaxOriginal;
          }
        } else {
          this._defaults.hourMax = this.hourMaxOriginal;
          this._defaults.minuteMax = this.minuteMaxOriginal;
          this._defaults.secondMax = this.secondMaxOriginal;
          this._defaults.millisecMax = this.millisecMaxOriginal;
          this._defaults.microsecMax = this.microsecMaxOriginal;
        }
      }

      if (dp_inst.settings.minTime!==null) {        
        var tempMinTime=new Date("01/01/1970 " + dp_inst.settings.minTime);        
        if (this.hour<tempMinTime.getHours()) {
          this.hour=this._defaults.hourMin=tempMinTime.getHours();
          this.minute=this._defaults.minuteMin=tempMinTime.getMinutes();              
        } else if (this.hour===tempMinTime.getHours() && this.minute<tempMinTime.getMinutes()) {
          this.minute=this._defaults.minuteMin=tempMinTime.getMinutes();
        } else {            
          if (this._defaults.hourMin<tempMinTime.getHours()) {
            this._defaults.hourMin=tempMinTime.getHours();
            this._defaults.minuteMin=tempMinTime.getMinutes();          
          } else if (this._defaults.hourMin===tempMinTime.getHours()===this.hour && this._defaults.minuteMin<tempMinTime.getMinutes()) {
            this._defaults.minuteMin=tempMinTime.getMinutes();            
          } else {
            this._defaults.minuteMin=0;
          }
        }        
      }
      
      if (dp_inst.settings.maxTime!==null) {        
        var tempMaxTime=new Date("01/01/1970 " + dp_inst.settings.maxTime);
        if (this.hour>tempMaxTime.getHours()) {
          this.hour=this._defaults.hourMax=tempMaxTime.getHours();            
          this.minute=this._defaults.minuteMax=tempMaxTime.getMinutes();
        } else if (this.hour===tempMaxTime.getHours() && this.minute>tempMaxTime.getMinutes()) {              
          this.minute=this._defaults.minuteMax=tempMaxTime.getMinutes();            
        } else {
          if (this._defaults.hourMax>tempMaxTime.getHours()) {
            this._defaults.hourMax=tempMaxTime.getHours();
            this._defaults.minuteMax=tempMaxTime.getMinutes();          
          } else if (this._defaults.hourMax===tempMaxTime.getHours()===this.hour && this._defaults.minuteMax>tempMaxTime.getMinutes()) {
            this._defaults.minuteMax=tempMaxTime.getMinutes();            
          } else {
            this._defaults.minuteMax=59;
          }
        }            
      }
      
      if (adjustSliders !== undefined && adjustSliders === true) {
        var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
          minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
          secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
          millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10),
          microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10);

        if (this.hour_slider) {
          this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax, step: this._defaults.stepHour });
          this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
        }
        if (this.minute_slider) {
          this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax, step: this._defaults.stepMinute });
          this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
        }
        if (this.second_slider) {
          this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax, step: this._defaults.stepSecond });
          this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
        }
        if (this.millisec_slider) {
          this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax, step: this._defaults.stepMillisec });
          this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
        }
        if (this.microsec_slider) {
          this.control.options(this, this.microsec_slider, 'microsec', { min: this._defaults.microsecMin, max: microsecMax, step: this._defaults.stepMicrosec });
          this.control.value(this, this.microsec_slider, 'microsec', this.microsec - (this.microsec % this._defaults.stepMicrosec));
        }
      }

    },

    /*
    * when a slider moves, set the internal time...
    * on time change is also called when the time is updated in the text field
    */
    _onTimeChange: function () {
      if (!this._defaults.showTimepicker) {
                                return;
      }
      var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
        minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
        second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
        millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
        microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, 'microsec') : false,
        timezone = (this.timezone_select) ? this.timezone_select.val() : false,
        o = this._defaults,
        pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
        pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

      if (typeof(hour) === 'object') {
        hour = false;
      }
      if (typeof(minute) === 'object') {
        minute = false;
      }
      if (typeof(second) === 'object') {
        second = false;
      }
      if (typeof(millisec) === 'object') {
        millisec = false;
      }
      if (typeof(microsec) === 'object') {
        microsec = false;
      }
      if (typeof(timezone) === 'object') {
        timezone = false;
      }

      if (hour !== false) {
        hour = parseInt(hour, 10);
      }
      if (minute !== false) {
        minute = parseInt(minute, 10);
      }
      if (second !== false) {
        second = parseInt(second, 10);
      }
      if (millisec !== false) {
        millisec = parseInt(millisec, 10);
      }
      if (microsec !== false) {
        microsec = parseInt(microsec, 10);
      }
      if (timezone !== false) {
        timezone = timezone.toString();
      }

      var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

      // If the update was done in the input field, the input field should not be updated.
      // If the update was done using the sliders, update the input field.
      var hasChanged = (
            hour !== parseInt(this.hour,10) || // sliders should all be numeric
            minute !== parseInt(this.minute,10) || 
            second !== parseInt(this.second,10) || 
            millisec !== parseInt(this.millisec,10) || 
            microsec !== parseInt(this.microsec,10) || 
            (this.ampm.length > 0 && (hour < 12) !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) || 
            (this.timezone !== null && timezone !== this.timezone.toString()) // could be numeric or "EST" format, so use toString()
          );

      if (hasChanged) {

        if (hour !== false) {
          this.hour = hour;
        }
        if (minute !== false) {
          this.minute = minute;
        }
        if (second !== false) {
          this.second = second;
        }
        if (millisec !== false) {
          this.millisec = millisec;
        }
        if (microsec !== false) {
          this.microsec = microsec;
        }
        if (timezone !== false) {
          this.timezone = timezone;
        }

        if (!this.inst) {
          this.inst = $.datepicker._getInst(this.$input[0]);
        }

        this._limitMinMaxDateTime(this.inst, true);
      }
      if (this.support.ampm) {
        this.ampm = ampm;
      }

      // Updates the time within the timepicker
      this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
      if (this.$timeObj) {
        if (pickerTimeFormat === o.timeFormat) {
          this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
        }
        else {
          this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
        }
      }

      this.timeDefined = true;
      if (hasChanged) {
        this._updateDateTime();
        //this.$input.focus(); // may automatically open the picker on setDate
      }
    },

    /*
    * call custom onSelect.
    * bind to sliders slidestop, and grid click.
    */
    _onSelectHandler: function () {
      var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
      var inputEl = this.$input ? this.$input[0] : null;
      if (onSelect && inputEl) {
        onSelect.apply(inputEl, [this.formattedDateTime, this]);
      }
    },

    /*
    * update our input with the new date time..
    */
    _updateDateTime: function (dp_inst) {
      dp_inst = this.inst || dp_inst;
      var dtTmp = (dp_inst.currentYear > 0? 
              new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : 
              new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
        dt = $.datepicker._daylightSavingAdjust(dtTmp),
        //dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
        //dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay)),
        dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
        formatCfg = $.datepicker._getFormatConfig(dp_inst),
        timeAvailable = dt !== null && this.timeDefined;
      this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
      var formattedDateTime = this.formattedDate;
      
      // if a slider was changed but datepicker doesn't have a value yet, set it
      if (dp_inst.lastVal === "") {
                dp_inst.currentYear = dp_inst.selectedYear;
                dp_inst.currentMonth = dp_inst.selectedMonth;
                dp_inst.currentDay = dp_inst.selectedDay;
            }

      /*
      * remove following lines to force every changes in date picker to change the input value
      * Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
      * If the user manually empty the value in the input field, the date picker will never change selected value.
      */
      //if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
      //  return;
      //}

      if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) {
        formattedDateTime = this.formattedTime;
      } else if ((this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) || (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true)) {
        formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
      }

      this.formattedDateTime = formattedDateTime;

      if (!this._defaults.showTimepicker) {
        this.$input.val(this.formattedDate);
      } else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
        this.$altInput.val(this.formattedTime);
        this.$input.val(this.formattedDate);
      } else if (this.$altInput) {
        this.$input.val(formattedDateTime);
        var altFormattedDateTime = '',
          altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
          altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
        
        if (!this._defaults.timeOnly) {
          if (this._defaults.altFormat) {
            altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
          }
          else {
            altFormattedDateTime = this.formattedDate;
          }

          if (altFormattedDateTime) {
            altFormattedDateTime += altSeparator;
          }
        }

        if (this._defaults.altTimeFormat) {
          altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
        }
        else {
          altFormattedDateTime += this.formattedTime + altTimeSuffix;
        }
        this.$altInput.val(altFormattedDateTime);
      } else {
        this.$input.val(formattedDateTime);
      }

      this.$input.trigger("change");
    },

    _onFocus: function () {
      if (!this.$input.val() && this._defaults.defaultValue) {
        this.$input.val(this._defaults.defaultValue);
        var inst = $.datepicker._getInst(this.$input.get(0)),
          tp_inst = $.datepicker._get(inst, 'timepicker');
        if (tp_inst) {
          if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
            try {
              $.datepicker._updateDatepicker(inst);
            } catch (err) {
              $.timepicker.log(err);
            }
          }
        }
      }
    },

    /*
    * Small abstraction to control types
    * We can add more, just be sure to follow the pattern: create, options, value
    */
    _controls: {
      // slider methods
      slider: {
        create: function (tp_inst, obj, unit, val, min, max, step) {
          var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
          return obj.prop('slide', null).slider({
            orientation: "horizontal",
            value: rtl ? val * -1 : val,
            min: rtl ? max * -1 : min,
            max: rtl ? min * -1 : max,
            step: step,
            slide: function (event, ui) {
              tp_inst.control.value(tp_inst, $(this), unit, rtl ? ui.value * -1 : ui.value);
              tp_inst._onTimeChange();
            },
            stop: function (event, ui) {
              tp_inst._onSelectHandler();
            }
          });  
        },
        options: function (tp_inst, obj, unit, opts, val) {
          if (tp_inst._defaults.isRTL) {
            if (typeof(opts) === 'string') {
              if (opts === 'min' || opts === 'max') {
                if (val !== undefined) {
                  return obj.slider(opts, val * -1);
                }
                return Math.abs(obj.slider(opts));
              }
              return obj.slider(opts);
            }
            var min = opts.min, 
              max = opts.max;
            opts.min = opts.max = null;
            if (min !== undefined) {
              opts.max = min * -1;
            }
            if (max !== undefined) {
              opts.min = max * -1;
            }
            return obj.slider(opts);
          }
          if (typeof(opts) === 'string' && val !== undefined) {
            return obj.slider(opts, val);
          }
          return obj.slider(opts);
        },
        value: function (tp_inst, obj, unit, val) {
          if (tp_inst._defaults.isRTL) {
            if (val !== undefined) {
              return obj.slider('value', val * -1);
            }
            return Math.abs(obj.slider('value'));
          }
          if (val !== undefined) {
            return obj.slider('value', val);
          }
          return obj.slider('value');
        }
      },
      // select methods
      select: {
        create: function (tp_inst, obj, unit, val, min, max, step) {
          var sel = '<select class="ui-timepicker-select" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">',
            format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;

          for (var i = min; i <= max; i += step) {
            sel += '<option value="' + i + '"' + (i === val ? ' selected' : '') + '>';
            if (unit === 'hour') {
              sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig, '')), {hour: i}, tp_inst._defaults);
            }
            else if (unit === 'millisec' || unit === 'microsec' || i >= 10) { sel += i; }
            else {sel += '0' + i.toString(); }
            sel += '</option>';
          }
          sel += '</select>';

          obj.children('select').remove();

          $(sel).appendTo(obj).change(function (e) {
            tp_inst._onTimeChange();
            tp_inst._onSelectHandler();
          });

          return obj;
        },
        options: function (tp_inst, obj, unit, opts, val) {
          var o = {},
            $t = obj.children('select');
          if (typeof(opts) === 'string') {
            if (val === undefined) {
              return $t.data(opts);
            }
            o[opts] = val;  
          }
          else { o = opts; }
          return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
        },
        value: function (tp_inst, obj, unit, val) {
          var $t = obj.children('select');
          if (val !== undefined) {
            return $t.val(val);
          }
          return $t.val();
        }
      }
    } // end _controls

  });

  $.fn.extend({
    /*
    * shorthand just to use timepicker.
    */
    timepicker: function (o) {
      o = o || {};
      var tmp_args = Array.prototype.slice.call(arguments);

      if (typeof o === 'object') {
        tmp_args[0] = $.extend(o, {
          timeOnly: true
        });
      }

      return $(this).each(function () {
        $.fn.datetimepicker.apply($(this), tmp_args);
      });
    },

    /*
    * extend timepicker to datepicker
    */
    datetimepicker: function (o) {
      o = o || {};
      var tmp_args = arguments;

      if (typeof(o) === 'string') {
        if (o === 'getDate') {
          return $.fn.datepicker.apply($(this[0]), tmp_args);
        } else {
          return this.each(function () {
            var $t = $(this);
            $t.datepicker.apply($t, tmp_args);
          });
        }
      } else {
        return this.each(function () {
          var $t = $(this);
          $t.datepicker($.timepicker._newInst($t, o)._defaults);
        });
      }
    }
  });

  /*
  * Public Utility to parse date and time
  */
  $.datepicker.parseDateTime = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
    var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
    if (parseRes.timeObj) {
      var t = parseRes.timeObj;
      parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
      parseRes.date.setMicroseconds(t.microsec);
    }

    return parseRes.date;
  };

  /*
  * Public utility to parse time
  */
  $.datepicker.parseTime = function (timeFormat, timeString, options) {
    var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
      iso8601 = (timeFormat.replace(/\'.*?\'/g, '').indexOf('Z') !== -1);

    // Strict parse requires the timeString to match the timeFormat exactly
    var strictParse = function (f, s, o) {

      // pattern for standard and localized AM/PM markers
      var getPatternAmpm = function (amNames, pmNames) {
        var markers = [];
        if (amNames) {
          $.merge(markers, amNames);
        }
        if (pmNames) {
          $.merge(markers, pmNames);
        }
        markers = $.map(markers, function (val) {
          return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
        });
        return '(' + markers.join('|') + ')?';
      };

      // figure out position of time elements.. cause js cant do named captures
      var getFormatPositions = function (timeFormat) {
        var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
          orders = {
            h: -1,
            m: -1,
            s: -1,
            l: -1,
            c: -1,
            t: -1,
            z: -1
          };

        if (finds) {
          for (var i = 0; i < finds.length; i++) {
            if (orders[finds[i].toString().charAt(0)] === -1) {
              orders[finds[i].toString().charAt(0)] = i + 1;
            }
          }
        }
        return orders;
      };

      var regstr = '^' + f.toString()
          .replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
              var ml = match.length;
              switch (match.charAt(0).toLowerCase()) {
              case 'h':
                return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
              case 'm':
                return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
              case 's':
                return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})';
              case 'l':
                return '(\\d?\\d?\\d)';
              case 'c':
                return '(\\d?\\d?\\d)';
              case 'z':
                return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
              case 't':
                return getPatternAmpm(o.amNames, o.pmNames);
              default:    // literal escaped in quotes
                return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
              }
            })
          .replace(/\s/g, '\\s?') +
          o.timeSuffix + '$',
        order = getFormatPositions(f),
        ampm = '',
        treg;

      treg = s.match(new RegExp(regstr, 'i'));

      var resTime = {
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        microsec: 0
      };

      if (treg) {
        if (order.t !== -1) {
          if (treg[order.t] === undefined || treg[order.t].length === 0) {
            ampm = '';
            resTime.ampm = '';
          } else {
            ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
            resTime.ampm = o[ampm === 'AM' ? 'amNames' : 'pmNames'][0];
          }
        }

        if (order.h !== -1) {
          if (ampm === 'AM' && treg[order.h] === '12') {
            resTime.hour = 0; // 12am = 0 hour
          } else {
            if (ampm === 'PM' && treg[order.h] !== '12') {
              resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
            } else {
              resTime.hour = Number(treg[order.h]);
            }
          }
        }

        if (order.m !== -1) {
          resTime.minute = Number(treg[order.m]);
        }
        if (order.s !== -1) {
          resTime.second = Number(treg[order.s]);
        }
        if (order.l !== -1) {
          resTime.millisec = Number(treg[order.l]);
        }
        if (order.c !== -1) {
          resTime.microsec = Number(treg[order.c]);
        }
        if (order.z !== -1 && treg[order.z] !== undefined) {
          resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]);
        }


        return resTime;
      }
      return false;
    };// end strictParse

    // First try JS Date, if that fails, use strictParse
    var looseParse = function (f, s, o) {
      try {
        var d = new Date('2012-01-01 ' + s);
        if (isNaN(d.getTime())) {
          d = new Date('2012-01-01T' + s);
          if (isNaN(d.getTime())) {
            d = new Date('01/01/2012 ' + s);
            if (isNaN(d.getTime())) {
              throw "Unable to parse time with native Date: " + s;
            }
          }
        }

        return {
          hour: d.getHours(),
          minute: d.getMinutes(),
          second: d.getSeconds(),
          millisec: d.getMilliseconds(),
          microsec: d.getMicroseconds(),
          timezone: d.getTimezoneOffset() * -1
        };
      }
      catch (err) {
        try {
          return strictParse(f, s, o);
        }
        catch (err2) {
          $.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f);
        }        
      }
      return false;
    }; // end looseParse
    
    if (typeof o.parse === "function") {
      return o.parse(timeFormat, timeString, o);
    }
    if (o.parse === 'loose') {
      return looseParse(timeFormat, timeString, o);
    }
    return strictParse(timeFormat, timeString, o);
  };

  /**
   * Public utility to format the time
   * @param {string} format format of the time
   * @param {Object} time Object not a Date for timezones
   * @param {Object} [options] essentially the regional[].. amNames, pmNames, ampm
   * @returns {string} the formatted time
   */
  $.datepicker.formatTime = function (format, time, options) {
    options = options || {};
    options = $.extend({}, $.timepicker._defaults, options);
    time = $.extend({
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      microsec: 0,
      timezone: null
    }, time);

    var tmptime = format,
      ampmName = options.amNames[0],
      hour = parseInt(time.hour, 10);

    if (hour > 11) {
      ampmName = options.pmNames[0];
    }

    tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
      switch (match) {
      case 'HH':
        return ('0' + hour).slice(-2);
      case 'H':
        return hour;
      case 'hh':
        return ('0' + convert24to12(hour)).slice(-2);
      case 'h':
        return convert24to12(hour);
      case 'mm':
        return ('0' + time.minute).slice(-2);
      case 'm':
        return time.minute;
      case 'ss':
        return ('0' + time.second).slice(-2);
      case 's':
        return time.second;
      case 'l':
        return ('00' + time.millisec).slice(-3);
      case 'c':
        return ('00' + time.microsec).slice(-3);
      case 'z':
        return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false);
      case 'Z':
        return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true);
      case 'T':
        return ampmName.charAt(0).toUpperCase();
      case 'TT':
        return ampmName.toUpperCase();
      case 't':
        return ampmName.charAt(0).toLowerCase();
      case 'tt':
        return ampmName.toLowerCase();
      default:
        return match.replace(/'/g, "");
      }
    });

    return tmptime;
  };

  /*
  * the bad hack :/ override datepicker so it doesn't close on select
  // inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
  */
  $.datepicker._base_selectDate = $.datepicker._selectDate;
  $.datepicker._selectDate = function (id, dateStr) {
    var inst = this._getInst($(id)[0]),
      tp_inst = this._get(inst, 'timepicker');

    if (tp_inst && inst.settings.showTimepicker) {
      tp_inst._limitMinMaxDateTime(inst, true);
      inst.inline = inst.stay_open = true;
      //This way the onSelect handler called from calendarpicker get the full dateTime
      this._base_selectDate(id, dateStr);
      inst.inline = inst.stay_open = false;
      this._notifyChange(inst);
      this._updateDatepicker(inst);
    } else {
      this._base_selectDate(id, dateStr);
    }
  };

  /*
  * second bad hack :/ override datepicker so it triggers an event when changing the input field
  * and does not redraw the datepicker on every selectDate event
  */
  $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
  $.datepicker._updateDatepicker = function (inst) {

    // don't popup the datepicker if there is another instance already opened
    var input = inst.input[0];
    if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) {
      return;
    }

    if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

      this._base_updateDatepicker(inst);

      // Reload the time control when changing something in the input text field.
      var tp_inst = this._get(inst, 'timepicker');
      if (tp_inst) {
        tp_inst._addTimePicker(inst);
      }
    }
  };

  /*
  * third bad hack :/ override datepicker so it allows spaces and colon in the input field
  */
  $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
  $.datepicker._doKeyPress = function (event) {
    var inst = $.datepicker._getInst(event.target),
      tp_inst = $.datepicker._get(inst, 'timepicker');

    if (tp_inst) {
      if ($.datepicker._get(inst, 'constrainInput')) {
        var ampm = tp_inst.support.ampm,
          tz = tp_inst._defaults.showTimezone !== null ? tp_inst._defaults.showTimezone : tp_inst.support.timezone,
          dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
          datetimeChars = tp_inst._defaults.timeFormat.toString()
                      .replace(/[hms]/g, '')
                      .replace(/TT/g, ampm ? 'APM' : '')
                      .replace(/Tt/g, ampm ? 'AaPpMm' : '')
                      .replace(/tT/g, ampm ? 'AaPpMm' : '')
                      .replace(/T/g, ampm ? 'AP' : '')
                      .replace(/tt/g, ampm ? 'apm' : '')
                      .replace(/t/g, ampm ? 'ap' : '') + 
                      " " + tp_inst._defaults.separator + 
                      tp_inst._defaults.timeSuffix + 
                      (tz ? tp_inst._defaults.timezoneList.join('') : '') + 
                      (tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
                      dateChars,
          chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
        return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
      }
    }

    return $.datepicker._base_doKeyPress(event);
  };

  /*
  * Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
  * Update any alternate field to synchronise with the main field.
  */
  $.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
  $.datepicker._updateAlternate = function (inst) {
    var tp_inst = this._get(inst, 'timepicker');
    if (tp_inst) {
      var altField = tp_inst._defaults.altField;
      if (altField) { // update alternate field too
        var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
          date = this._getDate(inst),
          formatCfg = $.datepicker._getFormatConfig(inst),
          altFormattedDateTime = '', 
          altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
          altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
          altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
        
        altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
        if (!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null) {
          if (tp_inst._defaults.altFormat) {
            altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
          }
          else {
            altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
          }
        }
        $(altField).val(altFormattedDateTime);
      }
    }
    else {
      $.datepicker._base_updateAlternate(inst);
    }
  };

  /*
  * Override key up event to sync manual input changes.
  */
  $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
  $.datepicker._doKeyUp = function (event) {
    var inst = $.datepicker._getInst(event.target),
      tp_inst = $.datepicker._get(inst, 'timepicker');

    if (tp_inst) {
      if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) {
        try {
          $.datepicker._updateDatepicker(inst);
        } catch (err) {
          $.timepicker.log(err);
        }
      }
    }

    return $.datepicker._base_doKeyUp(event);
  };

  /*
  * override "Today" button to also grab the time.
  */
  $.datepicker._base_gotoToday = $.datepicker._gotoToday;
  $.datepicker._gotoToday = function (id) {
    var inst = this._getInst($(id)[0]),
      $dp = inst.dpDiv;
    this._base_gotoToday(id);
    var tp_inst = this._get(inst, 'timepicker');
    selectLocalTimezone(tp_inst);
    var now = new Date();
    this._setTime(inst, now);
    $('.ui-datepicker-today', $dp).click();
  };

  /*
  * Disable & enable the Time in the datetimepicker
  */
  $.datepicker._disableTimepickerDatepicker = function (target) {
    var inst = this._getInst(target);
    if (!inst) {
      return;
    }

    var tp_inst = this._get(inst, 'timepicker');
    $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
    if (tp_inst) {
      inst.settings.showTimepicker = false;
      tp_inst._defaults.showTimepicker = false;
      tp_inst._updateDateTime(inst);
    }
  };

  $.datepicker._enableTimepickerDatepicker = function (target) {
    var inst = this._getInst(target);
    if (!inst) {
      return;
    }

    var tp_inst = this._get(inst, 'timepicker');
    $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
    if (tp_inst) {
      inst.settings.showTimepicker = true;
      tp_inst._defaults.showTimepicker = true;
      tp_inst._addTimePicker(inst); // Could be disabled on page load
      tp_inst._updateDateTime(inst);
    }
  };

  /*
  * Create our own set time function
  */
  $.datepicker._setTime = function (inst, date) {
    var tp_inst = this._get(inst, 'timepicker');
    if (tp_inst) {
      var defaults = tp_inst._defaults;

      // calling _setTime with no date sets time to defaults
      tp_inst.hour = date ? date.getHours() : defaults.hour;
      tp_inst.minute = date ? date.getMinutes() : defaults.minute;
      tp_inst.second = date ? date.getSeconds() : defaults.second;
      tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
      tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;

      //check if within min/max times.. 
      tp_inst._limitMinMaxDateTime(inst, true);

      tp_inst._onTimeChange();
      tp_inst._updateDateTime(inst);
    }
  };

  /*
  * Create new public method to set only time, callable as $().datepicker('setTime', date)
  */
  $.datepicker._setTimeDatepicker = function (target, date, withDate) {
    var inst = this._getInst(target);
    if (!inst) {
      return;
    }

    var tp_inst = this._get(inst, 'timepicker');

    if (tp_inst) {
      this._setDateFromField(inst);
      var tp_date;
      if (date) {
        if (typeof date === "string") {
          tp_inst._parseTime(date, withDate);
          tp_date = new Date();
          tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
          tp_date.setMicroseconds(tp_inst.microsec);
        } else {
          tp_date = new Date(date.getTime());
          tp_date.setMicroseconds(date.getMicroseconds());
        }
        if (tp_date.toString() === 'Invalid Date') {
          tp_date = undefined;
        }
        this._setTime(inst, tp_date);
      }
    }

  };

  /*
  * override setDate() to allow setting time too within Date object
  */
  $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
  $.datepicker._setDateDatepicker = function (target, date) {
    var inst = this._getInst(target);
    if (!inst) {
      return;
    }

    if (typeof(date) === 'string') {
      date = new Date(date);
      if (!date.getTime()) {
        $.timepicker.log("Error creating Date object from string.");
      }
    }

    var tp_inst = this._get(inst, 'timepicker');
    var tp_date;
    if (date instanceof Date) {
      tp_date = new Date(date.getTime());
      tp_date.setMicroseconds(date.getMicroseconds());
    } else {
      tp_date = date;
    }
    
    // This is important if you are using the timezone option, javascript's Date 
    // object will only return the timezone offset for the current locale, so we 
    // adjust it accordingly.  If not using timezone option this won't matter..
    // If a timezone is different in tp, keep the timezone as is
    if (tp_inst && tp_date) {
      // look out for DST if tz wasn't specified
      if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
        tp_inst.timezone = tp_date.getTimezoneOffset() * -1;
      }
      date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
      tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone);
    }

    this._updateDatepicker(inst);
    this._base_setDateDatepicker.apply(this, arguments);
    this._setTimeDatepicker(target, tp_date, true);
  };

  /*
  * override getDate() to allow getting time too within Date object
  */
  $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
  $.datepicker._getDateDatepicker = function (target, noDefault) {
    var inst = this._getInst(target);
    if (!inst) {
      return;
    }

    var tp_inst = this._get(inst, 'timepicker');

    if (tp_inst) {
      // if it hasn't yet been defined, grab from field
      if (inst.lastVal === undefined) {
        this._setDateFromField(inst, noDefault);
      }

      var date = this._getDate(inst);
      if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
        date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
        date.setMicroseconds(tp_inst.microsec);

        // This is important if you are using the timezone option, javascript's Date 
        // object will only return the timezone offset for the current locale, so we 
        // adjust it accordingly.  If not using timezone option this won't matter..
        if (tp_inst.timezone != null) {
          // look out for DST if tz wasn't specified
          if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) {
            tp_inst.timezone = date.getTimezoneOffset() * -1;
          }
          date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
        }
      }
      return date;
    }
    return this._base_getDateDatepicker(target, noDefault);
  };

  /*
  * override parseDate() because UI 1.8.14 throws an error about "Extra characters"
  * An option in datapicker to ignore extra format characters would be nicer.
  */
  $.datepicker._base_parseDate = $.datepicker.parseDate;
  $.datepicker.parseDate = function (format, value, settings) {
    var date;
    try {
      date = this._base_parseDate(format, value, settings);
    } catch (err) {
      // Hack!  The error message ends with a colon, a space, and
      // the "extra" characters.  We rely on that instead of
      // attempting to perfectly reproduce the parsing algorithm.
      if (err.indexOf(":") >= 0) {
        date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(':') - 2)), settings);
        $.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
      } else {
        throw err;
      }
    }
    return date;
  };

  /*
  * override formatDate to set date with time to the input
  */
  $.datepicker._base_formatDate = $.datepicker._formatDate;
  $.datepicker._formatDate = function (inst, day, month, year) {
    var tp_inst = this._get(inst, 'timepicker');
    if (tp_inst) {
      tp_inst._updateDateTime(inst);
      return tp_inst.$input.val();
    }
    return this._base_formatDate(inst);
  };

  /*
  * override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
  */
  $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
  $.datepicker._optionDatepicker = function (target, name, value) {
    var inst = this._getInst(target),
      name_clone;
    if (!inst) {
      return null;
    }

    var tp_inst = this._get(inst, 'timepicker');
    if (tp_inst) {
      var min = null,
        max = null,
        onselect = null,
        overrides = tp_inst._defaults.evnts,
        fns = {},
        prop;
      if (typeof name === 'string') { // if min/max was set with the string
        if (name === 'minDate' || name === 'minDateTime') {
          min = value;
        } else if (name === 'maxDate' || name === 'maxDateTime') {
          max = value;
        } else if (name === 'onSelect') {
          onselect = value;
        } else if (overrides.hasOwnProperty(name)) {
          if (typeof (value) === 'undefined') {
            return overrides[name];
          }
          fns[name] = value;
          name_clone = {}; //empty results in exiting function after overrides updated
        }
      } else if (typeof name === 'object') { //if min/max was set with the JSON
        if (name.minDate) {
          min = name.minDate;
        } else if (name.minDateTime) {
          min = name.minDateTime;
        } else if (name.maxDate) {
          max = name.maxDate;
        } else if (name.maxDateTime) {
          max = name.maxDateTime;
        }
        for (prop in overrides) {
          if (overrides.hasOwnProperty(prop) && name[prop]) {
            fns[prop] = name[prop];
          }
        }
      }
      for (prop in fns) {
        if (fns.hasOwnProperty(prop)) {
          overrides[prop] = fns[prop];
          if (!name_clone) { name_clone = $.extend({}, name); }
          delete name_clone[prop];
        }
      }
      if (name_clone && isEmptyObject(name_clone)) { return; }
      if (min) { //if min was set
        if (min === 0) {
          min = new Date();
        } else {
          min = new Date(min);
        }
        tp_inst._defaults.minDate = min;
        tp_inst._defaults.minDateTime = min;
      } else if (max) { //if max was set
        if (max === 0) {
          max = new Date();
        } else {
          max = new Date(max);
        }
        tp_inst._defaults.maxDate = max;
        tp_inst._defaults.maxDateTime = max;
      } else if (onselect) {
        tp_inst._defaults.onSelect = onselect;
      }
    }
    if (value === undefined) {
      return this._base_optionDatepicker.call($.datepicker, target, name);
    }
    return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
  };
  
  /*
  * jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
  * it will return false for all objects
  */
  var isEmptyObject = function (obj) {
    var prop;
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  /*
  * jQuery extend now ignores nulls!
  */
  var extendRemove = function (target, props) {
    $.extend(target, props);
    for (var name in props) {
      if (props[name] === null || props[name] === undefined) {
        target[name] = props[name];
      }
    }
    return target;
  };

  /*
  * Determine by the time format which units are supported
  * Returns an object of booleans for each unit
  */
  var detectSupport = function (timeFormat) {
    var tf = timeFormat.replace(/'.*?'/g, '').toLowerCase(), // removes literals
      isIn = function (f, t) { // does the format contain the token?
          return f.indexOf(t) !== -1 ? true : false;
        };
    return {
        hour: isIn(tf, 'h'),
        minute: isIn(tf, 'm'),
        second: isIn(tf, 's'),
        millisec: isIn(tf, 'l'),
        microsec: isIn(tf, 'c'),
        timezone: isIn(tf, 'z'),
        ampm: isIn(tf, 't') && isIn(timeFormat, 'h'),
        iso8601: isIn(timeFormat, 'Z')
      };
  };

  /*
  * Converts 24 hour format into 12 hour
  * Returns 12 hour without leading 0
  */
  var convert24to12 = function (hour) {
    hour %= 12;

    if (hour === 0) {
      hour = 12;
    }

    return String(hour);
  };

  var computeEffectiveSetting = function (settings, property) {
    return settings && settings[property] ? settings[property] : $.timepicker._defaults[property];
  };

  /*
  * Splits datetime string into date and time substrings.
  * Throws exception when date can't be parsed
  * Returns {dateString: dateString, timeString: timeString}
  */
  var splitDateTime = function (dateTimeString, timeSettings) {
    // The idea is to get the number separator occurrences in datetime and the time format requested (since time has
    // fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
    var separator = computeEffectiveSetting(timeSettings, 'separator'),
      format = computeEffectiveSetting(timeSettings, 'timeFormat'),
      timeParts = format.split(separator), // how many occurrences of separator may be in our format?
      timePartsLen = timeParts.length,
      allParts = dateTimeString.split(separator),
      allPartsLen = allParts.length;

    if (allPartsLen > 1) {
      return {
        dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator),
        timeString: allParts.splice(0, timePartsLen).join(separator)
      };
    }

    return {
      dateString: dateTimeString,
      timeString: ''
    };
  };

  /*
  * Internal function to parse datetime interval
  * Returns: {date: Date, timeObj: Object}, where
  *   date - parsed date without time (type Date)
  *   timeObj = {hour: , minute: , second: , millisec: , microsec: } - parsed time. Optional
  */
  var parseDateTimeInternal = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
    var date,
      parts,
      parsedTime;

    parts = splitDateTime(dateTimeString, timeSettings);
    date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings);

    if (parts.timeString === '') {
      return {
        date: date
      };
    }

    parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings);

    if (!parsedTime) {
      throw 'Wrong time format';
    }

    return {
      date: date,
      timeObj: parsedTime
    };
  };

  /*
  * Internal function to set timezone_select to the local timezone
  */
  var selectLocalTimezone = function (tp_inst, date) {
    if (tp_inst && tp_inst.timezone_select) {
      var now = date || new Date();
      tp_inst.timezone_select.val(-now.getTimezoneOffset());
    }
  };

  /*
  * Create a Singleton Instance
  */
  $.timepicker = new Timepicker();

  /**
   * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
   * @param {number} tzMinutes if not a number, less than -720 (-1200), or greater than 840 (+1400) this value is returned
   * @param {boolean} iso8601 if true formats in accordance to iso8601 "+12:45"
   * @return {string}
   */
  $.timepicker.timezoneOffsetString = function (tzMinutes, iso8601) {
    if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) {
      return tzMinutes;
    }

    var off = tzMinutes,
      minutes = off % 60,
      hours = (off - minutes) / 60,
      iso = iso8601 ? ':' : '',
      tz = (off >= 0 ? '+' : '-') + ('0' + Math.abs(hours)).slice(-2) + iso + ('0' + Math.abs(minutes)).slice(-2);
    
    if (tz === '+00:00') {
      return 'Z';
    }
    return tz;
  };

  /**
   * Get the number in minutes that represents a timezone string
   * @param  {string} tzString formatted like "+0500", "-1245", "Z"
   * @return {number} the offset minutes or the original string if it doesn't match expectations
   */
  $.timepicker.timezoneOffsetNumber = function (tzString) {
    var normalized = tzString.toString().replace(':', ''); // excuse any iso8601, end up with "+1245"

    if (normalized.toUpperCase() === 'Z') { // if iso8601 with Z, its 0 minute offset
      return 0;
    }

    if (!/^(\-|\+)\d{4}$/.test(normalized)) { // possibly a user defined tz, so just give it back
      return tzString;
    }

    return ((normalized.substr(0, 1) === '-' ? -1 : 1) * // plus or minus
          ((parseInt(normalized.substr(1, 2), 10) * 60) + // hours (converted to minutes)
          parseInt(normalized.substr(3, 2), 10))); // minutes
  };

  /**
   * No way to set timezone in js Date, so we must adjust the minutes to compensate. (think setDate, getDate)
   * @param  {Date} date
   * @param  {string} toTimezone formatted like "+0500", "-1245"
   * @return {Date}
   */
  $.timepicker.timezoneAdjust = function (date, toTimezone) {
    var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
    if (!isNaN(toTz)) {
      date.setMinutes(date.getMinutes() + -date.getTimezoneOffset() - toTz);
    }
    return date;
  };

  /**
   * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
   * enforce date range limits.
   * n.b. The input value must be correctly formatted (reformatting is not supported)
   * @param  {Element} startTime
   * @param  {Element} endTime
   * @param  {Object} options Options for the timepicker() call
   * @return {jQuery}
   */
  $.timepicker.timeRange = function (startTime, endTime, options) {
    return $.timepicker.handleRange('timepicker', startTime, endTime, options);
  };

  /**
   * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
   * enforce date range limits.
   * @param  {Element} startTime
   * @param  {Element} endTime
   * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
   *   a boolean value that can be used to reformat the input values to the `dateFormat`.
   * @param  {string} method Can be used to specify the type of picker to be added
   * @return {jQuery}
   */
  $.timepicker.datetimeRange = function (startTime, endTime, options) {
    $.timepicker.handleRange('datetimepicker', startTime, endTime, options);
  };

  /**
   * Calls `datepicker` on the `startTime` and `endTime` elements, and configures them to
   * enforce date range limits.
   * @param  {Element} startTime
   * @param  {Element} endTime
   * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
   *   a boolean value that can be used to reformat the input values to the `dateFormat`.
   * @return {jQuery}
   */
  $.timepicker.dateRange = function (startTime, endTime, options) {
    $.timepicker.handleRange('datepicker', startTime, endTime, options);
  };

  /**
   * Calls `method` on the `startTime` and `endTime` elements, and configures them to
   * enforce date range limits.
   * @param  {string} method Can be used to specify the type of picker to be added
   * @param  {Element} startTime
   * @param  {Element} endTime
   * @param  {Object} options Options for the `timepicker()` call. Also supports `reformat`,
   *   a boolean value that can be used to reformat the input values to the `dateFormat`.
   * @return {jQuery}
   */
  $.timepicker.handleRange = function (method, startTime, endTime, options) {
    options = $.extend({}, {
      minInterval: 0, // min allowed interval in milliseconds
      maxInterval: 0, // max allowed interval in milliseconds
      start: {},      // options for start picker
      end: {}         // options for end picker
    }, options);

    // for the mean time this fixes an issue with calling getDate with timepicker()
    var timeOnly = false;
    if(method === 'timepicker'){
      timeOnly = true;
      method = 'datetimepicker';
    }

    function checkDates(changed, other) {
      var startdt = startTime[method]('getDate'),
        enddt = endTime[method]('getDate'),
        changeddt = changed[method]('getDate');

      if (startdt !== null) {
        var minDate = new Date(startdt.getTime()),
          maxDate = new Date(startdt.getTime());

        minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
        maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);

        if (options.minInterval > 0 && minDate > enddt) { // minInterval check
          endTime[method]('setDate', minDate);
        }
        else if (options.maxInterval > 0 && maxDate < enddt) { // max interval check
          endTime[method]('setDate', maxDate);
        }
        else if (startdt > enddt) {
          other[method]('setDate', changeddt);
        }
      }
    }

    function selected(changed, other, option) {
      if (!changed.val()) {
        return;
      }
      var date = changed[method].call(changed, 'getDate');
      if (date !== null && options.minInterval > 0) {
        if (option === 'minDate') {
          date.setMilliseconds(date.getMilliseconds() + options.minInterval);
        }
        if (option === 'maxDate') {
          date.setMilliseconds(date.getMilliseconds() - options.minInterval);
        }
      }
      if (date.getTime) {
        other[method].call(other, 'option', option, date);
      }
    }

    $.fn[method].call(startTime, $.extend({
      timeOnly: timeOnly,
      onClose: function (dateText, inst) {
        checkDates($(this), endTime);
      },
      onSelect: function (selectedDateTime) {
        selected($(this), endTime, 'minDate');
      }
    }, options, options.start));
    $.fn[method].call(endTime, $.extend({
      timeOnly: timeOnly,
      onClose: function (dateText, inst) {
        checkDates($(this), startTime);
      },
      onSelect: function (selectedDateTime) {
        selected($(this), startTime, 'maxDate');
      }
    }, options, options.end));

    checkDates(startTime, endTime);
    selected(startTime, endTime, 'minDate');
    selected(endTime, startTime, 'maxDate');
    return $([startTime.get(0), endTime.get(0)]);
  };

  /**
   * Log error or data to the console during error or debugging
   * @param  {Object} err pass any type object to log to the console during error or debugging
   * @return {void}
   */
  $.timepicker.log = function (err) {
    if (window.console) {
      window.console.log(err);
    }
  };

  /*
   * Add util object to allow access to private methods for testability.
   */
  $.timepicker._util = {
    _extendRemove: extendRemove,
    _isEmptyObject: isEmptyObject,
    _convert24to12: convert24to12,
    _detectSupport: detectSupport,
    _selectLocalTimezone: selectLocalTimezone,
    _computeEffectiveSetting: computeEffectiveSetting,
    _splitDateTime: splitDateTime,
    _parseDateTimeInternal: parseDateTimeInternal
  };

  /*
  * Microsecond support
  */
  if (!Date.prototype.getMicroseconds) {
    Date.prototype.microseconds = 0;
    Date.prototype.getMicroseconds = function () { return this.microseconds; };
    Date.prototype.setMicroseconds = function (m) {
      this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1000));
      this.microseconds = m % 1000;
      return this;
    };
  }

  /*
  * Keep up with the version
  */
  $.timepicker.version = "1.4.4";

})(jQuery);


/*!
* clipboard.js v1.5.12
* https://zenorocha.github.io/clipboard.js
*
* Licensed MIT © Zeno Rocha
*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;a>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},a(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=a(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return c(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});