const dash1 = document.getElementById("dash-1");
const dash2 = document.getElementById("dash-2");
const dash3 = document.getElementById("dash-3");
const dash4 = document.getElementById("dash-4");
const dash5 = document.getElementById("dash-5");

const menu1 = document.getElementById("menu-1");
const menu2 = document.getElementById("menu-2");
const menu3 = document.getElementById("menu-3");
const menu4 = document.getElementById("menu-4");
const menu5 = document.getElementById("menu-5");

const beforeSelected = document.querySelector(".before-content");

dash1.addEventListener("click", function () {
    menu1.classList.remove("hidden");

    menu2.classList.add("hidden");
    menu3.classList.add("hidden");
    menu4.classList.add("hidden");
    menu5.classList.add("hidden");
    beforeSelected.classList.add("hidden");
})

dash2.addEventListener("click", function () {
    menu2.classList.remove("hidden");

    menu1.classList.add("hidden");
    menu3.classList.add("hidden");
    menu4.classList.add("hidden");
    menu5.classList.add("hidden");
    beforeSelected.classList.add("hidden");
})

dash3.addEventListener("click", function () {
    menu3.classList.remove("hidden");

    menu1.classList.add("hidden");
    menu2.classList.add("hidden");
    menu4.classList.add("hidden");
    menu5.classList.add("hidden");
    beforeSelected.classList.add("hidden");
})

dash4.addEventListener("click", function () {
    menu4.classList.remove("hidden");

    menu1.classList.add("hidden");
    menu2.classList.add("hidden");
    menu3.classList.add("hidden");
    menu5.classList.add("hidden");
    beforeSelected.classList.add("hidden");
})

dash5.addEventListener("click", function () {
    menu5.classList.remove("hidden");

    menu1.classList.add("hidden");
    menu2.classList.add("hidden");
    menu3.classList.add("hidden");
    menu4.classList.add("hidden");
    beforeSelected.classList.add("hidden");
})

const logout = document.getElementById("logout");
const namaLengkap = document.getElementById("nama-lengkap");

logout.addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.removeItem("nama");

    window.open("/menu/index.html", "_parent");
})