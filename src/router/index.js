import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

import Home from "../views/Home.vue";
import Login from '../views/Login';
import Register from '../views/Register';
import Industries from '../views/Industries';
import Energy from '../views/Energy';
import Population from '../views/Population';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/industries",
    name: "industries",
    component: Industries,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/energy",
    name: "energy",
    component: Energy,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/population",
    name: "population",
    component: Population,
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
