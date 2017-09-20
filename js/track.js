var TrackUtil = {
	xy : "0,0",
	minpost : 20,
	inited:false,

	init:function()
	{

		if(typeof localStorage!='undefined')
		{
			this.inited=true;
		}else
		{
			return;
		}

		//localStorage.clear();
		$(document).bind("mousedown", function(event){
			var xy = TrackUtil.getXY(event);
			TrackUtil.store('cl',xy);
			/*
			obj = event.srcElement ? event.srcElement : event.target;
			if(obj.tagName=='A')
			{
				if(obj.href)
				{
					if(obj.href.substring(0,11)!="javascript:")
					{
						var j='';
						var url = obj.href;
						if(url.indexOf('#')!=-1)
						{
							var j1 = url.split("#");
							url=j1[0];
							j=j1[1];
						}


						if(url.indexOf('?')==-1)
						{
							url+="?pos="+xy;
						}else
						{
							url+="&pos="+xy;
						}
						if(j!='')
						{
							url+='#'+j;
						}
						obj.href=url;
						return true;
					}
				}
			}
			*/
		});
		/*
		$(document).bind("mousemove", function(event){
			var xy = TrackUtil.getXY(event);
			var a = TrackUtil.xy.split(',');
			var b = xy.split(',');
			if((b[1]-a[1])*(b[1]-a[1]) + (b[0]-a[0])*(b[0]-a[0]) > 2500)
			{
				TrackUtil.store('mv',xy);
				TrackUtil.xy = xy;
			}


		});
		*/
		setInterval(function(){TrackUtil.post()},5000);
	},
	store:function(method,xy)
	{
		var d = new Date();
		localStorage.setItem(d.valueOf(), method+','+xy+'['+encodeURI(window.location.pathname + window.location.search)+ ']');
	},
	getXY:function(event)
	{
		var y=document.documentElement.scrollTop+document.body.scrollTop +event.clientY;
		var x= document.documentElement.scrollLeft+document.body.scrollLeft +event.clientX - parseInt((document.body.offsetWidth-950)/2);
		if(x<0){x=0;}
		return x+','+y;
	},
	post:function()
	{
		if(!this.inited)
		{
			return;
		}
		var minpost = this.minpost;
		var l = localStorage.length;
		if(l<minpost)
		{
			return true;
		}
		var k;
		var p = new Array;
		var v;
		var ks = new Array;
		for(var i=0;i<minpost;i++)
		{

			k = localStorage.key(i);
			v = localStorage.getItem(k);
			if(/^\d+$/.test(k))
			{
				p.push( 'p[]='+k+','+ v);
				ks.push(k);
			}
		}
		for(var i=0;i<ks.length;i++)
		{
			localStorage.removeItem(ks[i]);
		}
		var postvalue = p.join("&");
		$.ajax({
			type: "POST",
			url: "http://v.umiwi.com/track/log/",

			data: postvalue,
			success: function(text){

			}
		});

	}
}
TrackUtil.init();


