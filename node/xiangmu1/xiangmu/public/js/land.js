// 鼠标悬浮帮助中心效果
$("#headNav>.help").hover(function(){
	// console.log(11)
	$(this).css({border:"1px solid #ccc"});
	$(this).children(".help-subNav").css({display:"block"})
},function(){
	$(this).css({border:"none"})
	$(this).children(".help-subNav").css({display:"none"})
})
$(".help-subNav>li").hover(function(){
	$(this).children('a').css({color:"rgb(255,85,0)"})
},function(){
	$(this).children('a').css({color:"#666"})

})

// 点击登录跳转主页
$("#logobtn").click(function(){
	console.log(111)
				
	var userval=$("#user").val();
	var passval=$("#pass").val();

	var cookieuser=getCookie("username");
	var cookiepass=getCookie("pass");

	if(userval!=cookieuser){
		alert("用户名不存在")
	}else if(passval!=cookiepass){
		alert("密码错误")
	}else{
		alert("登录成功");
		window.location.href="index.html";
	}



})