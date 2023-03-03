<template>
    <div>
        <v-main>
            <v-container>
                <VisiMisiDetail />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
import { defineAsyncComponent } from 'vue';
const VisiMisiDetail = defineAsyncComponent(() =>
    import('@/components/C_VisiMisiDetail.vue')
);
export default {
    name: "NewsDetail",
    components: {
        VisiMisiDetail
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
  