 $(document).ready(function () {
    // This line adds the "target=_blank" parameter to all external links
    //That means that when you click in an external link, it will be opened in a new tab
    $('a.external').attr('target', '_blank');


    // This line add a orange backfround to the code collapse so it's more visible
    $('summary').css('background-color', '#F0B37E');
    // This line changes the cursor to "pointer" when hovering over code collapse
    $('summary').css('cursor', 'pointer');
    
});