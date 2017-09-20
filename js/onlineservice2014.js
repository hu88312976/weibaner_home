$(function(){
	
	var _userAgent = window.navigator.userAgent.toLowerCase();
	if(_userAgent.indexOf('android')<0 && _userAgent.indexOf('iphone')<0 &&  _userAgent.indexOf('ipad')<0 )
	{ 
	
	if($.cookie("onlineSP")==null||$.cookie("onlineSP")=="0"||$.cookie("onlineSP")=="")
		{
			$('.onlineService').show();
			$('.box_os').hide();		
		}
		else if($.cookie("onlineSP")=="1")
		{
			$('.onlineService').hide();
			$('.box_os').show();		
		}
	
	}
	else{
		$('.onlineService').hide();
		$('.box_os').hide();
		
	}
	
	$(".onlineService .ico_dcode").hover(function(){
		
		$(".dimensionalCode").stop().animate({width:"170px"},100);
		
		},function(){
			
		$(".dimensionalCode").delay(100).stop().animate({width:"0"},100);
			
	});
	
	$(".onlineService .ico_os").hover(function(){
		
		$(".olqqtel").stop().animate({width:"120px"},100);
		
		},function(){
			
		$(".olqqtel").stop().animate({width:"0"},100);
			
	});
	
	$(".olqqtel").hover(function(){
		
		$(this).stop().animate({width:"120px"},100);
		
		},function(){
			
		$(this).delay(100).stop().animate({width:"0"},100);
			
	});
		
	$('.onlineService .ico_os').click(function()
	{		
		$('.onlineService').hide();
		$('.box_os').show();
		$.cookie("onlineSP","0",{expires:1,path:"/",domain:"umiwi.com"});		
	});
	$('.os_x').click(function()
	{
		$('.box_os').hide();
		$('.onlineService').show();
		$.cookie("onlineSP","1",{expires:2100000000,path:"/",domain:"umiwi.com"});
	});
	$boxOsFun = function(){var st=$(document).scrollTop();if (!window.XMLHttpRequest) {$('.box_os').css('top',st+44);$('.onlineService').css('top',st+44);}};
	$(window).bind('scroll', $boxOsFun);
	$boxOsFun();
	
	var feedback_url ='http://www.umiwi.com/account/suggestion.php?action=save';
	
	$('.acbox .ico_pp').hover(function(){
		$(this).stop().animate({height:'52px'},'fast');
		},function(){
		$(this).stop().animate({height:'33px'},'fast');
		}
	);
	$('.acbox .ico_gt').hover(function(){
		$(this).stop().animate({height:'52px'},'fast');
		},function(){
		$(this).stop().animate({height:'33px'},'fast');
		}
	);
	
	$('.onlineService .ico_pp a').hover(function(){
		$(this).stop().animate({width:'85px'},'fast');
		},function(){
		$(this).stop().animate({width:'37px'},'fast');
		}
	);
	$('.onlineService .ico_gt a').hover(function(){
		$(this).stop().animate({width:'95px'},'fast');
		},function(){
		$(this).stop().animate({width:'37px'},'fast');
		}
	);
	
	$('.ico_gt').click(function(){
		$("html, body").animate({scrollTop:0}, 1);
	})
	
	
	//分辨率
	if ( $(window).width()<1200 || screen.width<1200) 
    { 
    	$('.hydp950,.w_950,.sdmain,.main').css('overflow','hidden');
		$('.top_bg').css({'overflow':'hidden','width':'950px','margin':'0 auto'});
		$('.db_bg2').addClass('db_bg2_s');
		$('.jstd_c .bg_l,.jstd_c .bg_r').css('display','none');
		$('#js_play .prev').css('left','0');
		$('#js_play .next').css('right','0');
		$('#videoplay .prev, #videoplay2 .prev').addClass('prev_s');
		$('#videoplay .next, #videoplay2 .next').addClass('next_s');
    }else{
    	$('.hydp950,.w_950,.sdmain,.main').removeAttr('style');
		$('.top_bg').removeAttr('style');
		$('.db_bg2').removeClass('db_bg2_s');
		$('.jstd_c .bg_l,.jstd_c .bg_r').removeAttr('style');
		$('#js_play .prev').removeAttr('style');
		$('#js_play .next').removeAttr('style');
		$('#videoplay .prev, #videoplay2 .prev').removeClass('prev_s');
		$('#videoplay .next, #videoplay2 .next').removeClass('next_s');
    }

});