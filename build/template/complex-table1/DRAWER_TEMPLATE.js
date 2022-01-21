module.exports = `<template>
<a-drawer :visible="show" @ok="handleOk" @cancel="handleClose" @close="handleClose" unmountOnClose :maskClosable="false" ok-text="提交" width="400px">
  <template #title>{{title}}</template>
  <a-form :model="form" :style="{width:'100%',marginTop:'10px'}" size="large" label-align="left" auto-label-width ref="formRef">
    <a-form-item field="name" label="Name" :rules="[{required:true,message:'Name is required'}]">
      <a-input v-model="form.name" placeholder="please enter your username..." />
    </a-form-item>
    <a-form-item field="salary" label="Salary" :rules="[{required:true,message:'Salary is required'}]">
      <a-input-number v-model="form.salary" placeholder="please enter your salary..." :min="0" :max="100000" />
    </a-form-item>
    <a-form-item field="address" label="Address" :rules="[{required:true,message:'Address is required'}]">
      <a-input v-model="form.address" placeholder="please enter your address..." />
    </a-form-item>
    <a-form-item field="email" label="Email">
      <a-input v-model="form.email" placeholder="please enter your email..." />
    </a-form-item>
  </a-form>
</a-drawer>
</template>
<script>
export default {
emits: ['close'],
props: {
  data: {
    type: Object,
  },
  visible: {
    type: Boolean,
    default: false,
  },
},
watch: {
  visible: function (val, oldval) {
    this.show = val
    if (this.show) {
      this.form = {
        ...this.form,
        ...this.data,
      }
    } else {
      this.form = {
        name: null,
        salary: null,
        address: null,
        email: null,
      }
    }
  },
},
computed: {
  title() {
    return this.data.id ? '编辑' + this.data.name : '新增'
  },
},
data() {
  return {
    show: this.visible,
    form: {
      name: null,
      salary: null,
      address: null,
      email: null,
    },
  }
},
methods: {
  handleOk() {
    let _this = this
    this.$refs.formRef.validate().then((valid) => {
      _this.handleClose()
    })
  },
  handleClose() {
    this.$emit('close')
  },
},
}
</script>
<style lang="scss" scoped>
</style>
`;