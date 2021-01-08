$(document).ready(function(){
    //about me
    //초기화면
    $('.click2,.text,.smile').hide().attr('aria-hidden',true);
    $('.img_wrap').addClass('on');
    $('.smile').attr('aria-selected',false);

    //물음표아이콘 클릭
    $('.q').on('click',function(){
        $('.img_wrap').removeClass('on').stop().animate({left:0},500);
        $(this).attr({'aria-hidden':true}).hide();
        $('.click2,.text,.smile').show();
        $('.click2,.smile').attr('aria-hidden',false);
        $('.click1').hide().attr('aria-hidden',true);
        $('.txt').stop().animate({right:'-100%'},800);
    });

    //웃는아이콘 클릭
    $('.smile').on('click keydown',function(){
        var btnNum=$(this).index();
        $('.text p').eq(btnNum-2).addClass('on');
        $(this).attr('aria-selected',true);
    });

    //스킬
    $('#skill .txt').stop().slideUp();
    var _jump=$('#jump');
    var _guide=$('.guide');

    _jump.attr({tabIndex:0});
    _jump.on('click keydown',function(){
            _guide.stop().slideToggle('fast');
    });
    
    var keyCount=[];
    function guide(keycode){
		if (keyCount.length==3) return;
		if (keyCount.length==0 && keycode==false) $('.keyboard').find('div.right').addClass('click');
		else if (keyCount.length==0 && keycode==39) {
			keyCount.push(1);
			$('.keyboard').find('div.left').addClass('click').siblings().removeClass('click');
		}
		else if (keyCount.length==1 && keycode==37){
			keyCount.push(1);
			$('.keyboard').find('div.spacebar').addClass('click').siblings().removeClass('click');
		}
		else if (keyCount.length==2 && keycode==32){
			keyCount.push(1);
		}
		else return;
    }

    $(window).on('keydown',function(e){
        if(e.keyCode===39){//오른쪽 방향키 눌렀을때
        }
        if(e.keyCode===37){//왼쪽 방향키 눌렀을때

        }
        if(e.keyCode===32){//스페이스바 눌렀을때

        }
    });
    


    //project
    $('#what #kids').stop().slideUp();
    $('.controller .next').on('click',function(){
        $(this).parents('article').stop().slideUp().next().stop().slideDown();
    });
    $('.controller .prev').on('click',function(){
        $(this).parents('article').stop().slideUp().prev().stop().slideDown();
    });
});