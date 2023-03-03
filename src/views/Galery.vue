<template>
    <div>
        <v-main>
            <v-container>
                <Galery />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
import { defineAsyncComponent } from 'vue';
const Galery = defineAsyncComponent(() =>
    import('@/components/C_AllGalery.vue')
);
export default {
    name: "NewsDetail",
    components: {
        Galery
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
  