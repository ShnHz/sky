import Layout from '@/components/layout/frame/Layout.vue'

export default [{
    path: '/template',
    component: Layout,
    redirect: '/template/common-table',
    meta: {
        title: '业务模板',
        hasTabs: true,
    },
    children: [{
        path: '/template/common-table',
        name: 'TemplateCommonTable',
        component: () => import('@/views/template/common-table.vue'),
        meta: {
            title: '表格',
        }
    }],
}]