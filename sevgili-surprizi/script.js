// Sayfa adımları
const adim1 = document.getElementById("adim1");
const adim2 = document.getElementById("adim2");
const adim3 = document.getElementById("adim3");
const adim4 = document.getElementById("adim4");
const buyukKalp = document.getElementById("buyukKalp");
const efektlerDiv = document.getElementById("efektler");
const foto = document.getElementById("foto");
const sarki = document.getElementById("arkaplanSarki");

buyukKalp.addEventListener("click", () => {
    // Adım1 gizle, Adım2 göster
    adim1.style.display = "none";
    adim2.style.display = "flex";

    // 2 saniye sonra Adım3 göster
    setTimeout(() => {
        adim2.style.display = "none";
        adim3.style.display = "flex";
    }, 2000);

    // 2 saniye sonra Adım4 göster ve efektleri başlat
    setTimeout(() => {
        adim3.style.display = "none";
        adim4.style.display = "flex";
        baslatEfektler();
    }, 4000);
});

function baslatEfektler() {
    // Müziği başlat
    sarki.play().catch(() => {
        console.log("Otomatik çalma engellenmiş olabilir, kullanıcı etkileşimi gerekebilir.");
    });

    const ekranGenisligi = window.innerWidth;
    const ekranYuksekligi = window.innerHeight;

    // Dans eden ayıcıklar
    for (let i = 0; i < 5; i++) {
        const ayicik = document.createElement("img");
        ayicik.src = "images/dans_ayicik.gif";
        ayicik.style.left = Math.random() * (ekranGenisligi - 100) + "px";
        ayicik.style.top = Math.random() * (ekranYuksekligi / 2) + 50 + "px";
        efektlerDiv.appendChild(ayicik);
    }

    // Uçan kalpler ve balonlar
    setInterval(() => {
        const kalp = document.createElement("div");
        kalp.classList.add("kalp");
        kalp.style.left = Math.random() * (ekranGenisligi - 30) + "px";
        kalp.style.top = ekranYuksekligi + "px";
        kalp.textContent = "❤️";
        efektlerDiv.appendChild(kalp);

        const balon = document.createElement("div");
        balon.classList.add("balon");
        balon.style.left = Math.random() * (ekranGenisligi - 30) + "px";
        balon.style.top = ekranYuksekligi + "px";
        balon.textContent = "🎈";
        efektlerDiv.appendChild(balon);

        setTimeout(() => {
            kalp.remove();
            balon.remove();
        }, 2000);
    }, 500);
}
