	
	var elposition = $('.nav-ul')
	var elposiWidth = $('.nav-ul').outerWidth(true)
	//		获取li长度
	var liLength = $('.nav-ul').children().length
	var winWinth = $(window).innerWidth()/2
	$('.nav-ul').on('click','li',function(e){
		//	当前点击角标
		var index = $(this).index()
		var width = $(this).outerWidth(true)	//当前元素宽度
		//距离父元素的左
		var left = $(this).position().left;		//当前元素距离父元素左距离
		var right = elposiWidth-left-width		//当前元素距离父元素右距离

		var ofleft = $(this).offset().left		//当前元素距离屏幕距离
//		判断当前项是否向右移动  选中元素中点距离视口的距离大于屏幕宽度一半

		if(ofleft+width/2>winWinth){
			console.log('左移')
			$(elposition).css({
				left:-left+'px'
			})
		}else {
			console.log('右移')
			$(elposition).css({
				left:left+'px'
			})
		}





		$('.conwrap').html($(this).html())
		
	})


