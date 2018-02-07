
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';

import APIHelper from './domain/Helpers/APIHelper';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import routes from "./routes";

Vue.use(VueRouter);



const router = new VueRouter({routes});
const app = new Vue({
    router,
    data(){
        return {
            shared: new APIHelper()
        }

    },
    el: '#app',
    render: (h)=>{
        return h(App);
    }
});
