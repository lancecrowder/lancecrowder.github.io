

$('#about').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('#aboutMe, img').toggleClass('invisible');
});

$('#resume').click(function () {
    // console.log('i got clicked!');
    event.preventDefault();
    $('iframe, img').toggleClass('invisible');
});