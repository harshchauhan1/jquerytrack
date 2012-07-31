$ ('div.module').hide();
var ul_element = $ ('<ul></ul>').attr('id', 'new_ul');
$ ('div.module:first').before(ul_element);

console.log( $ ('div.module:first'));
$ ('div.module').each ( function () {
  var curr_div = $ (this);
  var li_element = $ ('<li></li>').html($ (this).find("h2").text()) ;
  $ ('#new_ul').append(li_element);
  li_element.bind('click', function () {
    curr_div.show().siblings( 'div.module').hide();
    $ (this).addClass("current").siblings().removeClass("current");
  });
}); 


ul_element.children().first().trigger('click');


