 
<template class="my-1">
  <!-- <v-carousel next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left" cycle delimiter-icon="mdi-minus" -->
  <div>
    <v-carousel cycle :show-arrows="false" delimiter-icon="mdi-checkbox-blank-circle-outline" class="mb-15 rounded-lg"
      :height="imageSize">
      <v-carousel-item eager v-for="(item, i) in items" :key="i">
        <v-img :src="require(`../assets/${item.source}`)" :lazy-src="require(`../assets/${item.source}`)"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)">
          <v-row class="fill-height" align="center" justify="center">
            <v-col class="ml-5">
              <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                <v-chip class="ma-2" close :color="settings.color" dark>
                  {{ item.category }}
                </v-chip>
                <br>
                <div class="text-h4 white--text float-left">
                  {{ item.title }}
                </div>
              </router-link>
            </v-col>
          </v-row>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5">
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Carausel",
  computed: {
    ...mapState(['settings'])
  },
  data() {
    return {
      cycle: true,
      imageSize: 500,
      model: null,
      items: [
        {
          id: "23453",
          category: "Misi",
          slugCategory: "misi",
          slugTitle: "rakornas-lawang",
          title: "RAKORNAS GPI 'Jalan Suci' 2023 di Lawang",
          date: "5 Menit yang lalu",
          source: "penginjilan.jpg"
        },
        {
          id: "2366",
          category: "Ibadah",
          slugCategory: "ibadah",
          slugTitle: "ibadah-natal",
          title: "Ibadah Natal, jakarta timur 2022",
          date: "8 jam yang lalu",
          source: "natal.jpg"
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
          source: "belajar.jpg"
        },
        {
          id: "2888",
          category: "Sinode",
          slugCategory: "sinode",
          slugTitle: "Peresmian Kantor dan Gereja di Lawang",
          title: "Peresmian Kantor dan Gereja di Lawang dan sebagai pusat Gereja GPI JS ",
          date: "10 Jan 2023",
          source: "sinode.jpg"
        }
      ],
    }
  },
  mounted() {
    if (this.$store.state.settings.screenSize.type.isxs) {
      this.imageSize = 400;
    }
  }
}
</script>