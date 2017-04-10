var animateHTML = function() {
  var elems,
      windowHeight

  var init = function() {
    elems = document.getElementsByClassName( "fade-inUp-start" );
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }

  var _addEventHandlers = function() {
      window.addEventListener( "scroll", _checkPosition );
      window.addEventListener( "resize", init )
  }

  var _checkPosition = function() {
    for ( var i = 0; i < elems.length; i++ ) {

      var posFromTop = elems[i].getBoundingClientRect().top;

      if ( posFromTop - windowHeight <= -20 ) {
        elems[i].className = elems[i].className.replace( "fade-inUp-start", "fade-inUp-element" );
      }

    }
  }

  return {
    init: init
  }

}

animateHTML().init();
