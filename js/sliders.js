(function($){
	//VARS PROGRESS
	var time = 10;
	var $progressBar,
	$bar,
	$elem,
	isPause,
	tick,
	percentTime;

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
			sliders.Slider9();
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
		Slider9: function(){
			var $slider = $('#slider-9');

			//INT SLIDER
			$slider.on('initialized.owl.carousel', function(event) {
				progressBar($(this));
			});

			//NEXT SLIDER
			$slider.on('translated.owl.carousel', function(event) {
				moved();
			});

			//MOUSE DRAG SLIDER
			$slider.on('drag.owl.carousel', function(event) {
				pauseOnDragging();
			});


			function progressBar(elem){
				$elem = elem;
				buildProgressBar();
				start();
			}

			function buildProgressBar(){
				$progressBar = $("<div>",{
					id:"progress"
				});
				$bar = $("<div>",{
					id:"bar"
				});
				$progressBar.append($bar).prependTo($elem);
			}

			function start() {
				//reset timer
				percentTime = 0;
				isPause = false;
				//run interval every 0.01 second
				tick = setInterval(interval, 10);
			}

			function interval() {
				if(isPause === false){
					percentTime += 1 / time;

					TweenMax.to($bar, 0.2,{
						width: percentTime+"%",
						ease:Circ.easeOut
					});

					//if percentTime is equal or greater than 100
					if(percentTime >= 100){
						$elem.trigger('next.owl.carousel');
					}
				}
			}

			//pause while dragging
			function pauseOnDragging(){
				isPause = true;
			}

			//moved callback
			function moved(){
				//clear interval
				clearTimeout(tick);
				//start again
				start();
			}

			//PAUSED
			$('#slider-9 .item').on('mouseover',function(){
				isPause = true;
			});
			$('#slider-9 .item').on('mouseout',function(){
				isPause = false;
			});

			//
			$slider.owlCarousel({
				loop: true,
				margin: 0,
				//NAVS
				nav: true,
				navText:['',''],
				//DOTS
				dots: false,
				//ANIMATED
				items: 1,
				animateIn: 'slideInRight',
				animateOut: 'slideOutLeft',
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