

$('#about').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('#aboutMe:hidden').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#resume').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('iframe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#me').click(function () {
   event.preventDefault();
   $('iframe:visible').toggleClass('invisible');
   $('#aboutMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('img:hidden').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#contact').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('.contactMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#projects').click(function () {
    event.preventDefault();
    $('#projectMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
});

$('#socialMedia').click(function () {
   event.preventDefault();
   $('#socialMediaMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('img:visible').toggleClass('invisible');
    $('iframe:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');

});


$('#me').hover(function () {
    $(this).css({'color': '#9E082C'});
}, function () {
    $(this).css({'color':'#4F4B5C'});
});