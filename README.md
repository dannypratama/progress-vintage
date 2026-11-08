# Progress Vintage

Situs statis untuk toko thrift **Progress Vintage**, rugby apparel vintage asli dari Tegal, Jawa Tengah. Project pertama buatan [Danny Pratama](https://dannypratamaf.my.id) (2024), masih digunakan sebagai landing page toko.

**Halaman:**

- `index.html`: storefront (hero carousel, marquee banner, brand, katalog produk, tentang, footer)
- `checkout.html`: hub pembayaran & kontak (Shopee, Instagram, WhatsApp)

**Stack:** HTML + CSS murni, [Bootstrap 5.3.2](https://getbootstrap.com) (CDN), Remix Icon & Tabler Icons (CDN), Google Fonts (Montserrat). Tanpa build step, tanpa framework JS.

## Menjalankan secara lokal

Server statis apa pun, misalnya:

```sh
python -m http.server 8000
```

lalu buka `http://localhost:8000`.

## Struktur

```
├── index.html          # Halaman utama (storefront)
├── checkout.html       # Halaman pembayaran/kontak
├── script.js           # Perilaku halaman (warna acak, load-more, tahun copyright)
├── style.css           # Style kustom (navbar, marquee, kartu, footer)
├── assets/img/         # Seluruh aset gambar (hero, brands, products, contact)
└── .github/workflows/  # Deploy otomatis via FTP setiap push ke main
```

## Deploy

Deploy otomatis via GitHub Pages setiap push ke `main`:
https://dannypratama.github.io/progress-vintage/
