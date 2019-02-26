$(window).scroll(function(event) {
	// 页面滚动距离大于600显示按钮
	if ($(window).scrollTop()>=600) {
		// 淡入fadeIn淡出fadeOut
		$(".sidebot").animate({bottom:0},1000)

	} else {
		$(".sidebot").animate({bottom:-40},1000)
	}
});

$(".sidebot").click(function(){
	$("html,body").animate({scrollTop:0},800);
	// console.log($(window).scrollTop())

})
