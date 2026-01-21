const sayfalar = document.querySelectorAll(".sayfa");
const buyukKalp = document.getElementById("buyukKalp");
const sarki = document.getElementById("arkaplanSarki");
const efektler = document.getElementById("efektler");

let aktif = 0;

buyukKalp.addEventListener("click", () => {
    titresim(200);
    sarki.play().catch(() => {});
    buyukKalp.classList.add("tiklandi");
    siraliGecis();
});

function siraliGecis() {
    const sure = 2000;

    for (let i = 1; i < sayfalar.length; i++) {
        setTimeout(() => {
            titresim(60);
            sayfalar[aktif].classList.remove("aktif");
            sayfalar[i].classList.add("aktif");
            aktif = i;

            if (i === sayfalar.length - 1) {
                titresim([100,50,100,50,200]);
                baslatEfektler();
            }
        }, sure * i);
    }
}

function baslatEfektler() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    for (let i = 0; i < 5; i++) {
        const ayicik = document.createElement("img");
        ayicik.src = "images/dans_ayicik.gif";
        ayicik.className = "ayicik";
        ayicik.style.left = Math.random() * (w - 80) + "px";
        ayicik.style.top = Math.random() * (h / 2) + "px";
        efektler.appendChild(ayicik);
    }

    setInterval(() => {
        efektUret("❤️", "kalp");
        efektUret("🎈", "balon");
    }, 500);
}

function efektUret(emoji, sinif) {
    const e = document.createElement("div");
    e.className = sinif;
    e.textContent = emoji;
    e.style.left = Math.random() * (window.innerWidth - 40) + "px";
    e.style.bottom = "-40px";
    efektler.appendChild(e);
    setTimeout(() => e.remove(), 3000);
}

function titresim(sure) {
    if ("vibrate" in navigator) {
        navigator.vibrate(sure);
    }
}
