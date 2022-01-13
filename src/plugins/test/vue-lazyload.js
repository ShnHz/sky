/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:59:02 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-06-03 10:00:57
 */

/*
 * https://github.com/hilongjw/vue-lazyload
 * 
 * <img v-lazy="img.src" >
 */

import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

// or with options
// const loadimage = require('./assets/loading.gif')
// const errorimage = require('./assets/error.gif')

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: errorimage,
//   loading: loadimage,
//   attempt: 1
// })