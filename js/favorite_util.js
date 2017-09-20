/*
*供收藏调用
*/
var FavoriteUtil = {
	add:function(obj, xid, title, url, tag){
		if(passportUtil){
			var info=passportUtil.checkLogin();
			if(info===false){
				return false;
			}
		}

		FavoriteUtil.obj = obj;
		var favAddUrl = 'http://mili.umiwi.com/favorite/add/?xid='+xid+'&title='+title+'&url='+url+'&tag='+tag+'&callback=FavoriteUtil.callback';
		$.getScript(favAddUrl);
	},

	callback:function(data){
		alert(data.msg);
		//MsgFavUtil.tip((data.succ ? 'succ' : 'fail'), data.msg, FavoriteUtil.obj);
	},

	cancelFav:function(favid){
		var favCancelUrl = 'http://mili.umiwi.com/favorite/cancel/?favid='+favid+'&callback=FavoriteUtil.cancelcallback';
		$.getScript(favCancelUrl);
	},
	cancelcallback:function(data){
	
		$("#tipmsg").hide();
		if(!data.succ){
			MsgFavUtil.tip('fail', data.msg,  FavoriteUtil.obj);
		} else {
			
			$( FavoriteUtil.obj).parent().fadeOut();
		}
		
	},

	cancel:function(obj, favid){
		 FavoriteUtil.obj = obj;
		var tiphtml = '<div class="layerBox"  id="tipmsg" style="display:none;width:210px; top:100px;margin-left:0px;"> </div>';
		var tiphtml_inner = '<div class="layerBox_c"><a class="close" onclick="$(\'#tipmsg\').fadeOut();" href="javascript:void(0);"></a><div class="confirm"><p>确定要取消收藏么？</p><a href="javascript:void(0);" onclick="FavoriteUtil.cancelFav('+favid+');" class="confirm_button1">确定</a><a href="javascript:void(0);" onclick="$(\'#tipmsg\').fadeOut();" class="confirm_button2">取消</a> </div></div>';
		if(!$("#tipmsg")[0]){
			$('body').append(tiphtml);
		}
		$("#tipmsg").html(tiphtml_inner);

		var pos = $(obj).offset();
		
		$("#tipmsg").css({top:pos.top-5-$("#tipmsg").outerHeight(), left:pos.left-20, width:'210px'});
		$("#tipmsg").fadeIn();
	}
}



var MsgFavUtil = {
	codehtml:{
		'audit':'<div class="PopupBox_c"><span class="success"></span>',
		'succ':'<div class="PopupBox_c"><span class="success"></span>',
		'fail':'<div class="PopupBox_c"><span class="failure"></span>',
		'same':'<div class="PopupBox_c"><span class="success"></span>',
		'wait':'<div class="PopupBox_c"><img src="/static/css/mili/images/loading.gif" class="loading" />'
	},
	tip:function(code, msg, obj )
	{
		if(typeof code == 'undefined')return;
		if(typeof msg == 'undefined')
		{
			msg='';
		}
		if(code=='wait')
		{
			if(msg=='')msg='加载中...';
			
		}
		$('#PopupBox').html(this.codehtml[code]+msg+'</div>');

		if(obj)
		{
			var pos = $(obj).offset();
		
			$('#PopupBox').show().css({'left':(pos.left-20),'top':(pos.top-5-$('#PopupBox').outerHeight())});
			
		}else
		{
			var top = $(document).scrollTop()+parseInt(($(window).height()-$('#PopupBox').height())/2);
			var left = $(document).scrollLeft()+parseInt(($(window).width()-$('#PopupBox').width())/2);
			$('#PopupBox').show().css({'left':left,'top':top});
		}
		if(code=='succ'|| code=='fail' || code=='same' || code == 'audit')
		{

			if(typeof MsgHandle != 'undefined')
			{
				clearTimeout(MsgHandle);
			}
			MsgHandle = setTimeout(function(){$('#PopupBox').fadeOut(500);},1000);
		}

	}
};
