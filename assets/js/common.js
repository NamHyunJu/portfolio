$(document).ready(function(){
    $('.head').load('../header.html .header');

    //동적생성일때는 이벤트를 불러오는것이 다르다->$(document).on('event',선택자,function(){})
    $(document).on('click', '.gnb_open_btn', function () {
        $('#header #gnb').css('display','block').stop().animate({right:0},500,function(){
            $(this).find('.first').focus();
            $('#gnb .first').on('keydown',function(e){
                if(e.shiftKey&&e.keyCode===9){
                    $('#gnb .last').focus();
                    return false;
                }
            });
            $('#gnb .last').on('keydown',function(e){
                if(!e.shiftKey&&e.keyCode===9){
                    $('#gnb .first').focus();
                    return false;
                }
            });
        });
    });
    $(document).on('click', '.gnb_close_btn', function () {
        $('#header #gnb').stop().animate({right:'-100%'},500,function(){
            $('.gnb_open_btn').focus();
        });
    });
});