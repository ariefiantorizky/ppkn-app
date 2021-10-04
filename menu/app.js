const loading = document.querySelector(".loading");

window.addEventListener("load", function () {
    loading.classList.add("hidden");
})

const closeModalVideo = document.getElementById("close-modal-video");
const modalVideo = document.querySelector(".modal-video");

closeModalVideo.addEventListener("click", function () {
    modalVideo.classList.add("hidden");
})

const allImage = document.querySelectorAll("img");
for (let i = 0; i < allImage.length; i++) {
    allImage[i].alt = "Image is loading, Please Wait...";
}

// DASHBOARD

// Tabs