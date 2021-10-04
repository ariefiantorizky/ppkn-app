const nama = document.getElementById("nama-user");
const password = document.getElementById("password");
const kodeUnik = document.getElementById("kode-unik");
const form = document.querySelector("form");
const yesBtn = document.getElementById("ya");
const noBtn = document.getElementById("tidak");
const modals = document.querySelector(".container-modal");

window.addEventListener("contextmenu", function () {
    window.open("/menu/index.html", "_self");
})

yesBtn.addEventListener("click", function () {
    modals.style.display = "none";
});

noBtn.addEventListener("click", function () {
    window.open("/menu/index.html", "_self");
});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const pass = "Zn$9$J}qZ!";
    const code = 588110023934423;

    if (password.value == pass) {
        if (kodeUnik.value == code) {
            console.log("anda Berhasil Masuk");
            window.open("../../menu/dashboard-guru/", "_parent");

            document.querySelector(".err-code").style.display = "none";
        }

        document.querySelector(".err-pass").style.display = "none";
    }

    if (password.value != pass) {
        document.querySelector(".err-pass").style.display = "block";
    }

    if (kodeUnik.value != code) {
        document.querySelector(".err-code").style.display = "block";
    }

    localStorage.setItem("nama", nama.value);
})