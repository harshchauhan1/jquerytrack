$ ('#blog a').click( function (e) {
  e.preventDefault();
});



$ ('#blog').find("h3").click( function () {
  $ ('#blog p:visible').slideUp();  
  $ (this).next().slideDown();
});
