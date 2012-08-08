$(document).ready(function(){

	var element = $ ('#blog').find('h3');
	
	$('#blog').find('a').click( function (e) { e.preventDefault();});

	element.each( function () {
	
		target = $('<div><div/>');
	  
	  	$ (this).after(target);

	  	$(this).data('target', $(this).find('a').attr('href').replace('#', ' #'));

	
	})

	.click( function () {
	 
	        temp = $(this).data('target');

    		console.log(target);

		$(this).next().load('data/' + temp);

	  

	}); 
	
});

