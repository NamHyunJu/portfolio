$(document).ready(function(){
    //project
    $('#what,#kids').attr({'aria-hidden':true}).stop().slideUp();
    $('.controller .next').on('click',function(){
        if($(this).parents('article').is('#kids')){
            $(this).parents('article').attr({'aria-hidden':true}).stop().slideUp().prev().prev().attr({'aria-hidden':false}).stop().slideDown();
        } else{
            $(this).parents('article').attr({'aria-hidden':true}).stop().slideUp().next().attr({'aria-hidden':false}).stop().slideDown();
        }
    });
    $('.controller .prev').on('click',function(){
        if($(this).parents('article').is('#jaenung')){
            $(this).parents('article').attr({'aria-hidden':true}).stop().slideUp().next().next().attr({'aria-hidden':false}).stop().slideDown();
        } else{
            $(this).parents('article').attr({'aria-hidden':true}).stop().slideUp().prev().attr({'aria-hidden':false}).stop().slideDown();
        }
    });

    //report
    $('.tab.first, .tabpanel:first-of-type').addClass('active').attr({tabIndex:0});
    $('.tab.first').attr({'aria-selected':true}).siblings().attr({'aria-selected':false});
    $('.tabpanel:first-of-type').attr({'aria-hidden':false}).siblings('.tabpanel').attr({'aria-hidden':true});

    $('.tab').on({
        'click':function(){
            $(this).addClass('active').attr({tabIndex:0,'aria-selected':true}).siblings('.active').removeClass('active').attr({tabIndex:-1,'aria-selected':false});

            var tabNum=$(this).index();
            $('.tabpanel').eq(tabNum).addClass('active').attr({tabIndex:0,'aria-hidden':false}).siblings('.active').removeClass('active').attr({tabIndex:-1,'aria-hidden':true});
        },
        //오른쪽(39) 왼쪽(37) home(36) end(35) 엔터(13) 스페이스바(32)
        'keydown':function(e){
            var key=e.keyCode;
            switch(key){
                case 39:
                $(this).attr({tabIndex:-1});
                if($(this).hasClass('last')) {$(this).siblings('.first').attr('tabIndex',0).focus();} else {$(this).next().attr('tabIndex',0).focus();}
            break;
            case 37:
                $(this).attr({tabIndex:-1});
                if($(this).hasClass('first')) {$(this).siblings('.last').attr({tabIndex:0}).focus();} else{$(this).prev().attr({tabIndex:0}).focus();}
            break;
            case 36:
                e.preventDefault();
                $(this).parent().find('.first').attr({tabIndex:0}).focus();
            break;
            case 35:
                e.preventDefault();
                $(this).parent().find('.last').attr({tabIndex:0}).focus();
            break;
            case 13:
            case 32:
                $(this).trigger('click');
            }
        }
    });
});