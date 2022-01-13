<template>
  <div class="demo-wrap">
    <el-container>
      <el-aside width="275px">
        <el-menu :default-active="menuActive" router>
          <el-menu-item :index="item.name" v-for="(item,index) in menu" :key="`menu-item-${index}-${item.name}`">
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <h1>{{menuActiveTitle}}</h1>
          <router-view class="demo-page-wrap"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menuActive: '',
      menuActiveTitle: '',
      menu: [
        {
          name: '/demo/vueuse',
          label: 'VueUse',
        },
        {
          name: '/demo/parallax',
          label: '视差滚动',
        },
        {
          name: '/demo/skeleton',
          label: '骨架屏',
        },
        {
          name: '/demo/scrollnumber',
          label: '滚动数字',
        },
      ],
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.menuActive = this.$route.path
        this.menuActiveTitle = this.$route.meta.title
      },
    },
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.demo-wrap {
  background: #fff !important;

  ::v-deep(.el-container) {
    min-height: 100vh;
  }

  ::v-deep(.el-menu) {
    height: 100%;
    .el-menu-item {
      display: flex;
      align-items: center;
      height: 40px !important;
      padding-left: 40px !important;
      margin: 4px 0 8px !important;
      &:first-child {
        margin-top: 0px !important;
      }
      &:hover {
        background: transparent;
        color: var(--themeColor);
      }
      &.is-active {
        background: #eaf9f9;
        &::after {
          content: '';
          display: block;
          width: 3px;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          background: var(--themeColor);
        }
      }
    }
  }

  ::v-deep(.el-main) {
    height: 100vh;
    overflow-y: auto;
    position: relative;
    padding: 40px 170px 32px 64px;
    > h1 {
      margin-top: 8px;
      margin-bottom: 20px;
      color: #000000d9;
      font-weight: 500;
      font-size: 30px;
      font-family: Avenir, -apple-system, BlinkMacSystemFont, segoe ui, Roboto,
        helvetica neue, Arial, noto sans, sans-serif, apple color emoji,
        segoe ui emoji, segoe ui symbol, noto color emoji, sans-serif;
      line-height: 38px;
    }
  }

  ::v-deep(.introduction-wrap) {
    margin: 1em 0;
    color: #000000d9;
    font-size: 14px;
    line-height: 2;
  }
}
</style>