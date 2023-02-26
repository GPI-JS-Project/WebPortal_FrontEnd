 
<template class="mt-1">
    <div class="mb-15">
        <v-slide-group v-model="model" active-class="success" center-active :show-arrows="(settings.screenSize.type.islg)"
            next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left">
            <v-slide-item v-for="items in items" v-slot="{ active, toggle }">
                <v-card class="ma-4">
                    <v-row class="fill-height" align="center" justify="center" @click="toggle">
                        <v-scale-transition>
                        <!-- <v-img :src="item.src" height="250" width="280" class="rounded-lg">
                                                        </v-img> -->
                            <v-img :src="require(`../assets/poster/${items.source}`)" :alt="items.title"
                                :lazy-src="require(`../assets/poster/${items.source}`)" class="grey darken-4 rounded-lg"
                                :width="350" aspect-ratio="1/1">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5">
                                        </v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-scale-transition>
                    </v-row>
                </v-card>
            </v-slide-item>
        </v-slide-group>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: "Poster",
    data() {
        return {
            model: "",
            items: [
                {
                    category: "MISI",
                    title: "Pemberitaan Injil ditempat baru",
                    source: 'quotes1.jpg',
                },
                {
                    category: "IBADAH",
                    title: "ibadah natal 2022 jakarta timur",
                    source: 'quotes3.jpg',
                },
                {
                    category: "PELAYANAN",
                    title: "Pelayanan Diakonis, mendokan umat yang sakit",
                    source: 'quotes4.jpg',
                },
                {
                    category: "TRANING",
                    title: "Program pembelajaran hamba hamba Tuhan yg telah do mulai tahun 1978",
                    source: 'quotes5.jpg',
                },
                {
                    category: "SINODE",
                    title: "Peresmian kantor dan gedung gereja sinode lawang",
                    source: 'quotes6.jpg',
                },
                {
                    category: "CABANG GEREJA",
                    title: "Peresmian kantor dan gedung gereja cabang papua, jayawijaya",
                    source: 'quotes7.jpg',
                }
            ],
        }
    },
    computed: {
        ...mapState(['settings'])

    }
}
</script>