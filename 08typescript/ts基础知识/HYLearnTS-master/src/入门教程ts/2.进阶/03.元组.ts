/**
 * ts声明的数组。一般只能放入相同的类型
 * 元组能放入不同的类型
 */

//  定义一个数组内容分别存放string和number的元组
let tom: [string, number] = ['sjj', 23]
// 1.初始化和赋值时需要提供元组类型中的指定项
// tom = ['sjj'] // 报错， 少一个不行
// tom = ['sjj', 23, 23] // 报错 多一个不行
// 2.添加越界元素，限制为元组中每个类型的联合类型
tom.push('1997')
tom.push(365*23)

export {}