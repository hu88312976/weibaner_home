function setCookie(name, value, expire, path, domain, secure)
{
    var exp  = new Date();
    exp.setTime(exp.getTime() + expire*1000);
    document.cookie = name + "=" + escape(value) +
        ("; expires=" + exp.toGMTString() ) +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}
function getCookie(name)
{
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
}
function noticeOnlineStat(){
    //目前cookie O 仅用于此处的是否请求，其他地方都不处理cookie O的东西了
    if(window.location.href.indexOf('tuiguang')>0){return false;}
    if(getCookie('O') && window.first_visit_log){return false;}
    var U = getCookie('U');
    var ID = null;

    var anonymous = getCookie('anonymous');
    if(!anonymous)
    {
        var d = new Date();
        anonymous = 'a'+d.getTime()+Math.random().toString().substr(5,4);
        setCookie('anonymous',anonymous,315360000,'/','youmi.cn');
    }

    if(U)
    {
        var a = U.split('&');
        if(a.length>=2)
        {
            var info = {};
            var b;
            for(var i=0;i<a.length;i++)
            {
                b = a[i].split('=');
                info[b[0]]=decodeURI( b[1] );
            }
            ID = info['ID'];
        }
    }
    if(!ID)
    {
        var ID = anonymous;
    }
    setCookie('O', '1',30, '/', '.youmi.cn');
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    var url = 'http://onlinestat.umivi.net/?uid='+ID+'&_='+Math.random();
    if(!window.first_visit_log){
        url = url+'&log=1';
        window.first_visit_log = 1;
    }
    script.src = url;
    head.appendChild(script);
}
function noticeOnly()
{
    if(window.location.href.indexOf('tuiguang')>0){return false;}
    if(getCookie('O')){return false;}
    var U = getCookie('U');
    var ID = null;
    if(U)
    {
        var a = U.split('&');
        if(a.length>=2)
        {
            var info = {};
            var b;
            for(var i=0;i<a.length;i++)
            {
                b = a[i].split('=');
                info[b[0]]=decodeURI( b[1] );
            }
            ID = info['ID'];
        }
    }
    if(!ID)
    {
        return false;
    }
    setCookie('O', '1',50, '/', '.youmi.cn');
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    script.src = 'http://onlinestat.umivi.net/notice.php?uid='+ID+'&_='+Math.random();
    head.appendChild(script);
}
noticeOnlineStat();


onlineStatInterval = setInterval(noticeOnlineStat,30000);
//setTimeout(function(){clearInterval(onlineStatInterval);onlineStatInterval = setInterval(noticeOnly,10000);},3000);

/*
if($)
{
    $.getScript('http://i1.umivi.net/v/static/js/scrollcount.js');
}
*/
$.getScript('http://i1.umivi.net/v/static/js/nov27.js');