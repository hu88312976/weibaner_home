var LoginUtil = {
	login:function()
	{

		var url =  'http://passport.youmi.cn/login/?go='+encodeURI( window.location.href );
		window.location.href=url;
	},
	logout:function()
	{
		var url =  'http://passport.youmi.cn/login/logout/?go='+encodeURI( window.location.href );
		window.location.href=url;
	},
	getCookieUserinfo:function()
	{
		var U = $.cookie('U');
		if(!U)
		{
			return false;
		}
		var a = U.split('&');
		if(a.length<2)
		{
			return false;
		}
		var info = {};
		var b;
		for(i=0;i<a.length;i++)
		{
			b = a[i].split('=');
			info[b[0]]=decodeURI( b[1] );
		}
		return info;
	},
	autoCheck:function()
	{
		var info = this.getCookieUserinfo();
		if(info)
		{
			$('#bannerlogin_username').html(info['UN']);
			$('#bannerlogin_username').attr({'href':'/'+info['ID']});
			$('#bannerlogin_unlogged').hide();
			$('#bannerlogin_logged').show();
			$('.notLogged').hide();
		}else
		{
			$('#bannerlogin_logged').hide();
			$('#bannerlogin_unlogged').show();
			$('#bannerlogin_username').html('');
			$('.notLogged').show();
		}
	}
};

var OrderUtil = {
	createOrder:function(title, formid)
	{
		passportUtil.setCallback(function(){
		
			if(typeof(initPage) !='undefined')
			{
				var curl = window.location.href;
				if(curl.indexOf('/vip/')>0)
				{
					$.getScript('http://v.youmi.cn/vip/initalbum/?id=1407&_t='+Math.random());
				}
				else
				{
					$.getScript('http://v.youmi.cn/album/initPage/?_t='+Math.random());
				}
				
				
			}
			OrderUtil.createOrder(title, formid);
		
		});
		var info=passportUtil.checkLogin();
		if(info===false)
		{
			return false;
		}else{
			if(!formid){
				formid = 'orderform'; 
			}

			popupUtil.init('orderiframe');
			if(!title){
				title = '购买专辑';
			}

			popupUtil.show(title);

			$('#'+formid).submit()
			//setTimeout(function(){},500);
		}
	},
	createVip:function(title, product_id, buyref)
	{
		OrderUtil.buyref = buyref;
		passportUtil.setCallback(function(){
			if(typeof(initPage) !='undefined')
			{
				var curl = window.location.href;
				if(curl.indexOf('/vip/')>0)
				{
					$.getScript('http://v.youmi.cn/vip/initalbum/?id=1407&_t='+Math.random());
				}
				else
				{
					$.getScript('http://v.youmi.cn/album/initPage/?_t='+Math.random());
				}
				
				
			}
			OrderUtil.createVip(title, product_id, OrderUtil.buyref);
			
			});
		var info=passportUtil.checkLogin();
		if(info===false)
		{
			return false;
		}
		else
		{
			var html = '';
			if(!$('#viporderform')[0])
			{
				$('body').append('<form id="viporderform" method="get" action="/orders/showvip/" target="orderiframe" style=" display: inline;"><input name="id"   type="hidden" value="" ><input name="buyref"  type="hidden" value="" > </form>');
			}

			popupUtil.init('orderiframe');

			if(!title){
				title = '购买会员';
			}

			popupUtil.show(title);
			if(buyref)
			{
				buyref = buyref.replace('#buyvip21', '').replace('#buyvip22', '').replace('#buyvip23', '' ).replace('#buyvip26', '' );
			}
			$('#viporderform input[name=id]').val(product_id);
			$('#viporderform input[name=buyref]').val(buyref);
			
			$('#viporderform').submit();
		}
	},
	createAudio:function(title, product_id, buyref)
	{
		
			OrderUtil.buyref = buyref;
			passportUtil.setCallback(function(){
			 
				OrderUtil.createSection(title, product_id, OrderUtil.buyref);
			
			});

			var info=passportUtil.checkLogin();
			if(info===false)
			{
				return false;
			}
			else
			{
				var html = '';
				if(!$('#albumorderform')[0])
				{
					$('body').append('<form id="albumorderform" method="get" action="/orders/buyaudio/" target="orderiframe" style=" display: inline;"><input name="id"   type="hidden" value="" ><input name="buyref"  type="hidden" value="" > </form>');
				}

				popupUtil.init('orderiframe');

				if(!title){
					title = '购买音频专辑';
				}

				popupUtil.show(title);
				 
				$('#albumorderform input[name=id]').val(product_id);
				$('#albumorderform input[name=buyref]').val(buyref);
				
				$('#albumorderform').submit();
			}
	},

	createColumn:function(title, product_id, buyref)
	{
		
			OrderUtil.buyref = buyref;
			passportUtil.setCallback(function(){
			 
				OrderUtil.createSection(title, product_id, OrderUtil.buyref);
			
			});

			var info=passportUtil.checkLogin();
			if(info===false)
			{
				return false;
			}
			else
			{
				var html = '';
				if(!$('#columnorderform')[0])
				{
					$('body').append('<form id="columnorderform" method="get" action="/orders/buycolumn/" target="orderiframe" style=" display: inline;"><input name="id"   type="hidden" value="" ><input name="buyref"  type="hidden" value="" > </form>');
				}

				popupUtil.init('orderiframe');

				if(!title){
					title = '购买行家专栏';
				}

				popupUtil.show(title);
				 
				$('#columnorderform input[name=id]').val(product_id);
				$('#columnorderform input[name=buyref]').val(buyref);
				
				$('#columnorderform').submit();
			}
	},
	//音频专题
	createAudioTopic:function(title, product_id, buyref)
	{
		
			OrderUtil.buyref = buyref;
			passportUtil.setCallback(function(){
			 
				OrderUtil.createSection(title, product_id, OrderUtil.buyref);
			
			});

			var info=passportUtil.checkLogin();
			if(info===false)
			{
				return false;
			}
			else
			{
				var html = '';
				if(!$('#audiotopicorderform')[0])
				{
					$('body').append('<form id="audiotopicorderform" method="get" action="/orders/buyaudiotopic/" target="orderiframe" style=" display: inline;"><input name="id"   type="hidden" value="" ><input name="buyref"  type="hidden" value="" > </form>');
				}

				popupUtil.init('orderiframe');

				if(!title){
					title = '购买音频专题';
				}

				popupUtil.show(title);
				 
				$('#audiotopicorderform input[name=id]').val(product_id);
				$('#audiotopicorderform input[name=buyref]').val(buyref);
				
				$('#audiotopicorderform').submit();
			}
	},

	createSection:function(title, product_id, buyref)
	{
		
			OrderUtil.buyref = buyref;
			passportUtil.setCallback(function(){
			 
				OrderUtil.createSection(title, product_id, OrderUtil.buyref);
			
			});

			var info=passportUtil.checkLogin();
			if(info===false)
			{
				return false;
			}
			else
			{
				var html = '';
				if(!$('#sectionorderform')[0])
				{
					$('body').append('<form id="sectionorderform" method="get" action="/orders/buysection/" target="orderiframe" style=" display: inline;"><input name="id"   type="hidden" value="" ><input name="buyref"  type="hidden" value="" > </form>');
				}

				popupUtil.init('orderiframe');

				if(!title){
					title = '购买网商专题';
				}

				popupUtil.show(title);
				 
				$('#sectionorderform input[name=id]').val(product_id);
				$('#sectionorderform input[name=buyref]').val(buyref);
				
				$('#sectionorderform').submit();
			}
	},

	createFinance:function(title, product_id, price, buyref)
	{
			OrderUtil.buyref = buyref;
			
			passportUtil.setCallback(function(){
				OrderUtil.createFinance(title, product_id, price, OrderUtil.buyref);
			
			});

			var info=passportUtil.checkLogin();
			if(info===false)
			{
				return false;
			}
			else
			{
				var html = '';
				if(!$('#financeorderform')[0])
				{
					$('body').append('<form id="financeorderform" method="get" action="/orders/buyfinance/" target="orderiframe" style=" display: inline;"><input name="id" type="hidden" value="" ><input name="type" type="hidden" value="" ><input name="price" type="hidden" value="" ><input name="buyref" type="hidden" value="" > </form>');
				}

				popupUtil.init('orderiframe');

				if(!title){
					title = '众筹';
				}

				popupUtil.show(title);
				 
				$('#financeorderform input[name=id]').val(product_id);
				$('#financeorderform input[name=type]').val(15);
				$('#financeorderform input[name=price]').val(price);
				$('#financeorderform input[name=buyref]').val(buyref);
				$('#financeorderform').submit();
			}
	},
	buy:function(title, orderid)
	{
		if(!title)
		{
			title = '购买会员';
		}

		popupUtil.init('orderiframe');
		popupUtil.show(title);
		setTimeout(function(){$("#orderiframe").attr('src','/payment/confirm/?orderid='+orderid);},400);
	
	},
	buysucc:function(title, src)
	{
		popupUtil.init('paymentorderiframe');
		popupUtil.show(title);
		setTimeout(function(){
			$('#paymentorderiframe').attr('src',src);
			popupUtil.resize({height:280,width:560});
		},600);
	
	},
	buyfail:function(title, src )
	{
		popupUtil.init('paymentorderiframe');
		popupUtil.show(title);
		setTimeout(function(){
			$('#paymentorderiframe').attr('src',src);
			popupUtil.resize({height:280,width:560});
		},600);
		setTimeout(function(){
			window.location.href='/';
		},3000);
	
	}
};



var xlisrightUtil = {
	createOrder:function()
	{
		var info=passportUtil.checkLogin();
		if(info===false)
		{
			return false;
		}else{
			popupUtil.init('xlisright');
			popupUtil.show('购买成功');
			$('#xlisrightform').submit()
			//setTimeout(function(){},500);
		}
	}
};



var OperateUtil = {

	createOperate:function()
	{
		$('#operatefloat').show();
		$('#operateform').submit();
	}
};

var commentUtil = {
	createcomment:function()
	{
		var info=passportUtil.checkLogin();
		if(info===false)
		{
			return false;
		}else{
			popupUtil.init('commentiframe');
			popupUtil.show('评论该专辑');
			setTimeout(function(){$('#commentiframeform').submit()},200);
		}
	},
	boughtba:function () 
	{
		var info=passportUtil.checkLogin();
		if(info===false)
		{
			return false;
		}else{
			MsgUtil.show('亲，购买后才可以评论额！');
		}
	}
};

function isUserLogined() {
	var username = $.cookie('username');
	if(username == null || $.trim(username) == '') {
		return false;
	}
	return true;
}
function update_login_status()
{
	if (isUserLogined())
	{
		$('#login').hide();
		$('#login2').hide();
		var un = '<a href= "http://mili.umiwi.com/home/">'+$.cookie('username')+'</a>';
		//un = zhSubstr(un,14);
		$('#loggedin').show().find('tt').html(un);
		$('#loggedin2').show().find('tt').html(un);
	}
	else
	{
		$('#loggedin').hide();
		$('#loggedin2').hide();
		$('#login').show();
		$('#login2').show();
	}
}
function login(callback)
{	if(typeof(callback) =="function")
	    window.login_success_callback = callback;

	window.location.href='http://passport.youmi.cn/login/?go='+encodeURI(window.location.href);
}
function logout()
{
	

		//update_login_status();

		window.location.href="http://passport.youmi.cn/login/logout/?t="+Math.random()+"&go="+encodeURI(window.location.href);
}
function register()
{
	update_login_status();
		window.location.href="http://passport.youmi.cn/register/?go="+encodeURI(window.location.href);
}