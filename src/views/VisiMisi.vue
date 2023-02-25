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
// @ is an alias to /src
import VisiMisiDetail from '@/components/C_VisiMisiDetail.vue';

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
  