$(document).ready(function(){
    $('.head').load('../header.html .header');

    var _gnb=$('#header #gnb');
    var _openBtn=$('.gnb_open_btn');
    var _closeBtn=$('.gnb_close_btn');

    _openBtn.on('click',function(){
        _gnb.css('display','block').stop().animate({right:0},300,function(){
            $(this).find('.first').focus();
            $('.first').on('keydown',function(e){
                if(e.shiftKey&&e.keyCode===9){
                    $('.last').focus();
                    return false;
                }
            });
            $('.last').on('keydown',function(){
                if(!e.shiftKey&&e.keyCode===9){
                    $('.first').focus();
                    return false;
                }
            });
        });
    });
    _closeBtn.on('click',function(){
        _gnb.css('display','none').stop().animate({right:'-100%'},300,function(){
            _openBtn.focus();
        });
    });
});
