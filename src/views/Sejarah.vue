<template>
    <div>
        <v-main>
            <v-container>
                <Sejarah />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
import { defineAsyncComponent } from 'vue';
const Sejarah = defineAsyncComponent(() =>
    import('@/components/C_SejarahDetail.vue')
);
export default {
    name: "NewsDetail",
    components: {
        Sejarah
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
  