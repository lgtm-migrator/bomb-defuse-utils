function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NIGn:function(e,t,n){"use strict";n.r(t);var r,a,i,s=n("2kYt"),o=n("40Bj"),c=n("nIj0"),l=n("EM62"),u=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:r}),r.\u0275inj=l.Ib({factory:function(e){return new(e||r)}}),r),b=n("api/"),p=n("hKeC"),f=n("+Net"),h=n("sEIs"),m=n("ZTXN"),w=n("YtkY"),g=n("jIqt"),I=n("IqwL"),d=function(e){return e.C="Cut the Wire",e.D="Do not cut the wire",e.S="Cut the wire if the last digit of the serial number is even",e.P="Cut the wire if the bomb has a parallel port",e.B="Cut the wire if the bomb has two or more batteries",e}({}),R=[{LEDIsOn:!1,hasStar:!1,wireHasBlue:!1,wireHasRed:!1,instruction:d.C},{LEDIsOn:!1,hasStar:!1,wireHasBlue:!1,wireHasRed:!0,instruction:d.S},{LEDIsOn:!1,hasStar:!1,wireHasBlue:!0,wireHasRed:!1,instruction:d.S},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!1,wireHasRed:!1,instruction:d.C},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!1,wireHasRed:!1,instruction:d.D},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!1,wireHasRed:!0,instruction:d.C},{LEDIsOn:!1,hasStar:!1,wireHasBlue:!0,wireHasRed:!0,instruction:d.S},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!0,wireHasRed:!1,instruction:d.P},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!1,wireHasRed:!1,instruction:d.B},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!0,wireHasRed:!1,instruction:d.D},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!1,wireHasRed:!0,instruction:d.B},{LEDIsOn:!1,hasStar:!0,wireHasBlue:!0,wireHasRed:!0,instruction:d.P},{LEDIsOn:!0,hasStar:!1,wireHasBlue:!0,wireHasRed:!0,instruction:d.S},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!1,wireHasRed:!0,instruction:d.B},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!0,wireHasRed:!1,instruction:d.P},{LEDIsOn:!0,hasStar:!0,wireHasBlue:!0,wireHasRed:!0,instruction:d.D}],v=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"cutWire",value:function(e,t){var n=this.getInstruction(e),r=t.hasParallelPort,a=t.lastDigitIsEven,i=t.multiBatteries;switch(I.a.log("determined instruction: ",n),n){case d.C:return!0;case d.D:return!1;case d.S:return a;case d.P:return r;case d.B:return i;default:throw I.a.warn("Unknowing instruction given:",n),new Error}}},{key:"isTrueOrFalse",value:function(e){return!0===e||!1===e}},{key:"isWireParams",value:function(e){return this.isTrueOrFalse(e.LEDIsOn)&&this.isTrueOrFalse(e.hasStar)&&this.isTrueOrFalse(e.wireHasBlue)&&this.isTrueOrFalse(e.wireHasRed)}},{key:"isGlobalWireParams",value:function(e){return this.isTrueOrFalse(e.hasParallelPort)&&this.isTrueOrFalse(e.lastDigitIsEven)&&this.isTrueOrFalse(e.multiBatteries)}},{key:"getInstruction",value:function(e){var t=e.LEDIsOn,n=e.hasStar,r=e.wireHasBlue,a=e.wireHasRed,i=R.find((function(e){return e.LEDIsOn===t&&e.hasStar===n&&e.wireHasBlue===r&&e.wireHasRed===a}));if(!i)throw I.a.error("no instruction found for params: ",e),new Error;return i.instruction}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=l.Hb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),Q=n("X0g2"),C=n("bsiz"),H=n("4oqK"),D=n("U9PD"),O=n("qFEQ"),k=["*"],y=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=l.Fb({type:i,selectors:[["app-answer-box"]],ngContentSelectors:k,decls:1,vars:0,template:function(e,t){1&e&&(l.fc(),l.ec(0))},styles:["[_nghost-%COMP%] {\n        margin: 16px;\n        font-weight: 800;\n        border: 2px black solid;\n        padding: 8px 4px;\n        border-radius: 4px;\n      }"],changeDetection:0}),i);function E(e,t){1&e&&(l.Pb(0),l.Rb(1,"h3"),l.pc(2," Instructional Inputs "),l.Qb(),l.Rb(3,"app-form-field"),l.Rb(4,"label",19),l.pc(5,"Is the last digit of the serial number even?"),l.Qb(),l.Rb(6,"select",20),l.Rb(7,"option",5),l.pc(8," Yes "),l.Qb(),l.Rb(9,"option",5),l.pc(10," No "),l.Qb(),l.Qb(),l.Qb(),l.Rb(11,"app-form-field"),l.Rb(12,"label",21),l.pc(13,"Does the bomb have a parallel port?"),l.Qb(),l.Rb(14,"select",22),l.Rb(15,"option",5),l.pc(16," Yes "),l.Qb(),l.Rb(17,"option",5),l.pc(18," No "),l.Qb(),l.Qb(),l.Qb(),l.Rb(19,"app-form-field"),l.Rb(20,"label",23),l.pc(21,"Does the bomb have two or more wires?"),l.Qb(),l.Rb(22,"select",24),l.Rb(23,"option",5),l.pc(24," Yes "),l.Qb(),l.Rb(25,"option",5),l.pc(26," No "),l.Qb(),l.Qb(),l.Qb(),l.Ob()),2&e&&(l.Ab(7),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(6),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(6),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1))}function S(e,t){if(1&e&&(l.Rb(0,"app-answer-box"),l.pc(1),l.Qb()),2&e){var n=t.ngIf,r=l.bc(2);l.Ab(1),l.rc(" ",r.getCutTheWireDisplay(n)," ")}}function B(e,t){if(1&e&&(l.Pb(0),l.nc(1,S,2,1,"app-answer-box",6),l.cc(2,"async"),l.Ob()),2&e){var n=l.bc();l.Ab(1),l.gc("ngIf",l.dc(2,1,n.cutTheWire$))}}function L(e,t){if(1&e&&(l.Rb(0,"app-answer-box"),l.pc(1),l.Qb()),2&e){var n=t.ngIf;l.Ab(1),l.rc(" ",n," ")}}function P(e,t){if(1&e&&(l.nc(0,L,2,1,"app-answer-box",6),l.cc(1,"async")),2&e){var n=l.bc();l.gc("ngIf",l.dc(1,1,n.instruction$))}}var A,F,x=[{path:"",component:(A=function(){function e(t,n){_classCallCheck(this,e),this.fb=t,this.complexService=n,this.takeUntil=new m.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.form=this.buildForm(),this.showInstructionalInputs$=this.observeShowInstructionalInputs(this.form),this.instruction$=this.observeInstruction(this.form),this.cutTheWire$=this.observeCutTheWire(this.form)}},{key:"ngOnDestroy",value:function(){this.takeUntil.next(),this.takeUntil.unsubscribe()}},{key:"getCutTheWireDisplay",value:function(e){return e?d.C:d.D}},{key:"clearForm",value:function(e){I.a.log("clearing form"),e.patchValue({wireHasRed:null,wireHasBlue:null,hasStar:null,LEDIsOn:null})}},{key:"buildForm",value:function(){return this.fb.group({showInstructionalInputs:this.fb.control(!1,[]),wireHasRed:this.fb.control(null,[]),wireHasBlue:this.fb.control(null,[]),hasStar:this.fb.control(null,[]),LEDIsOn:this.fb.control(null,[]),lastDigitIsEven:this.fb.control(null,[]),hasParallelPort:this.fb.control(null,[]),multiBatteries:this.fb.control(null,[])})}},{key:"observeShowInstructionalInputs",value:function(e){return e.valueChanges.pipe(Object(w.a)((function(e){return!!e.showInstructionalInputs})),Object(g.a)(!1))}},{key:"observeInstruction",value:function(e){var t=this;return e.valueChanges.pipe(Object(w.a)((function(e){return t.complexService.isWireParams(e)?t.complexService.getInstruction(e):void 0})))}},{key:"observeCutTheWire",value:function(e){var t=this;return e.valueChanges.pipe(Object(w.a)((function(e){var n=t.complexService.isWireParams(e),r=t.complexService.isGlobalWireParams(e);return I.a.log("test with observe cut wire:",n,r),n&&r?t.complexService.cutWire(e,e):void 0})))}}]),e}(),A.\u0275fac=function(e){return new(e||A)(l.Lb(c.b),l.Lb(v))},A.\u0275cmp=l.Fb({type:A,selectors:[["app-complex"]],decls:58,vars:18,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","ComplicatedWires"],["for","showInstructionalInputs"],["appFormInput","","formControlName","showInstructionalInputs","name","showInstructionalInputs"],[3,"ngValue"],[4,"ngIf"],["for","wireHasRed"],["appFormInput","","formControlName","wireHasRed","name","wireHasRed"],["for","wireHasBlue"],["appFormInput","","formControlName","wireHasBlue","name","wireHasBlue"],["for","hasStar"],["appFormInput","","formControlName","hasStar","name","hasStar"],["for","LEDIsOn"],["appFormInput","","formControlName","LEDIsOn","name","LEDIsOn"],[4,"ngIf","ngIfElse"],["showInstruction",""],["fxLayout","row","fxLayoutAlign","end",1,"half-width"],["type","button","title","removes wire specific questions",3,"click"],["for","lastDigitIsEven"],["appFormInput","","formControlName","lastDigitIsEven","name","lastDigitIsEven"],["for","hasParallelPort"],["appFormInput","","formControlName","hasParallelPort","name","hasParallelPort"],["for","multiBatteries"],["appFormInput","","formControlName","multiBatteries","name","multiBatteries"]],template:function(e,t){if(1&e&&(l.Rb(0,"form",0),l.Rb(1,"div"),l.Rb(2,"app-middle-layout"),l.Rb(3,"div",1),l.Mb(4,"app-manual-link",2),l.Qb(),l.Rb(5,"app-form-field"),l.Rb(6,"label",3),l.pc(7,"Ask Instructional questions?"),l.Qb(),l.Rb(8,"select",4),l.Rb(9,"option",5),l.pc(10," Yes "),l.Qb(),l.Rb(11,"option",5),l.pc(12," No "),l.Qb(),l.Qb(),l.Rb(13,"div"),l.pc(14," NOTE: if No, we will show the output, and you (the manual-reader) might need to ask more questions. "),l.Qb(),l.Qb(),l.nc(15,E,27,6,"ng-container",6),l.cc(16,"async"),l.Rb(17,"h3"),l.pc(18," Wire specific questions "),l.Qb(),l.Rb(19,"app-form-field"),l.Rb(20,"label",7),l.pc(21,"Wire has red coloring"),l.Qb(),l.Rb(22,"select",8),l.Rb(23,"option",5),l.pc(24," Yes "),l.Qb(),l.Rb(25,"option",5),l.pc(26," No "),l.Qb(),l.Qb(),l.Qb(),l.Rb(27,"app-form-field"),l.Rb(28,"label",9),l.pc(29,"Wire has blue coloring"),l.Qb(),l.Rb(30,"select",10),l.Rb(31,"option",5),l.pc(32," Yes "),l.Qb(),l.Rb(33,"option",5),l.pc(34," No "),l.Qb(),l.Qb(),l.Qb(),l.Rb(35,"app-form-field"),l.Rb(36,"label",11),l.pc(37,"Wire has a star"),l.Qb(),l.Rb(38,"select",12),l.Rb(39,"option",5),l.pc(40," Yes "),l.Qb(),l.Rb(41,"option",5),l.pc(42," No "),l.Qb(),l.Qb(),l.Qb(),l.Rb(43,"app-form-field"),l.Rb(44,"label",13),l.pc(45,"LED Is On"),l.Qb(),l.Rb(46,"select",14),l.Rb(47,"option",5),l.pc(48," Yes "),l.Qb(),l.Rb(49,"option",5),l.pc(50," No "),l.Qb(),l.Qb(),l.Qb(),l.nc(51,B,3,3,"ng-container",15),l.cc(52,"async"),l.nc(53,P,2,3,"ng-template",null,16,l.oc),l.Rb(55,"div",17),l.Rb(56,"button",18),l.Zb("click",(function(e){return t.clearForm(t.form)})),l.pc(57," Reset "),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&e){var n=l.jc(54);l.gc("formGroup",t.form),l.Ab(9),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(4),l.gc("ngIf",l.dc(16,14,t.showInstructionalInputs$)),l.Ab(8),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(6),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(6),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(6),l.gc("ngValue",!0),l.Ab(2),l.gc("ngValue",!1),l.Ab(2),l.gc("ngIf",l.dc(52,16,t.showInstructionalInputs$))("ngIfElse",n)}},directives:[c.q,c.j,c.e,Q.a,C.a,H.a,c.n,D.a,c.i,c.d,c.k,c.p,s.k,O.c,O.b,y],pipes:[s.b],encapsulation:2,changeDetection:0}),A)}],N=((F=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:F}),F.\u0275inj=l.Ib({factory:function(e){return new(e||F)},imports:[[h.c.forChild(x)],h.c]}),F);n.d(t,"ComplexModule",(function(){return V}));var W,V=((W=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:W}),W.\u0275inj=l.Ib({factory:function(e){return new(e||W)},imports:[[s.c,N,c.f,o.a,c.m,f.a,b.a,u,p.a]]}),W)}}]);