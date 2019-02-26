// 加载头部跟底部、侧边栏
// $(function(){
	$("#footWrapInd").load("foot.html");
	$("#sides").load("side.html");

	var cookieuser=getCookie("username");
	var cookiepass=getCookie("pass");

	if((cookieuser&&cookiepass)!=undefined){
		$("#usnametype").html('您好'+cookieuser+'！欢迎来到商城!');
	}
	$("#usnametype").click(function(){
		window.location.href="index.html"
	})



// 购物车操作
//获取cookie中的数组
	var cookiearr=getAll();
	console.log(cookiearr)
	//获取表格
	// var tab=document.querySelector("table");	
	var tab=$("table")

	// 遍历表格
	var str="";
	for(var i=0;i<cookiearr.length;i++){
		// console.log(cookiearr[i].pcount)
		str+='<tr  pid="'+cookiearr[i].pid+'">'
						+'<td>'
							+'<input type="checkbox"  class="ck" name="">'
						+'</td>'
						+'<td>'
							+'<img src="'+cookiearr[i].imgsrc+'">'
							+'<a href="">'+cookiearr[i].name+'</a>'
						+'</td>'
						+'<td>'
							+'￥<span>'+cookiearr[i].price+'</span>'
						+'</td>'
						+'<td>'
							+'<span>'+cookiearr[i].des+'</span>'
						+'</td>'
						+'<td>'
							+'<div class="num">'
								+'<button class="jian">-</button>'
								+'<span class="pnum">'+cookiearr[i].pcount+'</span>'
								+'<button class="add">+</button>'
							+'</div>'
						+'</td>'
						+'<td>'
							+'￥<span class="total" id="abc">'+(Number(cookiearr[i].pcount)*Number(cookiearr[i].price))+'.00'+'</span>'
						+'</td>'
						+'<td>'
							+'<p><a href="#">收藏商品</a></p>'
							+'<button class="del">删除</button>'
						+'</td>'
					+'</tr>'
				
	}
	// 添加到表格
	// var tobody=document.createElement("tbody");
	// tobody.innerHTML=str;
	// tab.appendChild(tobody)
	var tobody=$("tbody");
	tobody.html(str)
	tab.append(tobody)

	// 单选框
	// var cks=document.querySelectorAll(".ck");
	var cks=$(".ck")
	//获取总价的方法
	function getTotalprice(){
		var cks=$(".ck");
		var sum=0;
		$(".ck").each(function(index, ele) {
			if($(".ck").eq(index).prop("checked")){
				var xiaoji=$(this).parent().siblings().eq(4).children().html()
				sum+=Number(xiaoji)
			}
		});
		return sum;
	}
	$(".ck").each(function(index,ele){
		$(".ck").eq(index).change(function(){
			//判定是否全选
			checkisall();
			$(".price").html(getTotalprice()+".00");

		})
	})

	//判定全选的函数
	var checkall=document.querySelector("#allCheck");
	function checkisall(){
		var flag=true;
		for(var i=0;i<cks.length;i++){
			if(cks[i].checked==false){
				flag=false;
			}
		}
		if(flag){
			checkall.checked=true;
		}else{
			checkall.checked=false;
		}
	}

	//全选操作
	checkall.onchange=function(){
		for(var i=0;i<cks.length;i++){
			cks[i].checked=this.checked;
		}
		document.getElementsByClassName("price")[0].innerHTML=getTotalprice()+".00";
	}
	//加减操作
	var jian=document.querySelectorAll(".jian");
	var adds=document.querySelectorAll(".add");
	for (var i=0;i<adds.length;i++) {
		//加
		adds[i].onclick=function(){
			var inp=this.previousElementSibling;
			// 数量框
			inp.innerHTML=Number(inp.innerHTML)+1;
			var tr=this.parentNode.parentNode.parentNode;
			var pid= tr.getAttribute("pid");
			var price=Number(tr.children[2].children[0].innerHTML);
			// console.log(price)
			tr.children[5].children[0].innerHTML=Number(inp.innerHTML)*price+".00";
			//更新数量
			updateNum(pid,1);
			//判断是否被选中
			var thisck=tr.children[0].children[0];
			if(thisck.checked==true){
				document.getElementsByClassName("price")[0].innerHTML=getTotalprice()+".00";
			}
		}
		//减
		jian[i].onclick=function(){
			var inp=this.nextElementSibling;
			inp.innerHTML=Number(inp.innerHTML)-1;
			var tr=this.parentNode.parentNode.parentNode;
			var pid=tr.getAttribute("pid");
			if(inp.innerHTML<1){
				inp.innerHTML=1;
			}else{
				updateNum(pid,-1);
			}
			var price=Number(tr.children[2].children[0].innerHTML);
			tr.children[5].children[0].innerHTML=Number(inp.innerHTML)*price+".00";
			//判断是否被选中
			var thisck=tr.children[0].children[0];
			if(thisck.checked==true){
				document.getElementsByClassName("price")[0].innerHTML=getTotalprice()+".00";
			}
		}

		//删除方法
		var dels=document.querySelectorAll(".del");
		dels[i].onclick=function(){
			var tr=this.parentNode.parentNode;
			//改变cookie数组中值
			var pid=tr.getAttribute("pid");
			tr.remove();
			tr=null;
			delcookie(pid);
		}
	}

	// 点击继续购物跳转
	$(".tzind").click(function(){
		window.location.href="index.html";
	})

	// 推荐效果
	// 后按钮点击
	var x=0;
	$(".nexts").click(function(){
		x++;
		if(x>1){
			x=1;
			return 
		}
		$(".banner").animate({left:-1000*x},2000,function(){
		})
	})
	$(".previous").click(function(){
		x--;
		if(x<=0){
			x=0;
			$(".banner").animate({left:1000*x},2000,function(){
				// console.log(x)
			})
			return
		}
	})

