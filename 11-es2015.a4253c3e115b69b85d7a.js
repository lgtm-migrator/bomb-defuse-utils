(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FSSm:function(t,n,o){"use strict";o.r(n);var r=o("2kYt"),s=o("40Bj"),e=o("nIj0"),i=o("api/"),c=o("hKeC"),a=o("+Net"),b=o("sEIs"),l=o("YtkY"),p=o("IqwL");const f=["about","after","again","below","could","every","first","found","great","house","large","learn","never","other","place","plant","point","right","small","sound","spell","still","study","their","there","these","thing","think","three","water","where","which","world","would","write"];var d=o("EM62");let u=(()=>{class t{constructor(){}getPossiblePasswords(t){return f.filter(n=>this.isPossiblePassword(n,t))}isEmpty(t){return!t||t.every(t=>t&&0===t.length)}isPossiblePassword(t,n){return t.split("").every((t,o)=>!n[o]||n[o].includes(t))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=d.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=o("bsiz"),h=o("X0g2"),m=o("4oqK"),w=o("U9PD"),v=o("qFEQ");function I(t,n){1&t&&(d.Rb(0,"div"),d.pc(1," Input is to large, limit is 5 "),d.Qb())}function y(t,n){if(1&t&&(d.Rb(0,"app-form-field"),d.Rb(1,"label",5),d.pc(2),d.Qb(),d.Mb(3,"input",6),d.nc(4,I,2,0,"div",4),d.Qb()),2&t){const t=n.$implicit,o=n.index;d.Ab(1),d.gc("for","position_"+o+1),d.Ab(1),d.rc("Position ",o+1,""),d.Ab(1),d.gc("formControl",t),d.Ab(1),d.gc("ngIf",t.hasError("maxlength"))}}function P(t,n){1&t&&(d.Rb(0,"div"),d.Rb(1,"h3"),d.pc(2,"No Words matching"),d.Qb(),d.Qb())}function Q(t,n){if(1&t&&(d.Rb(0,"div"),d.Rb(1,"h3"),d.pc(2," The word is: "),d.Rb(3,"span",7),d.pc(4),d.Qb(),d.Qb(),d.Qb()),2&t){const t=d.bc().ngIf;d.Ab(4),d.qc(t[0])}}function R(t,n){if(1&t&&(d.Rb(0,"span"),d.pc(1),d.Qb()),2&t){const t=n.$implicit;d.Ab(1),d.rc(" ",t," ")}}function A(t,n){if(1&t&&(d.Rb(0,"div"),d.Rb(1,"h5"),d.pc(2,"Potential Words"),d.Qb(),d.Rb(3,"div",8),d.nc(4,R,2,1,"span",3),d.Qb(),d.Qb()),2&t){const t=d.bc().ngIf;d.Ab(4),d.gc("ngForOf",t)}}function F(t,n){if(1&t&&(d.Pb(0),d.nc(1,P,3,0,"div",4),d.nc(2,Q,5,1,"div",4),d.nc(3,A,5,1,"div",4),d.Ob()),2&t){const t=n.ngIf;d.Ab(1),d.gc("ngIf",0===t.length),d.Ab(1),d.gc("ngIf",1===t.length),d.Ab(1),d.gc("ngIf",t.length>1)}}const k=[{path:"",component:(()=>{class t{constructor(t,n){this.fb=t,this.passwordsService=n}ngOnInit(){this.form=this.buildForm(),this.words$=this.observeWords(this.form)}getPasswordControls(){return this.form.get("positions").controls}buildForm(){const t=new Array(5).fill(null).map(()=>this.fb.control("",[e.o.maxLength(5),e.o.minLength(5)]));return this.fb.group({positions:this.fb.array(t)})}observeWords(t){return t.get("positions").valueChanges.pipe(Object(l.a)(t=>t.map(t=>t.split(""))),Object(l.a)(t=>(p.a.log("test: ",this.passwordsService.isEmpty(t),t),this.passwordsService.getPossiblePasswords(t))))}}return t.\u0275fac=function(n){return new(n||t)(d.Lb(e.b),d.Lb(u))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-passwords"]],decls:7,vars:5,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Passwords"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"for"],["placeholder","Enter the 5 letters for this position","type","text","appFormInput","","minlength","5","maxlength","5",3,"formControl"],[2,"text-decoration","underline"],["fxLayout","column"]],template:function(t,n){1&t&&(d.Rb(0,"form",0),d.Rb(1,"div",1),d.Mb(2,"app-manual-link",2),d.Qb(),d.Rb(3,"app-middle-layout"),d.nc(4,y,5,4,"app-form-field",3),d.nc(5,F,4,3,"ng-container",4),d.cc(6,"async"),d.Qb(),d.Qb()),2&t&&(d.gc("formGroup",n.form),d.Ab(4),d.gc("ngForOf",n.getPasswordControls()),d.Ab(1),d.gc("ngIf",d.dc(6,3,n.words$)))},directives:[e.q,e.j,e.e,g.a,h.a,r.j,r.k,m.a,e.a,w.a,e.h,e.g,e.i,e.c,v.c],pipes:[r.b],encapsulation:2,changeDetection:0}),t})()}];let j=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(n){return new(n||t)},imports:[[b.c.forChild(k)],b.c]}),t})();o.d(n,"PasswordsModule",(function(){return x}));let x=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(n){return new(n||t)},imports:[[r.c,j,e.f,s.a,e.m,a.a,i.a,c.a]]}),t})()}}]);