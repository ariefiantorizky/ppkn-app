(() => {
    if ('serviceWorker' in navigator) {
        window.addEventListener("load", function () {
            navigator.serviceWorker.register('../../service-worker.js').then((registration) => {
                console.log("Registrasi Aplikasi Berhasil!");
            }, function (err) {
                console.log(err);
            })
        })
    } else {
        alert("Mohon maaf perangkat anda tidak mendukung!")
    }
})();

const animation = document.querySelector(".animation");

setTimeout((e) => {
    animation.style.display = "none";
}, 10000);

// Device detect

const device = navigator.userAgent;
const deviceDetect = document.getElementById("device-detect");

const android = device.match(/Android/i);
const iPhone = device.match(/iPhone/i);

if (android || iPhone) {
    deviceDetect.style.display = "none";
    document.body.classList.remove("h3NgTAj8XBrGvTEDbEBaJMGez");

    console.log("You can access this website :D")
} else {
    deviceDetect.style.display = "flex";
    document.body.classList.add("h3NgTAj8XBrGvTEDbEBaJMGez");

    console.log("Sorry!");
}

let deferredPrompt;
const addBtn = document.querySelector('#install-app');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                alert('Terima Kasih!');
            } else {
                alert('Yahh :( Kamu yakin gak mau pakai aplikasinya ?');
            }
            deferredPrompt = null;
        });
    });
});