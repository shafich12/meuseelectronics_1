!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jD90:function(e,t,o){"use strict";o.r(t),o.d(t,"ListPageModule",(function(){return x}));var r=o("ofXK"),a=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),b=o("fXoL"),m=o("S3Px"),p=function(n){return["/mosaic",n]};function u(n,i){if(1&n&&(b.Lb(0),b.Nb(1,"ion-item",8),b.Nb(2,"ion-thumbnail",9),b.Jb(3,"img",10),b.Mb(),b.Nb(4,"ion-label"),b.Nb(5,"h2"),b.nc(6),b.Mb(),b.Mb(),b.Mb(),b.Kb()),2&n){var e=i.$implicit;b.xb(1),b.cc("routerLink",b.fc(3,p,e.id)),b.xb(2),b.cc("src",e.image.src,b.kc),b.xb(3),b.oc(e.name)}}var g,d,f,l=[{path:"",component:(g=function(){function e(i){n(this,e),this.productService=i,this.categories=[],this.products=[{name:"Air Pro",image:"/assets/img/air.png",price:85},{name:"Air Retro",image:"/assets/img/retro.png",price:125},{name:"Green",image:"/assets/img/adidas2.png",price:96},{name:"Dark Mode",image:"/assets/img/air2.png",price:110},{name:"White Shine",image:"/assets/img/air3.png",price:145},{name:"Fuel Fusion",image:"/assets/img/air4.png",price:69}]}var t,o,r;return t=e,(o=[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var n=this;this.productService.getCategories().then((function(i){n.categories=JSON.parse(i.data)}))}}])&&i(t.prototype,o),r&&i(t,r),e}(),g.\u0275fac=function(n){return new(n||g)(b.Ib(m.a))},g.\u0275cmp=b.Cb({type:g,selectors:[["app-list"]],decls:9,vars:2,consts:[["mode","md",1,"ion-no-border","ion-padding"],["mode","md"],["slot","end"],[1,"ion-padding",3,"fullscreen"],["lines","none",1,"ion-margin-bottom"],[1,"ion-no-padding","ion-no-margin"],["fill","clear","slot","end","color","dark","mode","ios"],[4,"ngFor","ngForOf"],["lines","none","detail","false",1,"product","ion-margin-bottom",3,"routerLink"],["slot","start"],[3,"src"]],template:function(n,i){1&n&&(b.Nb(0,"ion-header",0),b.Nb(1,"ion-toolbar",1),b.Jb(2,"ion-buttons",2),b.Mb(),b.Mb(),b.Nb(3,"ion-content",3),b.Nb(4,"ion-item",4),b.Nb(5,"h1",5),b.nc(6,"All Categories"),b.Mb(),b.Jb(7,"ion-button",6),b.Mb(),b.mc(8,u,7,5,"ng-container",7),b.Mb()),2&n&&(b.xb(3),b.cc("fullscreen",!0),b.xb(5),b.cc("ngForOf",i.categories))},directives:[c.p,c.M,c.h,c.m,c.t,c.g,r.i,c.R,s.h,c.L,c.x],styles:["ion-header[_ngcontent-%COMP%]{background:#fff}.product[_ngcontent-%COMP%]{box-shadow:none}.product[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{background:var(--ion-color-medium);border-radius:25px;min-width:130px;min-height:90px;padding:5px}.numberCircle[_ngcontent-%COMP%]{border-radius:50%;width:30px;height:30px;padding:7px;background:#000;color:#fff!important;text-align:center;font-weight:700!important;font-size:12px;margin-left:12px;font-family:Montserrat,sans-serif!important}"]}),g)}],h=((f=function i(){n(this,i)}).\u0275mod=b.Gb({type:f}),f.\u0275inj=b.Fb({factory:function(n){return new(n||f)},imports:[[s.i.forChild(l)],s.i]}),f),x=((d=function i(){n(this,i)}).\u0275mod=b.Gb({type:d}),d.\u0275inj=b.Fb({factory:function(n){return new(n||d)},imports:[[r.b,a.d,c.N,h]]}),d)}}])}();