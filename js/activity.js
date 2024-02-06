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

     


});

// $(document).bind("click", function (e) { 
    // $(e.target).closest("li").toggleClass("highlight");