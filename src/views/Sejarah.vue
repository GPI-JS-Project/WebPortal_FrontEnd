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
// @ is an alias to /src
import Sejarah from '@/components/C_SejarahDetail.vue';

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
  