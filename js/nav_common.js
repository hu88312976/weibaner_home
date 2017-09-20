function isUserLogined() {
	var username = $.cookie('username');
	if(username == null || $.trim(username) == '') {
		return false;
	}
	return true;
}

function login(callback)
{	if(typeof(callback) =="function")
	    window.login_success_callback = callback;
	parent.location.href='http://passport.youmi.cn/login/?go='+encodeURIComponent(parent.location.href);
}

function comment_login(callback)
{
	var info=passportUtil.checkLogin();
    if(info==false)
    {
          return false;
    }
}
function logout()
{
		window.location.href="http://passport.youmi.cn/login/logout/?t="+Math.random()+"&go="+encodeURIComponent(window.location.href);
}
function register()
{
	if (typeof(passportUtil)!='undefined')
	{
		parent.passportUtil.checkLogin();
	}
	else{
		var gotourl = encodeURIComponent('http://passport.youmi.cn/register/');
		window.open("http://v.youmi.cn/redirect/passport/?goto="+gotourl+'&go='+encodeURIComponent(parent.location.href));
	}
	
}
function getHost()
{
	if(window.location.host.slice(-11)=='v.umiwi.com' || window.location.host.slice(-10)=='v.youmi.cn')
	{
		return 'http://'+window.location.host;
	}else
	{
		return 'http://v.youmi.cn';
	}
}
function isVip(){
	var info = get_cookie_userinfo();
	var isVip = $.cookie('vip'+info['ID']);
	if(isVip == null){
		$.getScript(getHost()+'/vip/isVip/');
		return false;
	}
	if(isVip == 20 || isVip == 22 || isVip == 23|| isVip == 24 || isVip == 26 )
	{
		return true;
	} else {
		return false;
	}

}

function getVip(){
	var info = get_cookie_userinfo();
	var isVip = $.cookie('vip'+info['ID']);
	if(isVip == null){
		$.getScript(getHost()+'/vip/isVip/');
		return false;
	}

	if(isVip == 20 || isVip == 22 || isVip == 23|| isVip == 24 || isVip == 26 )
	{
		return isVip;
	} else {
		return 0;
	}

}
function isJys()
{
	if (getVip()>0)
	{
		var info = get_cookie_userinfo();
		var isJys= $.cookie('jys'+info['ID']);
		if (isJys)
		{
			return 1;
		}
	}
	return 0;
}

function get_cookie_userinfo()
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
	var i=0;
	for(i=0;i<a.length;i++)
	{
		b = a[i].split('=');
		info[b[0]]=decodeURI( b[1] );
	}

	return info;
}


function update_login_status()
{

	if (isUserLogined())
	{
		$('#login2,.login2').hide();
		if(isVip()) {
			if (isJys())
			{
				var un = '<a href="http://v.youmi.cn/home/?f=top_member"><img src="http://i1.umivi.net/v/static/membercenter/images/vjys.gif" alt="vipjys" width="18" height="18" />'+ subStr($.cookie('username'),14)+'</a>';
			}else{
				var un = '<a href="http://v.youmi.cn/home/?f=top_member"><img src="http://i1.umivi.net/v/static/membercenter/images/v'+getVip()+'.gif" alt="vip" width="18" height="18" />'+ subStr($.cookie('username'),14)+'</a>';
			}

		} else {
			var un = '<a href="http://v.youmi.cn/home/?f=top_nomember">'+ subStr($.cookie('username'),14)+'</a>';
		}

		/*
		var qqshowmsg = $.cookie('QQCBshowmsg');

		if (qqshowmsg )
		{
			var _un = qqshowmsg.split('|');
			var _uid = _un[0];
			var info = get_cookie_userinfo();
			var uid = info['ID'];
			if (uid ==_uid)
			{
				var un = '<a href= "/home/?f=top_nomember">'+ subStr(_un[1],14)+'&nbsp;，我的优米</a>';
			}
			var qqheadshow = $.cookie('QQCBheadshow');

			if (qqheadshow && !$('#qqheadshow')[0])
			{
				var _qqhead = qqheadshow.split('|');
				var qqheadhtml = '';
				var qqjifen = $.cookie('QQCBjifen')?$.cookie('QQCBjifen'):'';
				var _qqjifen = qqjifen.split('|');
				qqheadhtml += '<div id="qqheadshow" style=" color:#FAFAEE; height:30px; line-height:30px; border-bottom:1px solid #BA9D63; color:black; width:100%; text-align:center;">';
				qqheadhtml += '<span style=" display:inline-block;padding-left:20px;">';
				qqheadhtml += _qqhead[1].replace(/\+/g,'  ')+'</span><span style="margin-left:50px;">'+_un[1]+'</span>|<span style="margin-left:2px;"><a href="'+_qqjifen[1]+'" target="_blank">我的彩贝积分</a></span>';
				qqheadhtml +='</div>';
				$(qqheadhtml).insertBefore('#header');
			}
		}
		*/


		$('#loggedin2').show().find('.login_name').html(un);
		var denglu2 = $('#denglu2');
		if (typeof (denglu2[0]) != 'undefined')
		{
			$('#denglu1').hide();
			denglu2.load('/index/memberinfo/');
			denglu2.show();
		}else if(/lib.*/.test(window.location.href) && typeof $('#login') != 'undefined'){
			$('#login').replaceWith('<div class="login_info" id="login"><span>您好！'+$.cookie('username')+' 欢迎来到职场预备课！</span><span> <a href="/lib/fav"  target="_self" style="color:#9BCE33;font-weight:bold;margin-right:10px;">我的收藏</a></span><span><a href="/lib/watchlog"  target="_self"  style="color:#9BCE33;font-weight:bold;margin-right:10px;" >学习记录</a></span><span><a href="http://passport.youmi.cn/login/logout/?go='+encodeURIComponent('http://v.youmi.cn/lib/?nologin=1')+'" class="denglu" target="_self" style="color:#9BCE33;font-weight:bold;margin-right:10px;">退出</a></span></div>');
		}
	}
	else
	{
		$('#loggedin2').hide();
		$('#denglu2').hide();
		$('#icocheck').hide();
		$('#login2,.login2').show();
		$('#denglu1').show();
	}
}
var timeout         = 500;
var closetimer		= 0;
var psmenuitem      = 0;


$(function(){
	update_login_status();
	setInterval('update_login_status()',5000);
	if (isUserLogined())
	{
		setTimeout(function(){
			if($('#nt_carts')[0]){
				$.getJSON('/carts/getnum/?_t='+Math.random()+'&jsoncallback=?', function(data){
					if(data && data.r){
						$('#nt_carts').html('<a href="/carts/" target="_blank">购物车('+data.r+')</a>');
					}
				});
			}
		},2000);//购物车
		setTimeout(function(){
			if($('#nt_record')[0]){
				$.getJSON('/watchlog/list/?_t='+Math.random()+'&callback=?', function(data){
					if(data && data.r){
						$('#nt_record').html('<a href="/home/watchlog/" target="_blank">播放记录('+data.total+')</a>');
					}
				});
			}
		},2000);//播放记录
	}else //未登录点击浮出登录窗口
	{
		$(".topmenu .denglu").click(function(){
			$(".topmenu .headbox").slideToggle("slow");
			return false;
		});

		$("#header .denglu").click(function(){
			$("#header .headbox").slideToggle("slow");
			return false;
		});
		$("#login_password_text1,#login_password_text2").focus(function(){
			var _obj = $(this);
			_obj.hide();
			_obj.prev().show();
			_obj.prev().focus();
		});
		$('.txt_id,#login_password1,#login_password2').focus(function(){
			$(this).addClass('gray9');
			var txtValue = $(this).val();
			if(txtValue == this.defaultValue){
				$(this).val("");
			}
		});
		$(".txt_id").blur(function(){
			$(this).removeClass('gray9');
			if($(this).val()==''){
				$(this).val(this.defaultValue);
			}
		});
		$("#login_password1,#login_password2").blur(function(){
			$(this).removeClass('gray9');
			if($(this).val()==''){
				$(this).hide();
				$(this).next().show();
			}
		});
	}

	$('a').each(function(){
		var obj = $(this);
		if(/javascript/i.test(obj.attr('href')) || /selfwin/i.test(obj.attr('class'))) {
			obj.attr("target","_self");
		}
	});

	//搜索点击展开
	$("#header .srch_a").click(function(){
		$("#header .psrch").slideToggle();
		var txt_obj = $(this).next().find('.txt_srch');
		$(document).one("click",function() {
			var txt_value = txt_obj.val();
			if (txt_value == txt_obj[0].defaultValue)
			{
				$('#header .psrch').slideUp();
			}
		});

		return false;
	});
	$('#header .psrch').click(function(event) {
		event.stopPropagation();
	})
	//搜索框焦点文字

	$('.txt_srch').focus(function(){
		$(this).addClass('gray9');
		var txtValue = $(this).val();
		if(txtValue == this.defaultValue){
		    $(this).val("");
		}
	});
	$('.txt_srch').blur(function(){
		$(this).removeClass('gray9');
		if($(this).val()==''){
		    $(this).val(this.defaultValue);
		}
	});

	$('.ps_name').bind('mouseover', personmenu_open);
	$('.ps_name').bind('mouseout',  personmenu_timer);
	document.onclick = personmenu_close;
	
	$("[traceclick]").each(function(){//for click
		var obj = $(this);
		var click = parseInt(obj.attr('traceclick'));
		obj.click(function(){
			if (click>0)
			{
				$.getScript('http://v.youmi.cn/redirect/record/?click='+click)
			}
		});				
	});	
});
function oauthLogin(id)
{
	//以下为按钮点击事件的逻辑。注意这里要重新打开窗口
	//否则后面跳转到QQ登录，授权页面时会直接缩小当前浏览器的窗口，而不是打开新窗口
	if(id==1){var w=450;h=320;}
	if(id==2){var w=650;h=360;}
	if(id==3){var w=450;h=320;}
	if(id==4){var w=570;h=460;}

	var gotourl = encodeURIComponent("http://passport.youmi.cn/login/oauth/?to="+id+"&do=login");
	var A=window.open("http://v.youmi.cn/redirect/passport/?goto="+gotourl+'&go='+encodeURIComponent(window.location.href),"WinLogin","width="+w+",height="+h+",left="+parseInt((screen.availWidth -  w)/2-50)+",top="+parseInt((screen.availHeight - h)/2-50)+",menubar=0,scrollbars=0,resizable=1,status=0,titlebar=0,toolbar=0,location=0");

}

function navlogin(id)//兼容线上
{
	var username = $.trim($('#login_username'+id).val());
	var pw = $.trim($('#login_password'+id).val());
	var chkparam = true;
	if(!pw || !username) {
		var wrong_tip = '用户名和密码不能为空';
		$('#wrong_tip'+id).show().html(wrong_tip);
		chkparam = false;
	}
	if(!chkparam) {
		return '';
	}
	var password = $.md5(pw);
	var expire	= $('#login_expire'+id).val();
	var url = 'http://passport.youmi.cn/login/login/?username='+encodeURIComponent(username)+'&password='+password+'&expire='+expire+'&callback=navLoginCallback';
	$.getScript(url);

}
function navLoginCallback(data)
{
	if(data.code=='fail'){
		$('#wrong_tip1').show().html(data.msg);
		$('#wrong_tip2').show().html(data.msg);
		return '';

	} else {
		$(".topmenu .headbox").slideUp("slow");
		$("#header .headbox").slideUp("slow");
		var current_url = window.location.href;
		var current_path = window.location.pathname;
		if ( current_url.indexOf('html') ==-1 && current_url.indexOf('id=') ==-1 && current_path.indexOf('huodong')==-1 && current_path.indexOf('member')==-1)
		{
			update_login_status();
		}
		else window.location = current_url;
	}
}
function indexlogin(id) //0716
{
	var username = $.trim($('#login_username'+id).val());
	var pw = $.trim($('#login_password'+id).val());
	var chkparam = true;
	if(!pw || !username) {
		var wrong_tip = '用户名和密码不能为空';
		$('#wrong_tip'+id).show().html(wrong_tip);
		chkparam = false;
	}
	if(!chkparam) {
		return '';
	}
	var password = $.md5(pw);
	var expire	= $('#login_expire'+id).val();
	var url = 'http://passport.youmi.cn/login/login/?username='+encodeURIComponent(username)+'&password='+password+'&expire='+expire+'&callback=navLoginCallback';
	$.getScript(url);

}
function loginCallback(data)
{
	if(data.code=='fail'){
		$('#wrong_tip2').show().html(data.msg);
		return '';

	} else {
		$(".topmenu .headbox").slideUp("slow");
		$("#header .headbox").slideUp("slow");
		var current_url = window.location.href;
		var current_path = window.location.pathname;
		if ( current_url.indexOf('html') ==-1 && current_url.indexOf('id=') ==-1 && current_path.indexOf('huodong')==-1 && current_path.indexOf('member')==-1)
		{
			update_login_status();
		}
		else window.location = current_url;
	}
}
function initlogin(id)
{
	$('#wrong_tip'+id).hide().html('');
}
function personmenu_open()
{
	personmenu_canceltimer();
	personmenu_close();
	var obj = $(this);
	psmenuitem = obj.find('ul').css('display', 'block');
}

function personmenu_close()
{	if(psmenuitem) psmenuitem.css('display', 'none');}

function personmenu_timer()
{	closetimer = window.setTimeout(personmenu_close, 100);}

function personmenu_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;
	}
}

function subStr(str,len,dot)
{
    if(!str || !len) { return ""; }
    var a = 0;
    var i = 0;
    var temp = "";
    if (typeof dot == 'undefined') dot = '...';
    for (i=0;i<str.length;i++)
    {
        if (str.charCodeAt(i)>255)
        {
             a+=2;
        }
        else{
              a++;
        }
        if(a > len) { return temp+dot; }
        temp += str.charAt(i);
    }
    return str;
}