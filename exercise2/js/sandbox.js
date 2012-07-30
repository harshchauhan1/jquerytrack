console.log( $( 'img' ));
$( 'img' ).each( function (index) {
                 console.log(index + ': ' + $(this).attr('alt'));});

console.log( $( "input[name='q']" ).parent ().attr ('class', 'myclass'));

console.log($( 'li[class="current bar"]').removeAttr('class').next().attr('class', 'currrent bar'));

console.log( $ ( '#specials :submit'));

console.log($ ('#slideshow li:nth-child(1)').attr('class', 'current'));
console.log($ ('#slideshow li:nth-child(1)').siblings().attr('class', 'diabled'));
