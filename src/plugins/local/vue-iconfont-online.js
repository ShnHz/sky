/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 10:03:24 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-06-04 11:23:08
 */

/*
 * https://github.com/deboyblog/vue-wechat-title
 * 
 * <!-- 任意元素中加 v-wechat-title 指令 建议将标题放在 route 对应meta对象的定义中 -->
 * <div v-wechat-title="$route.meta.title"></div>
 * <!--or-->
 * <router-view v-wechat-title="$route.meta.title"></router-view>
 */

import Vue from 'vue'
import IconFontOnline from 'vue-iconfont-online'
Vue.use(IconFontOnline, {
    url: '//at.alicdn.com/t/font_2415426_7yy9bj8etio.css',
    symbol: 'gac-icon-',
    fontFamily: 'gac-icon',
    fontSize: 22
})