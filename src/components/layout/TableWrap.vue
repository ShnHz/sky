<template>
  <div class="table-wrap" :class="`table-wrap__type${type}`">
    <div class="content-wrap">
      <div class="table-wrap__header">
        <slot name="header"></slot>
      </div>
      <div class="table-wrap__body">
        <section>
          <slot name="body"></slot>
        </section>
      </div>
      <div class="table-wrap__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.table-wrap {
  height: 100%;
  &.table-wrap__type0 {
    .content-wrap {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .table-wrap__header {
      position: relative;
      padding: 0 0 16px 0;
    }
    .table-wrap__body {
      flex: 1;
      > section {
        height: 100%;
        ::v-deep(.arco-table) {
          height: 100%;
          .arco-spin {
            height: 100%;
            .arco-table-container {
              height: 100%;
              border-bottom: 1px solid var(--color-neutral-3);
              border-radius: 4px;
            }
          }
        }
      }
    }
    .table-wrap__footer {
      display: flex;
      justify-content: flex-end;
      position: relative;
      padding: 16px 0 0;
      // ::v-deep(.arco-pagination) {
      // }
    }
  }
}
</style>