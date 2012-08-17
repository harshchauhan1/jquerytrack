$(document).ready(function() {

	$ ('body').prepend($ ('#slideshow'));

	$ ('#slideshow li').hide();
      
	navigation = $ ('<div><div/>').insertAfter( $ ('#slideshow') );

	var current = 1;

	var length = 0;
 
	$ ('#slideshow li:first').fadeIn();

	length = $ ("#slideshow li").size();

	navigator = function(count) {
		       navigation.text(count + ' of ' + length + ' images');
		    }

	slide_int = setInterval(function() {

	    	                  navigator(current);

	                          $ ("#slideshow li:nth-child(" + current + ")").fadeOut(1500, function () { 

	                            if (current == length) {
		                      
                                        current=0;

	                            } 

                                    current++;
 
	                            $("#slideshow li:nth-child(" + current + ")").fadeIn(1500).delay(3000);

	                            navigator(current);

	                        });

	            }, 5000);

 });


   
  


  
   
  
