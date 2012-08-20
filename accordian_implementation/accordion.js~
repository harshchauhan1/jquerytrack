$('document').ready(function() {
  var a_all = $('#main a');
  $('a').click( function(event) { 
    event.preventDefault();  
    if($(this).children().length == 0) { 
      var index = a_all.index($(this));
      window.open("allornone.html?id="+index);
    }  
  });
  var id = window.location.search.substring(1).split("=");
  if(id[1]) {
   console.log($($(a_all.get(id[1]))[0]).parent().css('background-color', 'white').parents().slideDown());
  }
});
