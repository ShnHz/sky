const page404 = () => import('@/views/404.vue')
const index = () => import('@/views/index.vue')

export default [{
        name: '404',
        path: '/404',
        component: page404,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: {
            title: ''
        }
    }
]