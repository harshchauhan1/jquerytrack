$('document').ready(function(){
var emp_data= [];
$ ('#emp_div .sub_div').draggable({ revert: true });
$ ('#roles_div div').droppable({ 
                drop: function(event, ui) {
                        id = $(this).attr('id');
                        id1 = id + '3';
                        var a = $('<div class="sub_div">' + ui.draggable.text() + '<input type="image" src="cross_circle.png" class="to_hide" align="right"></input></div>');
                        a.addClass("to_cross");
                        $(this).append(a);
                        var b = $('<div><input type="text" disabled style="width:75px" value =' + ui.draggable.text() + '></input><textarea 					cols="50" rows="5">enter todos for ' + ui.draggable.text() + ' here</textarea></div>');
			$('#' +id+'2').append(b);
                        console.log($(a));
		        $('.to_cross').each( function () { $(this).mouseover( function() { $(this).find('input').removeClass("to_hide");});});
		        $('.to_cross').each( function () { $(this).mouseout( function() { $(this).find('input').addClass("to_hide");});});
                        $('input[src="cross_circle.png"]').click( function () {
                                                          alert("do you want to remove this");
                                                          $(this).closest('div').remove();
                                            
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
