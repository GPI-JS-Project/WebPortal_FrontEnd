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
            <v-col md="4" v-show="isShowgalery" v-for="image in galeryData">
                <v-flex xs12>
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <a href="javascript:void(0)" @click="openImage(image)">
                            <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-img :height="settings.defaultImageSmallContentHeight"
                                            :src="require(`../assets/${image.source}`)" :alt="image.alt"
                                            :lazy-src="require(`../assets/default/DefaultImage.jpg`)"
                                            class="grey darken-4 rounded-lg"
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
                                                {{ image.title }}
                                            </div>
                                            <h5 class="float-left font-weight-regular my-2">
                                                <v-chip class="ma-2" small outlined :color="settings.color">
                                                    {{ image.category }}
                                                </v-chip> {{ image.date }}
                                            </h5>
                                        </div>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </a>
                    </v-hover>
                </v-flex>
            </v-col>
            <v-col md="12" v-show="isShowgalery == false">
                <v-alert color="blue-grey" dense outlined icon="mdi-information-outline">
                    Sementara belum ada data
                </v-alert>
            </v-col>

        </v-row>

        <GeneralDialog v-if="this.$store.state.settings['dialogData']['modalType'].isGalery">
            <component :is="child_component"></component>
        </GeneralDialog>
    </div>

    <div v-else>
        <GeneralDialog v-if="this.$store.state.settings['dialogData']['modalType'].isGalery">
            <component :is="child_component"></component>
        </GeneralDialog>
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
        <v-row>
            <v-col v-show="isShowgalery" v-for="image in galeryData">
                <v-flex xs12>
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <a href="javascript:void(0)" @click="openImage(image)">
                            <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-img :height="settings.defaultImageSmallContentHeight"
                                            :src="require(`../assets/${image.source}`)" :alt="image.alt"
                                            :lazy-src="require(`../assets/default/DefaultImage.jpg`)"
                                            class="grey darken-4 rounded-lg"
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
                                                {{ image.title }}
                                            </div>
                                            <h5 class="float-left font-weight-regular my-2">
                                                <v-chip class="ma-2" small outlined :color="settings.color">
                                                    {{ image.category }}
                                                </v-chip> {{ image.date }}
                                            </h5>
                                        </div>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </a>
                    </v-hover>
                </v-flex>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';
import GeneralDialog from "@/components/C_GeneralDialog.vue";
import GaleryModal from "@/components/C_GaleryModal.vue";
import SearchingModal from '@/components/C_SearchingModal.vue';

export default {
    data: () => ({
        dialogm1: '',
        dialog: false,
        drawer: false,
        isShowgalery: false,
        selectedItem: 0,
        localData: null,
        child_component: 'GaleryModal',
        datafiltering: [],
        isCategoryClicked: false,
        items: [
            { text: 'Misi', icon: 'mdi-clock', total: 5, slug: "misi" },
            { text: 'Ibadah', icon: 'mdi-account', total: 10, slug: "ibadah" },
            { text: 'Pelayanan', icon: 'mdi-flag', total: 10, slug: "pelayanan" },
            { text: 'Traning', icon: 'mdi-flag', total: 12, slug: "traning" },
            { text: 'Sinode', icon: 'mdi-flag', total: 3, slug: "sinode" },
            { text: 'Cabang Gereja', icon: 'mdi-flag', total: 7, slug: "cabang-gereja" },
            { text: 'Api Menyala', icon: 'mdi-flag', total: 7, slug: "api-menyala" },
            { text: 'Rakornas', icon: 'mdi-flag', total: 7, slug: "rakornas" },
            { text: 'Bica', icon: 'mdi-flag', total: 7, slug: "bica" },
            { text: 'Kaum Wanita', icon: 'mdi-flag', total: 7, slug: "bica" },
            { text: 'Persidangan Ilahi', icon: 'mdi-flag', total: 7, slug: "persidangan-ilahi" },
            { text: 'Youth Camp', icon: 'mdi-flag', total: 7, slug: "youth-camp" }
        ],
        imagesList: [
            {
                source: "penginjilan.jpg", category: "Misi", title: "Penginjilan", total: 15, date: "25 Sept 2022", slugTitle: "misi",
                slugCategory: "misi"
            },
            {
                source: "natal.jpg", category: "ibadah", title: "Ibadah bersama 25 des 2022", total: 23, date: "15 Sept 2022",
                slugCategory: "ibadah",
                slugTitle: "ibadah"
            },
            {
                source: "pelayanandiakonia.jpg", category: "Pelayanan",
                slugCategory: "pelayanan",
                title: "Saling mendoakan", total: 50, date: "6 Agus 2022", slugTitle: "pelayanan"
            },
            {
                source: "bukudanmajalah.jpg", category: "Traning", title: "Program Sekolah Hamba Tuhan",
                slugCategory: "traning",
                total: 14, date: "25 Des 2022", slugTitle: "traning"
            },
            {
                source: "sinode.jpg", category: "Sinode", title: "Sinode GPI Jalan Suci",
                slugCategory: "sinode", total: 20, date: "2 Sept 2022", slugTitle: "sinode"
            },
            {
                source: "cabang.jpg", category: "Cabang Gereja", title: "GPI Jalan suci Cabang atau daerah ",
                slugCategory: "cabang-gereja", total: 15, date: "8 Sept 2022", slugTitle: "cabang-gereja"
            },
            {
                source: "rakornas.jpg", category: "Rakornas",
                slugCategory: "rakornas",
                title: "rapat kordinasi tiap tahun", total: 50, date: "6 Agus 2022", slugTitle: "rakornas"
            },
            {
                source: "apimenyala.jpg", category: "Api Menyala", title: "Sinode Mengeluarkan Majalah Api Menyala",
                slugCategory: "api-menyala",
                total: 14, date: "25 Des 2022", slugTitle: "api-menyala"
            },
            {
                source: "bica.jpg", category: "Bica", title: "Sinode GPI Jalan Suci melakukan BICA",
                slugCategory: "bica", total: 20, date: "2 Sept 2022", slugTitle: "bica"
            },
            {
                source: "pps.jpg", category: "PPS", title: "Pensyafaat melakukan doa",
                slugCategory: "pps", total: 15, date: "8 Sept 2022", slugTitle: "pps"
            },
            {
                source: "youthcamp.jpg", category: "Youth Camp", title: "Pemuda Melakukan Kegiatan Youth Camp",
                slugCategory: "youth-camp", total: 15, date: "8 Sept 2022", slugTitle: "yaouth-camp"
            },
            {
                source: "pertemuanpengurus.jpg", category: "Persidangan Ilahi", title: "Persidangan Ilahi di lakukan setiap tahun",
                slugCategory: "persidangan-ilahi", total: 15, date: "8 Sept 2022", slugTitle: "persidangan-ilahi"
            },
            {
                source: "kaumwanita.jpg", category: "Kaum Wanita", title: "Pertemuan Kaum Wanita di lawang 2020",
                slugCategory: "kaum-wanita", total: 15, date: "8 Sept 2014", slugTitle: "kaum-wanita"
            },
            {
                source: "bica.jpg", category: "Bica", title: "Bica, lawang 2018",
                slugCategory: "bica", total: 15, date: "8 Sept 2018", slugTitle: "bica-lawang-2018"
            },
            {
                source: "kaumwanita.jpg", category: "Kaum Wanita", title: "Pertemuan Kaum Wanita di lawang 2010",
                slugCategory: "kaum-wanita", total: 15, date: "8 Sept 2010", slugTitle: "kaum-wanita"
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
    }),
    components: {
        Breadcrumbs,
        C_CategorySection,
        GaleryModal,
        GeneralDialog,
        SearchingModal
    },
    computed: {
        ...mapState(['settings']),
        galeryData() {
            if (!this.isCategoryClicked) {
                this.datafiltering = this.imagesList;
            }
            return this.datafiltering;
        }
    },
    mounted() {
        this.localData = this.$store.state.settings['dialogData'];
        this.isShowgalery = this.imagesList.length > 0 ? true : false;
    },
    methods: {
        openImage(image) {
            this.dialog = true;
            this.localData.isShowDialog = true;
            this.localData.modalType.isGalery = true;
            this.localData.modalType.isSearch = false;
            this.localData.data = image;
            const modalData = {
                dialogData: this.localData
            }
            this.$store.dispatch('settings', modalData);
        },
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
                        text: 'Media',
                        disabled: false,
                        href: '/media/foto',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Foto',
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
            if (event != '') {
                if (event === this.$store.state.settings.allCategory) {
                    filteredList = this.imagesList;
                } else {
                    filteredList = this.imagesList.filter((e) => e.slugCategory === event.slug).map((e) => { return e });
                }
                this.isCategoryClicked = true;
                if (filteredList.length == 0) {
                    this.isShowgalery = false;
                } else {
                    this.isShowgalery = true;
                }
            }
            this.datafiltering = filteredList;
        }
    },
    created() {
        this.setBreadcrumsData();
        let indexData = 0;
        this.items.forEach((el, index) => {
            if (el.slug === this.$route.params.id) indexData = index;
        });
        this.selectedItem = indexData;
    }
}
</script>