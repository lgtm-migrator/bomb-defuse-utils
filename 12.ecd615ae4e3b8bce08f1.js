(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{QZUD:function(l,n,u){"use strict";u.r(n);var e=u("LoAr"),t=function(){return function(){}}(),r=u("C9Ky"),o=u("IfiR"),i=u("q8hG"),b=u("4oqK"),a=u("U9PD"),s=u("WT9V"),c=u("Tr9l"),f=u("X0g2"),g=u("3riI"),p=u("Jg5f"),d=u("W/Ou"),h=function(){function l(){}return l.prototype.needIsSerialOdd=function(n){switch(l.length){case 3:return!1;case 4:return n.filter(function(l){return"red"===l}).length>1;case 5:return"black"===n[n.length-1];case 6:return 0===n.filter(function(l){return"yellow"===l}).length;default:return!1}},l.prototype.getWireToCut=function(l,n){switch(l.length){case 3:return this.getWireToCutOfThree(l);case 4:return this.getWireToCutOfFour(l,n);case 5:return this.getWireToCutOfFive(l,n);case 6:return this.getWireToCutOfSix(l,n);default:return null}},l.prototype.getWireToCutOfThree=function(l){var n=!l.includes("red"),u=l.length;if(n)return 2;if("white"===l[l.length-1])return u;if(l.filter(function(l){return"blue"===l}).length>1){var e=l.reverse().findIndex(function(l){return"blue"===l});return l.length-e}return u},l.prototype.getWireToCutOfFour=function(l,n){var u=l.filter(function(l){return"red"===l});if(u.length>1&&n){var e=l.reverse().findIndex(function(l){return"red"===l});return l.length-e}return"yellow"===l[l.length-1]&&0===u.length?1:1===l.filter(function(l){return"blue"===l}).length?1:l.filter(function(l){return"yellow"===l}).length>1?4:2},l.prototype.getWireToCutOfFive=function(l,n){if("black"===l[l.length-1]&&n)return 4;var u=1===l.filter(function(l){return"red"===l}).length,e=l.filter(function(l){return"yellow"===l}).length>1;return u&&e?1:l.find(function(l){return"black"===l})?1:2},l.prototype.getWireToCutOfSix=function(l,n){if(0===l.filter(function(l){return"yellow"===l}).length&&n)return 3;var u=1===l.filter(function(l){return"yellow"===l}).length,e=l.filter(function(l){return"white"===l}).length>1;return u&&e?4:0===l.filter(function(l){return"red"===l}).length?l.length:4},l.ngInjectableDef=e.S({factory:function(){return new l},token:l,providedIn:"root"}),l}(),m=function(){function l(l,n){this.fb=l,this.wiresService=n,this.wireOptions=["black","blue","red","white","yellow"]}return l.prototype.ngOnInit=function(){var l=this;this.form=this.buildForm(),this.form.get("num").valueChanges.subscribe(function(){return l.onWiresChange()}),this.wireToCut$=this.observeWireToCut(),this.showSecondQuestions$=this.observeSecondQuestions(),this.dontUseSerial$=this.observeDontUseSerial()},l.prototype.buildForm=function(){return this.fb.group({num:this.fb.control(null,[o.s.min(3),o.s.max(6)]),wires:this.fb.array([]),isSerialOdd:this.fb.control(!1)})},l.prototype.observeSecondQuestions=function(){return this.form.get("num").valueChanges.pipe(Object(p.a)(function(l){return!!l}))},l.prototype.observeDontUseSerial=function(){var l=this;return this.form.get("wires").valueChanges.pipe(Object(p.a)(function(n){return!l.wiresService.needIsSerialOdd(n)}))},l.prototype.onWiresChange=function(){var l=this,n=this.form.get("num").value;if(n>=3&&n<=6){for(var u=new Array(n).fill(null).map(function(){return l.fb.control("white")}),e=this.form.get("wires");0!==e.length;)e.removeAt(0);u.forEach(function(l){return e.push(l)})}},l.prototype.observeWireToCut=function(){var l=this;return Object(g.a)(this.form.get("wires").valueChanges,this.form.get("isSerialOdd").valueChanges.pipe(Object(d.a)(!1))).pipe(Object(p.a)(function(n){return l.wiresService.getWireToCut(n[0],n[1])}))},l}(),y=e.nb({encapsulation:2,styles:[],data:{}});function v(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"div",[["style","color: red"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Value is too small "]))],null,null)}function w(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"div",[["style","color: red"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Value is too large "]))],null,null)}function C(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.ob(1,147456,null,0,o.p,[e.k,e.D,[2,o.r]],{value:[0,"value"]},null),e.ob(2,147456,null,0,o.y,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(l()(),e.Eb(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.$implicit)})}function O(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,12,"app-form-field",[],null,null,null,i.b,i.a)),e.ob(1,114688,null,0,b.a,[],null,null),(l()(),e.pb(2,0,null,0,1,"label",[["for","wires"]],null,null,null,null,null)),(l()(),e.Eb(3,null,["Wire: ",""])),(l()(),e.pb(4,0,null,0,8,"select",[["appFormInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"className",0]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==e.yb(l,5).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.yb(l,5).onTouched()&&t),t},null,null)),e.ob(5,16384,null,0,o.r,[e.D,e.k],null,null),e.Bb(1024,null,o.l,function(l){return[l]},[o.r]),e.ob(7,540672,null,0,o.e,[[8,null],[8,null],[6,o.l],[2,o.x]],{form:[0,"form"]},null),e.Bb(2048,null,o.m,null,[o.e]),e.ob(9,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(10,16384,null,0,a.a,[],null,null),(l()(),e.gb(16777216,null,null,1,null,C)),e.ob(12,278528,null,0,s.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,1,0),l(n,7,0,n.context.$implicit),l(n,12,0,u.wireOptions)},function(l,n){l(n,3,0,n.context.index+1),l(n,4,0,e.yb(n,9).ngClassUntouched,e.yb(n,9).ngClassTouched,e.yb(n,9).ngClassPristine,e.yb(n,9).ngClassDirty,e.yb(n,9).ngClassValid,e.yb(n,9).ngClassInvalid,e.yb(n,9).ngClassPending,e.yb(n,10).elementClass)})}function I(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.ob(2,278528,null,0,s.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(0,null,null,0))],function(l,n){l(n,2,0,n.component.form.get("wires").controls)},null)}function T(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Disregard this input for this listing of wires! "]))],null,null)}function S(l){return e.Gb(0,[(l()(),e.Eb(-1,null,[" This is required! "]))],null,null)}function k(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,22,"app-form-field",[],null,null,null,i.b,i.a)),e.ob(1,114688,null,0,b.a,[],null,null),(l()(),e.pb(2,0,null,0,1,"label",[["for","wires"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["2. Is Serial Odd"])),(l()(),e.pb(4,0,null,0,14,"select",[["appFormInput",""],["formControlName","isSerialOdd"],["type","select"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"className",0]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==e.yb(l,5).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.yb(l,5).onTouched()&&t),t},null,null)),e.ob(5,16384,null,0,o.r,[e.D,e.k],null,null),e.Bb(1024,null,o.l,function(l){return[l]},[o.r]),e.ob(7,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.x]],{name:[0,"name"]},null),e.Bb(2048,null,o.m,null,[o.f]),e.ob(9,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(10,16384,null,0,a.a,[],null,null),(l()(),e.pb(11,0,null,null,3,"option",[],null,null,null,null,null)),e.ob(12,147456,null,0,o.p,[e.k,e.D,[2,o.r]],{value:[0,"value"]},null),e.ob(13,147456,null,0,o.y,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(l()(),e.Eb(-1,null,["True"])),(l()(),e.pb(15,0,null,null,3,"option",[],null,null,null,null,null)),e.ob(16,147456,null,0,o.p,[e.k,e.D,[2,o.r]],{value:[0,"value"]},null),e.ob(17,147456,null,0,o.y,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(l()(),e.Eb(-1,null,["False"])),(l()(),e.gb(16777216,null,0,2,null,T)),e.ob(20,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.Ab(131072,s.b,[e.h]),(l()(),e.gb(0,[["showNeedSerial",2]],0,0,null,S))],function(l,n){var u=n.component;l(n,1,0),l(n,7,0,"isSerialOdd"),l(n,12,0,!0),l(n,13,0,!0),l(n,16,0,!0),l(n,17,0,!0),l(n,20,0,e.Fb(n,20,0,e.yb(n,21).transform(u.dontUseSerial$)),e.yb(n,22))},function(l,n){l(n,4,0,e.yb(n,9).ngClassUntouched,e.yb(n,9).ngClassTouched,e.yb(n,9).ngClassPristine,e.yb(n,9).ngClassDirty,e.yb(n,9).ngClassValid,e.yb(n,9).ngClassInvalid,e.yb(n,9).ngClassPending,e.yb(n,10).elementClass)})}function D(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.Eb(1,null,[" Cut Wire: "," "])),e.Ab(131072,s.b,[e.h])],null,function(l,n){var u=n.component;l(n,1,0,e.Fb(n,1,0,e.yb(n,2).transform(u.wireToCut$)))})}function F(l){return e.Gb(2,[(l()(),e.pb(0,0,null,null,32,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.yb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.yb(l,2).onReset()&&t),t},null,null)),e.ob(1,16384,null,0,o.v,[],null,null),e.ob(2,540672,null,0,o.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Bb(2048,null,o.b,null,[o.g]),e.ob(4,16384,null,0,o.o,[[4,o.b]],null,null),(l()(),e.pb(5,0,null,null,27,"app-middle-layout",[],null,null,null,c.b,c.a)),e.ob(6,114688,null,0,f.a,[],null,null),(l()(),e.pb(7,0,null,0,15,"app-form-field",[],null,null,null,i.b,i.a)),e.ob(8,114688,null,0,b.a,[],null,null),(l()(),e.pb(9,0,null,0,1,"label",[["for","wires"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["1. How many wires? (3-6)"])),(l()(),e.pb(11,0,null,0,7,"input",[["appFormInput",""],["formControlName","num"],["max","6"],["min","3"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"className",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.yb(l,12)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.yb(l,12).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.yb(l,12)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.yb(l,12)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.yb(l,13).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.yb(l,13).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.yb(l,13).onTouched()&&t),t},null,null)),e.ob(12,16384,null,0,o.c,[e.D,e.k,[2,o.a]],null,null),e.ob(13,16384,null,0,o.u,[e.D,e.k],null,null),e.Bb(1024,null,o.l,function(l,n){return[l,n]},[o.c,o.u]),e.ob(15,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.l],[2,o.x]],{name:[0,"name"]},null),e.Bb(2048,null,o.m,null,[o.f]),e.ob(17,16384,null,0,o.n,[[4,o.m]],null,null),e.ob(18,16384,null,0,a.a,[],null,null),(l()(),e.gb(16777216,null,0,1,null,v)),e.ob(20,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,w)),e.ob(22,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(23,0,null,0,3,"div",[["class","margin full-width"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,2,null,I)),e.ob(25,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Ab(131072,s.b,[e.h]),(l()(),e.gb(16777216,null,0,2,null,k)),e.ob(28,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Ab(131072,s.b,[e.h]),(l()(),e.gb(16777216,null,0,2,null,D)),e.ob(31,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Ab(131072,s.b,[e.h])],function(l,n){var u=n.component;l(n,2,0,u.form),l(n,6,0),l(n,8,0),l(n,15,0,"num"),l(n,20,0,u.form.get("num").hasError("min")),l(n,22,0,u.form.get("num").hasError("max")),l(n,25,0,e.Fb(n,25,0,e.yb(n,26).transform(u.showSecondQuestions$))),l(n,28,0,e.Fb(n,28,0,e.yb(n,29).transform(u.showSecondQuestions$))),l(n,31,0,e.Fb(n,31,0,e.yb(n,32).transform(u.showSecondQuestions$)))},function(l,n){l(n,0,0,e.yb(n,4).ngClassUntouched,e.yb(n,4).ngClassTouched,e.yb(n,4).ngClassPristine,e.yb(n,4).ngClassDirty,e.yb(n,4).ngClassValid,e.yb(n,4).ngClassInvalid,e.yb(n,4).ngClassPending),l(n,11,0,e.yb(n,17).ngClassUntouched,e.yb(n,17).ngClassTouched,e.yb(n,17).ngClassPristine,e.yb(n,17).ngClassDirty,e.yb(n,17).ngClassValid,e.yb(n,17).ngClassInvalid,e.yb(n,17).ngClassPending,e.yb(n,18).elementClass)})}function W(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-wires",[],null,null,null,F,y)),e.ob(1,114688,null,0,m,[o.d,h],null,null)],function(l,n){l(n,1,0)},null)}var x=e.lb("app-wires",m,W,{},{},[]),E=u("SPdK"),G=u("981U"),U=function(){return function(){}}(),$=u("C7Lb"),j=u("UelK"),L=u("WgBV"),B=u("LxDK"),P=u("V7OE"),V=u("+Net"),A=u("api/");u.d(n,"WiresModuleNgFactory",function(){return N});var N=e.mb(t,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[r.a,x]],[3,e.j],e.x]),e.wb(4608,s.m,s.l,[e.u,[2,s.u]]),e.wb(4608,o.w,o.w,[]),e.wb(4608,o.d,o.d,[]),e.wb(5120,e.b,function(l,n){return[E.j(l,n)]},[s.d,e.B]),e.wb(1073742336,s.c,s.c,[]),e.wb(1073742336,G.n,G.n,[[2,G.t],[2,G.k]]),e.wb(1073742336,U,U,[]),e.wb(1073742336,o.t,o.t,[]),e.wb(1073742336,o.h,o.h,[]),e.wb(1073742336,o.q,o.q,[]),e.wb(1073742336,E.c,E.c,[]),e.wb(1073742336,$.a,$.a,[]),e.wb(1073742336,j.d,j.d,[]),e.wb(1073742336,L.a,L.a,[]),e.wb(1073742336,B.a,B.a,[]),e.wb(1073742336,P.a,P.a,[[2,E.g],e.B]),e.wb(1073742336,V.a,V.a,[]),e.wb(1073742336,A.a,A.a,[]),e.wb(1073742336,t,t,[]),e.wb(1024,G.i,function(){return[[{path:"",component:m}]]},[])])})}}]);