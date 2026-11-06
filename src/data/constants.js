export const COMPANY_INFO = {
  name: "HALİS OTO KURTARMA",
  owner: "Halis Kırtepe",
  phone: "0535 357 95 25",
  rawPhone: "05353579525",
  telLink: "tel:05353579525",
  address: "Pınarbaşı Mah. Vatan Cad. No:106/7 Sincan / Ankara",
  whatsappMessage: "ÇEKİCİYE İHTİYACIM VAR YARDIMCI OLUR MUSUNUZ?",
  get whatsappLink() {
    return `https://wa.me/905353579525?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  logoUrl: "/logo/logo.png",
  operatingHours: "7 Gün 24 Saat Kesintisiz",
  coverageArea: "Ankara'nın Tüm İlçeleri & Çevre Otoyollar",
  responseTime: "15 - 30 Dakika",
  experienceYears: "10+",
};

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/arac-1.jpeg",
    title: "Sincan 7/24 Acil Kurtarma",
    category: "Oto Çekici",
    desc: "Kayar kasa hidrolik platform ile hasarsız yükleme"
  },
  {
    id: 2,
    src: "/images/arac-2.jpeg",
    title: "Eskişehir Yolu Araç Transferi",
    category: "Taşıma",
    desc: "Güvenli ve sigortalı şehirler arası sevkiyat"
  },
  {
    id: 3,
    src: "/images/arac-3.jpeg",
    title: "Kaza & Şarampol Müdahalesi",
    category: "Kurtarma",
    desc: "Özel vinç ve çeki ekipmanıyla kaza yeri müdahalesi"
  },
  {
    id: 4,
    src: "/images/arac-4.jpeg",
    title: "Lüks & Alçak Şasi Araç Çekimi",
    category: "Özel Taşıma",
    desc: "Sıfır tampon teması garantili profesyonel platform"
  },
  {
    id: 5,
    src: "/images/arac-5.jpeg",
    title: "Etimesgut Gece Nöbetçi Çekici",
    category: "7/24 Acil",
    desc: "Gece saatlerinde 15 dakikada yerinde destek"
  },
  {
    id: 6,
    src: "/images/arac-6.jpeg",
    title: "Batıkent Yol Yardım & Çekici",
    category: "Oto Çekici",
    desc: "Arızalı aracın yetkili servise güvenli nakliyesi"
  },
  {
    id: 7,
    src: "/images/arac-7.jpeg",
    title: "Otoyol & Çevre Yolu Kurtarma",
    category: "Kurtarma",
    desc: "Kuzey Marmara ve çevre otoyolu acil müdahale"
  },
  {
    id: 8,
    src: "/images/arac-8.jpeg",
    title: "Hafif Ticari Araç Çekimi",
    category: "Ticari",
    desc: "Yüksek tonajlı panelvan ve kamyonet nakliyesi"
  },
  {
    id: 9,
    src: "/images/arac-9.jpeg",
    title: "Çankaya Çoklu Araç Sevkiyatı",
    category: "Taşıma",
    desc: "Şehir içi ve şehirler arası araç nakli"
  },
  {
    id: 10,
    src: "/images/arac-10.jpeg",
    title: "Yerinde Akü & Lastik Desteği",
    category: "Yol Yardım",
    desc: "Hızlı yol yardım ve takviye servisi"
  },
  {
    id: 11,
    src: "/images/arac-11.jpeg",
    title: "Modern Kayar Kasa Filomuz",
    category: "Filo",
    desc: "Son teknoloji hidrolik donanımlı kurtarıcı araçlar"
  },
  {
    id: 12,
    src: "/images/arac-12.jpeg",
    title: "Hasarsız Araç Yükleme",
    category: "Oto Çekici",
    desc: "Tekerlek sabitleme aparatları ile %100 güvenlik"
  }
];

export const SERVICES = [
  {
    id: "oto-cekici",
    title: "Oto Çekici & Kurtarma",
    desc: "Binek, SUV, hafif ticari ve elektrikli araçlarınız için son teknoloji hidrolik kayar kasa çekicilerimizle güvenli taşıma.",
    image: "/images/arac-1.jpeg",
    icon: "Truck",
    tag: "En Çok Tercih Edilen",
    features: ["Kayar Kasa Platform", "Kaskolu & Sigortalı Taşıma", "Hasarsız Yükleme Garantisi"]
  },
  {
    id: "acil-yol-yardim",
    title: "7/24 Acil Yol Yardım",
    desc: "Yolda kaldığınızda profesyonel ekibimiz hemen yanınızda. Hızlı yerinde müdahale ile yolunuza devam edin.",
    image: "/images/arac-5.jpeg",
    icon: "Wrench",
    tag: "7/24 Aktif",
    features: ["Akü Takviye & Değişimi", "Lastik Değişimi & Tamiri", "Acil Yakıt Takviyesi"]
  },
  {
    id: "kazali-arac",
    title: "Kaza & Şarampol Kurtarma",
    desc: "Kaza yapmış, şarampole yuvarlanmış veya hareket kabiliyetini yitirmiş araçlar için vinçli özel kurtarma desteği.",
    image: "/images/arac-3.jpeg",
    icon: "AlertTriangle",
    tag: "Ağır Kurtarma",
    features: ["Güçlü Vinç Desteği", "Kaza Yeri Güvenliği", "Tutanak & Çekim Desteği"]
  },
  {
    id: "coklu-tasima",
    title: "Şehirler Arası Araç Taşıma",
    desc: "Ankara'dan Türkiye'nin her yerine, veya diğer şehirlerden Ankara'ya tekli ve çoklu güvenli araç nakliyesi.",
    image: "/images/arac-2.jpeg",
    icon: "Navigation",
    tag: "Tüm Türkiye",
    features: ["Şehirler Arası Sabit Fiyat", "Zamanında Teslimat", "Tam Kapsamlı Taşıma Kaskosu"]
  },
  {
    id: "motosiklet",
    title: "Motosiklet Taşıma",
    desc: "Özel sabitleme aparatları ve rampalı sistemlerimizle motosikletinizi tek bir çizik dahi olmadan dilediğiniz yere taşıyoruz.",
    image: "/images/arac-4.jpeg",
    icon: "Bike",
    tag: "Özel Donanım",
    features: ["Özel Kilit Aparatları", "Düşme / Devrilme Önleyici", "Kapalı / Açık Seçenek"]
  },
  {
    id: "ticari-arac",
    title: "Hafif Ticari & Minibüs",
    desc: "Panelvan, kamyonet, minibüs ve uzun şasi ticari araçlarınız için yüksek tonaj kapasiteli özel çekici filosu.",
    image: "/images/arac-8.jpeg",
    icon: "ShieldAlert",
    tag: "Yüksek Kapasite",
    features: ["5 Ton Taşıma Kapasitesi", "Geniş Platform", "İş Kaybını Önleyen Hız"]
  }
];

export const ANKARA_DISTRICTS = [
  { name: "Sincan", central: true, time: "10-15 Dk", desc: "Merkez üssümüz. En hızlı intikal." },
  { name: "Etimesgut", central: true, time: "15-20 Dk", desc: "Eryaman, Bağlıca, Elvankent dahil." },
  { name: "Yenimahalle", central: true, time: "15-25 Dk", desc: "Batıkent, Çayyolu, Demetevler, Şentepe." },
  { name: "Çankaya", central: true, time: "20-30 Dk", desc: "Kızılay, Ümitköy, İncek, Balgat, Oran." },
  { name: "Keçiören", central: true, time: "20-30 Dk", desc: "Etlik, Ufuktepe, Ovacık, Bağlum." },
  { name: "Mamak", central: true, time: "25-35 Dk", desc: "Kayaş, Natoyolu, Akdere, Samsun Yolu." },
  { name: "Altındağ", central: true, time: "20-30 Dk", desc: "Ulus, Siteler, Aydınlıkevler, Karapürçek." },
  { name: "Gölbaşı", central: true, time: "25-35 Dk", desc: "Mogan, Konya Yolu, İncek bağlantısı." },
  { name: "Pursaklar", central: true, time: "25-35 Dk", desc: "Havalimanı Yolu ve Saray bölgesi." },
  { name: "Kahramankazan", central: false, time: "20-30 Dk", desc: "İstanbul Yolu ve Saray Sanayi." },
  { name: "Polatlı", central: false, time: "30-40 Dk", desc: "Eskişehir Yolu ve Temelli aksı." },
  { name: "Ayaş", central: false, time: "30-45 Dk", desc: "Beypazarı yolu güzergahı." },
  { name: "Beypazarı", central: false, time: "45-60 Dk", desc: "Geniş bölge nöbetçi çekici." },
  { name: "Çubuk", central: false, time: "35-45 Dk", desc: "Havalimanı ve Çubuk ilçesi." },
  { name: "Akyurt", central: false, time: "30-40 Dk", desc: "Sanayi bölgesi ve çevre aksı." },
  { name: "Kızılcahamam", central: false, time: "40-50 Dk", desc: "TEM Otoyolu ve Çeltikçi mevkii." }
];

export const TESTIMONIALS = [
  {
    name: "Ahmet Yılmaz",
    district: "Sincan / Fatih",
    car: "Volkswagen Passat",
    rating: 5,
    comment: "Gece saat 02:30'da Sincan OSB dönüşünde aracımın kayışı koptu. Halis Bey'i aradım, 15 dakika dolmadan çekici geldi. Çok kibar ve işini bilen biri. Fiyat da gayet makuldü, teşekkürler.",
    date: "3 gün önce"
  },
  {
    name: "Murat Demir",
    district: "Etimesgut / Eryaman",
    car: "Renault Megane",
    rating: 5,
    comment: "WhatsApp'tan konum attım, hemen dönüş yaptılar. Aracımı kaskolu şekilde sanayiye kadar taşıdılar. Gözüm kapalı tavsiye ederim.",
    date: "1 hafta önce"
  },
  {
    name: "Selin Kaya",
    district: "Çankaya / Ümitköy",
    car: "Peugeot 2008",
    rating: 5,
    comment: "Eskişehir yolunda lastiğim yarıldı, stepnem de yoktu. Halis Oto Kurtarma hemencecik yetişti. Hem araç çekiminde hem de yönlendirmede çok yardımcı oldular.",
    date: "2 hafta önce"
  },
  {
    name: "Emre Can Öztürk",
    district: "Yenimahalle / Batıkent",
    car: "Ford Transit",
    rating: 5,
    comment: "Ticari aracımız arızalanınca işlerimiz aksayacak diye korktuk. Halis Bey sağ olsun çok seri şekilde aracımızı yetkili servise çekti. Ankara'da tek geçerim.",
    date: "Geçen ay"
  }
];

export const FAQS = [
  {
    q: "Çekici çağırdığımda ne kadar sürede gelirsiniz?",
    a: "Merkezimiz Sincan'da olmak üzere Ankara'nın muhtelif noktalarında hazır bekleyen araçlarımızla Sincan ve Etimesgut bölgesine ortalama 10-15 dakika, diğer tüm Ankara ilçelerine ise 20-30 dakika içerisinde intikal etmekteyiz."
  },
  {
    q: "Taşıma esnasında aracım kaskolu / sigortalı mı?",
    a: "Evet. Çekici filomuzdaki tüm araçlarımızda tam kapsamlı Taşıyıcı Mali Mesuliyet Kaskosu mevcuttur. Aracınız platforma yüklendiği andan teslim edilene kadar %100 güvencemiz altındadır."
  },
  {
    q: "Çekici ücreti neye göre belirlenmektedir?",
    a: "Fiyatlandırma; aracınızın bulunduğu konum ile çekileceği adres arasındaki mesafe (kilometre), araç tipi (binek, SUV, ticari), ve aracın yürür durumda olup olmamasına (tekerlek kilitlenmesi, şarampol durumu) göre en şeffaf ve uygun tarifeyle hesaplanır. Telefonda net fiyat verilir, sonradan sürpriz ücret çıkmaz."
  },
  {
    q: "Gece veya resmi tatillerde hizmet veriyor musunuz?",
    a: "Evet! Halis Oto Kurtarma haftanın 7 günü, günün 24 saati resmi tatiller ve bayramlar dahil olmak üzere aralıksız hizmet vermektedir."
  },
  {
    q: "Kaza durumunda kasko veya sigorta için evrak veriyor musunuz?",
    a: "Evet. Çekici faturası, kaza yeri fotoğrafları ve gerekli taşıma evrakları eksiksiz düzenlenerek sigorta veya kaskonuzdan masrafınızı geri alabilmeniz sağlanır."
  },
  {
    q: "WhatsApp üzerinden nasıl konum gönderebilirim?",
    a: "Sitemizdeki yeşil 'WhatsApp ile Konum Gönder' butonuna tıkladığınızda doğrudan Halis Kırtepe'nin WhatsApp hattına bağlanırsınız. Canlı konum paylaşımıyla tek tıkla konumunuzu iletebilirsiniz."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "15-30 Dk Hızlı İntikal",
    desc: "Ankara genelinde stratejik noktalarda nöbetçi araçlarımızla en kısa sürede yanınızdayız.",
    icon: "Clock"
  },
  {
    title: "Kaskolu & Güvenli Taşıma",
    desc: "Aracınız yükleme anından teslime kadar kurumsal taşıma sigortasıyla güvence altındadır.",
    icon: "ShieldCheck"
  },
  {
    title: "Şeffaf & Uygun Fiyat",
    desc: "Gizli ücret veya sürpriz masraf yok. Telefonda ne konuştuysak net fiyat garantisi veriyoruz.",
    icon: "BadgePercent"
  },
  {
    title: "Modern Kayar Kasa Filo",
    desc: "Alçak şasili, lüks ve spor araçlara dahi zarar vermeyen hidrolik kayar kasa platformlar.",
    icon: "Truck"
  },
  {
    title: "7/24 Kesintisiz Destek",
    desc: "Gecenin bir yarısı ya da bayram sabahı; yolda kaldığınız her an telefonumuz açıktır.",
    icon: "PhoneCall"
  },
  {
    title: "Deneyimli & Güler Yüzlü Ekip",
    desc: "Halis Kırtepe güvencesiyle 10 yılı aşkın sektör deneyimi ve profesyonel yaklaşım.",
    icon: "Award"
  }
];
