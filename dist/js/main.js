/*global $ , document , window*/
$(document).ready(function () {
    'use strict';
    
//    nav open
    $('.tog-btn').on('click', function () {
        $('.main-nav').toggleClass('show-nav');
        $(this).addClass('open')
    });

    $('.main-nav .overlay').on('click', function () {
        $('.main-nav').removeClass('show-nav');
        $('.tog-btn').removeClass('open');
    });

    // Regiter Users Type
    $('.m-user input').click(function() {
        if($(this).is(':checked')) { 
            $('#modastiUser').css('display', 'block');
            $('#businessUser').css('display', 'none');
        }
    });

    $('.b-user input').click(function() {
        if($(this).is(':checked')) { 
            $('#businessUser').css('display', 'block');
            $('#modastiUser').css('display', 'none');
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