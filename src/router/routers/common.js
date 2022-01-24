import Layout from '@/components/layout/frame/Layout.vue'

export default [{
        path: '/',
        component: Layout,
        redirect: '/index',
        meta: {
            hasTabs: true,
        },
        children: [{
            path: '/index',
            name: 'Index',
            component: () => import('@/views/common/index.vue'),
            meta: {
                title: '首页',
                affix: true
            }
        }],
    }, {
        name: '404',
        path: '/404',
        component: () => import('@/views/common/404.vue'),
    },
    {
        path: `${import.meta.env.VITE_APP_NAME}/:pathMatch(.*)*`,
        redirect: '/404'
    },
    {
        name: '403',
        path: '/403',
        component: () => import('@/views/common/403.vue'),
    },
    {
        name: '500',
        path: '/500',
        component: () => import('@/views/common/500.vue'),
    },
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/common/login.vue'),
    },

]