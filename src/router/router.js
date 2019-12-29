import Vue from 'vue';
import Router from 'vue-router'
import portfolio from '../component/portfolio.vue';
import contact from '../component/contact.vue'
import aboutme from '../component/aboutme.vue';
import home from '../component/home.vue';

Vue.use(Router);

export default new Router({
    mode : 'history',
    routes : [
        {path : '/', name  : "home",component : home},
        {path : '/aboutme',name : "aboutme",component : aboutme},
        {path : "/contact",name : "contact",component : contact},
        {path : "/portfolio",name : "portfolio",component : portfolio},
    ]
})