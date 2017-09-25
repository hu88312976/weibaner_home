$(function(){
	var users = JSON.parse(window.localStorage.getItem('user'));
	if(!users){
		$('.login_info').append('<li><a href="/resiter.html" target="_self">'+ '注册'+'</a></li>'+
                '<li><a href="/login.html">'+'登录</a>'+'</li>');
	}else{
		$('#loggedin').html('<li class="ps_name">'+
                '<span class="login_name"><a target="_blank" href="">'+ users.name +'</a></span>'+
                '<ul class="ps_list">'+  
                    '<li><a target="_blank" href="/user.html">'+'我的收藏'+'</a></li>'+
                    '<li><a href="javascript:signOut();" target="_self">'+'退出'+'</a></li>'+
                '</ul>'+
            '</li>');
	}
	$.ajax({
	    type:'GET',
	    url:apiServieURL + '/getAdList',
	    data:'',
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	        if(data.status == '1'){
	        	var html = '';
	        	var html1 = '';
	        	$.each(data.data,function(i,n){
	        		html = '<div class="hotpic">'+
                '<a href="">'+'<img src="'+ imgServieURL + n.image +'"></a>'+
            	'</div>';
            		html1 = '<li>'+
                            '<a href="'+ n.link_address +'" target="_blank"><i class="icon-video"></i>'+
                            '<h3>'+ n.title +'<span class="phb1">'+ n.id +'</span></h3>'+
			    			'<p></p></a>'+
                        '</li>';
            		$('.hotslide_w').append(html);
            		$('.phblist').append(html1);
	        	})
	        	$("#hotslide").slides({
			        container: 'hotslide_w',
			        generatePagination:true,
			        preload: true,
			        preloadImage: 'http://i3.umivi.net/u/2012/index/images/loading.gif',
			        play: 4000,
			        pause: 1500,
			        hoverPause: true
			    });
	        }else{
	            alert('网络繁忙!');
	            return false;
	        }
	    }

	});
	$.ajax({
	    type:'GET',
	    url:apiServieURL + '/getCourseList',
	    data:{is_heat:1,page_size:4},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	        if(data.status == '1'){
	        	var html = '';
	        	var html1 = '';
	        	$.each(data.data.data,function(i,n){
	        		$.ajax({
					    type:'GET',
					    url:apiServieURL + '/getCourseDetail',
					    data:{course_id:n.id},
					    dataType:'json',
					    headers: {
					        Accept: "application/json; charset=utf-8"
					    },
		    			success:function(data){
		    				if(data.status == '1'){
		    					$.each(data.data.info,function(o,k){
		    						html1 = '<dd class="p-b20">'+ k.teacher_name +"&nbsp;&nbsp;&nbsp;&nbsp;"+ k.title +'</dd>'+
									'<dd>'+ k.roomaddress +'</dd>'+
									'<dd>'+ k.start_time +"至"+ k.end_time +'<span></span>'+
			       						'<a id="tutor_25" name="tutorisbuy" tutoruid="25" class="read unread" href="/curriculumDetail.html?id='+ n.id +'">'+'查看'+'</a></dd>';
			       					html = '<li>'+
					                '<a href="/curriculumDetail.html?id='+ n.id +'"><img src="'+ imgServieURL + n.image +'" alt=""></a>'+
								        '<dl>'+
								        '<dt><a href="/curriculumDetail.html?id='+ n.id +'">'+ n.name +'</a></dt>'+ html1 +
								 	'</dl>'+
								    '</li>';
								    $('.audiospeciallist').append(html);
		    					})
		    				}
		    			}
		    		});

	        	});
	        }else{
	            alert('网络繁忙!');
	            return false;
	        }
	    }

	});
})



// 退出
function signOut(){
	 localStorage.clear();
	 location.reload()
}