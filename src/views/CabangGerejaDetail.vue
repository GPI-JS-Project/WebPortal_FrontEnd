<template>
    <div>
        <v-main>
            <v-container>
                <Detail />
            </v-container>
        </v-main>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const Detail = defineAsyncComponent(() =>
    import('@/components/C_CabangGerejaDetail.vue')
);
export default {
    name: "C_CabangGerejaDetail",
    components: {
        Detail
    },
    mounted() {
        this.toTop();
    },
    methods: {
        toTop() {
            this.$vuetify.goTo(0)
        }
    }
}
</script>
