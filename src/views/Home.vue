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
// @ is an alias to /src
import HomeProfile from '@/components/C_HomeProfile';
import Carausel from '@/components/C_Carausel';
import HomeAgenda from '@/components/C_HomeAgenda';
import HomeInformations from '@/components/C_HomeInformations';
import HomeDocuments from '@/components/C_HomeDocuments';
import Poster from '@/components/C_Poster';
import Parallax from '@/components/C_Parallax';
import Videos from '@/components/C_HomeVideos';
import Galery from '@/components/C_Galery';
import { mapState } from "vuex";
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
