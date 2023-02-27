<template>
    <v-container>
        <v-row class="my-5">
            <v-col md="6">
                <h3 class="font-weight-regular">
                    <v-icon>
                        mdi-newspaper-variant-multiple
                    </v-icon>
                    Informasi
                </h3>
            </v-col>
            <v-col md="6">
                <v-btn v-show="isShowNews" small text :color="settings.color" class="white-text float-right"
                    to="/informasi">
                    Semua <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-col md="4" v-show="isShowNews" v-for="item in listData">
                        <v-flex xs12>
                            <v-hover v-slot="{ hover }" open-delay="200">
                                <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                                    <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                        <v-container fluid grid-list-lg>
                                            <v-layout row>
                                                <v-img :src="require(`../assets/${item.source}`)"
                                                    :height="settings.defaultImageContentHeight" class="rounded-lg">
                                                </v-img>
                                                <div class="mt-2">
                                                    <div class="subheading font-weight-medium">
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
                                </router-link>
                            </v-hover>
                        </v-flex>
                    </v-col>
                </v-row>
            </v-col>
            <v-col md="12" v-show="isShowNews == false">
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada informasi
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "News",
    computed: {
        ...mapState(['settings'])
    },
    data: () => ({
        isShowNews: false,
        listData: [
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
                slugTitle: "Pelayanan Diakonia - kepada sesama saling mendoakan",
                title: "pelayanan-diakonia-mendoakan-yang-sakit",
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
            },
            {
                id: "2345",
                category: "Cabang Gereja",
                slugCategory: "cabang-gereja",
                slugTitle: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                title: "Peresmian kantor dan gereja GPI JS Cabang Papua - Jayawijaya",
                date: "9 jan 2023",
                source: "peresmian.jpeg"
            },
            {
                id: "2345",
                category: "Cabang Gereja",
                slugCategory: "cabang-gereja",
                slugTitle: "Peresmian kantor dan gereja GPI JS Cabang Papua - jayapura",
                title: "Peresmian kantor dan gereja GPI JS Jayapura",
                date: "8 Jan 2023",
                source: "cabang.jpg"
            },
            {
                id: "2345",
                category: "PPS",
                slugCategory: "pps",
                slugTitle: "Doa-awal-tahun-bersama-dilawang",
                title: "Doa awal tahun bersama dilawang",
                date: "7 jan 2023",
                source: "pps.jpg"
            },
            {
                id: "2345",
                category: "kaum Wanita",
                slugCategory: "kaum-wanita",
                slugTitle: "Pertemuan-wanita",
                title: "Pertemuan wanita dilawang",
                date: "5 Jan 2023",
                source: "kaumwanita.jpg"
            }
        ]
    }),
    mounted() {
        this.isShowNews = this.listData.length > 0 ? true : false;
    }
}
</script> 