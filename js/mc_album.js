$(function(){
	
	//0822笔记展开
	$(".dl_biji > dd").each(function(){
		var m= $(this).find(".bjpop").height();
		var content=$(this).find(".bjpop > em").html();
		if(content.length>40){
			$(this).find(".bjpop > em").html(content.substring(0, 40)+'...' );
			$(this).find(".bjpop").css({"height":"44px","overflow":"hidden","position":"relative"});
			$(this).hover(function(){
				$(this).parent().css("z-index","99");
				$(this).css("z-index","999");
				$(this).addClass('active');
				$(this).find(".bjpop").stop().animate({height:m+"px"},300);
				$(this).find(".bjpop > em").html(content);
				if(content.length >= 40 && content.length < 558)
				{
				$(this).find(".bjpop > a").hide();
				}
			},function(){
			   $(this).removeClass('active');
			   $(this).find(".bjpop").stop().animate({height:'44px'},300);
			   $(this).css("z-index","0");
			   $(this).parent().css("z-index","0");
			  // $(this).find(".bjpop > em").html(content);
			   $(this).find(".bjpop > em").html(content.substring(0, 40)+'...' );
				if(content.length >= 40 && content.length < 558)
				{
				$(this).find(".bjpop > a").show();
				}
			});
		}else{
			$(this).find(".bjpop").css("height","auto");
			$(this).hover(function(){
				$(this).addClass('active');
			},function(){
				$(this).removeClass('active');
			});
		}
	});


	//分享滑动部分
	$(".dl_biji").find(".bj_share").hover(function() {
		$(this).find('.bdshare_t').stop().animate({right:-15},"slow");
	}, function(){
		$(this).find('.bdshare_t').stop().animate({right:-170},"slow");
	});
	$(".scfx").find(".bj_share").hover(function() {
		$(this).stop().animate({width:190},"slow");
	}, function(){
		$(this).stop().animate({width:44},"slow");
	});

});