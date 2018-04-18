

$('#about').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('#aboutMe, img').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
});

$('#resume').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('iframe, img').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');

});

$('#me').click(function () {
   event.preventDefault();
   $('iframe:visible').toggleClass('invisible');
   $('#aboutMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('img').toggleClass('invisible');
});

$('#me').hover(function () {
    $(this).css({'color': '#9E082C'});
}, function () {
    $(this).css({'color':'#4F4B5C'})
});

$('#contact').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('.contactMe, img').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
});

$('#projects').click(function () {
    event.preventDefault();
    $('#projectMe, img').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
});