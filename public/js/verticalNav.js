jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 600) {
        $('#nav-menu-horizontal').removeClass('pure-menu-horizontal');
      }
    };

    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});