// $(document).ready(function() { 
//     // Highlight the selected activity cell
//     $('table tbody td').not(':first-child').on('click', function() {
//         if ($(this).text() !== 'Not Available') {
//             $(this).toggleClass("tdhighlight");
//         }
//     });

//      // Disable selection for "Not available" cells and heading/title cells
//      $('table thead th, table tbody td:first-child').on('click', function(e) {
//         e.preventDefault();
//     });

//     // Change cursor to hand on selectable cells
//     $('table tbody td').not(':first-child').css('cursor', 'pointer');

//     if($(this).hasClass("tdhighlight")) {
//         $('#displaySelected').css("visibility","visible");
//         $('#displaySelected').css("margin-top","2em");
//         $('#result').append("<p>"+content+"</p>");
//     } else {
//         $('#result p:contains('+content+')').remove();

//         if($('#result').has('p').length == false){
//             $('#displaySelected').css("visibility","hidden");
//             $('#displaySelected').css("margin-top","0");
//         }
//     }
// });

// // $('#activitiesTable thead th, #activitiesTable tbody td:first-child').on('click', function(e) {
// //             e.preventDefault();
// //         });
// //     $('#activitiesTable tbody td').not(':first-child').css('cursor', 'pointer');});


$(document).ready(function() {
    // Highlight the selected activity cell
    $('#activitiesTable tbody td').not(':first-child').on('click', function() {
        var content = $(this).text();
        var cliffSite = $('#activitiesTable thead th').eq($(this).index()).text();
        if ($(this).text() !== 'Not Available') {
            $(this).toggleClass("selected");
            if ($(this).hasClass("selected")) {
                $('#result').append("<p>"+content+"at "+cliffSite+"</p>");
            } else {
                $('#result p:contains('+content+')').remove();
            }
            if ($('#result').children().length == 0) {
                $('#displaySelected').css("visibility","hidden");
                $('#displaySelected').css("margin-top","0");
            } else {
                $('#displaySelected').css("visibility","visible");
                $('#displaySelected').css("margin-top","2em");
            }
        }
    });

    // Disable selection for "Not available" cells and heading/title cells
    $('#activitiesTable thead th, #activitiesTable tbody td:first-child').on('click', function(e) {
        e.preventDefault();
    });

    // Change cursor to hand on selectable cells
    $('#activitiesTable tbody td').not(':first-child').css('cursor', 'pointer');
});

