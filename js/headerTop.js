$(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>100){
                $('#top_nav').addClass("t scroll navbar-fixed-top boxShadow");
            }else if($(window).scrollTop()==0){
            	 $("#top_nav").removeClass("boxShadow");
            	$(".bigBox").css("margin-top","100px");
            } else{
            	$("#top_nav").addClass("navbar-default");
            }
        $('#gotoTop').click(function(){
        	$(window).scrollTop(0) ;
        })
        });
    });

