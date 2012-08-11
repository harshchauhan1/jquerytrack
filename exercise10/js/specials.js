$(document).ready(function() {
        var data;
        var cache = null;
        $.ajax ({
                                url : 'data/specials.json',
				type : 'GET',
				dataType : 'json',
				success : function(specials) { 
					  data = specials; console.log(data["monday"]);
                                }
		       });
		

        var $specials = $ ('#specials');
	
	$specials.find('li.buttons').remove();
	
	var $target = $ ('<div/>');
	
	$specials.append($target);
	
        
	var $select = $specials.find('select').change(function () {
                          var day = $select.val();
                          $target.empty(); 
                          set_details(data, day);});

	
        var set_details = function (data, day) {
                          var details = data[day];                                                                   
			  var $heading = $ ('<h3>' + details.title + '</h3>');
                          var $text = $ ('<p>' + details.text + '</p>');
                          var $image = $ ('<img/>');
                          $image.attr('src', details.image);
                          $target.append($heading);
                          $target.append($text);
			  $target.append($image);
                          $target.css('color', details.color); 
                          };	

});

