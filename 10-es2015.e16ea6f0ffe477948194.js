(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FSSm:function(t,o,n){"use strict";n.r(o);var e=n("2kYt"),r=n("40Bj"),s=n("nIj0"),i=n("api/"),c=n("hKeC"),a=n("+Net"),b=n("sEIs"),l=n("YtkY"),p=n("IqwL");const f=["about","after","again","below","could","every","first","found","great","house","large","learn","never","other","place","plant","point","right","small","sound","spell","still","study","their","there","these","thing","think","three","water","where","which","world","would","write"];var d=n("EM62");let u=(()=>{class t{constructor(){}getPossiblePasswords(t){return f.filter(o=>this.isPossiblePassword(o,t))}isEmpty(t){return!t||t.every(t=>t&&0===t.length)}isPossiblePassword(t,o){return t.split("").every((t,n)=>!o[n]||o[n].includes(t))}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=d.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=n("bsiz"),m=n("X0g2"),g=n("4oqK"),w=n("U9PD"),P=n("qFEQ");function v(t,o){1&t&&(d.Qb(0,"div"),d.mc(1," Input is to large, limit is 5 "),d.Pb())}function I(t,o){if(1&t&&(d.Qb(0,"app-form-field"),d.Qb(1,"label",5),d.mc(2),d.Pb(),d.Mb(3,"input",6),d.kc(4,v,2,0,"div",4),d.Pb()),2&t){const t=o.$implicit,n=o.index;d.Ab(1),d.ec("for","position_"+n+1),d.Ab(1),d.oc("Position ",n+1,""),d.Ab(1),d.ec("formControl",t),d.Ab(1),d.ec("ngIf",t.hasError("maxlength"))}}function y(t,o){1&t&&(d.Qb(0,"div"),d.Qb(1,"h3"),d.mc(2,"No Words matching"),d.Pb(),d.Pb())}function k(t,o){if(1&t&&(d.Qb(0,"div"),d.Qb(1,"h3"),d.mc(2," The word is: "),d.Qb(3,"span",7),d.mc(4),d.Pb(),d.Pb(),d.Pb()),2&t){const t=d.Zb().ngIf;d.Ab(4),d.nc(t[0])}}function Q(t,o){if(1&t&&(d.Qb(0,"span"),d.mc(1),d.Pb()),2&t){const t=o.$implicit;d.Ab(1),d.oc(" ",t," ")}}function A(t,o){if(1&t&&(d.Qb(0,"div"),d.Qb(1,"h5"),d.mc(2,"Potential Words"),d.Pb(),d.Qb(3,"div",8),d.kc(4,Q,2,1,"span",3),d.Pb(),d.Pb()),2&t){const t=d.Zb().ngIf;d.Ab(4),d.ec("ngForOf",t)}}function F(t,o){if(1&t&&(d.Ob(0),d.kc(1,y,3,0,"div",4),d.kc(2,k,5,1,"div",4),d.kc(3,A,5,1,"div",4),d.Nb()),2&t){const t=o.ngIf;d.Ab(1),d.ec("ngIf",0===t.length),d.Ab(1),d.ec("ngIf",1===t.length),d.Ab(1),d.ec("ngIf",t.length>1)}}const j=[{path:"",component:(()=>{class t{constructor(t,o){this.fb=t,this.passwordsService=o}ngOnInit(){this.form=this.buildForm(),this.words$=this.observeWords(this.form)}getPasswordControls(){return this.form.get("positions").controls}buildForm(){const t=new Array(5).fill(null).map(()=>this.fb.control("",[s.o.maxLength(5),s.o.minLength(5)]));return this.fb.group({positions:this.fb.array(t)})}observeWords(t){return t.get("positions").valueChanges.pipe(Object(l.a)(t=>t.map(t=>t.split(""))),Object(l.a)(t=>(p.a.log("test: ",this.passwordsService.isEmpty(t),t),this.passwordsService.getPossiblePasswords(t))))}}return t.\u0275fac=function(o){return new(o||t)(d.Lb(s.b),d.Lb(u))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-passwords"]],decls:7,vars:5,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Passwords"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"for"],["placeholder","Enter the 5 letters for this position","type","text","appFormInput","","minlength","5","maxlength","5",3,"formControl"],[2,"text-decoration","underline"],["fxLayout","column"]],template:function(t,o){1&t&&(d.Qb(0,"form",0),d.Qb(1,"div",1),d.Mb(2,"app-manual-link",2),d.Pb(),d.Qb(3,"app-middle-layout"),d.kc(4,I,5,4,"app-form-field",3),d.kc(5,F,4,3,"ng-container",4),d.ac(6,"async"),d.Pb(),d.Pb()),2&t&&(d.ec("formGroup",o.form),d.Ab(4),d.ec("ngForOf",o.getPasswordControls()),d.Ab(1),d.ec("ngIf",d.bc(6,3,o.words$)))},directives:[s.q,s.j,s.e,h.a,m.a,e.j,e.k,g.a,s.a,w.a,s.h,s.g,s.i,s.c,P.c],pipes:[e.b],encapsulation:2,changeDetection:0}),t})()}];let x=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(o){return new(o||t)},imports:[[b.c.forChild(j)],b.c]}),t})();n.d(o,"PasswordsModule",(function(){return C}));let C=(()=>{class t{}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(o){return new(o||t)},imports:[[e.c,x,s.f,r.a,s.m,a.a,i.a,c.a]]}),t})()}}]);