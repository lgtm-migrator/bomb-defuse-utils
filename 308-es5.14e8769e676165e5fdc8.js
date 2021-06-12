!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(self.webpackChunkbomb_defuse_utils=self.webpackChunkbomb_defuse_utils||[]).push([[308],{308:function(t,o,r){"use strict";r.r(o),r.d(o,{PasswordsModule:function(){return Y}});var i=r(1116),s=r(7154),u=r(1462),a=r(8837),f=r(7214),c=r(1662),l=r(8193),p=r(9996),g=r(7710),d=r(5614),h=["about","after","again","below","could","every","first","found","great","house","large","learn","never","other","place","plant","point","right","small","sound","spell","still","study","their","there","these","thing","think","three","water","where","which","world","would","write"],v=function(){var t=function(){function t(){n(this,t)}return e(t,[{key:"getPossiblePasswords",value:function(n){var t=this;return h.filter(function(e){return t.isPossiblePassword(e,n)})}},{key:"isEmpty",value:function(n){return!n||n.every(function(n){return n&&0===n.length})}},{key:"isPossiblePassword",value:function(n,t){return n.split("").every(function(n,e){return!t[e]||t[e].includes(n)})}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),m=r(2102),w=r(5887),Z=r(355),y=r(8718),b=r(6225);function x(n,t){1&n&&(d.TgZ(0,"div"),d._uU(1," Input is to large, limit is 5 "),d.qZA())}function k(n,t){if(1&n&&(d.TgZ(0,"app-form-field"),d.TgZ(1,"label",5),d._uU(2),d.qZA(),d._UZ(3,"input",6),d.YNc(4,x,2,0,"div",4),d.qZA()),2&n){var e=t.$implicit,o=t.index;d.xp6(1),d.Q6J("for","position_"+o+1),d.xp6(1),d.hij("Position ",o+1,""),d.xp6(1),d.Q6J("formControl",e),d.xp6(1),d.Q6J("ngIf",e.hasError("maxlength"))}}function A(n,t){1&n&&(d.TgZ(0,"div"),d.TgZ(1,"h3"),d._uU(2,"No Words matching"),d.qZA(),d.qZA())}function q(n,t){if(1&n&&(d.TgZ(0,"div"),d.TgZ(1,"h3"),d._uU(2," The word is: "),d.TgZ(3,"span",7),d._uU(4),d.qZA(),d.qZA(),d.qZA()),2&n){var e=d.oxw().ngIf;d.xp6(4),d.Oqu(e[0])}}function I(n,t){if(1&n&&(d.TgZ(0,"span"),d._uU(1),d.qZA()),2&n){var e=t.$implicit;d.xp6(1),d.hij(" ",e," ")}}function T(n,t){if(1&n&&(d.TgZ(0,"div"),d.TgZ(1,"h5"),d._uU(2,"Potential Words"),d.qZA(),d.TgZ(3,"div",8),d.YNc(4,I,2,1,"span",3),d.qZA(),d.qZA()),2&n){var e=d.oxw().ngIf;d.xp6(4),d.Q6J("ngForOf",e)}}function J(n,t){if(1&n&&(d.ynx(0),d.YNc(1,A,3,0,"div",4),d.YNc(2,q,5,1,"div",4),d.YNc(3,T,5,1,"div",4),d.BQk()),2&n){var e=t.ngIf;d.xp6(1),d.Q6J("ngIf",0===e.length),d.xp6(1),d.Q6J("ngIf",1===e.length),d.xp6(1),d.Q6J("ngIf",e.length>1)}}var P,_,U=[{path:"",component:(P=function(){function t(e,o){n(this,t),this.fb=e,this.passwordsService=o}return e(t,[{key:"ngOnInit",value:function(){this.form=this.buildForm(),this.words$=this.observeWords(this.form)}},{key:"getPasswordControls",value:function(){return this.form.get("positions").controls}},{key:"buildForm",value:function(){var n=this,t=new Array(5).fill(null).map(function(){return n.fb.control("",[u.kI.maxLength(5),u.kI.minLength(5)])});return this.fb.group({positions:this.fb.array(t)})}},{key:"observeWords",value:function(n){var t=this;return n.get("positions").valueChanges.pipe((0,p.U)(function(n){return n.map(function(n){return n.split("")})}),(0,p.U)(function(n){return g.k.log("test: ",t.passwordsService.isEmpty(n),n),t.passwordsService.getPossiblePasswords(n)}))}}]),t}(),P.\u0275fac=function(n){return new(n||P)(d.Y36(u.qu),d.Y36(v))},P.\u0275cmp=d.Xpm({type:P,selectors:[["app-passwords"]],decls:7,vars:5,consts:[["novalidate","",3,"formGroup"],[1,"margin"],["linkId","Passwords"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"for"],["placeholder","Enter the 5 letters for this position","type","text","appFormInput","","minlength","5","maxlength","5",3,"formControl"],[2,"text-decoration","underline"],["fxLayout","column"]],template:function(n,t){1&n&&(d.TgZ(0,"form",0),d.TgZ(1,"div",1),d._UZ(2,"app-manual-link",2),d.qZA(),d.TgZ(3,"app-middle-layout"),d.YNc(4,k,5,4,"app-form-field",3),d.YNc(5,J,4,3,"ng-container",4),d.ALo(6,"async"),d.qZA(),d.qZA()),2&n&&(d.Q6J("formGroup",t.form),d.xp6(4),d.Q6J("ngForOf",t.getPasswordControls()),d.xp6(1),d.Q6J("ngIf",d.lcZ(6,3,t.words$)))},directives:[u._Y,u.JL,u.sg,m.I,w.C,i.sg,i.O5,Z.h,u.Fj,y.v,u.wO,u.nD,u.JJ,u.oH,b.xw],pipes:[i.Ov],encapsulation:2,changeDetection:0}),P)}],Q=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[l.Bz.forChild(U)],l.Bz]}),t}(),Y=((_=function t(){n(this,t)}).\u0275fac=function(n){return new(n||_)},_.\u0275mod=d.oAB({type:_}),_.\u0275inj=d.cJS({imports:[[i.ez,Q,u.u5,s.o9,u.UX,c.u,a.k,f.y]]}),_)}}])}();