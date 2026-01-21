const sayfalar = document.querySelectorAll(".sayfa");
const buyukKalp = document.getElementById("buyukKalp");
const sarki = document.getElementById("arkaplanSarki");
const efektler = document.getElementById("efektler");

let aktif = 0;

buyukKalp.addEventListener("click", () => {
    titresim(200);
    sarki.play().catch(() => {});
    adimlariBaslat();
});

function adimlariBaslat() {
    for (let i = 1; i < sayfalar.length; i++) {
        setTimeout(() => {
            sayfalar[aktif].classList.remove("aktif");
            sayfalar[i].classList.add("aktif");
            aktif = i;
            titresim(60);

            if (i === sayfalar.length - 1) {
                titresim([120,60,120]);
                baslatFinal();
            }
        }, i * 2000);
    }
}

function baslatFinal() {
    finalYazi();
    ayiciklariBaslat();
    setInterval(() => {
        ucEfekt("❤️", "kalp");
        ucEfekt("🎈", "balon");
    }, 500);
}

/* ===== FOTO ÜSTÜ YAZI + PIRILTI ===== */
function finalYazi() {
    const foto = document.getElementById("finalFoto");
    const wrapper = document.createElement("div");
    wrapper.className = "fotoWrapper";

    foto.parentNode.insertBefore(wrapper, foto);
    wrapper.appendChild(foto);

    const yazi = document.createElement("div");
    yazi.className = "fotoYazi";
    const metin = "Seni seviyorum Kübra ❤️";

    metin.split("").forEach((h, i) => {
        const span = document.createElement("span");
        span.className = "harf";
        span.textContent = h === " " ? "\u00A0" : h;
        span.style.animationDelay = (i * 0.15) + "s";
        yazi.appendChild(span);
    });

    wrapper.appendChild(yazi);

    setInterval(() => {
        const k = document.createElement("div");
        k.className = "kalpPiriltisi";
        k.textContent = "❤️";
        k.style.left = 45 + Math.random() * 10 + "%";
        k.style.top = 45 + Math.random() * 10 + "%";
        wrapper.appendChild(k);
        setTimeout(() => k.remove(), 1500);
    }, 300);

    foto.addEventListener("click", () => {
        kalpPatlamasi(wrapper);
        titresim(100);
    });
}

/* ===== AYICIKLAR ===== */
function ayiciklariBaslat() {
    for (let i = 0; i < 4; i++) {
        const w = document.createElement("div");
        w.className = "ayicik-wrapper";
        w.style.left = (15 + i * 20) + "%";

        const k = document.createElement("div");
        k.className = "minikKalp";
        k.textContent = "❤️";

        const a = document.createElement("img");
        a.src = "images/dans_ayicik.gif";
        a.className = "ayicik";

        w.appendChild(k);
        w.appendChild(a);
        efektler.appendChild(w);
    }
}

/* ===== UÇAN EFEKT ===== */
function ucEfekt(emoji, sinif) {
    const e = document.createElement("div");
    e.className = sinif;
    e.textContent = emoji;
    e.style.left = Math.random() * window.innerWidth + "px";
    e.style.bottom = "-30px";
    efektler.appendChild(e);
    setTimeout(() => e.remove(), 3000);
}

/* ===== KALP PATLAMASI ===== */
function kalpPatlamasi(parent) {
    for (let i = 0; i < 12; i++) {
        const k = document.createElement("div");
        k.className = "kalpPatlama";
        k.textContent = "❤️";
        k.style.left = "50%";
        k.style.top = "50%";
        k.style.setProperty("--x", (Math.random() - 0.5) * 200 + "px");
        k.style.setProperty("--y", (Math.random() - 0.5) * 200 + "px");
        parent.appendChild(k);
        setTimeout(() => k.remove(), 1000);
    }
}

/* ===== TİTREŞİM ===== */
function titresim(s) {
    if (navigator.vibrate) navigator.vibrate(s);
}
