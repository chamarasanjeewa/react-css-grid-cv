(this["webpackJsonpchamara-sanjeewa"]=this["webpackJsonpchamara-sanjeewa"]||[]).push([[0],{19:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(8),n=t.n(a),s=t(20),i=t.n(s),r=(t(28),t(29),t(23)),o=t(11),l=t(16),j=t.n(l),b=t(21),d=t(17);d.a.initializeApp({apiKey:"AIzaSyBlMFpcSsr0xI9_hZ-wVc1khpJ30kyGSTw",authDomain:"cv-chamara.firebaseapp.com",projectId:"cv-chamara",storageBucket:"cv-chamara.appspot.com",messagingSenderId:"943773985501",appId:"1:943773985501:web:eb711c4e442195917a0934"});var m=d.a.firestore(),u=t(2),h=Object(a.createContext)(null),x=function(e){var c=Object(a.useState)([]),t=Object(o.a)(c,2),n=t[0],s=t[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),l=r[0],d=r[1],x=Object(a.useState)([]),O=Object(o.a)(x,2),p=O[0],v=O[1],f=Object(a.useState)([]),g=Object(o.a)(f,2),N=g[0],k=g[1],y=Object(a.useState)(!1),w=Object(o.a)(y,2),P=w[0],S=w[1];Object(a.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var c,t,a,n,i,r,o,l,b;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),c=m.collection("careerInfo"),e.next=4,c.get();case 4:return t=e.sent,a=t.docs.map((function(e){return e.data()})),s(a),e.next=9,m.collection("education").get();case 9:return n=e.sent,i=n.docs.map((function(e){return e.data()})),d(i),e.next=14,m.collection("technologies").get();case 14:return r=e.sent,o=r.docs.map((function(e){return e.data()})),v(o),e.next=19,m.collection("projects").get();case 19:l=e.sent,b=l.docs.map((function(e){return e.data()})),k(b),S(!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C={careerInfo:n,loading:P,education:l,technologies:p,projects:N};return Object(u.jsx)(h.Provider,{value:C,children:e.children})};t(19);function O(e){e.title,e.time,e.experience,e.client,e.companyName;var c=Object(a.useState)([]),t=Object(o.a)(c,2),n=t[0],s=t[1],i=Object(a.useContext)(h);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{className:"header",children:"Company experience"}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-12",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("div",{id:"content",children:Object(u.jsx)("ul",{className:"timeline",children:null===i||void 0===i?void 0:i.careerInfo.map((function(e,c){var t,a;return Object(u.jsx)("li",{className:"event","data-date":e.time,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:e.title}),Object(u.jsx)("div",{children:e.companyName}),Object(u.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:Object(u.jsxs)("div",{children:["Project:",e.client]})}),Object(u.jsx)("a",{href:"null",onClick:function(e){e.preventDefault();var t=n.some((function(e){return e.index===c}));s(t?n.filter((function(e){return e.index!==c})):[].concat(Object(r.a)(n),[{index:c}]))},children:"more..."}),n.find((function(e){return e.index===c}))&&Object(u.jsxs)("div",{children:[Object(u.jsx)("ul",{className:"experience",children:null===(t=e.experience)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:"- "}),e]})}))}),Object(u.jsx)("ul",{className:"list-group list-group-horizontal d-flex justify-content-center align-items-center",children:null===(a=e.technologies)||void 0===a?void 0:a.map((function(e){return Object(u.jsx)("li",{className:"list-group-item me-2  btn btn-sm btn-success border-radius-2",children:e})}))})]})]})})}))})})})})})})]})}t(35);var p=function(){var e=Object(a.useContext)(h);return Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsx)("h1",{className:"header",children:"Education "}),Object(u.jsx)("div",{className:"row justify-content-center align-items-center",children:null===e||void 0===e?void 0:e.education.map((function(e,c){return Object(u.jsx)("div",{className:"col-sm-3 me-2 ",children:Object(u.jsxs)("div",{className:"card text-center align-items-center pt-3",children:[Object(u.jsx)("h3",{className:"header",children:e.title}),Object(u.jsx)("p",{children:e.institute}),Object(u.jsx)("p",{children:e.time})]})},c)}))})]})};t(36);function v(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row align-items-center",children:[Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("h2",{className:"section-title",children:["Hey, I'm a ",Object(u.jsx)("br",{})," ",Object(u.jsx)("span",{children:Object(u.jsx)("span",{children:"react"})})," Developer."]})}),Object(u.jsx)("div",{className:"col-md-5 text-center d-none d-md-block",children:Object(u.jsx)("img",{src:"https://api.wpmet.com/auth/wp-content/uploads/2020/12/pp_banner_image.png",title:"",alt:""})})]})})}t(37);function f(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"header",children:"About me"}),Object(u.jsx)("p",{children:"Energetic and adoptive individual with over 10+ years of hands-on experience in software industry. A skilled developer, competent leader, team builder and courteous client manager focused towards achieving defined objectives, utilizing agile processes and practices."})]})}function g(e){var c="";switch(e.toLowerCase()){case"react":c="react";break;case"angular":case"angularjs":c="angular";break;case"bitbucket":c="bitbucket";break;case"cypress":c="cypress";break;case"favro":c="favro";break;case"firebase":c="firebase";break;case"git":c="git";break;case"github":c="github";break;case"ionic":c="ionic";break;case"javascript":c="javascript";break;case"typescript":c="typescript";break;case"aggrid":c="lib-ag-grid";break;case"antdesign":c="lib-ant-design";break;case"bootstrap":c="lib-bootstrap";break;case"dropzone":c="libdropzone";break;case"imageCropPicker":c="lib-image-crop-picker";break;case"reacthookforms":c="lib-react-hook-forms";break;case"reactquery":c="lib-react-query";break;case"mobx":c="lib-mobx";break;case"mongodb":case"mysql":case"mssql":c="mongo";break;case"oracle":c="oracle";break;case"nextjs":c="mongo";break;case"slack":c="tool-slack";break;case"trello":c="tool-trello";break;case"unity":c="unity";break;case"webpack":c="webpack";break;case".netcore":case"asp.netmvc":case"entityframework":c="aspnetcore";break;case"nodejs":c="nodejs";break;case"ionic 2":c="ionic";break;case"jira":c="jira";break;case"jquery":case"zustand":case"vuforia":c="lib-react-query";break;case"croppicker":c="lib-image-crop-picker";break;case"transistor":c="lib-transistor";break;case"hookforms":c="lib-react-hook-forms"}return"./assets/icons/"+c+".svg"}var N=function(){var e=Object(a.useContext)(h);return Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsx)("h3",{className:"header",children:"Project experience"}),Object(u.jsx)("div",{className:"row justify-content-left align-items-center",children:null===e||void 0===e?void 0:e.projects.map((function(e,c){var t;return Object(u.jsx)("div",{className:"col me-2 mb-5 ",children:Object(u.jsxs)("div",{className:"card text-center align-items-center",children:[Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("img",{className:"card-img-top img",src:y(e.name),alt:""})}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h3",{className:"header",children:e.name}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"for:"}),e.client," ",Object(u.jsxs)("span",{children:["(",e.clientOrigin,")"]})]}),Object(u.jsx)("div",{className:"d-flex justify-content-center mb-2",children:null===(t=e.technologies)||void 0===t?void 0:t.map((function(e){return e&&Object(u.jsx)(k,{iconName:e})}))})]})]})},c)}))})]})};function k(e){var c=e.iconName,t=g(c);return Object(u.jsx)("img",{alt:c,src:t,width:"20px",height:"20px",className:"me-2"},c)}function y(e){var c="";return"millum-commerce"===e&&(c="millum.JPG"),"baby journey"===e?c="babyjourney.JPG":"sarala sinhala"===e?c="sarala.webp":"You drink we drive"===e?c="youdrink.webp":"permitto"===e?c="permitto.JPG":"permitto mobile app"===e?c="permitto.webp":"blueTag"===e?c="bluetag.JPG":"lande kubura"===e?c="landekubura.JPG":"sarala sinhala"===e?c="sarala.webp":"TrivialLife"===e&&(c="trivial.JPG"),"./assets/icons/".concat(c)}t(38),t(39);function w(){return Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"header",children:"Technologies/ Libraries"}),Object(u.jsxs)("ul",{className:"technology list-group list-group-horizontal d-flex  align-items-center mt-2",children:[Object(u.jsx)(P,{iconName:"angular"}),Object(u.jsx)(P,{iconName:"react"}),Object(u.jsx)(P,{iconName:"typescript"}),Object(u.jsx)(P,{iconName:"javascript"}),Object(u.jsx)(P,{iconName:"oracle"}),Object(u.jsx)(P,{iconName:"unity"}),Object(u.jsx)(P,{iconName:"mongo"}),Object(u.jsx)(P,{iconName:"firebase"}),Object(u.jsx)(P,{iconName:"mysql"}),Object(u.jsx)(P,{iconName:"github"}),Object(u.jsx)(P,{iconName:"bootstrap"}),Object(u.jsx)(P,{iconName:"croppicker"}),Object(u.jsx)(P,{iconName:"dropzone"}),Object(u.jsx)(P,{iconName:"transistor"}),Object(u.jsx)(P,{iconName:"aggrid"}),Object(u.jsx)(P,{iconName:"antdesign"}),Object(u.jsx)(P,{iconName:"hookforms"}),Object(u.jsx)(P,{iconName:"reactquery"})]})]}),Object(u.jsxs)("div",{className:"mt-5",children:[Object(u.jsx)("h1",{className:"header",children:"Tools"}),Object(u.jsxs)("ul",{className:"technology list-group list-group-horizontal d-flex justify-content-start align-items-center",children:[Object(u.jsx)(P,{iconName:"git"}),Object(u.jsx)(P,{iconName:"bitbucket"}),Object(u.jsx)(P,{iconName:"trello"}),Object(u.jsx)(P,{iconName:"favro"}),Object(u.jsx)(P,{iconName:"github"})]})]})]})}function P(e){var c=e.iconName,t=g(c);return Object(u.jsx)("li",{className:"me-2",children:Object(u.jsx)("img",{alt:c,src:t,width:"55px",height:"55px"})})}function S(){return Object(u.jsx)("div",{className:"container mt-5",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"header",children:"Blogs"}),Object(u.jsx)("div",{children:Object(u.jsx)("a",{href:"https://chamara-sanjeewa.medium.com/fixing-certificate-invalid-issue-when-running-kestrel-server-in-localhost-with-ios-simulator-6f3a2aa5c73b",children:"fixing-certificate-invalid-issue"})})]})})}var C=function(){return Object(u.jsxs)(x,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(f,{}),Object(u.jsx)(O,{}),Object(u.jsx)(N,{}),Object(u.jsx)(w,{}),Object(u.jsx)(p,{}),Object(u.jsx)(S,{})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,s=c.getLCP,i=c.getTTFB;t(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.396197d4.chunk.js.map