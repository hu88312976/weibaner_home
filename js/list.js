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
	seachList();
	$.ajax({
	    type:'GET',
	    url:apiServieURL + '/getIndustryList',
	    data:'',
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		var html = '';
	    		$.each(data.data,function(i,n){
	    			html = '<li><a data-id="'+ n.id +'" onclick="RwyData(this);">'+ n.name +'</a></li>';
	    			$('#industryList').append(html);
	    		})
	    	}
	    }
	});
	$.ajax({
	    type:'GET',
	    url:apiServieURL + '/getCourseList',
	    data:{page_size:7,is_heat:1},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		var html = '';
	    		$.each(data.data.data,function(i,n){
	    			html = '<li>'+
							'<a href="/curriculumDetail.html?id='+ n.id +'"><img style="" src="http://39.108.4.136/storage/upload/'+ n.image +'"></a>'+
							'<div>'+
								'<a href="" title=""><h2>'+ n.name +'</h2></a>'+
								'<p><span>'+ n.click_number +'</span>点击过</p>'+
							'</div>'+
						'</li>';
	    			$('.sub-nav-column2').append(html);
	    		})
	    	}
	    }
	});
})
function seachList(page,course_type,order_by,is_heat,industry_id){
	$.ajax({
	    type:'GET',
	    url:apiServieURL + '/getCourseList',
	    data:{page_size:8,order_by_type:1,page:page,course_type:course_type,order_by:order_by,is_heat:is_heat,industry_id:industry_id},
	    dataType:'json',
	    headers: {
	        Accept: "application/json; charset=utf-8"
	    },
	    success:function(data){
	    	if(data.status == '1'){
	    		var html = '';
	    		$.each(data.data.data,function(i,n){
	    			html =html +'<li>'+
							'<dl>'+
								'<dt><a href="/curriculumDetail.html?id='+ n.id +'"><img src="http://39.108.4.136/storage/upload/'+ n.image +'"></a></dt>'+
								'<dd>'+
									'<h2><a href="">'+ n.name +'</a></h2>'+
								'</dd>'+
								'<dd class="margin-b-18">'+
									'<span  class="icon-look">'+ n.buy_number +'</span>'+
									'<span class="icon-comment">'+ n.click_number +'</span>'+
									'<span class="icon-collect">0</span>'+
								'</dd>'+
								'<dd class="margin-b-18"><del>'+ n.old_price +'</del><a href="" class="btn-free">'+ n.price +'</a></dd>'+
							'</dl>'+
						'</li>';

	    		})
	    		$('.video-list').empty();
					$('.video-list').append(html);
	    		var paginateHtml = '';
       			if(data.data.per_page > 1){
       	             var preHtml = '';
       	              if(data.data.prev_page_url != null){
       	                  var prePage = data.data.current_page -1;
       	                  preHtml = '<span class="paging_p" data-values="'+ prePage +'" onclick="RwyData(this)">'+ '&nbsp;' +'</span>';
       	              }
       	             var nextHtml = '';
       	             if(data.data.next_page_url != null){
       	                 var nextPage = data.data.current_page +1;
       	                 nextHtml = '<span class="paging_n" data-values="'+ nextPage +'" onclick="RwyData(this)">'+ '&nbsp;' +'</span>';
       	             }
       	             paginateHtml = preHtml + '<span class="on" data-values="'+ data.data.current_page +'" onclick="RwyData(this)">'+ data.data.current_page +'</span>'+
       	              nextHtml +'<em>共'+ data.data.last_page +'页</em>'+
       	             '<b><i>跳转到</i><input name="p" type="text" class="text" id="gotopagenum" onchange="RwyData(this);"/>'+
       	             '<input type="button" class="button"/></b>&nbsp;页';
       	             $('.paging').empty()
       	             $('.paging').append(paginateHtml);
       			}
	    	}
	    }
	});
}
$(function(){
	$('.video-class-l li').on('click',function(){
		$(this).addClass('current').siblings().removeClass('current');
	})
	$('.video-class-r li').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
	})
	$('.tagclass li').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
	})
	$('#industryList').on('click','li',function(){
		$(this).addClass('on').siblings().removeClass('on');
	})
})
function RwyData(obj){
    var page = ($(obj).attr('data-values'))?$(obj).attr('data-values'):$(obj).val();
    var course_type = ($(obj).attr('data-type') != undefined)?$(obj).attr('data-type'):$('.video-class-l li.current a').attr('data-type');
    var order_by = ($(obj).attr('data-sort') != undefined)?$(obj).attr('data-sort'):$('.video-class-r li.on a').attr('data-sort');
    var is_heat = ($(obj).attr('data-hot') != undefined)?$(obj).attr('data-hot'):$('.tagclass li.on a').attr('data-hot');
    var industry_id =($(obj).attr('data-id') != undefined)?$(obj).attr('data-id'):$('.industryList li.on a').attr('data-id');
    seachList(page,course_type,order_by,is_heat,industry_id);
}


// 退出
function signOut(){
	 localStorage.clear();
	 location.reload()
}
	
	