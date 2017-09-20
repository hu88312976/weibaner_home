var popupUtil2 = {
    iframeid:'',
    inited:false,
    init:function(iframeid){

        if(!$('#vpopup2')[0])
        {
            if(!iframeid){iframeid = 'vpopup2_iframe';}
            this.iframeid = iframeid;
            var stylehtml = '<style>';
            stylehtml += '.f2-layer{ position:absolute; background:#ebebeb; display:none;z-index: 9000;}';
            stylehtml += '.f2-layer .f2-content{ background:#fcfcfc; border:1px solid #cecece; border-top:3px solid #8bd638; position:relative; top:-3px; left:-3px; padding:20px 25px;}';
            stylehtml += '.f2-layer .f2-content .f2-close{ background:url(http://i1.umivi.net/v/static/2013/study/images/public_ico.gif) no-repeat; width:11px; height:11px; display:block; overflow:hidden; position:absolute; top:7px; right:7px;}';
            stylehtml += '</style>';

            var pophtml = '';
            //pophtml += '<object style="position: absolute; left: 0px; top: 0px; width: 1903px; height: 6883px; display: block;" id="vpopup_wrap" ></object>';

            pophtml +='<div class="f2-layer" id="vpopup2">';
            pophtml +='<div class="f2-content">';
            pophtml +='<a href="javascript:void(0);" onclick="popupUtil2.cancel();return false;" class="f2-close" title="关闭"></a>';

            pophtml +='<iframe frameborder="0" scrolling="no" id="'+iframeid+'" name="'+iframeid+'" style="border:0;padding:0;margin:0;"></iframe>';
            pophtml +='</div>';
            pophtml +='</div>';
            pophtml = stylehtml + pophtml;
            $('body').append(pophtml);
        }else
        {

            $('#'+this.iframeid).attr('name',iframeid).attr('id',iframeid);
            this.iframeid = iframeid;
        }
        this.inited=true;
        return this;
    },
    message:function(obj,message,timeout,callback)
    {
        if(!this.inited)
        {
            this.init();
        }
        $('#'+this.iframeid).replaceWith('<div id="'+this.iframeid+'">'+message+'</div>');
        if(obj)
        {
            var pos = $(obj).offset();
            $('#vpopup2').show().css({'left':(pos.left-20),'top':(pos.top-5-$('#vpopup2').outerHeight())});

        }else
        {
            var top = $(document).scrollTop()+parseInt(($(window).height()-$('#vpopup2').height())/2);
            var left = $(document).scrollLeft()+parseInt(($(window).width()-$('#vpopup2').width())/2);
            $('#vpopup2').show().css({'left':left,'top':top});
        }

        this.flashplayer_visibility = $("object[name=UmiwiMediaPlayback]").css('visibility');
        $("object[name=UmiwiMediaPlayback]").css('visibility','hidden');


        $(document).keydown(function(event){
            if(event.keyCode == 27){

                popupUtil2.cancel();
            } else if(event.keyCode == 13){
                //popupUtil.login();
            }
        });
        if(timeout && timeout>0)
        {
            setTimeout(function(){popupUtil2.cancel()},timeout);
        }
        if(callback)
        {
            setTimeout(function(){callback()},2000);
        }
        return this;
    },
    show:function(timeout)
    {

        $('#'+this.iframeid).replaceWith('<iframe frameborder="0" scrolling="no" id="'+this.iframeid+'" name="'+this.iframeid+'" style="border:0;padding:0;margin:0;"></iframe>');

        this.flashplayer_visibility = $("object[name=UmiwiMediaPlayback]").css('visibility');
        $("object[name=UmiwiMediaPlayback]").css('visibility','hidden');
        var top = $(document).scrollTop()+200;
        var left = $(document).scrollLeft()+parseInt(($(window).width()-$('#vpopup2').width())/2);

        $('#vpopup2').css({top:top,left:left}).show();

        $(document).keydown(function(event){
            if(event.keyCode == 27){

                popupUtil2.cancel();
            } else if(event.keyCode == 13){
                //popupUtil.login();
            }
        });
        if(timeout && timeout>0)
        {
            setTimeout(function(){popupUtil2.cancel()},timeout);
        }
        return this;

    },
    cancel:function(){
        this.inited=false;
        $('#vpopup2').remove();
        $("object[name=UmiwiMediaPlayback]").css('visibility',this.flashplayer_visibility);
        return this;
    },
    resize:function(wh,obj)
    {
        var w = wh.width;
        var h = wh.height;


        $('#'+this.iframeid).css(wh);

        if(obj)
        {
            var pos = $(obj).offset();
            $('#vpopup2').show().css({'left':(pos.left-20),'top':(pos.top-5-$('#vpopup2').outerHeight())});

        }else
        {
            var top = $(document).scrollTop()+parseInt(($(window).height()-$('#vpopup2').height())/2);
            var left = $(document).scrollLeft()+parseInt(($(window).width()-$('#vpopup2').width())/2);

            $('#vpopup2').show().css({'left':left,'top':top});
        }


    },
    getscript:function (url) {
        url += '&t=' + (new Date).getTime();
        var s, c,  d = document, src = (url.indexOf("?") == "-1" ? url + "?" : url);
        (s = d.createElement("script")).setAttribute("type", "text/javascript");
        s.setAttribute("charset", "UTF-8");
        d.getElementsByTagName("head")[0].appendChild(s).src = src;

        s.onload = s.onreadystatechange = function(){ s.readyState ? s.readyState.toLowerCase() == 'loaded'  : '' };

    }

};