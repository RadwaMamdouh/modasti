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
//    .news-box.top-z
    $(document).click(function(){
        $('.drop-mnu').removeClass('open');
        $('.drop-container').removeClass('container-poend');
        $(this).removeClass('open');
        $('.news-box').removeClass('top-z');
    });
    $('.drpo-btn , .drop-mnu , .news-box').click(function(e){
        e.stopPropagation();
    });
    
    $('.drpo-btn').click(function (e) {
         
        e.preventDefault()
        
        
        if($(this).siblings('.drop-mnu').hasClass('open')) {
            $(this).siblings('.drop-mnu').removeClass('open');
            $(this).removeClass('open');
            $(this).parent().removeClass('container-poend');
        $('.news-box').removeClass('top-z');
            console.log('has')
        } else {
            $(this).parents('.news-box').addClass('top-z');
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
    
    
    
//    save to collections functions
    $('.save-to-dropdown .drop-mnu .save-collection').click(function() {
        $('.save-to-dropdown .drop-mnu .active').removeClass('active')
        $('.save-to-dropdown .drop-mnu .item-added').addClass('active')
    })
    $('.save-to-dropdown .save-collection-box .sc-head img').click(function() {
        $('.save-to-dropdown .drop-mnu .active').removeClass('active')
        $('.save-to-dropdown .new-collection-box').addClass('active')
    })
    $('.save-to-dropdown .new-collection-box .sc-head img').click(function() {
        $('.save-to-dropdown .drop-mnu .active').removeClass('active')
        $('.save-to-dropdown .save-collection-box').addClass('active')
    })
    
    $('.save-to-dropdown .drpo-btn').click(function(){
        $(this).find('.heart').toggleClass('checked')
    })

    // radwa

    // Regiter Users Type
    $('.m-user input').click(function() {
        if($(this).is(':checked')) { 
            $('#businessUser').css('display', 'block');
            $('#modastiUser').css('display', 'none');
            // $('.log-forms.register').children('.container').children('.row').addClass('a-start');
            // $('.log-forms.register').children('.container').children('.row').removeClass('a-center');
        }
    });

    $('.b-user input').click(function() {
        if($(this).is(':checked')) { 
            $('#modastiUser').css('display', 'block');
            $('#businessUser').css('display', 'none');
            // $('.log-forms.register').children('.container').children('.row').addClass('a-center');
            // $('.log-forms.register').children('.container').children('.row').removeClass('a-start');
        }
    });

    // Business User Modal
    $('.modal-btn').on('click', function(e) {
        e.preventDefault();
        if ($('.custom-modal').hasClass('show')) {
            $('.custom-modal').removeClass('show');
            $('body').css('overflow-y', 'auto');
        }
        var openModalBtn = $(this).data('target');
        $(openModalBtn).toggleClass('show');
        $('body').css('overflow-y', 'hidden');
    });
    
    $('.card-head .close-img , .custom-modal .overlay').on('click', function() {
        if ($('.custom-modal').hasClass('show')) {
            $('.custom-modal').removeClass('show');
            $('body').css('overflow-y', 'auto');
        }
    });

    
    // $('.custom-modal .overlay').on('click', function() {
    //     if ($('.custom-modal').hasClass('show')) {
    //         $('.custom-modal').removeClass('show');
    //     }
    // });

    // Help Collapsing
    $('.collapse-btn').on('click', function () {
        $(this).parents('.collapse-box').siblings().removeClass('active');
        $(this).parents('.collapse-box').toggleClass('active');
    });

    // Follow And Unfollow
    $('.user-box-btn').on('click', function() {
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).find('.plus').css('display', 'block');
            $(this).find('.follow').css('display', 'none');
        } else {
            $(this).attr('data-click-state', 1);
            $(this).find('.follow').css('display', 'block');
            $(this).find('.plus').css('display', 'none');
        }
    });

    // Quick View Modal
    $('.quickView-modal .quick-view .sub-view img').on('click', function() {
        let thisSrc = $(this).attr('src');
        console.log(thisSrc);
        $('.quickView-modal .quick-view .main-view img').remove();
        $('.quickView-modal .quick-view .main-view').append(`<img src="${thisSrc}" class="img-fluid">`);
    });

    // Size Quid Tabs
    $('.cm input').click(function() {
        if($(this).is(':checked')) { 
            $('#cm-tab').css('display', 'block');
            $('#inch-tab').css('display', 'none');
        }
    });

    $('.inch input').click(function() {
        if($(this).is(':checked')) { 
            $('#inch-tab').css('display', 'block');
            $('#cm-tab').css('display', 'none');
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

