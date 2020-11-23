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