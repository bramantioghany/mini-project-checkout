/* File main.js digunakan untuk melakukan pengujian terhadap
   fungsi checkout yang ada di file checkout.js.
*/

const { hitungCheckout } = require("./checkout");

// Contoh transaksi member.
const hasil = hitungCheckout(100000, 3, true);

console.log(hasil);

/*
Output setelah menjalankan file main.js:
{
  subtotal: 300000,
  diskon: 30000,
  totalSetelahDiskon: 270000,
  ongkir: 0,
  totalPembayaran: 270000
}
*/