<template>
  <div>
    <v-main>
      <v-container>
        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <Carausel />
        </v-lazy>

        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <HomeProfile />
        </v-lazy>

        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <HomeInformations />
        </v-lazy>

        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <HomeAgenda />
        </v-lazy>

      </v-container>
    </v-main>


    <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
      <Parallax />
    </v-lazy>
    <v-main class="mt-15">
      <v-container>


        <!-- <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <Poster />
        </v-lazy> -->

        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <HomeDocuments />
        </v-lazy>

        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">
          <Galery />
        </v-lazy>

        <v-lazy :min-height="200" :options="{ 'threshold': 0.5 }" transition="fade-transition">

          <Videos />
        </v-lazy>

      </v-container>
    </v-main>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapState } from "vuex";
const HomeProfile = defineAsyncComponent(() =>
  import('@/components/C_HomeProfile.vue')
);
const Carausel = defineAsyncComponent(() =>
  import('@/components/C_Carausel.vue')
);
const HomeAgenda = defineAsyncComponent(() =>
  import('@/components/C_HomeAgenda.vue')
);
const HomeInformations = defineAsyncComponent(() =>
  import('@/components/C_HomeInformations.vue')
);
const HomeDocuments = defineAsyncComponent(() =>
  import('@/components/C_HomeDocuments.vue')
);
const Poster = defineAsyncComponent(() =>
  import('@/components/C_Poster.vue')
);
const Parallax = defineAsyncComponent(() =>
  import('@/components/C_Parallax.vue')
);
const Videos = defineAsyncComponent(() =>
  import('@/components/C_HomeVideos.vue')
);
const Galery = defineAsyncComponent(() =>
  import('@/components/C_Galery.vue')
);

export default {
  name: 'Home',
  components: {
    HomeProfile,
    Carausel,
    HomeAgenda,
    HomeInformations,
    HomeDocuments,
    Poster,
    Parallax,
    Videos,
    Galery
  },
  data: () => ({
    loading: false
  }),
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);


  },
  computed: {
    ...mapState(['settings'])
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
