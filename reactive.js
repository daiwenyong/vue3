// 基础类型

// 响应数据
let name = 'dwy'
let age = 18
let str = ''

// 收集依赖
let effect = () => str = `${name}:${age}` 

let dep = new Set()
function track() {
    dep.add(effect)
}
function trigger() {
    dep.forEach(effect=>effect())
}
effect()
track()
age = 19
trigger()
console.log(str)