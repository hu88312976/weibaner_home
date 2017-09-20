var passportUtil = {
    ref:'',
    type:'',
    logintitle:'登录优米',
    regtitle:'注册优米',
    bindtitle:'绑定手机',
    showTab:'reg',


    init:function(){
        var curr_host = window.location.hostname;
        if (curr_host.indexOf('v.youmi.cn')=='-1')
        {
            passportUtil.getscript('http://v.youmi.cn/redirect/ref?callback=passportUtil.setref');
        }
        passportUtil.getscript('http://v.youmi.cn/static/js/jquery.validate.js?');
        passportUtil.getscript('http://i3.umivi.net/u/2012/js/jquery.slides.min.js?');

    },
    checkLogin:function(){
        var u = this.getCookieUserinfo();
        console.log('222');

        if(typeof(u) !='object')
        {

            if(true) {
                var stylehtml = '<style>input,select,textarea,button{font-family:arial,verdana,helvetica,PingFangSC,"HanHei SC", STHeitiSC-Light, Microsoft Yahei, sans-serif;}body{font-size:14px;font-family:arial, verdana, helvetica, PingFangSC,"HanHei SC", STHeitiSC-Light, Microsoft Yahei, sans-serif;line-height:26px;}a:hover{color:#ff7b01;text-decoration:none;-webkit-transition:color linear .2s;transition:color linear .2s;}.green{color:#3b9e65;}.gray3{color:#333!important;}.gray6{color:#666!important;}.gray9{color:#999!important;}a.green:hover{color:#3b9e65;text-decoration:underline;}.fs-12{font-size:12px!important;}.bold{font-weight:300;}.bolder{font-weight:400;}.boldest{font-weight:600;}.ta-l{text-align:left;}.ta-c{text-align:center;}.ta-r{text-align:right;}.mt-0{margin-top:0!important;}.mt-32{margin-top:32px;}.mt-40{margin-top:40px;}.wrapper{width:1200px;margin:0 auto;}.input{border:1px solid #e0e0e0;background-color:#fff;height:40px;font-size:14px;color:#333;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;padding:0 15px;}label.error{color:#ff7b01;font-size:14px;display:none;height:32px;line-height:32px;}label.error-tip{line-height:20px;width:180px;top:12px;position:absolute;left:440px;color:#ff7b01;font-size:14px;display:none;}.button{border:1px solid #ff7b01;background-color:#ff7b01;width:100%;height:44px;line-height:45px;font-size:14px;font-weight:700;color:#fff;cursor:pointer;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;letter-spacing:5px;display:inline-block;padding:0 15px;}.button:active{background-color:#d86800;}.button-disable{border:1px solid #e0e0e0;background-color:#e0e0e0;}.line-button{border:1px solid #ff7b01;background-color:#fff;color:#ff7b01;}a.button:hover{color:#fff;}.other-login li a,.show-pwd-button,.hide-pwd-button,.check-row,.bg-btn,.icon-select-arrow .other-login li a{background:url(http://passport.youmi.cn/static/2017/images/ico-login.png) no-repeat;}.text-row{line-height:32px;width:100%;}.form-title{font-size:30px;font-weight:400;letter-spacing:4px;line-height:44px;text-align:center;margin-bottom:30px;}.form-title-m{color:#666;font-size:18px;font-weight:400;line-height:25px;text-align:center;}.form-tab{overflow:hidden;margin-bottom:44px;}.form-tab li{border-bottom:2px solid #f0f0f0;text-align:center;color:#999;font-size:14px;line-height:36px;width:50%;float:left;}.form-tab li a{display:block;color:#999;}.form-tab .active{font-size:16px;font-weight:700;border-bottom:2px solid #ff7b01;}.form-tab .active a{display:block;color:#666;}.form-con{width:540px;}.form-con .input-imgyzm{width:180px;float:left;}.form-con .bg-btn{background-position:-170px 0;}.form-con .input-row{margin-bottom:12px;clear:both;min-height:42px;}.form-con .yzm-imgwrap{width:108px;height:42px;float:left;margin-left:12px;}.form-con .yzm-imgwrap img{width:100%;height:100%;}.form-con .yzm-telwrap{width:332px;position:relative;}.form-con .yzm-telwrap .send-code-button{color:#ff7b01;font-size:12px;position:absolute;right:1px;height:40px;top:1px;border:0;background-color:#fff;cursor:pointer;z-index:1;min-width:86px;padding:0 12px;}.form-con .pwd-wrap{width:100%;position:relative;}.form-con .pwd-wrap:after{content:" ";border-right:1px solid #e0e0e0;height:30px;position:absolute;right:40px;top:6px;}.form-con .pwd-wrap .show-pwd-button,.form-con .pwd-wrap .hide-pwd-button{position:absolute;right:1px;width:38px;height:40px;top:1px;border:0;cursor:pointer;z-index:1;}.form-con .pwd-wrap .show-pwd-button{background-position:0 0;}.form-con .pwd-wrap .show-pwd-button:hover{background-position:-40px 0;}.form-con .pwd-wrap .hide-pwd-button{background-position:0 -40px;}.form-con .pwd-wrap .hide-pwd-button:hover{background-position:-40px -40px;}.form-con .check-row{background-position:0 -160px;color:#666;font-size:14px;line-height:32px;margin-top:10px;display:inline-block;*background:none;*padding-left:0;}.form-con .input-hide:checked + label{background-position:0 -200px;}.form-con .agreement-tip{color:#666;font-size:12px;}.form-con .forget{font-weight:700;float:right;margin-top:10px;}.form-con .form-label{color:#666;font-size:16px;line-height:40px;display:inline-block;float:left;min-width:54px;text-align:right;padding:0 20px;}.form-con .txt-tip{text-align:center;font-size:12px;color:#999;margin-top:6px;}.form-con .txt-tip strong{padding:0 3px;}.tiptxt-box{overflow:hidden;position:absolute;height:32px;line-height:32px;text-align:center;top:8px;width:332px;left:50%;margin-left:-166px;display: block !important;}.select-wrap{position:relative;float:left;}.select-wrap .icon-select-arrow{background-position:0 -120px;width:14px;height:14px;position:absolute;top:14px;right:12px;z-index:10;}.select-wrap .icon-select-arrow:hover{background-position:-40px -120px;}.select-wrap .input{position:relative;z-index:5;}.select-ul{border:1px solid #e0e0e0;border-top:0;background-color:#fff;width:330px;padding-top:12px;position:absolute;left:0;top:42px;z-index:3;}.select-ul li{margin-bottom:12px;}.select-ul li a{display:block;height:34px;line-height:34px;padding:0 15px;}.select-ul li a:hover{color:#fff;background-color:#ff7b01;}.select-tree{position:relative;}.select-tree ul{position:absolute;top:0;left:0;width:166px;max-height:250px;height:250px;}.select-tree ul.tree-2{left:168px;}.select-tree ul.tree-3{left:336px;border-top:1px #e3e7ed solid;height:249px;display:none;}.select-tree ul.tree-3 li{background-image:none;}.select-tree li{display:block;background-position:right -1575px;}.select-tree li.selected{background-color:#f2f5f9;}.select-tree li.blank{background:0 0;color:#ccc;padding-top:50px;text-align:center;}.select-open .icon-select-arrow{background-position:-40px -80px;}.m-form .m-select{height:40px;float:left;width:332px;background-image:url(http://passport.youmi.cn/static/2017/images/ico-login.png);background-repeat:no-repeat;background-position:right -125px;}.m-form .m-select:hover{background-position:right -100px;}.m-form .m-select dt{line-height:40px;border:1px solid #e0e0e0;text-align:left;cursor:pointer;height:40px;width:300px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;padding:0 15px;}.m-form .m-select dd{width:330px;overflow-y:auto;background:#fff;position:absolute;left:0;top:42px;display:none;border:1px solid #e0e0e0;border-top:0;padding-top:12px;z-index:9;}.m-form .m-select dd a{display:block;font-size:14px;line-height:34px;height:34px;margin-bottom:12px;text-decoration:none;-moz-transition:color 0;-o-transition:color 0;-webkit-transition:color 0;transition:color 0;padding:0 15px;}.m-form .m-select dd a:hover{color:#fff;background:#ff7b01;}.m-form .m-focus{background-position:right -66px!important;position:relative;}.m-select-w{width:100px;}.m-select dd.age,.m-select dd.height{width:400px;border:2px solid #E3E3E3;}.m-select dd.age a,.m-select dd.height a{float:left;width:40px;text-align:center;border:none;display:inline-block;text-indent:0;height:24px;line-height:24px;}.m-select dd.region{width:460px;height:200px;border:2px solid #E3E3E3;}.region .tab{height:28px;padding:10px 0 0 10px;}.region .tab li{float:left;height:24px;line-height:24px;border:1px solid #E3E3E3;margin-right:5px;cursor:pointer;padding:0 20px;}.region .tab li.on{border:2px solid #7DB3D4;cursor:default;position:relative;background:#7DB3D4;color:#fff;}.region .tab-con{border-top:2px solid #7DB3D4;position:relative;top:-2px;background:#fff;margin:0 10px 10px;}.m-select dd.region a{float:left;text-align:center;border:none;width:62px;overflow:hidden;display:inline-block;text-indent:0;}.m-form .form-item{position:static;margin-bottom:200px;}#popup_wrap{z-index:999990;background:rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";}#popup{background-color:#fff;clear:both;left:50%;margin-left:0;position:absolute;top:300px;width:800px;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;overflow:hidden;z-index:999992;}#popup .close{background:url(http://passport.youmi.cn/static/2017/images/ico-login.png) no-repeat -145px 0;cursor:pointer;width:24px;height:24px;top:14px;right:14px;position:absolute;z-index:10;overflow:hidden;}.login-slide{width:400px;height:590px;float:left;position:relative;}.login-slide .slides-container{width:400px;height:590px;overflow:hidden;}.login-slide .slides-container .img-wrap{display:block;width:400px;height:590px;overflow:hidden;}.login-slide .slides-container .img-wrap img{display:block;width:100%;height:100%;}.login-slide .pagination{width:100%;height:30px;text-align:center;position:absolute;z-index:99;bottom:12px;margin:0 auto;}.login-slide .pagination li{display:inline-block;height:10px;width:10px;overflow:hidden;margin:0 8px;}.login-slide .pagination li a{background:url(http://passport.youmi.cn/static/2017/images/ico-login.png) no-repeat -120px 0;height:10px;width:10px;display:block;text-indent:-9999px;}.login-slide .pagination .current a{background-position:-120px -16px;}.login-box{background-color:#fff;width:400px;float:left;height:590px;}.login-box .form-tab{width:300px;margin:40px auto 0;}.login-box .form-con-wrap{padding-top:44px;height:280px;overflow:hidden;position:relative;}.login-box .form-con .input{width:268px;}.login-box .form-con .input-imgyzm{width:148px;}.login-box .form-con .go-reg{color:#999;font-size:12px;text-align:right;margin-top:4px;}.login-box .form-con .forget{font-size:12px;}.login-box .form-con .error-tip{width:300px;left:50%;margin-left:-150px;text-align:center;top:13px;}.other-login-box .text-row{color:#999;text-align:center;margin:36px 0 22px;}.other-login-box .other-login{margin-bottom:34px;overflow:hidden;}.other-login-box .other-login li{float:left;margin-right:64px;margin-left:4px;}.other-login-box .other-login li a{color:#666;font-size:12px;text-align:center;line-height:24px;height:24px;width:52px;display:block;padding-top:40px;text-indent:0;}.other-login-box .other-login li.last{margin-right:4px;}.other-login-box .other-login .wx-login{background-position:0 -240px;}.other-login-box .other-login .wx-login:hover{background-position:0 -296px;}.other-login-box .other-login .qq-login{background-position:-60px -240px;}.other-login-box .other-login .qq-login:hover{background-position:-60px -296px;}.other-login-box .other-login .wb-login{background-position:-120px -240px;}.other-login-box .other-login .wb-login:hover{background-position:-120px -296px;}.other-login-box .sign-tip{color:#999;}.orange,a.line-button:hover,.other-login-box .other-login li a:hover{color:#ff7b01;}.hide,.form-con .input-hide{display:none;}.input:focus,.input.error,.input.error-tip,.m-form .m-focus dt{border:1px solid #ff7b01;-moz-box-shadow:0 0 2px #ff7b01;-webkit-box-shadow:0 0 2px #ff7b01;box-shadow:0 0 2px #ff7b01;-moz-transition:border .2s;-o-transition:border .2s;-webkit-transition:border .2s;transition:border .2s;}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder,input:-moz-placeholder,textarea:-moz-placeholder,input::-moz-placeholder,textarea::-moz-placeholder,input:-ms-input-placeholder,textarea:-ms-input-placeholder,.m-form .m-select .s-none{color:#bdbdbd;}.form-con .input,.login-box .form-con .yzm-telwrap,.login-box .form-con .pwd-wrap{width:300px;}.login-box .form-con,.other-login-box{width:300px;margin:0 auto;}.form-con .check-row{padding-left:20px;}input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #bdbdbd;}input:-moz-placeholder, textarea:-moz-placeholder { color: #bdbdbd;}input::-moz-placeholder, textarea::-moz-placeholder { color: #bdbdbd;}input:-ms-input-placeholder, textarea:-ms-input-placeholder { color: #bdbdbd;}</style>';

                var bghtml= '<div style="position: absolute; left: 0px; top: 0px; width: 1903px; height: 6883px; display: block;" id="popup_wrap"></div>';
                var loginhtml = stylehtml+bghtml;

                loginhtml +='<div id="popup">';
                loginhtml +='<a href="javascript:void(0);" onclick="passportUtil.cancel();return false;" class="close" target="_self"></a>';
    loginhtml +='<div class="login">';
        loginhtml +='<div class="login-slide" id="login-slides">';
        loginhtml +='<div class="slides-container">';
            loginhtml += '</div></div>';
        loginhtml +='<div class="login-box form-box">';
            loginhtml +='<ul class="form-tab" id="form-tab">';
                loginhtml +='<li class="active"><a href="javascript:void(0);" target="_self">快捷登录</a></li>';
                loginhtml +='<li><a href="javascript:void(0);" target="_self">密码登录</a></li>';
            loginhtml +='</ul>';
            loginhtml +='<div class="form-con-wrap" id="form-con">';
                loginhtml +='<div class="form-con">';
            loginhtml +='<form id="quickLoginForm" action="" method="post">';
            loginhtml +='<div class="tiptxt-box" id="tipbox1"></div>';
                    loginhtml +='<div class="input-row">';
                        loginhtml +='<input class="input" id="phonenumber" type="text" name="phonenumber" placeholder="请输入手机号码">';
                    loginhtml +='</div>';
                    loginhtml +='<div class="input-row">';
                        loginhtml +='<div class="yzm-telwrap">';
                            loginhtml +='<input class="input" id="phonecode" type="text" name="phonecode" placeholder="请输入验证码">';
                            loginhtml +='<button type="button" class="send-code-button bg-btn" id="sendcaptcha" onclick="layerLogin_l.sendCaptcha()">获取验证码</button>';
                        loginhtml +='</div>';
                    loginhtml +='</div>';
                    loginhtml +='<div class="text-row">';
                        loginhtml +='<input class="input-hide" id="agreement" type="checkbox" checked="checked" name="agreement" placeholder="同意使用协议">';
                            loginhtml +='<label class="agreement-tip check-row" for="agreement">登录成功即视为您阅读并同意优米</label>';
                        loginhtml +='<a href="http://www.youmi.cn/help/questionanswer.shtml#hyxy" class="orange fs-12" target="_blank">《使用协议》</a>';
                    loginhtml +='</div>';
                    loginhtml +='<div class="button_row mt-0">';
                        loginhtml +='<button class="button"  onclick="layerLogin_l.quickLogin();return false;">立即登录</button>';
                    loginhtml +='</div>';
                    loginhtml +='<div class="text-row go-reg">没有账号？<a href="http://passport.youmi.cn/register" class="green" target="_blank"><strong>立即注册</strong></a>';
                    loginhtml +='</div></form>';
                loginhtml +='</div>';
                loginhtml +='<div class="form-con hide">';
                loginhtml +='<form id="passwordLoginForm" action="" method="post">';
                loginhtml +='<div class="tiptxt-box" id="tipbox2"></div>';
                    loginhtml +='<div class="input-row">';
                        loginhtml +='<input class="input" id="mobilenumber" type="text" name="mobilenumber" placeholder="请输入账号或手机号">';
                    loginhtml +='</div>';
                    loginhtml +='<div class="input-row">';
                        loginhtml +='<div class="pwd-wrap">';
                            loginhtml +='<input class="input" id="password" type="password" name="password" placeholder="请输入密码">';
                            loginhtml +='<button type="button" id="showPassword" class="show-pwd-button" onclick="layerLogin_l.showPassword()"></button>';
                        loginhtml +='</div>';
                    loginhtml +='</div>';
                    loginhtml +='<div class="text-row">';
                        loginhtml +='<input class="input-hide" id="expire" type="checkbox" checked name="expire" value="315360000" placeholder="下次自动登录">';
                            loginhtml +='<label class="check-row" for="expire">下次自动登录</label>';
                        loginhtml +='<a class="forget green" href="http://passport.youmi.cn/retrieve">忘记密码</a>';
                    loginhtml +='</div>';
                    loginhtml +='<div class="button_row">';
                        loginhtml +='<button class="button"  onclick="layerLogin_l.passwordLogin();return false;">立即登录</button>';
                    loginhtml +='</div>';
                    loginhtml +='<div class="text-row go-reg">没有账号？<a href="http://passport.youmi.cn/register/" class="green" target="_blank"><strong>立即注册</strong></a>';
                    loginhtml +='</div>';
                loginhtml +='</div>';
            loginhtml +='</form>';
            loginhtml +='</div>';

            loginhtml +='<div class="other-login-box">';
                loginhtml +='<p class="text-row">其他方式登录</p>';
                loginhtml +='<ul class="other-login">';
                    loginhtml +='<li>';
                        loginhtml +='<a class="wx-login" href="javascript:void(0);" onclick="thirdLogin_l.goWeChat();">微信登录</a>';
                    loginhtml +='</li>';
                    loginhtml +='<li>';
                        loginhtml +='<a class="qq-login" href="javascript:void(0);" onclick="thirdLogin_l.oauthLogin(4)">QQ登录</a>';
                    loginhtml +='</li>';
                    loginhtml +='<li class="last">';
                        loginhtml +='<a class="wb-login" href="javascript:void(0);" onclick="thirdLogin_l.oauthLogin(2)">微博登录</a>';
                    loginhtml +='</li>';
                loginhtml +='</ul>';
            loginhtml +='</div>';
        loginhtml +='</div>';

                if (!$('#popup')[0]) {
                    $('body').append(loginhtml);
                    // 表单验证 ===============================
                    var quickValidate = $( "#quickLoginForm" ).validate({
                        focusInvalid: true,
                        errorContainer: "div.tiptxt-box",
                        errorLabelContainer: $("#quickLoginForm div.tiptxt-box"),
                        wrapper: "li",
                        rules: {
                            phonenumber: {
                                required:true,
                                mobile:true
                            },
                            phonecode: {
                                required:true
                            }
                        },
                        messages: {
                            phonenumber: {
                              required: "请输入手机号码",
                              mobile: "请输入正确的手机号码"
                            },
                            phonecode: {
                                required: "请输入短信验证码"
                            }
                        },
                        onfocusout:function(){
                            $('span.error').hide();
                        },
                        submitHandler: function(form) {
                            //alert("验证通过");
                            layerLogin_l.quickLogin();

                        }
                    });

                    var passwordValidate = $( "#passwordLoginForm" ).validate({
                        focusInvalid: true,
                        errorContainer: "div.tiptxt-box",
                        errorLabelContainer: $("#passwordLoginForm div.tiptxt-box"),
                        wrapper: "li",
                        rules: {
                            mobilenumber: {
                                required:true
                            },
                            password: {
                                required:true
                            }
                        },
                        messages: {
                            mobilenumber: {
                              required: "请输入手机号码或用户名或邮箱"
                            },
                            password: {
                              required: "请输入密码"
                            }
                        },
                        submitHandler: function(form) {
                            //alert("验证通过");
                            layerLogin_l.passwordLogin();
                        }
                    });
                    jQuery.validator.addMethod("mobile", function(value, element) {
                        return /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value);
                    }, "请输入正确的手机号");
                }
                //this.setInit();
console.log('3333');
                var top = $(document).scrollTop()+parseInt(($(window).height()-590)/2);
                var left = $(document).scrollLeft()+parseInt(($(window).width()-800)/2);
                var bgtop = $(document).scrollTop();
                var bgleft = $(document).scrollTop();
console.log($('#popup_wrap'));
                $('#popup_wrap').show().css({width:$(document).width(),height:$(document).height()});
                $('#popup').show().css({top:top,left:left});

                $(document).keydown(function(event){
                    if(event.keyCode == 27){
                        passportUtil.cancel();
                    } else if(event.keyCode == 13){
                        //passportUtil.login();
                        return false;
                    }
                });

                passportUtil.fillSlide();

                // tab 注册登录切换
                $('#form-tab li').click(function() {
                    var i = $(this).index();
                    console.log(i);
                    $(this).addClass('active').siblings().removeClass('active');
                    $('#form-con .form-con').eq(i).removeClass('hide').siblings().addClass('hide');
                });
            }
            return false;
        }
        return true;
    },
    showreg:function(){
        totalReg.setInit();
        passportUtil.showTab = 'reg';
        $('#reg_phone_code').hide();$('#reg_image_code').hide();
        $('#pop_box_login').hide();$('#pop_box_register').show();$('#pop_box_bind').hide();$('#popup_login_title').html(this.regtitle);
    },
    showlogin:function(){
        passportUtil.showTab = 'login';
        $('#pop_box_login').show();$('#pop_box_register').hide();$('#pop_box_bind').hide();$('#popup_login_title').html(this.logintitle);
    },
    showbind:function(){
        totalReg.setInit();
        passportUtil.showTab = 'bind';
        $('#bind_image_code').hide();totalReg.regType = 'mobile';
        $('#pop_box_login').hide();$('#pop_box_register').hide();$('#pop_box_bind').show();$('#popup_login_title').html(this.bindtitle);
    },
    setInit:function(){
        $('#login_wrong').hide();
        $('#login_tag').show();
        $('#cwts').hide();
        $('object[name=UmiwiMediaPlayback]').css('visibility', 'hidden');
        $('embed[name=UmiwiMediaPlayback]').css('visibility', 'hidden');
    },

    ChkPopup:function() {
        if($('#popup').is(':visible') || $('#popup_wrap').is(':visible')){
            var u = this.getCookieUserinfo();
            if(typeof(u) == 'object'){
                if (passportUtil.showTab == 'reg' && totalReg.regType == 'mobile') {
                    window.clearInterval(passportUtil.handle);
                    $('#popup').html('<h2><a href="javascript:void(0);" onclick="passportUtil.cancel();return false;" class="close" target="_self"></a><em id="popup_login_title">注册成功</em></h2><div class="pop_box"><div class="successPrompt">hi,<span>'+decodeURIComponent(passportUtil.getCookieUserinfo().UN)+'</span><br />欢迎加入优米，现在你可以选择：</div><ul class="selectlist"><li>1、500节免费片库随意看，就是这么任性！<span><a href="http://v.youmi.cn/course/index/?catid=&tutoruid=&tutor=&newprice=1&orderby=&click=324" target="_blank">去看课</a></span></li><li>2、200元现金券礼包，可免费看付费课程！<span><a href="http://v.youmi.cn/home/mycoupon/?click=324" target="_blank">立即查看</a></span></li></ul></div>');
                    return true;
                }
                if (passportUtil.showTab == 'bind' && passportUtil.getCookieUserinfo().MB == 1) {
                    window.clearInterval(passportUtil.handle);
                    $('#popup').html('<h2><a href="javascript:void(0);" onclick="passportUtil.cancel();return false;" class="close" target="_self"></a><em id="popup_login_title">绑定成功</em></h2><div class="pop_box"><div class="successPrompt">hi,<span>'+decodeURIComponent(passportUtil.getCookieUserinfo().UN)+'</span><br />欢迎加入优米，现在你可以选择：</div><ul class="selectlist"><li>1、500节免费片库随意看，就是这么任性！<span><a href="http://v.youmi.cn/course/index/?catid=&tutoruid=&tutor=&newprice=1&orderby=&click=324" target="_blank">去看课</a></span></li><li>2、200元现金券礼包，可免费看付费课程！<span><a href="http://v.youmi.cn/home/mycoupon/?click=324" target="_blank">立即查看</a></span></li></ul></div>');
                    return true;
                }
                if (passportUtil.getCookieUserinfo().MB == 0) {
                    window.clearInterval(passportUtil.handle);
                    passportUtil.showbind();
                } else {
                    passportUtil.cancel();
                    if (passportUtil.showTab == 'bind') {
                        passportUtil.tip('succ','绑定成功...');
                    } else {
                        passportUtil.tip('succ','登录成功...');
                    }
                    passportUtil.callback({'code':'succ'});
                }
            }
        }
    },
    setCallback:function(obj){
        passportUtil.customcallback = obj;
    },

    checkBind:function() {
        this.getscript('http://passport.youmi.cn/mobile/isbind?callback=passportUtil.callbackCheckBind');
    },
    callbackCheckBind:function(obj) {

    },
    customcallback:function(data){
        //登陆成功后没有设置回调函数会走此处
    },
    login:function(){
        var username = document.getElementById('login_username').value;
        var pw = document.getElementById('login_password').value;
        var chkparam = true;
        if(!pw) {
            $('#login_tag').hide();
            $('#login_wrong').show();
            $('#login_wrong .t_wrong').html('密码不能为空');
            chkparam = false;
        }
        if(!username){
            $('#login_tag').hide();
            $('#login_wrong').show();
            $('#login_wrong .t_wrong').html('账户不能为空');
            chkparam = false;
        }
        if(!chkparam) {
            return '';
        }

        var password = $.md5(pw);

        var expire  = document.getElementById('login_expire').value;
        var url = 'http://passport.youmi.cn/login/login/?username='+encodeURIComponent(username)+'&password='+password+'&expire='+expire+'&callback=passportUtil.callback';
        passportUtil.type = 'login';
        this.getscript(url);
    },
    logout:function() {
        var url =  'http://passport.youmi.cn/login/logout/?go='+encodeURI( window.location.href );
        window.location.href=url;
    },
    setref:function(r){
        this.ref = r;
    },
    getref:function(){
        return this.ref ? this.ref : passportUtil.getCookie('ref');
    },
    fillSlide:function(){
        var html = '';
        $.getScript('http://www.youmi.cn/section/2361.html?callback=passportUtil.slideCallback');
    },
    slideCallback:function(data){
        console.log(data);
        var result = data;
        // var html = '<div class="login-slide" id="login-slides">\
        //                 <div class="slides-container">';
        var html = '';
        for(var i in result){
            if(result[i]){
                if(result[i][0]){
                    if(result[i][0].url == ''){
                        result[i][0].url = 'javascript:void(0)';
                    }
                    html += '<a class="img-wrap" href="'+result[i][0].url+'"><img src="'+result[i][0].thumb+'" alt="'+result[i][0].title+'"></a>';
                }

            }
        }
        // html += '</div></div>'
        $('.slides-container').html(html);
        // 轮播
                $("#login-slides").slides({

                    container: 'slides-container',
                    generatePagination:true,
                    preload: true,
                    preloadImage: 'http://i3.umivi.net/u/2012/index/images/loading.gif',
                    play: 4000,
                    pause: 1500,
                    hoverPause: true
                });
    },

    callbackData:{},//可以设置回调函数中的参数以便处理自己的逻辑
    callback:function(data){
        console.log(data);
        if(data.code == 'fail'){
            $('#login_tag').hide();
            $('#login_wrong').show();
            $('#login_wrong .t_wrong').html(data.msg);
            return '';
        }
        if (data.code == 'succ') {
            if (passportUtil.getCookieUserinfo().MB == 0) {
                window.clearInterval(passportUtil.handle);
                passportUtil.showbind();
            } else {
                this.customcallback(passportUtil.callbackData);
            }
        }
        // return '';
    },
    logincallback:function(data){
        console.log(data);
        if(data.e == '9999'){
            passportUtil.cancel();
            return false;
        }

        // return '';
    },
    showbind:function(){
        // totalReg.setInit();
        // passportUtil.showTab = 'bind';
        // $('#bind_image_code').hide();totalReg.regType = 'mobile';
        // $('#pop_box_login').hide();$('#pop_box_register').hide();$('#pop_box_bind').show();$('#popup_login_title').html(this.bindtitle);
        window.location.href = 'http://passport.youmi.cn/oauth/bindmobile';
    },
    customcallback:function(data){
        //登陆成功后没有设置回调函数会走此处
    },
    cancel:function(){
        $('#popup_wrap').hide();
        $('#popup').hide();
        $('object[name=UmiwiMediaPlayback]').css('visibility', 'visible');
        $('embed[name=UmiwiMediaPlayback]').css('visibility', 'visible');
        window.clearInterval(passportUtil.handle);
        passportUtil.customcallback(passportUtil.callbackData);
        return false;
    },
    getCookieUserinfo:function()
    {
        var U = this.getCookie('U');
        if(!U)
        {
            return false;
        }
        var a = U.split('&');
        if(a.length<2)
        {
            return false;
        }
        var info = {};
        var b;
        for(var i=0;i<a.length;i++)
        {
            b = a[i].split('=');
            info[b[0]]=decodeURI( b[1] );
        }
        return info;
    },
    getCookie:function(name)
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
    },
    setCookie:function(cookiename, cookievalue){
        var date = new Date();
        date.setTime(date.getTime() + Number(87600) * 3600 * 1000);
        document.cookie = cookiename + "=" + cookievalue + "; path=/;domain=youmi.cn;expires = " + date.toGMTString();
    },
    codehtml:{
        'audit':'<div class="PopupBox_c"><span class="success"></span>',
        'succ':'<div class="PopupBox_c"><span class="success"></span>',
        'fail':'<div class="PopupBox_c"><span class="failure"></span>',
        'same':'<div class="PopupBox_c"><span class="success"></span>',
        'wait':'<div class="PopupBox_c"><img src="http://mili.umiwi.com/static/css/mili/images/loading.gif" class="loading" />'
    },
    tip:function(code, msg, obj )
    {
        if(typeof code == 'undefined')return;
        if(typeof msg == 'undefined')
        {
            msg='';
        }
        if(code=='wait')
        {
            if(msg=='')msg='加载中...';
        }

        var pophtml = '<div class="PopupBox" id="PopupBox" style="display:none;"><div class="PopupBox_c"><span class="success"></span>同问成功！</div></div>';
        if(!$('#PopupBox')[0]) {
            $('body').append(pophtml);
        }

        $('#PopupBox').html(this.codehtml[code]+msg+'</div>');

        if(obj)
        {
            var pos = $(obj).offset();

            $('#PopupBox').show().css({'left':(pos.left-20),'top':(pos.top-5-$('#PopupBox').outerHeight())});
        }else
        {
            var top = $(document).scrollTop()+parseInt(($(window).height()-$('#PopupBox').height())/2);
            var left = $(document).scrollLeft()+parseInt(($(window).width()-$('#PopupBox').width())/2);
            $('#PopupBox').show().css({'left':left,'top':top});
        }
        if(code=='succ'|| code=='fail' || code=='same' || code == 'audit')
        {

            if(typeof MsgHandle != 'undefined')
            {
                clearTimeout(MsgHandle);
            }
            MsgHandle = setTimeout(function(){$('#PopupBox').fadeOut(500);},1000);
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
}
passportUtil.init();



// 登录接口 ===============================
var layerLogin_l={
    outTimePass:60,
    phoneNumber:'',
    sendBtnState:false,
    sendMessageInfo:'获取验证码',
    sendCodeState:true,
    timePass:'',
    remoteCheckTag:false,
    expire:315360000,
    init:function(){
        //layerLogin_l.changeCaptcha();
    },
    // 快捷登录
    quickLogin:function(){
        var phonenumber = $('#phonenumber').val(),
            //imgcode = $('#imgcode').val(),
            phonecode = $('#phonecode').val(),
            expire = 0;

            if(layerLogin_l.checkMobile(true) && layerLogin_l.checkAgree(true)){
                passportUtil.getscript('http://passport.youmi.cn/login/quicklogin?callback=passportUtil.logincallback&mobile='+ phonenumber +'&expire='+expire+'&captcha='+phonecode);

                /*$.getJSON('http://passport.youmi.cn/login/quicklogin?mobile='+ phonenumber +'&expire='+expire+'&captcha='+phonecode,function(result){
                    console.log(result);

                    if(result.e =='9999'){
                        window.location.reload();
                        // window.location.href='<?php echo $this->destUrl;?>';
                    }else{
                        layerLogin_l.setWrongTip('1',result.m);
                    }
                    return ;
                })*/
            }
    },
    // 密码登录
    passwordLogin:function(){
        var username = $('#mobilenumber').val();
        var userpassword = $('#password').val();

        if($('#expire')[0].checked){
            var expire = $('#expire').val();
        }else{
            var expire = 0;
        }

        if($.trim(username)==''){
            layerLogin_l.setWrongTip('2','请输入手机号码或用户名或邮箱');
            //$('#username').focus();
            return false;
        }
        if($.trim(userpassword)==''){
            layerLogin_l.setWrongTip('2','请输入密码');
            //$('#password').focus();
            return false;
        }

        if(layerLogin_l.checkMobile2(true) && layerLogin_l.checkAgree(true)){
            passportUtil.getscript('http://passport.youmi.cn/login/login?callback=passportUtil.logincallback&username='+username+'&password='+$.md5(userpassword)+'&expire='+expire);

            /*$.getJSON('http://passport.youmi.cn/login/login/?username='+username+'&password='+$.md5(userpassword)+'&expire='+expire,function(result){
                console.log(result);
                if(result.e == 'duplicate'){
                    if(result.method=='email'||result.method=='username')
                    {
                        window.location.href = '/duplicate/'+result.method+'/';
                    }
                    return ;
                }
                if(result.e == 'inactive'){
                    window.location.href = '/succ.php?inactive=1';
                    return;
                }
                if(result.e =='9999'){
                    window.location.reload();
                    // window.location.href='<?php echo $this->destUrl;?>';
                }else{
                    layerLogin_l.setWrongTip('2',result.m);
                }
            });*/
        }
    },
    setWrongTip:function(num,str){
        if (num == '1') {
            $('#tipbox1').html('<label class="error" style="display: inline;">'+str+'</label>');
        }else{
            $('#tipbox2').html('<label class="error" style="display: inline;">'+str+'</label>');
        }
    },
    sendCaptcha:function(){
        var mobile = $('#phonenumber').val();
        $('.send-code-button bg-btn').addClass('gray9').attr('disabled',true);
        console.log('获取');
        if(layerLogin_l.checkMobile(true) && layerLogin_l.checkAgree(true)){
            $.getJSON('http://passport.youmi.cn/mobile/newsend/?source=app&act=login&mobile='+ mobile,function(result){
                console.log(result);
                if(result.e == '9999'){
                    layerLogin_l.disablesend();
                }
                else{
                    layerLogin_l.setWrongTip('1',result.m);
                    layerLogin_l.enablesend();
                }

            });
        }
    },
    // 验证快捷登录手机号格式
    checkMobile:function(remoteCheck){
        var mobile = $('#phonenumber').val();

        var vr = $("#quickLoginForm").validate().element($("#phonenumber"));

        if(vr == true){
            return true;
            console.log(vr);
        }
    },
    // 验证密码登录手机号邮箱用户名格式
    checkMobile2:function(remoteCheck){
        var mobile = $('#mobilenumber').val();

        var vr = $("#passwordLoginForm").validate().element($("#mobilenumber"));

        if(vr == true){ return true;}
    },
    // 验证密码登录密码格式
    checkPassword:function(remoteCheck){
        var vr2 = $("#quickLoginForm").validate().element($("#password"));

        if(vr2 == true){ return true;}
    },
    // 验证使用协议
    checkAgree:function(){
        if(document.getElementById('agreement').checked){
            return true;
        }else{
            layerLogin_l.setWrongTip('1','请阅读并同意用户协议');
            console.log('请阅读并同意用户协议');
        }
    },
    disablesend:function(){
        console.log('60');
        $('#sendcaptcha').html((layerLogin_l.outTimePass--)+'秒后重发').attr('onclick','').addClass('gray9');
        window.timerhand = setInterval("layerLogin_l.sendtimer()", 1000);
        setTimeout(function(){
            layerLogin_l.enablesend();
        }, 60000);
    },
    enablesend:function()
    {
        window.clearInterval(window.timerhand);
        $('#sendcaptcha').html('获取验证码').attr('onclick','layerLogin_l.sendCaptcha()').removeClass('gray9').attr('disabled',false);
    },
    sendtimer:function(){
        $('#sendcaptcha').html((layerLogin_l.outTimePass--)+'秒后重发');
    },
    // 更新图片验证码
    // changeCaptcha:function(){
    //  var img_randcaptcha = $('#reg_image_code').find('img');
    //  img_randcaptcha.attr('src','http://passport.youmi.cn/include/showcaptcha/?w=62&h=24&s=12&x='+Math.random());
    // },
    showPassword:function(){
        var inputtype = $('#password').attr('type');
        if(inputtype == 'text'){
            console.log('input');
            document.getElementById('password').setAttribute('type','password');
            $('#showPassword').removeClass('hide-pwd-button').addClass('show-pwd-button');
        }else{
            console.log('text');
            document.getElementById('password').setAttribute('type','text');
            $('#showPassword').removeClass('show-pwd-button').addClass('hide-pwd-button');
        }
    },
    run:function(){
        this.init();
    }
}
layerLogin_l.run();

var thirdLogin_l = {
    oauthLogin:function(id){
        //以下为按钮点击事件的逻辑。注意这里要重新打开窗口
        //否则后面跳转到QQ登录，授权页面时会直接缩小当前浏览器的窗口，而不是打开新窗口
        if(id==1){var w=450;h=320;}
        if(id==2){var w=650;h=360;}
        if(id==3){var w=450;h=320;}
        if(id==4){var w=570;h=460;}

        var A = window.open("http://passport.youmi.cn/login/oauth/?to="+id+"&do=login","WinLogin",
        "width="+w+",height="+h+",left="+parseInt((screen.availWidth -  w)/2-50)+",top="+parseInt((screen.availHeight - h)/2-50)+",menubar=0,scrollbars=0,resizable=1,status=0,titlebar=0,toolbar=0,location=0");
    },
    goWeChat:function(){
        var w=600;h=650;
        var A = window.open("http://passport.youmi.cn/weixin/wxsweepcode?&do=login","WinLogin",
        "width="+w+",height="+h+",left="+parseInt((screen.availWidth -  w)/2-50)+",top="+parseInt((screen.availHeight - h)/2-50)+",menubar=0,scrollbars=0,resizable=1,status=0,titlebar=0,toolbar=0,location=0");


        var myCallback = function(event) {
            if (event.url.indexOf('wxcallbackpc') > 0) {
                alert(event.url);
                window.location.reload();
            }
        }
        A.addEventListener('loadstart', myCallback);
        // window.location.href="http://passport.youmi.cn/weixin/wxsweepcode";
    }
}






