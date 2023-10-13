(()=>{"use strict";var t={8649:(t,a,r)=>{r(6992),r(8674),r(9601),r(7727);var e=r(7195),s=function(){var t=this,a=t._self._c;return a("div",[a("MainHeader"),a("router-view"),a("MainFooter")],1)},o=[],i=r(6384),n=function(){var t=this,a=t._self._c;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__wrapper container"},[a("span",{staticClass:"header__info"},[t._v("Каталог")]),t._m(0),a("a",{staticClass:"header__tel",attrs:{href:"tel:8 800 600 90 09"}},[t._v(" 8 800 600 90 09 ")]),a("CardIndicator")],1)])},c=[function(){var t=this,a=t._self._c;return a("a",{staticClass:"header__logo",attrs:{href:"/"}},[a("img",{attrs:{src:"img/svg/logo-tech.svg",alt:"Логотип интернет магазина Технозавррр",width:"190",height:"33"}})])}],l=function(){var t=this,a=t._self._c;return a("router-link",{staticClass:"header__cart",attrs:{"aria-label":"Корзина с товарами",to:{name:"cart"}}},[a("svg",{attrs:{width:"30",height:"21",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-cart"}})]),t.$store.state.cartProducts.length>0?a("span",{staticClass:"header__count",attrs:{"aria-label":"Количество товаров"}},[t._v(t._s(t.$store.state.cartProducts.length))]):t._e()])},u=[];const d={},_=d;var p=r(1001),m=(0,p.Z)(_,l,u,!1,null,null,null);const f=m.exports,v={components:{CardIndicator:f}},h=v;var C=(0,p.Z)(h,n,c,!1,null,null,null);const g=C.exports;var b=function(){var t=this,a=t._self._c;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"footer__wrapper container"},[t._m(0),a("ul",{staticClass:"footer__social social"},[a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Вконтакте"}},[a("svg",{attrs:{width:"20",height:"11",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-vk"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Инстаграм"}},[a("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-insta"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Facebook"}},[a("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-facebook"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Twitter"}},[a("svg",{attrs:{width:"17",height:"14",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-twitter"}})])])]),a("li",{staticClass:"social__item"},[a("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Telegram"}},[a("svg",{attrs:{width:"19",height:"17",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-telegram"}})])])])]),a("p",{staticClass:"footer__desc"},[t._v(" Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. ")]),t._m(1),a("span",{staticClass:"footer__copyright"},[t._v(" © 2020 Технозавррр ")])])])},y=[function(){var t=this,a=t._self._c;return a("ul",{staticClass:"footer__links"},[a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Каталог ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"tel:88006009009"}},[t._v(" 8 800 600 90 09 ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"mailto:hi@technozavrrr.com"}},[t._v(" hi@technozavrrr.com ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Распродажа ")])]),a("li",[a("a",{staticClass:"footer__link footer__link--medium",attrs:{href:"#"}},[t._v(" Заказать звонок ")])])])},function(){var t=this,a=t._self._c;return a("ul",{staticClass:"footer__data"},[a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Политика конфиденциальности ")])]),a("li",[a("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Публичная оферта ")])])])}];const P={},k=P;var x=(0,p.Z)(k,b,y,!1,null,null,null);const F=x.exports;var I=r(8004);const D={components:{MainHeader:g,MainFooter:F},created:function(){var t=localStorage.getItem("userAccessKey");t&&this.updateUserAccessKey(t),this.loadCar()},methods:(0,i.Z)((0,i.Z)({},(0,I.nv)(["loadCar"])),(0,I.OI)(["updateUserAccessKey"]))},Z=D;var w=(0,p.Z)(Z,s,o,!1,null,null,null);const A=w.exports;var T=r(2241),$=function(){var t=this,a=t._self._c;return a("main",{staticClass:"content container"},[t._m(0),a("div",{staticClass:"content__catalog"},[a("ProductFilter",{model:{value:t.filterColor,callback:function(a){t.filterColor=a},expression:"filterColor"}}),a("section",{staticClass:"catalog"},[t.productsLoading?a("div",[t._v("Загрузка таваров...")]):t._e(),t.productsLoadingFailed?a("div",[t._v("Произошла ошибка "),a("button",{on:{click:function(a){return a.preventDefault(),t.loadProducts.apply(null,arguments)}}},[t._v("Попробовать еще раз")])]):t._e(),a("ProductList",{attrs:{products:t.products}}),a("BasePagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)],1)])},O=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content__top content__top--catalog"},[a("h1",{staticClass:"content__title"},[t._v(" Каталог ")]),a("span",{staticClass:"content__info"},[t._v(" 152 товара ")])])}],B=(r(1249),r(2564),r(5851)),E=function(){var t=this,a=t._self._c;return a("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return a("ProductItem",{key:t.id,attrs:{product:t}})})),1)},K=[],L=function(){var t=this,a=t._self._c;return a("li",{staticClass:"catalog__item"},[a("router-link",{staticClass:"catalog__pic",attrs:{to:{name:"product",params:{id:t.product.id}}}},[a("img",{attrs:{src:t.product.image,alt:t.product.title}})]),a("h3",{staticClass:"catalog__title"},[a("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.product.title)+" ")])]),a("span",{staticClass:"catalog__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),a("ul",{staticClass:"colors colors--black"},t._l(t.product.colors,(function(r){return a("li",{key:r,staticClass:"colors__item"},[a("label",{staticClass:"colors__label",attrs:{for:t.product.id+r}},[a("input",{staticClass:"colors__radio sr-only",attrs:{id:t.product.id,type:"radio",name:t.product.id},domProps:{value:r}}),a("span",{staticClass:"colors__value",style:t.background(r)})])])})),0)],1)},S=[];const N=new e.ZP;function M(t,a){N.$emit("goToPage",t,a)}function V(t){return(new Intl.NumberFormat).format(t)}const z={data:function(){return{color:"#73B6EA"}},props:["product"],filters:{numberFormat:V},methods:{background:function(t){return{"background-color":t}},goToPage:M}},U=z;var j=(0,p.Z)(U,L,S,!1,null,null,null);const q=j.exports,H={props:["products"],components:{ProductItem:q}},R=H;var G=(0,p.Z)(R,E,K,!1,null,null,null);const X=G.exports;var J=function(){var t=this,a=t._self._c;return a("ul",{staticClass:"catalog__pagination pagination"},[a("li",{staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":1===t.page},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.paginate(t.page-1)}}},[t._v(" < ")])]),t._l(t.pages,(function(r){return a("li",{key:r,staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link",class:{"pagination__link--current":r===t.page},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.paginate(r)}}},[t._v(" "+t._s(r)+" ")])])})),a("li",{staticClass:"pagination__item"},[a("a",{staticClass:"pagination__link pagination__link--arrow",class:{"pagination__link--disabled":t.page===t.pages},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.paginate(t.page+1)}}},[t._v(" > ")])])],2)},Q=[];const W={model:{prop:"page",event:"paginate"},props:["page","count","perPage"],computed:{pages:function(){return Math.ceil(this.count/this.perPage)}},methods:{paginate:function(t){this.$emit("paginate",t)}}},Y=W;var tt=(0,p.Z)(Y,J,Q,!1,null,null,null);const at=tt.exports;r(7327),r(1539);var rt=function(){var t=this,a=t._self._c;return a("aside",{staticClass:"filter"},[a("h2",{staticClass:"filter__title"},[t._v("Фильтры")]),a("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Цена")]),a("label",{staticClass:"form__label form__label--price",attrs:{for:"start"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{id:"start",type:"text",name:"min-price"},domProps:{value:t.currentPriceFrom},on:{input:function(a){a.target.composing||(t.currentPriceFrom=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}}),a("span",{staticClass:"form__value"},[t._v("От")])]),a("label",{staticClass:"form__label form__label--price",attrs:{for:"end"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{id:"end",type:"text",name:"max-price"},domProps:{value:t.currentPriceTo},on:{input:function(a){a.target.composing||(t.currentPriceTo=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}}),a("span",{staticClass:"form__value"},[t._v("До")])])]),a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Категория")]),a("label",{staticClass:"form__label form__label--select",attrs:{for:"cat"}},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{type:"text",name:"category",id:"cat"},on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(a){var r="_value"in a?a._value:a.value;return t._n(r)}));t.currentCategoryId=a.target.multiple?r:r[0]}}},[a("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(r){return a("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.title))])}))],2)])]),a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Цвет")]),a("ul",{staticClass:"colors"},t._l(t.colors,(function(r){return a("li",{key:r.id,staticClass:"colors__item"},[a("label",{staticClass:"colors__label",attrs:{for:r.id}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{id:r.id,type:"radio",name:"color"},domProps:{value:r.value,checked:t._q(t.currentColor,r.value)},on:{click:function(a){return t.clicked(r.value)},change:function(a){t.currentColor=r.value}}}),a("span",{staticClass:"colors__value",style:t.background(r.value)})])])})),0)]),a("button",{staticClass:"filter__submit button button--primery",attrs:{type:"submit"}},[t._v(" Применить ")]),a("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.reset.apply(null,arguments)}}},[t._v(" Сбросить ")])])])},et=[];const st=[{id:1,value:"#73B6EA"},{id:2,value:"#FFBE15"},{id:3,value:"#8BE000"},{id:4,value:"#939393"},{id:5,value:"#FF6B00"},{id:6,value:"#FFF"},{id:7,value:"#000"}];var ot="https://vue-study.skillbox.cc/";const it={data:function(){return{currentPriceFrom:0,currentPriceTo:0,currentCategoryId:0,currentColor:0,categoriesData:null}},props:["priceFrom","priceTo","categoryId","color"],computed:{categories:function(){return this.categoriesData?this.categoriesData.items:[]},colors:function(){return st}},watch:{priceFrom:function(t){this.currentPriceFrom=t},priceTo:function(t){this.currentPriceTo=t},categoryId:function(t){this.currentCategoryId=t},color:function(t){this.currentColor=t}},methods:{submit:function(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:color",this.currentColor)},reset:function(){this.$emit("update:priceFrom",0),this.$emit("update:priceTo",0),this.$emit("update:categoryId",0),this.$emit("update:color",0)},clicked:function(t){this.currentColor=t},background:function(t){return{"background-color":t}},loadCategories:function(){var t=this;B.Z.get("".concat(ot,"api/productCategories")).then((function(a){t.categoriesData=a.data}))}},created:function(){this.loadCategories()}},nt=it;var ct=(0,p.Z)(nt,rt,et,!1,null,null,null);const lt=ct.exports,ut={components:{ProductList:X,BasePagination:at,ProductFilter:lt},data:function(){return{filterPriceForm:0,filterPriceTo:0,filterCategoryId:0,filterColor:0,productsPerPage:4,page:1,productsData:null,productsLoading:!1,productsLoadingFailed:!1}},computed:{products:function(){return this.productsData?this.productsData.items.map((function(t){return(0,i.Z)((0,i.Z)({},t),{},{image:t.image.file.url})})):[]},countProducts:function(){return this.productsData?this.productsData.pagination.total:0}},methods:{loadProducts:function(){var t=this;this.productsLoading=!0,this.productsLoadingFailed=!1,clearTimeout(this.loadProductsTimer),this.loadProductsTimer=setTimeout((function(){B.Z.get("".concat(ot,"api/products"),{params:{page:t.page,limit:t.productsPerPage,categoryId:t.filterCategoryId,minPrice:t.filterPriceForm,maxPrice:t.filterPriceTo}}).then((function(a){return t.productsData=a.data}))["catch"]((function(){return t.productsLoadingFailed=!0})).then((function(){return t.productsLoading=!1}))}),0)}},watch:{page:function(){this.loadProducts()},filterPriceForm:function(){this.loadProducts()},filterPriceTo:function(){this.loadProducts()},filterCategoryId:function(){this.loadProducts()}},created:function(){this.loadProducts()}},dt=ut;var _t=(0,p.Z)(dt,$,O,!1,null,null,null);const pt=_t.exports;var mt=function(){var t=this,a=t._self._c;return a("div",[t.productLoading?a("main",{staticClass:"content container"},[t._v("Загрузка товара...")]):t.productData?t._e():a("main",{staticClass:"content container"},[t._v("Произошла ошибка")]),t.productData?a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" Каталог ")])],1),a("li",{staticClass:"breadcrumbs__item"},[a("router-link",{staticClass:"breadcrumbs__link",attrs:{to:{name:"main"}}},[t._v(" "+t._s(t.category.title)+" ")])],1),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" "+t._s(t.product.title)+" ")])])])]),a("section",{staticClass:"item"},[a("div",{staticClass:"item__pics pics"},[a("div",{staticClass:"pics__wrapper"},[a("img",{attrs:{width:"570",height:"570",src:t.product.image,alt:t.product.title}})])]),a("div",{staticClass:"item__info"},[a("span",{staticClass:"item__code"},[t._v("Артикул: "+t._s(t.product.id))]),a("h2",{staticClass:"item__title"},[t._v(" "+t._s(t.product.title)+" ")]),a("div",{staticClass:"item__form"},[a("form",{staticClass:"form",attrs:{action:"#",method:"POST"},on:{submit:function(a){return a.preventDefault(),t.addToCart.apply(null,arguments)}}},[a("b",{staticClass:"item__price"},[t._v(" "+t._s(t._f("numberFormat")(t.product.price))+" ₽ ")]),t._m(0),a("div",{staticClass:"item__row"},[a("div",{staticClass:"form__counter"},[a("button",{attrs:{type:"button","aria-label":"Убрать один товар"},on:{click:function(a){return a.preventDefault(),t.minusAmount()}}},[a("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-minus"}})])]),a("label",{attrs:{for:"amount"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.productAmount,expression:"productAmount",modifiers:{number:!0}}],attrs:{id:"amount",type:"text",value:"1"},domProps:{value:t.productAmount},on:{input:function(a){a.target.composing||(t.productAmount=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),a("button",{attrs:{type:"button","aria-label":"Добавить один товар"},on:{click:function(a){return a.preventDefault(),t.plusAmount()}}},[a("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),a("button",{staticClass:"button button--primery",attrs:{type:"submit",disabled:t.productAddSending}},[t._v(" В корзину ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.productAdding,expression:"productAdding"}]},[t._v("Товар добавлен в корзину")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.productAddSending,expression:"productAddSending"}]},[t._v("Добавляем товар в корзину")])])])])])])]):t._e()])},ft=[function(){var t=this,a=t._self._c;return a("fieldset",{staticClass:"form__block"},[a("legend",{staticClass:"form__legend"},[t._v("Объемб в ГБ:")]),a("ul",{staticClass:"sizes sizes--primery"},[a("li",{staticClass:"sizes__item"})])])}];r(2222);const vt={data:function(){return{productAmount:1,productData:null,productLoading:!1,productLoadingFailed:!1,productAdding:!1,productAddSending:!1}},filters:{numberFormat:V},computed:{product:function(){return this.productData},category:function(){return this.productData.category}},methods:(0,i.Z)((0,i.Z)({},(0,I.nv)(["addProductToCart"])),{},{goToPage:M,addToCart:function(){var t=this;this.productAdding=!1,this.productAddSending=!0,this.addProductToCart({productId:this.product.id,amount:this.productAmount}).then((function(){t.productAdding=!0,t.productAddSending=!1}))},loadProduct:function(){var t=this;this.productLoading=!0,this.productLoadingFailed=!1,B.Z.get("".concat(ot,"api/products/").concat(this.$route.params.id)).then((function(a){t.productData=(0,i.Z)((0,i.Z)({},a.data),{},{image:a.data.image.file.url})}))["catch"]((function(){return t.productLoadingFailed=!1})).then((function(){return t.productLoading=!1}))},minusAmount:function(){this.productAmount>1&&(this.productAmount-=1)},plusAmount:function(){this.productAmount+=1}}),watch:{"this.$route.params.id":{handler:function(){this.loadProduct()},immediate:!0}}},ht=vt;var Ct=(0,p.Z)(ht,mt,ft,!1,null,null,null);const gt=Ct.exports;var bt=function(){var t=this,a=t._self._c;return a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[t._m(0),a("h1",{staticClass:"content__title"},[t._v(" Корзина ")]),a("span",{staticClass:"content__info"},[t._v(" "+t._s(t.productsNumber)+" товара ")])]),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[a("div",{staticClass:"cart__field"},[a("ul",{staticClass:"cart__list"},t._l(t.products,(function(t){return a("CartItem",{key:t.productId,attrs:{item:t}})})),1)]),a("div",{staticClass:"cart__block"},[a("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),a("p",{staticClass:"cart__price"},[t._v(" Итого: "),a("span",[t._v(t._s(t._f("numberFormat")(t.totalPrice))+" ₽")])]),a("router-link",{staticClass:"cart__button button button--primery",attrs:{teg:"button",to:{name:"order"},type:"submit"}},[t._v(" Оформить заказ ")])],1)])])])},yt=[function(){var t=this,a=t._self._c;return a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" Корзина ")])])])}],Pt=function(){var t=this,a=t._self._c;return a("li",{staticClass:"cart__item product"},[a("div",{staticClass:"product__pic"},[a("img",{attrs:{src:t.item.product.image,width:"120",height:"120",alt:"item.product.title"}})]),a("h3",{staticClass:"product__title"},[t._v(" "+t._s(t.item.product.title)+" ")]),a("span",{staticClass:"product__code"},[t._v(" Артикул: "+t._s(t.item.productId)+" ")]),a("div",{staticClass:"product__counter form__counter"},[a("button",{attrs:{type:"button","aria-label":"Убрать один товар"}},[a("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-minus"}})])]),a("label",{attrs:{for:"count"}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],attrs:{id:"count",type:"text",name:"count"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),a("button",{attrs:{type:"button","aria-label":"Добавить один товар"}},[a("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),a("b",{staticClass:"product__price"},[t._v(" "+t._s(t._f("numberFormat")(t.item.product.price*t.item.amount))+" ₽ ")]),a("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"},on:{click:function(a){return a.preventDefault(),t.deleteProduct(t.item.productId)}}},[a("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#icon-close"}})])])])},kt=[];const xt={props:["item"],filters:{numberFormat:V},computed:{amount:{get:function(){return this.item.amount},set:function(t){this.$store.dispatch("updateCartProductAmount",{productId:this.item.productId,amount:t})}}},methods:(0,i.Z)({},(0,I.OI)({deleteProduct:"deleteCartProduct"}))},Ft=xt;var It=(0,p.Z)(Ft,Pt,kt,!1,null,null,null);const Dt=It.exports,Zt={filters:{numberFormat:V},components:{CartItem:Dt},computed:(0,i.Z)((0,i.Z)({},(0,I.Se)({products:"cartDetailProducts",totalPrice:"cartTotalPrice"})),{},{productsNumber:function(){return this.products.length}})},wt=Zt;var At=(0,p.Z)(wt,bt,yt,!1,null,null,null);const Tt=At.exports;var $t=function(){var t=this,a=t._self._c;return a("h1",[t._v("Страница не найдена")])},Ot=[];const Bt={},Et=Bt;var Kt=(0,p.Z)(Et,$t,Ot,!1,null,null,null);const Lt=Kt.exports;r(8309);var St=function(){var t=this,a=t._self._c;return a("main",{staticClass:"content container"},[t._m(0),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"},on:{submit:function(a){return a.preventDefault(),t.order.apply(null,arguments)}}},[a("div",{staticClass:"cart__field"},[a("div",{staticClass:"cart__data"},[a("BaseFromText",{attrs:{title:"ФИО",error:t.formError.name,placeholder:"Введите ваше полное имя"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}}),a("BaseFromText",{attrs:{title:"Адрес доставки",error:t.formError.address,placeholder:"Введите ваш адрес"},model:{value:t.formData.address,callback:function(a){t.$set(t.formData,"address",a)},expression:"formData.address"}}),a("BaseFromText",{attrs:{title:"Телефон",error:t.formError.phone,placeholder:"Введите ваш телефон"},model:{value:t.formData.phone,callback:function(a){t.$set(t.formData,"phone",a)},expression:"formData.phone"}}),a("BaseFromText",{attrs:{title:"Email",error:t.formError.email,placeholder:"Введи ваш Email"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}}),a("BaseFromTextarea",{attrs:{title:"Комментарий к заказу",error:t.formError.comment,placeholder:"Ваши пожелания"},model:{value:t.formData.comment,callback:function(a){t.$set(t.formData,"comment",a)},expression:"formData.comment"}})],1),t._m(1)]),t._m(2),t.formErrorMessage?a("div",{staticClass:"cart__error form__error-block"},[a("h4",[t._v("Заявка не отправлена!")]),a("p",[t._v(" "+t._s(t.formErrorMessage)+" ")])]):t._e()])])])},Nt=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"content__top"},[a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])]),a("h1",{staticClass:"content__title"},[t._v(" Корзина ")]),a("span",{staticClass:"content__info"},[t._v(" 3 товара ")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"cart__options"},[a("h3",{staticClass:"cart__title"},[t._v("Доставка")]),a("ul",{staticClass:"cart__options options"},[a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"delivery",value:"0",checked:""}}),a("span",{staticClass:"options__value"},[t._v(" Самовывоз "),a("b",[t._v("бесплатно")])])])]),a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"delivery",value:"500"}}),a("span",{staticClass:"options__value"},[t._v(" Курьером "),a("b",[t._v("500 ₽")])])])])]),a("h3",{staticClass:"cart__title"},[t._v("Оплата")]),a("ul",{staticClass:"cart__options options"},[a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"pay",value:"card"}}),a("span",{staticClass:"options__value"},[t._v(" Картой при получении ")])])]),a("li",{staticClass:"options__item"},[a("label",{staticClass:"options__label"},[a("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"pay",value:"cash"}}),a("span",{staticClass:"options__value"},[t._v(" Наличными при получении ")])])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"cart__block"},[a("ul",{staticClass:"cart__orders"},[a("li",{staticClass:"cart__order"},[a("h3",[t._v("Смартфон Xiaomi Redmi Note 7 Pro 6/128GB")]),a("b",[t._v("18 990 ₽")]),a("span",[t._v("Артикул: 150030")])]),a("li",{staticClass:"cart__order"},[a("h3",[t._v("Гироскутер Razor Hovertrax 2.0ii")]),a("b",[t._v("4 990 ₽")]),a("span",[t._v("Артикул: 150030")])]),a("li",{staticClass:"cart__order"},[a("h3",[t._v("Электрический дрифт-карт Razor Lil’ Crazy")]),a("b",[t._v("8 990 ₽")]),a("span",[t._v("Артикул: 150030")])])]),a("div",{staticClass:"cart__total"},[a("p",[t._v("Доставка: "),a("b",[t._v("500 ₽")])]),a("p",[t._v("Итого: "),a("b",[t._v("3")]),t._v(" товара на сумму "),a("b",[t._v("37 970 ₽")])])]),a("button",{staticClass:"cart__button button button--primery",attrs:{type:"submit"}},[t._v(" Оформить заказ ")])])}],Mt=(r(7658),function(){var t=this,a=t._self._c;return a("BaseFromField",{attrs:{title:t.title,error:t.error}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input",attrs:{type:"text",name:"name",placeholder:t.placeholder},domProps:{value:t.dataValue},on:{input:function(a){a.target.composing||(t.dataValue=a.target.value)}}})])}),Vt=[],zt=function(){var t=this,a=t._self._c;return a("label",{staticClass:"form__label"},[t._t("default"),a("span",{staticClass:"form__value"},[t._v(t._s(t.title))]),t.error?a("span",{staticClass:"form__error"},[t._v(t._s(t.error))]):t._e()],2)},Ut=[];const jt={name:"BaseFromField",props:["title","error"]},qt=jt;var Ht=(0,p.Z)(qt,zt,Ut,!1,null,null,null);const Rt=Ht.exports,Gt={name:"BaseFromTextarea",props:["title","error","placeholder","value"],components:{BaseFromField:Rt},computed:{dataValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},Xt={name:"BaseFromText",mixins:[Gt]},Jt=Xt;var Qt=(0,p.Z)(Jt,Mt,Vt,!1,null,null,null);const Wt=Qt.exports;var Yt=function(){var t=this,a=t._self._c;return a("BaseFromField",{attrs:{title:t.title,error:t.error}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataValue,expression:"dataValue"}],staticClass:"form__input form__input--area",attrs:{placeholder:t.placeholder},domProps:{value:t.dataValue},on:{input:function(a){a.target.composing||(t.dataValue=a.target.value)}}})])},ta=[];const aa={name:"BaseFromText",mixins:[Gt]},ra=aa;var ea=(0,p.Z)(ra,Yt,ta,!1,null,null,null);const sa=ea.exports,oa={name:"OrderPage",components:{BaseFromText:Wt,BaseFromTextarea:sa},data:function(){return{formData:{},formError:{},formErrorMessage:""}},methods:{order:function(){var t=this;this.formError={},this.formErrorMessage="",B.Z.post("".concat(ot,"api/orders"),(0,i.Z)({},this.formData),{params:{userAccessKey:this.$store.state.userAccessKey}}).then((function(a){t.$store.commit("resetCard"),t.$store.commit("updateOrderInfo",a.data),t.$router.push({name:"orderInfo",params:{id:a.data.id}})}))["catch"]((function(a){t.formError=a.response.data.error.request||{},t.formErrorMessage=a.response.data.error.message||""}))}}},ia=oa;var na=(0,p.Z)(ia,St,Nt,!1,null,null,null);const ca=na.exports;var la=function(){var t=this,a=t._self._c;return t.order?a("main",{staticClass:"content container"},[a("div",{staticClass:"content__top"},[t._m(0),a("h1",{staticClass:"content__title"},[t._v(" Заказ оформлен "),a("span",[t._v("№ "+t._s(t.order.id||""))])])]),a("section",{staticClass:"cart"},[a("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[a("div",{staticClass:"cart__field"},[a("p",{staticClass:"cart__message"},[t._v(" Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ")]),a("ul",{staticClass:"dictionary"},[a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Получатель ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.name)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Адрес доставки ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.address)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Телефон ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.phone)+" ")])]),a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Email ")]),a("span",{staticClass:"dictionary__value"},[t._v(" "+t._s(t.order.email)+" ")])]),t._m(1)])]),a("div",{staticClass:"cart__block"},[t._l(t.order.basket.items,(function(r){return a("ul",{key:r.id,staticClass:"cart__orders"},[a("li",{staticClass:"cart__order"},[a("h3",[t._v(t._s(r.product.title))]),a("b",[t._v(t._s(r.price)+" ₽")]),a("span",[t._v("Артикул: "+t._s(r.id))])])])})),a("div",{staticClass:"cart__total"},[t._m(2),a("p",[t._v("Итого: "),a("b",[t._v("3")]),t._v(" товара на сумму "),a("b",[t._v(t._s(t.order.generalPrice)+" ₽")])])])],2)])])]):t._e()},ua=[function(){var t=this,a=t._self._c;return a("ul",{staticClass:"breadcrumbs"},[a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),a("li",{staticClass:"breadcrumbs__item"},[a("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])])},function(){var t=this,a=t._self._c;return a("li",{staticClass:"dictionary__item"},[a("span",{staticClass:"dictionary__key"},[t._v(" Способ оплаты ")]),a("span",{staticClass:"dictionary__value"},[t._v(" картой при получении ")])])},function(){var t=this,a=t._self._c;return a("p",[t._v("Доставка: "),a("b",[t._v("500 ₽")])])}];const da={name:"OrderInfoPage",computed:(0,i.Z)({},(0,I.Se)({order:"getOrgerInfo"})),created:function(){this.$store.state.orderInfo&&this.$store.state.orderInfo.id===this.$route.params.id||this.$store.dispatch("loadOrderInfo",this.$route.params.id)}},_a=da;var pa=(0,p.Z)(_a,la,ua,!1,null,null,null);const ma=pa.exports;e.ZP.use(T.ZP);var fa=[{name:"main",component:pt,path:"/"},{name:"product",component:gt,path:"/product/:id"},{name:"cart",component:Tt,path:"/cart/"},{name:"order",component:ca,path:"/order"},{name:"orderInfo",component:ma,path:"/order/:id"},{name:"not-found",component:Lt,path:"*"}],va=new T.ZP({routes:fa});const ha=va;r(9826),r(5827);e.ZP.use(I.ZP);const Ca=new I.ZP.Store({state:{cartProducts:[],userAccessKey:null,cartProductsData:[],orderInfo:null},mutations:{updateOrderInfo:function(t,a){t.orderInfo=a},resetCard:function(t){t.cartProducts=[],t.cartProductsData=[]},syncCarProducts:function(t){t.cartProducts=t.cartProductsData.map((function(t){return{productId:t.product.id,amount:t.quantity}}))},updateCartProductAmount:function(t,a){var r=a.productId,e=a.amount,s=t.cartProducts.find((function(t){return t.productId===r}));s&&(s.amount=e)},deleteCartProduct:function(t,a){t.cartProducts=t.cartProducts.filter((function(t){return t.productId!==a}))},updateUserAccessKey:function(t,a){t.userAccessKey=a},updateCartProductsData:function(t,a){t.cartProductsData=a}},getters:{cartDetailProducts:function(t){return t.cartProducts.map((function(a){var r=t.cartProductsData.find((function(t){return t.product.id===a.productId})),e=r.product;return(0,i.Z)((0,i.Z)({},a),{},{product:(0,i.Z)((0,i.Z)({},e),{},{image:e.image.file.url})})}))},getOrgerInfo:function(t){if(t.orderInfo){var a=t.orderInfo.basket.items.reduce((function(t,a){return t.price+a.price}));return(0,i.Z)((0,i.Z)({},t.orderInfo),{},{generalPrice:a})}},cartTotalPrice:function(t,a){return a.cartDetailProducts.reduce((function(t,a){return a.product.price*a.amount+t}),0)}},actions:{loadOrderInfo:function(t,a){return B.Z.get("".concat(ot,"api/orders/").concat(a),{params:{userAccessKey:t.state.userAccessKey}}).then((function(a){t.commit("updateOrderInfo",a.data)}))},loadCar:function(t){return B.Z.get("".concat(ot,"api/baskets"),{params:{userAccessKey:t.state.userAccessKey}}).then((function(a){t.state.userAccessKey||(localStorage.setItem("userAccessKey",a.data.user.accessKey),t.commit("updateUserAccessKey",a.data.user.accessKey)),t.commit("updateCartProductsData",a.data.items),t.commit("syncCarProducts")}))},addProductToCart:function(t,a){var r=a.productId,e=a.amount;return B.Z.post("".concat(ot,"api/baskets/products"),{productId:r,quantity:e},{params:{userAccessKey:t.state.userAccessKey}}).then((function(a){t.commit("updateCartProductsData",a.data.items),t.commit("syncCarProducts")}))},updateCartProductAmount:function(t,a){var r=a.productId,e=a.amount;return t.commit("updateCartProductAmount",{productId:r,amount:e}),e<1?null:B.Z.put("".concat(ot,"api/baskets/products"),{productId:r,quantity:e},{params:{userAccessKey:t.state.userAccessKey}}).then((function(a){t.commit("updateCartProductsData",a.data.items)}))["catch"]((function(){t.commit("syncCarProducts")}))}}});e.ZP.config.productionTip=!1,new e.ZP({router:ha,store:Ca,render:function(t){return t(A)}}).$mount("#app")}},a={};function r(e){var s=a[e];if(void 0!==s)return s.exports;var o=a[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,(()=>{var t=[];r.O=(a,e,s,o)=>{if(!e){var i=1/0;for(u=0;u<t.length;u++){for(var[e,s,o]=t[u],n=!0,c=0;c<e.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((t=>r.O[t](e[c])))?e.splice(c--,1):(n=!1,o<i&&(i=o));if(n){t.splice(u--,1);var l=s();void 0!==l&&(a=l)}}return a}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[e,s,o]}})(),(()=>{r.n=t=>{var a=t&&t.__esModule?()=>t["default"]:()=>t;return r.d(a,{a}),a}})(),(()=>{r.d=(t,a)=>{for(var e in a)r.o(a,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{r.o=(t,a)=>Object.prototype.hasOwnProperty.call(t,a)})(),(()=>{var t={143:0};r.O.j=a=>0===t[a];var a=(a,e)=>{var s,o,[i,n,c]=e,l=0;if(i.some((a=>0!==t[a]))){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(c)var u=c(r)}for(a&&a(e);l<i.length;l++)o=i[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},e=self["webpackChunkskillbox"]=self["webpackChunkskillbox"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))})();var e=r.O(void 0,[998],(()=>r(8649)));e=r.O(e)})();
//# sourceMappingURL=app.01ab660c.js.map