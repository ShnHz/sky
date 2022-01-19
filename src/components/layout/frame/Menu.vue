<template>
  <a-menu :default-open-keys="opens" :selected-keys="active" :style="{ width: '100%' }" @menu-item-click="onClickMenuItem" :level-indent="34">
    <template v-for="(item1,index1) in list" :key="`meun-lv1-${index1}`">
      <a-menu-item :key="item1.name" v-if="!(item1.child && item1.child.length > 0)">
        <component :is="item1.icon" />
        <span>{{item1.label}}</span>
      </a-menu-item>
      <template v-else>
        <a-sub-menu :key="item1.name">
          <template #title>
            <component :is="item1.icon" />
            <span>{{item1.label}}</span>
          </template>
          <template v-for="(item2,index2) in item1.child" :key="`meun-lv2-${index2}`">
            <a-menu-item :key="item2.name" v-if="!(item2.child && item2.child.length > 0)">{{item2.label}}</a-menu-item>
            <template v-else>
              <a-sub-menu :key="item2.name">
                <template #title>
                  <span>{{item2.label}}</span>
                </template>
                <a-menu-item v-for="(item3) in item2.child" :key="item3.name">
                  <span>{{item3.label}}</span>
                </a-menu-item>
              </a-sub-menu>
            </template>
          </template>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>
<script>
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
  IconBook,
  IconTiktokColor,
  IconLarkColor,
  IconCommon,
  IconTags
} from '@arco-design/web-vue/es/icon'

export default {
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
    IconBook,
    IconTiktokColor,
    IconLarkColor,
    IconCommon,
    IconTags,
  },
  data() {
    return {}
  },
  computed: {
    list() {
      return [
        {
          name: 'Index',
          icon: 'IconHome',
          label: '首页',
        },
        {
          name: 'Status',
          icon: 'IconCommon',
          label: '状态页',
          child: [
            {
              name: '403',
              label: '403',
            },
            {
              name: '404',
              label: '404',
            },
            {
              name: '500',
              label: '500',
            },
          ],
        },
        {
          name: '1',
          icon: 'IconLarkColor',
          label: 'Navigation 1',
          child: [
            {
              name: 'menu1',
              label: 'menu1',
            },
            {
              name: 'menu2',
              label: 'menu2',
            },
            {
              name: 'menu3',
              label: 'menu3',
              child: [
                {
                  name: 'menu3-1',
                  label: 'menu3-1',
                },
              ],
            },
          ],
        },
        {
          name: 'Template',
          icon: 'IconTags',
          label: '业务模板',
          child: [
            {
              name: 'TemplateCommonTable',
              label: '表格',
            },
            {
              name:'TemplateComplexTable1',
              label:'复杂表格(添加、编辑、删除)',
            }
          ],
        },
      ]
    },
    active() {
      return [this.$route.name]
    },
    opens() {
      let _this = this
      let arr = []
      find(this.list)
      function find(list) {
        for (let i = 0; i < list.length; i++) {
          let isActive = false
          if (list[i].name == _this.$route.name) {
            return true
          }
          if (list[i].child && list[i].child.length > 0) {
            isActive = find(list[i].child)
            if (isActive) {
              arr.push(list[i])
            }
          }
        }
        return false
      }
      return arr.map((item) => item.name)
    },
  },
  methods: {
    onClickMenuItem(item) {
      this.$router.push({
        name: item,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>