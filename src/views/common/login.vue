/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:47:09 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-01-15 16:19:25
 */
<template >
  <div class="login-wrap">
    <div class="left-wrap">
      <div class="login-fun-wrap">
        <h3>登 录</h3>
      </div>
    </div>
    <div class="right-wrap">
      <!-- <div class="box-wrap box1"></div>
      <div class="box-wrap box2"></div>
      <div class="box-wrap box3"></div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.login-wrap {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  > div {
    flex: 1;
    position: relative;
  }
  .left-wrap {
    margin: 0 auto;
    .login-fun-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 500px;
    }
  }
  .right-wrap {
    > .box-wrap {
      position: absolute;
      border-radius: 100px;
    }
    .box1 {
      z-index: 1;
      width: 100vh;
      height: 100vw;
      left: -50px;
      top: 50px;
      background: #2b7fee;
      transform: rotate(45deg) translate(0%, -50%);
    }
    .box2 {
      z-index: 0;
      width: 100vh;
      height: 100vw;
      top: -180px;
      left: 50px;
      background: #d6e3f2;
      transform: rotate(45deg) translate(0%, -50%);
    }
    .box3 {
      z-index: 2;
      width: 100vh;
      height: 100vw;
      top: 100px;
      left: 400px;
      background: mix($--themeColor, $--color-white, 50%);
      opacity: 0.2;
      transform: rotate(45deg) translate(0%, -50%);
    }
  }
}
</style>