/**
 * 目标1：压缩 html 代码
 * 需求： 把回车符 \r，换行符 \n 去掉，写入到新 html 文件中
 * 1.1 读取原 html 文件内容
 * 1.2 正则替换字符串
 * 1.3 写入到新的 html 文件中
 */

const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
    if (err) console.log(err)
    else {
        const buffer = data.toString()
        const result = buffer.replace(/[\r\n]/g, '')
        // console.log(result)
        // 写入新的 文件    若写入非当前文件夹下，则前提是 文件夹存在，因为它不会动态新建文件夹
        fs.writeFile(path.join(__dirname, './dist/index.html'), result, err => {
            if (err) console.log(err)
            else console.log('写入成功')
        })
    }
})