$(document).ready(function(){
    $(".invisible-content").hide();  // Initially hide the extra content

    $(document).on('click', '.sec-btn', function(e){
        e.preventDefault();  // Prevent the default action of the anchor tag

        var $content = $(this).prev('.invisible-content');  // Find the hidden content just before the button
        var isVisible = $content.is(":visible");
        
        $(this).text(isVisible ? 'Read More' : 'Read Less');  // Toggle button text
        $content.slideToggle();  // Toggle visibility with a slide animation
    });
});