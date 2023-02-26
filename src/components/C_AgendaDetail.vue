<template >
  <div>
    <v-row>
      <v-col md="10" offset-md="1">
        <v-img :src="require(`../assets/poster/${rows.source}`)" :alt="rows.title"
          :lazy-src="require(`../assets/poster/${rows.source}`)" class="white--text align-end rounded-lg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
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
          source: 'quotes1.jpg',
        },
        {
          id: "2366",
          category: "Pelayanan",
          slugCategory: "pelayanan",
          slugTitle: "pelayanan-mendoakan-jemaat-yang-sedang-sakit",
          title: "Pelayanan Mendoakan jemaat yang sedang Sakit dengan iman  Yesus Menyembuhkan",
          datePublish: "1 jan 2023",
          date: "06 Jan 2023",
          source: 'quotes3.jpg',
        },
        {
          id: "2553",
          category: "traning",
          slugCategory: "traning",
          slugTitle: "program-pembelajaran-hamba-tuhan",
          title: "Program Pembelajaran Hamba Tuhan di mulai pada tahun 1978",
          datePublish: "25 Jan 2022",
          date: "07 Jan 2023",
          source: 'quotes4.jpg',

        },
        {
          id: "23499",
          category: "Cabang Gereja",
          slugCategory: "cabang-gereja",
          slugTitle: "cabang-cabang-gpi-jalan-suci",
          title: "Cabang Cabang GPI Jalan Suci di seluruh nusantara",
          datePublish: "25 November 2022",
          date: "06 Jan 2023",
          source: 'quotes5.jpg',

        },
        {
          id: "2888",
          category: "PPS",
          slugCategory: "pps",
          slugTitle: "Pensyafaat-melakukan-kegiatan-doa",
          title: "Pensyafaat melakukan kegiatan doa setiap tahun di tempat yang ditentukan",
          datePublish: "18 Des 2022",
          date: "13 Jan 2023",
          source: 'quotes6.jpg',

        },
        {
          id: "2345",
          category: "Misi",
          slugCategory: "misi",
          slugTitle: "misi-pemberitaan-kabar-injil",
          title: " Pelopor GPI JS Ps.Stube pada tahun 1978, melakukan kehendak Bapa di sorga",
          datePublish: "25 Des 2022",
          date: "31 Jan 2023",
          source: 'quotes7.jpg'

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