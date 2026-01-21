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

buyukKalp.addEventListener("click", () => {
    let currentStep = 0;
    adimlar[currentStep].style.display = "none";
    currentStep++;

    // Her sayfa 2 saniye gösterilsin (son adım hariç)
    const interval = setInterval(() => {
        if (currentStep < adimlar.length - 1) {
            adimlar[currentStep].style.display = "flex";
            // Önceki sayfa 1 saniye sonra kaybolacak
            setTimeout(() => {
                adimlar[currentStep].style.display = "none";
            }, 2000);
            currentStep++;
        } else {
            clearInterval(interval);
            // Son adımı göster ve efektleri başlat
            adimlar[currentStep].style.display = "flex";
            baslatEfektler();
        }
    }, 2000);
});

function baslatEfektler() {
    // Müziği başlat
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
        ayici
