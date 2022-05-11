<template >
  <div class="index-wrap">
    <TableWrap type="1" boxShadow :loading="loading">
      <template #header>
        <a-form :model="params" layout="inline" size="large">
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
        <a-table :data="data.list" :pagination="false" :class="{'arco-table-empty':data.list.length == 0}" stripe :scroll="{y:'0px'}">
          <template #columns>
            <a-table-column title="Name" data-index="name"></a-table-column>
            <a-table-column title="Salary" data-index="salary"></a-table-column>
            <a-table-column title="Address" data-index="address"></a-table-column>
            <a-table-column title="Email" data-index="email"></a-table-column>
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
  </div>
</template>
<script>
import TableWrap from '@/components/layout/TableWrap.vue'
import { IconPlus, IconEdit, IconDelete } from '@arco-design/web-vue/es/icon'

export default {
  name: 'views-table',
  components: {
    TableWrap,
    IconPlus,
    IconEdit,
    IconDelete,
  },
  data() {
    return {
      loading: true,
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
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
          {
            key: '1',
            name: 'Jane Doe',
            salary: 23000,
            address: '32 Park Road, London',
            email: 'jane.doe@example.com',
          },
          {
            key: '2',
            name: 'Alisa Ross',
            salary: 25000,
            address: '35 Park Road, London',
            email: 'alisa.ross@example.com',
          },
          {
            key: '3',
            name: 'Kevin Sandra',
            salary: 22000,
            address: '31 Park Road, London',
            email: 'kevin.sandra@example.com',
          },
          {
            key: '4',
            name: 'Ed Hellen',
            salary: 17000,
            address: '42 Park Road, London',
            email: 'ed.hellen@example.com',
          },
          {
            key: '5',
            name: 'William Smith',
            salary: 27000,
            address: '62 Park Road, London',
            email: 'william.smith@example.com',
          },
        ],
      },
    }
  },
  computed: {},
  mounted() {
    this.params = {
      ...this.params,
      ...this.urlGetParams(this.$route.query),
    }
    this.getInfo()
  },
  methods: {
    getInfo() {
      let _this = this
      this.loading = true
      Promise.all([this.getList()]).then(() => {
        _this.loading = false
      })
    },
    async getList() {
      // let _this = this
      // await this.$api.customer.get_customer_list(this.params).then((res) => {
      //   _this.data.list = res.data.data
      // })
    },
    paramsChange() {
      this.urlPushParams(this.$route, this.params)
    },
  },
}
</script>
<style scoped lang="scss">
.index-wrap {
}
</style>