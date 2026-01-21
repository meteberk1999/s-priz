const buyukKalp = document.getElementById("buyukKalp");
const efektlerDiv = document.getElementById("efektler");
const foto = document.getElementById("foto");

buyukKalp.addEventListener("click", function() {
    // Kalbi gizle
    buyukKalp.style.display = "none";

    // Fotoğrafı göster
    foto.style.display = "block";

    const ekranGenisligi = window.innerWidth;
    const ekranYuksekligi = window.innerHeight;

    // Dans eden öpücük yollayan ayıcıkları ekle
    for (let i = 0; i < 5; i++) {
        const ayicik = document.createElement("img");
        ayicik.src = "images/dans_ayicik.gif"; // öpücük GIF’i olabilir
        ayicik.style.left = Math.random() * (ekranGenisligi - 100) + "px";
        ayicik.style.top = Math.random() * (ekranYuksekligi / 2) + 50 + "px";
        efektlerDiv.appendChild(ayicik);
    }

    // Uçan kalpler
    setInterval(() => {
        const kalp = document.createElement("div");
        kalp.classList.add("kalp");
        kalp.style.left = Math.random() * (ekranGenisligi - 30) + "px";
        kalp.style.top = ekranYuksekligi + "px";
        kalp.textContent = "❤️";
        efektlerDiv.appendChild(kalp);

        setTimeout(() => kalp.remove(), 2000);
    }, 500);
});
