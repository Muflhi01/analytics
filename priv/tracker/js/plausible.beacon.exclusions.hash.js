!function(){"use strict";var r=window.location,o=window.document,s=o.currentScript,l=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event",d=s&&s.getAttribute("data-exclude").split(",");function c(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return c("localStorage flag")}catch(e){}if(d)for(var i=0;i<d.length;i++)if("pageview"==e&&r.pathname.match(new RegExp("^"+d[i].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return c("exclusion rule");var n={};n.n=e,n.u=r.href,n.d=s.getAttribute("data-domain"),n.r=o.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props)),n.h=1;var a=new XMLHttpRequest;a.open("POST",l,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){var e;4==a.readyState&&((e=a.responseText)&&!isNaN(e)&&(w=e),t&&t.callback&&t.callback())}}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,w,n=0;n<t.length;n++)e.apply(this,t[n]);function a(){i=r.pathname,e("pageview")}function p(){/hidden|unloaded/.test(o.visibilityState)&&w&&navigator.sendBeacon(l,JSON.stringify({n:"enrich",e:w}))}window.addEventListener("hashchange",a),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){i||"visible"!==o.visibilityState||a()}):a(),o.addEventListener("visibilitychange",p),o.addEventListener("pagehide",p),window.addEventListener("beforeunload",p)}();