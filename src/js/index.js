console.log('Hello, github');


function removeIOSRubberEffect( element ) {

    element.addEventListener( "touchstart", function () {

        var top = element.scrollTop, totalScroll = element.scrollHeight, currentScroll = top + element.offsetHeight;

        if ( top === 0 ) {
            element.scrollTop = 1;
        } else if ( currentScroll === totalScroll ) {
            element.scrollTop = top - 1;
        }

    } );

}



removeIOSRubberEffect(document.querySelector('.main'));