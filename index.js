!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PaymentSDK=t():e.PaymentSDK=t()}(this,(()=>{return e={505:(e,t,r)=>{e.exports=r(15)},592:(e,t,r)=>{"use strict";var n=r(516),o=r(522),a=r(948),i=r(106),s=r(615),c=r(631),u=r(202),p=r(763);e.exports=function(e){return new Promise((function(t,r){var l=e.data,d=e.headers;n.isFormData(l)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(m+":"+h)}var y=s(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),i(y,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:n,config:e,request:f};o(t,r,a),f=null}},f.onabort=function(){f&&(r(p("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){r(p("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(p(t,e,"ECONNABORTED",f)),f=null},n.isStandardBrowserEnv()){var g=(e.withCredentials||u(y))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in f&&n.forEach(d,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),r(e),f=null)})),l||(l=null),f.send(l)}))}},15:(e,t,r)=>{"use strict";var n=r(516),o=r(12),a=r(155),i=r(343);function s(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=s(r(987));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=r(928),c.CancelToken=r(191),c.isCancel=r(483),c.all=function(e){return Promise.all(e)},c.spread=r(980),c.isAxiosError=r(19),e.exports=c,e.exports.default=c},928:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},191:(e,t,r)=>{"use strict";var n=r(928);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},483:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},155:(e,t,r)=>{"use strict";var n=r(516),o=r(106),a=r(471),i=r(490),s=r(343);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}})),e.exports=c},471:(e,t,r)=>{"use strict";var n=r(516);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},615:(e,t,r)=>{"use strict";var n=r(137),o=r(680);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},763:(e,t,r)=>{"use strict";var n=r(449);e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},490:(e,t,r)=>{"use strict";var n=r(516),o=r(881),a=r(483),i=r(987);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},449:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},343:(e,t,r)=>{"use strict";var n=r(516);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(a,u),n.forEach(i,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(s,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var p=o.concat(a).concat(i).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===p.indexOf(e)}));return n.forEach(l,u),r}},522:(e,t,r)=>{"use strict";var n=r(763);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},881:(e,t,r)=>{"use strict";var n=r(516);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},987:(e,t,r)=>{"use strict";var n=r(516),o=r(18),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=r(592)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c},12:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},106:(e,t,r)=>{"use strict";var n=r(516);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},680:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},948:(e,t,r)=>{"use strict";var n=r(516);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},137:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},19:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},202:(e,t,r)=>{"use strict";var n=r(516);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},18:(e,t,r)=>{"use strict";var n=r(516);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},631:(e,t,r)=>{"use strict";var n=r(516),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},980:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},516:(e,t,r)=>{"use strict";var n=r(12),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)p(arguments[n],r);return t},extend:function(e,t,r){return p(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},864:(e,t,r)=>{const n=r(505);e.exports=class{constructor(e){this.baseUrl=e}async loadRzpScript(){try{return await this.loadScript("https://checkout.razorpay.com/v1/checkout.js")}catch(e){console.log("loadRzpScript error: ",e)}}loadScript(e){return new Promise((t=>{const r=document.createElement("script");r.src=e,r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},document.head.appendChild(r)}))}async getTenantDetails(){try{const e=await n.get("https://subplat.timesgroup.com/api/v1/tenant/61b6f35c4b38facb44187893");return JSON.parse(JSON.stringify(e.data))}catch(e){return console.log("getTenantDetails error: ",e),e.message}}async createOrder({customerDetails:e,selectedPlan:t,paymentOption:r,selectedCoupon:o,paymentMethod:a,totalAmount:i,isTrial:s,autoRenewal:c}){try{const u=await this.loadRzpScript(),p=await this.getTenantDetails();if(!u)return"Razorpay SDK failed to load. Are you online?";const{payment_config:l,company_name:d,comp_logo:f}=p,m="https://subplat.timesgroup.com/api/v1/razorpay/create-order",h={amount:s?i:t?.price,total:i,currency:t?.currency.code,currency_id:t?.currency._id,customer_id:e?._id,plan_id:t?._id,isTrial:s,autoRenewal:!1,tenant_id:"61b6f35c4b38facb44187893",method:a,mobile:e?.mobile},y=(await n.post(m,h)).data;this.orderPayment({order:y,companyName:d,logo:f,customerDetails:e,paymentConfig:l?.payment_gateway?.length>0?l.payment_gateway.filter((e=>"razorpay"===e.gateway))?.[0]:{api_key:"",theme_color:""},selectedPlan:t,paymentOption:r,selectedCoupon:o,autoRenewal:c,isTrial:s})}catch(e){throw console.error("Error fetching data:",e.message),e}}orderPayment({order:e,companyName:t,logo:r,customerDetails:o,paymentConfig:a,selectedPlan:i,paymentOption:s,selectedCoupon:c,autoRenewal:u,isTrial:p}){try{const l={key:a?.api_key,currency:e.currency,amount:u?"1":e.amount.toString(),order_id:e.id,name:t,description:i?.display_name,image:r,recurring:u?1:0,handler:async function(t){const r={orderCreationId:e.id,razorpayPaymentId:t.razorpay_payment_id,razorpayOrderId:t.razorpay_order_id,razorpaySignature:t.razorpay_signature,customer_id:o?._id,plan_id:i?._id,currency_id:i?.currency._id,isTrial:p,selectedCoupon:c,paymentOption:s,complimentary_plan:i?.complimentary_plans?.planDetails[0],tenant_id:"61b6f35c4b38facb44187893"},a=await n.post("https://subplat.timesgroup.com/api/v1/razorpay/success-order",r);console.log("orderSuccessResponse: ",a)},prefill:{name:`${o?.firstName} ${o?.lastName}`,email:email||o?.email,contact:mobile||o?.mobile},readonly:{email:!1,contact:!1},theme:{color:a?.theme_color?a?.theme_color:"#e49f32"},modal:{ondismiss:toggleLoading()}};console.log({options:l});const d=new window.Razorpay(l);d.on("payment.failed",(async function(t){t.tenant_id="61b6f35c4b38facb44187893",t.order_id=e.id,await n.post("https://subplat.timesgroup.com/api/v1/razorpay/failed-payment",t)})),d.open()}catch(e){console.log("error: ",e)}}async createSubscription({customerDetails:e,selectedPlan:t,paymentOption:r,selectedCoupon:o,paymentMethod:a,totalAmount:i,isTrial:s,autoRenewal:c}){const u=await this.loadRzpScript(),p=await this.getTenantDetails();if(!u)return"Razorpay SDK failed to load. Are you online?";const{payment_config:l,company_name:d,comp_logo:f}=p,m={amount:s?i:t?.price,total:i,currency:t?.currency.code,currency_id:t?.currency._id,customer_id:e?._id,plan_id:t?._id,plan_price:t?.dummy_price,isTrial:s,autoRenewal:!0,tenant_id:"61b6f35c4b38facb44187893",method:a,mobile:e?.mobile},h=(await n.post("https://subplat.timesgroup.com/api/v1/razorpay/create-subsciption",m)).data;this.subscriptionPayment({subscription:h,companyName:d,logo:f,customerDetails:e,paymentConfig:l?.payment_gateway?.length>0?l.payment_gateway.filter((e=>"razorpay"===e.gateway))?.[0]:{api_key:"",theme_color:""},selectedPlan:t,paymentOption:r,selectedCoupon:o,autoRenewal:c,isTrial:s})}subscriptionPayment({subscription:e,companyName:t,logo:r,customerDetails:o,paymentConfig:a,selectedPlan:i,paymentOption:s,selectedCoupon:c,autoRenewal:u,isTrial:p}){try{const l={key:a?.api_key,currency:e.currency,amount:u?"1":e.amount.toString(),order_id:e.id,name:t,description:i?.display_name,image:r,recurring:1,customer_id:e?.rzp_customer_id,handler:async function(t){const r={rzp_customer_id:e?.rzp_customer_id,orderCreationId:e.id,razorpayOrderId:t.razorpay_order_id,razorpayPaymentId:t.razorpay_payment_id,razorpaySubscriptionId:t.razorpay_subscription_id,razorpaySignature:t.razorpay_signature,customer_id:o?._id,plan_id:i?._id,currency_id:i?.currency?._id,isTrial:p,selectedCoupon:c,paymentOption:s,complimentary_plan:i?.complimentary_plans?.planDetails[0],tenant_id:"61b6f35c4b38facb44187893",plan_duration:i?.duration,startDate:e?.start,endDate:e?.end};await n.post("https://subplat.timesgroup.com/api/v1/razorpay/success-subscription",r)},prefill:{name:`${o?.firstName} ${o?.lastName}`,email:email||o?.email,contact:mobile||o?.mobile},readonly:{email:!1,contact:!1},theme:{color:a?.theme_color?a?.theme_color:"#e49f32"},modal:{ondismiss:toggleLoading()}},d=new window.Razorpay(l);d.on("payment.failed",(async function(e){e.tenant_id="61b6f35c4b38facb44187893",await apiService.create("https://subplat.timesgroup.com/api/v1/razorpay/failed-payment",e)})),d.open()}catch(e){console.log("subscriptionPayment err: ",e)}}}}},t={},function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}(864);var e,t}));
