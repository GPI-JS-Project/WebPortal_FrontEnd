<template>
    <v-container>
        <v-row class="my-5">
            <v-col md="6">
                <h3 class="font-weight-regular">
                    <v-icon>
                        mdi-calendar-multiple-check
                    </v-icon>
                    Agenda
                </h3>
            </v-col>
            <v-col md="6">
                <v-btn v-show="isShowAgenda" small text :color="settings.color" class="white-text float-right" to="/agenda">
                    Semua <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="4" v-show="isShowAgenda" v-for="item in listData">
                <v-flex xs12>
                    <v-hover v-slot="{ hover }" open-delay="200">
                        <router-link :to="'/agenda/detail/' + item.slugTitle" class="text-decoration-none">
                            <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>

                                        <v-img :src="require(`../assets/poster/${item.source}`)"
                                            :lazy-src="require(`../assets/poster/${item.source}`)" class="rounded-lg">
                                            <h2 class="font-weight-medium grey--text">

                                                <v-chip class="ma-2" dark :color="settings.color">
                                                    <v-icon>
                                                        mdi-bell
                                                    </v-icon> {{ item.date }}
                                                </v-chip>
                                            </h2>
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate :color="settings.color">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
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
            <v-col md="12" v-show="isShowAgenda == false">
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada agenda
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Agenda",
    computed: {
        ...mapState(['settings'])
    },
    data: () => ({
        model: null,

        isShowAgenda: false,
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
    mounted() {
        this.isShowAgenda = this.listData.length > 0 ? true : false;
    }
}
</script>