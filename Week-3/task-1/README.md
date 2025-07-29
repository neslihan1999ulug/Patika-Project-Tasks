
📝 Fashion Blog – Responsive Web Page
Bu proje, HTML, CSS ve Bootstrap kullanılarak geliştirilmiş, moda temalı dinamik ve estetik bir Blog Sayfasıdır. Kullanıcılar moda trendlerini, sokak stilini, ünlü görünümlerini ve sürdürülebilir moda yazılarını keşfedebilir. Sayfa modern bir görünüme sahiptir ve tüm cihazlarda uyumlu çalışır.

***Amaç***
Modern ve estetik bir blog sayfası tasarlamak

Farklı moda kategorilerine göre içerikleri gruplamak

Kullanıcı dostu, mobil uyumlu bir arayüz oluşturmak

***Uygulanan Özellikler***
🎨 1. Tema ve Değişken Tanımlamaları
:root üzerinden renkler, yazı tipleri ve stiller tanımlandı.

Ana renk olarak hwb(167 59% 6%) kullanıldı.

Yazı tipleri için Google Fonts’tan "Bungee" ve "Nunito Sans" eklendi.

🧭 2. Navbar (Üst Menü)
Bootstrap 5 ile responsive (duyarlı) bir navbar tasarlandı.

Navbar içerisinde:

Menü linkleri (Home, Blogger, Life, Social, Contact)

Sağda “Login” butonu (hover efekti ile renk değişimi)

Küçük ekranlar için açılır (offcanvas) menü eklendi.

Navbar’a box-shadow, border-radius, ve özel padding uygulandı.

🖼️ 3. Hero Section (Tanıtım Alanı)
Arka plan görseliyle dikkat çeken bir hero alanı eklendi.

Büyük başlık: "Style Inspiration"

Altında blog filtreleme düğmeleri (Style Inspiration, Latest Trends, Street Style, Seasonal Must Haves, vb.) yer aldı.

📰 4. Blog Kartları
Bootstrap card yapısı ile blog içerikleri listelendi.

Kartlarda:

Başlık

Açıklayıcı metin (blog yazısı)

Öne çıkan görsel

Güncelleme tarihi

Görseller object-fit: cover ile sabit oranlarda gösterildi.

Kartlara özel card-title, card-text, card-img gibi sınıflar eklendi.

📚 5. Sidebar (Yan Menü)
Sayfanın sağında bir yan menü bölgesi oluşturuldu.

İçeriğinde:

"Latest Blog Posts" açıklama yazısı

"Popular Tags" başlığı altında badge benzeri linkler (#Lifestyle, #Trends, #Wellness, vb.)

♻️ 6. CSS Özelleştirmeleri
Navbar, butonlar, blog kartları ve sidebar öğeleri için özel sınıflar tanımlandı:

.login-button, .custom-btn, .custom-img, .custom-h1-class gibi.

Hover efektleri, geçiş animasyonları (transition) ve etkileşimli öğeler eklendi.

Responsive görsellik sağlamak için box-shadow, border, border-radius gibi modern stiller kullanıldı.

📱 7. Duyarlı (Responsive) Tasarım
Tüm yapı Bootstrap grid sistemi ile mobil/tablet/masaüstü uyumlu olacak şekilde geliştirildi.

Navbar ve blog kartları mobil görünümde yeniden düzenlenir.

***Kullanılan Teknolojiler***
HTML5

CSS3 (değişken destekli özel stillerle)

Bootstrap 5.3.7

Google Fonts (Bungee, Nunito Sans)