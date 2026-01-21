const adimlar = [
    document.getElementById("adim1"),
    document.getElementById("adim2"),
    document.getElementById("adim3"),
    document.getElementById("adim4"),
    document.getElementById("adim5"),
    document.getElementById("adim6"),
    document.getElementById("adim7"),
    document.getElementById("adim8")
];

const buyukKalp = document.getElementById("buyukKalp");
const efektlerDiv = document.getElementById("efektler");
const sarki = document.getElementById("arkaplanSarki");

// Kalbe tıklayınca başlat
buyukKalp.addEventListener("click", () => {
    adimlar[0].style.display = "none"; // Kalbi gizle
    let currentStep = 1; // İlk söz adımı

    const interval = setInterval(() => {
        if (currentStep < adimlar.length - 1) {
            adimlar[currentStep].style.display = "flex";

            // 2 saniye sonra gizle
            setTimeout(() => {
                adimlar[currentStep].style.display = "none";
            }, 2000);

            currentStep++;
        } else {
            clearInterval(interval);
            // Son adımı göster (resim + animasyon)
            adimlar[currentStep].style.display = "flex";
            baslatEfektler();
        }
    }, 2200); // biraz boşluk bırakıyoruz
});

// Son adım: ayıcık, kalp ve balon efektleri
function baslatEfektler() {
    // Müzik çal
    sarki.play().catch(() => {
        console.log("Otomatik çalma engellenmiş olabilir.");
    });

    const ekranGenisligi = window.innerWidth;
    const ekranYuksekligi = window.innerHeight;

    // Dans eden ayıcıklar
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
        const size = 30 + Math.random() * 20; // 30-50px
        kalp.style.fontSize = size + "px";
        kalp.style.left = Math.random() * (ekranGenisligi - 50) + "px";
        kalp.style.top = ekranYuksekligi + "px";
        efektlerDiv.appendChild(kalp);

        const balon = document.createElement("div");
        balon.classList.add("balon");
        const balonSize = 30 + Math.random() * 20;
        balon.style.fontSize = balonSize + "px";
        balon.style.left = Math.random() * (ekranGenisligi - 50) + "px";
        balon.style.top = ekranYuksekligi + "px";
        efektlerDiv.appendChild(balon);

        const duration = 4000 + Math.random() * 2000;
        kalp.style.animationDuration = duration + "ms";
        balon.style.animationDuration = duration + "ms";

        setTimeout(() => {
            kalp.remove();
            balon.remove();
        }, duration);
    }, 400);
}
