$('document').ready(function(){
var emp_data= [];
count = 0;
$ ('#emp_div .sub_div').draggable({ revert: true });
$ ('#roles_div div').droppable({ 
                drop: function(event, ui) {
                        id = $(this).attr('id');
                        count = count + 1;             
                        emp_data.push(ui.draggable.text());
                        var a = $('<div class="sub_div" name=' + ui.draggable.text() + '>' + ui.draggable.text() + '<input type="image" src="cross_circle.png" class="to_hide" align="right"></input></div>');
                        a.addClass("to_cross");
                        
                        if(!($(this).find('div[name='+ ui.draggable.text() + ']')[0])) {           
                        $(this).append(a);
                        var b = $('<div name=' + ui.draggable.text() + '><input type="text" disabled style="width:75px" value =' + ui.draggable.text() + '></input><textarea cols="50" rows="5">enter todos for ' + ui.draggable.text() + ' here</textarea></div>');
			$('#' +id+'2').append(b);
                        }
                       
		        $('.to_cross').each( function () { $(this).mouseover( function() { $(this).find('input').removeClass("to_hide");});});
		        $('.to_cross').each( function () { $(this).mouseout( function() { $(this).find('input').addClass("to_hide");});});
                        $('input[src="cross_circle.png"]').click( function () {
                                                          alert("do you want to remove this");
                                                          $(this).closest('div').remove();
                                                          $('#' +id+'2').find('div[name='+ ui.draggable.text() + ']').remove();
                                                          
                                            
                                   });

                                    
                }

        });

$('input[src="plus.png"]').click( function() {
                                          $(this).closest('div').find('div').removeClass("to_hide");
				          $(this).addClass("to_hide");
                                          $(this).next().removeClass("to_hide");
                                     });

$('input[src="minus.png"]').click( function() {
                                          $(this).closest('div').find('div').addClass("to_hide");
				          $(this).addClass("to_hide");
                                          $(this).prev().removeClass("to_hide");
                                     });


                        



                          


});
