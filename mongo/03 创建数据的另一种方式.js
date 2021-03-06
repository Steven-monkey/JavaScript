//引入mongoose第三方模块，用来操作数据库
const mongoose = require('mongoose')
//数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    //连接成功
    .then(() => {
        console.log('数据库连接成功');
        //连接失败
    }).catch(err => {
        console.log(err, '数据库连接失败');
    })
//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})
//使用规则创建集合
// .model(参数1：集合名词，参数2：集合规则(也就是Schema一个实例对象))
const Course = mongoose.model('Course', courseSchema)
//创建文档
// Course.create({ name: '康彦军', author: 'peisi', isPublished: false }, (err, result) => {
//     console.log(err);
//     console.log(result);
// })
Course.create({ name: '张佳星', author: 'xingye', isPublished: false })
    .then(result => {
        console.log(result);
    })