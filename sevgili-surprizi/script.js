const adim1 = document.getElementById("adim1");
const adim2 = document.getElementById("adim2");
const adim3 = document.getElementById("adim3");
const adim4 = document.getElementById("adim4");
const adim5 = document.getElementById("adim5");
const adim6 = document.getElementById("adim6");
const adim7 = document.getElementById("adim7");
const adim8 = document.getElementById("adim8");
const buyukKalp = document.getElementById("buyukKalp");
const efektlerDiv = document.getElementById("efektler");
const sarki = document.getElementById("arkaplanSarki");

buyukKalp.addEventListener("click", () => {
    adim1.style.display = "none";
    adim2.style.display = "flex";

    setTimeout(() => {
        adim2.style.display = "none";
        adim3.style.display = "flex";
    }, 2000);

    setTimeout(() => {
        adim3.style.display = "none";
        adim4.style.display = "flex";
    }, 2000);

    setTimeout(() => {
        adim4.style.display = "none";
        adim5.style.display = "flex";
    }, 2000);

    setTimeout(() => {
        adim5.style.display = "none";
        adim6.style.display = "flex";
    }, 2000);

    setTimeout(() => {
        adim6.style.display = "none";
        adim7.style.display = "flex";
    }, 2000);

    setTimeout(() => {
        adim7.style.display = "none";
        adim8.style.display = "flex";
        baslatEfektler();
    }, 4000);
});

function baslatEfektler() {
    sarki.play().catch(() => {
        console.log("Otomatik çalma engellenmiş olabilir.");
    });

    const ekranGenisligi = window.innerWidth;
    const ekranYuksekligi = window.innerHeight;

    // Dans eden ayıcıklar (resmin üstüne gelmesin diye üst sınır %50)
    for (let i = 0; i < 5; i++) {
        const ayicik = document.createElement("img");
        ayicik.src = "images/dans_ayicik.gif";
        ayicik.style.left = Math.random() * (ekranGenisligi - 100) + "px";
        ayicik.style.top = Math.random() * (ekranYuksekligi / 2) + 50 + "px";
        ayicik.style.zIndex = 2;
        efektlerDiv.appendChild(ayicik);
    }

    // Uçan kalpler ve balonlar
    setInterval(() => {
        const kalp = document.createElement("div");
        kalp.classList.add("kalp");
        kalp.style.left = Math.random() * (ekranGenisligi - 50) + "px";
        kalp.style.top = ekranYuksekligi + "px";
        kalp.textContent = "❤️";
        efektlerDiv.appendChild(kalp);

        const balon = document.createElement("div");
        balon.classList.add("balon");
        balon.style.left = Math.random() * (ekranGenisligi - 50) + "px";
        balon.style.top = ekranYuksekligi + "px";
        balon.textContent = "🎈";
        efektlerDiv.appendChild(balon);

        setTimeout(() => {
            kalp.remove();
            balon.remove();
        }, 4000); // Balon ve kalp biraz daha uzun süre uçsun
    }, 500);
}
