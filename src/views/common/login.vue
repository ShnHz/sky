/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:47:09 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-01-17 11:57:35
 */
<template >
  <div class="login-wrap">
    <div class="bg left-wrap"></div>
    <div class="bg right-wrap"></div>

    <section>
      <div class="left-wrap">
        <div class="login-form-wrap">
          <a-space direction="vertical" size="large" style="width:100%">
            <a-form :model="form" layout="vertical">
              <a-form-item field="username" label="用户名">
                <a-input v-model="form.name" placeholder="请输入用户名称/手机号码" size="large" />
              </a-form-item>
              <a-form-item field="password" label="密码">
                <a-input v-model="form.password" placeholder="请输入密码" size="large" />
              </a-form-item>
              <a-form-item>
                <a-button type="primary" size="large" long>
                  登 录
                  <template #icon>
                    <IconArrowRight />
                  </template>
                </a-button>
              </a-form-item>
              <a-divider />
              <p class="password-tip">
                您是否忘记了账号/密码？
                <a @click="()=>this.$notification.info('管理员手机号码：123456789')">联系管理员</a>
              </p>
            </a-form>
          </a-space>
        </div>
      </div>
      <div class="right-wrap">
        <PluginsSvgIcon name="icon_login" />
      </div>
    </section>
  </div>
</template>
<script>
import { IconArrowRight } from '@arco-design/web-vue/es/icon'

export default {
  name: 'login',
  components: {
    IconArrowRight,
  },
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.login-wrap {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  > .bg {
    flex: 1;
    height: 100%;
    position: relative;
    &.left-wrap {
      background: #cbe4fe;
    }
    &.right-wrap {
      background: #1f2071;
    }
  }
  section {
    display: flex;
    align-items: center;
    width: 1200px;
    height: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > div {
      flex: 1;
      height: 100%;
    }
    .left-wrap {
      position: relative;
      background: #fff;
      border-radius: 24px 0 0 24px;
      box-shadow: -50px 20px 50px 2px rgba(0, 0, 0, 0.05);
      .login-form-wrap {
        width: 340px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        ::v-deep(.arco-btn) {
          .arco-btn-icon {
            position: absolute;
            right: 8px;
            opacity: 0.3;
          }
        }
        .password-tip {
          text-align: center;
          color: $--color-text-placeholder;
          a {
            color: $--color-primary;
          }
        }
      }
    }
    .right-wrap {
      flex: 1.02;
      position: relative;
      background: #e6f2ff;
      border-radius: 0 24px 24px 0;
      box-shadow: 50px 20px 50px 4px rgba(0, 0, 0, 0.2);

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 800px;
        opacity: 0.8;
      }
    }
  }
}
</style>