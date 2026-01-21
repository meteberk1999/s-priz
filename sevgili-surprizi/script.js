const sayfalar = document.querySelectorAll(".sayfa");
const buyukKalp = document.getElementById("buyukKalp");
const sarki = document.getElementById("arkaplanSarki");
const efektler = document.getElementById("efektler");

let aktifIndex = 0;

// Kalbe tıklama
buyukKalp.addEventListener("click", () => {
    titresim(200);
    sarki.play().catch(() => {});
    adimlariBaslat();
});

// Adımları sırayla göster
function adimlariBaslat() {
    const sure = 2000;

    for (let i = 1; i < sayfalar.length; i++) {
        setTimeout(() => {
            titresim(60);

            sayfalar[aktifIndex].classList.remove("aktif");
            sayfalar[i].classList.add("aktif");
            aktifIndex = i;

            // Final
            if (i === sayfalar.length - 1) {
                titresim([120, 60, 120, 60, 200]);
                baslatEfektler();
            }
        }, sure * i);
    }
}

// Final efektleri
function baslatEfektler() {
    const w = window.innerWidth;

    // ALTTA DANS EDEN AYICIKLAR + MİNİK KALP
    for (let i = 0; i < 4; i++) {
        const wrapper = document.createElement("div");
        wrapper.className = "ayicik-wrapper";

        const kalp = document.createElement("div");
        kalp.className = "minikKalp";
        kalp.textContent = "❤️";

        const ayicik = document.createElement("img");
        ayicik.src = "images/dans_ayicik.gif";
        ayicik.className = "ayicik";

        wrapper.appendChild(kalp);
        wrapper.appendChild(ayicik);

        wrapper.style.left = (15 + i * 20) + "%";
        wrapper.style.bottom = "20px";

        efektler.appendChild(wrapper);
    }

    // Uçan kalpler & balonlar
    setInterval(() => {
        efektUret("❤️", "kalp");
        efektUret("🎈", "balon");
    }, 500);
}

// Efekt üret
function efektUret(emoji, sinif) {
    const e = document.createElement("div");
    e.className = sinif;
    e.textContent = emoji;
    e.style.left = Math.random() * (window.innerWidth - 40) + "px";
    e.style.bottom = "-40px";
    efektler.appendChild(e);

    setTimeout(() => e.remove(), 3000);
}

// Mobil titreşim
function titresim(sure) {
    if ("vibrate" in navigator) {
        navigator.vibrate(sure);
    }
}
