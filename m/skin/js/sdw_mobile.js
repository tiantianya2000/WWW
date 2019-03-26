
function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);
    if (objHours != 0) {
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
        str += "; path=/";
    }
    document.cookie = str;
}
function delCookie(cname)//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
{
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = cname + "=a; expires=" + date.toGMTString();
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
        return false;
    }
    return false;
}

function reset() {
    $("#tForm").find("input[type=text]").each(function() {
        $(this).val('');
    });
    $("#txtContent").val('');
}

function getSelectedValue(ddlElmId) {
    var opts = $("#" + ddlElmId + ">option");
    var rtnVal = "";
    opts.each(function(i) {
        if (this.selected) {
            rtnVal = this.value;
        }
    });
    return rtnVal;
}
function reset() {
    $("#tForm").find("input[type=text]").each(function() {
        $(this).val('');
    });
    $("#txtshortdesc").val('');
}

function submit() {
    var contact = $("#txtName").val().trim(); //联系人
    var tel = $("#txtmobile").val().trim(); //电话
    var email = $("#txtEmail").val().trim(); //电话
    var desc = $("#txtshortdesc").val().trim(); //电话
  
    if (contact.length < 1) {
        $("#MsgInfo").text("联系人不能为空！");
        return;
    }
    if (tel.length < 1) {
        $("#MsgInfo").text("联系电话不能为空！");
        return;
    }
    if (desc.length < 1 || desc == "您的需求：") {
        $("#MsgInfo").text("需求不能为空！");
        return;
    }
    var partten = /^1\d{10}$/;
    var ptn = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    if (!(partten.test(tel) || ptn.test(tel))) {
        $("#MsgInfo").text("联系电话格式错误！");
        return;
    }
   
    $("#MsgInfo").text("正在提交，请稍候...");
    $.post("/ajax.ashx?action=subLeavewords&t=" + Math.random(), {
        name: contact,
        phone: tel,
        email: email,
        desc: desc
 
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            //重置
            reset();

            $("#MsgInfo").text(gav(msg, "msg"));
        }
        else {
            $("#MsgInfo").text(gav(msg, "msg"));
        }
        showBgProc(false);
    });
}


function liuy() {
    var contact = $("#txtlianx").val().trim(); //联系人
    var tel = $("#txttel").val().trim(); //电话
    var stxtime = $("txttime").val();
  
    if (contact.length < 1) {
        $("#MsgInfos").text("联系人不能为空！");
        return;
    }
    if (tel.length < 1) {
        $("#MsgInfos").text("联系电话不能为空！");
        return;
    }
//    if (desc.length < 1 || desc == "您的需求：") {
//        $("#MsgInfo").text("需求不能为空！");
//        return;
//    }
    var partten = /^1\d{10}$/;
    var ptn = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    if (!(partten.test(tel) || ptn.test(tel))) {
        $("#MsgInfos").text("联系电话格式错误！");
        return;
    }

    $("#MsgInfos").text("正在提交，请稍候...");
    $.post("/ajax.ashx?action=IndexsendLeaveword&t=" + Math.random(), {
          time: stxtime,
          name: contact,
          phone: tel

    }, function (msg) {
        if (gav(msg, "state") == "1") {
            //重置
            reset();
            $("#MsgInfos").text(gav(msg, "msg"));
        }
        else {
            $("#MsgInfos").text(gav(msg, "msg"));
        }
        showBgProc(false);
    });
}
$(function () {
    $(".j-slide-not,.j-slide-auto,.j-slide-np").each(function () {
        var clone_text = $(this).find('.m-box').clone();
        $("<div class='sclwrap_box' style='position:relative;'></div>").insertAfter($(this).find('.m-box').get(0));
        $(this).find('.m-box').remove();
        $(this).find('.sclwrap_box').append(clone_text);
    });
    productListHandle();
    DetailsAutoImgbox();
   // footerKefu();
    clearWordHandle();
    scrollBar();
    scrollBarAuto();
    Changebox();
    /*底部浮动社交栏收缩*/
    $("#u-down").click(function () {
        $(this).hide().siblings('#u-up').show(100);
        $(".m-so").animate({ bottom: '-79px' }, 100).fadeOut();
        $(".m-bmu").css("padding", "20px 0 20px 0");
    });
    $("#u-up").click(function () {
        $(this).hide().siblings('#u-down').show(100);
        $(".m-so").show().animate({ bottom: '0' }, 100);
        $(".m-bmu").css("padding", "20px 0 100px 0");
    });
    /*底部浮动2社交栏收缩*/
    $(".social_nav2 .btn").click(function () {
        $(this).siblings(".social2").animate({ width: "0" }, 200).hide(500);
        $(this).parent(".social_nav2").animate({ width: "18px" }, 200);
        $(this).hide().next().show();
    })
    $(".social_nav2 .btn2").click(function () {
        $(this).parent().find(".social2").animate({ width: "288px" }, 200).show();
        $(this).parent(".social_nav2").animate({ width: "306px" }, 200);
        $(this).hide().prev().show();
    });
    /*底部浮动社交栏收缩*/
    $(".social_nav3 .btn").click(function () {
        $(this).siblings(".social3").animate({ width: "0" }, 200).hide(500);
        $(this).parent(".social_nav3").animate({ width: "18px" }, 200);
        $(this).hide().next().show();
    })
    $(".social_nav3 .btn2").click(function () {
        $(this).parent().find(".social3").animate({ width: "288px" }, 200).show();
        $(this).parent(".social_nav3").animate({ width: "306px" }, 200);
        $(this).hide().prev().show();
    });
    /*底部浮动社交栏结束*/
    /**/
});
function DetailsAutoImgbox() {
    if ($("body").attr("id") == "Details_Page") {
        var HasSlide_1 = $('.j-slide-np').hasClass("pro_gd");
        var HasSlide_2 = $('.m-rec').hasClass("j-slide-np");
        var HasSlide_3 = $('.m-pp').hasClass("j-slide-np");
        if (HasSlide_1 == true || HasSlide_3 == true) {
            var Auto_Imgbox = $("#Details_Page .m-slicon .j-slide-np,#Details_Page .m-pp.j-slide-np");
            var ImgHeight = $(Auto_Imgbox).find("img").css("height");
            ImgHeight = parseInt(ImgHeight) + 20;
            $(Auto_Imgbox).find(".sclwrap_box").css("height", ImgHeight + "px");

        }
        if (HasSlide_2 == true) {
            var Auto_Imgbox2 = $("#Details_Page .m-rec.j-slide-np");
            var ImgHeight2 = $(Auto_Imgbox2).find("img").css("height");
            ImgHeight2 = parseInt(ImgHeight2) + 40;
            $(Auto_Imgbox2).find(".sclwrap_box").css("height", ImgHeight2 + "px");
        }
    }
};


//输入框获取焦点清除文字
function clearWordHandle() {
    $('#se_key,.textpass input,.clear_word').each(function () {
        this.onfocus = function () {
            $(this).css('color', '#666666');
            if ($(this).val() == this.defaultValue) {
                $(this).val("");
            }
        }
        this.onblur = function () {
            $(this).css('color', '#D0D0D0');
            if ($(this).val() == '') {
                $(this).val(this.defaultValue);
            }
        }
    });
}

// 商品列表收缩操作
function productListHandle() {
   
    /*商品列表页面二级收缩*/
    $('.CategoryLista li a').bind("click", function (e) {
        e.stopPropagation();
    });
    var list_1 = $('.CategoryLista>li>a');
    list_1.bind('click', function () {
      
        var dis = $(this).parent('li').find('.list1');
        //dis.css('display', "block");
        if (dis.css("display") == 'none' || dis.css("display") == '') {
            list_1.parent('li').find('.list1').hide();
            list_1.removeClass('icon-arrow-down');
            list_1.find('a').removeClass('hover');
            $(this).parent('li').find('.list1').show();
            $(this).addClass('on');
            $(this).find('a').addClass('hover');
            $('.CategoryLista li ul ul,.CategoryLista li div ul').hide();
        } else {
            $(this).parent('li').find('.list1').hide();
            $(this).removeClass('icon-arrow-down');
            $(this).find('a').removeClass('hover');
        }
    });
    /*商品列表页面三级收缩*/
    $('.CategoryLista li .list1 li a').bind('click', function () {
        var dis = $(this).parent('li').find('ul');
        if (dis.css("display") == 'none' || dis.css("display") == '') {
            dis.show();
            //obj.style.cssText = "display:block";
        } else {
            dis.hide();
        }
    });
    /*商品列表页带图标收缩*/
    $('.CategoryLista li .tt_box').bind('touchstart', function () {
        var dis = $(this).parent().find('ul').css('display');
        if (dis == 'none' || dis == '') {
            $('.prolist_img li ul').hide();
            $(this).parent().find('ul').show();
        } else {
            $(this).parent().find('ul').hide();
        }
    });
}
function getlistpr() {
    $('.flBox li ul').hide();
    $(".flBox li ul:eq(0)").show();
    $(".flBox li a:eq(0)").addClass("fl-lst-crt");
    $(".flBox>li>a").click(function () {
        var obj = $(this).parent().find('>ul');
        if (!obj.is(':visible')) {
            $(".flBox>li>a>ul:eq(0)").show();
            $('.flBox>li>a>ul').hide();
            $(this).addClass('fl-lst-crt');
            obj.fadeIn();
        } else {
            obj.hide();
            $(this).removeClass('fl-lst-crt');
        }

    });

}
function footerKefu() {     //底部客服
//    var sc = $(".social_nav2");
//    $(".social_nav2 .btn").bind('click', function () {
//        sc.find(".social2").hide();
//        sc.show();
//        $(this).hide();
//        $(".social_nav2 .btn2").css('left', '0').show();
//    })
//    $(".social_nav2 .btn2").bind('click', function () {
//        sc.find(".social2").show();
//        sc.show();
//        $(this).hide();
//        $(".social_nav2 .btn").show();
//    });

    $(".social_nav3").attr('id', 'akb_slide');
    $('.social_nav3 .social3').bind('touchmove', function () {
        jelle('akb_slide').animate({ left: '-288px' }, 200, function () { $('.social_nav3 .btn').hide(); $(".social_nav3 .btn2").show(); });
        return false;
    });
    $('.social_nav3 .btn').bind('click touchmove', function () {
        jelle('akb_slide').animate({ left: '-288px' }, 200, function () { $('.social_nav3 .btn').hide(); $(".social_nav3 .btn2").show(); });
        return false;
    });
    $(".social_nav3 .btn2").bind('click touchmove', function () {
        jelle('akb_slide').animate({ left: '0px' }, 200, function () { $(".social_nav3 .btn2").hide(); $('.social_nav3 .btn').show(); });
        return false;
    });

    /*底部浮动社交栏收缩(圆)*/
    var _dis = $('.u-popup').css('display');
    $('.u-dwnav').bind('click', function () {
        var _dis = $('.u-popup').css('display');
        if (_dis == 'block' || _dis == '') {
            $('.u-popup').hide();
            $('.u-mbg').hide();
            $(this).find('.ico').removeClass('z-gray');
            $('body').removeClass('oh');
        } else {
            $('.u-popup').show();
            $('.u-mbg').show();
            $(this).find('.ico').addClass('z-gray');
            $('body').addClass('oh');
        }
    });
    $('.u-mbg').bind('click', function () {
        $(this).hide();
        $('.u-popup').hide();
        $('.z-gray').removeClass('z-gray');
        $('body').removeClass('oh');
    });
}

function scrollBarAuto() {
    var cc = [], kk = [], uu = [], ap, active = 0;

    /*有时间*/
    $(".j-slide-auto").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		s = r.find(".m-cnt");
        i.attr("id", "slides_control_id" + dd),
		s.attr("id", "pager_id" + dd),
		cc.push({
		    slideId: "slides_control_id" + dd,
		    pageId: "pager_id" + dd,
		    index: 0
		});
    });
    $.each(cc, function (No, obj) {
        var h_body = $("#" + obj.slideId).find("img").attr('height');
        $("#" + obj.slideId).find("img").css('height', h_body + 'px');
        if (!document.getElementById(obj.pageId)) {

            new TouchSlider({
                id: obj.slideId,
                timeout: 3000,
                speed: 400,
                before: function () { },
                after: function () { }
            });
        } else {
            var ap = document.getElementById(obj.pageId).getElementsByTagName('li');
            $("#" + obj.pageId).find("li:first-child").addClass('tab-crt');
            for (var i = 0; i < ap.length; i++) {
                (function () {
                    var j = i;
                    ap[i].onclick = function () {
                        tt.slide(j);
                        return false;
                    }
                })();
            }
            var tt = new TouchSlider({
                id: obj.slideId,
                timeout: 3000,
                speed: 400,
                before: function (index) { ap[obj.index].className = ''; obj.index = index; ap[obj.index].className = 'tab-crt'; },
                after: function () { }
            });
        }
    });
}

function scrollBar() {     //滚动JS
    var cc = [], kk = [], uu = [], ap, active = 0;
    $(".j-slide-not .m-cnt li").removeClass('z-on');
    /*无时间*/
    $(".j-slide-not").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		s = r.find(".m-cnt"),
		pr = r.find(".prev"),
		ne = r.find(".next");
        i.attr("id", "slides_control_id_" + dd),
		s.attr("id", "pager_id_" + dd),
		pr.attr("id", "prev_id_" + dd),
	    ne.attr("id", "next_id_" + dd),
		kk.push({
		    slideId: "slides_control_id_" + dd,
		    pageId: "pager_id_" + dd,
		    prevId: "prev_id_" + dd,
		    nextId: "next_id_" + dd,
		    index: 0
		});
    });
    $.each(kk, function (No, obj) {
        if (document.getElementById(obj.pageId)) {
            var ap = document.getElementById(obj.pageId).getElementsByTagName('li');
            $("#" + obj.pageId).find("li:first-child").addClass('tab-crt');
            for (var i = 0; i < ap.length; i++) {
                (function () {
                    var j = i;
                    $("#" + obj.prevId).bind('click', function () {
                        var i = parseInt(active) - 1;
                        i = i < 0 ? i = 0 : i;
                        tt.slide(i);
                    })
                    $("#" + obj.nextId).bind('click', function () {
                        var i = parseInt(active) + 1;
                        tt.slide(i);
                    })
                    ap[i].onclick = function () {
                        tt.slide(j);
                        return false;
                    }
                })();
            }

            var tt = new TouchSlider({
                id: obj.slideId,
                auto: false,
                speed: 400,
                before: function (index) { ap[obj.index].className = ''; obj.index = index; ap[obj.index].className = 'tab-crt'; },
                after: function () { }
            });
        } else {
            new TouchSlider({
                id: obj.slideId,
                auto: false,
                speed: 400
            });
        }
    });
    /*无时间 左右按钮*/
    $(".j-slide-np").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		pr = r.find(".prev"),
		ne = r.find(".next");
        i.attr("id", "slides-control-id-" + dd),
		pr.attr("id", "prev-id-" + dd),
		ne.attr("id", "next-id-" + dd),
		uu.push({
		    slideId: "slides-control-id-" + dd,
		    prevId: "prev-id-" + dd,
		    nextId: "next-id-" + dd,
		    index: 0

		});
    });
    $.each(uu, function (no, rr) {
        var size = 0;
        if (document.getElementById(rr.slideId)) {
            size = document.getElementById(rr.slideId).childElementCount;
        }
        if (size < 2) {
            $('#' + rr.prevId).hide();
            $('#' + rr.nextId).hide();
        }
        $('#' + rr.prevId).bind('click', function () {
            var i = parseInt(rr.index) - 1;
            i = i < 0 ? i = 0 : i;
            ck.slide(i);
        });
        $('#' + rr.nextId).bind('click', function () {
            var i = parseInt(rr.index) + 1;
            i = i >= size - 1 ? i = size - 1 : i;
            ck.slide(i);
        });
        var ck = new TouchSlider({
            id: rr.slideId, speed: 600, timeout: 1000, auto: false,
            before: function (index) { rr.index = index; },
            after: function (index) {
                $('#' + rr.nextId).css("opacity", "1");
                $('#' + rr.prevId).css("opacity", "1");
                var si_ze = size - 1;
                if (rr.index == si_ze) { $('#' + rr.nextId).css("opacity", "0.3"); }
                if (rr.index == 0) { $('#' + rr.prevId).css("opacity", "0.3"); }
            }
        });
    });

    /*首页总导航 状态栏少于1 隐藏*/
    $('.m-box').each(function () {
        var k = this.childElementCount;
        if (k < 2) {
            $(this).parent().find('.m-cnt').hide();
            $(this).parent().find('.prev,.next').hide();
            $(this).parent().siblings('.prev,.next').hide();
        } else if (k > 1) { return false }
    })
    $('.m-cnt.m-cnt2 li:first-child').addClass('tab-i-l tab-crt');
};

function Changebox() {

    $(".j-click-change").each(function () {
        $(this).find(".c-list li").each(function (dd, n) {
            $(this).attr("id", "c-list" + (dd + 1));
        });
        $(this).find(".change-box").each(function (cc, n) {
            $(this).attr("id", "changebox" + (cc + 1));
        });
        $(this).find("#c-list1").addClass("z-on");
        $(this).find(".c-list li").bind("click", function () {
            $(this).parent().find("li").removeClass("z-on");
            $(this).addClass("z-on");
            IDnum = $(this).attr("id").replace(/[^0-9]/ig, "");
            IDnum = parseInt(IDnum);
            var pp = $(this).parent().parent();
            pp.find(".change-box").hide();
            pp.find("#changebox" + IDnum).show();
        })

    });
};



//addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); 
//function hideURLbar() {
//    window.scrollTo(0, 1);
//};




//addEventListener("load", function () { setTimeout(hideURLbar, 0); }, false);
//function hideURLbar() {
//    window.scrollTo(0, 1);
//}
function tab(id, aId, num1, num2, nameClass) {
    var dlBlock = document.getElementById(id + num1);
    var aArray = document.getElementById(aId + num1);
    for (var i = 0; i < num2; i++) {
        document.getElementById(id + i).style.display = 'none';
        document.getElementById(aId + i).className = '';
    }
    dlBlock.style.display = 'block';
    aArray.className = nameClass;
}