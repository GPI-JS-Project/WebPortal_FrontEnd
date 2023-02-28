<template>
    <div>
        <v-row class="my-5">
            <v-col md="6">
                <h3 class="font-weight-regular">
                    <v-icon>
                        mdi-file-multiple-outline
                    </v-icon>
                    Dokumen
                </h3>
            </v-col>
            <v-col md="6">
                <v-btn small text :color="settings.color" class="white--text float-right" to="/informasi">
                    Semua <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="4" v-for="image in listDocuments">
                <v-flex xs12>
                    <router-link :to="'/informasi/detail/' + image.subtitle" class="text-decoration-none">
                        <v-hover v-slot="{ hover }" open-delay="200">

                            <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                <v-container fluid grid-list-lg>
                                    <v-layout row>
                                        <v-img :height="settings.defaultImageSmallContentHeight"
                                            :src="require(`../assets/${image.img}`)" :alt="image.title"
                                            :lazy-src="require(`../assets/${image.img}`)" class="grey darken-4 rounded-lg"
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
                                                <p v-html="image.title"></p>
                                            </div>
                                            <h5 class="float-left font-weight-regular my-2">
                                                <v-chip class="ma-2" small outlined :color="settings.color">
                                                    <v-icon> mdi-download </v-icon> Download
                                                </v-chip> 20 Des 2022
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
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada informasi
                </v-alert>
            </v-col>

        </v-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data: () => ({
        isShowDocument: false,
        listDocuments: [
            {
                img: 'hasilpersidanganilahi.jpg',
                title: 'Hasil persidangan ilahi ',
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            {
                img: 'dokumentkeanggotaan.jpg',
                title: 'Document keanggotaan PGPI',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            {
                img: 'bukudanmajalah.jpg',
                title: 'Buku / majalah pengajaran ',
                subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            {
                img: 'datajemaat.jpg',
                title: 'Data Jemaat',
                subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            {
                img: 'programkerja1.png',
                title: 'Program Kerja',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
            {
                img: 'laporankeuangan.jpg',
                title: 'Laporan Keuangan',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            }, {
                img: 'adrt.webp',
                title: 'ADRT',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
            {
                img: 'dokument8.webp',
                title: 'Kesekretariatan',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
    }),
    computed: {
        ...mapState(['settings'])
    },
    mounted() {
        this.isShowDocument = this.listDocuments.length > 0 ? true : false;
    }
}
</script>