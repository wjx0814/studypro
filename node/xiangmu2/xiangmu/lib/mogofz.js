// 封装的mongodb操作js
var mongo =require("mongodb");
// 客户端
var MongoClient=mongo.MongoClient;
var url="mongodb://127.0.0.1:27017";
// 数据库名
var dbName="studypro";

/*
	* collections:数据库的表名
	* selector：执行条件
*/


// 调加函数
var add=function(client,collections,selector,fn){
	// 链接数据库
	var db=client.db(dbName);
	// 链接数据库里的表
	var collection=db.collection(collections);
	// collection.insert(selector,function(err,result){
	// 	if(err) throw err;
	// 	fn();
	// 	client.close();
	// })
	collection.insertOne(selector,function(err,result){
		if(err) throw err;
		fn();
		client.close();
	})
}
// --------------------------调加函数结束
// 查找函数
var find=function(client,collections,selector,fn){
	// 链接数据库
	var db=client.db(dbName);
	// 链接数据库里的表
	var collection=db.collection(collections);
	collection.find(selector).toArray(function(err,result){
		if(err) throw err;
		fn(result)
		client.close();
	})
}
// 改
var updates=function(client,collections,selector,fn){
	// 链接数据库
	var db=client.db(dbName);
	// 链接数据库里的表
	var collection=db.collection(collections);
	collection.updateOne(selector[0],selector[1],function(err,data){
		if(err) throw err;
		fn(data)
		client.close();
	})
}
// 删除
var del=function(client,collections,selector,fn){
	// 链接数据库
	var db=client.db(dbName);
	// 链接数据库里的表
	var collection=db.collection(collections);
	collection.deleteOne(selector,function(err,result){
		if(err) throw err;
		console.log("删除成功");
		fn(result)
		client.close();
	})
}
var methodType={
	add:add,
	find:find,
	del:del,
	updates:updates
}
// 数据导出
/*
	type:执行操作名
	collections：数据库表名
	selector：执行条件
*/
module.exports=function(type,collections,selector,fn){
	// 链接数据库
	MongoClient.connect(url,function(err,client){
		methodType[type](client,collections,selector,fn)
	})
}