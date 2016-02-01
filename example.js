$(document).ready(function(){

	
//Accordion

var sectionNumber = 0;

function handleSections(els){
	if ($(els).length > 0){
		
		$(els).hide();
		
		$(els).each(function(){
			var title = $(this).children("h3:first-child").text();
			$(this).attr("id", "section-"+sectionNumber);
			$(this).before('<a href="#" class="section-link" data-target="section-'+sectionNumber+'" title="Toggle '+ title +'">'+ title +'</a>');
			sectionNumber++;
		});
		
		$(".section-link").on("click", function(event){
			event.preventDefault();
			var target = $(this).attr("data-target");
			
			if ($("#"+target).is(":visible")){
				$("#"+target).slideUp(500);
				$(this).removeClass("expanded");
			} else {
				$("#"+target).slideDown(650);
				$(this).addClass("expanded");
			}
			return false;
		});
		
	}
}


handleSections(".section");
	
	
	
//Responsive menu  
    $(".nav-responsive-link").on("click", function(e){
       e.preventDefault();
		$(".nav").toggle();
		
	});		
	
	
	
	
	
});
	
	
	
	
