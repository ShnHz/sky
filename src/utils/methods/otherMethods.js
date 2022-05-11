/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 11:23:58 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-05-09 14:57:07
 */
import router from '../../router'

export default {
    /**
     * 粘贴至剪剪贴板
     * 
     * 例: <div @click="mixin_onCopy" v-clipboard:copy="'复制的数据'">点我复制</div>
     */
    mixin_onCopy() {
        this.$copyText(true).then(
            function (e) {
                console.log('已将分享地址粘贴到剪贴板上，尽情去分享吧~')
            }
        )
    },
    /**
     * 排序 指定对象的某个key进行排序
     * 
     * 例: list = list.sort(this.mixin_objectKeyCompare(key,1))
     * 
     * @param {String} property 指定key
     * @param {Number} order = 1 排序方式,1 升序 else 降序
     * @return {Array}
     * 
     */
    mixin_objectKeyCompare(property, order = 1, sortReverse = false) {
        return function (obj1, obj2) {
            var value1 = obj1[property]
            var value2 = obj2[property]

            let reDateTime = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/

            if (value1 === value2) {
                return 0
            } else if (value1 === '-') {
                return 1
            } else if (value2 === '-') {
                return -1
            }

            if (reDateTime.test(value1 + '') && reDateTime.test(value2 + '')) {
                value1 = new Date(value1)
                value2 = new Date(value2)
            }

            if (sortReverse) {
                if (order == 0) {
                    return value1 - value2 // 升序
                } else {
                    return value2 - value1 // 降序
                }
            } else {
                if (order == 1) {
                    return value1 - value2 // 升序
                } else {
                    return value2 - value1 // 降序
                }
            }
        }
    },
    /**
     * 绑定回车事件
     * 
     * @param {Function}
     */
    mixin_enterKeyup(fun) {
        document.onkeydown = function (ev) {
            var event = ev || event
            if (event.keyCode == 13) {
                fun()
            }
        }
    },
    /**
     * 解绑回车事件 
     */
    mixin_enterKeyupDestroyed(fun) {
        document.onkeydown = undefined
    },
    /**
     * 数组过滤掉false, null, 0, "", undefined, and NaN值的方法 
     */
    mixin_bouncer(arr) {
        return arr.filter(function (val) {
            return !(!val || val === "");
        });
    },
    /**
     * 将查询参数映射到url上
     */
    urlPushParams(route, params) {
        let query = {}
        for (let key in params) {
            if (Object.prototype.toString.call(params[key]).slice(8, -1) === 'Array') {
                query[key] = `-ary-[${params[key].join(',')}]`
            } else {
                query[key] = params[key]
            }
        }
        router.push({
            ...route,
            query: {
                ...route.query,
                ...query
            }
        })
    },
    /**
     * 获取url上的查询参数，并转换为对应类型
     */
    urlGetParams(query) {
        let params = {}
        for (let key in query) {
            if (query[key]) {
                if (query[key].includes('-ary-')) {
                    let arrStr = query[key].match(/\[(.+?)\]/)
                    params[key] = arrStr ? arrStr[0].replace(/\[|]/g, '').split(',') : []
                } else if (new RegExp(/^\d{1,}$/).test(query[key])) {
                    params[key] = parseInt(query[key])
                } else {
                    params[key] = query[key]
                }
            }
        }

        return params
    }
}