(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Fzqc:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t("Ip0R"),r=t("CcnG"),a=new r.p("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(r.U)(e.d)}}),o=function(){function n(n){if(this.value="ltr",this.change=new r.m,n){var l=(n.body?n.body.dir:null)||(n.documentElement?n.documentElement.dir:null);this.value="ltr"===l||"rtl"===l?l:"ltr"}}return n.prototype.ngOnDestroy=function(){this.change.complete()},n.ngInjectableDef=Object(r.R)({factory:function(){return new n(Object(r.U)(a,8))},token:n,providedIn:"root"}),n}()},qAlS:function(n,l,t){"use strict";var e=t("CcnG"),r=(t("n6gG"),t("K9Ia"),t("F/XL")),a=(t("6blF"),t("bne5")),o=t("mrSG"),u=(t("h9Dq"),t("CS9Q"),t("p0ib")),i=(t("ad02"),t("T1DM")),c=t("Ehmk"),s=t("eihs"),d=t("MGBS"),p=t("zotm"),b=function(){function n(n){this.durationSelector=n}return n.prototype.call=function(n,l){return l.subscribe(new g(n,this.durationSelector))},n}(),g=function(n){function l(l,t){var e=n.call(this,l)||this;return e.durationSelector=t,e.hasValue=!1,e}return o.c(l,n),l.prototype._next=function(n){if(this.value=n,this.hasValue=!0,!this.throttled){var l=Object(c.a)(this.durationSelector)(n);if(l===s.a)this.destination.error(s.a.e);else{var t=Object(p.a)(this,l);!t||t.closed?this.clearThrottle():this.add(this.throttled=t)}}},l.prototype.clearThrottle=function(){var n=this.value,l=this.hasValue,t=this.throttled;t&&(this.remove(t),this.throttled=null,t.unsubscribe()),l&&(this.value=null,this.hasValue=!1,this.destination.next(n))},l.prototype.notifyNext=function(n,l,t,e){this.clearThrottle()},l.prototype.notifyComplete=function(){this.clearThrottle()},l}(d.a),f=t("gI3B");t("VnD/"),t("ny24"),t("p0Sj"),t("FFOo"),t("15JJ"),t("pugT"),t("G5J1"),t("8g8A"),t("uMaO");var m=t("dWZg");t.d(l,"a",function(){return h});var h=function(){function n(n,l){var t=this;this._platform=n,l.runOutsideAngular(function(){t._change=n.isBrowser?Object(u.a)(Object(a.a)(window,"resize"),Object(a.a)(window,"orientationchange")):Object(r.a)(),t._invalidateCache=t.change().subscribe(function(){return t._updateViewportSize()})})}return n.prototype.ngOnDestroy=function(){this._invalidateCache.unsubscribe()},n.prototype.getViewportSize=function(){this._viewportSize||this._updateViewportSize();var n={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),n},n.prototype.getViewportRect=function(){var n=this.getViewportScrollPosition(),l=this.getViewportSize(),t=l.width,e=l.height;return{top:n.top,left:n.left,bottom:n.top+e,right:n.left+t,height:e,width:t}},n.prototype.getViewportScrollPosition=function(){if(!this._platform.isBrowser)return{top:0,left:0};var n=document.documentElement,l=n.getBoundingClientRect();return{top:-l.top||document.body.scrollTop||window.scrollY||n.scrollTop||0,left:-l.left||document.body.scrollLeft||window.scrollX||n.scrollLeft||0}},n.prototype.change=function(n){return void 0===n&&(n=20),n>0?this._change.pipe((l=n,void 0===t&&(t=i.a),e=function(){return Object(f.a)(l,t)},function(n){return n.lift(new b(e))})):this._change;var l,t,e},n.prototype._updateViewportSize=function(){this._viewportSize=this._platform.isBrowser?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0}},n.ngInjectableDef=Object(e.R)({factory:function(){return new n(Object(e.U)(m.a),Object(e.U)(e.z))},token:n,providedIn:"root"}),n}()},rZCR:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),r=function(){return function(){}}(),a=t("pMnS"),o=t("ZYCi"),u=t("g1xr"),i=t("ny24"),c=t("P6uZ"),s=t("K9Ia"),d=function(){function n(n,l){this._gameService=n,this._router=l,this._destroyed=new s.a,this._gameService.enableLogging(),this._gameService.game.reset()}return n.prototype.ngOnInit=function(){var n=this;this._gameService.game.gameOverObservable.pipe(Object(i.a)(this._destroyed),Object(c.a)()).subscribe(function(){n._router.navigate(["/game/gameover"])})},n.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete()},n}(),p=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;height:100%}"]],data:{}});function b(n){return e.Fb(0,[(n()(),e.nb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.mb(1,212992,null,0,o.n,[o.b,e.N,e.j,[8,null],e.h],null,null)],function(n,l){n(l,1,0)},null)}function g(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-playing",[],null,null,null,b,p)),e.mb(1,245760,null,0,d,[u.a,o.k],null,null)],function(n,l){n(l,1,0)},null)}var f=e.jb("skipbo-playing",d,g,{},{},[]),m=t("09nc"),h=t("HTHH"),k=t("8yAo"),y=t("cM9/"),w=t("Ip0R"),v=function(){return function(){}}(),_=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;text-align:center}"]],data:{}});function x(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,2,"h1",[["skipbo-headline",""]],null,null,null,m.b,m.a)),e.mb(1,114688,null,0,h.a,[],null,null),(n()(),e.Db(-1,0,["Prepare"])),(n()(),e.nb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Db(-1,null,["Add at least two players and a maximum of 5 players"])),(n()(),e.nb(5,0,null,null,3,"a",[["routerLink","/game/play"],["skipbo-button",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.wb(n,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},k.b,k.a)),e.mb(6,114688,null,0,y.a,[],null,null),e.mb(7,671744,null,0,o.l,[o.k,o.a,w.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Db(-1,0,["Start"]))],function(n,l){n(l,1,0),n(l,6,0),n(l,7,0,"/game/play")},function(n,l){n(l,5,0,e.wb(l,7).target,e.wb(l,7).href)})}function C(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-start",[],null,null,null,x,_)),e.mb(1,49152,null,0,v,[],null,null)],null,null)}var O=e.jb("skipbo-start",v,C,{},{},[]),P=t("pRWA"),D=t("9Bt9"),M=t("qAlS"),S=t("Fzqc"),F=t("/d5H"),z=function(){function n(){}return n.prototype.transform=function(n){var l={};return l[Symbol.iterator]=function(){var l;return function(n,l){var t,e,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,e&&(r=2&a[0]?e.return:a[0]?e.throw||((r=e.return)&&r.call(e),0):e.next)&&!(r=r.call(e,a[1])).done)return r;switch(e=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,e=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=l.call(n,o)}catch(u){a=[6,u],e=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}(this,function(t){switch(t.label){case 0:l=0,t.label=1;case 1:return l<n?[4,++l]:[3,3];case 2:return t.sent(),[3,1];case 3:return[2]}})},l},n}(),I=t("S1kB"),T=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.handcards[_ngcontent-%COMP%]{display:flex;position:relative}[_nghost-%COMP%]     .cdk-drag-placeholder{outline:#ff69b4 solid 5px;width:20%}.handcard[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){width:20%}@-webkit-keyframes rotate{0%{-webkit-transform:translate(0,0) rotateZ(0);transform:translate(0,0) rotateZ(0)}100%{-webkit-transform:translate(0,0) rotateZ(360deg);transform:translate(0,0) rotateZ(360deg)}}@keyframes rotate{0%{-webkit-transform:translate(0,0) rotateZ(0);transform:translate(0,0) rotateZ(0)}100%{-webkit-transform:translate(0,0) rotateZ(360deg);transform:translate(0,0) rotateZ(360deg)}}"]],data:{}});function Z(n){return e.Fb(0,[(n()(),e.nb(0,16777216,null,null,6,"skipbo-card",[["cdkDrag",""],["class","handcard cdk-drag"],["revealed",""]],[[2,"cdk-drag-dragging",null]],null,null,P.b,P.a)),e.Ab(6144,null,D.h,null,[D.c]),e.mb(2,4341760,[[2,4]],3,D.c,[e.k,[3,D.b],w.d,e.z,e.N,M.a,D.g,D.a,[2,S.a]],{data:[0,"data"]},null),e.Bb(603979776,3,{_handles:1}),e.Bb(335544320,4,{_previewTemplate:0}),e.Bb(335544320,5,{_placeholderTemplate:0}),e.mb(6,114688,null,0,F.a,[],{value:[0,"value"],revealed:[1,"revealed"]},null),(n()(),e.eb(0,null,null,0))],function(n,l){var t=l.component;n(l,2,0,t.getCard(l.context.$implicit-1)),n(l,6,0,t.getCard(l.context.$implicit-1),"")},function(n,l){n(l,0,0,e.wb(l,2)._hasStartedDragging&&e.wb(l,2)._isDragging())})}function j(n){return e.Fb(0,[e.yb(0,z,[]),e.Bb(402653184,1,{_dropzone:0}),(n()(),e.nb(2,0,null,null,6,"div",[["cdkDropList",""],["cdkDropListOrientation","horizontal"],["class","handcards cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-dragging",null]],null,null,null,null)),e.Ab(6144,null,D.b,null,[D.d]),e.mb(4,212992,[[1,4],["dropzone",4]],1,D.d,[e.k,D.g,e.h,[2,S.a],[2,D.e]],{connectedTo:[0,"connectedTo"],data:[1,"data"],orientation:[2,"orientation"],enterPredicate:[3,"enterPredicate"]},null),e.Bb(603979776,2,{_draggables:1}),(n()(),e.eb(16777216,null,null,2,null,Z)),e.mb(7,278528,null,0,w.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),e.zb(8,1)],function(n,l){var t=l.component;n(l,4,0,t.canDragItemsToZones,"hand","horizontal",t.enterPredicate);var r=e.Eb(l,7,0,n(l,8,0,e.wb(l,0),t.handSize));n(l,7,0,r)},function(n,l){n(l,2,0,e.wb(l,4).id,e.wb(l,4)._dragging)})}var Y=t("pR3x"),B=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;max-width:200px}.slot[_ngcontent-%COMP%]{background-image:url(/skipbo-angular/assets/placeholder.png);padding-bottom:147.36842105%;position:relative;background-size:cover}.cards[_ngcontent-%COMP%]{position:absolute;left:1.78571429%;right:1.78571429%;bottom:1.78571429%;height:100%}"]],data:{}});function L(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,2,"div",[["class","slot"]],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,1,"div",[["class","cards"]],null,null,null,null,null)),e.vb(null,0)],null,null)}var N=t("MzGq"),G=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.stack[_ngcontent-%COMP%]{padding-bottom:150.4%;height:0;position:relative}.stack__card[_ngcontent-%COMP%], [_nghost-%COMP%]     .cdk-drag-placeholder{position:absolute;bottom:0;width:100%}.stack__card[_ngcontent-%COMP%]:nth-child(1){-webkit-transform:translateY(-3px);transform:translateY(-3px)}.stack__card[_ngcontent-%COMP%]:nth-child(2){-webkit-transform:translateY(-6px);transform:translateY(-6px)}.stack__card[_ngcontent-%COMP%]:nth-child(3){-webkit-transform:translateY(-9px);transform:translateY(-9px)}.stack__card[_ngcontent-%COMP%]:nth-child(4){-webkit-transform:translateY(-12px);transform:translateY(-12px)}.stack__card[_ngcontent-%COMP%]:nth-child(5){-webkit-transform:translateY(-15px);transform:translateY(-15px)}.stack__card[_ngcontent-%COMP%]:nth-child(6){-webkit-transform:translateY(-18px);transform:translateY(-18px)}.stack__card[_ngcontent-%COMP%]:nth-child(7){-webkit-transform:translateY(-21px);transform:translateY(-21px)}.stack__card[_ngcontent-%COMP%]:nth-child(8){-webkit-transform:translateY(-24px);transform:translateY(-24px)}.stack__card[_ngcontent-%COMP%]:nth-child(9){-webkit-transform:translateY(-27px);transform:translateY(-27px)}.stack__card[_ngcontent-%COMP%]:nth-child(10){-webkit-transform:translateY(-30px);transform:translateY(-30px)}.stack__card[_ngcontent-%COMP%]:nth-child(11){-webkit-transform:translateY(-33px);transform:translateY(-33px)}.stack__card[_ngcontent-%COMP%]:nth-child(12){-webkit-transform:translateY(-36px);transform:translateY(-36px)}[_nghost-%COMP%]     .cdk-drag-placeholder{z-index:1}"]],data:{}});function R(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-card",[["class","stack__card"]],null,null,null,P.b,P.a)),e.mb(1,114688,null,0,F.a,[],null,null)],function(n,l){n(l,1,0)},null)}function A(n){return e.Fb(0,[(n()(),e.nb(0,16777216,null,null,6,"skipbo-card",[["cdkDrag",""],["class","stack__card cdk-drag"]],[[2,"cdk-drag-dragging",null]],null,null,P.b,P.a)),e.Ab(6144,null,D.h,null,[D.c]),e.mb(2,4341760,[[2,4]],3,D.c,[e.k,[3,D.b],w.d,e.z,e.N,M.a,D.g,D.a,[2,S.a]],{data:[0,"data"]},null),e.Bb(603979776,3,{_handles:1}),e.Bb(335544320,4,{_previewTemplate:0}),e.Bb(335544320,5,{_placeholderTemplate:0}),e.mb(6,114688,null,0,F.a,[],{value:[0,"value"],revealed:[1,"revealed"]},null),(n()(),e.eb(0,null,null,0))],function(n,l){var t=l.component;n(l,2,0,t.topCard),n(l,6,0,t.topCard,t.autoRevealCard)},function(n,l){n(l,0,0,e.wb(l,2)._hasStartedDragging&&e.wb(l,2)._isDragging())})}function K(n){return e.Fb(0,[e.yb(0,z,[]),e.Bb(402653184,1,{_dropzone:0}),(n()(),e.nb(2,0,null,null,11,"skipbo-card-slot",[],null,null,null,L,B)),e.mb(3,114688,null,0,Y.a,[],null,null),(n()(),e.nb(4,0,null,0,9,"div",[["cdkDropList",""],["cdkDropListOrientation","horizontal"],["class","cdkDrop cdk-drop-list"]],[[8,"id",0],[2,"cdk-drop-list-dragging",null]],[[null,"cdkDropListDropped"]],function(n,l,t){var e=!0;return"cdkDropListDropped"===l&&(e=!1!==n.component.itemDropped(t)&&e),e},null,null)),e.Ab(6144,null,D.b,null,[D.d]),e.mb(6,212992,[[1,4]],1,D.d,[e.k,D.g,e.h,[2,S.a],[2,D.e]],{connectedTo:[0,"connectedTo"],data:[1,"data"],orientation:[2,"orientation"],enterPredicate:[3,"enterPredicate"]},{dropped:"cdkDropListDropped"}),e.Bb(603979776,2,{_draggables:1}),(n()(),e.nb(8,0,null,null,5,"div",[["class","stack"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,2,null,R)),e.mb(10,278528,null,0,w.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),e.zb(11,1),(n()(),e.eb(16777216,null,null,1,null,A)),e.mb(13,16384,null,0,w.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0),n(l,6,0,t.canDragItemsToZones,t.sourceName,"horizontal",t.enterPredicate);var r=e.Eb(l,10,0,n(l,11,0,e.wb(l,0),t._stackCardsCount));n(l,10,0,r),n(l,13,0,!t.empty)},function(n,l){n(l,4,0,e.wb(l,6).id,e.wb(l,6)._dragging)})}var V=t("yaRM"),E=e.lb({encapsulation:0,styles:[[".group-holder[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:10px}"]],data:{}});function H(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,2,"skipbo-pile",[],null,[[null,"cardDropped"]],function(n,l,t){var e=!0;return"cardDropped"===l&&(e=!1!==n.component.handleCardDropped(t,n.context.$implicit)&&e),e},K,G)),e.mb(1,638976,[[1,4]],0,N.a,[],{allowDrop:[0,"allowDrop"],sourceName:[1,"sourceName"],allowedSources:[2,"allowedSources"],autoRevealCard:[3,"autoRevealCard"],cards:[4,"cards"]},{cardDropped:"cardDropped"}),e.yb(131072,w.b,[e.h])],function(n,l){var t=l.component;n(l,1,0,t.allowDrop,t.group.name,t.allowedSources,!0,e.Eb(l,1,4,e.wb(l,2).transform(l.context.$implicit.cards)))},null)}function J(n){return e.Fb(0,[e.Bb(671088640,1,{piles:1}),(n()(),e.nb(1,0,null,null,2,"div",[["class","group-holder"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,H)),e.mb(3,278528,null,0,w.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,3,0,l.component.group)},null)}var q=t("7vXN"),U=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100%}.drag-container[_ngcontent-%COMP%]{outline:red solid 5px}"]],data:{}});function $(n){return e.Fb(0,[e.Bb(402653184,1,{piles:0}),(n()(),e.nb(1,0,null,null,2,"skipbo-pile-group",[],null,[[null,"cardDropped"]],function(n,l,t){var e=!0;return"cardDropped"===l&&(e=!1!==n.component.handleCardDroppedInPile(t)&&e),e},J,E)),e.mb(2,4308992,[[1,4],["piles",4]],0,V.a,[],{canDragItemsToZones:[0,"canDragItemsToZones"],allowedSources:[1,"allowedSources"],group:[2,"group"]},{cardDropped:"cardDropped"}),e.xb(3,1)],function(n,l){var t=l.component,e=t.canDragItemsToZones,r=n(l,3,0,"hand");n(l,2,0,e,r,t.group)},null)}var Q=t("7J9o"),W=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;position:relative}.cards[_ngcontent-%COMP%]{z-index:2;position:relative}.counter[_ngcontent-%COMP%]{z-index:1;position:absolute;left:50%;-webkit-transform:translate(-50%,-70%);transform:translate(-50%,-70%);font-family:'Lithos Pro';background:#f5a623;border-radius:50%;border:5px solid #ffd004;width:50px;height:50px;display:flex;align-items:center;justify-content:center;color:#fff;letter-spacing:-4px;font-size:24px}"]],data:{}});function X(n){return e.Fb(0,[e.Bb(402653184,1,{pile:0}),(n()(),e.nb(1,0,null,null,1,"div",[["class","counter"]],null,null,null,null,null)),(n()(),e.Db(2,null,[" ","\n"])),(n()(),e.nb(3,0,null,null,2,"div",[["class","cards"]],null,null,null,null,null)),(n()(),e.nb(4,0,null,null,1,"skipbo-pile",[["sourceName","stock"]],null,null,null,K,G)),e.mb(5,638976,[[1,4],["pile",4]],0,N.a,[],{sourceName:[0,"sourceName"],autoRevealCard:[1,"autoRevealCard"],canDragItemsToZones:[2,"canDragItemsToZones"],cards:[3,"cards"]},null)],function(n,l){var t=l.component;n(l,5,0,"stock",!0,t.canDragItemsToZones,t.cards)},function(n,l){n(l,2,0,l.component.cards.length)})}var nn=t("C2ZS"),ln=e.lb({encapsulation:0,styles:[['[_nghost-%COMP%]{display:grid;grid-template:"hand hand stock" ". . stock" "discard discard stock";grid-gap:10px;align-items:center;padding:20px;border:0 solid #000;box-shadow:0 2px 4px 2px rgba(0,0,0,.5);background-color:rgba(0,0,0,.2);position:relative}@media screen and (min-width:500px){[_nghost-%COMP%]{grid-template:"hand discard stock";grid-template-columns:minmax(200px,1fr) 2fr 1fr;grid-gap:50px}}.have-turn[_nghost-%COMP%]{outline:#ff69b4 solid 5px}.hand[_ngcontent-%COMP%]{grid-area:hand}.discard[_ngcontent-%COMP%]{justify-self:center;grid-area:discard}.stock[_ngcontent-%COMP%]{grid-area:stock}.name[_ngcontent-%COMP%]{position:absolute;top:0;left:0;color:#fff;font-family:\'Lithos Pro\';padding:5px}.debuglist[_ngcontent-%COMP%]{position:fixed;width:50vw;height:50vw;top:0;right:0}']],data:{}});function tn(n){return e.Fb(0,[e.Bb(402653184,1,{hand:0}),e.Bb(402653184,2,{stock:0}),e.Bb(402653184,3,{discard:0}),(n()(),e.nb(3,0,null,null,1,"span",[["class","name"]],null,null,null,null,null)),(n()(),e.Db(4,null,["",""])),(n()(),e.nb(5,0,null,null,1,"skipbo-hand",[["class","hand"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.tryHandCard()&&e),e},j,T)),e.mb(6,49152,[[1,4],["hand",4]],0,I.a,[],{cards:[0,"cards"],canDragItemsToZones:[1,"canDragItemsToZones"]},null),(n()(),e.nb(7,0,null,null,1,"skipbo-discard-group",[["class","discard"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.tryDiscardPile()&&e),e},$,U)),e.mb(8,49152,[[3,4],["discard",4]],0,q.a,[u.a],{group:[0,"group"],canDragItemsToZones:[1,"canDragItemsToZones"],allowDrop:[2,"allowDrop"]},null),(n()(),e.nb(9,0,null,null,1,"skipbo-stock-pile",[["class","stock"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.tryStockCard()&&e),e},X,W)),e.mb(10,114688,[[2,4],["stock",4]],0,Q.a,[],{cards:[0,"cards"],canDragItemsToZones:[1,"canDragItemsToZones"]},null)],function(n,l){var t=l.component;n(l,6,0,t.player.hand.cards,t.mergeZones(t.buildingZones,e.wb(l,8).getDropzones())),n(l,8,0,t.player.discardGroup,t.buildingZones,!0),n(l,10,0,t.player.stock.cards,t.buildingZones)},function(n,l){n(l,4,0,l.component.player.name)})}var en=t("lT7S"),rn=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.actions[_ngcontent-%COMP%]{display:flex}button[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:0}button[_ngcontent-%COMP%]:not(:first-child){margin-left:20px}"]],data:{}});function an(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,15,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Db(-1,null,["Skipbo with Automata"])),(n()(),e.nb(3,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),e.Db(-1,null,[" Use Drag & Drop (also mobile). Game Rules are enforced."])),(n()(),e.nb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.Db(-1,null,[" If you complete your turn (by discarding a card) the next player will be able to play. If it's a CPU Player Automata will play. "])),(n()(),e.nb(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Db(-1,null,[' You can use Automata yo complete your turn (Play my turn!) or click "Autorun" to let Automata play everyone (Cancel with click/touch or ESC) '])),(n()(),e.nb(9,0,null,null,6,"div",[["class","actions"]],null,null,null,null,null)),(n()(),e.nb(10,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.playCurrentRound()&&e),e},null,null)),(n()(),e.Db(-1,null,["Play my turn!"])),(n()(),e.nb(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.nb(13,0,null,null,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.autorun()&&e),e},null,null)),(n()(),e.Db(-1,null,["Autorun"])),(n()(),e.nb(15,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function on(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"button",[["class","opener"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggle()&&e),e},null,null)),(n()(),e.Db(1,null,[" ","\n"])),(n()(),e.eb(16777216,null,null,1,null,an)),e.mb(3,16384,null,0,w.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.component.opened)},function(n,l){n(l,1,0,l.component.opened?"Close":"Automata")})}var un=t("g+NE"),cn=t("/2wv"),sn=t("aJuA"),dn=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100%}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);grid-column-gap:minmax(5%,10px);-webkit-transform-origin:50%;transform-origin:50%;position:relative}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360);transform:rotate(360)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360);transform:rotate(360)}}.card[_ngcontent-%COMP%]:nth-child(1){-webkit-transform-origin:calc(90%) bottom;transform-origin:calc(90%) bottom;-webkit-transform:rotate(-7deg) translate(60%,20%);transform:rotate(-7deg) translate(60%,20%)}.card[_ngcontent-%COMP%]:nth-child(2){-webkit-transform-origin:calc(70%) bottom;transform-origin:calc(70%) bottom;-webkit-transform:rotate(-5deg) translate(30%,10%);transform:rotate(-5deg) translate(30%,10%)}.card[_ngcontent-%COMP%]:nth-child(3){-webkit-transform-origin:calc(50%) bottom;transform-origin:calc(50%) bottom;-webkit-transform:rotate(0);transform:rotate(0)}.card[_ngcontent-%COMP%]:nth-child(4){-webkit-transform-origin:calc(30%) bottom;transform-origin:calc(30%) bottom;-webkit-transform:rotate(10deg) translate(-30%,10%);transform:rotate(10deg) translate(-30%,10%)}.card[_ngcontent-%COMP%]:nth-child(5){-webkit-transform-origin:calc(10%) bottom;transform-origin:calc(10%) bottom;-webkit-transform:rotate(7deg) translate(-60%,10%);transform:rotate(7deg) translate(-60%,10%)}"]],data:{}});function pn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-card-image",[["class","card"],["face","back"]],null,null,null,un.b,un.a)),e.mb(1,49152,null,0,cn.a,[],{face:[0,"face"]},null)],function(n,l){n(l,1,0,"back")},null)}function bn(n){return e.Fb(0,[e.yb(0,z,[]),(n()(),e.nb(1,0,null,null,3,"div",[["class","cards"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,2,null,pn)),e.mb(3,278528,null,0,w.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),e.zb(4,1)],function(n,l){var t=l.component,r=e.Eb(l,3,0,n(l,4,0,e.wb(l,0),t.count));n(l,3,0,r)},null)}var gn=t("18QQ"),fn=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;position:relative;padding:50px 10px 10px;border-radius:10px;min-width:100px;max-width:300px;width:100%;height:150px;border:3px solid transparent;box-shadow:0 2px 4px 2px rgba(0,0,0,.5);background-color:rgba(0,0,0,.1)}.have-turn[_nghost-%COMP%]{border:3px solid #ff69b4}.name[_ngcontent-%COMP%]{font-family:'Lithos Pro';color:#fff;position:absolute;top:0;left:0;padding:5px}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr;grid-column-gap:40px;align-items:center;height:100%}.deck[_ngcontent-%COMP%]{margin-right:40px}.hand[_ngcontent-%COMP%]{width:150px;position:absolute;top:5px;right:0}"]],data:{}});function mn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"span",[["class","name"]],null,null,null,null,null)),(n()(),e.Db(1,null,["",""])),(n()(),e.nb(2,0,null,null,4,"div",[["class","cards"]],null,null,null,null,null)),(n()(),e.nb(3,0,null,null,1,"skipbo-stock-pile",[["class","stock"]],null,null,null,X,W)),e.mb(4,114688,null,0,Q.a,[],{cards:[0,"cards"]},null),(n()(),e.nb(5,0,null,null,1,"skipbo-pile-group",[["class","discard"]],null,null,null,J,E)),e.mb(6,4308992,null,0,V.a,[],{allowDrop:[0,"allowDrop"],group:[1,"group"]},null),(n()(),e.nb(7,0,null,null,1,"skipbo-hidden-hand",[["class","hand"]],null,null,null,bn,dn)),e.mb(8,114688,null,0,sn.a,[],{count:[0,"count"]},null)],function(n,l){var t=l.component;n(l,4,0,t.player.stock.cards),n(l,6,0,!1,t.player.discardGroup),n(l,8,0,t.player.hand.count)},function(n,l){n(l,1,0,l.component.player.name)})}var hn=t("gV5e"),kn=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;justify-content:center;pointer-events:none}.player[_ngcontent-%COMP%]:not(:last-child){margin-right:30px}"]],data:{}});function yn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-opponent-player",[["class","player"]],[[2,"have-turn",null]],null,null,mn,fn)),e.mb(1,114688,null,0,gn.a,[],{player:[0,"player"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,0,0,null==e.wb(l,1).player?null:e.wb(l,1).player.playing)})}function wn(n){return e.Fb(0,[(n()(),e.eb(16777216,null,null,1,null,yn)),e.mb(1,278528,null,0,w.i,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,1,0,l.component.players)},null)}var vn=t("kHzz"),_n=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;position:relative;pointer-events:none}.card[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}"]],data:{}});function xn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-pile",[["displayCount","12"]],null,null,null,K,G)),e.mb(1,638976,null,0,N.a,[],{allowDrop:[0,"allowDrop"],cards:[1,"cards"],displayCount:[2,"displayCount"]},null)],function(n,l){n(l,1,0,!1,l.component.cards,"12")},null)}var Cn=t("8sbs"),On=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;width:100%}"]],data:{}});function Pn(n){return e.Fb(0,[e.Bb(402653184,1,{piles:0}),(n()(),e.nb(1,0,null,null,1,"skipbo-pile-group",[],null,[[null,"cardDropped"]],function(n,l,t){var e=!0;return"cardDropped"===l&&(e=!1!==n.component.handleCardDroppedInPile(t)&&e),e},J,E)),e.mb(2,4308992,[[1,4],["piles",4]],0,V.a,[],{canDragItemsToZones:[0,"canDragItemsToZones"],allowDrop:[1,"allowDrop"],group:[2,"group"]},{cardDropped:"cardDropped"})],function(n,l){var t=l.component;n(l,2,0,t.canDragItemsToZones,!0,t.group)},null)}var Dn=function(){function n(n,l){this._gameService=n,this._router=l,this.opponentPlayers=[],this._gameService.enableLogging(),this.player=this._gameService.game.createPlayer("You");var t=this._gameService.game.createPlayer("Player 2",{cpu:!0}),e=this._gameService.game.createPlayer("Player 3",{cpu:!0});this.opponentPlayers=[t,e],this.buildingGroup=this._gameService.game.buildingGroup,this.deck=this._gameService.game.deck,this.start()}return n.prototype.start=function(){this._gameService.game.start()},n}(),Mn=e.lb({encapsulation:0,styles:[['.layout[_ngcontent-%COMP%]{display:block;width:100vw;min-height:100vh;position:relative;padding:10px;display:grid;grid-template:"debug" "opponents" "game" "player";grid-template-rows:auto auto 2fr auto;grid-row-gap:50px;background-image:url(/skipbo-angular/assets/playing-background.jpg);background-size:cover;justify-items:stretch;align-items:center}.debug[_ngcontent-%COMP%]{grid-area:debug}.opponents[_ngcontent-%COMP%]{grid-area:opponents}.game[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 4fr;grid-column-gap:50px;grid-area:game;max-width:1000px;width:100%;justify-self:center}.player[_ngcontent-%COMP%]{grid-area:player;max-width:1400px;width:100%;justify-self:center}']],data:{}});function Sn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-player",[["class","player"]],[[2,"have-turn",null]],null,null,tn,ln)),e.mb(1,4308992,null,0,nn.a,[u.a],{player:[0,"player"],buildingZones:[1,"buildingZones"]},null)],function(n,l){n(l,1,0,l.component.player,e.wb(l.parent,10).getDropzones())},function(n,l){n(l,0,0,e.wb(l,1).player.playing)})}function Fn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,12,"div",[["cdkDropListGroup",""],["class","layout"]],null,null,null,null,null)),e.mb(1,147456,null,0,D.e,[],null,null),(n()(),e.nb(2,0,null,null,1,"skipbo-debug-panel",[["class","debug"]],null,null,null,on,rn)),e.mb(3,114688,null,0,en.a,[u.a],null,null),(n()(),e.nb(4,0,null,null,1,"skipbo-opponents",[["class","opponents"]],null,null,null,wn,kn)),e.mb(5,114688,null,0,hn.a,[],{players:[0,"players"]},null),(n()(),e.nb(6,0,null,null,4,"div",[["class","game"]],null,null,null,null,null)),(n()(),e.nb(7,0,null,null,1,"skipbo-deck",[["class","game__deck"]],null,[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.wb(n,8).handleClick()&&r),r},xn,_n)),e.mb(8,114688,null,0,vn.a,[],{cards:[0,"cards"]},null),(n()(),e.nb(9,0,null,null,1,"skipbo-building-group",[["class","game__building-group"]],null,null,null,Pn,On)),e.mb(10,49152,[["buildingGroupReference",4]],0,Cn.a,[u.a],{group:[0,"group"]},null),(n()(),e.eb(16777216,null,null,1,null,Sn)),e.mb(12,16384,null,0,w.j,[e.N,e.K],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0),n(l,5,0,t.opponentPlayers),n(l,8,0,t.deck.cards),n(l,10,0,t.buildingGroup),n(l,12,0,t.player)},null)}function zn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-gameplay",[],null,null,null,Fn,Mn)),e.mb(1,49152,null,0,Dn,[u.a,o.k],null,null)],null,null)}var In=e.jb("skipbo-gameplay",Dn,zn,{},{},[]),Tn=t("Ra5L"),Zn=function(){return function(n){this._gameService=n,this.winner=this._gameService.game.winner,this.winner=new Tn.c("My Player")}}(),jn=e.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;text-align:center;display:flex;justify-content:center;align-items:center;height:100%}.box[_ngcontent-%COMP%]{width:320px}"]],data:{}});function Yn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,9,"div",[["class","content"]],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,2,"h1",[["skipbo-headline",""]],null,null,null,m.b,m.a)),e.mb(2,114688,null,0,h.a,[],null,null),(n()(),e.Db(-1,0,["Game Over"])),(n()(),e.nb(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Db(5,null,['Player "','" has won. Congratulations!'])),(n()(),e.nb(6,0,null,null,3,"a",[["routerLink","/welcome"],["skipbo-button",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.wb(n,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},k.b,k.a)),e.mb(7,114688,null,0,y.a,[],null,null),e.mb(8,671744,null,0,o.l,[o.k,o.a,w.h],{routerLink:[0,"routerLink"]},null),(n()(),e.Db(-1,0,["Exit"]))],function(n,l){n(l,2,0),n(l,7,0),n(l,8,0,"/welcome")},function(n,l){n(l,5,0,l.component.winner.name),n(l,6,0,e.wb(l,8).target,e.wb(l,8).href)})}function Bn(n){return e.Fb(0,[(n()(),e.nb(0,0,null,null,1,"skipbo-gameover",[],null,null,null,Yn,jn)),e.mb(1,49152,null,0,Zn,[u.a],null,null)],null,null)}var Ln=e.jb("skipbo-gameover",Zn,Bn,{},{},[]),Nn=t("oRDy"),Gn=t("GM45"),Rn=function(){return function(){}}();t.d(l,"GameModuleNgFactory",function(){return An});var An=e.kb(r,[],function(n){return e.tb([e.ub(512,e.j,e.Z,[[8,[a.a,f,O,In,Ln]],[3,e.j],e.x]),e.ub(4608,w.l,w.k,[e.u,[2,w.s]]),e.ub(1073742336,w.c,w.c,[]),e.ub(1073742336,Nn.a,Nn.a,[]),e.ub(1073742336,D.f,D.f,[]),e.ub(1073742336,Gn.a,Gn.a,[]),e.ub(1073742336,o.m,o.m,[[2,o.s],[2,o.k]]),e.ub(1073742336,Rn,Rn,[]),e.ub(1073742336,r,r,[]),e.ub(1024,o.i,function(){return[[{path:"",component:d,children:[{path:"",redirectTo:"start",pathMatch:"full"},{path:"start",component:v},{path:"play",component:Dn},{path:"gameover",component:Zn}]}]]},[])])})}}]);