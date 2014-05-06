$(document).ready(function() {

    // Source: http://adactio.com/journal/5429/
    var size = window.getComputedStyle(document.body,':after').getPropertyValue('content');

    if (size == 'widescreen') {
        // Load some more content.
    }

    // If you’re finding that some browsers are including the quotes in the returned :after value, try changing
    if (size == 'widescreen')  {}
    // to
    if (size.indexOf("widescreen") !=-1) {}

});