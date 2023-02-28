<template>
    <div v-if="settings.screenSize.type.islg">
        <v-row class="mb-5">

            <v-col cols="2">
                <h4>Cabang Gereaja</h4>
            </v-col>
            <v-col cols="10">
                <C_CabangGereja @getCabangGerejaBySlug="getCabangGerejaBySlug" />
            </v-col>
        </v-row>

        <v-row>
            <v-col md="4" v-for="items in infoData">
                <v-flex xs12>
                    <router-link :to="'/cabang/detail/' + items.provinsiSlug" class="text-decoration-none">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-img :height="settings.defaultImageContentHeight"
                                            :src="require(`../assets/${items.source}`)" :alt="items.title"
                                            :lazy-src="require(`../assets/${items.source}`)"
                                            class="grey darken-4 rounded-lg"
                                            :width="settings.defaultitemsSmallContentWidth">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate :color="settings.color">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>

                                        <div>
                                            <div class="subheading font-weight-medium mt-3 ml-3 text-uppercase">
                                                {{ items.title }}
                                            </div>
                                            <h5 class="float-left font-weight-regular my-2">

                                                <v-chip class="ma-2" small outlined :color="settings.color">
                                                    {{ items.totalLokalJemaat }} Jemaat Lokal
                                                </v-chip>
                                            </h5>
                                        </div>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-hover>
                    </router-link>
                </v-flex>
            </v-col>
            <v-col md="12" v-show="isShowNews == false">
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
                <C_CabangGereja @getCabangGerejaBySlug="getCabangGerejaBySlug" />
            </v-navigation-drawer>
        </div>
        <v-btn text @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
            <span class="text-h7 mx-2">Kategori</span>
        </v-btn>
        <span class="text-h7 mx-2 text-right grey--text text-uppercase">{{ selectedCategory.title }}</span>
        <SearchingModal @searchData="getCabangGerejaBySlug" class="my-5" />
        <v-col cols="12">
            <v-row>
                <v-col md="4" v-show="isShowNews" v-for="items in infoData">
                    <v-flex xs12>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/cabang/detail/' + items.provinsiSlug" class="text-decoration-none">
                                <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-img :height="settings.defaultImageContentHeight"
                                                :src="require(`../assets/${items.source}`)" :alt="items.title"
                                                :lazy-src="require(`../assets/${items.source}`)"
                                                class="grey darken-4 rounded-lg"
                                                :width="settings.defaultitemsSmallContentWidth">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate :color="settings.color">
                                                        </v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>

                                            <div>
                                                <div class="subheading font-weight-medium mt-3 ml-3 text-uppercase">
                                                    {{ items.title }}
                                                </div>
                                                <h5 class="float-left font-weight-regular my-2">

                                                    <v-chip class="ma-2" small outlined :color="settings.color">
                                                        {{ items.totalLokalJemaat }} Jemaat Lokal
                                                    </v-chip>
                                                </h5>
                                            </div>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-flex>
                </v-col>
            </v-row>
        </v-col>
        <v-col md="12" v-show="isShowNews == false">
            <v-alert color="blue-grey" outlined icon="mdi-information-outline" dense>
                Sementara belum ada data
            </v-alert>
        </v-col>

    </div>
</template>

<script>
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CabangGereja from '@/components/C_CabangGereja.vue';
import C_Parallax from '@/components/C_Parallax.vue';
import SearchingModal from '@/components/C_SearchingModal.vue';
import { defineComponent } from "vue";

import { mapState } from "vuex";
export default defineComponent({
    data: () => ({
        selectedItem: 0,
        isShowNews: false,
        listData: [
            {
                id: "23453",
                totalLokalJemaat: 3,
                provinsiSlug: "jawa",
                slugCategory: "",
                slugTitle: "",
                title: "Jakarta",
                date: "",
                source: "penginjilan.jpg"
            },
            {
                id: "2366",
                totalLokalJemaat: 3,
                provinsiSlug: "sulawesi",
                slugCategory: "",
                slugTitle: "",
                title: "manado",
                date: "",
                source: "manado.jpg"
            },
            {
                id: "2553",
                totalLokalJemaat: 3,
                provinsiSlug: "papua",
                slugCategory: "",
                slugTitle: "",
                title: "jayapura",
                date: "",
                source: "jayapura.jpg"
            },
            {
                id: "23499",
                totalLokalJemaat: 1,
                provinsiSlug: "jawa",
                slugCategory: "",
                slugTitle: "",
                title: "bali",
                date: "",
                source: "bali.jpg"
            },
            {
                id: "2888",
                totalLokalJemaat: 5,
                provinsiSlug: "papua",
                slugCategory: "",
                slugTitle: "",
                title: "sorong",
                date: "",
                source: "sorong.jpg"
            },
            {
                id: "2345",
                totalLokalJemaat: 1,
                provinsiSlug: "papua",
                slugCategory: "",
                slugTitle: "",
                title: "wamena",
                date: "",
                source: "peresmian.jpeg"
            },
            {
                id: "2345",
                totalLokalJemaat: 4,
                provinsiSlug: "1",
                slugCategory: "",
                slugTitle: "",
                title: "manokwari",
                date: "",
                source: "manokwari1.jpg"
            },
            {
                id: "2345",
                totalLokalJemaat: 2,
                provinsiSlug: "jawa",
                slugCategory: "",
                slugTitle: "",
                title: "lawang",
                date: "",
                source: "profillawang.jpg"
            },
            {
                id: "2345",
                totalLokalJemaat: 1,
                provinsiSlug: "jawa",
                slugCategory: "",
                slugTitle: "",
                title: "blitar",
                date: "",
                source: "sinode.jpg"
            }

        ],
        datafiltering: [],
        isCategoryClicked: false,
        drawer: false,
        selectedCategory: {
            title: "",
            slug: ""
        }
    }),
    components: {
        Breadcrumbs,
        C_CabangGereja,
        C_Parallax,
        SearchingModal
    },
    computed: {
        ...mapState(['settings']),
        infoData() {
            if (!this.isCategoryClicked) {
                this.datafiltering = this.listData;
            }
            return this.datafiltering;
        }
    },
    mounted() {
        this.isShowNews = this.listData.length > 0 ? true : false;
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
        getCabangGerejaBySlug(event) {
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
                        filteredList = this.listData.filter((e) => e.provinsiSlug === event.slug).map((e) => { return e });
                    }
                    this.isCategoryClicked = true;

                }
            }

            if (filteredList.length == 0) {
                this.isShowNews = false;
            } else {
                this.isShowNews = true;
            }
            this.datafiltering = filteredList;
            this.drawer = false;
        },
    }
});
</script>