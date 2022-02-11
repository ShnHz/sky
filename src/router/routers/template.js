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
                title: '基础表格',
            }
        }, {
            path: '/template/complex-table1',
            name: 'TemplateComplexTable1',
            component: () => import('@/views/template/complex-table1.vue'),
            meta: {
                title: '复杂表格（添加、编辑、删除）',
            }
        },
        {
            path: '/template/complex-table2',
            name: 'TemplateComplexTable2',
            component: () => import('@/views/template/complex-table2.vue'),
            meta: {
                title: '复杂表格（侧边筛选）',
            }
        }
    ],
}]