$(document).ready(function(){
    var _window=$(window);
    
    var _jump=$('#jump');
    var start,current,end;
    var step=20;
    var jump=150;
    var _guide=$('.guide');
    var _keyboard=_guide.find('.keyboard');
    var one,two,three,chk=false;
    var timer=0;

    //about me
    //초기화면
    $('.click2,#me .text,.smile,#me .bg img:nth-child(2)').hide();
    $('.img_wrap').addClass('on');

    //물음표아이콘 클릭
    $('.q').on('click',function(){
        $('.img_wrap').removeClass('on').stop().animate({left:0},500);
        $(this).hide();
        $('.click1').hide();
        $('.click2,#me .text,.smile,#me .bg img:nth-child(2)').show();
        $('.txt').stop().animate({right:'-100%'},800);
    });

    //웃는아이콘 클릭
    $('.smile').on('click',function(){
        var btnNum=$(this).index();
        $('.text p').eq(btnNum-2).addClass('on');
    });

    //스킬
    $('#skill .txt').stop().slideUp();
    
    //left에 가끔씩 오류가 생긴다 왜?
    start=_jump.position().left;
    current=start;
    end=_window.width()-_jump.width()-30;

    _window.on('scroll',function(){
        
        var scrollT=$(this).scrollTop();
        var skillP=$(document).height()-$('#me').height();
        clearTimeout(timer);
        timer=setTimeout(function(){
            if(skillP+500<=scrollT && !chk){
                _jump.attr({tabIndex:0}).focus();
                chk=true;
            }
        },50);
    });
    _window.on({
        //1번만 연습
        'keyup':function(e){
            if(chk){
                if(e.keyCode===39 && !one && !two && !three){
                    _keyboard.find('.right').removeClass('click').siblings('.left').addClass('click');
                    one=true;
                    current+=step;
                    _jump.css({left:current});
    
                } else if(e.keyCode===37 && one && !two && !three){
                    _keyboard.find('.left').removeClass('click').siblings('.spacebar').addClass('click');
                    two=true;
                    current-=step;
                    _jump.css({left:current});
                } else if(e.keyCode===32 && one && two && !three){
                    e.preventDefault();
                    _keyboard.find('.spacebar').removeClass('click');
                    _jump.stop().animate({bottom:jump},300,function(){
                        $(this).stop().animate({bottom:30},800,'easeOutBounce');
                        _guide.stop().delay(1000).slideUp('fast');
                        three=true;
                    });
                }
    
            }
        },
        'keydown':function(e){
            if(three){
                if(e.keyCode===39 && current<=end){//오른쪽 방향키 눌렀을때
                    current+=step;
                    _jump.css({left:current});
                }
                if(e.keyCode===37 && current>=start){//왼쪽 방향키 눌렀을때
                    current-=step;
                    _jump.css({left:current});
                }
                if(e.keyCode===32){//스페이스바 눌렀을때
                    e.preventDefault();
                    _jump.stop().animate({bottom:jump},300,function(){
                        $(this).stop().animate({bottom:30},800,'easeOutBounce');
                    });
                }    
            }
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