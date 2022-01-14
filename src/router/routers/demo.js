export default [{
    path: '/demo',
    redirect: '/demo/vueuse'
}, {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo/demo.vue'),
    children: [{
            path: '/demo/vueuse',
            name: 'demo-vueuse',
            meta: {
                title: 'VueUse 基本Vue实用程序'
            },
            component: () => import('@/views/demo/vueuse.vue'),
        },
        {
            path: '/demo/parallax',
            name: 'demo-parallax',
            meta: {
                title: 'Parallax 视差滚动'
            },
            component: () => import('@/views/demo/parallax.vue'),
        }, {
            path: '/demo/skeleton',
            name: 'demo-skeleton',
            meta: {
                title: 'Skeleton 骨架屏'
            },
            component: () => import('@/views/demo/skeleton.vue'),
        }, {
            path: '/demo/scrollnumber',
            name: 'demo-scrollnumber',
            meta: {
                title: 'Scrollnumber 滚动的数字'
            },
            component: () => import('@/views/demo/scrollnumber.vue'),
        }
    ]
}]