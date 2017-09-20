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
		userId = users.id;
	}
	// 课程id
	var url = location.search; //获取url中"?"符后的字串
   	if (url.indexOf("?") != -1) {    //判断是否有参数
      var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
      strs = str.split("=");   //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
      id=strs[1];          //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
   	}
   $.ajax({
	    type:'GET',
	    url:'http://39.108.4.136/api/getCourseDetail',
	    data:{course_id:id},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	        if(data.status == '1'){
				$.each(data.data.info,function(i,n){
					$('.crumbs strong').text(n.course_name);
					$('.albuminfo').append('<div class="w_950">'+
				            '<div class="video_vdo">'+
				            	'<img src="http://39.108.4.136/storage/upload/'+ n.image +'" tagName="IMG" width="400" height="300"/>'+
				            '</div>'+
				            '<div class="video_info">'+
				                '<h1>'+ n.course_name +'<span>'+
				                '</span></h1>'+
				                '<div class="video_infowrap">'+
				                '<div class="albcomp" id="vip_btn">'+
                    				'<p style="">'+
                    	          '<a class="btn_play" onclick="show();" title="立即预约" href="javascript:void(0)" style="display:block;" onclick="();return false;" target="_self">立即预约</a>'+
                					'</p></div>'+
				                    '<div id="video_info_list">'+
				                        '<p class="abline"></p>'+
				                        '<dl>'+
				                            '<dt>'+'讲师：'+'</dt>'+
				                            '<dd>'+
				                                '<span><a target="_blank" href="">'+ n.teacher_name +'</a></span><span class="jstitle">'+ n.title +'</span></dd>'+
				                            '</dl>'+
				                            '<dl>'+
				                                '<dt>'+'上课时间：'+'</dt><dd><span>'+ n.start_time +"至"+ n.end_time +'</span>'+
				                            '</dd>'+
				                        '</dl>'+
				                        '<dl class="gkplyy">'+
				                            '<dt>'+'观看地址：'+'</dt>'+
				                            '<dd><strong>'+ n.roomaddress +'</strong></dd>'+
				                        '</dl>'+
				                        '<dl class="gkplyy">'+
				                            '<dt>'+'教室最大人数：'+'</dt>'+
				                            '<dd><strong>'+ n.maximum +'</strong></dd>'+
				                        '</dl>'+
				                        '<div class="scfx">'+
				                            '<div class="sharebox">'+
				                                '<div class="collect">'+
				                                    '<a class="icocollect" onClick="collection()">收藏</a>'+
				                                '</div>'+
				                            '</div>'+
				                        '</div>'+
				                    '</div>'+
				                '</div>'+
				            '</div>'+
				        '</div>');
					$('.tcherinfo').append('<a class="img_l" target="_blank" href="">'+
										'<img src="http://39.108.4.136/storage/upload/'+ n.image +'"/>'+
									'</a>'+
									'<h3>'+ n.teacher_name +'</h3>'+
									'<p class="gray9">'+ n.title +'</p>'+
								'<p class="tchertxt">'+ n.teachInfo +'</p>');
				});
				console.log(data.data.specialty_list)
				$.each(data.data.specialty_list,function(i,n){

					$('.kcjsbox').append('<h2><span class="t_kcjs">'+'课程介绍'+'</span></h2>'+
                		'<div class="kctag">'+
							 '<a title="" target="_blank">'+ n.name +'</a>'+
		                '</div>'+
		                '<p class="kcjstxt">'+ n.info +'</p>');
				})        	
	        }else{
	            alert('网络繁忙!');
	            return false;
	        }
	    }
	})
   $.ajax({
   		type:'GET',
	    url:'http://39.108.4.136/api/getCommentList',
	    data:{course_id:id},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		var html = '';
	    		$.each(data.data.data,function(i,n){
	    			html='<ul class="reviews_con">'+
					'<li class="clearfix">'+
						'<div class="talkbox">'+
							'<div class="userpic">'+
								'<a target="_blank" href="" title="GNU-_-Linux"><img width="50" height="50" alt="头像" src="http://i2.umivi.net/avatar/27/7686727m.jpg"></a>'+
							'</div>'+
							'<div class="txt">'+
								'<p class="reviews_content">'+
									'<span class="reviews_username">'+
										'<a target="_blank" href="">'+ n.student_name +'</a><a class="v1" target="_blank" title="" href="/member/diamond"></a>'+'：'+
									'</span>'+ n.message +'</p>'+
								'<p class="reviews_info">'+
									'<a class="btnrep" data="0" tid="805489" target="_self" href="javascript:void(0);">'+''+'</a>'+
									'<a id="like805489" onclick="praise();" class="likestyle btnrep">'+'赞(0)'+'</a><span class="reviews_date">'+ n.created_at +'</span>'+
								'</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'</div>'+
					'</li>'+
				'</ul>';
				$('#comment_list').append(html);
	    		})
	    	}
	    }
   })



   // 收藏状态
   $.ajax({
		type:'GET',
	    url:'http://39.108.4.136/api/getFavoritesList',
	    data:{stu_id:userId,course_id:id},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		// $.each
	    		if(data.data.data.id){
	    			$('.icocollect').html('已收藏').addClass('active');
	    		}else{
	    			$('.icocollect').html('收藏').removeClass('active');
	    		}
	    	}
	    }
	})
   

   
   	$('#submit').click(function(){
   		if(users){
			var buy_num = $('#buy_num').val();
			var amount = $('#amount').val();
			var price = $('#price').val();
			var pay_type = $('.pay_type').val();
			var remark = $('#remark').val();
			$.ajax({
				type:'POST',
			    url:'http://39.108.4.136/api/addOrder',
			    data:{stu_id:userId,course_id:id,buy_num:buy_num,amount:amount,price:price,pay_type:pay_type,remark:remark},
			    dataType:'json',
			    headers: {
			        Accept: "application/json; charset=utf-8"
			    },
			    success:function(data){
			    	if(data.status == '1'){
			    		$('.appointment').hide();
			    		alert('提交成功');
			    	}else{
			    		alert(data.info);
			    	}
			    }
			})
		}else{
			window.location.href = '/login.html';
   		}
	})
})

// 收藏
function collection(){
	var users = JSON.parse(window.localStorage.getItem('user'));
	var userId = users.id;
	$.ajax({
		type:'POST',
	    url:'http://39.108.4.136/api/FavoritesCourse',
	    data:{stu_id:userId,course_id:id},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		if(data.data == '1'){
	    			$('.icocollect').html('收藏').removeClass('active');	
	    		}else{
	    			$('.icocollect').html('已收藏').addClass('active');
	    		}
	    	}else{
	    		window.location.href = '/login.html';
	    	}
	    }
	})
}

// 点赞
function praise(){
	var users = JSON.parse(window.localStorage.getItem('user'));
   	var stu_id = users.id;
	$.ajax({
		type:'POST',
	    url:'http://39.108.4.136/api/CommentUp',
	    data:{course_id:id,stu_id:stu_id},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		alert(1);
	    	}else{
	    		window.location.href = '/login.html';
	    	}
	    }
	})
}

// 预约

function show(){
	$('.appointment').show();
}


function hide(){
	$('.appointment').hide();
}

// 退出
function signOut(){
	 localStorage.clear();
	 location.reload()
}
