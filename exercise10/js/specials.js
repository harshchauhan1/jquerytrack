$(document).ready(function () {
  cache = null;
  var $specials = $('#specials');
  $specials.find('li.buttons').remove();
  var $target = $('<div/>');
  $specials.append($target);
  var $select = $specials.find('select').change(function () {
    var day = $select.val();
    $target.empty();
    if (cache != null) {
      details = cache[day];
      set_details(details);
    } else {
      $.ajax({
        url: 'data/specials.json',
        type: 'GET',
        dataType: 'json',
        success: function (specials) {
          cache = specials;
          details = cache[day];
          set_details(details);
        }
      });
    }
  });
  var set_details = function (details) {
      var $heading = $('<h3>' + details.title + '</h3>');
      var $text = $('<p>' + details.text + '</p>');
      var $image = $('<img/>');
      $image.attr('src', details.image);
      $target.append($heading);
      $target.append($text);
      $target.append($image);
      $target.css('color', details.color);
    };
});
