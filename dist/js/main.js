/*global $ , document , window*/
$(document).ready(function () {
	'use strict';
	// new WOW().init();

	var countVal = 0;
	
	var myVar = setInterval(function() {
		
		countVal = countVal + 1;
		
		$('.loader .loader-content .persent .num').html(countVal);
		$('.loader .loader-content .bar-fill').css({
			width: countVal + '%'
		})
		if(countVal == 100) {
			clearInterval(myVar);
			$('.loader').fadeOut();
			$('body').addClass('over-y')
		}
		
	}, 3000/100)
	
	
	//    nav open
	//    $('.tog-btn').on('click', function () {
	//        $('.main-nav').toggleClass('show-nav');
	//        $(this).addClass('open')
	//    })
	//    $('.main-nav .overlay').on('click', function () {
	//        $('.main-nav').removeClass('show-nav');
	//        $('.tog-btn').removeClass('open');
	//    })


	
	
//	business user profile grid && list 
//	$('.b-profile-head .grid-controll .grid').click(function() {
//		$('.profile-table .container > div').removeClass('table');
//		$('.profile-table .tbody').addClass('row'); 
//		$('.profile-table .thead .td:first-child').addClass('grid-head');
//		$('.profile-table .thead .td:first-child ~ .td').slideUp(0);
//		$('.profile-table .tbody .tr').addClass('col-12 col-sm-6 col-md-4 col-lg-3');
//		$('.profile-table .container').removeClass('in-list');
//		$('.b-profile-head .grid-controll > *').removeClass('active')
//		$(this).addClass('active');
//	})
//	
//	$('.b-profile-head .grid-controll .list').click(function() {
//		$('.profile-table .container > div').addClass('table');
//		$('.profile-table .tbody').removeClass('row');
//		$('.profile-table .thead .td:first-child').removeClass('grid-head');
//		$('.profile-table .thead .td:first-child ~ .td').slideDown(0);
//		$('.profile-table .tbody .tr').removeClass('col-12 col-sm-6 col-md-4 col-lg-3');
//		$('.profile-table .container').addClass('in-list');
//		$('.b-profile-head .grid-controll > *').removeClass('active')
//		$(this).addClass('active');
//	})
	
	$('.share-control').click(function() {
		$(this).siblings('.share-icons').toggleClass('active')
	})
	
	//    sec-nav function

	$('.nav-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.sec-nav').toggleClass('open');
	});
	//    sec-nav function

	$('.header-m.header .nav-btn-m').on('click', function () {
		$(this).toggleClass('active');
		$('.collapse-nav').toggleClass('open');
	});

	//    open search

	$('.search-link').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.search-input').toggleClass('open');
	})

	//    switch btn function

	$('.switch').on('click', function () {
		$(this).toggleClass('off')
	})

	//    drop-mnu function
	//    .news-box.top-z
	$(document).click(function () {
		$('.drop-mnu').removeClass('open');
		$('.drop-container').removeClass('container-poend');
		$(this).removeClass('open');
		$('.news-box').removeClass('top-z');
	});
	$('.drpo-btn , .drop-mnu , .news-box').click(function (e) {
		e.stopPropagation();
	});

	$('.drpo-btn').click(function (e) {

		e.preventDefault()


		if ($(this).siblings('.drop-mnu').hasClass('open')) {
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
	$('.collapse-nav .collapse-list .sub-collapse-btn').on('click', function () {
		if ($(this).siblings('.sub-collapse').hasClass('open')) {
			$('.sub-collapse').removeClass('open');
		} else {
			$('.sub-collapse').removeClass('open');
			$(this).siblings('.sub-collapse').addClass('open');
		}
	});



	//    save to collections functions
	$('.save-to-dropdown .drop-mnu .save-collection').click(function () {
		$('.save-to-dropdown .drop-mnu .active').removeClass('active')
		$('.save-to-dropdown .drop-mnu .item-added').addClass('active')
	})
	$('.save-to-dropdown .save-collection-box .sc-head img').click(function () {
		$('.save-to-dropdown .drop-mnu .active').removeClass('active')
		$('.save-to-dropdown .new-collection-box').addClass('active')
	})
	$('.save-to-dropdown .new-collection-box .sc-head img').click(function () {
		$('.save-to-dropdown .drop-mnu .active').removeClass('active')
		$('.save-to-dropdown .save-collection-box').addClass('active')
	})

	$('.save-to-dropdown .drpo-btn').click(function () {
		$(this).find('.heart').toggleClass('checked')
	})

	// radwa

	// Regiter Users Type
	$('.m-user input').click(function () {
		if ($(this).is(':checked')) {
			$('#businessUser').css('display', 'block');
			$('#modastiUser').css('display', 'none');
			// $('.log-forms.register').children('.container').children('.row').addClass('a-start');
			// $('.log-forms.register').children('.container').children('.row').removeClass('a-center');
		}
	});

	$('.b-user input').click(function () {
		if ($(this).is(':checked')) {
			$('#modastiUser').css('display', 'block');
			$('#businessUser').css('display', 'none');
			// $('.log-forms.register').children('.container').children('.row').addClass('a-center');
			// $('.log-forms.register').children('.container').children('.row').removeClass('a-start');
		}
	});

	// Business User Modal
	$('.modal-btn').on('click', function (e) {
		e.preventDefault();
		if ($('.custom-modal').hasClass('show')) {
			$('.custom-modal').removeClass('show');
			$('body').css('overflow-y', 'auto');
		}
		var openModalBtn = $(this).data('target');
		$(openModalBtn).toggleClass('show');
		$('body').css('overflow-y', 'hidden');
	});

	$('.custom-modal .close-img , .custom-modal .overlay').on('click', function () {
		if ($('.custom-modal').hasClass('show')) {
			$('.custom-modal').removeClass('show');
			$('body').css('overflow-y', 'auto');
		}
	});

	//	open and close filter
	$('.open-filter').click(function () {
		$('.filter-col').addClass('open')
		$('.result-col').removeClass('open')
	})
	$('.close-filter').click(function () {
		$('.filter-col').removeClass('open')
		$('.result-col').addClass('open')
	})
	
	
//	search cat select
	
	$('.res-collapse .col-btn').click(function() {
		$('.res-collapse ul').toggleClass('open')
	})


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
	$('.user-box-btn').on('click', function () {
		if ($(this).attr('data-click-state') == 1) {
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
	$('.quickView-modal .quick-view .sub-view img').on('click', function () {
		let thisSrc = $(this).attr('src');
		console.log(thisSrc);
		$('.quickView-modal .quick-view .main-view img').remove();
		$('.quickView-modal .quick-view .main-view').append(`<img src="${thisSrc}" class="img-fluid">`);
	});

	// Size Quid Tabs
	$('.cm input').click(function () {
		if ($(this).is(':checked')) {
			$('#cm-tab').css('display', 'block');
			$('#inch-tab').css('display', 'none');
		}
	});

	$('.inch input').click(function () {
		if ($(this).is(':checked')) {
			$('#inch-tab').css('display', 'block');
			$('#cm-tab').css('display', 'none');
		}
	});

	// Join Contest Responsive Collapsing
	$('.contest-bar .collapse-btn').on('click', function () {
		$(this).parents('.contest-bar').toggleClass('active');
	});
});

// Uploading image
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			var imgPre = $('.uploading input[type="file"]').val();
			console.log(imgPre);
			$('.img-preview img').remove();
			$('.img-preview').append(`<img src="${imgPre, e.target.result}" class="img-fluid">`);
			$('.uploading .add-icon').css('display', 'none');

		}

		reader.readAsDataURL(input.files[0]);
	}
}

$(".upload-file").change(function () {
	readURL(this);
});
