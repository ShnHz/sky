/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:46:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-01-13 22:04:52
 */

// directives
import directives from './directives/directives.js'
import { ClickOutside } from 'element-plus/lib/directives'

// filters
import numberFilters from './filters/numberFilters.js'
import arrayFilters from './filters/arrayFilters.js'

// methods
import moment from 'moment'
import otherMethods from './methods/otherMethods.js'
import typeMethods from './methods/typeMethods.js'
import stringMethods from './methods/stringMethods.js'
import formatMethods from './methods/formatMethods.js'

const mixins = {
    directives: {
        ...directives,
        clickoutside: ClickOutside,
    },
    filters: {
        ...arrayFilters,
        ...numberFilters
    },
    methods: {
        //日期处理 http://momentjs.cn/
        moment,
        ...typeMethods,
        ...stringMethods,
        ...numberMethods,
        ...formatMethods,
        ...otherMethods,
    }
}
export default mixins