!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,i=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{JKyo:function(n,r,o){"use strict";o.r(r),o.d(r,"WiresModule",(function(){return M}));var u,c=o("2kYt"),l=o("nIj0"),a=o("api/"),f=o("hKeC"),s=o("+Net"),b=o("sEIs"),h=o("HM3f"),g=o("YtkY"),p=o("jIqt"),d=o("EM62"),v=((u=function(){function e(){t(this,e)}return i(e,[{key:"needIsSerialOdd",value:function(e){switch(e.length){case 3:return!1;case 4:return e.filter((function(e){return"red"===e})).length>1;case 5:return"black"===e[e.length-1];case 6:return 0===e.filter((function(e){return"yellow"===e})).length;default:return!1}}},{key:"getWireToCut",value:function(e,n){switch(e.length){case 3:return this.getWireToCutOfThree(e);case 4:return this.getWireToCutOfFour(e,n);case 5:return this.getWireToCutOfFive(e,n);case 6:return this.getWireToCutOfSix(e,n);default:return null}}},{key:"getWireToCutOfThree",value:function(e){var n=!e.includes("red"),t=e.length;if(n)return 2;if("white"===e[e.length-1])return t;if(e.filter((function(e){return"blue"===e})).length>1){var r=e.reverse().findIndex((function(e){return"blue"===e}));return e.length-r}return t}},{key:"getWireToCutOfFour",value:function(e,n){var t=e.filter((function(e){return"red"===e}));if(t.length>1&&n){var r=e.reverse().findIndex((function(e){return"red"===e}));return e.length-r}return"yellow"===e[e.length-1]&&0===t.length||1===e.filter((function(e){return"blue"===e})).length?1:e.filter((function(e){return"yellow"===e})).length>1?4:2}},{key:"getWireToCutOfFive",value:function(e,n){if("black"===e[e.length-1]&&n)return 4;var t=1===e.filter((function(e){return"red"===e})).length,r=e.filter((function(e){return"yellow"===e})).length>1;return t&&r||e.find((function(e){return"black"===e}))?1:2}},{key:"getWireToCutOfSix",value:function(e,n){if(0===e.filter((function(e){return"yellow"===e})).length&&n)return 3;var t=1===e.filter((function(e){return"yellow"===e})).length,r=e.filter((function(e){return"white"===e})).length>1;return t&&r?4:0===e.filter((function(e){return"red"===e})).length?e.length:4}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275prov=d.Fb({token:u,factory:u.\u0275fac,providedIn:"root"}),u),m=o("X0g2"),y=o("bsiz"),w=o("4oqK"),O=o("U9PD");function C(e,n){1&e&&(d.Pb(0,"div",8),d.nc(1," Value is too small "),d.Ob())}function I(e,n){1&e&&(d.Pb(0,"div",8),d.nc(1," Value is too large "),d.Ob())}function S(e,n){if(1&e&&(d.Pb(0,"option",12),d.nc(1),d.Ob()),2&e){var t=n.$implicit;d.ec("value",t),d.yb(1),d.oc(t)}}function k(e,n){if(1&e&&(d.Pb(0,"app-form-field"),d.Pb(1,"label",3),d.nc(2),d.Ob(),d.Pb(3,"select",10),d.lc(4,S,2,2,"option",11),d.Ob(),d.Ob()),2&e){var t=n.$implicit,r=n.index,i=d.Zb(2);d.yb(2),d.pc("Wire: ",r+1,""),d.yb(1),d.ec("formControl",t),d.yb(1),d.ec("ngForOf",i.wireOptions)}}function P(e,n){if(1&e&&(d.Nb(0),d.lc(1,k,5,3,"app-form-field",9),d.Mb()),2&e){var t=d.Zb();d.yb(1),d.ec("ngForOf",t.form.get("wires").controls)}}function T(e,n){1&e&&(d.Pb(0,"div"),d.nc(1," Disregard this input for this listing of wires! "),d.Ob())}function W(e,n){1&e&&d.nc(0," This is required! ")}function F(e,n){if(1&e&&(d.Pb(0,"app-form-field"),d.Pb(1,"label",3),d.nc(2,"2. Is Serial Odd"),d.Ob(),d.Pb(3,"select",13),d.Pb(4,"option",12),d.nc(5,"True"),d.Ob(),d.Pb(6,"option",12),d.nc(7,"False"),d.Ob(),d.Ob(),d.lc(8,T,2,0,"div",14),d.ac(9,"async"),d.lc(10,W,1,0,"ng-template",null,15,d.mc),d.Ob()),2&e){var t=d.hc(11),r=d.Zb();d.yb(4),d.ec("value",!0),d.yb(2),d.ec("value",!0),d.yb(2),d.ec("ngIf",d.bc(9,4,r.dontUseSerial$))("ngIfElse",t)}}function j(e,n){if(1&e&&(d.Nb(0),d.nc(1),d.ac(2,"async"),d.Mb()),2&e){var t=d.Zb();d.yb(1),d.pc(" Cut Wire: ",d.bc(2,1,t.wireToCut$)," ")}}var $,x,E,A=[{path:"",component:($=function(){function n(e,r){t(this,n),this.fb=e,this.wiresService=r,this.wireOptions=["black","blue","red","white","yellow"]}return i(n,[{key:"ngOnInit",value:function(){var e=this;this.form=this.buildForm(),this.form.get("num").valueChanges.subscribe((function(){return e.onWiresChange()})),this.wireToCut$=this.observeWireToCut(),this.showSecondQuestions$=this.observeSecondQuestions(),this.dontUseSerial$=this.observeDontUseSerial()}},{key:"buildForm",value:function(){return this.fb.group({num:this.fb.control(null,[l.q.min(3),l.q.max(6)]),wires:this.fb.array([]),isSerialOdd:this.fb.control(!1)})}},{key:"observeSecondQuestions",value:function(){return this.form.get("num").valueChanges.pipe(Object(g.a)((function(e){return!!e})))}},{key:"observeDontUseSerial",value:function(){var e=this;return this.form.get("wires").valueChanges.pipe(Object(g.a)((function(n){return!e.wiresService.needIsSerialOdd(n)})))}},{key:"onWiresChange",value:function(){var e=this,n=this.form.get("num").value;if(n>=3&&n<=6){for(var t=new Array(n).fill(null).map((function(){return e.fb.control("white")})),r=this.form.get("wires");0!==r.length;)r.removeAt(0);t.forEach((function(e){return r.push(e)}))}}},{key:"observeWireToCut",value:function(){var n=this;return Object(h.a)([this.form.get("wires").valueChanges,this.form.get("isSerialOdd").valueChanges.pipe(Object(p.a)(!1))]).pipe(Object(g.a)((function(t){var r=e(t,2),i=r[0],o=r[1];return n.wiresService.getWireToCut(i,o)})))}}]),n}(),$.\u0275fac=function(e){return new(e||$)(d.Jb(l.c),d.Jb(v))},$.\u0275cmp=d.Db({type:$,selectors:[["app-wires"]],decls:17,vars:12,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Wires"],["for","wires"],["type","number","appFormInput","","formControlName","num","min","3","max","6"],["style","color: red",4,"ngIf"],[1,"margin","full-width"],[4,"ngIf"],[2,"color","red"],[4,"ngFor","ngForOf"],["appFormInput","",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","select","appFormInput","","formControlName","isSerialOdd"],[4,"ngIf","ngIfElse"],["showNeedSerial",""]],template:function(e,n){1&e&&(d.Pb(0,"form",0),d.Pb(1,"app-middle-layout"),d.Pb(2,"div",1),d.Kb(3,"app-manual-link",2),d.Ob(),d.Pb(4,"app-form-field"),d.Pb(5,"label",3),d.nc(6,"1. How many wires? (3-6)"),d.Ob(),d.Kb(7,"input",4),d.lc(8,C,2,0,"div",5),d.lc(9,I,2,0,"div",5),d.Ob(),d.Pb(10,"div",6),d.lc(11,P,2,1,"ng-container",7),d.ac(12,"async"),d.Ob(),d.lc(13,F,12,6,"app-form-field",7),d.ac(14,"async"),d.lc(15,j,3,3,"ng-container",7),d.ac(16,"async"),d.Ob(),d.Ob()),2&e&&(d.ec("formGroup",n.form),d.yb(8),d.ec("ngIf",n.form.get("num").hasError("min")),d.yb(1),d.ec("ngIf",n.form.get("num").hasError("max")),d.yb(2),d.ec("ngIf",d.bc(12,6,n.showSecondQuestions$)),d.yb(2),d.ec("ngIf",d.bc(14,8,n.showSecondQuestions$)),d.yb(2),d.ec("ngIf",d.bc(16,10,n.showSecondQuestions$)))},directives:[l.s,l.k,l.f,m.a,y.a,w.a,l.n,l.b,O.a,l.j,l.e,c.k,c.j,l.p,l.d,l.m,l.r],pipes:[c.b],encapsulation:2,changeDetection:0}),$)}],D=((E=function e(){t(this,e)}).\u0275mod=d.Hb({type:E}),E.\u0275inj=d.Gb({factory:function(e){return new(e||E)},imports:[[b.e.forChild(A)],b.e]}),E),M=((x=function e(){t(this,e)}).\u0275mod=d.Hb({type:x}),x.\u0275inj=d.Gb({factory:function(e){return new(e||x)},imports:[[c.c,D,l.g,l.o,s.a,a.a,f.a]]}),x)}}])}();