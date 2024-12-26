module.exports = {
   command: "taugasih",
   alias: ["youknow"],
   category: ["fun"],
   settings: { limit: true },
   loading: true,
   async run(m, { sock }) {
        try {
            const facts = [
                "Bumi ini sebenarnya bukan bulat sempurna, melainkan sedikit gepeng di kutub.",
                "Ada lebih banyak pohon di Bumi daripada bintang di galaksi kita.",
                "Air panas membeku lebih cepat daripada air dingin dalam kondisi tertentu.",
                "Cumi-cumi raksasa bisa tumbuh lebih panjang dari bus sekolah.",
                "Ubur-ubur tidak memiliki otak, namun mereka mampu bertahan hidup selama ribuan tahun.",
                "Piramida di Mesir dibangun lebih dari 4.000 tahun yang lalu.",
                "Tulang manusia lebih kuat daripada beton.",
                "Matahari mengandung lebih dari 99% massa sistem tata surya.",
                "Lumba-lumba memiliki kemampuan untuk tidur dengan satu sisi otaknya.",
                "Kelelawar adalah satu-satunya mamalia yang bisa terbang.",
                "Bintang terjauh yang pernah ditemukan adalah lebih dari 13 miliar tahun cahaya jauhnya.",
                "Hiu telah ada sejak lebih dari 400 juta tahun yang lalu, jauh sebelum dinosaurus.",
                "Mata manusia dapat membedakan lebih dari 10 juta warna.",
                "Air laut mengandung lebih banyak oksigen daripada udara.",
                "Madu tidak pernah rusak dan bisa bertahan selama ribuan tahun.",
                "Kucing memiliki lebih dari 100 suara vokal yang berbeda.",
                "Jantung manusia berdetak sekitar 100.000 kali setiap hari.",
                "Ada lebih dari 8 juta spesies di Bumi, dan banyak yang belum ditemukan.",
                "Mata manusia dapat melihat lebih dari 500 juta warna berbeda.",
                "Bulan bergerak menjauh dari Bumi sekitar 3,8 cm setiap tahunnya.",
                "Semut bisa mengangkat beban hingga 50 kali berat tubuhnya.",
                "Dinosaurus tidak hidup bersamaan dengan manusia, mereka punah sekitar 65 juta tahun lalu.",
                "Kaktus dapat menyimpan air di batangnya untuk bertahan hidup di gurun.",
                "Singa hanya mengeong untuk berkomunikasi dengan sesama singa, bukan dengan manusia.",
                "Lebah dapat mengenali wajah manusia.",
                "Sekitar 90% dari spesies ikan hidup di laut dalam yang gelap.",
                "Cahaya dari matahari membutuhkan waktu sekitar 8 menit 20 detik untuk sampai ke Bumi.",
                "Badan manusia memiliki sekitar 37,2 triliun sel.",
                "Kelelawar adalah mamalia satu-satunya yang dapat terbang.",
                "Ada lebih dari 6.000 bahasa yang digunakan di dunia ini.",
                "Gletser menutupi sekitar 10% permukaan Bumi.",
                "Tulang manusia lebih kuat daripada baja dengan ukuran yang setara.",
                "Mata manusia dapat melihat lebih banyak warna daripada kamera digital.",
                "Buaya tidak bisa menjilat lidahnya.",
                "Hewan terbesar di Bumi adalah paus biru, yang dapat mencapai panjang hingga 30 meter.",
                "Pohon terbesar di dunia adalah pohon sequoia, yang dapat tumbuh hingga lebih dari 100 meter.",
                "Hiu adalah satu-satunya ikan yang dapat mengangkat kedua siripnya.",
                "Jari manusia memiliki kemampuan untuk merasakan lebih dari 10 juta sensasi berbeda.",
                "Hiu putih terbesar dapat tumbuh hingga panjang lebih dari 6 meter.",
                "Sungai Amazon menghasilkan sekitar 1/5 dari aliran air tawar di dunia.",
                "Gajah adalah hewan darat terbesar dan memiliki ingatan yang sangat tajam.",
                "Ada lebih dari 200.000 meteor jatuh ke Bumi setiap hari, meskipun sebagian besar terbakar di atmosfer.",
                "Bulan tidak memiliki atmosfer, sehingga tidak ada cuaca atau angin.",
                "Beberapa spesies burung dapat terbang lebih dari 10.000 kilometer tanpa berhenti.",
                "Meski terdengar seperti fiksi ilmiah, manusia mungkin bisa mengunjungi Mars dalam beberapa dekade ke depan.",
                "Es di kutub utara mengandung sekitar 30% air tawar Bumi.",
                "Ada lebih dari 100.000 jenis bunga yang tumbuh di seluruh dunia.",
                "Tikus dapat berlari lebih cepat daripada manusia dalam jarak pendek.",
                "Sungai Nil adalah sungai terpanjang di dunia, sepanjang lebih dari 6.600 kilometer.",
                "Pinguin adalah satu-satunya burung yang tidak bisa terbang, tetapi sangat ahli dalam berenang.",
                "Kaktus dapat hidup selama lebih dari 200 tahun.",
                "Bumi berputar dengan kecepatan sekitar 1.670 kilometer per jam di ekuator.",
                "Sistem solar kita terdiri dari delapan planet utama, dengan Jupiter menjadi yang terbesar.",
                "Sekitar 70% dari permukaan Bumi tertutup oleh air.",
                "Kupu-kupu memiliki rasa di kaki mereka.",
                "Fosil dinosaurus pertama kali ditemukan pada tahun 1824.",
                "Matahari menghabiskan sekitar 10 juta tahun dalam fase \"hidup\" yang stabil.",
                "Rata-rata seseorang menghabiskan sekitar 6 tahun hidupnya untuk tidur.",
                "Batu terbesar yang pernah ditemukan di Bumi adalah batu Hoba di Namibia.",
                "Lebih dari 90% dari spesies yang pernah ada di Bumi telah punah.",
                "Ketika berjalan, manusia menggunakan sekitar 200 otot dalam tubuhnya.",
                "Lumut dapat hidup tanpa air selama berbulan-bulan.",
                "Dewa Yunani Zeus dipercaya tinggal di Gunung Olympus, yang merupakan gunung tertinggi di Yunani.",
                "Sungai terbesar di dunia berdasarkan volume air adalah Sungai Amazon.",
                "Manusia dapat mendengar suara dalam kisaran frekuensi antara 20 Hz dan 20.000 Hz.",
                "Benua Antartika memiliki lapisan es yang lebih tebal daripada lapisan es di Kutub Utara.",
                "Ada sekitar 1.500 gunung berapi aktif di dunia.",
                "Rata-rata manusia menghirup sekitar 11.000 liter udara setiap hari.",
                "Ekor kanguru dapat digunakan untuk menjaga keseimbangan saat melompat.",
                "Beruang kutub dapat berenang sejauh lebih dari 100 kilometer tanpa berhenti.",
                "Pohon terbesar di dunia adalah pohon General Sherman di California.",
                "Jantung manusia berdetak sekitar 100.000 kali per hari.",
                "Bintang paling terang di langit kita adalah Sirius, yang terletak di konstelasi Canis Major.",
                "Beberapa jenis burung dapat hidup lebih dari 50 tahun.",
                "Sungai Yangtze adalah sungai terpanjang di China dan Asia.",
                "Perpustakaan Alexandria adalah salah satu perpustakaan terbesar di dunia pada zaman kuno.",
                "Bumi ini berumur sekitar 4,5 miliar tahun.",
                "Paus biru adalah mamalia terbesar di dunia, dengan berat hingga 180 ton.",
                "Tikus dapat berlari hingga kecepatan 13 km/jam.",
                "Planet Venus memiliki suhu rata-rata sekitar 465°C, cukup panas untuk melelehkan timah.",
                "Kelelawar vampire menghisap darah dari hewan lain untuk bertahan hidup.",
                "Ada lebih dari 200.000 jenis alga di laut.",
                "Dinosaurus pertama kali muncul sekitar 230 juta tahun yang lalu.",
                "Matahari dapat menghangatkan permukaan Bumi dengan suhu rata-rata sekitar 15°C.",
                "Kecepatan angin tercepat yang pernah tercatat di Bumi adalah lebih dari 500 km/jam.",
                "Pohon kelapa bisa tumbuh hingga 30 meter.",
                "Kedalaman laut dapat mencapai lebih dari 11.000 meter di Palung Mariana.",
                "Kucing dapat melihat dalam cahaya yang sangat redup, 6 kali lebih baik daripada manusia.",
                "Hiu bisa hidup lebih dari 100 tahun.",
                "Permukaan Bumi terdiri dari lebih dari 70% air, namun hanya 2,5% yang berupa air tawar.",
                "Sekitar 1 juta tanaman dan hewan telah terancam punah oleh perubahan iklim.",
                "Mars memiliki dua bulan kecil yang bernama Phobos dan Deimos.",
                "Kupu-kupu hanya makan dengan menggunakan probosis mereka.",
                "Matahari menghabiskan sekitar 10 juta tahun dalam fase 'hidup' yang stabil.",
                "Gajah memiliki kemampuan untuk mengenali dirinya sendiri di cermin.",
                "Tulang manusia jauh lebih kuat dari batu dengan ukuran yang sama.",
                "Pluto dulu dianggap sebagai planet kesembilan dalam sistem tata surya.",
                "Hiu putih dapat meluncur dengan kecepatan hingga 60 km/jam.",
                "Tidak ada dua salju yang memiliki bentuk yang sama persis.",
                "Di bawah laut, ada kehidupan yang sangat berbeda dan banyak yang belum ditemukan.",
                "Harimau adalah satu-satunya kucing besar yang hidup dalam kelompok.",
                "Ada lebih dari 400.000 jenis tanaman berbunga di dunia.",
                "Air laut mengandung sekitar 3,5% garam.",
                "Ikan pari bisa mencapai panjang lebih dari 2 meter.",
                "Burung elang dapat terbang lebih dari 240 km/jam dalam posisi terjun bebas.",
                "Bumi berputar pada porosnya dengan kecepatan sekitar 1.670 km/jam di ekuator.",
                "Bumi memiliki lebih dari 1.000 gunung berapi yang tersebar di berbagai tempat.",
                "Sungai Mississippi adalah salah satu sungai terpanjang di Amerika Utara.",
                "Jantung paus biru memiliki ukuran yang sama dengan mobil kecil.",
                "Tikus bisa menggigit hampir semua material kecuali kaca.",
                "Kupu-kupu memiliki 12.000 jenis di seluruh dunia.",
                "Ada lebih dari 200.000 spesies ikan yang telah ditemukan.",
                "Bumi memiliki lebih dari 7.000 pulau.",
                "Terumbu karang di Laut Great Barrier di Australia bisa terlihat dari luar angkasa.",
                "Jerapah memiliki lidah yang panjang hingga 45 cm.",
                "Telinga manusia dapat mendengar suara dalam rentang 20 Hz hingga 20.000 Hz.",
    "Ada sekitar 1.400 spesies kelelawar yang tersebar di seluruh dunia.",
    "Kuda bisa tidur sambil berdiri.",
    "Kucing dapat melompat hingga 6 kali panjang tubuhnya.",
    "Ikan koi dapat hidup lebih dari 200 tahun.",
    "Burung unta adalah burung terbesar di dunia dan tidak bisa terbang.",
    "Ikan paus biru bisa mencapai berat lebih dari 180 ton.",
    "Madu adalah satu-satunya makanan yang tidak akan pernah rusak.",
    "Gajah bisa merasakan getaran di tanah melalui kaki mereka.",
    "Lebah memiliki lima mata.",
    "Tiram menghasilkan mutiara sebagai perlindungan terhadap benda asing yang masuk ke dalam cangkangnya.",
    "Matahari merupakan satu-satunya bintang yang dapat dilihat dengan mata telanjang dari Bumi.",
    "Gigi manusia adalah satu-satunya bagian tubuh manusia yang tidak bisa sembuh sendiri.",
    "Beberapa jenis kepiting dapat berjalan mundur.",
    "Ada lebih dari 10.000 jenis bunga yang tumbuh di seluruh dunia.",
    "Setiap tahun, sekitar 1 juta orang meninggal karena kelaparan di seluruh dunia.",
    "Kaktus dapat bertahan hidup selama bertahun-tahun tanpa air.",
    "Beberapa spesies anjing bisa mendengar suara dengan frekuensi lebih tinggi daripada manusia.",
    "Daging sapi mengandung lebih banyak zat besi daripada sayuran hijau.",
    "Pisang adalah salah satu buah yang paling banyak dikonsumsi di dunia.",
    "Burung kolibri adalah satu-satunya burung yang bisa terbang mundur.",
    "Badan manusia memiliki lebih dari 650 otot.",
    "Seiring waktu, Bumi mengalami peningkatan kecepatan rotasi.",
    "Kupu-kupu tidak memiliki mulut dan hanya menghisap nektar dengan probosis mereka.",
    "Ikan pari memiliki struktur tulang belakang yang fleksibel dan bisa melompat keluar dari air.",
    "Ada lebih dari 5.000 jenis spora jamur yang ditemukan di hutan hujan tropis.",
    "Sekitar 70% oksigen dihasilkan oleh plankton di lautan.",
    "Hiu bisa mendeteksi gelombang listrik yang dihasilkan oleh makhluk hidup di sekitarnya.",
    "Dinosaurus pertama kali muncul sekitar 230 juta tahun yang lalu.",
    "Bulan bergerak menjauh dari Bumi dengan kecepatan sekitar 3,8 cm setiap tahun.",
    "Kaca adalah salah satu bahan yang dapat diproduksi dalam jumlah tak terbatas tanpa kehilangan kualitasnya.",
    "Arktik adalah tempat yang lebih dingin daripada Antartika.",
    "Di luar angkasa, tidak ada suara karena tidak ada medium untuk gelombang suara merambat.",
    "Matahari akan terus bersinar selama miliaran tahun sebelum memasuki fase 'red giant'.",
    "Pohon sequoia dapat tumbuh lebih dari 100 meter.",
    "Kelelawar adalah satu-satunya mamalia yang dapat terbang.",
    "Hiu putih terbesar dapat tumbuh hingga panjang lebih dari 6 meter.",
    "Gletser menutupi sekitar 10% permukaan Bumi.",
    "Ikan paus dapat menyelam hingga kedalaman lebih dari 2.000 meter.",
    "Lumba-lumba dapat tidur dengan setengah otaknya saja.",
    "Semut dapat mengangkat hingga 50 kali berat tubuhnya.",
    "Setiap tahun, lebih dari 400.000 ton meteorit jatuh ke Bumi, meskipun sebagian besar terbakar di atmosfer.",
    "Planet Venus memiliki suhu rata-rata sekitar 465°C.",
    "Sungai Amazon menghasilkan sekitar 1/5 dari aliran air tawar di dunia.",
    "Bulan tidak memiliki atmosfer, sehingga tidak ada cuaca atau angin.",
    "Es di Kutub Utara mengandung sekitar 30% air tawar Bumi.",
    "Pinguin adalah burung yang tidak bisa terbang, tetapi sangat ahli dalam berenang.",
    "Jerapah dapat memakan dedaunan di puncak pohon yang tinggi.",
    "Bumi ini berumur sekitar 4,5 miliar tahun.",
    "Harimau adalah satu-satunya kucing besar yang hidup dalam kelompok.",
    "Beberapa jenis burung dapat hidup lebih dari 50 tahun.",
    "Batu terbesar yang pernah ditemukan di Bumi adalah batu Hoba di Namibia.",
    "Tikus bisa berlari lebih cepat daripada manusia dalam jarak pendek.",
    "Sungai Nil adalah sungai terpanjang di dunia, sepanjang lebih dari 6.600 kilometer.",
    "Gajah memiliki kemampuan untuk mengenali dirinya sendiri di cermin.",
    "Planet Mars memiliki dua bulan kecil yang bernama Phobos dan Deimos.",
    "Sungai Yangtze adalah sungai terpanjang di China dan Asia.",
    "Ada sekitar 1.500 gunung berapi aktif di dunia.",
    "Ada lebih dari 200.000 spesies ikan yang telah ditemukan.",
    "Kupu-kupu memiliki 12.000 jenis di seluruh dunia.",
    "Burung elang dapat terbang lebih dari 240 km/jam dalam posisi terjun bebas.",
    "Bumi memiliki lebih dari 1.000 gunung berapi yang tersebar di berbagai tempat.",
    "Sungai Mississippi adalah salah satu sungai terpanjang di Amerika Utara.",
    "Jantung paus biru memiliki ukuran yang sama dengan mobil kecil.",
    "Bumi ini bukan bulat sempurna, melainkan sedikit gepeng di kutub.",
    "Ada lebih dari 200.000 jenis alga di laut.",
    "Dinosaurus pertama kali muncul sekitar 230 juta tahun yang lalu.",
    "Matahari dapat menghangatkan permukaan Bumi dengan suhu rata-rata sekitar 15°C.",
    "Kecepatan angin tercepat yang pernah tercatat di Bumi adalah lebih dari 500 km/jam.",
    "Pohon kelapa bisa tumbuh hingga 30 meter.",
    "Kedalaman laut dapat mencapai lebih dari 11.000 meter di Palung Mariana.",
    "Kucing dapat melihat dalam cahaya yang sangat redup, 6 kali lebih baik daripada manusia.",
    "Hiu bisa hidup lebih dari 100 tahun.",
    "Permukaan Bumi terdiri dari lebih dari 70% air, namun hanya 2,5% yang berupa air tawar.",
    "Sekitar 1 juta tanaman dan hewan telah terancam punah oleh perubahan iklim.",
    "Mars memiliki dua bulan kecil yang bernama Phobos dan Deimos.",
    "Kupu-kupu hanya makan dengan menggunakan probosis mereka.",
    "Matahari menghabiskan sekitar 10 juta tahun dalam fase 'hidup' yang stabil.",
    "Gajah memiliki kemampuan untuk mengenali dirinya sendiri di cermin.",
    "Tulang manusia jauh lebih kuat dari batu dengan ukuran yang sama.",
    "Pluto dulu dianggap sebagai planet kesembilan dalam sistem tata surya.",
    "Hiu putih dapat meluncur dengan kecepatan hingga 60 km/jam.",
    "Tidak ada dua salju yang memiliki bentuk yang sama persis.",
    "Di bawah laut, ada kehidupan yang sangat berbeda dan banyak yang belum ditemukan.",
    "Harimau adalah satu-satunya kucing besar yang hidup dalam kelompok.",
    "Ada lebih dari 400.000 jenis tanaman berbunga di dunia.",
    "Air laut mengandung sekitar 3,5% garam.",
    "Ikan pari bisa mencapai panjang lebih dari 2 meter.",
    "Burung elang dapat terbang lebih dari 240 km/jam dalam posisi terjun bebas.",
    "Bumi berputar pada porosnya dengan kecepatan sekitar 1.670 km/jam di ekuator.",
    "Bumi memiliki lebih dari 1.000 gunung berapi yang tersebar di berbagai tempat.",
    "Sungai Mississippi adalah salah satu sungai terpanjang di Amerika Utara.",
    "Jantung paus biru memiliki ukuran yang sama dengan mobil kecil.",
    "Tikus bisa menggigit hampir semua material kecuali kaca.",
    "Kupu-kupu memiliki 12.000 jenis di seluruh dunia.",
    "Ada lebih dari 200.000 spesies ikan yang telah ditemukan.",
    "Bumi memiliki lebih dari 7.000 pulau.",
    "Terumbu karang di Laut Great Barrier di Australia bisa terlihat dari luar angkasa.",
    "Jerapah memiliki lidah yang panjang hingga 45 cm.",
    "Fakta dunia lainnya lebih banyak lagi!"
            ];

            const randomFacts = facts[Math.floor(Math.random() * facts.length)];

            m.reply(`*Tau ga sih?* 🤔\n\n*${randomFacts}*`);
        } catch (error) {
            m.reply("Terjadi kesalahan saat mengambil fakta! 😞");
        }
    }
}