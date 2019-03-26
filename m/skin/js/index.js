
//门店查询
function mdss() {
    var url = "";
    var type = "help";
    var kwd = $("#se_key").val();
    url = "/Product/ProSearch.aspx?objtype=" + type + "&kwd=" + kwd;
    window.location.href = url;
}

$(function () {
  
    /*header*/
    $("header").animate({ top: 0 })
    $("header .menu_icon").click(function () {
        $("header nav").slideToggle()
        $("header .QQtk").slideUp()
    })

    $("header .last").click(function () {
        $("header .QQtk").slideToggle()
        $("header nav").slideUp()
    })
    function wen() {
        $("header li em").animate({ opacity: 0.5 }, 300, function () {
            $("header li em").animate({ opacity: 1 }, 300)
        })
    }
    setInterval(wen, 300)
 
    function menu() {
        $("header .s0c").animate({ width: '80%' }, 500)
        $("header .s0d").animate({ width: '100%' }, 500)
        $("header .s0c").delay(500).animate({ width: '100%' }, 500)
        $("header .s0d").delay(500).animate({ width: '80%' }, 500)
    }

    setInterval(menu, 500)

    function tishi() {
        $(".tishi").animate({ bottom: '4%', opacity: 0.4 }, 500)
        $(".tishi").delay(500).animate({ bottom: '5%', opacity: 1 }, 500)
    }
    setInterval(tishi, 500)

    $(".section1 img").delay(500).animate({ top: 0, opacity: 1 }, 1000, 'easeOutExpo')
    $(".section1 .wen").delay(500).animate({ top: 0, opacity: 1 }, 1000, 'easeOutExpo')


    $('#dowebok').fullpage({
        // 'navigation': true,
        'scrollingSpeed': 500,
        //verticalCentered: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],


        /***********当前动作*************/
        afterLoad: function (anchorLink, index) {
            if (index == '1') {
                $(".back_top").animate({ right: -50 })
                $(".tishi img").eq(0).hide()
                $(".tishi img").eq(1).show()
                $(".section1 img").animate({ top: 0, opacity: 1 }, 1000, 'easeOutExpo')
                $(".section1 .wen").animate({ top: 0, opacity: 1 }, 1000, 'easeOutExpo')
            } //第一屏

            if (index == '2') {
                $(".back_top").animate({ right: '5%' })
                $(".tishi img").eq(1).hide()
                $(".tishi img").eq(0).show()

                $(".section2 .dpBox").fadeIn(1000)
                $(".section2 .btn01").delay(500).animate({ left: 0 }, 500)
                $(".section2 .btn02").delay(500).animate({ right: 0 }, 500)
                $(".section2 .search").fadeIn(1000)
            } //第二屏

            if (index == '3') {
                $(".back_top").animate({ right: '5%' })
                $(".tishi img").eq(1).hide()
                $(".tishi img").eq(0).show()

                $(".section3 .se3_box").slideDown(500, function () {
                    $(".section3 .btn01").animate({ left: 0 }, 500)
                    $(".section3 .btn02").animate({ right: 0 }, 500)
                })
            } //第三屏

            if (index == '4') {
                //				$(".back_top").animate({right:'5%'})
                //				$(".tishi img").eq(1).hide()
                //				$(".tishi img").eq(0).show()
                //				
                //				$(".section4 .menu").fadeIn()
                //				$(".section4 .list li:eq(0)").animate({left:0},500)
                //				$(".section4 .list li:eq(1)").delay(200).animate({left:0},500)
                //				$(".section4 .list li:eq(2)").delay(400).animate({left:0},500)
                //				$(".section4 .list li:eq(3)").delay(600).animate({left:0},500)
                //				$(".section4 .list li:eq(4)").delay(800).animate({left:0},500)
                //				$(".section4 .list li:eq(5)").delay(1000).animate({left:0},500)
            } //第四屏

            if (index == '5') {
 $(".section5 .imgtop").animate({ left: 0 })
                $(".section5 .xg01").animate({ left: 0 })
                $(".section5 .xg02").animate({ left: 0 })
                $(".section5 .tm").animate({ left: 0 })
                $(".section5 .xg03").animate({ left: 0 })
                $(".section5 .xg04").animate({ left: 0 })
            } //第五屏

            if (index == '6') {
                $(".back_top").animate({ right: '5%' })
                $(".tishi img").hide()

                $(".section6 .toplogo").animate({ opacity: 1 }, 500, function () {
                    $(".section6 li:eq(0)").animate({ left: 0 }, 300)
                    $(".section6 li:eq(1)").delay(200).animate({ left: 0 }, 300)
                    $(".section6 li:eq(2)").delay(300).animate({ left: 0 }, 300)
                    $(".section6 li:eq(3)").delay(400).animate({ left: 0 }, 300)
                    $(".section6 li:eq(4)").delay(500).animate({ left: 0 }, 300)
                    $(".section6 li:eq(5)").delay(600).animate({ left: 0 }, 300)
                    $("footer").delay(800).animate({ bottom: 0 }, 500)
                })
            } //第六屏


        },
        /***********离开后默认*************/
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == '1') {
                $(".section1 img").css({ "top": -200, "opacity": 0 })
                $(".section1 .wen").css({ "top": 200, "opacity": 0 })
            } //第一屏

            if (nextIndex == '2') {
                $(".section2 .dpBox").fadeOut()
                $(".section2 .btn01").css({ "left": '100%' })
                $(".section2 .btn02").css({ "right": '100%' })
                $(".section2 .search").fadeOut()
            } //第二屏
            if (nextIndex == '3') {
                $(".section3 .se3_box").slideUp()
                $(".section3 .btn01").css({ "left": '-100%' })
                $(".section3 .btn02").css({ "right": '-100%' })
            }
            if (nextIndex == '4') {
                //					$(".section4 .menu").fadeOut()
                //					$(".section4 .list li:even").css({"left":-200})
                //					$(".section4 .list li:odd").css({"right":-200})
            } //第四屏	

            if (nextIndex == '5') {
                 $(".section5 .imgtop").css({ "left": -500 })
                $(".section5 .xg01").css({ "left": 500 })
                $(".section5 .tm").css({ "left": -500 })
                $(".section5 .xg02").css({ "left": -500 })
                $(".section5 .xg03").css({ "left": 500 })
                $(".section5 .xg04").css({ "left": -500 })
            } //第五屏

            if (nextIndex == '6') {
                $(".section6 .toplogo").css({ "opacity": 0 })
                $(".section6 li").css({ "left": "-100%" })
                $("footer").css({ "bottom": -200 })
            } //第六屏	


        }
    });



});




