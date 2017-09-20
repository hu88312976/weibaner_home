/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();



/*******************************************************************************
 *
 * ParsedQueryString version 1.0
 * Copyright 2007, Jeff Mott <Mott.Jeff@gmail.com>. All rights reserved.
 *
 * Redistribution and use in source and binary forms with or without
 * modification are permitted provided that the above copyright notice,
 * this condition, and the following disclaimer are retained.
 *
 * THIS SOFTWARE IS PROVIDED AS IS, AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE, ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING BUT NOT
 * LIMITED TO PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 ******************************************************************************/

function ParsedQueryString() {
	this._init();
}

ParsedQueryString.version = '1.0';

ParsedQueryString.prototype =
{
	_init:
		function ()
		{
			this._parameters = {};

			if (location.search.length <= 1)
				return;
			var pairs = location.search.substr(1).split(/[&;]/);
			for (var i = 0; i < pairs.length; i++)
			{
				var pair = pairs[i].split(/=/);
				var name = this._decodeURL(pair[0]);
				if (Boolean(pair[1]))
				{
					var value = this._decodeURL(pair[1]);
					if (Boolean(this._parameters[name]))
						this._parameters[name].push(value);
					else
						this._parameters[name] = [value];
				}
			}
		},

	_decodeURL:
		function (url) {
			return decodeURIComponent(url.replace(/\+/g, " "));
		},

	param:
		function (name)
		{
			if (Boolean(this._parameters[name]))
				return this._parameters[name][0];
			else
				return "";
		},

	params:
		function (name)
		{
			if (Boolean(name))
			{
				if (Boolean(this._parameters[name]))
				{
					var values = [];
					for (var i = 0; i < this._parameters[name].length; i++)
						values.push(this._parameters[name][i]);
					return values;
				}
				else
					return [];
			}
			else
			{
				var names = [];
				for (var name in this._parameters)
					names.push(name);
				return names;
			}
		}
};

var FlashVideo = {
	create:function(id,autoplay,url,token,notesoption,width,height,recommend,ads)
	{
		if(typeof width =='undefined')
		{
			var width='610';
		}
		if(typeof height=='undefined')
		{
			var height='510';
		}
		if(typeof recommend =='undefined')
		{
			var recommend=1;
		}
		if(typeof ads =='undefined')
		{
			var ads="false";
		}
		if(!test_flash_version("10.2.0")){
			FlashVideo.createsimple('UmiwiMediaPlayback',id,autoplay,recommend,token,width,height);
			return '';
		}
		var pqs = new ParsedQueryString();
		var parameterNames = pqs.params(false);
		var hasStopBug = 0;
		if(flashHasStopBug())
		{
			var hasStopBug = 1;
		}
		var parameters = {
			flvID: id,
			token: token,
			autoPlay: autoplay,
			bufferWindow: 300,
			bufferThreshold: 180,
			descriptionUrl: url,
			//showRecommend: recommend,
			showAds: ads,
			hasStopBug: hasStopBug
		};

		for (var i = 0; i < parameterNames.length; i++) {
			var parameterName = parameterNames[i];
			parameters[parameterName] = pqs.param(parameterName) ||	parameters[parameterName];
		}

		var wmodeValue = "direct";
		//只能用direct，负责会影响记笔记中文输入功能。
		var wmodeOptions = ["direct", "opaque", "transparent", "window"];
		if (parameters.hasOwnProperty("wmode"))
		{
			if (wmodeOptions.indexOf(parameters.wmode) >= 0)
			{
				wmodeValue = parameters.wmode;
			}
			delete parameters.wmode;
		}

		// Embed the player SWF:
		swfobject.embedSWF(
			"http://v.umiwi.com/static/UmiwiMediaPlayback.swf?v=2012052817#abcd"
			, "UmiwiMediaPlayback"
			, width
			, height
			, "10.2.0"
			, "expressInstall.swf"
			, parameters
			, {
				allowFullScreen: "true",
				allowScriptAccess: "always",
				wmode: wmodeValue
			}
			, {
				name: "UmiwiMediaPlayback"
			}

		);
		if(notesoption)
		{
			Notes.init(notesoption);
		}


	},
	createsimple:function(domid,id,autoplay,showRecommend,token,width,height)
	{
		if(id.substr(0,1) == "f")
		{
			id = "v" + id.substr(1);
		}
		if(id.substr(0,1) == "m")
		{
			id = "r" + id.substr(1);
		}
		if(typeof width =='undefined')
		{
			var width='610';
		}
		if(typeof height=='undefined')
		{
			var height='510';
		}
		if(autoplay){autoplay=1;}else{autoplay='0';}
		if(showRecommend){showRecommend=1;}else{showRecommend='0';}
		var swfhtml = '<embed name="UmiwiMediaPlayback" src="http://api.v.umiwi.com/static/SimplePlayer.swf?flvID='+id+'&autoPlay='+autoplay+'&showRecommend='+showRecommend+'&token='+token+'" quality="high" width="'+width+'" height="'+height+'" align="middle" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash " style="visibility:visible"></embed>';
		$('#'+domid).html(swfhtml);
	},

	createcc:function(svideoid, width,height, userid, playerid,verificationcode, autostart ) {

		if(typeof width =='undefined')
		{
			var width='610';
		}
		if(typeof height=='undefined')
		{
			var height='510';
		}
		if(typeof userid=='undefined')
		{
			var userid='0CE4F62E8CAEEF62';
		}

		if(typeof playerid=='undefined')
		{
			var playerid='FBE38D4382DE4EEF';
		}

		if(typeof autostart == 'undefined') {
			var autostart = "true";
		}
		//查看浏览器是否支持flash
		var flashv = check_has_flash();
		if(flashv == '-1') {

			if( navigator.platform && ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1)) ){
				var html = '<style type="text/css">#UmiwiMediaPlayback{ position:relative; background-color:#000;}.iosError{width:340px; height:150px;; overflow:hidden; position:absolute; left:50%; margin-left:-170px; top:45%; margin-top:-50px;}.iosError h2{ font-size:18px; color:#AFAFAF; height:40px; line-height:40px;}.iosError p{ height:auto; overflow:hidden; line-height:30px; color:#fff; font-size:12px;}.iosError p em{color:#F80C0E;}</style>';
				 html += '<div  id="UmiwiMediaPlayback" style="width:'+width+'px;height:'+height+'px;"><div class="iosError" ><h2>非常抱歉！</h2><p>iphone、ipad浏览器暂不支持优米网在线视频播放。<br /><br />iPad用户请下载“优米视频HD客户端”观看，<a href="http://itunes.apple.com/cn/app/you-mi-shi-pinhd/id491273690?mt=8"  style="color:red;text-decoration:underline">立即下载</a>。<br />iPhone用户请下载“优米视频客户端”观看，<a href="http://itunes.apple.com/cn/app/id464253192?mt=8"  style="color:red;text-decoration:underline">立即下载</a>。</p></div></div>';
			} else if(navigator.platform && ((navigator.platform.indexOf("android") != -1) || (navigator.platform.indexOf("Android") != -1))){
				var html = '<style type="text/css">#UmiwiMediaPlayback{ position:relative; background-color:#000;}.iosError{width:340px; height:150px;; overflow:hidden; position:absolute; left:50%; margin-left:-170px; top:45%; margin-top:-50px;}.iosError h2{ font-size:18px; color:#AFAFAF; height:40px; line-height:40px;}.iosError p{ height:auto; overflow:hidden; line-height:30px; color:#fff; font-size:12px;}.iosError p em{color:#F80C0E;}</style>';
				 html += '<div  id="UmiwiMediaPlayback" style="width:'+width+'px;height:'+height+'px;"><div class="iosError" ><h2>非常抱歉！</h2><p>您还没有安装flash播放器，请点击<a href="http://www.adobe.com/go/getflash" target="_blank" style="color:red" >这里</a>安装<br />或者请下载“优米视频android客户端”观看，<a href="http://m.umiwi.com/" style="color:red;text-decoration:underline" >立即下载</a>。</p></div></div>';
			} else {
				var html = '<div  id="UmiwiMediaPlayback" style="width:'+width+'px;height:'+height+'px;background-color:#000;line-height:460px;text-align:center;"><span style="text-align:center;color:#fff;font-size:18px;">您还没有安装flash播放器，请点击<a href="http://www.adobe.com/go/getflash" target="_blank" style="color:red" >这里</a>安装</div></div>';

			}
			$('#UmiwiMediaPlayback').parent().html(html);
			//播放音频
			if($('#player2')[0])
			{
				$('#player2').mediaelementplayer();
			}

			return '';
		}
		var swfobj=new SWFObject('http://p.bokecc.com/flash/player.swf', 'playerswf', width, height, '8');
		swfobj.addVariable( "siteid" , userid);	//	partnerID,用户id
		swfobj.addVariable( "vid" , svideoid);	//	spark_videoid,视频所拥有的 api id
		//swfobj.addVariable( "mode" , "api");	//	mode, 注意：必须填写，否则无法播放
		swfobj.addVariable( "autostart" , autostart);	//	开始自动播放，true/false
		swfobj.addVariable( "jscontrol" , "true");	//	开启js控制播放器，true/false
		swfobj.addVariable( "playerid", playerid);	//播放器id
		swfobj.addVariable( "verificationcode",verificationcode);	//播放器id


		swfobj.addParam('allowFullscreen','true');
		swfobj.addParam('allowScriptAccess','always');
		swfobj.addParam('wmode','transparent');

		if($('#UmiwiMediaPlayback').attr('tagName') == 'IMG'){
			$('#UmiwiMediaPlayback').replaceWith('<div id="UmiwiMediaPlayback"></div>');
		}


		swfobj.write('UmiwiMediaPlayback');
		//播放前关闭最后的iframe切片
		if(typeof  video_over_ad_close=='function'){
			video_over_ad_close();
		}

	}

}

function getTotalCookie()
{

	function getCookie(name)
	{//{{{

		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1) {
			begin = dc.indexOf(prefix);
			if (begin != 0) return null;
		} else {
			begin += 2;
		}
		var end = document.cookie.indexOf(";", begin);
		if (end == -1) {
			end = dc.length;
		}
		return unescape(dc.substring(begin + prefix.length, end));
	}//}}}
	return 'E='+encodeURI(getCookie('E'));
}


/* Uncomment this code to be notified of playback errors in JavaScript:

 function onMediaPlaybackError(playerId, code, message, detail)
 {
	alert(playerId + "\n\n" + code + "\n" + message + "\n" + detail);
 }

 */


var Notes = {
	init:function(options)
    {
		this.options = options;
       	var obj=$("#notesdiv");
       	if(obj.length<=0)
   		{

       		$("body").append("<div id='notesdiv' style='display:none;'></div>")
        }

   		var formstr='<iframe src="" style="border:0"   width="0" height="0" frameborder="no" id="notesiframe" name="notesiframe"></iframe>'
  		formstr +='<form method="post" name="" id="notesform"  target="notesiframe" action="http://mili.umiwi.com/api/addnotes" >';
  		formstr +='<input name="uid" cols="" value="'+options.uid+'" />';
  		formstr +='<input name="categoryid" id="categoryid" value="'+options.categoryid+'" />';
  		formstr +='<input name="videoid"  id="categoryid" value="'+options.videoid+'" />';
  		formstr +='<input name="tutorid" id="categoryid" value="'+options.tutorid+'" />';
  		formstr +='<input name="title" id="categoryid" value="'+options.title+'" />';
  		formstr +='<input name="videotype" id="categoryid" value="'+options.videotype+'" />';
  		formstr +='<input name="videourl" id="videourl" value="'+options.videourl+'" />';
  		formstr +='<input name="img" id="notesimg"  />';
  		formstr +='<input name="content" id="notescontent" />';
  		formstr +='</form>';
  		$("#notesdiv").html(formstr);

    },
    submit:function(imageString,noteString)
    {
    	var info=passportUtil.checkLogin();
        if(info==false)
         {

         }else{
	        	 if(!this.options)
	         	{
	         		alert('请初始化笔记参数');
	         		return false;
	         	}
        	 	$("#notesimg").val(imageString);
        	 	$("#notescontent").val(noteString);

        	 	$("#notesform").submit();
         }

    }
}
function submitNote(imageString,noteString)
{
   Notes.submit(imageString,noteString);
}


function light_on(){
	if($('#light_block')[0]) {

		$('body').css({'visibility':'visible'});
		$('#light_block').fadeOut(700);


	}

}
function light_off() {
	window.light = [];
	var html = '<div id="light_block" style="z-index:900000;opacity:1; display:none;background-color: #101010;height:100%;width:100%;top:0;left:0;position:absolute;visibility:visible"></div>';

	if(!$('#light_block')[0]) {
		$('body').append(html);
	}

	if($('object[name=UmiwiMediaPlayback]').parent().css('position') != 'static'){
		$('object[name=UmiwiMediaPlayback]').parent().css('z-index', '900001');
	} else if($('object[name=UmiwiMediaPlayback]').parent().parent().css('position') != 'static'){
		$('object[name=UmiwiMediaPlayback]').parent().parent().css('z-index', '900001');
	} else if($('object[name=UmiwiMediaPlayback]').parent().parent().parent().css('position') != 'static'){
		$('object[name=UmiwiMediaPlayback]').parent().parent().parent().css('z-index', '900001');
	}

	$('#light_block').fadeIn(700).css({width:$(document).width(),height:$(document).height()});
	$('body').css({'visibility':'hidden'});

}


//视频跳转，在flash播放器的播放列表选择视频会调用该函数
function jumpToURL(url)
{
	window.location = url;
}


//老站的flashjs
function test_flash_version(Z) {
	var M = get_flash_version();
	var Y = M.pv, X = Z.split(".");
	X[0] = parseInt(X[0], 10);
	X[1] = parseInt(X[1], 10) || 0;
	X[2] = parseInt(X[2], 10) || 0;
	return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0]
			&& Y[1] == X[1] && Y[2] >= X[2] ? true : false;
}

function flashHasStopBug()
{
	var M = get_flash_version();
	var Y = M.pv;
	if(Y[0] == '11' && Y[1] == '2')
	{
		return true;
	}
	return false;
}


function get_flash_version() {
	var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator;
	var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D
			&& typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform
			.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/
			.test(Y)
			: /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(
			/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"1", ag = [
			0, 0, 0 ], ab = null;
	if (typeof t.plugins != D && typeof t.plugins[S] == r) {
		ab = t.plugins[S].description;
		if (ab
				&& !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
			T = true;
			X = false;
			ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
			ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
			ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
			ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(
					/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
		}
	} else {
		if (typeof O.ActiveXObject != D) {
			try {
				var ad = new ActiveXObject(W);
				if (ad) {
					ab = ad.GetVariable("$version");
					if (ab) {
						X = true;
						ab = ab.split(" ")[1].split(",");
						ag = [ parseInt(ab[0], 10), parseInt(ab[1], 10),
								parseInt(ab[2], 10) ];
					}
				}
			} catch (Z) {
			}
		}
	}
	return {
		w3 : aa,
		pv : ag,
		wk : af,
		ie : X,
		win : ae,
		mac : ac
	};
}

function check_has_flash(){
	var a = -1;
	if (navigator.plugins && navigator.plugins.length > 0) {
            if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                var a = navigator.plugins["Shockwave Flash" + (navigator.plugins["Shockwave Flash 2.0"] ? " 2.0": "")].description.split(" "),
                c = a[2].split("."),
                b = c[0],
                c = c[1],
                d = a[3];
                d == "" && (d = a[4]);
                d[0] == "d" ? d = d.substring(1) : d[0] == "r" && (d = d.substring(1), d.indexOf("d") > 0 && (d = d.substring(0, d.indexOf("d"))));
                a = b + "." + c + "." + d;

				return a;
            }
	}


	if($.browser.msie){
		var a, c;
		try {
			c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
			a = c.GetVariable("$version")
		} catch(b) {}
		if (!a) try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),
			a = "Player 3,0,18,0"
		} catch(d) {}
		if (!a) try {
			new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
			a = "Player 2,0,0,11"
		} catch(e) {
			a = -1
		}
		return (a + "").replace(/\,/g, ".")
	}
	return a;

}

function playVideo()
{
	thisMovie("UmiwiMediaPlayback").playVideo();
}

function pauseVideo()
{
 	thisMovie("UmiwiMediaPlayback").pauseVideo();
}

function getCurrentTime()
{
 	var time = thisMovie("UmiwiMediaPlayback").getCurrentTime();
 	return time;
}

function thisMovie(movieName) {
if (navigator.appName.indexOf("Microsoft") != -1) {
 return window[movieName];
} else {
 return document[movieName];
}
}