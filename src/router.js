let ua = navigator.userAgent.toLowerCase();//获取判断用的对象


import VueRouter from 'vue-router';


//引入页面

const lottie = () => import('./views/lottie.vue');
const routes = [

    { path: '/', name: 'lottie', component: lottie, meta: { title: 'lottie' } }
];

const router = new VueRouter({
    // mode: 'history',
    routes
});


router.beforeEach((to, from, next) => {
    console.table({
        'from': from.path,
        'to': to.path
    });

    document.title = to.meta.title;


    next();
});

router.afterEach((to, from, next) => {


});


export default router;
