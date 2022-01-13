/*
 * @Author: sanghangning 
 * @Date: 2021-06-03 10:01:44 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-06-03 10:18:58
 */

/*
 * https://github.com/chenqingspring/vue-lottie
 * 
 * import * as animationData from './assets/pinjump.json';
 * <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
 * defaultOptions: {animationData: animationData},
 */

import Vue from 'vue'
import lottie from 'vue-lottie'
Vue.component('lottie', lottie)