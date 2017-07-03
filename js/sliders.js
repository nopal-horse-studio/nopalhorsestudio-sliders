(function($){

	sliders = {
		init: function(){
			sliders.Slider1();
			sliders.Slider2();
			sliders.Slider3();
			sliders.Slider4();
			sliders.Slider5();
			sliders.Slider6();
			sliders.Slider7();
			sliders.Slider8();
		},
		Slider1: function(){
			$('#slider-1').owlCarousel({
				loop: true,
				margin: 10,
				nav: false,
				dots: false
			});
		},
		Slider2: function(){
			$('#slider-2').owlCarousel({
				loop: false,
				margin: 0,
				nav: true,
				navText:['',''],
				dots: false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
		Slider3: function(){
			$('#slider-3').owlCarousel({
				loop: false,
				margin: 0,
				nav: false,
				dots: true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
		Slider4: function(){
			$('#slider-4').owlCarousel({
				loop: false,
				margin: 0,
				nav: true,
				navText:['',''],
				dots: true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
		Slider5: function(){
			$('#slider-5').owlCarousel({
				loop: false,
				margin: 0,
				//NAVS
				nav: true,
				navText:['',''],
				//DOTS
				dots: true,
				//ANIMATED
				smartSpeed: 1000,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
		Slider6: function(){
			$('#slider-6').owlCarousel({
				loop: false,
				margin: 0,
				//NAVS
				nav: true,
				navText:['',''],
				//DOTS
				dots: true,
				//ANIMATED
				smartSpeed: 1000,
				animateOut: 'lightSpeedOut',
				animateIn: 'lightSpeedIn',
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
		Slider7: function(){
			$('#slider-7').owlCarousel({
				loop: false,
				margin: 0,
				//NAVS
				nav: true,
				navText:['',''],
				//DOTS
				dots: true,
				//ANIMATED
				smartSpeed: 1000,
				animateOut: 'slideOutRight',
				animateIn: 'slideInLeft',
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
		Slider8: function(){
			$('#slider-8').owlCarousel({
				loop: false,
				margin: 0,
				//NAVS
				nav: true,
				navText:['',''],
				//DOTS
				dots: true,
				//ANIMATED
				smartSpeed: 1000,
				animateOut: 'slideOutLeft',
				animateIn: 'slideInLeft',
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		},
	};

	sliders.init();

})(jQuery);