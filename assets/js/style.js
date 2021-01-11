$(document).ready(function(){
    //project
    $('#what,#kids').attr({'aria-hidden':true}).stop().slideUp();
    $('.controller .next').on('click',function(){
        $(this).parents('article').attr({'aria-hidden':true}).stop().slideUp().next().attr({'aria-hidden':false}).stop().slideDown();
    });
    $('.controller .prev').on('click',function(){
        $(this).parents('article').attr({'aria-hidden':true}).stop().slideUp().prev().attr({'aria-hidden':false}).stop().slideDown();
    });
});