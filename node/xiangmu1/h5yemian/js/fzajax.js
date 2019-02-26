// method:请求方式；
function ajax(method,url,data,fn){
	// 1、创建对象
	var xhr=null;
	try{
		xhr=new XMLHttpRequest();
	}catch(e){
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 2、open方法
	if(method=="get"&&data){
		url=url+"?"+data;
	}
	xhr.open(method,url,true);
	// 3、send方法
	if(method=="get"){
		xhr.send()
	}else{
		// post请求时执行
		// 声明发送的数据类型
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	// 4、接收数据
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if (xhr.status==200) {
				// 数据接收成功后执行传来的函数
				fn(xhr.responseText)
			}else{
				alert("错误"+xhr.status)
			}
		}
	}
}