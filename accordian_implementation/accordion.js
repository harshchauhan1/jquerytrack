$('document').ready(function() {
  var a_all = $('#main a');
  $('a').click( function(event) { 
    event.preventDefault();  
    if($(this).children().length == 0) { 
      var index = a_all.index($(this));
      window.open("allornone.html?id="+index , '_self');
    }  
  });
  var id = window.location.search.substring(1).split("=");
  if(id[1]) {
   var req_element = $(a_all.get(id[1]))[0];
   $(req_element).parent().css('background-color', 'white');
   $(req_element).parents().show();
  }
});
