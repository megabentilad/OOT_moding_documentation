 $(document).ready(function () {
    // This line adds the "target=_blank" parameter to all external links
    //That means that when you click in an external link, it will be opened in a new tab
    $('a.external').attr('target', '_blank');
});