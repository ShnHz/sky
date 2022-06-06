/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:48:06 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-06-06 17:38:18
 */
import PluginsSvgIcon from '@/components/plugins/PluginsSvgIcon.vue'

const components = {
    PluginsSvgIcon,
}

export function loadAllComponents(app) {
    for (let key in components) {
        app.component(key, components[key]);
    }
}