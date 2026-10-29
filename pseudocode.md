# Pseudocode: Sistem Checkout Produk Sederhana

START

FUNCTION hitungCheckout(harga, jumlah, isMember)

    // Cek validasi input harga
    IF harga bukan angka valid OR harga <= 0 THEN
        RETURN error "Input tidak valid"
    END IF

    // Cek validasi input jumlah produk
    IF jumlah bukan angka valid OR jumlah <= 0 OR jumlah bukan integer THEN
        RETURN error "Input tidak valid"
    END IF

    // Cek validasi isMember = true or false
    IF isMember bukan boolean THEN
        RETURN error "Input tidak valid"
    END IF

    // Menghitung subtotal (harga sebelum diskon)
    subtotal = harga * jumlah

    // Menghitung diskon berdasarkan isMember
    IF isMember = TRUE THEN
        diskon = subtotal * 10%
    ELSE
        diskon = 0
    END IF

    // Menghitung harga total setelah diskon
    totalSetelahDiskon = subtotal - diskon

    // Menghitung ongkir berdasarkan total setelah diskon
    IF totalSetelahDiskon >= 250000 THEN
        ongkir = 0
    ELSE
        ongkir = 15000
    END IF

    // Menghitung total pembayaran
    totalPembayaran = totalSetelahDiskon + ongkir

    // Memberi Output: return nilai variabel
    RETURN {
        subtotal,
        diskon,
        totalSetelahDiskon,
        ongkir,
        totalPembayaran
    }

END FUNCTION

END