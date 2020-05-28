import Vue from 'vue'
import App from './App.vue'
import Message from './components/Message.vue'


import VueRouter from 'vue-router';
import Users from './components/Users';
import Home from './components/Home';

Vue.component('app-message', Message);

Vue.use(VueRouter);

const routes = [
  //A single route is javascript object
  { path: '/users/:uid',
    component: Users 
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/message',
    component: Message
  }

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
