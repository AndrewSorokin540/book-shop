(this["webpackJsonpbook-shop"]=this["webpackJsonpbook-shop"]||[]).push([[0],Array(33).concat([function(e,t,a){e.exports=a.p+"static/media/1.a6bbb905.jpeg"},function(e,t,a){e.exports=a.p+"static/media/2.0b8d21ce.jpeg"},function(e,t,a){e.exports=a.p+"static/media/3.9070d0ed.jpeg"},function(e,t,a){e.exports=a.p+"static/media/1.b2b1c35a.png"},function(e,t,a){e.exports=a.p+"static/media/2.333e9629.png"},function(e,t,a){e.exports=a.p+"static/media/3.85634cd5.png"},function(e,t,a){e.exports=a.p+"static/media/4.9587e200.png"},function(e,t,a){e.exports=a.p+"static/media/5.c6b5b0b7.png"},function(e,t,a){e.exports=a.p+"static/media/6.290b22db.png"},function(e,t,a){e.exports=a.p+"static/media/7.0be4e741.png"},function(e,t,a){e.exports=a.p+"static/media/8.69c35749.png"},function(e,t,a){e.exports=a.p+"static/media/9.0be23b48.png"},function(e,t,a){e.exports=a.p+"static/media/10.4adb6b12.png"},function(e,t,a){e.exports=a.p+"static/media/11.710bdcdf.png"},function(e,t,a){e.exports=a.p+"static/media/12.56ea5273.png"},function(e,t,a){e.exports=a.p+"static/media/13.ed687a27.png"},function(e,t,a){e.exports=a.p+"static/media/14.51614823.png"},function(e,t,a){e.exports=a.p+"static/media/15.c3af1211.png"},function(e,t,a){e.exports=a.p+"static/media/cola.a8dc7f81.png"},function(e,t,a){e.exports=a.p+"static/media/fanta.c854908c.png"},function(e,t,a){e.exports=a.p+"static/media/sprite.e9f523cb.png"},function(e,t,a){e.exports=a.p+"static/media/logo.1a5abae4.png"},,function(e,t,a){e.exports=a.p+"static/media/pizza-going.15a230a4.png"},function(e,t,a){e.exports=a(98)},,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=a(13),o=a(14),m=a(2),s=r.a.createContext(),d=s.Provider,u=s.Consumer,p=function(e,t,a){return{type:"ITEM_ADD_TO_CART",payload:{itemId:e,count:t,size:a}}},b=function(e,t){return{type:"ITEM_REMOVE_FROM_CART",payload:{itemId:e,size:t}}},g=function(e,t){return{type:"ALL_ITEMS_REMOVE_FROM_CART",payload:{itemId:e,size:t}}},h=function(){return{type:"CLEAR_CART"}},f=function(){return{type:"MODAL_CLOSE"}},v=a(24),E=a(18),y=a(4),_=a(5),O=a(7),N=a(6),I=a(8),C=(a(66),function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(i)))).state={formControls:{userName:{value:"",name:"userName",type:"text",label:"\u0418\u043c\u044f",placeholder:"\u043d\u0430\u043f\u0440.: \u0418\u0432\u0430\u043d",valid:!0,touched:!1},personsNumber:{value:"",name:"personsNumber",type:"number",label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0441\u043e\u043d",placeholder:"\u043d\u0430\u043f\u0440.: 2",valid:!1,touched:!1,validation:{required:!0}},street:{value:"",name:"street",type:"text",label:"\u0423\u043b\u0438\u0446\u0430",placeholder:"\u043d\u0430\u043f\u0440.: \u041b\u0435\u043d\u0438\u043d\u0430",valid:!1,touched:!1,validation:{required:!0}},building:{value:"",name:"building",type:"text",label:"\u0414\u043e\u043c",placeholder:"\u043d\u0430\u043f\u0440.: 50\u0430",valid:!1,touched:!1,validation:{required:!0,maxLength:4}},room:{value:"",name:"room",type:"number",label:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",placeholder:"\u043d\u0430\u043f\u0440.: 42",valid:!1,touched:!1,validation:{required:!0,maxLength:4}},phone:{value:"",name:"phone",type:"tel",label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",placeholder:"\u043d\u0430\u043f\u0440.: 8-555-55-55",valid:!1,touched:!1,validation:{required:!0,length:11}}},formValid:!1},a.renderInputs=function(){return Object.keys(a.state.formControls).map((function(e,t){var n=a.state.formControls[e];return r.a.createElement("label",{key:t,className:"col-12 col-md-6 col-lg-4 form-group"},n.label,r.a.createElement("input",{name:n.name,type:n.type,className:"input-text",value:n.value,placeholder:n.placeholder,onChange:function(e){return a.handleInputChange(e)}}),r.a.createElement("span",{className:"input__error-text"},!n.valid&&n.touched&&"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"))}))},a.handleInputChange=function(e){var t=Object(E.a)({},a.state.formControls,Object(v.a)({},e.target.name,Object(E.a)({},a.state.formControls[e.target.name],{touched:!0,valid:a.validateControl(e.target.value,a.state.formControls[e.target.name].validation),value:[e.target.value]}))),n=Object.keys(t).map((function(e){return t[e].valid})).every((function(e){return!0===e}));a.setState({formControls:t,formValid:n})},a.onSubmit=function(e){e.preventDefault(),a.props.openModalThanks(),a.setState({street:"",building:"",room:"",phoneNumber:""})},a}return Object(I.a)(t,e),Object(_.a)(t,[{key:"validateControl",value:function(e,t){var a=!0;return!t||(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.length&&(a=e.length===t.length&&a),a)}},{key:"render",value:function(){var e=this.state.formValid,t="button button-primary ".concat(e?"":"disabled");return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"m-t-6"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("form",{className:"order-form row"},this.renderInputs(),r.a.createElement("div",{className:"col-12 text-center m-t-1"},r.a.createElement("button",{disabled:!e,type:"submit",className:t,onClick:this.onSubmit},"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"))))}}]),t}(n.Component)),w={openModalThanks:function(){return{type:"MODAL_THANKS_OPEN"}}},j=Object(m.b)(null,w)(C),k=function(e){switch(e){case"sm":return"\u041c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f";case"md":return"\u0421\u0440\u0435\u0434\u043d\u044f\u044f";case"lg":return"\u0411\u043e\u043b\u044c\u0448\u0430\u044f";default:return""}},x=a(3),T=(a(67),function(e){var t=e.cart,a=e.itemRemoveFromCart,n=e.allItemsRemoveFromCart,i=e.itemAddToCart;return r.a.createElement("table",{className:"order-table"},r.a.createElement("tbody",null,t.order.map((function(e,t){var c=e.id,l=e.title,o=e.count,m=e.size;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,l," (",k(m),")"),r.a.createElement("td",{className:"text-center"},o," \u0448\u0442."),r.a.createElement("td",{className:"order-table__td-button"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return a(c,m)}},"-")),r.a.createElement("td",{className:"order-table__td-button hidden-767-down"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return n(c,m)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435")),r.a.createElement("td",{className:"order-table__td-button"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return i(c,1,m)}},"+")))})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},"\u0418\u0442\u043e\u0433\u043e:"),r.a.createElement("td",{colSpan:"3",className:"text-center"},t.total," \u0440\u0443\u0431."))))}),z={itemRemoveFromCart:b,allItemsRemoveFromCart:g,itemAddToCart:p},A=Object(m.b)((function(e){return{cart:e.cart}}),z)((function(e){var t=e.cart,a=e.itemRemoveFromCart,n=e.allItemsRemoveFromCart,i=e.itemAddToCart;return t.order.length<1?r.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement(T,{cart:t,itemRemoveFromCart:a,allItemsRemoveFromCart:n,itemAddToCart:i}),r.a.createElement(j,null))})),R=function(e){return function(t){return r.a.createElement(u,null,(function(a){return r.a.createElement(e,Object.assign({},t,{dataServise:a}))}))}},M=a(32),L=a.n(M),S=(a(83),a(84),function(e,t,a){return r.a.createElement("div",{className:"m-b-3"},r.a.createElement("h2",null,a&&a,":"),r.a.createElement(L.a,e,t))}),D=(a(85),a(33)),F=a.n(D),V=a(34),P=a.n(V),B=a(35),q=a.n(B),H=[{imgSrc:F.a,textTitle:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f!",textDescription:"\u041a\u0443\u043f\u0438 \u043f\u0438\u0446\u0446\u0443 \u0432 \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0430 1000 \u0440\u0443\u0431\u043b\u0435\u0439 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0438\u0446\u0446 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u0431\u0435 \u043b\u0435\u0442!!!"},{imgSrc:P.a,textTitle:"\u0421\u044b\u0442\u044b\u0439 \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",textDescription:"\u041f\u043e \u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430\u043c \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u0432\u0441\u044e \u043f\u0438\u0446\u0446\u0443 50%!"},{imgSrc:q.a,textTitle:"\u041d\u0430 \u043c\u0430\u0441\u0441\u0435!",textDescription:"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 \u0443 \u043d\u0430\u0441 \u043f\u0438\u0446\u0446\u0443 30 \u0434\u043d\u0435\u0439 \u043f\u043e\u0434\u0440\u044f\u0434 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0433\u043e\u0434\u043e\u0432\u043e\u0439 \u0430\u0431\u043e\u043d\u0435\u043c\u0435\u043d\u0442 \u0432 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440\u043d\u044b\u0439 \u0437\u0430\u043b!"}].map((function(e,t){return r.a.createElement("div",{className:"pizza-slide",key:t},r.a.createElement("div",{className:"pizza-slide__img",style:{backgroundImage:"url(".concat(e.imgSrc,")")}}),r.a.createElement("div",{className:"pizza-slide__text"},r.a.createElement("h2",{className:"pizza-slide__text-title"},e.textTitle),r.a.createElement("p",{className:"pizza-slide__text-description"},e.textDescription)))})),K={dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3},U=function(){return S(K,H,"\u0410\u043a\u0446\u0438\u0438")},J=(a(86),{onSearch:function(e){return{type:"ON_SEARCH",payload:e}}}),Q=Object(m.b)(null,J)((function(e){var t=e.onSearch;return r.a.createElement("div",{className:"search m-b-1 m-t-1"},r.a.createElement("input",{className:"search-input",type:"search",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430",onChange:function(e){return t(e.target.value)}}))})),Y=(a(87),{openModalProduct:function(e){return{type:"MODAL_PRODUCT_OPEN",payload:e}}}),G=Object(m.b)(null,Y)((function(e){var t=e.id,a=e.title,n=e.ingredientsInRus,i=e.details.sm.price,c=e.coverImage,l=e.openModalProduct,o=e.minicardType,m="mini-card ".concat("cuttingBoard"===o?"cutting-board":"");return r.a.createElement("div",{className:m},r.a.createElement("div",{className:"mini-card__img",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"mini-card__body"},r.a.createElement("div",{className:"mini-card__content"},r.a.createElement("div",{className:"mini-card__item-title"},a),r.a.createElement("div",{className:"mini-card__item-description"},n),r.a.createElement("div",{className:"mini-card__item-price"}," \u043e\u0442 ",i," \u0440\u0443\u0431.")),r.a.createElement("button",{className:"button button-primary",onClick:function(){return l(t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")))})),W=(a(88),function(e){var t=e.data,a=e.minicardType,n=e.id;return r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{id:n,className:"catalog__anchor"}),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 catalog-item",key:e.id},r.a.createElement(G,Object.assign({},e,{minicardType:a})))}))))}),X=function(e){var t=e.data,a=e.minicardType,n=e.id;return t?r.a.createElement(W,{data:t,minicardType:a,id:n}):r.a.createElement(W,{data:[],minicardType:a,id:n})},Z=Object(m.b)((function(e){return{visibleItems:e.visibleItems}}))((function(e){var t=e.visibleItems;return r.a.createElement(X,{data:t.pizza,minicardType:"cuttingBoard",id:"PizzaList"})})),$=Object(m.b)((function(e){return{visibleItems:e.visibleItems}}))((function(e){var t=e.visibleItems;return r.a.createElement(X,{data:t.drinks,minicardType:"noBg",id:"drinksList"})})),ee=(a(89),function(){return r.a.createElement("div",{className:"loader"})}),te=function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dataServise.getData().then((function(t){e.props.dataLoaded(t)}))}},{key:"render",value:function(){var e=Object.keys(this.props.visibleItems).length>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(Q,null),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement($,null)):r.a.createElement(ee,null))}}]),t}(r.a.Component),ae={dataLoaded:function(e){return{type:"DATA_LOADED",payload:e}}},ne=Object(m.b)((function(e){return{visibleItems:e.visibleItems}}),ae)(R(te)),re=function(){return r.a.createElement("h2",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")},ie=function(){return r.a.createElement("h2",{className:"text-center"},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0447\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435.")},ce=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1},a}return Object(I.a)(t,e),Object(_.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?r.a.createElement(ie,null):this.props.children}}]),t}(n.Component),le=a(23),oe=function(e,t){if(!e)return[];switch(t.type){case"DATA_LOADED":return t.payload;default:return e.dataItems}},me=function(e,t){if(!e)return{isModalOpen:!1};switch(t.type){case"MODAL_PRODUCT_OPEN":return{isModalOpen:!0,modalOpenType:"product-modal",openedItemId:t.payload};case"MODAL_THANKS_OPEN":return{isModalOpen:!0,modalOpenType:"thanks-modal",orderDetails:t.payload};case"MODAL_CLOSE":return{isModalOpen:!1};default:return e.modal}},se=function(e,t){if(!e)return{order:[],total:0};switch(t.type){case"CLEAR_CART":return{order:[],total:0};case"ITEM_ADD_TO_CART":var a=e.cart.order.findIndex((function(e){return e.id===t.payload.itemId&&e.size===t.payload.size})),n=e.cart.order[a];if(n){var r=n.id,i=n.title,c=n.price,l=n.size,o=n.count;return{order:[].concat(Object(x.a)(e.cart.order.slice(0,a)),[{id:r,title:i,count:n.count+t.payload.count,price:c,size:l,total:c*(o+t.payload.count)}],Object(x.a)(e.cart.order.slice(a+1))),total:e.cart.total+c*t.payload.count}}var m=function(e){var t=[];return Object.keys(e).forEach((function(a){t=[].concat(Object(x.a)(t),Object(x.a)(e[a]))})),t}(e.dataItems).find((function(e){return e.id===t.payload.itemId})),s=m.id,d=m.title,u=m.details,p=t.payload,b=p.count,g=p.size;return{order:[].concat(Object(x.a)(e.cart.order),[{id:s,title:d,count:b,price:u[g].price,size:g,total:u[g].price*b}]),total:e.cart.total+u[g].price*b};case"ITEM_REMOVE_FROM_CART":var h=e.cart.order.findIndex((function(e){return e.id===t.payload.itemId&&e.size===t.payload.size})),f=e.cart.order[h],v=f.price,y=f.count;return y>1?{order:[].concat(Object(x.a)(e.cart.order.slice(0,h)),[Object(E.a)({},f,{count:y-1,total:f.total-v})],Object(x.a)(e.cart.order.slice(h+1))),total:e.cart.total-v}:{order:[].concat(Object(x.a)(e.cart.order.slice(0,h)),Object(x.a)(e.cart.order.slice(h+1))),total:e.cart.total-v};case"ALL_ITEMS_REMOVE_FROM_CART":var _=e.cart.order.findIndex((function(e){return e.id===t.payload.itemId&&e.size===t.payload.size})),O=e.cart.order[_];return{order:[].concat(Object(x.a)(e.cart.order.slice(0,_)),Object(x.a)(e.cart.order.slice(_+1))),total:e.cart.total-O.price*O.count};default:return e.cart}},de=function(e,t){if(!e)return{};switch(t.type){case"DATA_LOADED":return t.payload;case"ON_SEARCH":return""===t.payload?e.dataItems:{pizza:e.dataItems.pizza.filter((function(e){return e.title.toLowerCase().indexOf(t.payload.toLowerCase())>-1})),drinks:e.dataItems.drinks.filter((function(e){return e.title.toLowerCase().indexOf(t.payload.toLowerCase())>-1}))};default:return e.visibleItems}},ue=function(e,t){return{dataItems:oe(e,t),visibleItems:de(e,t),cart:se(e,t),modal:me(e,t)}},pe=Object(le.b)(ue),be=a(36),ge=a.n(be),he=a(37),fe=a.n(he),ve=a(38),Ee=a.n(ve),ye=a(39),_e=a.n(ye),Oe=a(40),Ne=a.n(Oe),Ie=a(41),Ce=a.n(Ie),we=a(42),je=a.n(we),ke=a(43),xe=a.n(ke),Te=a(44),ze=a.n(Te),Ae=a(45),Re=a.n(Ae),Me=a(46),Le=a.n(Me),Se=a(47),De=a.n(Se),Fe=a(48),Ve=a.n(Fe),Pe=a(49),Be=a.n(Pe),qe=a(50),He=a.n(qe),Ke=a(51),Ue=a.n(Ke),Je=a(52),Qe=a.n(Je),Ye=a(53),Ge=a.n(Ye),We=(a(90),a(54)),Xe=a.n(We),Ze=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={scrollTarget:null},a.scrollLinksData=[{name:"\u041f\u0438\u0446\u0446\u0430",linkTo:"PizzaList"},{name:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438",linkTo:"drinksList"}],a.onLinkClick=function(e){"/"===a.props.history.location.pathname?document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"}):a.setState({scrollTarget:e})},a}return Object(I.a)(t,e),Object(_.a)(t,[{key:"componentDidUpdate",value:function(){document.getElementById(this.state.scrollTarget)&&(document.getElementById(this.state.scrollTarget).scrollIntoView({block:"start",behavior:"smooth"}),this.setState({scrollTarget:null}))}},{key:"render",value:function(){var e=this,t=this.scrollLinksData.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(l.b,{to:"/"},r.a.createElement("div",{className:"link-style",onClick:function(){return e.onLinkClick(t.linkTo)}},t.name)))}));return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__fixed"},r.a.createElement("div",{className:"container header__content"},r.a.createElement("div",{className:"header__top"},r.a.createElement("img",{className:"header__logo",src:Xe.a,alt:"logo"})),r.a.createElement("div",{className:"header__bottom"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"header__nav-list"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),t,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/cart"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"))))))))}}]),t}(r.a.Component),$e=Object(o.f)(Ze),et=(a(92),function(e){var t=e.currentItem,a=e.sizeName,n=e.itemsNumber,i=e.changeNumber,c=e.changeSize,l=e.onAddItem,o=t.title,m=t.details,s=t.coverImage,d=t.ingredientsInRus;return r.a.createElement("div",{className:"modal-order"},r.a.createElement("div",{className:"modal-order__img",style:{backgroundImage:"url(".concat(s,")")}}),r.a.createElement("div",{className:"modal-order__content"},r.a.createElement("h2",{className:"modal-order__title"},o),r.a.createElement("div",{className:"modal-order__details"},m[a].diameter&&m[a].diameter+","," ",m[a].weight),r.a.createElement("p",{className:"modal-order__ingridients"},d),r.a.createElement("form",{className:"modal-order__size-form"},function(e,t){return Object.keys(e.details).map((function(a,n){return r.a.createElement(r.a.Fragment,{key:e.id*n},r.a.createElement("input",{key:"inputKey"+e.id*n,type:"radio",name:"size",value:a,id:"size-".concat(a),checked:t===a,onChange:c}),r.a.createElement("label",{key:"labelKey"+e.id*n,htmlFor:"size-".concat(a)},k(a)))}))}(t,a)),r.a.createElement("div",{className:"modal-order__number"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e:",r.a.createElement("div",null,r.a.createElement("button",{className:"modal-order__num-btn decreace",onClick:function(){return i("dec")}},"-"),n,r.a.createElement("button",{className:"modal-order__num-btn increace",onClick:function(){return i("inc")}},"+"))),r.a.createElement("button",{className:"modal-order__button-to-cart button button-primary",onClick:function(){return l()}},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0437\u0430 ",m[a].price*n,"\u0440.")))}),tt=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={itemsNumber:1,sizeName:"sm"},a.changeNumber=function(e){"inc"===e&&a.setState({itemsNumber:a.state.itemsNumber+1}),"dec"===e&&a.state.itemsNumber>1&&a.setState({itemsNumber:a.state.itemsNumber-1})},a.changeSize=function(e){a.setState({sizeName:e.target.value})},a.onAddItem=function(){a.props.itemAddToCart(a.props.openedItemId,a.state.itemsNumber,a.state.sizeName),a.props.closeModal()},a}return Object(I.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=function(e){var t=[];return Object.keys(e).forEach((function(a){t=[].concat(Object(x.a)(t),Object(x.a)(e[a]))})),t}(this.props.dataItems).find((function(t){return t.id===e.props.openedItemId})),a=this.state,n=a.sizeName,i=a.itemsNumber;return r.a.createElement(et,{currentItem:t,sizeName:n,itemsNumber:i,changeNumber:this.changeNumber,changeSize:this.changeSize,onAddItem:this.onAddItem})}}]),t}(r.a.Component),at={itemAddToCart:p,closeModal:f},nt=Object(m.b)((function(e){return{dataItems:e.dataItems,openedItemId:e.modal.openedItemId}}),at)(tt),rt=(a(93),a(56)),it=a.n(rt),ct={clearCart:h,closeModal:f},lt=Object(m.b)(null,ct)((function(e){var t=e.clearCart,a=e.closeModal;return r.a.createElement("div",{className:"order-sent text-center"},r.a.createElement("h2",null,"\u0421\u043f\u0430\u0441\u0438\u0431\u043e!"),r.a.createElement("p",null,"\u041d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043d\u0435 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0435\u0433\u043e \u0443 \u043d\u0430\u0441 \u043d\u0435\u0442."),r.a.createElement("img",{className:"order-sent__courier",src:it.a,alt:"Your order preparing"}),r.a.createElement("button",{className:"button button-primary",onClick:function(){t(),a()}},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"))})),ot=(a(94),function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).onClose=function(){a.props.closeModal(),"thanks-modal"===a.props.modalOpenType&&a.props.clearCart()},a}return Object(I.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isModalOpen,a=e.modalOpenType;return t?r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("button",{className:"modal-close",onClick:this.onClose},"\xd7")),r.a.createElement("div",{className:"modal-body"},"product-modal"===a&&r.a.createElement(nt,null),"thanks-modal"===a&&r.a.createElement(lt,null)))):null}}]),t}(r.a.Component)),mt={closeModal:f,clearCart:h},st=Object(m.b)((function(e){var t=e.modal;return{isModalOpen:t.isModalOpen,modalOpenType:t.modalOpenType}}),mt)(ot),dt=(a(95),function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(O.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(r)))).state={cartVisible:!1},a}return Object(I.a)(t,e),Object(_.a)(t,[{key:"toggle",value:function(){this.setState({cartVisible:!this.state.cartVisible})}},{key:"render",value:function(){var e=this,t=this.props.cart.order.map((function(t,a){var n=t.id,i=t.title,c=t.size,l=t.count,o=t.total;return r.a.createElement("li",{key:a,className:"fixed-cart__li"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"fixed-cart__item-title"},i),r.a.createElement("span",{className:"fixed-cart__item-size"}," (",k(c),")")),r.a.createElement("div",{className:"fixed-cart__number"},"\u041a\u043e\u043b-\u0432\u043e: ",l,", \u0441\u0443\u043c\u043c\u0430: ",o,"\u0440\u0443\u0431.")),r.a.createElement("div",{className:"fixed-cart__buttons"},r.a.createElement("div",{className:"fixed-cart__buttons-group"},r.a.createElement("button",{className:"button button-primary",onClick:function(){return e.props.itemRemoveFromCart(n,c)}},"-"),r.a.createElement("button",{className:"button button-primary",onClick:function(){return e.props.itemAddToCart(n,1,c)}},"+")),r.a.createElement("button",{className:"button button-primary",onClick:function(){return e.props.allItemsRemoveFromCart(n,c)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0451")))})),a=this.state.cartVisible?"fixed-cart":"fixed-cart fixed-cart--hidden";return this.props.cart.order.length<1?null:r.a.createElement("div",{className:a},r.a.createElement("div",{className:"fixed-cart__header",onClick:function(){return e.toggle()}},r.a.createElement(l.b,{to:"/cart",className:"link-hover-underline"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 (",this.props.cart.total," \u0440\u0443\u0431.)"),r.a.createElement("div",{className:"fixed-cart__toggler"})),r.a.createElement("div",{className:"fixed-cart__body"},r.a.createElement("ul",{className:"fixed-cart__ul"},t)))}}]),t}(r.a.Component)),ut={itemRemoveFromCart:b,allItemsRemoveFromCart:g,itemAddToCart:p},pt=Object(m.b)((function(e){return{cart:e.cart}}),ut)(dt),bt=(a(96),new function e(){var t=this;Object(y.a)(this,e),this.data={pizza:[{id:1,title:"\u0424\u0438\u0440\u043c\u0435\u043d\u043d\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:ge.a,ingredientsInRus:"\u0411\u0435\u043a\u043e\u043d, \u0441\u0435\u0440\u0432\u0435\u043b\u0430\u0442, \u043a\u043e\u0440\u043d\u0438\u0448\u043e\u043d\u044b, \u043c\u0430\u0441\u043b\u0438\u043d\u044b, \u043b\u0443\u043a \u0444\u0440\u0438, \u0433\u043e\u0440\u0447\u0438\u0446\u0430 \u0434\u0438\u0436\u043e\u043d\u0441\u043a\u0430\u044f, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:2,title:"\u0411\u0430\u0440\u0431\u0435\u043a\u044e",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:fe.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u0431\u0435\u043a\u043e\u043d, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 BBQ"},{id:3,title:"\u041a\u0430\u0440\u0431\u043e\u043d\u0430\u0440\u0430",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Ee.a,ingredientsInRus:"\u0411\u0435\u043a\u043e\u043d, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u044b\u0440\u044b \u041f\u0430\u0440\u043c\u0435\u0437\u0430\u043d \u0438 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0447\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439"},{id:4,title:"\u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:_e.a,ingredientsInRus:"\u041a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u0438, \u0431\u0435\u043a\u043e\u043d, \u043e\u043f\u044f\u0442\u0430 \u0438 \u043b\u0443\u043a \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:5,title:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Ne.a,ingredientsInRus:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:6,title:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \u0441 \u0434\u0432\u043e\u0439\u043d\u044b\u043c \u0441\u044b\u0440\u043e\u043c",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Ce.a,ingredientsInRus:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:7,title:"6 \u0441\u044b\u0440\u043e\u0432",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:je.a,ingredientsInRus:"\u041f\u0430\u0440\u043c\u0435\u0437\u0430\u043d, \u0414\u043e\u0440-\u0431\u043b\u044e, \u0413\u0430\u0443\u0434\u0430, \u0427\u0435\u0434\u0434\u0435\u0440 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439, \u0442\u0432\u043e\u0440\u043e\u0436\u043d\u044b\u0439, \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430"},{id:8,title:"\u041e\u0441\u0442\u0440\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:xe.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u043f\u0435\u0440\u0435\u0446 \u0445\u0430\u043b\u0430\u043f\u0435\u043d\u044c\u043e, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043b\u0443\u043a, \u043b\u0435\u0447\u043e, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0441\u043e\u0443\u0441"},{id:9,title:"\u0427\u0438\u043a\u0435\u043d \u0440\u044d\u043d\u0447",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:ze.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0420\u0430\u043d\u0447"},{id:10,title:"\u041c\u044f\u0441\u043d\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Re.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0431\u0435\u043a\u043e\u043d, \u0441\u0435\u0440\u0432\u0435\u043b\u0430\u0442, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u043a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u041e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u0438, \u0442\u043e\u043c\u0430\u0442\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430 , \u0441\u043e\u0443\u0441 \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439"},{id:11,title:"\u0421 \u0432\u0435\u0442\u0447\u0438\u043d\u043e\u0439 \u0438 \u0433\u0440\u0438\u0431\u0430\u043c\u0438",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Le.a,ingredientsInRus:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u044b\u0440 \u0427\u0435\u0434\u0434\u0435\u0440 \u043e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439, \u0441\u043e\u0443\u0441 \u0447\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439"},{id:12,title:"\u0413\u0430\u0432\u0430\u0439\u0441\u043a\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:De.a,ingredientsInRus:"\u0424\u0438\u043b\u0435 \u0446\u044b\u043f\u043b\u0435\u043d\u043a\u0430, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u0430\u043d\u0430\u043d\u0430\u0441, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0440\u043e\u0437\u043e\u0432\u044b\u0439"},{id:13,title:"\u0411\u0430\u0440\u0431\u0435\u043a\u044e \u043c\u0438\u043a\u0441",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Ve.a,ingredientsInRus:"\u041a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u043e\u0445\u043e\u0442\u043d\u0438\u0447\u044c\u0438, \u0431\u0435\u043a\u043e\u043d, \u0432\u0435\u0442\u0447\u0438\u043d\u0430, \u043a\u043e\u0440\u043d\u0438\u0448\u043e\u043d\u044b, \u043c\u0430\u0441\u043b\u0438\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u043b\u0443\u043a \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0441\u043e\u0443\u0441\u044b \u0447\u0438\u043b\u0438, \u0442\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0438 BBQ"},{id:14,title:"\u0413\u0440\u0438\u0431\u043d\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:Be.a,ingredientsInRus:"\u0412\u0435\u0442\u0447\u0438\u043d\u0430, \u0441\u0435\u0440\u0432\u0435\u043b\u0430\u0442, \u0448\u0430\u043c\u043f\u0438\u043d\u044c\u043e\u043d\u044b, \u0441\u044b\u0440 \u041c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u043e\u0443\u0441 \u0420\u0430\u043d\u0447, \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u0432\u044b"},{id:15,title:"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f",details:{sm:{price:330,weight:"360 \u0433\u0440.",diameter:"35 \u0441\u043c"},md:{price:420,weight:"470 \u0433\u0440.",diameter:"45 \u0441\u043c"},lg:{price:650,weight:"720 \u0433\u0440.",diameter:"55 \u0441\u043c"}},coverImage:He.a,ingredientsInRus:"\u0421\u044b\u0440 \u043c\u043e\u0446\u0430\u0440\u0435\u043b\u043b\u0430, \u0441\u044b\u0440 \u0422\u0432\u043e\u0440\u043e\u0436\u043d\u044b\u0439, \u0442\u043e\u043c\u0430\u0442\u044b, \u043c\u0430\u0441\u043b\u0438\u043d\u044b, \u043b\u0435\u0447\u043e, \u043b\u0443\u043a \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439, \u0441\u043e\u0443\u0441\u044b \u0440\u0430\u043d\u0447, \u0447\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439, \u043c\u0430\u0441\u043b\u043e \u043e\u0441\u0442\u0440\u043e\u0435"}],drinks:[{id:17,title:"Coca-Cola",details:{sm:{price:80,weight:"0.5 \u043b"},md:{price:100,weight:"1 \u043b"}},coverImage:Ue.a},{id:18,title:"Fanta",details:{sm:{price:80,weight:"0.5 \u043b"},md:{price:100,weight:"1 \u043b"}},coverImage:Qe.a},{id:19,title:"Sprite",details:{sm:{price:80,weight:"0.5 \u043b"},md:{price:100,weight:"1 \u043b"}},coverImage:Ge.a}]},this.getData=function(){return new Promise((function(e){setTimeout((function(){return e(t.data)}),500)}))}}),gt=function(){return r.a.createElement(m.a,{store:pe},r.a.createElement(l.a,{basename:"/shop"},r.a.createElement(ce,null,r.a.createElement($e,null),r.a.createElement("main",null,r.a.createElement(d,{value:bt},r.a.createElement("div",{className:"container"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:ne}),r.a.createElement(o.a,{path:"/cart",exact:!0,component:A}),r.a.createElement(o.a,{path:"/",exact:!0,component:pt}),r.a.createElement(o.a,{component:re})))),r.a.createElement("div",{id:"pizzaID"})))),r.a.createElement(st,null))};a(97);c.a.render(r.a.createElement(gt,null),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.d6088603.chunk.js.map