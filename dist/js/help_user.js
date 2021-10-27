const modalHelp = document.getElementById("modal-help");
const form = document.getElementById("form");
const closeButton = document.getElementById("close");
const modal = document.querySelector(".container-modal");


modalHelp.addEventListener("click", function () {
    modal.classList.remove("hidden");
})

const url = "https://script.google.com/macros/s/AKfycbz4IFJRSn1vEkSjl-_LRy7_M8jE7TKRQSjYFVpoJUHHv8Bfz8ph5aJB4BbnXX3AARhy/exec";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(url, {
            method: "POST",
            body: new FormData(form)
        })

        .then(respon => {
            const done = document.querySelector(".done");
            const send = document.querySelector(".send");

            done.classList.remove("hidden");
            send.classList.add("hidden");

            console.log(respon);
        })

        .catch(error => {
            alert("Error!");

            console.log(error);
        })
})

closeButton.addEventListener("click", function () {
    modal.classList.add("hidden")
})

batal.addEventListener("click", function () {
    modal.classList.add("hidden");
})