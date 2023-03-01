<template >
    <v-row>
        <v-col md="10" offset-md="1">
            <v-img :src="require(`../assets/${rows.source}`)" :alt="rows.title"
                :lazy-src="require(`../assets/default/DefaultImage.jpg`)" class="white--text align-end rounded-lg"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate :color="settings.color">
                        </v-progress-circular>
                    </v-row>
                </template>
                <v-card-title>
                    Lokal Cabang {{ rows.title }}
                </v-card-title>
            </v-img>


            <v-card-actions>
                <!-- <v-chip outlined small :color="settings.color" :to="`/informasi/kategori/natal`">
                    {{ rows.category }}
                </v-chip> -->
                <span class="ml-5">{{ rows.date }}</span>
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-cards-heart-outline</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-bookmark-outline</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
            </v-card-actions>
        </v-col>
        <v-col md="10" offset-md="1">
            <div class="my-1">
                <!-- <v-img src='../assets/apimenyala.jpg'></v-img> -->
                <p v-html="rows.content"></p>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Video",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            rows: [
                {
                    id: "23453",
                    totalLokalJemaat: 3,
                    provinsiSlug: "jawa",
                    slugCategory: "",
                    slugTitle: "",
                    title: "Jakarta",
                    date: "",
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
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
                    content: "Detail informasi disini",
                    source: "sinode.jpg"
                }
            ]
        }
    },
    components: {
    },
    methods: {
        setData() {
            console.log(this.$route.params.id);
            this.rows = this.rows.filter(val => val.provinsiSlug == this.$route.params.id).map(e => { return e })[0];

        }
    },
    created() {
        this.setData();
    }
}
</script> 