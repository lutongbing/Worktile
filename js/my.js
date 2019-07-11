$(function(){
	var timer;//设置循环操作
	var num=0;//引用元素的下标
	$('.screen1').children('.title').removeClass('no');//文字动画效果
	
	//点击侧导航事件
	$('.side li').click(function(event){
		num = $(this).index();
		$('section').stop().animate({'top':-100*num+'%'},100);
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
		$(this).addClass('current').siblings('li').removeClass('current');
	});

	//滚动事件
	$(document).mousewheel(function(e,d){
		//alert(d)
		//向下滚动时:d=-1  向上滚动时：d=1
		//setInterval(function(){},500)
		//setTimeout(function(){},500)一次性定时器，隔500毫秒执行且只执行一次函数内容
		clearTimeout(timer);
		timer= setTimeout(function(){
			num=num-d;
			if(num<0){num = 0}
			if(num>6){num = 6}
			$('section').stop().animate({'top':-100*num+'%'},500);
			$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
			$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
			},100)
	})
	
	//音乐按钮事件
	$('.music').click(function(event){
		$(this).toggleClass('play');
		if($(this).hasClass('play')){
			$('audio').get(0).play()
		}else{
			$('audio').get(0).pause()
		}
	})
})