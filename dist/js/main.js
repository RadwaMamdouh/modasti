/*global $ , document , window*/
$(document).ready(function () {
    'use strict';
    
//    nav open
    $('.tog-btn').on('click', function () {
        $('.main-nav').toggleClass('show-nav');
        $(this).addClass('open')
    })
    $('.main-nav .overlay').on('click', function () {
        $('.main-nav').removeClass('show-nav');
        $('.tog-btn').removeClass('open');
    })
})