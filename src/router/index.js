import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import About from '../views/About.vue'
import { getAuth } from 'firebase/auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/about'
  },
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/acc',
    name: 'Acc',
    component: Account
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/new',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new2',
    name: 'New Game 2 Players',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new3',
    name: 'New Game 3 Players',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new4',
    name: 'New Game 4 Players',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('account');
  else next();
});

export default router
