var CartsUtil = {
	add:function(product_id, obj, album_grade){
		
		//passportUtil.setCallback(function(){ setTimeout(function(){CartsUtil.add(product_id, obj);}, 3000);});
		var info=passportUtil.checkLogin();
		if(info===false)
		{
			return false;
		}
		var url = '/carts/add';
		$.getJSON(url, {product_id:product_id}, function(data){
			if(data.e == 9999) {
				var top= $(document).scrollTop()+($(window).height()-170)/2;
				var left = $(document).scrollLeft()+($(window).width()-450)/2;
				if(!$('#cartsucc')[0])
				{
					$('body').append('<div class="addcarts" id="cartsucc" style="display:none"></div>')
				}

				var html = '<div class="addcarts_box">';
				html += '<div class="addcarts_t">';
				html += '<h2>已成功加入购物车</h2>';
				html += '<p class="carts_info">购物车共<strong>'+data.r+'</strong>件商品</p>';
				// html += '<p class="carts_info">购物车共<strong>'+data.r+'</strong>件商品，合计：￥<strong>'+data.amt+'</strong>元；</p>';
				html += '<div class="carts_js"><a href="javascript:void(0)" onclick="$(\'.addcarts\').hide();">继续选课</a><input type="button" value="去购物车结算" class="button" onclick="window.location.href=\'/carts/\'" /></div>';
				html += '</div>';
				if(album_grade == 20){
					html += '<div class="addcarts_b"><p>加入黄金会员<a href="/member/vip365/" target="_blank"><img src="http://i1.umivi.net/v/static/membercenter/images/vip22.gif" alt="" width="65" height="18"></a>，免费观看该课！<a href="/member/vip365/" target="_blank">查看详情&gt;&gt;</a></p></div>';
				}
				else if(album_grade == 30)
				{
					html += '<div class="addcarts_b"><p>加入钻石会员<a href="/member/vip1999/" target="_blank"><img src="http://i1.umivi.net/v/static/membercenter/images/vip23.gif" alt="" width="65" height="18"></a>，免费观看该课！<a href="/member/vip1999/" target="_blank">查看详情&gt;&gt;</a></p></div>';

				}
				html += '<span class="close" onclick="$(\'.addcarts\').hide();"></span>';
				html += '</div>';
				$('#cartsucc').html(html).show();
				$('#cartsucc').css({left:left,top:top}).show();
				$.getJSON('/carts/getnum/?_t='+Math.random(), {}, function(data){
					$('#nt_carts').html('<a href="/carts/" target="_blank">购物车('+data.r+')</a>');
				})
			} else {
				if(data.msg)
				{
					MsgUtil.show(data.msg);
				}
				else if(data.m)
				{
					MsgUtil.show(data.m);
				}
				setTimeout(function(){window.location.reload();}, 2000);
			}
		});
	},
	get:function(){
		var url ='/carts/get';
		$.getJSON(url, {}, function(data){
		
			
		});
	},
	
	getCookie:function(key){
						var options = {raw:true,path:'/',domain:'v.umiwi.com',secure:false};

		var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
		return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
	},
	setCookie:function(key, value){
				var options = {raw:true,path:'/',domain:'v.umiwi.com',secure:false};

		 var days = 30, t = options.expires = new Date();
            t.setDate(t.getDate() + days);

		document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join('')
	
	}
}