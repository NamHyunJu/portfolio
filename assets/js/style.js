$(document).ready(function(){
    //초기화면
    $('.click2,.text,.smile').hide();
    $('.img_wrap').addClass('on');

    //물음표아이콘 클릭
    $('.q').on('click',function(){
        $('.img_wrap').removeClass('on');
        $(this).attr({'aria-hidden':true}).hide();
        $('.click2,.text,.smile').show();
        $('.click1').hide();
        $('.txt').stop().animate({left:'-100%'},500);
    });

    //웃는아이콘 클릭
    $('.smile1').on('click',function(){
        $('#txt1').addClass('on');
    });
    $('.smile2').on('click',function(){
        $('#txt2').addClass('on');
    });
    $('.smile3').on('click',function(){
        $('#txt3').addClass('on');
    });
    $('.smile4').on('click',function(){
        $('#txt4').addClass('on');
    });

    //스킬
    $('#skill .txt').stop().slideUp();
});