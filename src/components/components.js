/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:06 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-01-14 18:31:11
 */

import Empty from '@/components/common/Empty.vue'
import UrlParam from '@/components/common/UrlParam.vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

const components = {
    'Empty': Empty,
    'UrlParam': UrlParam,
    'SvgIcon':SvgIcon,
}

export function loadAllComponents(app) {
    for (let key in components) {
        app.component(key, components[key]);
    }
}