$(function(){
	var timer;
	var num=0;
	
	$('.screen1').children('.title').removeClass('no');//文字动画效果
	
	//点击侧导航事件
	$('.side li').click(function(event){
		num=$(this).index();
		$('section').stop().animate({'top':-100*num+'%'},500)
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
		$(this).addClass('current').siblings('li').removeClass('current');
	})
	//滚动事件
	$(document).mousewheel(function(e,d){
//		alert(d);
//		向下滚动为-1,向上滚动为1
		clearTimeout(timer);
		timer = setTimeout(function(){
		num = num-d;
		if(num<0){num = 0}
		if(num>6){num = 6}
		$('section').stop().animate({'top':-100*num+'%'},500)
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
		$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
		},100)
		
	})
	//音乐按钮事件
	$('.music').click(function(){
		$(this).toggleClass('play');
		if($(this).hasClass('play')){
			$('audio').get(0).play()
		}else{
			$('audio').get(0).pause()
		}
	})
})