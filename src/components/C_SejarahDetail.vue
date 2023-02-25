<template >
    <v-row>
        <v-col md="10" offset-md="1">
            <!-- <Breadcrumbs v-if="settings.screenSize.type.isxs || settings.screenSize.type.ismd" v-show="false" /> -->
            <!-- <Breadcrumbs /> -->
            <!-- <v-card> -->
            <v-img src="../assets/profillawang.jpg" class="white--text align-end rounded-lg"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px">
                <v-card-title>
                    Sejarag Gereja Pekabaran Injil Jalan Suci
                </v-card-title>
            </v-img>

            <v-card-actions>
                <v-chip outlined small :color="settings.color" to="/sejarah">
                    Sejarah
                </v-chip>
                <span class="ml-5">jan 2023</span>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-cards-heart-outline</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-bookmark-outline</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </v-card-actions>
            <!-- </v-card>  -->
        </v-col>
        <v-col md="10" offset-md="1">
            <!-- <v-img src="../assets/lahai2.jpeg" class="grey darken-4 rounded-lg"></v-img> -->
            <div class="my-1">
                <p>Gereja Jalan Suci <br>
                    “Di situ akan ada jalan raya, yang akan disebutkan Jalan Kudus” Yesaya 35:8
                    Kehidupan Kekristenan dan pelayanan tidak pernah menonjol melebihi standar dan nilai ibadah kami.
                    Kehidupan dan pelayanan rohani kami dilakukan, dan dimulai dari hadirat Allah.
                    Jalan Suci didedikasikan untuk beribadah di dalam Ruang Mahakudus. Ini selalu mengarah kepada pelayanan
                    yang penuh Kuasa dalam Roh Kudus.
                    Jalan Suci mendorong orang untuk berkumpul mengelilingi Yesus sama seperti kesatuan murid-murid-Nya yang
                    pertama, menikmati persekutuan-Nya, belajar tentang jalan-jalan-Nya, menjadi bagian dalam kegerakan
                    Allah yang besar yang terjadi di seluruh dunia dalam rangka persiapan menyambut kedatangan-Nya. Kami
                    menyembah dalam Roh dengan kenyataan karunia-karunia Roh. Sering kami bertemu Allah dalam keheningan
                    keabadian; pada kesempatan lain kami menyatu dalam puji-pujian para malaikat dalam suasana hadirat yang
                    tinggi mengelilingi tahta-Nya. Kami terbuka dan melayakan Yesus memuridkan kami. Dia memimpin kami
                    keluar untuk melayani dalam berbagai bentuk pelayanan di mana kami dapat melihat apa yang Ia lakukan dan
                    belajar mengambil bagian di dalamnya.
                </p>
                <p>Sejarah Singkat Jalan Suci <br>
                    Satu kelompok pendukung telah didirikan pada tahun 1964, tetapi sejarah Jalan Suci di Indonesia baru
                    dimulai pada bulan Februari 1965, pada saat Rev. Edwin Stube dan keluarganya tiba di Semarang (Jawa
                    Tengah) Indonesia. Dia percaya bahwa Tuhan ingin mengungkapkan beberapa hal baru mengenai penginjilan,
                    ibadah, training, dan pelayanan. Tapi dia mendapati bahwa gereja lebih suka berbagai program yang
                    tradisional dan sepertinya memiliki sedikit minat pada karya Roh Kudus.
                    Pada bulan Juni tahun 1966 seluruh keluarga Stube pindah ke Nongkodjadjar, sebuah desa kecil di
                    pegunungan Jawa Timur. Di sini Roh Kudus dicurahkan secara luar biasa, dan Tuhan melakukan pekerjaan
                    yang besar di hati beberapa orang muda.
                </p>
                <p> Dengan segera para pemuda ini diutus untuk memberitakan apa yang telah mereka terima. Mereka diutus ke
                    Sulawesi dan mengalami berbagai macam pengalaman. Alkitab dipakai sebagai sumber jawaban segala
                    pertanyaan dan tuntunan masa depan mereka , dan mempraktekan Firman Allah</p>

                <p>Logo Gereja Pekabaran Injil Jalan Suci</p>
                <v-img src="../assets/logogpi.jpg" class="grey darken-4 rounded-lg my-10">
                </v-img>
                <p>Berulang kali visi tentang sebuah Training Center Jalan Suci diteguhkan; pada tahun 1968, melalui visi
                    yang diterima Rochani, dan melalui beberapa kali suara nubuatan . Bible Training Centre pertama
                    didirikan di Lawang, Jawa Timur, pada tahun 1971. Ini adalah cara pendekatan non-formal dan radikal
                    untuk melatih orang-orang muda melayani. Program ini mempersiapkan siswa-siswa baru dengan dasar-dasar
                    Alkitab yang fundamental, pengalaman penginjilan, dan realitas kehidupan dan pelayanan dalam Tubuh
                    Kristus.</p>
                <p>Cara Yesus melatih murid-murid-Nya tidak bisa dipisahkan dari persekutuan-Nya dengan mereka. Murid-murid
                    belajar dengan berasosiasi dengan-Nya, mengalami kasih-Nya, memperhatikan gaya hidup-Nya, mengungkapkan
                    rahasia hati-Nya. Cara berkarya semacam inilah yang merupakan warisan dan Landasan Jalan Suci.
                    Pada tahun 1976, Stube menyerahkan "Jalan Suci" di tangan orang-orang muda Indonesia yang telah
                    dilatihnya. Dalam beberapa dasawarsa ini, tim-tim Pelayanan telah diutus ke berbagai daerah di Indonesia
                    dan di luar negeri. Banyak Pusat Pelatihan (Training Centres ) dan Pusat Ibadah( Penyembahan dalam Roh)
                    telah dibangun. Pekerjaan ini berlanjut sampai hari ini.
                    Website ini merupakan kesaksian tentang kelanjutan pekerjaan dari Jalan Suci di Indonesia dan
                    tempat-tempat lainnya. Allah adalah setia, hasil pekerjaan doa, penyembahan, pelatihan dan penginjilan
                    terus saja berkembang, dan kita berdoa agar Tuhan akan terus bekerja dalam kekuasaan-Nya.
                    **PDF's from Andrew Stube (in English), 2014**
                </p>
            </div>
        </v-col>
    </v-row>
</template>
  
<script>
import { mapState } from "vuex";
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
export default {
    name: "Profile",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            data: []
        }
    },
    components: {
        Breadcrumbs
    },
    methods: {
        setBreadcrumsData() {
            const datas = {
                type: "informasi",
                items: [
                    {
                        text: 'Beranda',
                        disabled: false,
                        href: '/',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Profil',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        color: "#BDBDBD"
                    },
                ],

            }
            this.$store.dispatch('breadcrumData', datas);
            console.log(this.$route.params) // outputs 'yay'

        }
    },
    created() {
        this.setBreadcrumsData();
    }
}
</script> 