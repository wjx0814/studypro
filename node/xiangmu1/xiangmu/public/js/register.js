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

// -----------表单验证
//用户名判断
var reg=/^[a-z0-9A-Z]{6,10}$/;
$("#user").on({
	focus:function(){
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if (!reg.test($(this).val())) {
			// console.log(reg.test($("#user").val()))
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			// console.log(reg.test($("#user").val()))
			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})

// 密码
var reg1=/^\w{6,}$/;
$("#pass").on({

	focus:function(){
		console.log($("#pass"))
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if (!reg.test($(this).val())) {
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			console.log(reg1.test($("#pass").val()))


			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})
// 判断密码是否一致
$("#rpass").on({
	focus:function(){
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if ($(this).val()!=$("#pass").val()) {
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})
// 二级密码
var reg2=/^[a-zA-Z0-9]{1,}[a-zA-Z]{1,}$/;
$("#sendPass").on({
	focus:function(){
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if (!reg2.test($(this).val())) {
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})
// 二级密码确认
$("#rsendPass").on({
	focus:function(){
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if ($(this).val()!=$("#sendPass").val()) {
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})
// 验证姓名actualName
var reg3=/^[\u4e00-\u9fa5]{2,}$/;
$("#actualName").on({
	focus:function(){
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if (!reg3.test($(this).val())) {
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})
// 手机验证
var  reg4=/^1[3|4|5|7|8]\d{9}$/;
$("#phone").on({
	focus:function(){
		$(this).parent().siblings(".default-prompt").show();
		$(this).parent().siblings(".error-prompt").hide();
	},
	blur:function(){
		$(this).parent().siblings(".default-prompt").hide();
		if (!reg4.test($(this).val())) {
			$(this).parent().siblings(".error-prompt").show();
		} else {
			// console.log("验证通过")
			$(this).parent().siblings(".error-prompt").hide();
		}
	}
})

// 短信验证码生成
// 生成随机数

function codefn(){
	var arrcode="";
	for(var i=0;i<6;i++){
		var codex=Math.floor(Math.random()*(10-0)+0);
		arrcode+=codex;
	}
	return arrcode;
}

// 验证码框的值为生成的随机数
// 点击出现生成验证码
$(".information>input:eq(1)").click(function(){
	$("#verifiCode").show().val(codefn)
})
// 短信验证失去焦点判断内容是否一致
$("#verCode").blur(function(){
	if($("#verCode").val()==$("#verifiCode").val()){
		console.log("相同")
		$(this).parent().siblings(".default-prompt").hide();
		$(this).parent().siblings(".error-prompt").hide();
	}else{
		$(this).parent().siblings(".default-prompt").hide();
		$(this).parent().siblings(".error-prompt").show();
	}
})
$("#verCode").focus(function(){
	$(this).parent().siblings(".error-prompt").hide();
	$(this).parent().siblings(".default-prompt").show();
})

// ----------点击注册
$("#btn").click(function(){
	//把数据存储到cookie
	// 用户名
	// console.log(reg.test($("#user").val()))
	if(reg.test($("#user").val())&&reg1.test($("#pass").val())&&reg4.test($("#phone").val())&&$("#pass").val()==$("#rpass").val()){
		setCookie("username",$("#user").val(),55);
		setCookie("pass",$("#pass").val(),55);
		setCookie("phone",$("#phone").val(),55);
		alert("注册成功")
		window.location.href="land.html"
	}else{
		alert("验证未通过")
	}
})
// 三级联动
var province=["-选择省份-","黑龙江","广东","辽宁"];
		var citys=[
					["-选择市-"],
					["哈尔滨市","齐齐哈尔市","鸡西市","鹤岗市","双鸭山市","大庆市","伊春市"],
					["广州市","梅州市","珠海市","韶关市","深圳市","汕头市","佛山市","湛江市"],
					["沈阳市","大连市","鞍山市","抚顺市","丹东市","锦州市","辽阳市","盘锦市"]
				]
		var areas=[
						[
							["-选择县/区-"]
						],
						[
							["南岗","道里","道外"],["富裕县","依安县","龙沙区"],["鸡冠区","恒山区","梨树区"]
						],
						[
							["天河","越秀","白云"],["平远县","梅江区","丰顺县"],["香洲区","斗门区","金湾区"]
						],
						[
							["和平区","沈河区","大东区"],["中山区","西岗区","甘井子区"],["铁东区","铁西区","立山区"]
						]
				
					]
		// 省
		var prosel=document.getElementById("prosel");
		// 市
		var citysel=document.getElementById("citysel");
		// 区
		var areasel=document.getElementById("areasel");
		// 遍历省
		for(var i=0;i<province.length;i++){
			var opt=document.createElement("option");
			opt.innerHTML=province[i];
			opt.value=i;
			prosel.appendChild(opt)
		}
		// 存储省的下标
		var proindex=null;
		// 遍历市
		prosel.onchange=function(){
			citysel.length=0;
			areasel.length=0;
			proindex=this.value;

			loadarea(proindex,0);

			for(var j=0;j<citys[proindex].length;j++){
				var opt=document.createElement("option");
				opt.innerHTML=citys[proindex][j];
				opt.value=j;
				citysel.appendChild(opt)
			}
		}
		// 市的下拉事件遍历区
		citysel.onchange=function(){
			areasel.length=0;
			var cityindex=this.value;
			loadarea(proindex,cityindex)

		}
		function loadarea(pindex,cindex){
			for(var k=0;k<areas[pindex][cindex].length;k++){
				var opt=document.createElement("option");
				opt.innerHTML=areas[pindex][cindex][k];
				opt.value=k;
				areasel.appendChild(opt)
			}

		}
		window.onload=function(){
			var opt=document.createElement("option");
			var opt1=document.createElement("option");
			opt.innerHTML="请选择";
			citysel.appendChild(opt);
			areasel.innerHTML=citysel.innerHTML
		}
