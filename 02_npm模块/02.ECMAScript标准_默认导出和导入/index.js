/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并“默认”导出
 * 注意：Node.js 默认支持 CommonJS 标准语法，若使用 ECMAScript，则须在模块所在文件夹新建 package.json 文件，并设置{"type":"module"}
 */

// 导入
import obj from './utils.js'
console.log(obj)