/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 09:54:10 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-06-03 09:56:35
 */

/*
 * https://www.swiper.com.cn/
 * https://github.com/surmon-china/vue-awesome-swiper
 * 
 * <swiper ref="mySwiper" :options="swiperOptions">
 *  <swiper-slide>Slide 1</swiper-slide>
 *  <swiper-slide>Slide 2</swiper-slide>
 *  <div class="swiper-pagination" slot="pagination"></div>
 * </swiper>
 * 
 * swiperOptions: {
 *  pagination: {
 *   el: '.swiper-pagination'
 *  },
 * // Some Swiper option/callback...
 * }
 */

import Vue from 'vue'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)