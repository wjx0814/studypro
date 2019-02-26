// 加载头部跟底部
	$("#headWrapInd").load("head.html");
	$("#footWrapInd").load("foot.html");

	// 头部轮播
	var num=0;
	var timer=null;
	timer=setInterval(move,3000);
	// 定时器
	function move(){
		num++;
		if(num>$("#banner>li").length-1){
			num=0;
		}
		$("#banner>li").eq(num).show().siblings().hide();
		$(".banwraip>.banner_ctrl>li").eq(num).addClass('bianhuan').siblings().removeClass('bianhuan');
	}
	// 控制器切换
	$(".banner_ctrl li").mouseenter(function(){
		num=$(this).index();
		$("#banner>li").eq(num).show().siblings().hide();
		$(".banwraip>.banner_ctrl>li").eq(num).addClass('bianhuan').siblings().removeClass('bianhuan');
	})
	// 移入移除定时器
	$("#banner,.banwraip .bancon,.banner_ctrl li").on("mouseenter",function(){
		clearInterval(timer)
	})
	$("#banner,.banwraip .bancon,.banner_ctrl li").on("mouseleave",function(){
		timer=setInterval(move,3000)
	})

	// 鼠标经过左侧列表#banLeNav让.banlicon显示
	$("#banLeNav").hover(
		function(){
		$(".banlicon").css({zIndex:1})
	},function(){
		$(".banlicon").css({zIndex:-1})
	})

	// 经过li加载相对应的subitem
	$("#banLeNav>li").each(function(index){
		var indexs=$(this).index();
		$(this).mouseenter(function(){
			$(".banlicon>.subitem").eq(indexs).show().siblings().hide();
		})
	})
	// 经过加载的div继续显示
	$(".banlicon").mouseenter(function(event) {
		$(this).css({zIndex:1})
	});
	$(".banlicon").mouseleave(function(event) {
		$(this).css({zIndex:-1})
	});

	// 加载今日精选
	$.ajax({
		type:"get",
		url:"datas/index.json",
		async:true,
		success:function(res){
			var proarr=res.selectedimg;
			var str="";
			$.each(proarr,function(index,ele){
				if(index==3||index==7){
					str+='<li class="clearmargin" pid='+ele.pid+'><a href="#"><img src="'+ele.srcimg+'"></a></li>'
				}else{
					str+='<li pid='+ele.pid+'><a href="#"><img src="'+ele.srcimg+'"></a></li>';
				}
			})
			$(".seco-goods").append(str)
		}
	})

	// ajax请求函数:term第几项内容，loucdata相对楼层数据，子楼层数据
	function ajaxData(term,loucdata,lousubdata){
		$.ajax({
			type:"get",
			url:"datas/index.json",
			// async:true,
			async:false,
			success:function(res){
				var proarr=res[loucdata][0][lousubdata];
				var str="";
				$.each(proarr,function(index,ele){
					str+='<li pid='+ele.pid+'>'
								+'<div class="imgBox">'
									+'<a href="#"><img src="'+ele.srcimg+'"></a>'
								+'</div>'
								+'<div class="info">'
									+'<a href="#">'+ele.name+'</a>'
								+'</div>'
								+'<div class="price">￥'+ele.Price+'.00'+'</div>'

							+'</li>'
				})
				$(term[0]).append(str)
			}
		})
	}
	// 加载生活电器
	// 生活小家电
	var hdul=$("#electric>.subBox>.type-wrap>.tyul").eq(0);
	ajaxData(hdul,"electdata","homeelectric")

	// 加载手机
	var sjul=$("#electric>.subBox>.type-wrap>.tyul").eq(1);
	ajaxData(sjul,"electdata","mobilePhone")
	// 加载生活
	var shul=$("#electric>.subBox>.type-wrap>.tyul").eq(2);
	ajaxData(shul,"electdata","life")
	// 厨房
	var cful=$("#electric>.subBox>.type-wrap>.tyul").eq(3);
	ajaxData(cful,"electdata","Kitchen")




	// 加载男女服装
	// 上衣
	var bgul=$("#boygiry>.subBox>.type-wrap>.tyul");

	ajaxData(bgul,"boygiry","Jacket")

	// 加载酒水美食
	// 零食
	var alcul=$("#alcohol>.subBox>.type-wrap>.tyul");
	ajaxData(alcul,"alcohol","snacks")

	// 加载美容护理
	// 护肤
	var cosmetoul=$("#cosmetology>.subBox>.type-wrap>.tyul");
	ajaxData(cosmetoul,"cosmetology","hufu")

	// 加载鞋靴箱包
	var shoesul=$("#shoes>.subBox>.type-wrap>.tyul");
	ajaxData(shoesul,"shoes","girlShoes")

	// // type切换
	$(".eletypes>li").mouseenter(function(){
		$(this).addClass("typebh").siblings().removeClass("typebh");
		$(this).children('a').addClass('typebha');
		// 给当前小标的div显示
		var index=$(this).index();
		$(".tyul").eq(index).show().siblings().hide()
	})
	$(".eletypes>li").mouseover(function(){
		$(this).children('a').addClass('typebha');
		$(this).siblings().children("a").removeClass("typebha");
	})

	// 左侧轮播
	var letime=null;
	letime=setInterval(lemove,4000)
	var lenum=0;
	function lemove(){
		lenum++;
		if(lenum>2){
			lenum=0;
		}
		clc($("#electric"))
		clc($("#boygiry"))
		clc($("#alcohol"))
		clc($("#cosmetology"))
		clc($("#shoes"))
	}
	function clc(idfloor){
		idfloor.find('.leBan-img:not(:animated)').animate({left:-210},2000,function(){
			idfloor.find('.leBan-img div:first-child').appendTo(idfloor.find(".leBan-img"))
			idfloor.find(".leBan-img").css({left:0})
		})
		 idfloor.find(".leBan_ctrl>li").eq(lenum).addClass('letypes').siblings().removeClass("letypes");
	}
	// 通过圆点控制图片
	function ctrlli(idfloorli){
		idfloorli.find('.leBan_ctrl>li').mouseenter(function(){
			clearInterval(letime)
			lenum=$(this).index()
			$(this).addClass("letypes").siblings().removeClass("letypes")
			$(this).parent().siblings(".leBan-img").animate({left:-210*$(this).index()},2000)
		})
		idfloorli.find('.leBan_ctrl>li').mouseleave(function(){
			letime=setInterval(lemove,4000)
		})
	}
	ctrlli($("#electric"));ctrlli($("#boygiry"));ctrlli($("#alcohol"));ctrlli($("#cosmetology"));ctrlli($("#shoes"));

	// 点击商品跳转至商品详情页
	// console.log($(".type-wrap>.tyul li"))
	$(".type-wrap>.tyul li").click(function(){
		// 获取当前li的pid
		var seach=$(this).attr("pid");
		// console.log(seach)
		window.location.href="details.html?pid="+seach;
	})

	// 侧边栏jq
	$(window).scroll(function(event) {
	// 页面滚动距离大于600显示按钮
		if ($(window).scrollTop()>=600) {
			// 淡入fadeIn淡出fadeOut
			$(".sidebot").css({bottom:0})
		} else {
			$(".sidebot").css({bottom:-40})
		}
	});

	$(".sidebot").click(function(){
		$("html,body").animate({scrollTop:0},800);
	})


	// 重构代码
	$.ajax({
		type: "post",
		url: "/shopClassify",
		success: function (res) {
			console.log(res)
			// var html = 
			// 				'<li class="cesli">'
			// 					+'<h3>'
			// 					+'<a href="#">'
			// 					+'<img src="'+res[0].icon+'">'
			// 					+''+res[0].classifyname+''
			// 					+'</a>'
			// 					+'</h3>'
			// 					+'</li>'	
						
			// $('.cesli').html(html)
		}
	});