// 1. 加载 fs 模块对象
const fs = require('fs')
// 2. 写入文件内容
fs.writeFile('./test.txt', 'hello node.js',err=>{
    if(err)console.dir(err)
    else console.log('写入成功')
})
// 3. 读取文件内容
fs.readFile('./test.txt',(err,data)=>{
    if(err) console.dir(err)
    // data 是 16进制数据流对象，toString转成字符
    else console.log(data.toString())
})

// 注意：此处路径是以终端所在位置为起点
console.log(__dirname)