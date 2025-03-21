var path =require('path')
let p='/desktop/user/web/week7/sample.txt'


console.log(path.basename(p))
//will give last name


console.log(path.dirname(p))
//folder name


console.log(path.extname(p))
//will give extention(.txt,.js,.jpg)


console.log(path.join('/home','js','paath.js'))
//will join path

console.log(path.parse(p))
//will give object containing details