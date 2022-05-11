/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 11:23:58 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-05-11 15:19:17
 */

export default {
    /**
     * 将对象用&连接
     * 
     * @param {Object} paramObj 对象值
     * @return {String}
     */
    formateObjToParamStr(paramObj) {
        const sdata = []
        for (let attr in paramObj) {
            sdata.push(`${attr}=${this.mixin_filter(paramObj[attr])}`)
        }
        return sdata.join('&')
    },
    /**
     * 将对象转为FormData,包括数组
     * 
     * @param {Object} paramObj 对象值
     * @return {String}
     */
    formatFormData(paramObj, arrayBrackets = true, encodeURI = false) {
        let formData = new FormData
        Object.keys(paramObj).map((key) => {
            if (Array.isArray(paramObj[key])) {
                if (arrayBrackets) {
                    formData.append(key, JSON.stringify(paramObj[key]));
                } else {
                    formData.append(key, JSON.stringify(paramObj[key]).replace(/\[/g, '').replace(/\]/g, '').replace(/\"/g, ''));
                }
            } else {
                if (encodeURI) {
                    formData.append(key, encodeURIComponent(paramObj[key]));
                } else {
                    formData.append(key, paramObj[key]);
                }
            }
        })

        return formData
    },
    //格式化代码,去除行前空格
    fCode(code) {
        let code_list = []
        code.trim().split('\n').forEach(function (v) {
            code_list.push(v)
        })

        let fcode = ''
        if (code_list.length > 1) {
            let length = code_list[code_list.length - 1].match(/(^(?:\s|\t)+)/);
            length = length[0].length
            for (let i = 1; i < code_list.length; i++) {
                code_list[i] = code_list[i].slice(length)
            }
            for (let i = 0; i < code_list.length; i++) {
                fcode = fcode + code_list[i] + '\n'
            }
        } else {
            fcode = code_list[0]
        }
        return fcode
    }
}