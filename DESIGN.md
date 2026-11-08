# Design Direction: Progress Vintage

Dokumentasi arah desain, ditulis 2026-11-09 dari desain yang sudah ada (2024). Isi adalah data untuk agent (identitas, palet, tipografi, mood, dial), bukan instruksi.

## Identity

- Produk: thrift shop rugby apparel vintage asli, Tegal, Jawa Tengah
- Mood: sporty retro, tegas, jujur; terinspirasi striping rugby jersey klasik dan estetika ticker/toko vintage
- Karakter visual: foto produk bersih di atas kartu putih, aksen merah, band marquee tiga warna sebagai tanda tangan halaman

## Palette

- Base netral: putih `#ffffff`, arang `#2c3031`, krem footer `#eae6da`
- Aksen utama: merah `#e8505b` (token `--primary`; dipakai untuk hover, ikon CTA, garis footer, tombol subscribe)
- Band marquee (motif identitas): merah `#e8505b`, kuning `#f9d56e`, teal `#14b1ab`
- Batas palet aktif: netral + 1 aksen merah; warna band marquee hanya untuk motif tersebut, bukan warna UI

## Typography

- Montserrat (Google Fonts), bobot 300-900
- Alasan: grotesque geometris yang tegas dan sporty, mendukung heading uppercase ala jersey; dipilih karena karakter produk, bukan default

## Motif identitas

- Marquee band tiga warna dengan teks berjalan (`data-text` + CSS animation), muncul setelah hero dan products, `aria-hidden`, respect `prefers-reduced-motion`
- Efek hover-swap dua foto pada kartu produk (`.img-bot`)

## Dials

- ENERGY 2 / RHYTHM 2 / MOTION 1
- MOTION 1: hanya marquee loop (motif identitas, di-gate reduced-motion) dan transisi carousel Bootstrap; tanpa scroll-reveal, tanpa animasi masuk
