$(function(){
    var users = JSON.parse(window.localStorage.getItem('user'));
    var userId = users.id;
    if(!users){
        window.location.href = '/login.html';
    }else{
    	$(".name").text(users.name);
    	$.ajax({
    		type:'GET',
		    url:apiServieURL + '/getFavoritesList',
		    data:{stu_id:userId},
		    dataType:'json',
		    headers: {
		        Accept: "application/json; charset=utf-8"
		    },
		    success:function(data){
		    	if(data.status == '1'){
		    		var html = '';
		    		$.each(data.data.data,function(i,n){
		    			$.ajax({
						    type:'GET',
						    url:apiServieURL + '/getCourseDetail',
						    data:{course_id:n.course_id},
						    dataType:'json',
						    headers: {
						        Accept: "application/json; charset=utf-8"
						    },
			    			success:function(data){
			    				if(data.status == '1'){
		    						$.each(data.data.info,function(o,k){
		    							console.log(k)
						    			html = '<li>'+
								                '<a href="/curriculumDetail.html?id='+ n.course_id +'" class="img" title="'+ n.course_name +'" target="_blank">'+
								                    '<img src="http://39.108.4.136/storage/upload/'+ n.image +'" alt="">'+
								                    '<h3>'+ n.course_name +'</h3>'+
								                '</a>'+
								                '<p>讲师：<strong class="name"><a title="'+ k.teacher_name +'" href="/mayunxuanchuanpian.shtml?go=1" target="_blank">'+ k.teacher_name +'</a></strong> <i class="ico_picnew"></i></p>'+
								                '<p>'+
								                	'<span>'+ k.title +'</span>'+
								                '</p>'+
								                '<div class="c_info">'+
											         '<div class="flo_r">'+
											                 '<h6 class="" title="开始时间">'+ k.start_time +'</h6>'+
											         '</div>'+
								 				'</div>'+
								            '</li>';
						    			$('.c_list').prepend(html);
						    		})
						    	}
				    		}
				    	})
		    		})
		    	}
		    }
    	})
    }
})