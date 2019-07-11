$(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>100){
                $('#top_nav').addClass("t navbar-fixed-top boxShadow o1");
                console.log("scroll")
            }else if($(window).scrollTop()==0){
            	 $("#top_nav").removeClass("boxShadow o1");
            	 $('#top_nav').addClass("o2");
          	$(".scheme_banner").css("paddingTop","80px");
            	
            } else{
            	$("#top_nav").addClass("o1");
            }
        $('#gotoTop').click(function(){
        	$(window).scrollTop(0) ;
        })
        });
    });

