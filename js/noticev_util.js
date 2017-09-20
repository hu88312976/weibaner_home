var noticeUtil = {
    get:function()
    {
        if(typeof($.cookie) == 'undefined'){
            return '';
        }

        var notices = $.cookie('notice');

        if(notices){//cookie中存在消息则不请求服务器
            var a = notices.split('-');
            var aa = '';
            var barray = [];
            var result = [];
            for(key in a){
                aa = a[key];
                if(aa && typeof(aa) !='function' && typeof(aa) !='undefined'){
                    barray = aa.split('_');
                    result[barray[0]] = barray[1];
                }
            }
            if($('#nt_total')[0]){
                noticeUtil.topshow(result);
            }
        }
        else
        {
            noticeUtil.topshow(null);
        }
    },

    topshow:function(data){
        var total = 0;
        var html = ' <a class="btn_close" href="javascript:void(0);" onclick="noticeUtil.hide();return false;"title="关闭"></a> <ul>';
        var noticestr = '';


        if(data && data['letter']>0)
        {
            noticestr += '<li>'+data['letter']+'条新私信，<a href="http://v.youmi.cn/home/mymessage/?click=597">查看私信</a></li>';
        }

        if(data && data['ups']>0)
        {
            noticestr += '<li>'+data['ups']+'个新回复，<a href="http://v.youmi.cn/home/mydiscuss/?ask=me&home=1">查看</a></li>';
        }

        if(noticestr)
        {
            html += noticestr;
            html += '</ul>';
            $('#notice_tipbox').html(html).show();
        }
        else
        {
            $('#notice_tipbox').hide();
        }

        //公告提示
        if(data &&  data['annou']>0)
        {
            $('.ps_notice .number .number_c').html('<a href="http://v.umiwi.com/home/mynotice/?click=147" >'+data['annou']+'</a>');
            $('.number').show();
            $('#nt_total').text('通知('+data['annou']+')');

        }
        else{
            $('.number').hide();
            $('#nt_total').text('通知');

        }

    },

    setcookie:function(data) {
        var cookiestr = data;
        var e = new Date();
        e.setTime(e.getTime()+3000000);
        var path = '/';
        var domain = '.'+noticeUtil.getdomain();
        document.cookie = "notice" + "=" + cookiestr +  "; expires=" + e.toGMTString() + ";" + ((path) ? "; path=" + path : "") +  ((domain) ? "; domain=" + domain : "");


    },
    getdomain:function() {
        var _domain = document.domain;
        var domain = 'youmi.cn';
        if (_domain.indexOf('umiwi.com')!='-1')
        {
            domain = 'umiwi.com';
        }
        return domain;
    },

    hide:function() {
        window.clearInterval(noticeUtil.Interval);
        this.notice = ['letter'];
        $('#notice_tipbox').hide();
        var domain = noticeUtil.getdomain();
        $.getScript('http://mili.'+domain+'/notice/clear/?type=script&notice=letter,ups', function(){});
    }

};

var noticevUtil = noticeUtil;
//加载头部购物车
setTimeout(function(){
    if($('#nt_carts')[0]){
        $.getJSON('/carts/getnum/?_t='+Math.random(), {}, function(data){
            if(data && data.r){
                $('#nt_carts').html('<a href="/carts/" target="_blank">购物车('+data.r+')</a>');
            }
        });
    }
},2000);
setTimeout(function(){
    if($('#nt_record')[0]){
        $.getJSON('/watchlog/list/?_t='+Math.random(), {}, function(data){
            if(data && data.r){
                $('#nt_record').html('<a href="/member/watchlog/" target="_blank">播放记录('+data.r.rows+')</a>');
            }
        });
    }
},2000);