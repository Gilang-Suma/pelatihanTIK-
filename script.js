let angkaRahasia = Math.floor(Math.random() * 100) + 1;
let jumlahTebakan = 0;
let selesai = false;

function cekTebakan() {
    if (selesai) return;

    const input = document.getElementById("tebakan");
    const tebakan = Number(input.value);
    const pesan = document.getElementById("pesan");

    if (input.value.trim() === "" ||
        !Number.isInteger(tebakan) ||
        tebakan < 1 || tebakan > 100) {
        pesan.textContent = "Masukkan angka bulat 1–100!";
        return;
    }

    jumlahTebakan++;
    document.getElementById("jumlah").textContent = jumlahTebakan;

    if (tebakan < angkaRahasia) {
        pesan.textContent = "Terlalu kecil! Coba lagi.";
    } else if (tebakan > angkaRahasia) {
        pesan.textContent = "Terlalu besar! Coba lagi.";
    } else {
        pesan.textContent =
            "🎉 Benar! Angkanya " + angkaRahasia +
            ". Kamu berhasil dalam " + jumlahTebakan + " tebakan!";
        selesai = true;
    }

    input.value = "";
    input.focus();
}

function mulaiUlang() {
    angkaRahasia = Math.floor(Math.random() * 100) + 1;
    jumlahTebakan = 0;
    selesai = false;

    document.getElementById("jumlah").textContent = "0";
    document.getElementById("pesan").textContent =
        "Ayo mulai bermain!";
    document.getElementById("tebakan").value = "";
    document.getElementById("tebakan").focus();
}
