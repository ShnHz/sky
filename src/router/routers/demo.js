const demo = () => import('@/views/demo/demo.vue')
const vueuse = () => import('@/views/demo/vueuse.vue')
const parallax = () => import('@/views/demo/parallax.vue')
const skeleton = () => import('@/views/demo/skeleton.vue')
const scrollnumber = () => import('@/views/demo/scrollnumber.vue')

export default [{
    path: '/demo',
    redirect: '/demo/vueuse'
}, {
    path: '/demo',
    name: 'demo',
    component: demo,
    children: [{
            path: '/demo/vueuse',
            name: 'demo-vueuse',
            meta: {
                title: 'VueUse 基本Vue实用程序'
            },
            component: vueuse,
        },
        {
            path: '/demo/parallax',
            name: 'demo-parallax',
            meta: {
                title: 'Parallax 视差滚动'
            },
            component: parallax,
        }, {
            path: '/demo/skeleton',
            name: 'demo-skeleton',
            meta: {
                title: 'Skeleton 骨架屏'
            },
            component: skeleton,
        }, {
            path: '/demo/scrollnumber',
            name: 'demo-scrollnumber',
            meta: {
                title: 'Scrollnumber 滚动的数字'
            },
            component: scrollnumber,
        }
    ]
}]