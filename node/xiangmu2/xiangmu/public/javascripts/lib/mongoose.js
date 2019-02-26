
// 创建user
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
    username: '47bce5c74f589f4867dbd57e9ca9f808',
    pwd:    '202cb962ac59075b964b07152d234b70'
}
// 实例
const userObject = new userModel(data);

userObject.save(function (err) {
  if(err)throw err
  console.log('保存数据成功')
});

module.exports = userModel