(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],g=0,p=[];g<r.length;g++)n=r[g],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=o[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=s,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034b":function(t,e,o){},"0e31":function(t,e,o){"use strict";o("e540")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"app"}},[o("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[o("div",{staticClass:"d-flex justify-content-start align-items-center col-12"},[o("Category",{staticClass:"mx-4"}),o("Sort")],1),o("ItemCard")],1)])},i=[],n=o("5530"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex flex-wrap justify-content-start align-items-center"},t._l(t.selectedItems,(function(e,s){return o("div",{key:s,staticClass:"d-flex"},[o("div",{staticClass:"d-flex pt-4"},[o("div",{staticClass:"card m-4",style:{backgroundImage:"url("+e.imgUrl+")"}},[o("div",{staticClass:"\n            card-body\n            d-flex\n            flex-column\n            justify-content-end\n            align-items-start\n          "},[o("p",{staticClass:"card-title pt-2"},[t._v(t._s(e.name))]),o("p",{staticClass:"card-text"},[t._v("Category: "+t._s(e.category))]),o("p",{staticClass:"card-text"},[t._v("Price: $"+t._s(t.getPriceString(e.price)))]),o("p",{staticClass:"card-text"},[t._v("Date: "+t._s(e.date))])])])])])})),0)},c=[],l=(o("d3b7"),o("25f0"),o("fb6a"),o("2f62")),u={name:"ItemCard",computed:Object(n["a"])({},Object(l["b"])(["selectedItems"])),methods:{getPriceString:function(t){var e=t.toString(10);return e.length<=6?e.slice(0,e.length-3)+","+e.slice(e.length-3):e.slice(0,e.length-6)+","+e.slice(e.length-6,e.length-3)+","+e.slice(e.length-3)}}},g=u,p=(o("0e31"),o("2877")),m=Object(p["a"])(g,r,c,!1,null,"320cb610",null),d=m.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-form-select",{staticClass:"mt-5 col-12 category-font",attrs:{options:t.brandList},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1)},_=[],h={data:function(){return{brandList:[{text:"Category",value:""},{text:"Tesla",value:"Tesla"},{text:"Porsche",value:"Porsche"},{text:"Toyota",value:"Toyota"},{text:"Honda",value:"Honda"},{text:"Mazda",value:"Mazda"},{text:"Mercedes-Benz",value:"Mercedes-Benz"},{text:"Lexus",value:"Lexus"},{text:"Lamborghini",value:"Lamborghini"},{text:"Audi",value:"Audi"},{text:"BMW",value:"BMW"},{text:"Abarth",value:"Abarth"},{text:"Alfa Romeo",value:"Alfa-Romeo"},{text:"Aston Martin",value:"Aston-Martin"},{text:"Ferrari",value:"Ferrari"},{text:"Jaguar",value:"Jaguar"},{text:"Lotus",value:"Lotus"},{text:"MG",value:"MG"},{text:"Austin",value:"Austin"}]}},computed:{category:{get:function(){return this.$store.getters.category},set:function(t){this.$store.dispatch("getCategory",t)}}}},x=h,w=Object(p["a"])(x,f,_,!1,null,null,null),y=w.exports,v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-form-select",{staticClass:"mt-5 col-12 category-font",attrs:{options:t.sortCondition},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}})],1)},b=[],j={data:function(){return{sortCondition:[{text:"Sort by:",value:""},{text:"Price: Low to High",value:"lowToHigh"},{text:"Price: Hight to Low",value:"highToLow"},{text:"Newest Arrivals",value:"newest"}]}},computed:{sortBy:{get:function(){return this.$store.getters.sortBy},set:function(t){this.$store.dispatch("getSortCondition",t)}}}},C=j,L=Object(p["a"])(C,v,b,!1,null,null,null),k=L.exports,M={name:"App",components:{ItemCard:d,Category:y,Sort:k},created:function(){this.$store.dispatch("showAllItems")},computed:Object(n["a"])({},Object(l["b"])(["itemList","selectedItems"]))},A=M,T=Object(p["a"])(A,a,i,!1,null,null,null),S=T.exports,I=(o("4e82"),o("d4ec")),O=(o("b0c0"),function t(e,o,s,a,i){Object(I["a"])(this,t),this.name=e,this.category=o,this.price=s,this.date=a,this.imgUrl=i});s["default"].use(l["a"]);var B=new l["a"].Store({state:{selectedItems:[],category:"",sortBy:"",itemList:[new O("Model 3","Tesla",48490,"2020-09-04","/images/istockphoto-1277254968-612x612.jpg"),new O("Model X","Tesla",89990,"2017-08-08","/images/istockphoto-1191552504-612x612.jpg"),new O("Model S","Tesla",82990,"2019-04-01","/images/istockphoto-582261244-612x612.jpg"),new O("Model Y","Tesla",48190,"2020-02-02","/images/istockphoto-1272025387-612x612.jpg"),new O("Cayenne","Porsche",67500,"2017-12-20","/images/istockphoto-1138819485-612x612.jpg"),new O("Macan","Porsche",52100,"2019-07-12","/images/istockphoto-508107322-612x612.jpg"),new O("356 Speedster","Porsche",56528,"1955-07-12","/images/porsche_356_1955_images_2_640x480.jpg"),new O("Camry","Toyota",24425,"2015-06-29","/images/istockphoto-905266220-612x612.jpg"),new O("Sports 800","Toyota",53657,"1965-06-29","/images/images_toyota_sports_800_1965_1_640x480.jpg"),new O("2000GT","Toyota",1155e3,"1967-06-29","/images/photos_toyota_2000gt_1967_1_640x480.jpg"),new O("Accord","Honda",24800,"2018-10-02","/images/istockphoto-649004692-612x612.jpg"),new O("Civic","Honda",20650,"2015-04-04","/images/istockphoto-458119929-612x612.jpg"),new O("S800M","Honda",50068,"1968-04-04","/images/images_honda_s-series_1968_1_640x480.jpg"),new O("CX-5","Mazda",26940,"2012-11-03","/images/istockphoto-1069236296-612x612.jpg"),new O("GLE Coupe","Mercedes-Benz",76500,"2020-02-05","/images/istockphoto-894961460-612x612.jpg"),new O("CLA","Mercedes-Benz",37850,"2019-06-09","/images/istockphoto-472122163-612x612.jpg"),new O("GLA 250","Mercedes-Benz",37280,"2017-05-02","/images/istockphoto-1297389811-612x612.jpg"),new O("RX 350","Lexus",45175,"2015-01-01","/images/istockphoto-657915058-612x612.jpg"),new O("NX 300","Lexus",37510,"2018-09-12","/images/istockphoto-480681192-612x612.jpg"),new O("Urus","Lamborghini",218e3,"2021-08-16","/images/istockphoto-1184360237-612x612.jpg"),new O("Aventador","Lamborghini",393695,"2020-09-11","/images/istockphoto-1083962000-612x612.jpg"),new O("A3","Audi",33500,"2019-05-08","/images/istockphoto-1255388367-612x612.jpg"),new O("X3","BMW",43e3,"2018-03-11","/images/istockphoto-1206921084-612x612.jpg"),new O("2 Series","BMW",37500,"2019-01-15","/images/istockphoto-1187329409-612x612.jpg"),new O("Fiat 595","Abarth",39390,"1971-10-07","/images/images_abarth_fiat-500_1965_1_640x480.jpg"),new O("Fiat 750 Spider","Abarth",16e4,"1959-10-07","/images/abarth_fiat-750_1958_wallpapers_1_640x480.jpg"),new O("Monomille","Abarth",251100,"1961-10-07","/images/wallpapers_abarth_monomille_1961.jpg"),new O("OT 1300","Abarth",47800,"1968-10-07","/images/images_abarth_ot_1300_1968_1_640x480.jpg"),new O("Giulia TZ2","Alfa-Romeo",31e5,"1965-10-07","/images/alfa-romeo_giulia_1965_wallpapers_4_640x480.jpg"),new O("Giulietta SZ","Alfa-Romeo",565e3,"1960-10-07","/images/pictures_alfa-romeo_giulietta_1960_2_640x480.jpg"),new O("DB5","Aston-Martin",79e4,"1964-10-07","/images/photos_aston_martin_db5_1964_1_640x480.jpg"),new O("Dino 246 GTS","Ferrari",28e4,"1972-10-07","/images/ferrari_dino_1972_images_1_640x480.jpg"),new O("E-Type","Jaguar",114e3,"1974-10-07","/images/jaguar_e-type_1974_images_1_640x480.jpg"),new O("Mark 1","Jaguar",44845,"1955-10-07","/images/jaguar_mark-1_1955_photos_1_640x480.jpg"),new O("Elan","Lotus",36500,"1967-10-07","/images/lotus_elan_1967_images_1_640x480.jpg"),new O("Elite","Lotus",9e4,"1974-10-07","/images/wallpapers_lotus_elite_1974_1_640x480.jpg"),new O("Europa Special","Lotus",88e3,"1973-10-07","/images/lotus_europa_1973_pictures_1_640x480.jpg"),new O("Midget 1500","MG",31400,"1974-10-07","/images/mg_midget_1974_wallpapers_1_640x480.jpg"),new O("Mini Cooper","Austin",34530,"1961-10-07","/images/pictures_mini_classic_1961_1_640x480.jpg")]},getters:{sortBy:function(t){return t.sortBy},category:function(t){return t.category}},mutations:{clearItemList:function(t){t.selectedItems=[]},sortLowToHigh:function(t){t.selectedItems.sort((function(t,e){return t.price<e.price?-1:1}))},sortHighToLow:function(t){t.selectedItems.sort((function(t,e){return t.price>e.price?-1:1}))},sortNewest:function(t){t.selectedItems.sort((function(t,e){return t.date>e.date?-1:1}))},showAllItems:function(t){t.selectedItems=JSON.parse(JSON.stringify(t.itemList))},setCategory:function(t,e){if(t.category=e,this.commit("clearItemList"),""!==t.category)for(var o=0;o<t.itemList.length;o++)t.itemList[o].category===t.category&&t.selectedItems.push(t.itemList[o]);else this.commit("showAllItems");this.commit("setSortCondition",t.sortBy)},setSortCondition:function(t,e){switch(t.sortBy=e,t.sortBy){case"lowToHigh":this.commit("sortLowToHigh");break;case"highToLow":this.commit("sortHighToLow");break;case"newest":this.commit("sortNewest");break;default:break}}},actions:{clearItemList:function(t){t.commit("clearItemList")},sortLowToHigh:function(t){t.commit("sortLowToHigh")},sortHighToLow:function(t){t.commit("sortHighToLow")},sortNewest:function(t){t.commit("sortNewest")},showAllItems:function(t){t.commit("showAllItems")},getCategory:function(t,e){var o=t.commit;o("setCategory",e)},getSortCondition:function(t,e){var o=t.commit;o("setSortCondition",e)}},modules:{}}),H=o("5f5b");o("f9e3"),o("2dd8"),o("034b");s["default"].use(H["a"]),s["default"].config.productionTip=!1,new s["default"]({store:B,render:function(t){return t(S)}}).$mount("#app")},e540:function(t,e,o){}});
//# sourceMappingURL=app.a59aab5f.js.map
