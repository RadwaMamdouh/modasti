/*global $ , document , window*/
$(document).ready(function () {
    'use strict';
    
//    nav open
//    $('.tog-btn').on('click', function () {
//        $('.main-nav').toggleClass('show-nav');
//        $(this).addClass('open')
//    })
//    $('.main-nav .overlay').on('click', function () {
//        $('.main-nav').removeClass('show-nav');
//        $('.tog-btn').removeClass('open');
//    })
    
    
//    sec-nav function
    
    $('.nav-btn').on('click', function() {
        $(this).toggleClass('active');
        $('.sec-nav').toggleClass('open');
    });
//    sec-nav function
    
    $('.header-m.header .nav-btn-m').on('click', function() {
        $(this).toggleClass('active');
        $('.collapse-nav').toggleClass('open');
    });

//    open search
    
    $('.search-link').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.search-input').toggleClass('open');
    })
    
//    switch btn function
    
    $('.switch').on('click', function() {
        $(this).toggleClass('off')
    })
    
//    drop-mnu function
    
    $(document).click(function(){
        $('.drop-mnu').removeClass('open');
        $('.drop-container').removeClass('container-poend');
        $(this).removeClass('open');
    });
    $('.drpo-btn , .drop-mnu').click(function(e){
        e.stopPropagation();
    });
    
    $('.drpo-btn').click(function (e) {
         
        e.preventDefault()
        
        
        if($(this).siblings('.drop-mnu').hasClass('open')) {
            $(this).siblings('.drop-mnu').removeClass('open');
            $(this).removeClass('open');
            $(this).parent().removeClass('container-poend');
            console.log('has')
        } else {
            $('.drop-mnu').removeClass('open');
            $(this).siblings('.drop-mnu').addClass('open');
            $('.drpo-btn').removeClass('open');
            $(this).addClass('open');
            $('.drop-container').removeClass('container-poend');
            $(this).parent().addClass('container-poend');
            console.log('n-has')
        }
    })
    
    
//    sub nav collapse in mobile
    $('.collapse-nav .collapse-list .sub-collapse-btn').on('click', function() {
        if($(this).siblings('.sub-collapse').hasClass('open')) {
            $('.sub-collapse').removeClass('open');
        } else {
            $('.sub-collapse').removeClass('open');
            $(this).siblings('.sub-collapse').addClass('open');
        }
    });


    // radwa

    // Regiter Users Type
    $('.m-user input').click(function() {
        if($(this).is(':checked')) { 
            $('#modastiUser').css('display', 'block');
            $('#businessUser').css('display', 'none');
            $('.log-forms.register').children('.container').children('.row').addClass('a-start');
            $('.log-forms.register').children('.container').children('.row').removeClass('a-center');
        }
    });

    $('.b-user input').click(function() {
        if($(this).is(':checked')) { 
            $('#businessUser').css('display', 'block');
            $('#modastiUser').css('display', 'none');
            $('.log-forms.register').children('.container').children('.row').addClass('a-center');
            $('.log-forms.register').children('.container').children('.row').removeClass('a-start');
        }
    });

    // Business User Modal
    $('.modal-btn').on('click', function(e) {
        e.preventDefault();
        var openModalBtn = $(this).data('target');
        $(openModalBtn).toggleClass('show');
    });

    $('.card-head .close-img').on('click', function() {
        if ($('#modal').hasClass('show')) {
            $('#modal').removeClass('show');
        }
    });

    $('.custom-modal .overlay').on('click', function() {
        if ($('#modal').hasClass('show')) {
            $('#modal').removeClass('show');
        }
    });
});

// Uploading image
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();            
        reader.onload = function (e) {
            var imgPre = $('.uploading input[type="file"]').val();
            console.log(imgPre);
            $('#img-preview img').remove();
            $('#img-preview').append(`<img src="${imgPre, e.target.result}" class="img-fluid">`);
            $('.uploading .add-icon').css('display', 'none');

        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#upload-file").change(function(){
    readURL(this);
});
