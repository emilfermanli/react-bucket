(this.webpackJsonptomris21=this.webpackJsonptomris21||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),m=(a(74),a(75),a(20)),i=a(124),s=a(125),o=a(126),u=a(127),d=a(128),E=a(129),p=a(130),h=a(9),g=a(13),v=a(14),f=a(8),y=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(f.d)((function(e){return e.addCart}));return window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?document.getElementById("main-navbar").className="w-100 change-menu":document.getElementById("main-navbar").className="w-100 seenav"},l.a.createElement("div",{id:"main-navbar",className:"w-100 seenav"},l.a.createElement(i.a,null,l.a.createElement(s.a,{className:"w-100",id:"navbar",light:!0,expand:"md"},l.a.createElement(o.a,{to:"/"},"ReactJS"),l.a.createElement(u.a,{onClick:function(){return r(!a)}}),l.a.createElement(d.a,{isOpen:a,navbar:!0},l.a.createElement(E.a,{className:"mr-auto w-100 justify-content-end mob-mn",navbar:!0},l.a.createElement(p.a,null,l.a.createElement(h.b,{className:"nav-link",to:"/react-bucket"},"Home")),l.a.createElement(p.a,null,l.a.createElement(h.b,{className:"nav-link",to:"/gallery"},"All Products")),l.a.createElement(p.a,null,l.a.createElement(h.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement(p.a,null,l.a.createElement(h.b,{className:"nav-link",to:"/panel"},"Admin Panel")),l.a.createElement(p.a,null,l.a.createElement(h.b,{className:"nav-link",to:"/cart"},l.a.createElement(g.a,{icon:v.d}),l.a.createElement("span",{style:{marginLeft:"5px"}},c.length))))))))},b=a(131);var x=function(){return l.a.createElement("div",{id:"hero-img"},l.a.createElement(i.a,{fluid:!0},l.a.createElement(b.a,null,l.a.createElement("div",{className:"hero-text"},l.a.createElement("div",{className:"xs-hidden"},l.a.createElement("h3",{className:"left-text"},"MODIST - TIME TO GET DRESS")),l.a.createElement("div",{className:"mb-cntr"},l.a.createElement("h1",{className:"center-text"},"LE STYLIST"),l.a.createElement("h2",{className:"mini-text"},l.a.createElement("span",null,"WEAR YOUR DRESS")),l.a.createElement("div",{className:"mouse"},l.a.createElement("a",{href:"#here",className:"mouse-icon"},l.a.createElement("div",{className:"mouse-wheel"},l.a.createElement("span",{className:"ion-ios-arrow-down"},l.a.createElement(g.a,{icon:v.b})))))),l.a.createElement("div",{className:"xs-hidden"},l.a.createElement("h3",{className:"right-text"},"SINCE - 1985"))))))},N=a(132),w=a(32),k=a.n(w);var O=a(62),A=a.n(O),T=a(63),j=a.n(T);var P=function(e){var t=Object(f.c)(),a=Object(f.d)((function(e){return e.addCart})),r=Object(n.useState)(!1),c=Object(m.a)(r,2),i=c[0],s=c[1],o={backgroundImage:"url(".concat(i?A.a:j.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",cursor:"pointer",width:"30px",height:"30px"};return l.a.createElement(N.a,{className:"mb-pr mt-5",md:3,sm:12},l.a.createElement("div",{className:"product"},l.a.createElement(h.b,{to:{pathname:"/preview/id:".concat(e.index.id),details:e.index}},l.a.createElement("div",null,l.a.createElement("img",{className:"w-100",src:e.index.url,alt:"product"}))),l.a.createElement("div",{className:"text pt-3 px-3"},l.a.createElement("h3",null,l.a.createElement("span",null,e.index.dressName)),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"pricing"},l.a.createElement("p",{className:"price"},l.a.createElement("span",null,e.index.price,"$"))),l.a.createElement("div",{className:"rating"},l.a.createElement("p",{className:"text-right"},l.a.createElement(g.a,{style:{color:"yellow"},icon:v.e}),l.a.createElement(g.a,{style:{color:"yellow"},icon:v.e}),l.a.createElement(g.a,{style:{color:"yellow"},icon:v.e}),l.a.createElement(g.a,{style:{color:"yellow"},icon:v.e}),l.a.createElement(g.a,{style:{color:"yellow"},icon:v.e})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("button",{className:"custom-btn",onClick:function(){return function(n){var l=a.find((function(e){return e.id===n.id}));l?l.quantity+=1:t({type:"ADD_CART",payload:e.index})}(e.index)},style:{textDecoration:"none",color:"black"},href:"/"},"ADD TO CART +"),l.a.createElement("div",{onClick:function(){s(!i)},style:o})))))};var C=function(){var e=Object(f.d)((function(e){return e.cartReducer}));return l.a.createElement("div",{id:"product-slider"},l.a.createElement("div",{id:"here"}),l.a.createElement(i.a,null,l.a.createElement(N.a,{style:{height:"130px",marginTop:"90px",textAlign:"center"},md:12},l.a.createElement("h1",{className:"big xs-hidden"},"Trending"),l.a.createElement("h2",{className:"small"},"Trending")),l.a.createElement(b.a,null,e.slice(0,4).map((function(e){return l.a.createElement(P,{key:e.id,index:e})})))))};function S(){return l.a.createElement("div",{id:"online-shop"},l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{className:"online-image d-flex justify-content-center align-items-center",md:5,sm:12}),l.a.createElement(N.a,{className:"video-text text-left",md:7,sm:12},l.a.createElement("h2",{style:{marginTop:"3rem"},className:"mb-4"},"Modist ",l.a.createElement("br",null),"Online ",l.a.createElement("br",null),l.a.createElement("span",null,"Fashion Shop")),l.a.createElement("div",null,l.a.createElement("p",null,'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.'),l.a.createElement("p",null,"When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way."))))))}var R=function(){var e=Object(f.d)((function(e){return e.cartReducer}));return l.a.createElement("div",{id:"products"},l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{style:{height:"130px",marginTop:"90px",textAlign:"center"},md:12},l.a.createElement("h1",{className:"big xs-hidden"},"Products"),l.a.createElement("h2",{className:"small"},"Our Products"))),l.a.createElement(b.a,null,e.slice(0,8).map((function(e){return l.a.createElement(P,{key:e.id,index:e})})))))};var D=function(){return l.a.createElement("div",{id:"discount"},l.a.createElement(i.a,null,l.a.createElement("h2",{className:"discount-event text-left"},"SUMMER SALE")))};var I=function(){return l.a.createElement("div",{id:"services"},l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{style:{height:"130px",marginTop:"90px",textAlign:"center"},md:12},l.a.createElement("h1",{className:"big xs-hidden"},"Services"),l.a.createElement("h2",{className:"small"},"WE WANT YOU TO EXPRESS YOURSELF"))),l.a.createElement(b.a,null,l.a.createElement(N.a,{md:4,sm:12},l.a.createElement("div",{className:"mt-5",style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(g.a,{style:{fontSize:"45px"},icon:v.f})),l.a.createElement("div",null,l.a.createElement("h6",{style:{margin:"15px 0"}},"REFUND POLICY"),l.a.createElement("p",null,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.")))),l.a.createElement(N.a,{md:4,sm:12},l.a.createElement("div",{className:"mt-5",style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(g.a,{style:{fontSize:"45px"},icon:v.a})),l.a.createElement("div",null,l.a.createElement("h6",{style:{margin:"15px 0"}},"PREMIUM PACKAGING"),l.a.createElement("p",null,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.")))),l.a.createElement(N.a,{md:4,sm:12},l.a.createElement("div",{className:"mt-5",style:{textAlign:"center"}},l.a.createElement("div",null,l.a.createElement(g.a,{style:{fontSize:"45px"},icon:v.c})),l.a.createElement("div",null,l.a.createElement("h6",{style:{margin:"15px 0"}},"SUPERIOR QUALITY"),l.a.createElement("p",null,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.")))))))};var L=function(){return l.a.createElement("div",{id:"subscribe",className:"mt-4"},l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{style:{height:"130px",marginTop:"90px",textAlign:"center"},md:12},l.a.createElement("h1",{className:"big xs-hidden"},"Subscribe"),l.a.createElement("h2",{className:"small"},"SUBCRIBE TO OUR NEWSLETTER")),l.a.createElement(N.a,{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"d-flex sub-in"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter email address"}),l.a.createElement("input",{className:"sub-btn",type:"button",value:"Subscribe"}))))))};function B(){return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(C,null),l.a.createElement(S,null),l.a.createElement(R,null),l.a.createElement(D,null),l.a.createElement(I,null),l.a.createElement(L,null))}var U=a(133);var q=function(e){var t=Object(f.c)(),a=e.index,r=Object(n.useState)(a.quantity),c=Object(m.a)(r,2),i=c[0],s=c[1],o=e.index.price;return l.a.createElement("tr",{className:"mb-bckt",style:{textAlign:"center"}},l.a.createElement("td",{style:{verticalAlign:"middle"}},l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a=e.index,void t({type:"DELETE_CART",payload:a.id});var a}},"X")),l.a.createElement("td",{style:{verticalAlign:"middle"}},l.a.createElement("img",{style:{width:"150px"},src:e.index.url,alt:"dress"})),l.a.createElement("td",{style:{verticalAlign:"middle"}},e.index.dressName),l.a.createElement("td",{style:{verticalAlign:"middle"}},e.index.price),l.a.createElement("td",{style:{verticalAlign:"middle"}},l.a.createElement("button",{style:{width:"35px"},className:"btn btn-primary",onClick:function(e){return function(e){if(e.preventDefault(),1===a.quantity&&1===i)return!1;a.quantity-=1,s(i-=1)}(e)}},"-"),l.a.createElement("span",{className:"ml-3 mr-3"},i),l.a.createElement("button",{style:{width:"35px"},className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),a.quantity+=1,s(i+=1)}(e)}},"+")),l.a.createElement("td",{style:{verticalAlign:"middle"}},Number(e.index.quantity)*Number(o)+"$"))};var M=function(){var e=Object(f.d)((function(e){return e.addCart}));return l.a.createElement("div",{id:"cart"},l.a.createElement("div",{md:12,className:"cart-hero text-center"},l.a.createElement("h4",null,"MY CART"),l.a.createElement("p",null,l.a.createElement(h.b,{to:"/react-bucket"},"Home"),l.a.createElement(h.b,{to:"/cart"},"Cart"))),l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{md:12,className:"cart-table"},l.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault();for(var a=e,n=0;n<a.length;n++){var l=a[n],r={id:l.id,quantity:l.quantity};k.a.post("https://my-json-server.typicode.com/emilfermanli/db/cart",{items:r}).then((function(e){console.log(e),console.log(e.data),alert("U\u011furla al\u0131nd\u0131")}))}alert("U\u011furla al\u0131nd\u0131")}(t)}},l.a.createElement(U.a,{borderless:!0},l.a.createElement("thead",{style:{background:"rgba(0, 0, 0, 0.03)"}},l.a.createElement("tr",{className:"ds-mbck"},l.a.createElement("th",{className:"cart-slot d-none d-sm-block"},"Remove"),l.a.createElement("th",{className:"cart-slot d-none d-sm-block"},"Product image"),l.a.createElement("th",{className:"cart-slot d-none d-sm-block"},"Product name"),l.a.createElement("th",{className:"cart-slot d-none d-sm-block"},"Price"),l.a.createElement("th",{className:"cart-slot d-none d-sm-block"},"Quantity"),l.a.createElement("th",{className:"cart-slot d-none d-sm-block"},"Total"),l.a.createElement("th",{className:"cart-slot d-block d-sm-none"},"Bucket"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(q,{key:e.id,index:e})})))),l.a.createElement("br",null),l.a.createElement("div",{className:"text-right"},l.a.createElement("input",{type:"submit",className:"btn btn-dark",value:"buy"})))))))};var W=function(){var e=Object(f.d)((function(e){return e.cartReducer}));return l.a.createElement("div",null,l.a.createElement("div",{id:"gallery",style:{paddingTop:"100px"}},l.a.createElement("div",{md:12,className:"cart-hero text-center"},l.a.createElement("h4",null,"All Products"),l.a.createElement("p",null,l.a.createElement(h.b,{to:"/react-bucket"},"Home"),l.a.createElement(h.b,{to:"/cart"},"Cart")))),l.a.createElement(i.a,null,l.a.createElement(b.a,{className:"pt-5 pb-5"},e.map((function(e){return l.a.createElement(P,{key:e.id,index:e})})))))},_=a(22),Y=a(33),$=a(134),z=a(135),F=a(136),G=a(137);var Q=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],r=t[1];function c(e){var t=e.target.name,n=e.target.value.trim();r(Object(Y.a)({},a,Object(_.a)({},t,n)))}return l.a.createElement("div",{style:{paddingTop:"200px"}},l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{md:6,xs:12},l.a.createElement(i.a,null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h4",{className:"text-dark"},"Login")),l.a.createElement($.a,null,l.a.createElement(z.a,{for:"exampleEmail2"},"E-mail"),l.a.createElement(F.a,{type:"text",name:"name",id:"exampleEmail2"})),l.a.createElement($.a,null,l.a.createElement(z.a,{for:"examplePassword2"},"Password"),l.a.createElement(F.a,{type:"password",name:"password",id:"examplePassword2"})),l.a.createElement(G.a,{className:"w-100",color:"primary"},"Login"))),l.a.createElement(N.a,{md:6,xs:12},l.a.createElement(i.a,null,l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h4",{className:"text-dark"},"Sign In")),l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a.name.length<=15&&a.name.length>2&&a.name.replace(/[\s \d \W+]/g),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a.email)&&console.log(a)}(e)}},l.a.createElement($.a,null,l.a.createElement(z.a,{for:"exampleEmail4"},"Name"),l.a.createElement(F.a,{onChange:function(e){return c(e)},maxLength:"15",type:"text",name:"name",id:"exampleEmail4"})),l.a.createElement($.a,null,l.a.createElement(z.a,{for:"exampleEmail5"},"E-mail"),l.a.createElement(F.a,{onChange:function(e){return c(e)},type:"email",name:"email",id:"exampleEmail5"})),l.a.createElement($.a,null,l.a.createElement(z.a,{for:"exampleEmail6"},"Password"),l.a.createElement(F.a,{onChange:function(e){return c(e)},maxLength:"64    ",type:"password",name:"password",id:"exampleEmail6"})),l.a.createElement(G.a,{className:"w-100",color:"success"},"Success")))))))},H=a(23),J=a(138),X=a(142);var Z=function(){var e=Object(f.d)((function(e){return e.cartReducer})),t=e.length,a=Object(n.useState)({id:"".concat(t+1),quantity:1}),r=Object(m.a)(a,2),c=r[0],s=r[1];function o(e){var t=e.target.name,a=e.target.value;s(Object(Y.a)({},c,Object(_.a)({},t,a)))}var u=Object(f.c)();return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement("h4",{style:{textAlign:"center",marginBottom:"60px"}},"Add Product"),l.a.createElement(b.a,null,l.a.createElement(N.a,{md:4},l.a.createElement("form",{onSubmit:function(t){return function(t){console.log(e),t.preventDefault();var a=document.getElementsByClassName("prodAdd")[0].value,n=document.getElementsByClassName("prodAdd")[1].value,l=document.getElementsByClassName("prodAdd")[2].value;a||n||l?(u({type:"ADD_DB",payload:c}),console.log("M\u0259hsul u\u011furla \u0259lav\u0259 olundu")):alert("bosluqlari doldurun")}(t)}},l.a.createElement($.a,null,l.a.createElement(z.a,{for:"exampleEmail1"},"Product Name"),l.a.createElement(F.a,{className:"prodAdd",onChange:function(e){return o(e)},type:"text",name:"dressName",id:"exampleEmail1"})),l.a.createElement($.a,null,l.a.createElement(z.a,{for:"examplePassword2"},"Product Image (url)"),l.a.createElement(F.a,{className:"prodAdd",onChange:function(e){return o(e)},type:"text",name:"url",id:"examplePassword2"})),l.a.createElement(z.a,{for:"examplePassword3"},"Product Image (url)"),l.a.createElement(J.a,null,l.a.createElement(X.a,{id:"examplePassword3",addonType:"prepend"},"$"),l.a.createElement(F.a,{className:"prodAdd",onChange:function(e){return o(e)},type:"number",name:"price",placeholder:"Qim\u0259t",min:0,step:"1"}),l.a.createElement(X.a,{addonType:"append"},".00")),l.a.createElement("hr",null),l.a.createElement(G.a,{className:"w-100 btn-success"},"Daxil et"))),l.a.createElement(N.a,{md:8},l.a.createElement(b.a,null,l.a.createElement(N.a,{md:6,xs:12},l.a.createElement("img",{style:c.url?{display:"block",width:"100%"}:{display:"none"},src:c.url,alt:"prod-img"})),l.a.createElement(N.a,{md:6,xs:12},l.a.createElement("div",{style:{height:"90px"}},l.a.createElement("p",null,"Product Name"),l.a.createElement("h4",{style:{margin:"0px"}},c.dressName)),l.a.createElement("div",{style:{height:"90px"}},l.a.createElement("p",null,"Product Price"),l.a.createElement("h4",{style:{margin:"0px"}},c.price))))))))},K=a(139);function V(){var e=Object(f.d)((function(e){return e.cartReducer}));return l.a.createElement("div",null,l.a.createElement(U.a,{striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",{style:{textAlign:"center"}},l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Dress Name"),l.a.createElement("th",null,"Prod-img"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Quantity"))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement("tr",{style:{textAlign:"center"},key:e.id+1},l.a.createElement("th",{scope:"row"},e.id),l.a.createElement("td",null,e.dressName),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement(G.a,{color:"primary",type:"button",id:"PopoverFocus"+e.id},"Open img"),l.a.createElement(K.a,{trigger:"focus",placement:"right",target:"PopoverFocus"+e.id},l.a.createElement("img",{className:"w-100",src:e.url,alt:"prod-img"})))),l.a.createElement("td",null,e.price,"$"),l.a.createElement("td",null,e.quantity))})))))}function ee(){return l.a.createElement("div",null,"hi")}function te(){var e=Object(H.g)().topicId;return"addpost"===e?l.a.createElement(Z,{exact:!0}):"posts"===e?l.a.createElement(V,null):"editpost"===e?l.a.createElement(ee,null):void 0}var ae=function(){var e=Object(H.h)(),t=e.path,a=e.url;return l.a.createElement("div",{style:{paddingTop:"200px"}},l.a.createElement(i.a,null,l.a.createElement(b.a,null,l.a.createElement(N.a,{md:2},l.a.createElement("ul",{className:"list-unstyled panel-tab"},l.a.createElement("li",null,l.a.createElement(h.b,{className:"nav-link",to:"".concat(a,"/posts")},"Posts")),l.a.createElement("li",null,l.a.createElement(h.b,{className:"nav-link",to:"".concat(a,"/addpost")},"Add Post")))),l.a.createElement(N.a,{md:8},l.a.createElement(H.c,null,l.a.createElement(H.a,{exact:!0,path:t},l.a.createElement(V,null)),l.a.createElement(H.a,{path:"".concat(t,"/:topicId")},l.a.createElement(te,{exact:!0})))))))},ne=a(66),le=a.n(ne);var re=function(){var e=window.location.pathname.split("/preview/id:")[1],t=Object(f.d)((function(e){return e.cartReducer})).find((function(t){return t.id===e}));function a(){return l.a.createElement("div",{className:"d-flex\r align-items-center \r justify-content-center\r flex-column\r "},l.a.createElement("h2",null,l.a.createElement("img",{width:"150px",height:"150px",src:le.a,alt:"loading"})),l.a.createElement("h3",null,"loading..."))}return Object(n.useEffect)((function(){a()})),l.a.createElement("div",{style:{paddingTop:"150px"}},l.a.createElement(i.a,null,t?l.a.createElement(b.a,null,l.a.createElement(N.a,{md:4},l.a.createElement("img",{src:t.url,alt:"img"})),l.a.createElement(N.a,{md:6},l.a.createElement("h2",null,t.dressName),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),l.a.createElement("h3",null,t.price,"$"))):a()))};var ce=function(){var e=Object(H.f)();return l.a.createElement("div",{style:{paddingTop:"200px"}},l.a.createElement("p",{style:{textAlign:"center"}},"No match for ",l.a.createElement("code",null,e.pathname)))},me=a(141),ie=a(140);var se={getCategories:function(){return function(e){return k.a.get("https://my-json-server.typicode.com/emilfermanli/db/product").then((function(e){return e.data})).then((function(t){return e({type:"GET_PRODUCT",payload:t})}))}}},oe=Object(f.b)(null,se)((function(e){Object(n.useEffect)((function(){e.getCategories()}),[e]);var t=Object(H.f)();return l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(me.a,null,l.a.createElement(ie.a,{key:t.key,classNames:"fade",timeout:300},l.a.createElement(H.c,null,l.a.createElement(H.a,{exact:!0,path:"/react-bucket"},l.a.createElement(B,null)),l.a.createElement(H.a,{path:"/cart"},l.a.createElement(M,null)),l.a.createElement(H.a,{path:"/gallery"},l.a.createElement(W,null)),l.a.createElement(H.a,{path:"/login"},l.a.createElement(Q,null)),l.a.createElement(H.a,{path:"/panel"},l.a.createElement(ae,null)),l.a.createElement(H.a,{path:"/preview"},l.a.createElement(re,null)),l.a.createElement(H.a,{component:ce})))))})),ue=a(26),de={product:[],cart:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de.product,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCT":return t.payload;case"ADD_DB":return e.concat(t.payload);default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de.cart,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CART":return e.concat(t.payload);case"DELETE_CART":return e.filter((function(e){return e.id!==t.payload}));default:return e}},he=Object(ue.c)({cartReducer:Ee,addCart:pe}),ge=a(67);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=Object(ue.d)(he,Object(ue.a)(ge.a));c.a.render(l.a.createElement(f.a,{store:ve},l.a.createElement(h.a,null,l.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){e.exports=a.p+"static/media/nwrd.9211201f.gif"},63:function(e,t,a){e.exports=a.p+"static/media/hr.c54a322d.png"},66:function(e,t,a){e.exports=a.p+"static/media/loading.b931bf60.gif"},69:function(e,t,a){e.exports=a(121)},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.239ca58f.chunk.js.map