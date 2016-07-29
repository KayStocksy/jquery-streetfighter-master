$(document).ready(function() {
   $('.ryu').mouseenter(function() {
		    $('.ryu-still').hide();
		    $('.ryu-ready').show();
		    $('.ryu-cool').hide();
		 });

   $('.ryu').mouseleave(function() {
		    $('.ryu-ready').hide();
		    $('.ryu-still').show();
		});
  
   $('.ryu').mousedown(function() {
  		// play hadouken sound
  		playHadouken();
	  	$('.ryu-ready').hide();
	  	$('.ryu-throwing').show();
	    $('.hadouken').show().animate(
				  {'left': '1020px'}, 500,
				  function() {
				    $(this).hide();
				    $(this).css('left', '520px');
					});  
	});
    $('.ryu').mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
});

$(document).on("keydown",function(event){
		if (event.which == 88){
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		};
	});
	$(document).on("keyup",function(event){
		if (event.which == 88){
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		};
	});
});




var playHadouken = function() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
