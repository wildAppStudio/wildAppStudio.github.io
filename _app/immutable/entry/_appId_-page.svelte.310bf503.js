import{S as nt,i as ct,s as ft,y as X,a as y,k,q as j,z as Y,c as $,l as b,m as d,h as o,r as H,n as r,J as ut,A as Z,b as D,G as l,g as tt,d as et,B as st,L as ht,H as R,M as lt,N as rt}from"../chunks/index.7979bdb6.js";import{G as _t,F as dt}from"../chunks/gnb.f4c1674a.js";function at(u,t,n){const s=u.slice();return s[2]=t[n],s}function vt(u){let t,n;return{c(){t=k("a"),n=j("뒤로가기"),this.h()},l(s){t=b(s,"A",{class:!0,href:!0});var a=d(t);n=H(a,"뒤로가기"),a.forEach(o),this.h()},h(){r(t,"class","text-16-link"),r(t,"href","/")},m(s,a){D(s,t,a),l(t,n)},p:R,d(s){s&&o(t)}}}function mt(u){let t,n,s,a,_,v,c,P=u[0].info.title+"",x;return{c(){t=k("a"),n=j("제작 목록"),s=y(),a=lt("svg"),_=lt("path"),v=y(),c=k("a"),x=j(P),this.h()},l(i){t=b(i,"A",{class:!0,href:!0});var f=d(t);n=H(f,"제작 목록"),f.forEach(o),s=$(i),a=rt(i,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0});var A=d(a);_=rt(A,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),d(_).forEach(o),A.forEach(o),v=$(i),c=b(i,"A",{class:!0,href:!0});var w=d(c);x=H(w,P),w.forEach(o),this.h()},h(){r(t,"class","text-16-link"),r(t,"href","/"),r(_,"stroke-linecap","round"),r(_,"stroke-linejoin","round"),r(_,"d","M8.25 4.5l7.5 7.5-7.5 7.5"),r(a,"class","stroke-neutral-900 dark:stroke-neutral-200 w-6 h-6"),r(a,"xmlns","http://www.w3.org/2000/svg"),r(a,"fill","none"),r(a,"viewBox","0 0 24 24"),r(a,"stroke-width","1.5"),r(a,"stroke","currentColor"),r(c,"class","text-16-link"),r(c,"href","/"+u[0].id)},m(i,f){D(i,t,f),l(t,n),D(i,s,f),D(i,a,f),l(a,_),D(i,v,f),D(i,c,f),l(c,x)},p:R,d(i){i&&o(t),i&&o(s),i&&o(a),i&&o(v),i&&o(c)}}}function it(u){let t,n,s,a=u[2].version+"",_,v,c,P=u[2].date+"",x,i,f,A=u[2].description+"",w,q;return{c(){t=k("div"),n=k("div"),s=k("p"),_=j(a),v=y(),c=k("p"),x=j(P),i=y(),f=k("p"),w=j(A),q=y(),this.h()},l(g){t=b(g,"DIV",{class:!0});var I=d(t);n=b(I,"DIV",{class:!0});var G=d(n);s=b(G,"P",{class:!0});var C=d(s);_=H(C,a),C.forEach(o),v=$(G),c=b(G,"P",{class:!0});var E=d(c);x=H(E,P),E.forEach(o),G.forEach(o),i=$(I),f=b(I,"P",{class:!0});var V=d(f);w=H(V,A),V.forEach(o),q=$(I),I.forEach(o),this.h()},h(){r(s,"class","text-20"),r(c,"class","text-16-sub"),r(n,"class","flex justify-start gap-x-3 items-center"),r(f,"class","text-16-sub"),r(t,"class","py-4")},m(g,I){D(g,t,I),l(t,n),l(n,s),l(s,_),l(n,v),l(n,c),l(c,x),l(t,i),l(t,f),l(f,w),l(t,q)},p:R,d(g){g&&o(t)}}}function pt(u){let t,n,s,a,_,v,c,P,x,i,f,A=u[0].info.title+"",w,q,g,I=u[0].info.description+"",G,C,E,V,K,O,z,B,J;t=new _t({});function ot(e,p){return e[0].info.title!=="Error"?mt:vt}let S=ot(u)(u),F=u[0].history.reverse(),m=[];for(let e=0;e<F.length;e+=1)m[e]=it(at(u,F,e));return B=new dt({}),{c(){X(t.$$.fragment),n=y(),s=k("div"),a=k("div"),S.c(),_=y(),v=k("div"),c=k("img"),x=y(),i=k("div"),f=k("h1"),w=j(A),q=y(),g=k("p"),G=j(I),C=y(),E=k("div"),V=k("h4"),K=j("제작 History"),O=y();for(let e=0;e<m.length;e+=1)m[e].c();z=y(),X(B.$$.fragment),this.h()},l(e){Y(t.$$.fragment,e),n=$(e),s=b(e,"DIV",{class:!0});var p=d(s);a=b(p,"DIV",{class:!0});var h=d(a);S.l(h),h.forEach(o),_=$(p),v=b(p,"DIV",{class:!0});var M=d(v);c=b(M,"IMG",{class:!0,src:!0,alt:!0}),x=$(M),i=b(M,"DIV",{});var L=d(i);f=b(L,"H1",{class:!0});var T=d(f);w=H(T,A),T.forEach(o),q=$(L),g=b(L,"P",{class:!0});var U=d(g);G=H(U,I),U.forEach(o),L.forEach(o),M.forEach(o),C=$(p),E=b(p,"DIV",{class:!0});var N=d(E);V=b(N,"H4",{class:!0});var W=d(V);K=H(W,"제작 History"),W.forEach(o),O=$(N);for(let Q=0;Q<m.length;Q+=1)m[Q].l(N);N.forEach(o),p.forEach(o),z=$(e),Y(B.$$.fragment,e),this.h()},h(){r(a,"class","flex justify-start items-center py-5 border-b divider-main-color mb-12"),r(c,"class","w-20 h-20 rounded-xl drop-shadow-lg"),ut(c.src,P=u[0].info.image)||r(c,"src",P),r(c,"alt",u[0].id),r(f,"class","text-20-bold"),r(g,"class","text-16-sub"),r(v,"class","flex justify-start items-center gap-x-5 my-4"),r(V,"class","text-20-bold pb-3"),r(E,"class","mt-9"),r(s,"class","container-basic")},m(e,p){Z(t,e,p),D(e,n,p),D(e,s,p),l(s,a),S.m(a,null),l(s,_),l(s,v),l(v,c),l(v,x),l(v,i),l(i,f),l(f,w),l(i,q),l(i,g),l(g,G),l(s,C),l(s,E),l(E,V),l(V,K),l(E,O);for(let h=0;h<m.length;h+=1)m[h]&&m[h].m(E,null);D(e,z,p),Z(B,e,p),J=!0},p(e,[p]){if(S.p(e,p),p&1){F=e[0].history.reverse();let h;for(h=0;h<F.length;h+=1){const M=at(e,F,h);m[h]?m[h].p(M,p):(m[h]=it(M),m[h].c(),m[h].m(E,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=F.length}},i(e){J||(tt(t.$$.fragment,e),tt(B.$$.fragment,e),J=!0)},o(e){et(t.$$.fragment,e),et(B.$$.fragment,e),J=!1},d(e){st(t,e),e&&o(n),e&&o(s),S.d(),ht(m,e),e&&o(z),st(B,e)}}}function kt(u,t,n){let{data:s}=t;const{app:a}=s;return u.$$set=_=>{"data"in _&&n(1,s=_.data)},[a,s]}class yt extends nt{constructor(t){super(),ct(this,t,kt,pt,ft,{data:1})}}export{yt as default};
