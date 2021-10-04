const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const audio = document.getElementById("audio");

playButton.addEventListener("click", function () {
    audio.play();

    console.log("Audio Played")

    playButton.classList.add("hidden");
    pauseButton.classList.remove("hidden");
})

pauseButton.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;

    console.log("Audio Stopped");

    playButton.classList.remove("hidden");
    pauseButton.classList.add("hidden");
})