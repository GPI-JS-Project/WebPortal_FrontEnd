<template >
  <div>
    <v-row>
      <v-col md="10" offset-md="1">
        <v-img :src="require(`../assets/${rows.source}`)" :alt="rows.title"
          :lazy-src="require(`../assets/${rows.source}`)" class="white--text align-end rounded-lg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="400px">
          <v-card-title>
            <v-container>
              <h3 class="font-weight-medium"> <v-icon class="white--text"> mdi-bell </v-icon> {{ rows.date }}</h3>
            </v-container>
            <v-container>
              {{ rows.title }}
            </v-container>
          </v-card-title>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5">
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-card-actions>
          <v-chip outlined small :color="settings.color" to="/agenda">
            {{ rows.category }}
          </v-chip>
          <span class="ml-5" v-text="rows.datePublish"></span>
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
        <div class="my-1">
          <p v-text="rows.content"></p>
        </div>
      </v-col>
    </v-row>
  </div>
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
          category: "Ibadah",
          slugCategory: "ibadah",
          slugTitle: "ibadah-natal-2022",
          title: "Ibadah Natal 2022 di jemaat GPI JS Jakarta Timur",
          date: "5 jan 2023",
          datePublish: "25 Des 2022",
          source: "natal.jpg",
          content: "Sample"
        },
        {
          id: "2366",
          category: "Pelayanan",
          slugCategory: "pelayanan",
          slugTitle: "pelayanan-mendoakan-jemaat-yang-sedang-sakit",
          title: "Pelayanan Mendoakan jemaat yang sedang Sakit dengan iman  Yesus Menyembuhkan",
          datePublish: "1 jan 2023",
          date: "06 Jan 2023",
          source: "pelayanandiakonia.jpg",
          content: "Sample"
        },
        {
          id: "2553",
          category: "traning",
          slugCategory: "traning",
          slugTitle: "program-pembelajaran-hamba-tuhan",
          title: "Program Pembelajaran Hamba Tuhan di mulai pada tahun 1978",
          datePublish: "25 Jan 2022",
          date: "07 Jan 2023",
          source: "belajar.jpg",
          content: "Sample"

        },
        {
          id: "23499",
          category: "Cabang Gereja",
          slugCategory: "cabang-gereja",
          slugTitle: "cabang-cabang-gpi-jalan-suci",
          title: "Cabang Cabang GPI Jalan Suci di seluruh nusantara",
          datePublish: "25 November 2022",
          date: "06 Jan 2023",
          source: "indonesia.jpg",
          content: "Sample"

        },
        {
          id: "2888",
          category: "PPS",
          slugCategory: "pps",
          slugTitle: "Pensyafaat-melakukan-kegiatan-doa",
          title: "Pensyafaat melakukan kegiatan doa setiap tahun di tempat yang ditentukan",
          datePublish: "18 Des 2022",
          date: "13 Jan 2023",
          source: "pps.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Misi",
          slugCategory: "misi",
          slugTitle: "misi-pemberitaan-kabar-injil",
          title: " Pelopor GPI JS Ps.Stube pada tahun 1978, melakukan kehendak Bapa di sorga",
          datePublish: "25 Des 2022",
          date: "31 Jan 2023",
          source: "mision.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Api Menyala",
          slugCategory: "api-menyala",
          slugTitle: "majalah-api-menyala",
          title: "Majalah Api Menyala dikeluarkan oleh sinode yang di pakai oleh seluruh cabang gereja",
          datePublish: "25 Des 2022",
          date: "01 feb 2023",
          source: "apimenyala.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Rakornas",
          slugCategory: "rakornas",
          slugTitle: "rapat-kordinasi-tiap-tahun-dilaksanan",
          title: "rapat-kordinasi-tiap-tahun-dilaksanan pada tiap bulan agustus",
          datePublish: "20 September 2022",
          date: "01 november 2022",
          source: "rakornas.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Sinode",
          slugCategory: "sinode",
          slugTitle: "sinode-melakukan-kegiatan-pemkus",
          title: "sinode melakukan kegiatan mp6 dan lainnya yang merupakan pembentukan murid kristus",
          datePublish: "25 Des 2022",
          date: "12 jan 2023",
          source: "sinode.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Bica",
          slugCategory: "bica",
          slugTitle: "bica-dilakukan-tiap-tahun",
          title: "bica dilakukan tiap tahun di lawang pada bulan agustus",
          datePublish: "20 September 2022",
          date: "30 november 2022",
          source: "bica.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Kaum Wanita",
          slugCategory: "kaum-wanita-melakukan kegiatan tahun 2025 di jogja",
          slugTitle: "kaum-wanita-melakukan kegiatan tahun 2025 di jogja",
          title: "Kaum wanita melakukan kegiatan tahun 2025 di jogja",
          datePublish: "20 September 2022",
          date: "22 Agustus 2022",
          source: "kaumwanita.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "",
          slugCategory: "sinode",
          slugTitle: "sinode-melakukan-kegiatan-pemkus",
          title: "sinode melakukan kegiatan pemkus dan lainnya yang merupakan pembentukan murid kristus",
          datePublish: "25 Des 2022",
          date: "01 feb 2023",
          source: "mision.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Persidangan Ilahi",
          slugCategory: "persidangan-ilahi",
          slugTitle: "persidangan-dilakukan-tiap-tahun-dilawang",
          title: "Persidangan Ilahi dilakukan tiap tahun",
          datePublish: "1 januari 2022",
          date: "21 januari 2022",
          source: "pertemuanpengurus.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Youth Camp",
          slugCategory: "youth-camp",
          slugTitle: "youth-dilakukan-tiap-tahun",
          title: "youth dilakukan tiap tahun di lawang pada bulan",
          datePublish: "3 maret 2022",
          date: "12 maret 2022",
          source: "youthcamp.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Ibadah",
          slugCategory: "ibadah",
          slugTitle: "ibadah-natal-sekolah-minggu",
          title: "Ibadah natal sekolah minggu",
          datePublish: "20 mey 2022",
          date: "01 juni 2022",
          source: "sundayschool.jpg",
          content: "Sample"

        },
        {
          id: "2345",
          category: "Traning",
          slugCategory: "traning",
          slugTitle: "program-traning-dilakukan-tiap-tahun-dibeberapa cabang dan sinode",
          title: "program traning dilakukan tiap tahun dibeberapa cabang dan sinode",
          datePublish: "13 juni 2022",
          date: "11 Agustus 2022",
          source: "bukudanmajalah.jpg",
          content: "Sample"

        },

        {
          id: "2345",
          category: "PPS",
          slugCategory: "pps",
          slugTitle: "program-doa-dilakukan-tiap-tahun-dibeberapa cabang dan sinode",
          title: "program doa dilakukan tiap tahun dibeberapa cabang dan sinode",
          datePublish: "30 September 2022",
          date: "11 november 2022",
          source: "foto8.jpg",
          content: "Sample"

        },

        {
          id: "2345",
          category: "Cabang Gereja",
          slugCategory: "cabang-gereja",
          slugTitle: "ibadah persekutuan bersama di jemaat lokal jakarta timur",
          title: "ibadah persekutuan bersama di jemaat lokal jakarta timur 2022",
          datePublish: "12 november 2022",
          date: "23 november 2022",
          source: "foto3.jpg",
          content: "Sample"

        },
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