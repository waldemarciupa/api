(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(11),n(3)),i=n.n(o),p=n(5),j=n(2),u=(n(13),n(0));var d=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)([]),a=Object(j.a)(s,2),o=a[0],d=a[1],h=Object(c.useState)([]),f=Object(j.a)(h,2),b=f[0],l=f[1],O=Object(c.useState)(!1),x=Object(j.a)(O,2),m=x[0],v=x[1],w=Object(c.useState)(!1),y=Object(j.a)(w,2),g=y[0],k=y[1],S=Object(c.useState)(!1),I=Object(j.a)(S,2),z=I[0],F=I[1],P=Object(c.useState)(null),W=Object(j.a)(P,2),B=W[0],C=W[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(p.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.next=3,fetch("https://thingproxy.freeboard.io/fetch/https://www.empikfoto.pl/product/formats",{headers:{mode:"no-cors"}});case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,d(n.formats),k(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(p.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.next=3,fetch("https://thingproxy.freeboard.io/fetch/https://www.empikfoto.pl/product/papers",{headers:{mode:"no-cors"}});case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,l(n.papers),F(!1);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();v(!0),fetch("https://thingproxy.freeboard.io/fetch/https://www.empikfoto.pl/product/list",{headers:{mode:"no-cors"}}).then((function(t){if(console.log(t),!t.ok)throw Error("Ups co\u015b posz\u0142o nie tak, spr\xf3buj ponownie p\xf3\u017aniej");return t.json()})).then((function(t){r(t.products),v(!1),C(null)})).catch((function(t){C(t.message),v(!1)})),t(),e()}),[]),Object(u.jsxs)("div",{className:"App",children:[B&&Object(u.jsx)("p",{children:B}),m&&Object(u.jsx)("p",{children:"Wczytuj\u0119 produkty"}),n&&n.map((function(t){var e=o&&o.filter((function(e){return e.id===t.formatId})),n=b.filter((function(e){return e.id===t.paperId}));return Object(u.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Identyfikator: "}),Object(u.jsx)("span",{children:t.productId})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Produkt: "}),Object(u.jsx)("span",{children:t.product})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Typ: "}),Object(u.jsx)("span",{children:g?"Wczytuj\u0119 typ":e[0].typeName})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Format: "}),Object(u.jsx)("span",{children:g?"Wczytuj\u0119 format":e[0].format})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"Papier: "}),Object(u.jsx)("span",{children:z?"Wczytuj\u0119 papier":n[0].name})]})]},t.productId)}))]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.a2fee044.chunk.js.map