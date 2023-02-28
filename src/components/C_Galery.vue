<template>
    <v-row class="my-5">

        <v-col md="6">
            <h3 class="font-weight-regular">
                <v-icon>
                    mdi-camera
                </v-icon>
                Album Foto
            </h3>
        </v-col>
        <v-col md="6">
            <v-btn small text :color="settings.color" class="white-text float-right" to="/media/foto">
                Semua <v-icon> mdi-chevron-right</v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12">
            <v-row>
                <v-col md="4" v-show="isShowgalery" v-for="( image, i ) in imagesList" :key="i">
                    <v-flex xs12>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/foto/album/' + image.slug" class="text-decoration-none">
                                <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <!-- <v-flex xs5> -->
                                            <v-img cover :height="settings.defaultImageContentHeight"
                                                :src="require(`../assets/${image.source}`)" :alt="image.alt"
                                                :lazy-src="require(`../assets/${image.source}`)"
                                                class="grey darken-4 rounded-lg">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate :color="settings.color">
                                                        </v-progress-circular>
                                                    </v-row>
                                                </template>
                                                <h2 class="font-weight-medium grey--text">

                                                    <v-chip class="ma-2" dark :color="settings.color">
                                                        <v-icon>
                                                            mdi-camera
                                                        </v-icon> {{ image.total }} Foto
                                                    </v-chip>
                                                </h2>
                                            </v-img>
                                            <!-- </v-flex>
                                            <v-flex xs7> -->


                                            <div class="mt-3">
                                                <h3 class="font-weight-medium grey--text"> {{
                                                    image.title
                                                }}</h3>
                                                <h5 class="float-left font-weight-regular my-2">
                                                    <v-chip class="ma-2" small outlined :color="settings.color">
                                                        {{ image.category }}
                                                    </v-chip> {{ image.date }}
                                                </h5>
                                            </div>
                                            <!-- </v-flex> -->
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-flex>
                </v-col>
            </v-row>
        </v-col>

        <v-col md="12" v-show="isShowgalery == false">
            <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                Sementara belum ada album foto
            </v-alert>
        </v-col>

    </v-row>
</template>


<script>
import { mapState } from "vuex";
export default {
    name: "Galery",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            isShowgalery: false,
            imagesList: [
                { source: "foto1.jpg", category: "Mision", title: "Peginjilan", total: 15, date: "25 Sept 2022", slug: "Penginjilan" },
                { source: "foto2.jpg", category: "Ibadah", title: "Ibadah Raya, Minggu 26 Feb 2023", total: 23, date: "15 Sept 2022", slug: "Ibadah Raya" },
                { source: "foto3.jpg", category: "Pelayanan", title: "Pelayanan Diakonia", total: 50, date: "6 Agus 2022", slug: "Diakonia Melayani" },
                { source: "foto4.jpg", category: "Program Sekolah Hamba Tuhan", title: "Hamba Tuhan", total: 14, date: "25 Des 2022", slug: "Hamba Hamba Tuhan" },
                { source: "foto5.jpg", category: "Ibadah", title: "Sekolah Minggu", total: 20, date: "2 Sept 2022", slug: "Sunday School" },
                { source: "foto6.jpg", category: "Cabang", title: "Jemaat Jakarta", total: 15, date: "8 Sept 2022", slug: "Jakarta Timur" }
            ]
        }
    },
    mounted() {
        this.isShowgalery = this.imagesList.length > 0 ? true : false;
    }

}
</script>