var FavalbumUtil = {

	add:function(eventObj,albumid,title,url,tag)
	{
		// var post_data = 'albumid='+encodeURI(albumid)+'&title='+encodeURI(title)+'&url='+encodeURI(url)+'&tag='+encodeURI(tag);

		// $.ajax({
		//   url: "/favalbum/add/",
		//   data: post_data,
		//   dataType:'json',
		//   success: function(obj){
		// 	alert(obj.msg);
		//   }
		// });
		
		var usercookie = passportUtil.getCookieUserinfo();
		if(!usercookie)
		{
			$("#header .headbox").slideToggle("slow");
			return false;
		}
		FavalbumUtil.popsrc = '/favalbum/add/?albumid='+encodeURI(albumid)+'&title='+encodeURI(title)+'&url='+encodeURI(url);
		popupUtil2.init('favalbumiframe');
		//popupUtil2.show('');
		setTimeout(function(){$("#favalbumiframe").attr('src',FavalbumUtil.popsrc)},200);
	},

	newadd:function(eventObj,albumid,title,url,tag)
	{
		var usercookie = passportUtil.getCookieUserinfo();
		if(!usercookie)
		{
			$("#header .headbox").slideToggle("slow");
			return false;
		}
		var post_data = 'albumid='+encodeURI(albumid)+'&title='+encodeURI(title)+'&url='+encodeURI(url);
		$.ajax({
		  url: "/favalbum/newadd/",
		  data: post_data,
		  dataType:'html',
		  success: function(html){
			$('.wxx_main').html(html);
		  }
		});
	},
	
	//专栏收藏
	columnadd:function(eventObj,albumid,title,url,tag){
		var usercookie = passportUtil.checkLogin();
		if(!usercookie)
		{
			$("#header .headbox").slideToggle("slow");
			return false;
		}
		var post_data = 'albumid='+encodeURI(albumid)+'&title='+encodeURI(title)+'&url='+encodeURI(url);
		$.ajax({
		  url: "/favalbum/columnadd/",
		  data: post_data,
		  dataType:'json',
		  success: function(html){
		  	if(html==null || html==undefined)
		  	{
		  		$('.icocollect').addClass("icocollect_on");
		  		$('.icocollect').html('已收藏');
		  	}else
		  	{
		  		alert(html.msg)
		  	}
		  	
			//$('.wxx_main').html(html);
		  }
		});
	},

	//音频收藏
	audioadd:function(eventObj,albumid,title,url,tag){
		var usercookie = passportUtil.checkLogin();
		if(!usercookie)
		{
			$("#header .headbox").slideToggle("slow");
			return false;
		}
		var post_data = 'audioid='+encodeURI(albumid)+'&title='+encodeURI(title)+'&url='+encodeURI(url);
		$.ajax({
		  url: "/favalbum/audioadd/",
		  data: post_data,
		  dataType:'json',
		  success: function(html){
		  	var status = html.status;
		  	if(status==200)
		  	{
		  		$('.icocollect').addClass("icocollect_on");
		  		$('.icocollect').html('已收藏');
		  	}else
		  	{
		  		alert(html.msg)
		  	}
		  	
			//$('.wxx_main').html(html);
		  }
		});
	},

	remove:function(eventObj,id)
	{
		this.obj = eventObj;
		//popupUtil2.message(FavalbumUtil.obj,'删除成功',2000);
		//return;
		var post_data = 'id='+id;

		$.ajax({
		  url: "/favalbum/remove/",
		  data: post_data,
		  dataType:'json',
		  success: function(obj){
			popupUtil2.message(FavalbumUtil.obj,'删除成功',2000,function(){
				eventObj = FavalbumUtil.obj
				eventObj = eventObj.parentNode;
				eventObj.parentNode.removeChild(eventObj);
				$('#resultcount').html(parseInt($('#resultcount').html())-1);
				});
		  }
		});

	}
}