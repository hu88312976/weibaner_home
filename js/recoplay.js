Recoplay =
{
	getHost:function()
	{
		if(window.location.host.slice(-11)=='v.umiwi.com' || window.location.host.slice(-10)=='v.youmi.cn')
		{
			return 'http://'+window.location.host;
		}else
		{
			return 'http://v.youmi.cn';
		}
	},
	scrolled:false,
	crc32:'',
	scroll:function()
	{
		if(this.scrolled)
		{
			return;
		}
		this.scrolled = true;
		this.$recoIe = function(){
			var boxSt =$(document).scrollTop();
			var bosIeTop = $(window).height() - $('.recobox').height();
			//alert($('.recobox').height());
			if (!window.XMLHttpRequest){
				$("#recolayer").css("top",boxSt + bosIeTop - 24);
			}
		};
		$(window).bind("scroll", this.$recoIe);
	},
	notice:function(obj)
	{
		if(!obj)
		{
			$.getScript(Recoplay.getHost()+'/api/recoplay');
			return;
		}
		if($('#recolayer').length<1)
		{
			$('body').append(obj.text);
		}else
		{
			$('#recolayer').replaceWith(obj.text);
		}
		if($('.uinfo')){
			$('.recolayer .recobox').css('margin-top','22px');
		}
		if($('.recodiv')){
			$('.recolayer .recobox').css('margin-left','7px');
		}

		setTimeout(function(){
			if (!($.browser.msie && ($.browser.version == "6.0") && !$.support.style)){
				$('#recolayer').slideDown('slow');
			}else{
				$('#recolayer').show();
				Recoplay.$recoIe();
			}
		},500)
		$('#lyclose').click(function(){
			Recoplay.close();
			try{
				clearTimeout(Recoplay.handle)
				$.getScript(Recoplay.getHost()+'/api/recoplay');

			}catch(e){}
		})
		this.scroll();

		Recoplay.handle = setTimeout(function(){
			Recoplay.close();
			$.getScript(Recoplay.getHost()+'/api/recoplay');
		},30000);


	},
	play:function (obj){
		if(!obj)
		{
			return;
		}
		this.crc32 = obj.version;
		if($('#recolayer').length<1)
		{
			$('body').append(obj.text);
		}else
		{
			$('#recolayer').replaceWith(obj.text);
		}
		if($('.uinfo')){
			$('.recolayer .recobox').css('margin-top','22px');
		}
		if($('.recodiv')){
			$('.recolayer .recobox').css('margin-left','7px');
		}

		setTimeout(function(){
			if (!($.browser.msie && ($.browser.version == "6.0") && !$.support.style)){
				$('#recolayer').slideDown('slow');


			}else{
				$('#recolayer').show();
				Recoplay.$recoIe();
			}
		},2000)

		$('#lyclose').click(function(){
			Recoplay.close(Recoplay.crc32);
		})


		this.scroll();
	},
	setCookie:function(name, value, expire, path, domain, secure)
	{
		var exp  = new Date();
		exp.setTime(exp.getTime() + expire*1000);
		document.cookie = name + "=" + escape(value) +
			("; expires=" + exp.toGMTString() ) +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	},
	close:function(cookie){
			if(cookie)
			{
				Recoplay.setCookie('recoplay',cookie,86400,'/','youmi.cn');
			}
			if (!($.browser.msie && ($.browser.version == "6.0") && !$.support.style)){
				$('#recolayer').slideUp('slow');
			}else{
				$('#recolayer').hide();
			}
	}
}

// var _userAgent = window.navigator.userAgent.toLowerCase()
// if(_userAgent.indexOf('android')<0 && _userAgent.indexOf('iphone')<0 &&  _userAgent.indexOf('ipad')<0 && window.location.host.slice(-11)!='m.umiwi.com' && window.location.host.slice(-10)!='m.youmi.cn' )
// {
	$('head').append('<link rel="stylesheet" href="http://i1.umivi.net/v/static/2013/css/recolayer.css" />');

	if(window.location.host.slice(-10)=='v.youmi.cn')
	{
		$.getScript(Recoplay.getHost()+'/popup/getAvail');
	}else
	{
		var page_m = window.location.href.match(/(\&|\?)ref=([^&#]*)/);

		$.getScript(Recoplay.getHost()+'/popup/getAvail'+(page_m?('?ref='+page_m[2]):''));
	}
// }