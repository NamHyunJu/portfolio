$(document).ready(function(){
    //project
    $('#what #kids').stop().slideUp();
    $('.controller .next').on('click',function(){
        $(this).parents('article').stop().slideUp().next().stop().slideDown();
    });
    $('.controller .prev').on('click',function(){
        $(this).parents('article').stop().slideUp().prev().stop().slideDown();
    });
});