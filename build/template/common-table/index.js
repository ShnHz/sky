const {
    createFile,
} = require('../createFile.js')
const render = require('json-templater/string');

module.exports = (option) => {
    // 创建view文件
    createFile(render(require(`./VIEW_TEMPLATE.js`), {
        templateName: option.templateName,
        viewsOutputPath: option.viewsOutputPath
    }), `./src/views${option.viewsOutputPath}/${option.templateName}.vue`)
}