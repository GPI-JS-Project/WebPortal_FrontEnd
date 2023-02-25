<template>
    <div v-if="!settings.screenSize.type.islg">
        <v-flex xs12 class="mb-10">
            <v-hover v-slot="{ hover }" open-delay="200">
                <router-link to="profil" class="text-decoration-none">
                    <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                        <v-container fluid grid-list-lg>
                            <v-layout row>
                                <v-flex xs7>
                                    <div>
                                        <div class="subheading font-weight-medium">
                                            Selamat Datang di GPI Jalan Suci Indonesia
                                        </div>
                                        <v-btn to="profil" small :color="settings.color" class="my-4" rounded outlined>
                                            Profil <v-icon> mdi-chevron-right</v-icon>

                                        </v-btn>
                                    </div>
                                </v-flex>
                                <v-flex xs5>
                                    <v-img src="../assets/profillawang.jpg"
                                        :height="settings.defaultImageSmallContentHeight" class="rounded-lg"
                                        transition="false">
                                    </v-img>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </router-link>
            </v-hover>
        </v-flex>
    </div>
    <v-row class="my-5" v-else>
        <v-col lg="6">
            <h1 class="font-weight-regular" :color="color">Selamat Datang di <br> GPI "Jalan Suci" Indonesia</h1>
            <p class="description" :color="color">“Di situ akan ada jalan raya, yang akan disebutkan Jalan Kudus” Yesaya
                35:8
                Kehidupan Kekristenan dan pelayanan tidak pernah menonjol melebihi standar dan nilai ibadah kami.
                Kehidupan dan pelayanan rohani kami dilakukan,
                dan dimulai dari hadirat Allah.
            </p>

            <v-btn to="profil" small :color="settings.color" class="my-4" rounded outlined>
                Profil <v-icon> mdi-chevron-right</v-icon>

            </v-btn>
        </v-col>
        <v-col lg="6">
            <router-link to="profil">
                <img src="../assets/profillawang.jpg" aspect-ratio="1.7" class="rounded-lg" width="100%" alt="">
            </router-link>
        </v-col>
    </v-row>


</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Hero",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            color: "grey darken-2"
        }
    }
}
</script>
 
<style>
.intro-text {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Roboto';
    line-height: 40pt;
    /* color: #444444ba; */
}

p.description {
    font-size: 19px;
    margin: 32px 0px;
    /* color: #444444ba; */

}

/* 
.img-circle {
    border-radius: 3%;
} */
</style>