!function(){"use strict";var e,t,n,r=window.location,o=window.document,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event"),p=l&&l.getAttribute("data-exclude").split(",");function w(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"==window.localStorage.plausible_ignore)return w("localStorage flag")}catch(e){}if(p)for(var n=0;n<p.length;n++)if("pageview"==e&&r.pathname.match(new RegExp("^"+p[n].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return w("exclusion rule");var a={};a.n=e,a.u=t&&t.u?t.u:r.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=JSON.stringify(t.props));var i=new XMLHttpRequest;i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){var e;4==i.readyState&&((e=i.responseText)&&!isNaN(e)&&(lastEventId=e),t&&t.callback&&t.callback())}}}var i=window.plausible&&window.plausible.q||[];window.plausible=a;for(var d=0;d<i.length;d++)a.apply(this,i[d])}();