
// require('./bootstrap');
// require('uikit');
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = require('vue');
import VuePageTransition from 'vue-page-transition'
 
Vue.use(VuePageTransition)
//En este archivo se definen los componentes de forma global
require('./componentes');

//Configuracion de vue router
import Vuex from 'vuex'
Vue.use(Vuex);
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router
});
