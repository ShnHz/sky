/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:56:42 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-06-03 09:58:48
 */

/*
 * https://github.com/cmp-cc/vue-cookies
 * 
 * config $cookies.config('30d') // 30 day after, expire
 * get    $cookies.get(keyName)                    
 * set    $cookies.set('theme','default');
 */

import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)