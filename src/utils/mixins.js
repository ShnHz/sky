/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:46:35 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-08-23 14:30:45
 */

// directives
import directives from './directives/directives.js'
import { ClickOutside } from 'element-plus/lib/directives'

// filters
import numberFilters from './filters/numberFilters.js'
import arrayFilters from './filters/arrayFilters.js'

// methods
import dateMethods from './methods/dateMethods.js'
import otherMethods from './methods/otherMethods.js'
import typeMethods from './methods/typeMethods.js'
import stringMethods from './methods/stringMethods.js'
import numberMethods from './methods/numberMethods.js'
import formatMethods from './methods/formatMethods.js'

const mixins = {
    directives: {
        ...directives,
        clickoutside: ClickOutside,
    },
    filters: {
        ...numberFilters,
        ...arrayFilters
    },
    methods: {
        ...dateMethods,
        ...otherMethods,
        ...typeMethods,
        ...stringMethods,
        ...numberMethods,
        ...formatMethods
    }
}
export default mixins