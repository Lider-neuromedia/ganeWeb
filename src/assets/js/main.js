/*$(document).ready(function() {
    $('#btn-example1').click(function() {
        $('#example1 ul').playSpin({
            time: 1000,
            endNum: [1, 2, 7],
            stopSeq: 'leftToRight',
            onEnd: function() {
                // ding.play();
            },
            onFinish: function() {
                // sound.pause();
            }
        });
    });
});
*/
/*
$(document).ready(function() {
    function enviarDatos(){
        var action_src = "https://gane.com.co/api/wp-content/themes/gane/mail.php";
        var your_form = document.getElementById('formulario-contact');
        your_form.action = action_src ;
        alert("The form was submitted");
    }
});
*/

function carouselGane(){
    jQuery(document).ready(function() {
        jQuery('.carousel.carousel-multi-item-gane.v-2 .carousel-item').each(function(){
            var next = jQuery(this).next();
            if (!next.length) {
            next = jQuery(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo(jQuery(this));
        
            for (var i=0;i<5;i++) {
            next=next.next();
            if (!next.length) {
                next=jQuery(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo(jQuery(this));
            }
        });
    });
}
