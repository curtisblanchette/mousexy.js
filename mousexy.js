(function($){
    $.fn.mousexy = function(el, options) {
    
        var $stage = $(this);

        $stage.mousemove(function (e) {
    
           var stageOffset = $stage.offset(),
               relativeX = (e.pageX - stageOffset.left),
               relativeY = (e.pageY - stageOffset.top); //minus the stages offset to achieve exact mousePos inside of el
           $stage.html('x=' + relativeX + 'y=' + relativeY );
        });



    };//end plugin fn
}(jQuery));
