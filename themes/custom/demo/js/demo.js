(function ($, Drupal) {
	var newDiv = $('<div><button id="openAll" class="usa-button usa-button--outline">Open All</button><button id="closeAll" class="usa-button usa-button--outline">Close All</button></div>');  
	$( "#simple-accordion" ).prepend(newDiv);
	
	Drupal.behaviors.demoAccordnew = {
		attach: function (context, settings) {
			$('#closeAll').click(function(){
				$('#simple-accordion .button-simple-accordion').removeClass('panel-active');
				$('#simple-accordion .accordion-content-panel').css('max-height',' 0px');
			});
			$('#openAll').click(function(){
				$('#simple-accordion .button-simple-accordion').addClass('panel-active');
				$('#simple-accordion .accordion-content-panel').css('max-height',' 94px');
			});

			$(context).bind('scroll', function() {
				var currentTop = $(window).scrollTop();
				var elems = $('.scrollspy');
				elems.each(function(index){
					var elemTop = $(this).offset().top;
					var elemBottom = elemTop + $(this).height();
					if(currentTop >= elemTop && currentTop <= elemBottom){
						var id = $(this).attr('id');
						var navElem = $('a[href="#' + id+ '"]');
						navElem.parent().addClass('active').siblings().removeClass( 'active' );
					}
				})
			});


			 const galleryContainer = document.querySelector('.gallery-container');
			 const galleryControlsContainer = document.querySelector('.gallery-controls');
			 const galleryControls = ['previous', 'next'];
			 const galleryItems = document.querySelectorAll('.gallery-item');
			 
			 class Carousel {
			   constructor(container, items, controls) {
					this.carouselContainer = container;
					this.carouselControls = controls;
					this.carouselArray = [...items];
			   }
			 
			   // Update css classes for gallery
			   updateGallery() {
				this.carouselArray.forEach(el => {
					el.classList.remove('gallery-item-1');
					el.classList.remove('gallery-item-2');
					el.classList.remove('gallery-item-3');
					el.classList.remove('gallery-item-4');
					el.classList.remove('gallery-item-5');
				});

				this.carouselArray.slice(0, 5).forEach((el, i) => {
					el.classList.add(`gallery-item-${i+1}`);
				});
			   }
			 
			   // Update the current order of the carouselArray and gallery
			   setCurrentState(direction) {
				if (direction.className == 'gallery-controls-previous') {
					this.carouselArray.unshift(this.carouselArray.pop());
				} else {
					this.carouselArray.push(this.carouselArray.shift());
				}
				this.updateGallery();
			   }
			 
			   // Construct the carousel controls
			   setControls() {
				this.carouselControls.forEach(control => {
					galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
					document.querySelector(`.gallery-controls-${control}`).innerText = control;
				});
			   }
			   // Add a click event listener to trigger setCurrentState method to rearrange carousel
			   useControls() {
				const triggers = [...galleryControlsContainer.childNodes];
				triggers.forEach(control => {
					control.addEventListener('click', e => {
						e.preventDefault();
						this.setCurrentState(control);
					});
				});
			   }
			 }
			 const galleryCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
			 galleryCarousel.setControls();
			 galleryCarousel.useControls();
		}
	  };
})(jQuery, Drupal);

//Accordion Tabs
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("panel-active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} 
		else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
$("#defaultOpen").click();

function openTab(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
$(".tabcontent-active").css('display','block');

function opentab_banner(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("tab_active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += "tab_active";
}
 