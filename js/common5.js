
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
function getVhost()
{
	if(window.location.host.indexOf('umiwi.com')=='-1')
	{
		return 'http://v.youmi.cn/';
	}else
	{
		return 'http://v.umiwi.com/';
	}
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
	parent.location.href="http://passport.youmi.cn/login/logout/?t="+Math.random()+"&go="+encodeURI(window.location.href);
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

function getVip(){
	var info = get_cookie_userinfo();
	var isVip = $.cookie('vip'+info['ID']);
	if(isVip == null){
		$.getScript(getVhost()+'vip/isVip/');
		return false;
	}
	
	if(isVip == 20 || isVip == 22 || isVip == 23 || isVip == 24)
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
	for(var i=0;i<a.length;i++)
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
		$('#login,.login2,.headbox').hide();
		$('#login2').hide();
		if(getVip()) {
			if (isJys())
			{
				var un = '<a href= "'+getVhost()+'home/"><img src="http://i1.umivi.net/v/static/membercenter/images/vjys.gif" alt="vip" width="18" height="18" />'+ subStr($.cookie('username'),14)+'</a>';
			}else{
				var un = '<a href= "'+getVhost()+'home/"><img src="http://i1.umivi.net/v/static/membercenter/images/v'+getVip()+'.gif" alt="vip" width="18" height="18" />'+ subStr($.cookie('username'),14)+'</a>';
			}

		} else {
			var un = '<a href= "'+getVhost()+'home/">'+ subStr($.cookie('username'),14)+'</a>';
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
				var un = '<a href= "http://v.umiwi.com/home/?f=top_nomember">'+ subStr(_un[1],14)+'&nbsp;，我的优米</a>';
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
		$('#loggedin').show().find('.login_name').html(un);
		$('#loggedin2').show().find('.login_name').html(un);
		if (getVip())
		{
			$('#jrym_add').hide();
			$('#jrym_go').show();
		}
		else
		{
			$('#jrym_add').show();
			$('#jrym_go').hide();
		}
	}
	else
	{
		$('#loggedin').hide();
		$('#loggedin2').hide();
		$('.icocheck').hide();
		$('#login,.login2').show();
		$('#login2').show();
		
		$('#jrym_add').show();
		$('#jrym_go').hide();
	}
}
var timeout         = 500;
var closetimer		= 0;
var psmenuitem      = 0;

$(function(){
	update_login_status();	
	setInterval('update_login_status()',5000);
	$.cookie("jiathis_rdc","");
	if (isUserLogined())
	{
		setTimeout(function(){
			if($('#nt_carts')[0] || $('#nt_carts2')[0]){
				$.getJSON(getVhost()+'carts/getnum/?_t='+Math.random()+'&jsoncallback=?', function(data){
					if(data && data.r){
						$('#nt_carts,#nt_carts2').html('<a href="'+getVhost()+'carts/" target="_blank">购物车('+data.r+')</a>');
					}
				});
			}
		},2000);//购物车
		setTimeout(function(){
			if($('#nt_record')[0] || $('#nt_record2')[0]){
				$.getJSON(getVhost()+'watchlog/list/?_t='+Math.random()+'&callback=?', function(data){
					if(data && data.r){
						$('#nt_record,#nt_record2').html('<a href="'+getVhost()+'home/watchlog/" target="_blank">播放记录('+data.total+')</a>');
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
	//搜索点击展开
	var psrch_objs = $('div .psrch');//所有搜索div
	var txt_objs = psrch_objs.find('.txt_srch');//所有搜索div输入框
	$("#header .srch_a,.topmenu .srch_a ").click(function(){
		var _psrch_obj = $(this).next();//当前搜索框
		psrch_objs.slideToggle();
		var txt_obj = _psrch_obj.find('.txt_srch');
		var txt_value = txt_obj.val();
		$(document).one("click",function() {
			
			if (txt_value == txt_obj[0].defaultValue)
			{
				psrch_objs.slideUp();
			}
		});
		
		return false;
	});
	psrch_objs.click(function(event) {
		event.stopPropagation();
	})
	//搜索框焦点文字
	
	txt_objs.focus(function(){ 
		$(this).addClass('gray9');
		var txtValue = $(this).val(); 
		if(txtValue == this.defaultValue){ 
		    $(this).val(""); 
		}

	}); 	 
	txt_objs.blur(function(){ 
		$(this).removeClass('gray9'); 
		if($(this).val()==''){
		    $(this).val(this.defaultValue);  
		} 
	});
	
	$('a').each(function(){
		var obj = $(this);
		if(/javascript/i.test(obj.attr('href')) || /selfwin/i.test(obj.attr('class'))) {
			obj.attr("target","_self");
		}
	});
	$('.ps_name').bind('mouseover', personmenu_open);
	$('.ps_name').bind('mouseout',  personmenu_timer);
	document.onclick = personmenu_close;
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
	var A=window.open(getVhost()+"redirect/passport/?goto="+gotourl+'&go='+encodeURIComponent(window.location.href),"WinLogin","width="+w+",height="+h+",left="+parseInt((screen.availWidth -  w)/2-50)+",top="+parseInt((screen.availHeight - h)/2-50)+",menubar=0,scrollbars=0,resizable=1,status=0,titlebar=0,toolbar=0,location=0");
}

function indexlogin(id)
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
	var url = 'http://passport.youmi.cn/login/login/?username='+encodeURIComponent(username)+'&password='+password+'&expire='+expire+'&callback=loginCallback';
	$.getScript(url);

}
function loginCallback(data)
{
	if(data.code=='fail'){
		$('#wrong_tip1').show().html(data.msg);
		$('#wrong_tip2').show().html(data.msg);
		return '';

	} else {
		$(".topmenu .headbox").slideUp("slow");
		$("#header .headbox").slideUp("slow");
		if (getVip())
		{
			$('#jrym_add').hide();
			$('#jrym_go').show();
		}
		//update_login_status();
		window.location.reload();
		
		
	}
}
function initlogin()
{
	$('#wrong_tip1').hide().html('');
	$('#wrong_tip2').hide().html('');
}
function personmenu_open()
{	
	personmenu_canceltimer();
	personmenu_close();
	psmenuitem = $(this).find('.ps_list').css('display', 'block');
}

function personmenu_close()
{	if(psmenuitem) psmenuitem.css('display', 'none');}

function personmenu_timer()
{	closetimer = window.setTimeout(personmenu_close, timeout);}

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
    for (var i=0;i<str.length;i++)
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
function zhSubstr( str, len) {
    var reg = /[\u4e00-\u9fa5]/g,    //专业匹配中文
        slice = str.substring(0,len),
        realen = len - ( ~~( slice.match(reg) && slice.match(reg).length ) );
        return slice.substring(0, realen ? realen : 1);
}

jQuery.fn.makePager = function(vars)
{
	var self = $(this);
	self.settings = jQuery.extend(
	{
		url: parent.location.href.toString(),
		total:1,
		current:1,
		container:'',
		onPage:null,
		style:'default',
		page_span:3,
		slideup:true
	},vars);

	var createLink = function(page)
	{
	    var tu = self.settings.styles.links.replace(/#link#/,self.settings.url+self.settings.mark+"page="+page);
	    tu = tu.replace(/#num#/,page);
	    return tu;
	};
	var filtervar = function(url) {
		return url.replace(/page=\d+/g,"");		
	};
	var getCurrentPage = function(url) {
		var r = /page=(\d+)/g;
		if(r.test(url)) {
			return RegExp.$1;
		}
		return 1;
	};
	
	
	self.settings.current = getCurrentPage(self.settings.url);
	self.settings.url = filtervar(self.settings.url);
	self.settings.mark = (self.settings.url.indexOf('?') == -1)?'?':'&';
	if(self.settings.style == 'default') {
		self.settings.styles = {
		pre_page_on: '<a href="#link#" class="pager"><img width="54" height="21" align="absmiddle" onmouseover="src=\'/images/subpage_move_up.gif\'"  onmouseout="src=\'/images/subpage_out_up.gif\'" src="/images/subpage_out_up.gif" /></a>',
		pre_page_off: '',
		dots: '<span>...</span>',
		current_link: '<span class="num_over">#num#</span>',
		links:"<a align='absmiddle' class='num_out' href='#link#' onmouseover=\"className='num_over'\" onmouseout=\"className='num_out'\">#num#</a>",
		next_page_on:'<a href="#link#" class="pager"><img width="54" height="21" align="absmiddle" onmouseover="src=\'/images/subpage_move_next.gif\'"  onmouseout="src=\'/images/subpage_out_next.gif\'" src="/images/subpage_out_next.gif" /></a>',
		next_page_off:''
	    };
	} else if(self.settings.style == 'v2012') {
		self.settings.styles = 
		{
			pre_page_on :  '',
			pre_page_off:'',
			dots :  '<em>...</em>',
			current_link :  '<span class="on">#num#</span>',
			links : '<a class="pager-num pgnum" href="#link#">#num#</a>',
			next_page_on : '',
			next_page_off : ''
	    };
	}else if(self.settings.style == 'v4') {
		self.settings.styles = 
		{
			pre_page_on :  '<a href="#link#" class="pre">&nbsp;</a>',
			pre_page_off:'',
			dots :  '<span class="pager-dots">...</span>',
			current_link :  '<em>#num#</em>',
			links : '<a class="pager-num pgnum" href="#link#">#num#</a>',
			next_page_on : '<a href="#link#" class="nxt">&nbsp;</a>',
			next_page_off : ''
	    };
	}else if(self.settings.style == 'v5') {
		self.settings.styles = 
		{
			pre_page_on :  '<a href="#link#">上一页</a>',
			pre_page_off:'<span>上一页</span>',
			dots :  '<span class="pager-dots">...</span>',
			current_link :  '<span class="on">#num#</span>',
			links : '<a class="pager-num pgnum" href="#link#">#num#</a>',
			next_page_on : '<a href="#link#">下一页</a>',
			next_page_off : '<span>下一页</span>'
	    };
	}
		
	var buildPager = function(page)
	{ 	
		self.html('');
		var pager = '';
		var total = self.settings.total;
		if (total <= 1) return;
		if (!page) page = 1;
		var page_span = self.settings.page_span; //3
		
		if (page > 1) //previous page
		{
		    var pl = self.settings.styles.pre_page_on.replace(/#link#/, self.settings.url+self.settings.mark+'page='+parseInt(page-1));
			$(pl)
				.click(function(event)
				{
					event.preventDefault();
					goto_p(page-1);
					return false;
				}).appendTo(self);
		}

		if (page - page_span >= 2)
		{
			$(createLink(1)).click(function(event)
			{
				event.preventDefault();
				goto_p(1);
				return false;
			}).appendTo(self);
		}
		if (page - page_span > 2)
		{
			$(self.settings.styles.dots).appendTo(self);
		}
		
		for(var i=page-page_span;i<=page+page_span;i++)
		{
			if (i<=0 || i>total) continue;
			if (page == i) {
				 var tu2 = self.settings.styles.current_link.replace(/#link#/,self.settings.url+self.settings.mark+"page="+page);
				 tu2 = tu2.replace(/#num#/,page);
				$(tu2).appendTo(self);
			} else
				$(createLink(i)).data('page',i).click(function(event)
				{
					event.preventDefault();
					goto_p($(this).data('page'));
					return false;
				}).appendTo(self);
		}
		if (total- page - page_span > 1)
		{
			$(self.settings.styles.dots).appendTo(self);
		}
		if (total- page - page_span >= 1)
		{
			$(createLink(total)).click(function(event)
			{
				event.preventDefault();
				goto_p(total);
				return false;
			}).appendTo(self);
		}
		if (page < total)
		{
		    var nl =  self.settings.styles.next_page_on.replace(/#link#/,self.settings.url+self.settings.mark+'page='+(page+1));
			$(nl)
				.click(function(event)
				{
					event.preventDefault();
					goto_p(page+1);
					return false;
				}).appendTo(self);
		}
		return pager;
	};
	
	var goto_p = function(page,forceload)
	{
		if (page<=0) page = 1;
		var total_page = self.settings.total;
		if (page > total_page) page = total_page;
		if (page == self.settings.current && !forceload) return;
		var url = self.settings.url+self.settings.mark+'page='+page+'&ajax=true';
		var loading = true;
		$(self.settings.container).after('<div class="pager-loading"></div>');
		var offsetTop = $(self.settings.container).offset().top;
		if(self.settings.slideup){
			$(self.settings.container).slideUp(300,function() //评论内容收上去之后执行这个函数
			{
				$(document).scrollTop(offsetTop-40);
			});
		}
		
		var isJsonp = /jsoncallback/.test(url);
		if(isJsonp) {
			$.getJSON(url,{  },function(s)
					{
						loading = false;
						self.settings.current = page;
						$('.pager-loading').slideUp(200,function() //删除loading的那个图片
						{
							$(this).remove();
						});
						$(self.settings.container).html(s.html+'<div style="height:0;line-height:0;clear:both;font-size:0;"></div>').slideDown(300,function()
						{
							if (self.settings.onPage && typeof self.settings.onPage == 'function') {
								var caller = this;
								if(typeof self.settings.onPageContext != 'undefined') {
									caller = self.settings.onPageContext;
								}
								self.settings.onPage.call(caller);
							}
						});
						
						buildPager(page);
			
						//lll 2010-5-26 翻页时也自动展开回复内容
						if(typeof(commont_reply_start_DirectDisplay)=="function"){
							commont_reply_start_DirectDisplay();
						}
					});
		}else {
			$.post(url,{  },function(s)
			{
				loading = false;
				self.settings.current = page;
				$('.pager-loading').slideUp(200,function() //删除loading的那个图片
				{
					$(this).remove();
				});
				$(self.settings.container).html(s+'<div style="height:0;line-height:0;clear:both;font-size:0;"></div>').slideDown(300,function()
				{
					if (self.settings.onPage && typeof self.settings.onPage == 'function') {
						var caller = this;
						if(typeof self.settings.onPageContext != 'undefined') {
							caller = self.settings.onPageContext;
						}
						self.settings.onPage.call(caller);
					}
				});
				
				buildPager(page);
	
				//lll 2010-5-26 翻页时也自动展开回复内容
				if(typeof(commont_reply_start_DirectDisplay)=="function"){
					commont_reply_start_DirectDisplay();
				}
			});
		}
	};
	
	buildPager(self.settings.current);
	return self;
};

function is_object( mixed_var ){  
    if(mixed_var instanceof Array) {  
        return false;  
    } else {  
        return (mixed_var !== null) && (typeof( mixed_var ) == 'object');  
    }  
}
/**
* 载入javascript脚本，第一个参数可以是数组，载入完成后执行回调函数
*/
function loadScript(scripts,callback,forcereload)
{
	if (typeof scripts == 'string') scripts = [scripts];
	if (!window.umiwiScriptsLoaded) window.umiwiScriptsLoaded = {};
	var total = scripts.length;
	var loaded = 0;
	function _onload()
	{
		loaded++;
		if (loaded == total && callback && typeof callback == 'function')
		{
			setTimeout(callback,2000);
		}
	}

	for(var i = 0; i < total; i++)
	{
		if (window.umiwiScriptsLoaded[scripts[i]] && !forcereload)
		{
			_onload();
			continue;
		}
		(function(src)
		{
			window.umiwiScriptsLoaded[src] = true;
			
			if (src.indexOf('http://') == -1)
			{
				$.get(src,{},function(s)
				{
					eval(s);
					_onload();
				});
				return;
			}
			
			var script = document.createElement('script');
			script.onloadDone = false;
			script.onload = function()
			{ 
				if ( ! script.onloadDone )
				{
					script.onloadDone = true; 
					_onload();
				}
			};
			script.onreadystatechange = function()
			{ 
			    if ( ( "loaded" === script.readyState || "complete" === script.readyState ) && ! script.onloadDone )
				{
					script.onloadDone = true; 
					_onload();
			    }
			};
			script.src = src;
			document.getElementsByTagName('head')[0].appendChild(script);
			//$('body')[0].appendChild(script);
		})(scripts[i]);
	}
}


function click_track(cate, action, label) {
	try{
	if(_gaq) {
		if(typeof trace_page_name !="undefined") cate = trace_page_name;
		_gaq.push(['_trackEvent', cate, action, label]);
	}} catch(ex){}
}

$(function(){	
	$("[trace]").each(function(){//for google
		var obj = $(this);
		var c ="";
		var l = obj.attr('trace');
		var arrs = l.split("|");
		if(arrs && arrs.length == 2) {
			c=arrs[0]; 
			l=arrs[1];
		}
		if(this.tagName == "A") {
			obj.click(function() {
				var u = $(this).attr('href');	
				click_track(c,l,u);
			});
		} else {
			obj.find('a').each(function(){
				$(this).click(function() {
					var u = $(this).attr('href');	
					click_track(c,l,u);
				});
			});
		}
	});
	
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