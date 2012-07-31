var a =  $ ('label[for="q"]').text();
$ ('#search input.input_text').val(a);
$ ('#search input.input_text').addClass('hint');
$ ('label[for="q"]').remove();
$ ('#search input.input_text').bind('focus', function () {
  $ (this).val("").removeClass("hint");
});
$ ('#search input.input_text').bind('blur', function () {
  if($ (this).val().trim()=="") {
    $ (this).val(a);
    $ (this).addClass("hint");
  }
});
