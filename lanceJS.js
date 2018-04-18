

$('#about').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('#aboutMe:hidden').toggleClass('invisible');
    $('#resumeMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('#pictureMe:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#resume').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('#resumeMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('#pictureMe:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});    $('.contactMe:visible').toggleClass('invisible');


$('#me').click(function () {
   event.preventDefault();
   $('#resumeMe:visible').toggleClass('invisible');
   $('#aboutMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
    $('#pictureMe:hidden').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#contact').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('.contactMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('#pictureMe:visible').toggleClass('invisible');
    $('#resumeMe:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
});

$('#projects').click(function () {
    event.preventDefault();
    $('#projectMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('#pictureMe:visible').toggleClass('invisible');
    $('#resumeMe:visible').toggleClass('invisible');
    $('#socialMediaMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
});

$('#socialMedia').click(function () {
   event.preventDefault();
    $('#socialMediaMe:hidden').toggleClass('invisible');
    $('#aboutMe:visible').toggleClass('invisible');
    $('#pictureMe:visible').toggleClass('invisible');
    $('#resumeMe:visible').toggleClass('invisible');
    $('#projectMe:visible').toggleClass('invisible');
    $('.contactMe:visible').toggleClass('invisible');
});


$('#me').hover(function () {
    $(this).css({'color': '#9E082C'});
}, function () {
    $(this).css({'color':'#4F4B5C'});
});