<template >
  <div class="index-wrap">
    <TableWrap>
      <template #header>
        <a-form :model="params" layout="inline" size="large">
          <a-button style="margin-right:16px" @click="add">
            <template #icon>
              <IconPlus />
            </template>
          </a-button>
          <a-form-item field="type" label="类型">
            <a-radio-group type="button" v-model="params.type" @change="paramsChange">
              <a-radio value="type1">类型1</a-radio>
              <a-radio value="type2">类型2</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item field="types" label="类型">
            <a-select placeholder="请选择类型" v-model="params.types" :style="{width:'300px'}" @change="paramsChange" multiple>
              <a-option>Beijing</a-option>
              <a-option>Shanghai</a-option>
              <a-option>Guangzhou</a-option>
              <a-option disabled>Disabled</a-option>
            </a-select>
          </a-form-item>
          <a-form-item field="word" label="搜索">
            <a-input-search :style="{width:'200px'}" placeholder="请输入搜索关键字" v-model="params.word" @change="paramsChange" />
          </a-form-item>
        </a-form>
      </template>
      <template #body>
        <a-table :data="data.list" :pagination="false" :class="{'arco-table-empty':data.list.length == 0}" stripe>
          <template #columns>
            <a-table-column title="Name" data-index="name"></a-table-column>
            <a-table-column title="Salary" data-index="salary"></a-table-column>
            <a-table-column title="Address" data-index="address"></a-table-column>
            <a-table-column title="Email" data-index="email"></a-table-column>
            <a-table-column title="Optional" align="right">
              <template #cell="{ record }">
                <a-space>
                  <a-button @click="$modal.info({ title:'Name', content:record.name })">view</a-button>
                  <a-button>
                    <template #icon>
                      <IconEdit @click="edit(record)" />
                    </template>
                  </a-button>
                  <a-popconfirm content="请确认是否要删除此条数据?" @ok="()=>this.$notification.success('操作成功!')">
                    <a-button status="danger">
                      <template #icon>
                        <IconDelete />
                      </template>
                    </a-button>
                  </a-popconfirm>
                </a-space>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </template>
      <template #footer>
        <a-pagination
          :total="data.count"
          size="large"
          show-total
          show-jumper
          show-page-size
          v-model:current="params.current"
          v-model:page-size="params.pageSize"
        />
      </template>
    </TableWrap>

    <DrawerEditData :visible="drawer.drawerEditData.visible" :data="drawer.drawerEditData.data" @close="drawer.drawerEditData.visible = false" />
  </div>
</template>
<script>
import TableWrap from '@/components/layout/TableWrap.vue'
import DrawerEditData from '@/components/template/complex-table1/drawer/DrawerEditData.vue'
import { IconPlus, IconEdit, IconDelete } from '@arco-design/web-vue/es/icon'

export default {
  name: 'views-complex-table1',
  components: {
    TableWrap,
    DrawerEditData,
    IconPlus,
    IconEdit,
    IconDelete,
  },
  data() {
    return {
      params: {
        word: '',
        type: 'type1',
        types: [],
        current: 1,
        pageSize: 10,
      },
      data: {
        count: 50,
        list: [
          { 
            id:'1',
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
        ],
      },
      drawer: {
        drawerEditData: {
          visible: false,
          data: {},
        },
      },
    }
  },
  computed: {},
  mounted() {
    this.params = {
      ...this.params,
      ...this.urlGetParams(this.$route.query),
    }
  },
  methods: {
    paramsChange() {
      this.urlPushParams(this.$route, this.params)
    },
    edit(row) {
      this.drawer.drawerEditData.visible = true
      this.drawer.drawerEditData.data = row
    },
    add() {
      this.drawer.drawerEditData.visible = true
      this.drawer.drawerEditData.data = {}
    },
  },
}
</script>
<style scoped lang="scss">
.index-wrap {
}
</style>