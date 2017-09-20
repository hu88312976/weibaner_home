var Signin = {
	isSignin:null,
	identity:1,
	host:'http://v.youmi.cn',
	init:function()
	{
		Signin.host = Signin.getHost();
		//判断是在通用打卡界面被调用
		if ($(".icocheck")[0] != undefined) {
			$.getScript(Signin.host+'/signin/getusersignin/?callback=Signin.initAttr');
		}
	},
	initAttr:function(d)//初始化执行签到流程
	{
		Signin.isSignin = d.issignin;
		Signin.identity = d.identity;
		if (!d.uid) {return;};
        //判断用户是否签到
		if (!Signin.isSignin && Signin.identity == '20') {
			$(".icocheck").click(function(){Signin.signin();});
			$(".icocheck").show();
		} else {
			return false;
		}
	},
	signin:function()//执行签到
	{
		loadJS(Signin.host+'/signin/signin/?callback=Signin.upSignin&_t='+Math.random());
		// $.getScript(Signin.host+'/signin/signin/?callback=Signin.upSignin');
	},
	upSignin:function(d)
	{
		if (d.e == '9999') {
			$(".addcoinnum").html(d.coin.coinnum);
			$(".mycoinnum").html(d.mycoin);
			$(".nextcoinnum").html(d.next_coin_num);
			$('.popupBox h3 strong').html($.cookie('username'));
			$('.popupBox').show();
			//判断是在通用打卡界面被调用
			if ($(".icocheck")[0] != undefined) {
				$(".icocheck").hide();
			}
			//判断是否是在会员界面被调用
			if ($('.diamond2_coin')[0] != undefined) {
				$('.diamond2_coin').html('<div class="integration1"><span>我的积分：</span><strong>'+d.mycoin+'</strong><a href="/coin/">兑换礼物</a><i></i></div><div class="integration2">今日已签到，明日可领<span>'+d.next_coin_num+'</span>积分<a href="/home/signin/">我的签到记录</a></div></div>');
			}
		}
	},
	getHost:function()
	{
		if(window.location.host.slice(-11)=='v.umiwi.com' || window.location.host.slice(-10)=='v.youmi.cn')
		{
			return 'http://'+window.location.host;
		}else
		{
			return 'http://v.youmi.cn';
		}
	}
};
function loadJS(url)
{
	var s = document.createElement('SCRIPT');
	s.src = url;
	document.getElementsByTagName('HEAD')[0].appendChild(s);
}
Signin.init();