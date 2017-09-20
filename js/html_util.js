var htmlUtil = {
	inited:false,
	init:function(){

		if(!$('#popuphtml')[0])
		{
			var stylehtml = '<style>';
			stylehtml += '.f2-layer{ position:absolute; z-index:999999;}';
			stylehtml += '.f2-layer .f2-content{ background:#fff; border:1px solid #2B9617; border-top-width:5px; position:relative;}';
			stylehtml += '.f2-layer .f2-content .f2-close{background:url(http://i1.umivi.net/v/static/2014/diamond/images/diamond.png) no-repeat -51px -1144px; width:17px; height:17px; overflow:hidden; position:absolute; right:6px; top:6px; cursor:pointer;}';

			stylehtml += '.ly_main{ color:#333; text-align:left;}';
			stylehtml += '.ly_main h3{ font-size:14px;}';
			stylehtml += '.ly_main p{ margin-bottom:10px;}';
			stylehtml += '.ly_main .ly_action{ overflow:hidden; margin-top:20px; height:27px; line-height:27px;}';
			stylehtml += '.ly_main .ly_action .btn_ok{ background:url(http://i1.umivi.net/v/static/2013/study/images/public.gif) no-repeat 0 -65px; float:left; width:72px; height:27px; display:block; overflow:hidden; margin:0 12px 0 93px; _display:inline;}';
			stylehtml += '.ly_main .ly_action .btn_cancel{ color:#557917; float:left;}';
			stylehtml += '.deltip{ width:260px;}';
			stylehtml += '</style>';

			var pophtml = '';
			pophtml += '<div class="f2-layer" id="popuphtml" style="display:none">';
				pophtml += '<div class="f2-content">';
					pophtml += '<a class="f2-close" href="javascript:void(0)" onclick="htmlUtil.cancel()" title="关闭"></a>';
					pophtml += '<div class="ly_main" id="html_message">';
				 	pophtml += '</div>';
				pophtml += '</div>';
			pophtml += '</div>';
			pophtml = stylehtml + pophtml;
			$('body').append(pophtml);
		}
		this.inited=true;
		return this;
	},
	show:function(html, obj)
	{
		htmlUtil.init();
		$('#html_message').html(html);

		if(obj)
		{
			var pos = $(obj).offset();
			var top = pos.top-$('#popuphtml').outerHeight()+15;
			var left =  pos.left-200;
			$('#popuphtml').show().css({top:top, left:left});
		}else
		{
			var top = $(document).scrollTop()+parseInt(($(window).height()-$('#popuphtml').height())/2);
			var left = $(document).scrollLeft()+parseInt(($(window).width()-$('#popuphtml').width())/2);
			$('#popuphtml').show().css({top:top, left:left});
		}

		$(document).keydown(function(event){
			if(event.keyCode == 27){
				htmlUtil.cancel();
			}
		});
		return this;
	},
	
	cancel:function(){
		$('#popuphtml').remove();
		return this;
	}



};