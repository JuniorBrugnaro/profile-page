/*
 * Copyright (c) 2021 marketify
 * Author: marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	beny_tm_owl_carousel();
	beny_tm_down();
	beny_tm_trigger_menu();
	beny_tm_nav_bg();
	beny_tm_modalbox_news();
	beny_tm_modalbox_service();
	beny_tm_cursor();
	beny_tm_imgtosvg();
	beny_tm_popup();
	beny_tm_data_images();
	beny_tm_contact_form();
	beny_tm_totop();
	
	jQuery(window).load('body', function(){
		beny_tm_my_load();
	});
	
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function beny_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.beny_tm_testimonials .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}

	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: false,
		navSpeed: false,
	});
	beny_tm_imgtosvg();
	
	carousel.parent().find('.right_nav').click(function() {
		carousel.trigger('next.owl.carousel');
		return false;
	});
	// Go to the previous item
	carousel.parent().find('.left_nav').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		carousel.trigger('prev.owl.carousel');
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function beny_tm_down(){
	
	"use strict";
	
	var topbar		= jQuery('.beny_tm_topbar').outerHeight();
	jQuery('.beny_tm_hero .beny_tm_button a').on('click',function(){
		if($('.beny_tm_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+40
			}, 800);
		}
		}
	});
	
	jQuery('.beny_tm_intro_hero .beny_tm_button a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-120
			}, 800);
		}
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		var number 			= progress.find('.number');
		var label 			= progress.find('.label');
		number.css({right:(100 - pValue)+'%'});
		setTimeout(function(){label.addClass('opened');},500);
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.tokyo_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function beny_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.my_trigger .hamburger');
	var mobileMenu		= jQuery('.beny_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.beny_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.my_trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function beny_tm_nav_bg(){
	
	"use strict";

	jQuery(window).on('scroll',function(){
		var topbar	 		= jQuery('.beny_tm_topbar');
		var WinOffset		= jQuery(window).scrollTop();

		if(WinOffset >= 100){
			topbar.addClass('animate');
		}else{
			topbar.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function beny_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function beny_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox	= jQuery('.beny_tm_modalbox_news');
	var list 		= jQuery('.beny_tm_news ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.details a,.beny_tm_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		var title		= element.find('.title');
		var titleHref	= element.find('.title a').html();
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = modalBox.find('.title');
			title.html(titleHref);
			beny_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX SERVICE -----------------
// -------------------------------------------------

function beny_tm_modalbox_service(){
	
	"use strict";
	
	var modalBox	= jQuery('.beny_tm_modalbox_service');
	var list 		= jQuery('.beny_tm_services ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.beny_tm_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			beny_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function beny_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){beny_tm_preloader();},speed);
	setTimeout(function(){jQuery('.beny_tm_all_wrap').addClass('animate');},speed+2000);
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function beny_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .toky_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .toky_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function beny_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function beny_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function beny_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function beny_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||subject===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function beny_tm_totop(){
	
	"use strict";
	
	jQuery(".beny_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

