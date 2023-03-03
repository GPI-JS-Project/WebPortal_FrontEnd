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
    import('@/components/C_InformationDetail.vue')
);
export default {
    name: "InformationDetail",
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
  