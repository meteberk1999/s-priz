const sayfalar = document.querySelectorAll(".sayfa");
const kalp = document.getElementById("buyukKalp");
const sarki = document.getElementById("arkaplanSarki");
const yazi = document.getElementById("yazi");
const efektler = document.getElementById("efektler");

let index = 0;

kalp.addEventListener("click", () => {
    titre(200);
    sarki.play().catch(()=>{});
    ilerle();
});

function ilerle() {
    const sure = 2000;

    for (let i = 1; i < sayfalar.length; i++) {
        setTimeout(() => {
            sayfalar[index].classList.remove("aktif");
            sayfalar[i].classList.add("aktif");
            index = i;
            titre(60);

            if (sayfalar[i].classList.contains("final")) {
                finalBaslat();
            }
        }, i * sure);
    }
}

function finalBaslat() {
    yaziyiYaz("Seni Seviyorum Kübra ❤️");
    ayiciklar();
    setInterval(pariltiUret, 200);
}

function yaziyiYaz(metin) {
    yazi.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        yazi.textContent += metin[i];
        i++;
        titre(20);
        if (i >= metin.length) clearInterval(interval);
    }, 120);
}

function ayiciklar() {
    for (let i = 0; i < 4; i++) {
        const w = document.createElement("div");
        w.className = "ayicik-wrapper";
        w.style.left = (15 + i * 20) + "%";

        w.innerHTML = `
            <div class="minikKalp">❤️</div>
            <img src="images/dans_ayicik.gif" class="ayicik">
        `;
        efektler.appendChild(w);
    }
}

function pariltiUret() {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "✨";
    s.style.left = Math.random() * 80 + "%";
    s.style.top = Math.random() * 80 + "%";
    yazi.appendChild(s);
    setTimeout(() => s.remove(), 1500);
}

function titre(ms) {
    if (navigator.vibrate) navigator.vibrate(ms);
}
