import Layout from '@/components/layout/frame/Layout.vue'

export default [{
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [{
            path: '/index',
            name: 'Index',
            component: () => import('@/views/index.vue'),
            meta: {
                title: '首页'
            }
        }],
    }, {
        name: '404',
        path: '/404',
        component: () => import('@/views/404.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },

]