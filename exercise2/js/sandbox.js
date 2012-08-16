console.log( $( 'img' ));
$( 'img' ).each( function (index) {
                 console.log(index + ': ' + $(this).attr('alt'));});

console.log( $( "input[name='q']" ).parent ().addClass ('myclass'));

console.log($( 'li[class="current bar"]').removeClass('current bar').next().addClass('currrent bar'));

console.log( $ ( '#specials select').closest('form').find('input[type = "submit"][value = "Go"]'));

console.log($ ('#slideshow li:nth-child(1)').addClass('current'));
console.log($ ('#slideshow li:nth-child(1)').siblings().addClass('disabled'));
