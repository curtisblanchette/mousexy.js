(function($){
    $.fn.mousexy = function(el, options) {
    
    $(function () {
        $(document).tooltip({
            track: true
        });
    });

    var $stage = $(this);

    $stage.mousemove(function (e) {

        var stageOffset = $stage.offset(),
            relativeX = (e.pageX - stageOffset.left),
            relativeY = (e.pageY - stageOffset.top); //minus the stages offset to achieve exact mousePos inside of div

   /*     TweenMax.to($bubblesFront, 2, {
            x: ((relativeX - $bubblesFW) / 16)
        }); //set movement ammount by division
        TweenMax.to($bubblesBack, 2, {
            x: ((relativeX - $bubblesBW) / 32)
        });
        TweenMax.to($bubblesFront, 2, {
            y: ((relativeY - $bubblesFH) / 16)
        });
        TweenMax.to($bubblesBack, 2, {
            y: ((relativeY - $bubblesBH) / 32)
        });

        TweenMax.to($wave, 2, {
            x: ((relativeX - $waveW) / 4)
        });
*/

        $stage.html('x=' + relativeX + 'y=' + relativeY );
    });



    }//end plugin fn
}(jQuery));