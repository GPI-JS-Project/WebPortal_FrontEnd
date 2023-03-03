<template>
    <div>
        <v-main>
            <v-container>
                <AgendaDetails />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
import { defineAsyncComponent } from 'vue';
const AgendaDetails = defineAsyncComponent(() =>
    import('@/components/C_AgendaDetail.vue')
);
export default {
    name: "NewsDetail",
    components: {
        AgendaDetails
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
  