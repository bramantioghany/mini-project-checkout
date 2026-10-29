/**
 Menghitung total pembayaran pada sistem checkout.
 
 @param {number} harga - Harga satu produk.
 @param {number} jumlah - Jumlah produk (integer positif).
 @param {boolean} isMember - Status member pelanggan.
 @returns {object} - Hasil checkout atau pesan error.
 */

function hitungCheckout(harga, jumlah, isMember) {
  // 1. Validasi harga: harus berupa angka finite dan positif.
  if (
    typeof harga !== "number" ||
    !Number.isFinite(harga) ||
    harga <= 0
  ) {
    return { error: "Input tidak valid" };
  }

  // 2. Validasi jumlah: harus integer positif.
  if (
    typeof jumlah !== "number" ||
    !Number.isSafeInteger(jumlah) ||
    jumlah <= 0
  ) {
    return { error: "Input tidak valid" };
  }

  // 3. Validasi status member.
  if (typeof isMember !== "boolean") {
    return { error: "Input tidak valid" };
  }

  // 4. Hitung subtotal.
  const subtotal = harga * jumlah;

  // Cegah hasil perkalian yang tidak dapat direpresentasikan
  // sebagai angka finite.
  if (!Number.isFinite(subtotal)) {
    return { error: "Input tidak valid" };
  }

  // 5. Tentukan diskon berdasarkan status member.
  let diskon;

  if (isMember) {
    diskon = subtotal * 0.10;
  } else {
    diskon = 0;
  }

  // 6. Hitung total setelah diskon.
  const totalSetelahDiskon = subtotal - diskon;

  // 7. Tentukan ongkos kirim berdasarkan total setelah diskon.
  let ongkir;

  if (totalSetelahDiskon >= 250000) {
    ongkir = 0;
  } else {
    ongkir = 15000;
  }

  // 8. Hitung total akhir.
  const totalPembayaran = totalSetelahDiskon + ongkir;

  // 9. Kembalikan rincian hasil checkout.
  return {
    subtotal,
    diskon,
    totalSetelahDiskon,
    ongkir,
    totalPembayaran
  };
}

// Export agar fungsi dapat digunakan oleh Jest.
module.exports = { hitungCheckout };