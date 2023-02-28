<template>
  <div v-if="settings.screenSize.type.islg">
    <v-row class="mb-5">

      <v-col cols="2">
        <h4>Kategori</h4>
      </v-col>
      <v-col cols="10">
        <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" v-for="items in documentsData">
        <v-flex xs12>
          <router-link :to="'/informasi/detail/' + items.subtitle" class="text-decoration-none">
            <v-hover v-slot="{ hover }" open-delay="200">

              <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-img :height="settings.defaultImageSmallContentHeight" :src="require(`../assets/${items.source}`)"
                      :alt="items.title" :lazy-src="require(`../assets/${items.source}`)" class="grey darken-4 rounded-lg"
                      :width="settings.defaultImageSmallContentWidth">
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate :color="settings.color">
                          </v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>

                    <div>
                      <div class="subheading font-weight-medium mt-3 ml-3">
                        <p v-html="items.title"></p>
                      </div>
                      <h5 class="float-left font-weight-regular my-2">
                        <v-chip class="ma-2" small outlined :color="settings.color">
                          <v-icon> mdi-download </v-icon> Download
                        </v-chip> {{ items.date }}
                      </h5>
                    </div>
                  </v-layout>
                </v-container>
              </v-card>

            </v-hover>
          </router-link>
        </v-flex>
      </v-col>
      <v-col md="12" v-show="isShowDocument == false">
        <v-alert color="blue-grey" dense outlined icon="mdi-information-outline">
          Sementara belum ada data
        </v-alert>
      </v-col>

    </v-row>
  </div>
  <div v-else>
    <div v-if="!settings.screenSize.type.islg">
      <v-navigation-drawer v-model="drawer" fixed left class="rounded-r-lg">
        <v-row class="my-1 mx-1">
          <v-col md="10">
            <span>Kategori</span>
          </v-col>
          <v-col md="2" class="text-right">
            <v-btn icon @click.stop="drawer = false" :color="settings.color">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
      </v-navigation-drawer>
    </div>
    <v-btn text @click.stop="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
      <span class="text-h7 mx-2">Kategori</span>
    </v-btn>
    <span class="text-h7 mx-2 text-right grey--text text-uppercase">{{ selectedCategory.title }}</span>
    <SearchingModal @searchData="getCategoryBySlug" class="my-5" />
    <v-row>

      <v-col md="12" v-for="items in documentsData">
        <v-flex xs12>
          <v-hover v-slot="{ hover }" open-delay="200">
            <router-link :to="'/informasi/detail/' + items.subtitle" class="text-decoration-none">
              <v-hover v-slot="{ hover }" open-delay="200">

                <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                  <v-container fluid grid-list-lg>
                    <v-layout row>
                      <v-img :height="settings.defaultImageSmallContentHeight" :src="require(`../assets/${items.source}`)"
                        :alt="items.title" :lazy-src="require(`../assets/${items.source}`)"
                        class="grey darken-4 rounded-lg" :width="settings.defaultImageSmallContentWidth">
                        <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate :color="settings.color">
                            </v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>

                      <div>
                        <div class="subheading font-weight-medium mt-3 ml-3">
                          <p v-html="items.title"></p>
                        </div>
                        <h5 class="float-left font-weight-regular my-2">
                          <v-chip class="ma-2" small outlined :color="settings.color">
                            <v-icon> mdi-download </v-icon> Download
                          </v-chip> {{ items.date }}
                        </h5>
                      </div>
                    </v-layout>
                  </v-container>
                </v-card>

              </v-hover>
            </router-link>
          </v-hover>
        </v-flex>
      </v-col>
      <v-col md="12" v-show="isShowDocument == false">
        <v-alert color="blue-grey" outlined icon="mdi-information-outline" dense>
                Sementara belum ada data
            </v-alert>
      </v-col>

    </v-row>
  </div>
</template>
  
<script>
import { mapState } from "vuex";
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import OtherNews from '@/components/C_OtherNews.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';
import SearchingModal from '@/components/C_SearchingModal.vue';
export default {
  name: "Video",
  computed: {
    ...mapState(['settings']),
    documentsData() {
      if (!this.isCategoryClicked) {
        this.datafiltering = this.listData;
      }
      return this.datafiltering;
    }
  },
  data() {
    return {
      isCategoryClicked: false,
      isShowDocument: false,
      datafiltering: [],
      drawer: false,
      selectedCategory: {
        title: "",
        slug: ""
      },
      listData: [
        {
          id: "23453",
          category: "Mision",
          slugCategory: "Hasil Persidangan Ilahi",
          slugTitle: "Hasil Persidangan Ilahi 2022",
          title: "Hasil Persidangan Ilahi",
          date: "5 Menit yang lalu",
          source: "hasilpersidanganilahi.jpg"
        },
        {
          id: "2366",
          category: "Cabang Gereja",
          slugCategory: "cabang-gereja",
          slugTitle: "ibadah-natal-2022",
          title: "Ibadah Natal Jemaat GPI Jaktim 2022",
          date: "8 jam yang lalu",
          source: "natal.jpg"
        },
        {
          id: "2553",
          category: "Pelayanan",
          slugCategory: "Laporan Keuangan",
          slugTitle: "Laporan Keuangan Tahun 2022",
          title: "Laporan Keuangan Tahun 2022",
          date: "18 Des 2022",
          source: "laporankeuangan1.jpg"
        },
        {
          id: "23499",
          category: "Ibadah",
          slugCategory: "Ibadah natal",
          slugTitle: "ibadah-natal-Sundaychool-2022",
          title: "Natal Sunday School di GPI JS Jaktim",
          date: "25 Des 2022",
          source: "sundayschool.jpg"
        },
        {
          id: "2888",
          category: "Sekolah Hamba Tuhan",
          slugCategory: "Traning",
          slugTitle: "Traning",
          title: "Program Pembelajaran Hamba Tuhan",
          date: "1 Jan 2022",
          source: "bukudanmajalah.jpg"
        },
        {
          id: "2345",
          category: "Cabang",
          slugCategory: "Jemaat di semua Cabang Cabang/Jemaat",
          slugTitle: "Jemaat di semua Cabang Cabang/Jemaat",
          title: "Jumlah jemaat GPI Jalan Suci  di indonesia",
          date: "20 Jan 2023",
          source: "datajemaat.jpg"
        },
        {
          id: "2345",
          category: "Api Menyala",
          slugCategory: "api-menyala",
          slugTitle: "Buku-dan-majalah-api-menyala",
          title: "Buku dan majalah api menyala dari  ",
          date: "25 Jan 2023",
          source: "majalahapimenyala.png"
        },
        {
          id: "2345",
          category: "Rakornas",
          slugCategory: "rakornas",
          slugTitle: "hasil-rakernas",
          title: "hasil-rakernas-tahun-2022",
          date: "20 Sep 2022",
          source: "dokument6.jpg"
        },
        {
          id: "2345",
          category: "Sinode",
          slugCategory: "sinode",
          slugTitle: "Dokument-tanda-masuk-dalam-anggota-PGPI",
          title: "Dokument tanda masuk dalam anggota PGPI",
          date: "25 Jan 2020",
          source: "dokumentkeanggotaan.jpg"
        },
        {
          id: "2345",
          category: "Misi",
          slugCategory: "misi",
          slugTitle: "bahan-ajar-penginjilan",
          title: "bahan ajar penginjilan GPI JS",
          date: "25 Jan 2020",
          source: "bukudanmajalah.jpg"
        },
        {
          id: "2345",
          category: "Persidangan Ilahi",
          slugCategory: "persidangan.ilahi",
          slugTitle: "dokument-hasil-persidangan-ilahi",
          title: "Hasil Persidangan Ilahi",
          date: "25 Jan 2020",
          source: "hasilpersidanganilahi.jpg"
        }
      ],
      data: []
    }
  },
  components: {
    Breadcrumbs,
    OtherNews,
    C_CategorySection,
    SearchingModal
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
            text: 'Dokumen',
            disabled: true,
            href: 'breadcrumbs_link_2',
            color: "#BDBDBD"
          },
        ],

      }
      this.$store.dispatch('breadcrumData', datas);

    },
    getCategoryBySlug(event) {
      var filteredList = [];
      if (typeof event === 'string') {
        filteredList = this.listData
          .filter(
            ({ title }) => [title]
              .some(value => value.toLowerCase().includes(event.toLowerCase()))
          );
        this.isCategoryClicked = true;
        this.selectedCategory.title = "";
        this.selectedCategory.slug = "";
      } else {
        if (event != null) {
          this.selectedCategory.title = event.text;
          this.selectedCategory.slug = event.slug;
          if (event.slug === this.$store.state.settings.allCategory) {
            filteredList = this.listData;
          } else {
            filteredList = this.listData.filter((e) => e.slugCategory === event.slug).map((e) => { return e });
          }
          this.isCategoryClicked = true;

        }
      }

      if (filteredList.length == 0) {
        this.isShowDocument = false;
      } else {
        this.isShowDocument = true;
      }
      this.datafiltering = filteredList;
      this.drawer = false;
    },
    created() {
      this.setBreadcrumsData();
    },
    mounted() {
      this.isShowDocument = this.listData.length > 0 ? true : false;
    }
  }
}
</script> 