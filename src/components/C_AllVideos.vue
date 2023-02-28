<template>
    <div v-if="settings.screenSize.type.islg">
        <v-row class="mb-5">

            <v-col cols="2">
                <!-- <Breadcrumbs /> -->
                <h4>Kategori</h4>
            </v-col>
            <v-col cols="10">
                <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
            </v-col>
        </v-row>
        <v-row>
            <v-col md="4" v-for="item in videoData">
                <v-flex xs12>
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                            <v-container fluid grid-list-lg>
                                <v-layout row>
                                    <LazyYoutube width="100%" :src="`https://www.youtube.com/embed/` + item.ytlink" />
                                    <!-- <LazyYoutube width="100%" :src="`https://www.youtube.com/embed/`+item.ytlink"/> -->
                                    <div>
                                        <div class="subheading font-weight-medium mt-3 ml-3">
                                            {{ item.title }}
                                        </div>
                                        <h5 class="float-left font-weight-regular my-2">
                                            <v-chip class="ma-2" small outlined :color="settings.color">
                                                {{ item.category }}
                                            </v-chip> {{ item.date }}
                                        </h5>
                                    </div>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-col>
        </v-row>
        <v-col md="12" v-show="isShowVideo == false">
            <v-alert color="blue-grey" outlined icon="mdi-information-outline" dense>
                Sementara belum ada informasi
            </v-alert>
        </v-col>

    </div>
    <div v-else>
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

        <v-btn text @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
            <span class="text-h7 mx-2">Kategori</span>
        </v-btn>
        <span class="text-h7 mx-2 text-right grey--text text-uppercase">{{ selectedCategory.title }}</span>
        <SearchingModal @searchData="getCategoryBySlug" class="my-5" />
        <v-col v-show="isShowVideo" v-for="item in videoData" :color="settings.color">
            <v-hover v-slot="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                    <v-container fluid grid-list-lg>
                        <v-layout row>
                            <LazyYoutube width="100%" :src="`https://www.youtube.com/embed/` + item.ytlink" />
                            <!-- <LazyYoutube width="100%" :src="`https://www.youtube.com/embed/`+item.ytlink"/> -->
                            <div>
                                <div class="subheading font-weight-medium mt-3 ml-3">
                                    {{ item.title }}
                                </div>
                                <h5 class="float-left font-weight-regular my-2">
                                    <v-chip class="ma-2" small outlined :color="settings.color">
                                        {{ item.category }}
                                    </v-chip> {{ item.date }}
                                </h5>
                            </div>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-hover>
        </v-col>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { LazyYoutube } from 'vue-lazytube'
import C_CategorySection from '@/components/C_CategorySection.vue';
import SearchingModal from '@/components/C_SearchingModal.vue';

export default {
    name: "Video",
    computed: {
        ...mapState(['settings']),
        videoData() {
            if (!this.isCategoryClicked) {
                this.datafiltering = this.listData;
            }
            return this.datafiltering;
        }
    },
    data() {
        return {
            result: "",
            isShowVideo: false,
            // youtubeURL: "https://www.youtube.com/watch?v=eN5Skim_7q4",
            listData: [
                {
                    ytlink: "nmMFYNMWQwU",
                    id: "23453",
                    category: "Misi",
                    slugCategory: "misi",
                    slugTitle: "Penginjilan",
                    title: "Penginjilan di tempat baru, 2021",
                    date: "5 Menit yang lalu"
                },
                {
                    ytlink: "odAMktTGQp8",
                    id: "2366",
                    category: "Ibadah",
                    slugCategory: "ibadah",
                    slugTitle: "Ibadah Natal",
                    title: "Ibadah Natal, jakarta timur 2022",
                    date: "8 jam yang lalu"
                },
                {
                    ytlink: "3RXChLXh8Ww",
                    id: "2553",
                    category: "Pelayanan",
                    slugCategory: "pelayanan",
                    slugTitle: "Pelayanan Diakonia - kepada sesama saling mendoakan",
                    title: "Pelayanan Diakonia-mendoakan yang sakit",
                    date: "10 Jam yang lalu"
                },
                {
                    ytlink: "zVN2I5iq6GM",
                    id: "23499",
                    category: "Traning",
                    slugCategory: "traning",
                    slugTitle: "Traning Hamba Hamba Tuhan",
                    title: "Traning Hamba Hamba Tuhan yang telah di mulai sejak 1978 oleh Ps.Stube",
                    date: "25 Sep 2022"
                },
                {
                    ytlink: "29Lx6TZ-jSk",
                    id: "2888",
                    category: "Sinode",
                    slugCategory: "sinode",
                    slugTitle: "Peresmian Kantor dan Gereja di Lawang",
                    title: "Peresmian Kantor dan Gereja di Lawang dan sebagai pusat Gereja GPI JS ",
                    date: "10 Jan 2023"
                },
                {
                    ytlink: "Gb5hwWRvcaU",
                    id: "2345",
                    category: "Cabang Gereja",
                    slugCategory: "cabang-gereja",
                    slugTitle: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                    title: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                    date: "9 jan 2023"
                }
            ],
            datafiltering: [],
            isCategoryClicked: false,
            drawer: false,
            isShowVideo: false,
            selectedCategory: {
                title: "",
                slug: ""
            }
        }
    },
    mounted() {
        this.isShowVideo = this.listData.length > 0 ? true : false;
        // this.loadURL();
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
                        text: 'Informasi',
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
                this.isShowVideo = false;
            } else {
                this.isShowVideo = true;
            }
            this.datafiltering = filteredList;
        },
    },
    components: {
        LazyYoutube,
        C_CategorySection,
        SearchingModal
    }
}
</script>

<style>
iframe {
    width: 100% !important;
    min-width: 300px;
}
</style>