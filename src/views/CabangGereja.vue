<template>
    <div>
        <v-main>
            <v-container>
                <C_CabangGereja />
            </v-container>
        </v-main>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const C_CabangGereja = defineAsyncComponent(() =>
    import('@/components/C_Cabang.vue')
);
export default {
    name: "CabangGereja",
    components: {
        C_CabangGereja
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
