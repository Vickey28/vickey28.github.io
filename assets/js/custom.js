$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 300){
		  $("header").addClass("shrink");
		}
		else
		{
			$("header").removeClass("shrink");
		}
	})

wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
	wow.init();
	
	$(".arrow").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $(".map").position().top
    });

});

        