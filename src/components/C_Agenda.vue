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
            <v-col md="4" v-for="item in agendaData">
                <div>
                    <v-flex xs12>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/agenda/detail/' + item.slugTitle" class="text-decoration-none">
                                <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-img :src="require(`../assets/poster/${item.source}`)"
                                                :lazy-src="require(`../assets/default/DefaultImage.jpg`)"
                                                class="grey darken-4 rounded-lg">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate :color="settings.color">
                                                        </v-progress-circular>
                                                    </v-row>
                                                </template>

                                                <v-chip class="ma-2" dark :color="settings.color">
                                                    <v-icon>
                                                        mdi-bell
                                                    </v-icon> {{ item.date }}
                                                </v-chip>

                                            </v-img>
                                            <div class="mt-3 ml-3">
                                                <div class="subheading font-weight-medium">
                                                    {{ item.title }}
                                                </div>
                                                <h5 class="float-left font-weight-regular my-2">
                                                    <v-chip class="ma-2" small outlined :color="settings.color">
                                                        {{ item.category }}
                                                    </v-chip> {{ item.datePublish }}
                                                </h5>
                                            </div>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-flex>
                </div>
            </v-col>
            <v-col md="12" v-show="isShowAgenda == false">
                <v-alert color="blue-grey" dense outlined icon="mdi-information-outline">
                    Sementara belum ada data
                </v-alert>
            </v-col>
        </v-row>

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

        <v-col md="12" v-show="isShowAgenda" v-for="item in agendaData">
            <v-flex xs12>
                <v-hover v-slot="{ hover }" open-delay="200">
                    <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                        <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                            <v-container fluid grid-list-lg>
                                <v-layout row>
                                    <v-img :src="require(`../assets/poster/${item.source}`)"
                                        :height="settings.defaultImageContentHeight"
                                        :lazy-src="require(`../assets/default/DefaultImage.jpg`)"
                                        class="grey darken-4 rounded-lg">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate :color="settings.color">
                                                </v-progress-circular>
                                            </v-row>
                                        </template>

                                        <v-chip class="ma-2" dark :color="settings.color">
                                            <v-icon>
                                                mdi-bell
                                            </v-icon> {{ item.date }}
                                        </v-chip>

                                    </v-img>
                                    <div class="mt-3 ml-3">
                                        <div class="subheading font-weight-medium">
                                            {{ item.title }}
                                        </div>
                                        <h5 class="float-left font-weight-regular my-2">
                                            <v-chip class="ma-2" small outlined :color="settings.color">
                                                {{ item.category }}
                                            </v-chip> {{ item.datePublish }}
                                        </h5>
                                    </div>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </router-link>
                </v-hover>
            </v-flex>
        </v-col>
        <v-col md="12" v-show="isShowAgenda == false">
            <v-alert color="blue-grey" outlined icon="mdi-information-outline" dense>
                Sementara belum ada data
            </v-alert>
        </v-col>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const C_CategorySection = defineAsyncComponent(() =>
    import('@/components/C_CategorySection.vue')
);
const SearchingModal = defineAsyncComponent(() =>
    import('@/components/C_SearchingModal.vue')
);
import { mapState } from "vuex";
export default {
    data: () => ({
        selectedItem: 1,
        datafiltering: [],
        isCategoryClicked: false,
        isShowAgenda: false,
        drawer: false,
        selectedCategory: {
            title: "",
            slug: ""
        },
        items: [
            { text: 'Desember 2022', icon: 'mdi-clock', total: 5 },
            { text: 'Januari 2021', icon: 'mdi-account', total: 10 },
            { text: 'Maret 2022', icon: 'mdi-flag', total: 10 },
            { text: 'Februari 2021', icon: 'mdi-flag', total: 12 },
            { text: 'Agustus 2022', icon: 'mdi-flag', total: 3 },
            { text: 'September', icon: 'mdi-flag', total: 7 },
        ],
        listData: [
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
    }),
    components: {
        C_CategorySection,
        SearchingModal
    },
    computed: {
        ...mapState(['settings', 'breadcrumData']),
        agendaData() {
            if (!this.isCategoryClicked) {
                this.datafiltering = this.listData;
            }
            return this.datafiltering;
        }
    },
    methods: {
        setBreadcrumsData() {
            const datas = {
                type: "agenda",
                items: [
                    {
                        text: 'Beranda',
                        disabled: false,
                        href: '/',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Agenda',
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
                this.isShowAgenda = false;
            } else {
                this.isShowAgenda = true;
            }
            this.datafiltering = filteredList;
            this.drawer = false;
        },
    },
    created() {
        this.setBreadcrumsData();
    },
    mounted() {
        this.isShowAgenda = this.listData.length > 0 ? true : false;
    },
}
</script>