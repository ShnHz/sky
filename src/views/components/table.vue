<template >
  <div class="index-wrap">
    <a-table :data="data">
      <template #columns>
        <a-table-column title="Name" data-index="name"></a-table-column>
        <a-table-column title="Salary" data-index="salary"></a-table-column>
        <a-table-column title="Address" data-index="address"></a-table-column>
        <a-table-column title="Email" data-index="email"></a-table-column>
        <a-table-column title="Optional">
          <template #cell="{ record }">
            <a-button @click="$modal.info({ title:'Name', content:record.name })">view</a-button>
          </template>
        </a-table-column>
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      data: [
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
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.index-wrap {
}
</style>