import Layout from '@/components/layout/frame/Layout.vue'

export default [{
    path: '/template',
    component: Layout,
    redirect: '/template/table',
    meta: {
        title: '业务模板',
        hasTabs: true,
    },
    children: [{
        path: '/template/table',
        name: 'ComponentsTable',
        component: () => import('@/views/template/table.vue'),
        meta: {
            title: '表格',
        }
    }],
}]