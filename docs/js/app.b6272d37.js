(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-app-2/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"36a1":function(e,t,n){"use strict";n("fb65")},"4f3f":function(e,t,n){"use strict";n("8f08")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"global"},[n("div",{staticClass:"content"},[n("div",{staticClass:"glass"},[n("router-view")],1)])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar"},[r("a",{attrs:{href:"#home"}},[r("img",{attrs:{src:n("cf05"),width:"100px",height:"115px"}})]),r("a",{staticClass:"active",attrs:{href:"#home"}},[e._v("Accueil")]),r("a",{attrs:{href:"#building"}},[e._v("Habitations")]),r("a",{attrs:{href:"#industry"}},[e._v("Industries")]),r("a",{attrs:{href:"#energy"}},[e._v("Energie")]),r("a",{attrs:{href:"#research"}},[e._v("Recherche")])])}],i={name:"App",components:{}},s=i,c=(n("034f"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,null,null),l=u.exports,p=n("9483");Object(p["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("45fc");var d=n("8c4f"),f=n("2591"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"global"},[n("div",{staticClass:"content"},[n("div",{staticClass:"glass"},[n("CityCard")],1)])])},g=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"servercard"},[n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"cityName",attrs:{placeholder:"Ma ville"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("span",[e._v("Population : "+e._s(e.population)+" (+"+e._s(e.population_rate)+")")])]),n("li",[null!==e.city_data?n("span",{staticClass:"city_id"},[e._v(e._s(e.city_id))]):e._e()]),n("li",[n("br"),n("button",{on:{click:e.disconnect}},[e._v("Déconnexion")]),n("button",{on:{click:e.saveProgression}},[e._v("Sauvegarder")]),n("button",{on:{click:e.refresh}},[e._v("Rafraichir")])]),n("li",[n("p",[e._v("Or : "+e._s(e.gold)+" | Matériaux : "+e._s(e.materials)+" | Énergie : "+e._s(e.energy))])])])])},h=[],b=(n("ac1f"),n("5319"),n("96cf"),n("1da1")),w=n("bc3a"),A=n.n(w),S="http://163.172.173.121:3000/user",y="http://163.172.173.121:3000/city",k={name:"CityCard",props:{},data:function(){return{name:"",population:0,population_rate:0,gold:0,materials:0,energy:0,user:{},city_data:{},city_id:{}}},mounted:function(){this.refresh()},methods:{disconnect:function(){var e=this;f["a"].auth().signOut().then((function(){e.$router.replace("login")}))},saveProgression:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.city_data),e.next=3,A.a.put(y+"?city_id=eq."+this.city_data.city_id).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=f["a"].auth().currentUser.uid,e.next=3,A.a.get(S+"?firebase_id=eq."+t).then((function(e){return n.user=e.data[0]})).catch((function(e){return console.log(e)}));case 3:return console.log(this.user),e.next=6,A.a.get(y+"?user=eq."+this.user.user_id).then((function(e){return n.city_data=e.data[0]})).catch((function(e){return console.log(e)}));case 6:console.log(this.city_data),this.city_id=this.city_data.city_id,this.gold=this.city_data.gold,this.materials=this.city_data.materials,this.energy=this.city_data.energy,this.population=this.city_data.population;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},C=k,x=(n("36a1"),Object(c["a"])(C,v,h,!1,null,"c2991f8a",null)),J=x.exports,_={name:"HelloWorld",props:{msg:String,city:String},components:{CityCard:J}},E=_,j=(n("4f3f"),Object(c["a"])(E,m,g,!1,null,"dbfab0a8",null)),O=j.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h3",[e._v("Connexion")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("button",{on:{click:e.login}},[e._v("Connexion")]),n("p",[e._v("Vous n'avez pas encore de compte ? Vous pouvez en "),n("router-link",{attrs:{to:"/register"}},[e._v("créer un")])],1)])},I=[],B={name:"login",data:function(){return{form:{email:"",password:"",user:null}}},methods:{login:function(){var e=this;f["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){e.user=t.user,e.$router.replace("home")})).catch((function(e){alert("Oops. "+e.message)}))}}},z=B,H=(n("950c"),Object(c["a"])(z,P,I,!1,null,"28d04460",null)),N=H.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("h3",[e._v("Inscription")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("button",{on:{click:e.register}},[e._v("Inscription")]),n("p",[e._v("Vous avez déjà un compte ? "),n("router-link",{attrs:{to:"/login"}},[e._v("Connectez vous")])],1)])},G=[],L={name:"register",data:function(){return{form:{email:"",password:""}}},methods:{register:function(){var e=this;f["a"].auth().createUserWithEmailAndPassword(this.email,this.password).then((function(){alert("Votre compte a bien été créé !"),e.$router.replace("login")})).catch((function(e){alert("Oops. "+e.message)}))}}},Z=L,T=(n("c904"),Object(c["a"])(Z,U,G,!1,null,"fa0cf2f4",null)),X=T.exports;r["a"].use(d["a"]);var R=[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/login",name:"login",component:N},{path:"/register",name:"register",component:X},{path:"/home",name:"home",component:O,meta:{requiresAuth:!0}}],Y=new d["a"]({routes:R});Y.beforeEach((function(e,t,n){var r=f["a"].auth().currentUser,a=e.matched.some((function(e){return e.meta.requiresAuth}));a&&!r?n("login"):!a&&r?n("home"):n()}));var D=Y;r["a"].config.productionTip=!1;var Q="",F={apiKey:"AIzaSyCCjV8vvEbQ4jRr9blWI4alqg4m1wR6_Ic",authDomain:"citybuilder-f6445.firebaseapp.com",projectId:"citybuilder-f6445",storageBucket:"citybuilder-f6445.appspot.com",messagingSenderId:"498198501170",appId:"1:498198501170:web:39fe4287cdae3111fea92b",measurementId:"G-B0S75LJCKH"};f["a"].initializeApp(F),f["a"].analytics(),f["a"].auth().onAuthStateChanged((function(){Q||(Q=new r["a"]({router:D,render:function(e){return e(l)}}).$mount("#app"))}))},"85ec":function(e,t,n){},"8f08":function(e,t,n){},"950c":function(e,t,n){"use strict";n("a361")},"99bc":function(e,t,n){},a361:function(e,t,n){},c904:function(e,t,n){"use strict";n("99bc")},cf05:function(e,t){e.exports="data:image/png;base64,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"},fb65:function(e,t,n){}});
//# sourceMappingURL=app.b6272d37.js.map