<template >
  <v-row>
    <v-col md="10" offset-md="1">
      <v-img :src="require(`../assets/${rows.source}`)" :alt="rows.title"
        :lazy-src="require(`../assets/default/DefaultImage.jpg`)" class="white--text align-end rounded-lg"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate :color="settings.color">
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
  metaInfo() {
    return {
      title: this.rows.title,
      htmlAttrs: {
        lang: 'en-US',
        amp: true
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: this.rows.content },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
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
          slugTitle: "rakornas-lawang",
          title: "RAKORNAS GPI 'Jalan Suci' 2023 di Lawang",
          date: "5 Menit yang lalu",
          source: "penginjilan.jpg",
          content:
            `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              
            <h2 style="padding-top:10px">Gedung GPI Jayapura</h2> 
            <img style="width:100%; padding:20px" src='http://1.bp.blogspot.com/-SYHKTmuDAGc/TpCF6qeIGTI/AAAAAAAAAD8/u9ZtkTt8q5w/s758/IMG_4945.JPG'/> 
            <br/>
            Lorem ipsum dolor sit amet, <i>contoh huruf miring</i> adipiscing elit, 
            <span style="color:red">ini warna merah</span>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
          slugTitle: "pelayanan-diakonia-mendoakan-yang-sakit",
          title: "Pelayanan Diakonia - kepada sesama saling mendoakan",
          date: "10 Jam yang lalu",
          source: "pelayanandiakonia.jpg"
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