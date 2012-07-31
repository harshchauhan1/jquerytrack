    var new_items = [];
    for (i = 0; i < 5; i++) {
    new_items.push('<li>item' + i + '</li>');
    }
    $ ( '#myList' ).append(new_items.join( '' ));
    console.log($ ( '#myList' ));

    console.log($('#myList').find("li:odd").remove());

    $ ('div.module:last').append ('<h2></h2>');
    $ ('div.module:last').append ('<p></p>');
    console.log ($ ('div.module:last'));
    
    $ ('div.module:last select option:eq(2)' ).after('<option value="wednesday">wednesday</option>');
    console.log( $('div.module:last  select option:eq(3)'));

    $ ('div.module:last').after('<div class = "module" id="last_div"></div>');
    $ ( '#last_div').append('<img src="images/fruit.jpg" alt="fruit" />');
    console.log( $ ('#last_div'));
