$(document).ready(function() { 
    // Highlight the selected activity cell
    $('table tbody td').not(':first-child').on('click', function() {
        if ($(this).text() !== 'Not Available') {
            $(this).toggleClass("selected");
        }
    });

     // Disable selection for "Not available" cells and heading/title cells
     $('table thead th, table tbody td:first-child').on('click', function(e) {
        e.preventDefault();
    });

    // Change cursor to hand on selectable cells
    $('table tbody td').not(':first-child').css('cursor', 'pointer');


});

