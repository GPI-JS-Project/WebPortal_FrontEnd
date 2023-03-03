<template color="transparent">
  <v-app dark>
    <v-system-bar v-show="false" class="px-0 py-0 my-0 my-0">
      <img src="https://cdn.pixelfordinner.cloud/uploads/2014/11/voa_panel_sample-1024x0-c-f.jpg" width="100%" alt=""
        height="200%">
    </v-system-bar>
    <div v-if="isActiveWeb">
      <v-container>
        <C_Header />
      </v-container>

      <router-view />
      <v-btn v-scroll="onScroll" v-show="fab" fab fixed small bottom right :color="settings.color" @click="toTop"
        class="mb-15">
        <v-icon color="white">mdi-chevron-up</v-icon>
      </v-btn>

      <v-container>
        <Footers class="mt-15" />
      </v-container>
    </div>
    <div v-else>
      <v-container class="text-center my-15">
        <h1 class="text-center">Selamat Datang di</h1>
        <img class="text-center" src="./assets/logoLight.png" />
      </v-container>
    </div>

  </v-app>
</template>

<script>
import { mapState } from "vuex";
import { defineAsyncComponent } from 'vue';
const C_Header = defineAsyncComponent(() =>
  import('@/components/C_Header.vue')
);
const Footers = defineAsyncComponent(() =>
  import('@/components/C_Footer.vue')
);

export default {
  metaInfo: {
    title: 'Sinode GPI "Jalan Suci"',
    htmlAttrs: {
      lang: 'en-US',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Situs Resmi Sinode Gereja Pekabaran Injil "Jalan Suci" / GPI "Jalan Suci" ' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  computed: {
    ...mapState(['settings'])
  },
  created() {
    this.setMobileDeviceSettings();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: {
    C_Header,
    Footers
  },
  data() {
    return {
      isActiveWeb: true,
      fab: false,
      loading: false
      // itemsMenu: []
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    setMobileDeviceSettings() {

      const datas = {
        isMobileData: this.isMobile()
      }
      this.$store.dispatch('settings', datas);
    }
  }
}
</script>

<style>
.on-hover {
  transition: all 0.5s ease;
}
</style>