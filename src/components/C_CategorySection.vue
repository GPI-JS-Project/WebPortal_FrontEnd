<template>
    <v-sheet class="mx-auto" color="transparent" v-if="settings.screenSize.type.islg">
        <v-slide-group show-arrows next-icon="mdi-arrow-right-thin-circle-outline"
            prev-icon="mdi-arrow-left-thin-circle-outline">
            <v-slide-item v-for="n in items" v-slot="{ active, toggle }">
                <v-btn class="mx-2" :input-value="active" :active-class="('white--text ' + settings.color)" depressed
                    rounded v-on:click="$emit('getCategoryBySlug', n)" @click="toggle" small>
                    {{ n.text }}
                </v-btn>

            </v-slide-item>
        </v-slide-group>
    </v-sheet>
    <div v-else>
        <v-list nav dense>
            <v-list-item-group :active-class="settings.color" class="white--text text-uppercase">
                <v-list-item v-for="(val, key) in items" :key="key" v-on:click="$emit('getCategoryBySlug', val)">
                    <v-list-item-title>{{ val.text }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import { mapState } from "vuex";
export default {
    data: () => ({
        selectedItem: 0,
        model: null,
        isMobile: false,
        items: [
            { text: 'Semua Kategori', icon: 'mdi-clock', total: 5, slug: "semua-kategori" },
            { text: 'Misi', icon: 'mdi-clock', total: 5, slug: "misi" },
            { text: 'Ibadah', icon: 'mdi-account', total: 10, slug: "ibadah" },
            { text: 'Pelayanan', icon: 'mdi-flag', total: 10, slug: "pelayanan" },
            { text: 'Traning', icon: 'mdi-flag', total: 12, slug: "traning" },
            { text: 'Sinode', icon: 'mdi-flag', total: 3, slug: "sinode" },
            { text: 'Cabang Gereja', icon: 'mdi-flag', total: 7, slug: "cabang-gereja" },
            { text: 'Api Menyala', icon: 'mdi-flag', total: 7, slug: "api-menyala" },
            { text: 'Rakornas', icon: 'mdi-flag', total: 7, slug: "rakornas" },
            { text: 'Bica', icon: 'mdi-flag', total: 7, slug: "bica" },
            { text: 'PPS', icon: 'mdi-flag', total: 7, slug: "pps" },
            { text: 'Kaum Wanita', icon: 'mdi-flag', total: 7, slug: "kaum-wanita" },
            { text: 'Persidangan Ilahi', icon: 'mdi-flag', total: 7, slug: "persidangan-ilahi" },
            { text: 'Youth Camp', icon: 'mdi-flag', total: 7, slug: "youthcamp" },
        ]
    }),
    components: {
        Breadcrumbs
    },
    computed: {
        ...mapState(['settings'])
    },
    mounted() {
        // if (this.$store.state.settings['screenSize'].type.isxs || this.$store.state.settings['screenSize'].type.ismd) {
        //     this.isMobile = true
        // }
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
        }
    },
    created() {
        // this.setBreadcrumsData();
        // console.log(this.$route.params.id);

        // var listData = this.items.filter((item) => {
        //     return item.slug;
        // });
        let indexData = 0;
        this.items.forEach((el, index) => {
            if (el.slug === this.$route.params.id) indexData = index;
        });
        this.selectedItem = indexData;
        // listData
        // var datas = this.items.findIndex(x => x.word === 'you');
    }
}
</script>