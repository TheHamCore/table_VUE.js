import Vue from 'vue';
import VueRouter from 'vue-router';

import vTable from '../components/v-table';
import VLogin from '../components/v-login';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'login',
            component: VLogin
        },
        {
            path: '/table',
            component: vTable
        },

    ]
});

export default router;