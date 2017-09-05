$(function () {

    var fadeFlashTime = new Array();
    $('.fadeFlash').find('li:first').fadeIn(0);
    $('.fadeFlash').each(function (i) {
        fadeFlashTime[i] = setInterval("fadeFlashFun(" + i + ")", 10000);
        $('.bg13').find('.mokuai').each(function (ii) {
            $(this).hover(
                function () {
                    clearInterval(fadeFlashTime[i]);
                    $('.bg13').find('.mokuai').removeClass('spanNow');
                    $(this).addClass('spanNow');
                    $('.fadeFlash').eq(i).find('li').stop();
                    $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(0);
                    fadeFlashNow[i] = ii;
                    $('.fadeFlash').eq(i).find('li').stop();
                    $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(0);
                    $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).css({top: '60%'});
                    $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).animate({top: '0'}, 1000);
                    fadeFlashTime[i] = setInterval("fadeFlashFun(" + i + ")", 10000);
                },
                function () {
                }
            )
        })
        $(this).find('.rightBtn').click(function () {
            clearInterval(fadeFlashTime[i]);
            $('.fadeFlash').eq(i).find('.btnDiv').find('span').removeClass('spanNow');
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(0);
            if (fadeFlashNow[i] < $('.fadeFlash').eq(i).find('li').length - 1) {
                fadeFlashNow[i]++;
            } else {
                fadeFlashNow[i] = 0;
            }
            $('.fadeFlash').eq(i).find('.btnDiv').find('span').eq(fadeFlashNow[i]).addClass('spanNow');
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(0);
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).css({top: '60%'});
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).animate({top: '20%'});

            fadeFlashTime[i] = setInterval("fadeFlashFun(" + i + ")", 10000);
        })
        $(this).find('.leftBtn').click(function () {
            clearInterval(fadeFlashTime[i]);
            $('.fadeFlash').eq(i).find('.btnDiv').find('span').removeClass('spanNow');
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(0);
            if (fadeFlashNow[i] > 0) {
                fadeFlashNow[i]--;
            } else {
                fadeFlashNow[i] = $('.fadeFlash').eq(i).find('li').length - 1;
            }
            $('.fadeFlash').eq(i).find('.btnDiv').find('span').eq(fadeFlashNow[i]).addClass('spanNow');
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(0);
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).css({top: '60%'});
            $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).animate({top: '30%'});

            fadeFlashTime[i] = setInterval("fadeFlashFun(" + i + ")", 10000);
        })
    })


    $('.nav').click(function () {
        if ($(this).hasClass('close')) {
            $(this).removeClass('close');
            $('#l_dhzk').hide();
        }
        else {
            $(this).addClass('close');
            $('#l_dhzk').show();
        }
    });


    var fadeFlashNow = new Array();
    for (i = 0; i < 50; i++) {
        fadeFlashNow[i] = 0;
    }
    function fadeFlashFun(i) {
        $('.bg13').find('.mokuai').removeClass('spanNow');
        $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(0);
        if (fadeFlashNow[i] < $('.fadeFlash').eq(i).find('li').length - 1) {
            fadeFlashNow[i]++;
        } else {
            fadeFlashNow[i] = 0;
        }
        $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(0);
        $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).css({top: '60%'});
        $('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).animate({top: '0'}, 1000);
        $('.bg13').find('.mokuai').eq(fadeFlashNow[i]).addClass('spanNow');
    }
});
