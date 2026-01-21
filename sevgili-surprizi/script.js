const efektlerDiv = document.getElementById("efektler");

function baslatSurpriz() {
    const ekranGenisligi = window.innerWidth;
    const ekranYuksekligi = window.innerHeight;

    // 5 tane dans eden ayıcık ekle
    for (let i = 0; i < 5; i++) {
        const ayicik = document.createElement("img");
        ayicik.src = "images/dans_ayicik.gif";
        ayicik.style.left = Math.random() * (ekranGenisligi - 100) + "px";
        ayicik.style.top = Math.random() * (ekranYuksekligi / 2) + 50 + "px";
        efektlerDiv.appendChild(ayicik);
    }

    // Kalpler sürekli uçsun
    setInterval(() => {
        const kalp = document.createElement("div");
        kalp.classList.add("kalp");
        kalp.style.left = Math.random() * (ekranGenisligi - 30) + "px";
        kalp.style.top = ekranYuksekligi + "px"; // altından başlat
        kalp.textContent = "❤️";
        efektlerDiv.appendChild(kalp);

        setTimeout(() => kalp.remove(), 2000);
    }, 500);
}

// Sayfa yüklendiğinde otomatik başlat
window.addEventListener("load", baslatSurpriz);
