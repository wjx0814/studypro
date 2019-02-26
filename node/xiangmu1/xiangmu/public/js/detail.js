// 页面加载
$("#headWrapInd").load("head.html");
$("#footWrapInd").load("foot.html");
$("#sidewrap").load("side.html");

//获取url中的search	
function GetQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return (r[2]); return null; 
}
	var pid=GetQueryString("pid");
// 加载大框图片
// ajax请求函数:term第几项内容，loucdata相对楼层数据，子楼层数据
	// 大图
	var bigpho=$(".inlet-top");
	// 缩略图
	var smallul=$(".itemsUl");
	// 商品名称
	var goodname=$("#lblName");
	// 价格
	var goodmoney=$(".pri>.mon");
	// 积分
	var integral=$("#integral");
	// 商品编号
	var proid=$(".proid");
	// 导航商品名称
	var navgoodname=$(".goodname")

	ajaxData(bigpho,smallul,"electdata","homeelectric")

function ajaxData(term,smalls,loucdata,lousubdata){
		$.ajax({
			type:"get",
			url:"datas/detaildata.json",
			async:false,
			success:function(res){
				var proarr=res[loucdata][0][lousubdata];
				var str="";var itemsUlstr="";var goodnamestr="";var goodmoneystr=""; var integralstr="";
				var navgoodnamestr="";
				var proidstr="";
				$.each(proarr,function(index,ele){
					if (ele.pid==pid) {
						str+='<a href="#"><img id="imgidname" src="'+ele.srcimg+'" pid='+ele.pid+'></a>';
						goodnamestr=ele.name;
						navgoodnamestr=ele.name;
						goodmoneystr=ele.Price;
						integralstr=ele.spjf;
						proidstr=ele.spid;
					}
					$.each(ele.suolue,function(index,eles){
						itemsUlstr+='<li>'
								+'<img src="'+eles+'">'
							+'</li>'
					})
				})
				$(term).append(str);
				$(smalls).append(itemsUlstr);
				goodname.html(goodnamestr);
				navgoodname.html(navgoodnamestr)
				goodmoney.html(goodmoneystr+".00");
				integral.html(integralstr+".00");
				proid.html(proidstr);
			}
		})
	}
	// 购物操作
	// 点击添加商品数量
	var spnum=$(".num");
	console.log(spnum)
	var spnumdata=parseInt(spnum.html());
	// 添加
	var plus=$(".plus");
	plus.click(function(){
		spnumdata++;
		spnum.html(spnumdata);
	})
	var reduce=document.querySelectorAll(".reduce")[0];
	var reduce=$(".reduce")
	reduce.click(function(){
		spnumdata--;
		if(spnumdata>=1){
			spnum.html(spnumdata);
		}else{
			alert("商品数量不能小于1")
			spnum.html(1);
		}
	})

	//先获取cookie 来判断cookie中是否有datas=[{}];
		//若果没有 设置一个cookie  datas=[];
	var  cookie=getCookie("datas");
		if(cookie==undefined){
			//设置cookie
			setCookie("datas","[]",55);
			cookie=getCookie("datas");
		}
	var cookiearr=JSON.parse(cookie);
	// console.log(cookiearr)

	//取出所有按钮
	var btns=$(".buyNub-buy");
	//点击添加
		btns.click(function(){
				//收集要添加的信息
			var obj={};
			// 图片
			var imgid=$("#imgidname");
			obj.imgsrc=imgid.prop("src");
			// 名称
			var lblName=$("#lblName");
			obj.name=lblName.html();
			// 积分
			var integral=$("#integral");
			obj.des=integral.html();
			// 价格
			var idmon=$("#idmon");
			obj.price=idmon.html();
			// 数量
			obj.pcount=spnumdata;//商品数量
			// 获取id
			obj.pid=imgid.attr("pid");
			console.log(obj.pcount+"商品数量")
			//假如当前的商品存在了  
			if(cheackobj(obj.pid)){
				//更新商品数量
				// updateNum(obj.pid,1);
				updateNum(obj.pid,spnumdata);
			}else{
				var cookie=getCookie("datas");
				cookiearr=JSON.parse(cookie);
				//把收集好的信息添加到cookie数组中
				cookiearr.push(obj);//[{}]
				//把添加好商品的数组转会字符串
				var cookiestr=JSON.stringify(cookiearr)
				//从新设置cookie
				setCookie("datas",cookiestr,55);
			} 
			 //点击添加完成调用获取总数
					spnumdata=getTotal()
			 
		})

	// 点击跳转购物车
	$(".buyNub-buy").click(function(){
		// 判断是否存在cookie，有跳转购物车，没有跳转到登陆
		// 获取cookie加载会员
		var cookieuser=getCookie("username");
		var cookiepass=getCookie("pass");

		if((cookieuser&&cookiepass)!=undefined){
			window.location.href="buycat.html";
		}else{
			
			if (confirm("系统检测到您暂未登陆，是否自动为您跳转至登陆页")) {
				window.location.href="land.html";
			}else{
				console.log("不跳转")
			}
		}
	})

	// 缩略图切换
	$(".itemsUl>li>img").mouseenter(function(event) {
		$("#imgidname").attr("src",$(this).attr('src'))
	});
	// 鼠标放在inlet-top图片让大图显示
	$(".inlet-top").hover(function() {
		$(this).css({opacity:0.5});
		var smallimg=$(this).children().children().attr("src");
		var bigdiv=$(".bigdiv");
		bigdiv.css({"display":"block"})
		bigdiv.children().attr('src', smallimg);
	}, function() {
		$(this).css({opacity:1});
		var bigdiv=$(".bigdiv");
		bigdiv.css({"display":"none"})
	});


	// 商品描述评价切换
	$(".picul>li").click(function(){
		var indexs=$(this).index();
		$(this).addClass("tycss").siblings().removeClass("tycss");
		$(".pictypewrap div").eq(indexs).css({display:"block"}).siblings().css({display:"none"})
	})

	// 评分
	$(".stars>li>i").click(function(){
		var x=$(this).index(".stars>li>i");
		$(".stars>li>i").each(function(index,ele){
			if(index<x+1){
			}else{
				$(".stars>li>i").eq(index).css({backgroundPositionX:-63})
			}
		})
	})

	$("#hometz").click(function(){
		window.location.href="index.html"
	})



