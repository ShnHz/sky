var inquirer = require('inquirer')
var render = require('json-templater/string');

const {
    createFileVue,
} = require('./createFile.js')

let option = {
    templatePath: '',
    templateName: '',
    viewsOutputPath: '',
}

const start = async () => {
    // 选择业务模板
    await inquirer.prompt([{
        type: 'list',
        name: 'selectTemplate',
        message: '请选择要添加的模板？',
        default: 0,
        choices: [
            '基础表格页',
            '复杂表格页（添加、编辑、删除）'
        ]
    }]).then((answers) => {
        let selectTemplate = {
            '基础表格页': 'common-table',
            '复杂表格页（添加、编辑、删除）': 'complex-table1',
        }
        option.templatePath = selectTemplate[answers['selectTemplate']]
    })

    // 输入业务名称
    await inquirer.prompt([{
        type: 'input',
        name: 'templateName',
        message: '请输入添加的业务名称',
    }]).then((answers) => {
        option.templateName = answers['templateName']
    })

    // 输入生成文件路径
    await inquirer.prompt([{
        type: 'input',
        name: 'viewsOutputPath',
        message: '请输入添加的views文件路径，例：/views/admin',
        default: '/views/admin'
    }]).then((answers) => {
        option.viewsOutputPath = answers['viewsOutputPath']
    })

    // 创建vue文件
    createFileVue(render(require(`./${option.templatePath}/VUE_TEMPLATE.js`), {
        templateName: option.templateName
    }), `${option.viewsOutputPath}/${option.templateName}.vue`)
}

start()