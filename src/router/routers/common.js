export default [{
        path: '/',
        redirect: '/index',
    }, {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/common/index.vue'),
        meta: {
            title: '首页',
            affix: true
        }
    }
]