import Layout from '@/components/layout/frame/Layout.vue'

export default [{
    path: '/components',
    component: Layout,
    redirect: '/components/table',
    children: [{
        path: '/table',
        name: 'ComponentsTable',
        component: () => import('@/views/components/Table.vue'),
        meta: {
            title: '表格',
        }
    }],
}]