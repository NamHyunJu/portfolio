$(document).ready(function(){
    var _window=$(window);
    var _skill=$('#skill');
    var _jump=$('#jump');
    var start,current,end;
    var step=20;
    var jump=460;
    var _guide=$('.guide');
    var _keyboard=_guide.find('.keyboard');
    var one,two,three,practice=false;
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
    _skill.find('.txt').stop().slideUp();

    start=_jump.position().left;
    current=start;
    end=_window.width()-_jump.width()-30;

    _window.on('scroll',function(){
        var scrollT=$(this).scrollTop();
        var skillP=$(document).height()-$('#me').height();
        clearTimeout(timer);
        timer=setTimeout(function(){
            if(skillP+500<=scrollT && !practice){
                _jump.attr({tabIndex:0});
                practice=true;
            }
        },50);
    });
    _window.on({
    //1번만 연습
        'keyup':function(e){
            if(practice){
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
                    _jump.stop().animate({bottom:jump},500,function(){
                        $(this).stop().animate({bottom:30},800,'easeOutBounce');
                        _guide.stop().delay(1000).slideUp('fast');
                        three=true;
                    });
                }
            }
        },
        'keydown':function(e){
            var x=138.8;
            var y=(_window.width()-1400)/2;
            var z=x+y-15;
            var hexWid=_skill.find('.hexagon').outerWidth();
            
            if(e.keyCode===39 && current<=end && three){
                current+=step;
                _jump.css({left:current});
                
            }
            if(e.keyCode===37 && current>=start && three){
                current-=step;
                _jump.css({left:current});
            }
            if(e.keyCode===32 && three){
                e.preventDefault();
                _jump.stop().animate({bottom:jump},500,function(){
                    $(this).stop().animate({bottom:30},800,'easeOutBounce');
                });
                if(z<=current && current<=z+hexWid){
                    _skill.find('.programming .txt').stop().delay(510).slideDown();
                } else if((2*x)+z+hexWid<=current && current<=(2*x)+z+(2*hexWid)){
                    _skill.find('.design .txt').stop().delay(510).slideDown();
                }else if((4*x)+z+(2*hexWid)<=current && current<=(4*x)+z+(3*hexWid)){
                    _skill.find('.ect .txt').stop().delay(510).slideDown();
                }
            }    
        }
    });

});
