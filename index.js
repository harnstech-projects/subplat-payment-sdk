!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PaymentSDK=t():e.PaymentSDK=t()}(this,(()=>{return e={505:(e,t,r)=>{e.exports=r(15)},592:(e,t,r)=>{"use strict";var n=r(516),o=r(522),a=r(948),s=r(106),i=r(615),c=r(631),u=r(202),p=r(763);e.exports=function(e){return new Promise((function(t,r){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.Authorization="Basic "+btoa(h+":"+m)}var y=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),s(y,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,r,a),d=null}},d.onabort=function(){d&&(r(p("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(p("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(p(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var g=(e.withCredentials||u(y))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),r(e),d=null)})),f||(f=null),d.send(f)}))}},15:(e,t,r)=>{"use strict";var n=r(516),o=r(12),a=r(155),s=r(343);function i(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=i(r(987));c.Axios=a,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=r(928),c.CancelToken=r(191),c.isCancel=r(483),c.all=function(e){return Promise.all(e)},c.spread=r(980),c.isAxiosError=r(19),e.exports=c,e.exports.default=c},928:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},191:(e,t,r)=>{"use strict";var n=r(928);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},483:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},155:(e,t,r)=>{"use strict";var n=r(516),o=r(106),a=r(471),s=r(490),i=r(343);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(i(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(i(n||{},{method:e,url:t,data:r}))}})),e.exports=c},471:(e,t,r)=>{"use strict";var n=r(516);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},615:(e,t,r)=>{"use strict";var n=r(137),o=r(680);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},763:(e,t,r)=>{"use strict";var n=r(449);e.exports=function(e,t,r,o,a){var s=new Error(e);return n(s,t,r,o,a)}},490:(e,t,r)=>{"use strict";var n=r(516),o=r(881),a=r(483),s=r(987);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},449:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},343:(e,t,r)=>{"use strict";var n=r(516);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(a,u),n.forEach(s,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(i,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var p=o.concat(a).concat(s).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===p.indexOf(e)}));return n.forEach(f,u),r}},522:(e,t,r)=>{"use strict";var n=r(763);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},881:(e,t,r)=>{"use strict";var n=r(516);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},987:(e,t,r)=>{"use strict";var n=r(516),o=r(18),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(i=r(592)),i),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c},12:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},106:(e,t,r)=>{"use strict";var n=r(516);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},680:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},948:(e,t,r)=>{"use strict";var n=r(516);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},137:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},19:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},202:(e,t,r)=>{"use strict";var n=r(516);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},18:(e,t,r)=>{"use strict";var n=r(516);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},631:(e,t,r)=>{"use strict";var n=r(516),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,s={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},980:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},516:(e,t,r)=>{"use strict";var n=r(12),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)p(arguments[n],r);return t},extend:function(e,t,r){return p(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},864:(e,t,r)=>{const n=r(505);e.exports=class{constructor(e){this.baseUrl=e}async loadRzpScript(){try{return await this.loadScript("https://checkout.razorpay.com/v1/checkout.js")}catch(e){console.log("loadRzpScript error: ",e)}}loadScript(e){return new Promise((t=>{const r=document.createElement("script");r.src=e,r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},document.head.appendChild(r)}))}async getTenantDetails(){try{return(await n.get("https://subplat.timesgroup.com/api/v1/tenant/61b6f35c4b38facb44187893")).data}catch(e){return console.log("getTenantDetails error: ",e),e.message}}async createOrder({payload:e,customerDetails:t}){try{const r=await this.loadRzpScript(),o=await this.getTenantDetails();if(!r)return"Razorpay SDK failed to load. Are you online?";const{payment_config:a,company_name:s,comp_logo:i}=o,c="https://subplat.timesgroup.com/api/v1/razorpay/create-order",u=(await n.post(c,e)).data;this.payment({order:u,payload:e,companyName:s,logo:i,customerDetails:t,paymentConfig:a})}catch(e){throw console.error("Error fetching data:",e.message),e}}payment({order:e,payload:t,companyName:r,logo:o,customerDetails:a,paymentConfig:s}){try{const{autoRenewal:i,isTrial:c,paymentOption:u,plan_id:p,currency_id:f,selectedCoupon:l,complimentary_plan:d}=t,h={key:s.razorpay.api_key,currency:e.currency,amount:i?"1":e.amount.toString(),order_id:e.id,name:r,description:selectedPlan?.display_name,image:o,recurring:i?1:0,handler:async function(t){const r={orderCreationId:e.id,razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature,customer_id:customerId,plan_id:p,currency_id:f,isTrial:c,selectedCoupon:l,paymentOption:u,complimentary_plan:d,tenant_id:process.env.TENANT_ID},o=await n.post("https://subplat.timesgroup.com/api/v1/razorpay/success-order",r);console.log("orderSuccessResponse: ",o)},prefill:{name:`${billingName}`,email:email||a?.email,contact:mobile||a?.mobile},readonly:{email:!1,contact:!1},theme:{color:s.razorpay.theme_color?s.razorpay.theme_color:"#e49f32"},modal:{ondismiss:toggleLoading()}},m=new window.Razorpay(h);m.on("payment.failed",(async function(t){t.tenant_id=tenant_id,t.order_id=e.id,await apiService.create("https://subplat.timesgroup.com/api/v1/razorpay/failed-payment",t).then((e=>{subscriptionComplete("subscription_fail",`${props?.isUpgrade?"plan_upgrade_":"plan_"}${props?.selectedPlan.plan_name}`,"subscription_fail",`plan_${props?.autoRenewal?"recurring":"non-recurring"}_razorpay`,"",window.location.href,"","")}))})),m.open()}catch(e){console.log("error: ",e)}}async postData(e,t){try{return(await n.post(`${this.baseUrl}${e}`,t,{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"}})).data}catch(e){throw console.error("Error posting data:",e.message),e}}}}},t={},function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(864);var e,t}));
