// 搜索框
$(".search>form input:text").focus(function(){
	$(this).attr('placeholder', '');
})
$(".search>form input:text").blur(function(){
	$(this).attr('placeholder', '请输入商品关键词进行搜索');
})

// 购物车箭头切换
$(".shopCat").hover(
	function(){
		$(".shopCat>.fa-sort-desc").css({display:"none"});
		$(".shopCat>.fa-sort-asc").css({display:"block"});

	},function(){
		$(".shopCat>.fa-sort-desc").css({display:"block"});
		$(".shopCat>.fa-sort-asc").css({display:"none"});

	})

// 获取cookie加载会员
var cookieuser=getCookie("username");
var cookiepass=getCookie("pass");

if((cookieuser&&cookiepass)!=undefined){
	console.log(cookieuser)
	$("#usnametype").html('您好'+cookieuser+'！欢迎来到商城!');
	$(".replacedl").html("会员退出");
	$(".replacezc").html("用户中心");

}
// var statusList =['aa','本地生活','本地优质诚信商家','混合支付兑换']
// let h = template('selectTemplate', {
//     statusList: statusList
//   })
//   $('#head').html(h)
console.log(1545454)
