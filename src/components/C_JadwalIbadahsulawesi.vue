<template >
    <v-row>
      <v-col md="10" offset-md="1">
        <v-img :src="require(`../assets/${rows.source}`)" :alt="rows.title"
          :lazy-src="require(`../assets/${rows.source}`)" class="white--text align-end rounded-lg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5">
              </v-progress-circular>
            </v-row>
          </template>
          <v-card-title>
            {{ rows.title }}
          </v-card-title>
        </v-img>
  
  
        <v-card-actions>
          <v-chip outlined small :color="settings.color" :to="`/informasi/kategori/natal`">
            {{ rows.category }}
          </v-chip>
          <span class="ml-5">{{ rows.date }}</span>
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
      </v-col>
      <v-col md="10" offset-md="1">
        <div class="my-1">
          <!-- <v-img src='../assets/apimenyala.jpg'></v-img> -->
          <p v-html="rows.content"></p>
        </div>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name: "Video",
    computed: {
      ...mapState(['settings'])
    },
    data() {
      return {
        rows: [
          {
            id: "23453",
            category: "Misi",
            slugCategory: "misi",
            slugTitle: "misi",
            title: "Penginjilan di tempat baru, 2021",
            date: "5 Menit yang lalu",
            source: "penginjilan.jpg",
            content:
              `
              “Di situ akan ada jalan raya, yang akan disebutkan Jalan Kudus” Yesaya 35:8
                Kehidupan Kekristenan dan pelayanan tidak pernah menonjol melebihi standar dan nilai  ibadah kami. Kehidupan dan pelayanan rohani kami dilakukan, dan dimulai dari hadirat Allah.
                Jalan Suci didedikasikan untuk beribadah di dalam Ruang Mahakudus. Ini selalu mengarah kepada pelayanan yang penuh Kuasa dalam Roh Kudus. 
                Jalan Suci mendorong orang untuk berkumpul mengelilingi Yesus sama seperti kesatuan murid-murid-Nya yang pertama, menikmati persekutuan-Nya, belajar tentang jalan-jalan-Nya, menjadi bagian dalam kegerakan Allah yang besar yang terjadi di seluruh dunia dalam rangka persiapan menyambut kedatangan-Nya. Kami menyembah dalam Roh dengan kenyataan karunia-karunia Roh. Sering kami bertemu Allah dalam keheningan keabadian; pada kesempatan lain kami menyatu dalam puji-pujian para malaikat dalam suasana hadirat yang tinggi mengelilingi tahta-Nya. Kami terbuka dan melayakan Yesus memuridkan kami. Dia memimpin kami keluar  untuk melayani dalam berbagai bentuk pelayanan di mana kami dapat melihat apa yang Ia lakukan dan belajar mengambil bagian di dalamnya.
  
              <h2 style="padding-top:10px">Gedung GPI Jayapura</h2> 
              <img style="width:100%; padding:20px" src='https://www.facebook.com/photo/?fbid=637117762986151&set=p.637117762986151'/> 
              <br/>
              <i>GPI Jalan Suci Jayapura</i>, 
              <span style="color:red">Tanah Hitam</span>
            `
          },
          {
            id: "2366",
            category: "Ibadah",
            slugCategory: "ibadah",
            slugTitle: "ibadah-natal",
            title: "Ibadah Natal, jakarta timur 2022",
            date: "8 jam yang lalu",
            source: "natal.jpg",
            content: "Sample content 2"
          },
          {
            id: "2553",
            category: "Pelayanan",
            slugCategory: "pelayanan",
            slugTitle: "Pelayanan Diakonia - kepada sesama saling mendoakan",
            title: "pelayanan-diakonia-mendoakan-yang-sakit",
            date: "10 Jam yang lalu",
            source: "pelayanandiakonia.jpg",
            content: "Sample content 3"
          },
          {
            id: "23499",
            category: "Traning",
            slugCategory: "traning",
            slugTitle: "Traning Hamba Hamba Tuhan",
            title: "Traning Hamba Hamba Tuhan yang telah dimulai sejak 1978 oleh Ps.Stube",
            date: "25 Sep 2022",
            source: "belajar.jpg",
            content: "Sample content 4"
          },
          {
            id: "2888",
            category: "Sinode",
            slugCategory: "sinode",
            slugTitle: "Peresmian Kantor dan Gereja di Lawang",
            title: "Peresmian Kantor dan Gereja di Lawang dan sebagai pusat Gereja GPI JS ",
            date: "10 Jan 2023",
            source: "sinode.jpg",
            content: "Sample content 5"
          },
          {
            id: "2345",
            category: "Cabang Gereja",
            slugCategory: "cabang-gereja",
            slugTitle: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
            title: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
            date: "9 jan 2023",
            source: "peresmian.jpeg",
            content: "Sample content 6"
          },
          {
            id: "2345",
            category: "Cabang Gereja",
            slugCategory: "cabang-gereja",
            slugTitle: "Peresmian kantor dan gereja GPI JS Cabang Papua - jayapura",
            title: "Peresmian kantor dan gereja GPI JS Jayapura",
            date: "8 Jan 2023",
            source: "cabang.jpg",
            content: "Sample content 7"
          },
          {
            id: "2345",
            category: "PPS",
            slugCategory: "pps",
            slugTitle: "Doa-awal-tahun-bersama-dilawang",
            title: "Doa awal tahun bersama dilawang",
            date: "7 jan 2023",
            source: "pps.jpg",
            content: "Sample content 8"
          },
          {
            id: "2345",
            category: "kaum Wanita",
            slugCategory: "kaum-wanita",
            slugTitle: "Pertemuan-wanita",
            title: "Pertemuan wanita dilawang",
            date: "5 Jan 2023",
            source: "kaumwanita.jpg",
            content: "Sample content 9"
          }
        ]
      }
    },
    components: {
    },
    methods: {
      setData() {
        console.log(this.$route.params.id);
        this.rows = this.rows.filter(val => val.slugTitle == this.$route.params.id).map(e => { return e })[0];
  
      }
    },
    created() {
      this.setData();
    }
  }
  </script> 