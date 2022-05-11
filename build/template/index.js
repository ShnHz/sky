var inquirer = require('inquirer')

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
            '基础表格',
            '复杂表格（添加、编辑、删除）',
            '复杂表格（侧边筛选）'
        ]
    }]).then((answers) => {
        let selectTemplate = {
            '基础表格': 'common-table',
            '复杂表格（添加、编辑、删除）': 'complex-table1',
            '复杂表格（侧边筛选）': 'complex-table2',
        }
        option.templatePath = selectTemplate[answers['selectTemplate']]
    })

    // 输入业务名称
    await inquirer.prompt([{
        type: 'input',
        name: 'templateName',
        message: '请输入添加的业务名称',
        default: 'admin'
    }]).then((answers) => {
        option.templateName = answers['templateName']
    })

    // 输入生成文件路径
    await inquirer.prompt([{
        type: 'input',
        name: 'viewsOutputPath',
        message: '请输入添加的views文件路径，例：/admin',
        default: '/admin'
    }]).then((answers) => {
        option.viewsOutputPath = answers['viewsOutputPath']
    })

    // 创建对面模板文件
    const initFun = require(`./${option.templatePath}/index.js`)
    initFun(option)
}

start()