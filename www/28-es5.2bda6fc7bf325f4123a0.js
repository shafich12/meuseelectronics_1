!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{dFHt:function(e,i,o){"use strict";o.r(i),o.d(i,"ProductPageModule",(function(){return v}));var r=o("ofXK"),c=o("3Pt+"),s=o("TEn/"),a=o("tyNb"),d=o("fXoL"),b=o("S3Px"),l=o("fwsW"),u=o("c14U");function p(t,n){if(1&t&&(d.Nb(0,"ion-slide",17),d.Jb(1,"img",9),d.Mb()),2&t){var e=n.$implicit;d.xb(1),d.cc("src",e.src,d.kc)}}var g,m,f,h=function(t){return["/checkout",t]},M=[{path:"",component:(g=function(){function e(n,i,o,r,c){t(this,e),this.toast=n,this.productService=i,this.activatedRoute=o,this.storage=r,this.cartService=c,this.id="",this.description="",this.images=[{image:"/assets/img/air.png"},{image:"/assets/img/retro.png"},{image:"/assets/img/air2.png"}],this.sizes=[{number:41,selected:!1},{number:42,selected:!1},{number:43,selected:!0},{number:45,selected:!1},{number:46,selected:!1},{number:46.5,selected:!1}],this.slideOpts={spaceBetween:10,slidesPerView:"auto",centeredSlides:!1,initialSlide:0,speed:500},this.product={}}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){this.id=this.activatedRoute.snapshot.paramMap.get("id")}},{key:"ionViewWillEnter",value:function(){var t=this;this.productService.getProduct(this.id).then((function(n){t.product=JSON.parse(n.data),t.description=t.product.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,"")}))}},{key:"addCart",value:function(t){this.cartService.addToCart(t)}}])&&n(i.prototype,o),r&&n(i,r),e}(),g.\u0275fac=function(t){return new(t||g)(d.Ib(s.U),d.Ib(b.a),d.Ib(a.a),d.Ib(l.a),d.Ib(u.a))},g.\u0275cmp=d.Cb({type:g,selectors:[["app-product"]],decls:27,vars:9,consts:[["mode","md",1,"ion-no-border","ion-padding"],["mode","md"],["slot","start"],["defaultHref","/tabs/tab1","mode","md"],[3,"fullscreen"],["Sclass","ion-padding-top","pager","true",1,"gallery"],["class","ion-margin-bottom",4,"ngFor","ngForOf"],[1,"ion-padding"],[1,"title"],[3,"src"],["lines","none"],["lines","none",1,"description"],[3,"innerHTML"],[1,"ion-align-items-center"],["size","3"],["size","9"],["fill","solid","size","large","color","dark","shape","round","expand","block",3,"routerLink"],[1,"ion-margin-bottom"]],template:function(t,n){1&t&&(d.Nb(0,"ion-header",0),d.Nb(1,"ion-toolbar",1),d.Nb(2,"ion-buttons",2),d.Jb(3,"ion-back-button",3),d.Mb(),d.Mb(),d.Mb(),d.Nb(4,"ion-content",4),d.Nb(5,"ion-slides",5),d.mc(6,p,2,1,"ion-slide",6),d.Mb(),d.Nb(7,"div",7),d.Nb(8,"div",8),d.Jb(9,"img",9),d.Nb(10,"h1"),d.nc(11),d.Mb(),d.Nb(12,"h2"),d.nc(13),d.Mb(),d.Mb(),d.Nb(14,"ion-item",10),d.Nb(15,"p"),d.Nb(16,"strong"),d.nc(17,"Description"),d.Mb(),d.Mb(),d.Mb(),d.Nb(18,"ion-item",11),d.Jb(19,"div",12),d.Mb(),d.Mb(),d.Mb(),d.Nb(20,"ion-footer",7),d.Nb(21,"ion-grid"),d.Nb(22,"ion-row",13),d.Jb(23,"ion-col",14),d.Nb(24,"ion-col",15),d.Nb(25,"ion-button",16),d.nc(26,"Buy Now"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&t&&(d.xb(4),d.cc("fullscreen",!0),d.xb(2),d.cc("ngForOf",n.product.images),d.xb(3),d.cc("src",n.product.logo,d.kc),d.xb(2),d.oc(n.product.name),d.xb(2),d.pc("$",n.product.price,""),d.xb(6),d.cc("innerHTML",n.product.description,d.jc),d.xb(6),d.cc("routerLink",d.fc(7,h,n.product.id)))},directives:[s.p,s.M,s.h,s.e,s.f,s.m,s.G,r.i,s.t,s.n,s.o,s.C,s.l,s.g,s.R,a.h,s.F],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-medium)}ion-header[_ngcontent-%COMP%], ion-slides.gallery[_ngcontent-%COMP%]{background:var(--ion-color-medium)}ion-slides.gallery[_ngcontent-%COMP%]{border-bottom-left-radius:50px;border-bottom-right-radius:50px}.title[_ngcontent-%COMP%]{text-align:center;margin-top:50px;margin-bottom:30px}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:34px}.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;font-weight:500!important}.title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:50px}.size-slide[_ngcontent-%COMP%]{max-width:40px;height:40px;border-radius:10px;margin:auto;font-size:24px;font-family:Montserrat}ion-item.description[_ngcontent-%COMP%]{font-size:12px;color:var(--ion-color-gray);line-height:18px}ion-footer[_ngcontent-%COMP%]{background:#fff}"]}),g)}],x=((f=function n(){t(this,n)}).\u0275mod=d.Gb({type:f}),f.\u0275inj=d.Fb({factory:function(t){return new(t||f)},imports:[[a.i.forChild(M)],a.i]}),f),v=((m=function n(){t(this,n)}).\u0275mod=d.Gb({type:m}),m.\u0275inj=d.Fb({factory:function(t){return new(t||m)},imports:[[r.b,c.d,s.N,x]]}),m)}}])}();