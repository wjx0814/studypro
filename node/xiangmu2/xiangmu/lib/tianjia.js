var mongo=require("./mogofz.js");
mongo("add","userinfos",{uid:"001",username:'张三',pas:123456},function(value){
})
mongo("add","userinfos",{uid:"002",username:'李四',pas:456789},function(value){
})
mongo("add","userinfos",{uid:"003",username:'王五',pas:789101},function(value){
})
