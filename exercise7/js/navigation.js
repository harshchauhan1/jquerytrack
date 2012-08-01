console.log($ ('#nav > li'));
$ ('#nav > li').hover ( function () { 
  $ (this).find ('ul').css ("display", "block");} ,
  function () { $ (this).find ('ul').css ("display", "none");});
