var popupUtil = {
    iframeid:'',
    init:function(iframeid, h2class){
        
        if(!$('#vpopup')[0])
        {
            if(!iframeid){iframeid = 'vpopup_iframe';}
            this.iframeid = iframeid;
            var stylehtml = '<style>';
            stylehtml += '#vpopup_wrap{z-index:999990; background:rgba(0, 0, 0, 0.6); filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);';
            stylehtml += ' -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";}';
            stylehtml += '#vpopup h2 .close, .pop_box .button, .pop_box .button_fd, .loginlist li span, .pop_login li.cwts em{ background:url(http://passport.umiwi.com/static/img/layer_sprite.jpg) no-repeat;}';
            stylehtml += '#vpopup { z-index:999991; clear:both; left:50%; margin-left:0px; position:absolute; top:300px; width:auto; z-index:999992;}';
            stylehtml += '#vpopup h2{ z-index:999992; background:#2b9617; height:40px; line-height:40px; padding-left:15px; color:#fff; font-size:16px; font-weight:normal; overflow:hidden; width:548px; }';
            stylehtml += '#vpopup h2 .close { background:url(http://i3.umivi.net/u/2014/public/images/public_ico.png) no-repeat 0 -450px; cursor:pointer; float:right; width:15px; height:15px; margin:11px 11px 0 0; _display:inline; z-index:999992; overflow:hidden;}';
            stylehtml += '#vpopup .pop_line{ background:url(http://passport.umiwi.com/static/img/layer_btbg.jpg) no-repeat bottom center; clear:both; height:12px; margin-bottom:30px;}';
            stylehtml += '#vpopup .pop_box{ width:560px; background:#fff; padding:0;margin:0; border-top:0;}';
            stylehtml += '</style>';

            var pophtml = '';
            pophtml += '<object style="position: absolute; left: 0px; top: 0px; width: 1903px; height: 6883px; display: block;" id="vpopup_wrap" ></object>';

            pophtml +='<div id="vpopup">';
            pophtml +='<h2 id="vpopup_title" class="'+h2class+'"><a href="javascript:void(0);" onclick="popupUtil.cancel();return false;" class="close"></a></h2>';
            pophtml +='<div class="pop_box">';
            pophtml +='<iframe frameborder="0" scrolling="no" id="'+iframeid+'" name="'+iframeid+'" style="border:0;padding:0;margin:0;"></iframe>';

            pophtml +='</div>';
            pophtml +='</div>';

            pophtml = stylehtml + pophtml;
            $('body').append(pophtml);
        }else
        {   
            if(h2class)
            {
                $('#vpopup_title').addClass(h2class);
            }
            else
            {
                $('#vpopup_title').removeClass(h2class);
            }
            
            $('#'+this.iframeid).attr('name',iframeid).attr('id',iframeid);
            this.iframeid = iframeid;
        }
        return true;
    },

    
    show:function(title)
    {
        if(title)
        {
            this.setTitle(title);
        }
        this.flashplayer_visibility = $("object[name=UmiwiMediaPlayback]").css('visibility');
        $("object[name=UmiwiMediaPlayback]").css('visibility','hidden');
        var top = $(document).scrollTop()+80;
        var left = $(document).scrollLeft()+parseInt(($(window).width()-570)/2);

        $('#vpopup_wrap').show().css({width:$(document).width(),height:$(document).height()});
        $('#vpopup').show().css({top:top,left:left});

        $(document).keydown(function(event){
            if(event.keyCode == 27){

                popupUtil.cancel();
            } else if(event.keyCode == 13){
                //popupUtil.login();
            }
        });

    },
    showdiv:function(title, html)
    {
        if(title)
        {
            this.setTitle(title);
        }
        this.flashplayer_visibility = $("object[name=UmiwiMediaPlayback]").css('visibility');
        $("object[name=UmiwiMediaPlayback]").css('visibility','hidden');
        var top = $(document).scrollTop()+80;
        var left = $(document).scrollLeft()+parseInt(($(window).width()-570)/2);

        $('#vpopup_wrap').show().css({width:$(document).width(),height:$(document).height()});
        $('#vpopup').show().css({top:top,left:left});
        $('#vpopup').html(html);
        $(document).keydown(function(event){
            if(event.keyCode == 27){

                popupUtil.cancel();
            } else if(event.keyCode == 13){
                //popupUtil.login();
            }
        });

        
        
    },
    setTitle:function(title)
    {
        $('#vpopup_title').html('<a href="javascript:void(0);" onclick="popupUtil.cancel();return false;" class="close"></a>'+title);
    },
    cancel:function(){
        //$('#vpopup_wrap').hide();
        //$('#vpopup').hide();
        $('#vpopup_wrap').remove();
        $('#vpopup').remove();
        $("object[name=UmiwiMediaPlayback]").css('visibility',this.flashplayer_visibility);

        return false;
    },
    resize:function(wh)
    {
        var w = wh.width;
        var h = wh.height;

        $('#vpopup').css(
            {height:(h+$('#vpopup_title').height()), width:w}
        );
        $('#vpopup .pop_box').css(wh);
        $('#'+this.iframeid).css(wh);
        $('#vpopup_title').css({width:w-15});


        var top = $(document).scrollTop()+80;
        var left = $(document).scrollLeft()+parseInt(($(window).width()-w)/2);
        $('#vpopup').css({top:top,left:left});

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