$(document).ready(function(){
    $(".header__login").click(function(){
        $(".login").fadeIn(500);
    })
    $(".box-cancel, .modal").click(function(){
        $(".login").fadeOut(500);
    })
    $(".header__register").click(function(){
        $(".register").fadeIn(500);
    })
    $(".box-cancel, .modal").click(function(){
        $(".register").fadeOut(500);
    })
    $(".login .transfer button").click(function(){
        $(".login").fadeOut(250);
        $(".register").fadeIn(250);
    })
    $(".register .transfer button").click(function(){
        $(".register").fadeOut(250);
        $(".login").fadeIn(250);
    })
})