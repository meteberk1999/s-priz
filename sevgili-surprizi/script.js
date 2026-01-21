const sayfalar = document.querySelectorAll(".sayfa");
const buyukKalp = document.getElementById("buyukKalp");
const sarki = document.getElementById("arkaplanSarki");
const efektler = document.getElementById("efektler");

let aktif = 0;

// Kalbe basınca
buyukKalp.addEventListener("click", () => {
    titresim(200);
    sarki.play().catch(()=>{});
    adimlariBaslat();
});

function adimlariBaslat() {
    const sure = 2000;
    for (let i = 1; i < sayfalar.length; i++) {
        setTimeout(() => {
            sayfalar[aktif].classList.remove("aktif");
            sayfalar[i].classList.add("aktif");
            aktif = i;
            titresim(60);

            if (i === sayfalar.length - 1) {
                finalEfektler();
            }
        }, i * sure);
    }
}

function finalEfektler() {
    finalYazi();
    ayiciklar();
    setInterval(() => efektUret("❤️", "kalp"), 500);
}

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
}

function ayiciklar() {
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

document.addEventListener("click", (e) => {
    const foto = document.getElementById("finalFoto");
    if (!foto) return;

    const r = foto.getBoundingClientRect();
    if (
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom
    ) {
        patlama();
        titresim(100);
    }
});

function patlama() {
    const parent = document.querySelector(".fotoWrapper");
    for (let i = 0; i < 12; i++) {
        const k = document.createElement("div");
        k.className = "kalpPatlama";
        k.textContent = "❤️";
        k.style.left = "50%";
        k.style.top = "50%";
        k.style.setProperty("--x", (Math.random()-0.5)*200+"px");
        k.style.setProperty("--y", (Math.random()-0.5)*200+"px");
        parent.appendChild(k);
        setTimeout(() => k.remove(), 1000);
    }
}

function efektUret(e, c) {
    const el = document.createElement("div");
    el.className = c;
    el.textContent = e;
    el.style.left = Math.random() * (window.innerWidth - 40) + "px";
    el.style.bottom = "-40px";
    efektler.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

function titresim(s) {
    if ("vibrate" in navigator) navigator.vibrate(s);
}
