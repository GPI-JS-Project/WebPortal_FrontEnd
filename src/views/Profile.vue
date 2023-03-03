<template>
    <div>
        <v-main>
            <v-container>
                <Profile />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
import { defineAsyncComponent } from 'vue';
const Profile = defineAsyncComponent(() =>
    import('@/components/C_ProfileDetail.vue')
);
export default {
    name: "NewsDetail",
    components: {
        Profile
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
  