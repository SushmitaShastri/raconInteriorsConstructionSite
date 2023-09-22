// Initialize the Bootstrap carousel
$('.carousel').carousel();

// Automatically play the video when it's focused
$('#videoModal').on('shown.bs.modal', function () {
    $('#video').get(0).play();
});
