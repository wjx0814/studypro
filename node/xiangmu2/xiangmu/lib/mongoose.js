const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studypro');

const Schema = mongoose.Schema;
 
// 定义保存数据类型
const userInfoSchema = new Schema({
    username: String,
    pwd:  String
});
// 发布模型
const userModel  = mongoose.model('userInfo', userInfoSchema);
var data={
    username: '76d80224611fc919a5d54f0ff9fba446',   //qwe
    pwd:    '76d80224611fc919a5d54f0ff9fba446'      //qwe
}
// 实例
const userObject = new userModel(data);

userObject.save(function (err) {
  if(err)throw err
  console.log('保存数据成功')
});

module.exports = userModel