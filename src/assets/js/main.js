$(document).ready(function() {
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

$(document).ready(function() {
    function enviarDatos(){
        var action_src = "https://pruebasneuro.co/N-1057backgane/wp-content/themes/gane/mail.php";
        var your_form = document.getElementById('formulario-contact');
        your_form.action = action_src ;
        alert("The form was submitted");
    }
});