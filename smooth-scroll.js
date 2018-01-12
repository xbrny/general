 // Add smooth scrolling to all anchor tags 
$j('a[href^=#]').on('click', function(event){     
	event.preventDefault();
	if($j(this.hash).offset() != undefined) { 
		$j('html,body').animate({
			scrollTop:$j(this.hash).offset().top-100
		}, 800);
	}
});

// Add toggle hide and show for why choose us button
$j(document).ready(function(){
	$j(".slide-toggle").click(function(){
		$j(".why-choose-us-hidden").slideToggle(800);
	});
});