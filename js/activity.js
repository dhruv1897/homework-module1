$(document).ready(function() { 
    // Highlight the selected activity cell
//     $(document).bind("click", function (e) { 
//         $(e.target).closest("td").toggleClass("Selected");   
// })

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

// $(document).bind("click", function (e) { 
    // $(e.target).closest("li").toggleClass("highlight");