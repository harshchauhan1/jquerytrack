$('document').ready(function () {
    $('#emp_div .sub_div').draggable({
        revert: true
    });

    $('#roles_div div').droppable({
        drop: function (event, ui) {
            id = $(this).attr('id');
            var a = $('<div name=' + ui.draggable.text() + '>' + ui.draggable.text() + '</div>');
            var c = $('<input type="image" src="cross_circle.png" class="to_hide" align="right"></input>');
            c.bind('click', delete_entry);
            a.addClass("to_cross");
            a.append(c);
            console.log(a);

            if (!($(this).find('div[name=' + ui.draggable.text() + ']')[0])) {
                $(this).append(a);
                var b = $('<div name=' + ui.draggable.text() + '><input type="text" disabled style="width:75px" value =' + ui.draggable.text() + '></input><textarea cols="50" rows="5">enter todos for ' + ui.draggable.text() + ' here</textarea></div>');
                $('#' + id + '2').append(b);
            }

            $('.to_cross').each(function () {
                $(this).mouseover(function () {
                    $(this).find('input').removeClass("to_hide");
                });
            });
            $('.to_cross').each(function () {
                $(this).mouseout(function () {
                    $(this).find('input').addClass("to_hide");
                });
            });

            

        }

    });

    function delete_entry() { 
        var answer = confirm("do you want to remove this");
	if(answer) {
            var name = $(this).closest('div').attr('name');
            var index = $(this).closest('div').parent().attr('id');
            $('#' + index + '2').find('div[name=' + name + ']').remove();
            $(this).closest('div').remove();
	}
        if( $('#' + index + '2').is(':empty') ) {
            $('#' + index + '2').prev().find($('input[src="plus.png"]')).removeClass("to_hide");
	    $('#' + index + '2').prev().find($('input[src="minus.png"]')).addClass("to_hide");
        }
    }
 
    $('input[src="plus.png"]').click(function () {
        $(this).closest('div').next().removeClass("to_hide");
        $(this).addClass("to_hide");
        $(this).next().removeClass("to_hide");
    });

    $('input[src="minus.png"]').click(function () {
        $(this).closest('div').next().addClass("to_hide");
        $(this).addClass("to_hide");
        $(this).prev().removeClass("to_hide");
    });


});
