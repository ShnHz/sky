import Layout from '@/components/layout/frame/Layout.vue'

export default [{
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'Index',
            component: () => import('@/views/common/index.vue'),
            meta: {
                title: '主页'
            }
        }],
    }, {
        name: '404',
        path: '/404',
        component: () => import('@/views/common/404.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/common/login.vue'),
    },

]