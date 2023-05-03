"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{4059:function(t,e,r){r.d(e,{tv:function(){return E}});var n,i,o,s=r(7294),l=Object.defineProperty,a=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))h.call(e,r)&&c(t,r,e[r]);if(a)for(var r of a(e))u.call(e,r)&&c(t,r,e[r]);return t},f=(t,e)=>{var r={};for(var n in t)h.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&a)for(var n of a(t))0>e.indexOf(n)&&u.call(t,n)&&(r[n]=t[n]);return r};(t=>{let e=class{constructor(t,r,n,i){if(this.version=t,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw RangeError("Version value out of range");if(i<-1||i>7)throw RangeError("Mask value out of range");this.size=4*t+17;let s=[];for(let t=0;t<this.size;t++)s.push(!1);for(let t=0;t<this.size;t++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();let l=this.addEccAndInterleave(n);if(this.drawCodewords(l),-1==i){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);let r=this.getPenaltyScore();r<t&&(i=e,t=r),this.applyMask(e)}}o(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}static encodeText(r,n){let i=t.QrSegment.makeSegments(r);return e.encodeSegments(i,n)}static encodeBinary(r,n){let i=t.QrSegment.makeBytes(r);return e.encodeSegments([i],n)}static encodeSegments(t,r,i=1,s=40,a=-1,h=!0){let u,c;if(!(e.MIN_VERSION<=i&&i<=s&&s<=e.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(u=i;;u++){let n=8*e.getNumDataCodewords(u,r),i=l.getTotalBits(t,u);if(i<=n){c=i;break}if(u>=s)throw RangeError("Data too long")}for(let t of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])h&&c<=8*e.getNumDataCodewords(u,t)&&(r=t);let d=[];for(let e of t)for(let t of(n(e.mode.modeBits,4,d),n(e.numChars,e.mode.numCharCountBits(u),d),e.getData()))d.push(t);o(d.length==c);let f=8*e.getNumDataCodewords(u,r);o(d.length<=f),n(0,Math.min(4,f-d.length),d),n(0,(8-d.length%8)%8,d),o(d.length%8==0);for(let t=236;d.length<f;t^=253)n(t,8,d);let m=[];for(;8*m.length<d.length;)m.push(0);return d.forEach((t,e)=>m[e>>>3]|=t<<7-(7&e)),new e(u,r,m,a)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let n=0;n<e;n++)0==r&&0==n||0==r&&n==e-1||r==e-1&&0==n||this.drawAlignmentPattern(t[r],t[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){let e=this.errorCorrectionLevel.formatBits<<3|t,r=e;for(let t=0;t<10;t++)r=r<<1^(r>>>9)*1335;let n=(e<<10|r)^21522;o(n>>>15==0);for(let t=0;t<=5;t++)this.setFunctionModule(8,t,i(n,t));this.setFunctionModule(8,7,i(n,6)),this.setFunctionModule(8,8,i(n,7)),this.setFunctionModule(7,8,i(n,8));for(let t=9;t<15;t++)this.setFunctionModule(14-t,8,i(n,t));for(let t=0;t<8;t++)this.setFunctionModule(this.size-1-t,8,i(n,t));for(let t=8;t<15;t++)this.setFunctionModule(8,this.size-15+t,i(n,t));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let e=0;e<12;e++)t=t<<1^(t>>>11)*7973;let e=this.version<<12|t;o(e>>>18==0);for(let t=0;t<18;t++){let r=i(e,t),n=this.size-11+t%3,o=Math.floor(t/3);this.setFunctionModule(n,o,r),this.setFunctionModule(o,n,r)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let i=Math.max(Math.abs(n),Math.abs(r)),o=t+n,s=e+r;0<=o&&o<this.size&&0<=s&&s<this.size&&this.setFunctionModule(o,s,2!=i&&4!=i)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(t+n,e+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){let r=this.version,n=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(r,n))throw RangeError("Invalid argument");let i=e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],s=e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],l=Math.floor(e.getNumRawDataModules(r)/8),a=i-l%i,h=Math.floor(l/i),u=[],c=e.reedSolomonComputeDivisor(s);for(let r=0,n=0;r<i;r++){let i=t.slice(n,n+h-s+(r<a?0:1));n+=i.length;let o=e.reedSolomonComputeRemainder(i,c);r<a&&i.push(0),u.push(i.concat(o))}let d=[];for(let t=0;t<u[0].length;t++)u.forEach((e,r)=>{(t!=h-s||r>=a)&&d.push(e[t])});return o(d.length==l),d}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let n=0;n<this.size;n++)for(let o=0;o<2;o++){let s=e-o,l=(e+1&2)==0,a=l?this.size-1-n:n;!this.isFunction[a][s]&&r<8*t.length&&(this.modules[a][s]=i(t[r>>>3],7-(7&r)),r++)}}o(r==8*t.length)}applyMask(t){if(t<0||t>7)throw RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let n;switch(t){case 0:n=(r+e)%2==0;break;case 1:n=e%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+e)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:n=r*e%2+r*e%3==0;break;case 6:n=(r*e%2+r*e%3)%2==0;break;case 7:n=((r+e)%2+r*e%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[e][r]&&n&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let r=0;r<this.size;r++){let n=!1,i=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[r][s]==n?5==++i?t+=e.PENALTY_N1:i>5&&t++:(this.finderPenaltyAddHistory(i,o),n||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),n=this.modules[r][s],i=1);t+=this.finderPenaltyTerminateAndCount(n,i,o)*e.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,i=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][r]==n?5==++i?t+=e.PENALTY_N1:i>5&&t++:(this.finderPenaltyAddHistory(i,o),n||(t+=this.finderPenaltyCountPatterns(o)*e.PENALTY_N3),n=this.modules[s][r],i=1);t+=this.finderPenaltyTerminateAndCount(n,i,o)*e.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){let i=this.modules[r][n];i==this.modules[r][n+1]&&i==this.modules[r+1][n]&&i==this.modules[r+1][n+1]&&(t+=e.PENALTY_N2)}let r=0;for(let t of this.modules)r=t.reduce((t,e)=>t+(e?1:0),r);let n=this.size*this.size,i=Math.ceil(Math.abs(20*r-10*n)/n)-1;return o(0<=i&&i<=9),o(0<=(t+=i*e.PENALTY_N4)&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{let t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2)),r=[6];for(let n=this.size-7;r.length<t;n-=e)r.splice(1,0,n);return r}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*t+128)*t+64;if(t>=2){let e=Math.floor(t/7)+2;r-=(25*e-10)*e-55,t>=7&&(r-=36)}return o(208<=r&&r<=29648),r}static getNumDataCodewords(t,r){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw RangeError("Degree out of range");let r=[];for(let e=0;e<t-1;e++)r.push(0);r.push(1);let n=1;for(let i=0;i<t;i++){for(let t=0;t<r.length;t++)r[t]=e.reedSolomonMultiply(r[t],n),t+1<r.length&&(r[t]^=r[t+1]);n=e.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(t,r){let n=r.map(t=>0);for(let i of t){let t=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=e.reedSolomonMultiply(r,t))}return n}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285^(e>>>n&1)*t;return o(r>>>8==0),r}finderPenaltyCountPatterns(t){let e=t[1];o(e<=3*this.size);let r=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(r&&t[0]>=4*e&&t[6]>=e?1:0)+(r&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}},r=e;function n(t,e,r){if(e<0||e>31||t>>>e!=0)throw RangeError("Value out of range");for(let n=e-1;n>=0;n--)r.push(t>>>n&1)}function i(t,e){return(t>>>e&1)!=0}function o(t){if(!t)throw Error("Assertion error")}r.MIN_VERSION=1,r.MAX_VERSION=40,r.PENALTY_N1=3,r.PENALTY_N2=3,r.PENALTY_N3=40,r.PENALTY_N4=10,r.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],r.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=r;let s=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let e=[];for(let r of t)n(r,8,e);return new s(s.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!s.isNumeric(t))throw RangeError("String contains non-numeric characters");let e=[];for(let r=0;r<t.length;){let i=Math.min(t.length-r,3);n(parseInt(t.substr(r,i),10),3*i+1,e),r+=i}return new s(s.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){let e;if(!s.isAlphanumeric(t))throw RangeError("String contains unencodable characters in alphanumeric mode");let r=[];for(e=0;e+2<=t.length;e+=2){let i=45*s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));n(i+=s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),11,r)}return e<t.length&&n(s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,r),new s(s.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return""==t?[]:s.isNumeric(t)?[s.makeNumeric(t)]:s.isAlphanumeric(t)?[s.makeAlphanumeric(t)]:[s.makeBytes(s.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw RangeError("ECI assignment value out of range");if(t<128)n(t,8,e);else if(t<16384)n(2,2,e),n(t,14,e);else if(t<1e6)n(6,3,e),n(t,21,e);else throw RangeError("ECI assignment value out of range");return new s(s.Mode.ECI,0,e)}static isNumeric(t){return s.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return s.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(let n of t){let t=n.mode.numCharCountBits(e);if(n.numChars>=1<<t)return 1/0;r+=4+t+n.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)"%"!=t.charAt(r)?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}},l=s;l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=l})(o||(o={})),(t=>{let e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}},r=e;r.LOW=new e(0,1),r.MEDIUM=new e(1,0),r.QUARTILE=new e(2,3),r.HIGH=new e(3,2),t.Ecc=r})((n=o||(o={})).QrCode||(n.QrCode={})),(t=>{let e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}},r=e;r.NUMERIC=new e(1,[10,12,14]),r.ALPHANUMERIC=new e(2,[9,11,13]),r.BYTE=new e(4,[8,16,16]),r.KANJI=new e(8,[8,10,12]),r.ECI=new e(7,[0,0,0]),t.Mode=r})((i=o||(o={})).QrSegment||(i.QrSegment={}));var m=o,g={L:m.QrCode.Ecc.LOW,M:m.QrCode.Ecc.MEDIUM,Q:m.QrCode.Ecc.QUARTILE,H:m.QrCode.Ecc.HIGH};function E(t){let{value:e,size:r=128,level:n="L",bgColor:i="#FFFFFF",fgColor:o="#000000",includeMargin:l=!1,imageSettings:a}=t,h=f(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),u=m.QrCode.encodeText(e,g[n]).getModules(),c=l?4:0,E=u.length+2*c,M=function(t,e,r,n){if(null==n)return null;let i=t.length+2*(r?4:0),o=Math.floor(.1*e),s=i/e,l=(n.width||o)*s,a=(n.height||o)*s,h=null==n.x?t.length/2-l/2:n.x*s,u=null==n.y?t.length/2-a/2:n.y*s,c=null;if(n.excavate){let t=Math.floor(h),e=Math.floor(u);c={x:t,y:e,w:Math.ceil(l+h-t),h:Math.ceil(a+u-e)}}return{x:h,y:u,h:a,w:l,excavation:c}}(u,r,l,a),C=null;if(null!=a&&null!=M){if(null!=M.excavation){var R,w;R=u,w=M.excavation,u=R.slice().map((t,e)=>e<w.y||e>=w.y+w.h?t:t.map((t,e)=>(e<w.x||e>=w.x+w.w)&&t))}C=s.createElement("image",{xlinkHref:a.src,height:M.h,width:M.w,x:M.x+c,y:M.y+c,preserveAspectRatio:"none"})}let N=function(t,e=0){let r=[];return t.forEach(function(t,n){let i=null;t.forEach(function(o,s){if(!o&&null!==i){r.push(`M${i+e} ${n+e}h${s-i}v1H${i+e}z`),i=null;return}if(s===t.length-1){if(!o)return;null===i?r.push(`M${s+e},${n+e} h1v1H${s+e}z`):r.push(`M${i+e},${n+e} h${s+1-i}v1H${i+e}z`);return}o&&null===i&&(i=s)})}),r.join("")}(u,c);return s.createElement("svg",d({height:r,width:r,viewBox:`0 0 ${E} ${E}`},h),s.createElement("path",{fill:i,d:`M0,0 h${E}v${E}H0z`,shapeRendering:"crispEdges"}),s.createElement("path",{fill:o,d:N,shapeRendering:"crispEdges"}),C)}!function(){try{new Path2D().addPath(new Path2D)}catch(t){return!1}}()}}]);