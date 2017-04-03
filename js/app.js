(function($, document, window){
	
	$(document).ready(function(){

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".collapsible").slideToggle();
		});

		if( $(".map").length){
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14 
					}  
				},
				marker:{
					address: "40 Sibley St, Detroit",
				}
			},
			"autofit" );
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);