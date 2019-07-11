$(function(){
			//01.布局
			//02.设置间隔函数
			//03.获取spic节点
			//	改变ul 定位的left	
			var opicBox = document.getElementById('picBox')
			var oSpic = document.getElementsByClassName('sPic')
			var opicBtn = document.getElementsByClassName('picBtn')
			
//		alert("1");	
		slider()
		function slider(){
			inter();
			var iNow = 0;
			var timer;
			for(var i=0;i<oSpic.length;i++){
				bind(i);
			}
			function bind(index){
				opicBtn[index].onclick = function(){
					clearInterval(timer);
					iNow = index;
					console.log('点击索引值'+index);
					move(index);
					inter()
						
				}
			}
					
			//设置图片移动的函数
			function move(iNow){
			var nowleft = -iNow*1200;
			console.log(nowleft)
			opicBox.style.left = nowleft+'px';
			for(var i=0;i<opicBtn.length;i++){
				if(i==iNow){
					opicBtn[i].style.backgroundColor='orange';
				}else{
					opicBtn[i].style.backgroundColor='';
				}
				
			}
			}
			//自动轮播的定时器
			function inter(){
				timer = setInterval(function(){
				iNow++;
				if(iNow>oSpic.length-1){
					iNow=0;	
				}
				move(iNow)
				
			},2000)
			}
	
		}
	})
				
			
		
