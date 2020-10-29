let video = document.getElementById("video1")

function rewind() {
    video.currentTime -= 15;
}

function forward() {
    video.currentTime += 15;
}


function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0;

}

function speedDown() {
    video.playbackRate -= 0.1;
}

function speedUp() {
    video.playbackRate += 0.1;
}