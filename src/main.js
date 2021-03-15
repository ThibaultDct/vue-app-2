import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from "firebase";
import store from "./store/store.js";
import KProgress from 'k-progress'

Vue.config.productionTip = false
Vue.component('k-progress', KProgress)

let app = '';

const configOptions = {
  apiKey: "AIzaSyCCjV8vvEbQ4jRr9blWI4alqg4m1wR6_Ic",
  authDomain: "citybuilder-f6445.firebaseapp.com",
  projectId: "citybuilder-f6445",
  storageBucket: "citybuilder-f6445.appspot.com",
  messagingSenderId: "498198501170",
  appId: "1:498198501170:web:39fe4287cdae3111fea92b",
  measurementId: "G-B0S75LJCKH"
};

firebase.initializeApp(configOptions);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
