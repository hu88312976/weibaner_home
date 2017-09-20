var noticeUtil = {
	get:function()
	{
		if(typeof($.cookie) == 'undefined'){
			return '';
		}

		var notices = $.cookie('notice');

		if(notices){//cookie中存在消息则不请求服务器
			var a = notices.split('-');
			var aa = '';
			var barray = [];
			var result = [];
			for(key in a){
				aa = a[key];
				if(aa && typeof(aa) !='function'){
					barray = aa.split('_');
					result[barray[0]] = barray[1];
				}
			}
			var currurl = window.location.href;
			if($('#nt_total')[0] || currurl.indexOf('v.umiwi.com')>1){
				noticeUtil.show(result);
			} else {
				noticeUtil.topshow(result);
			}
		}
	},
	show:function(data){
		var html = ' <a class="btn_close" href="javascript:void(0);" onclick="noticeUtil.hide();return false;"title="关闭"></a> <ul>';
		var noticestr = '';
		
		
		if(data && data['letter']>0)
		{
			noticestr += '<li>'+data['letter']+'条新私信，<a href="http://v.umiwi.com/home/mymessage/"  target="_self">查看私信</a></li>';
		}

		if(data && data['ups']>0)
		{
			noticestr += '<li>'+data['ups']+'个新回复，<a href="http://v.umiwi.com/home/mydiscuss/?ask=me&home=1" target="_self">查看</a></li>';
		}

		if(noticestr)
		{
			html += noticestr;
			html += '</ul>';
			$('#notice_tipbox2').html(html).show();
		}
		else
		{
			$('#notice_tipbox2').hide();
		}
		
		//公告提示
		if(data &&  data['annou']>0)
		{
			$('.ps_notice .number .number_c').html('<a href="http://v.youmi.cn/home/mynotice/?click=147"  target="_self" >'+data['annou']+'</a>');
			$('.number').show();
		
		}
		else{
			$('.number').hide();
		}
		
			
	},

	topshow:function(data){
		return false;
		var total = 0;
		var html = ' <a class="btn_close" href="javascript:void(0);return false;" onclick="noticeUtil.hide()"title="关闭"></a> <ul>';
		var noticestr = '';
		
		if(data['letter'])
		{
			noticestr += '<li>'+data['letter']+'条新私信，<a href="http://v.youmi.cn/home/mymessage/"  target="_self">查看私信</a></li>';
		}

		if(data && data['ups']>0)
		{
			noticestr += '<li>'+data['ups']+'个新回复，<a href="http://v.youmi.cn/home/mydiscuss/?at=1"  target="_self">查看</a></li>';
		}

		if(noticestr)
		{
			html += noticestr;
			html += '</ul>';
			$('#notice_tipbox').html(html).show();
		}
		else
		{
			$('#notice_tipbox').hide();
		}
		
		
	},

	setcookie:function(data) {
		var cookiestr = data;
		var e = new Date();
		e.setTime(e.getTime()+3000000);
		var path = '/';
		var domain = '.'+noticeUtil.getdomain();
		document.cookie = "notice" + "=" + cookiestr +  "; expires=" + e.toGMTString() + ";" + ((path) ? "; path=" + path : "") +  ((domain) ? "; domain=" + domain : "");
	
	
	},
	getdomain:function() {
		var _domain = document.domain;
		var domain = 'youmi.cn';
		if (_domain.indexOf('umiwi.com')!='-1')
		{
			domain = 'umiwi.com';
		}
		return domain;
	},

	hide:function() {
		window.clearInterval(noticeUtil.Interval);
		this.notice = ['letter'];
		$('#notice_tipbox2').hide();
		var domain = noticeUtil.getdomain();
		$.getScript('http://mili.'+domain+'/notice/clear/?type=script&notice=letter,ups', function(){});
	}
	
};


var noticeTip = {
	init:function(){
	   var boxS=$('.header_t').offset();
	   var boxH=$('.header_t').css("height");
	   noticeTip.boxTop=boxS.top+parseInt(boxH);
	   $('.info_box').css({"top":noticeTip.boxTop,"position":"fixed"});
	   if (!window.XMLHttpRequest) {
		 $('.info_box').css("position","absolute");
		}
	  noticeTip.scroll();
	  $(window).scroll(function(){noticeTip.scroll();});
	},
	scroll:function(){
	   var winh = $(window).height();
	   var scH=$(document).scrollTop();
	   if(scH>noticeTip.boxTop){
		   var iBox=0;
		   $('.info_box').css("top",iBox);
		   if (!window.XMLHttpRequest) {
					 $('.info_box').css("top",scH);
					 }
		   }
	   else{
		   var iBox=noticeTip.boxTop-$(document).scrollTop()+"px";
		   $('.info_box').css("top",iBox);
		   if (!window.XMLHttpRequest) {
					 $('.info_box').css("top",noticeTip.boxTop);
			}
		}
	}
}