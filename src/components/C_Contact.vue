<template>
    <div>
        <v-row>
            <!-- <Breadcrumbs /> -->
            <v-col md="12">
                <v-card class="mx-auto">
                    <v-img src="../assets/agenda.jpg" height="300px" dark>

                    </v-img>

                    <div class="my-2 py-2 text-center">
                        Hubungi Kami 
                        <v-btn small v-for="link in menu.topRight" :key="link.icon" :to="link.path" icon
                            class="circle mx-2" :color="settings.color">
                            <v-icon>{{ link.icon }}</v-icon> 
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col md="12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d415.34004840758087!2d112.63799700245457!3d-7.9572669986956255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629cbf309dccb%3A0x14f51e01ae83bfe6!2sGereja%20Pekabaran%20Injil%20%22Jalan%20Suci%22!5e0!3m2!1sid!2sid!4v1675940314309!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>  
        </v-row>
    </div>
</template>
  
<script>
import { mapState } from "vuex";
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
export default {
    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email },
        pesan: { required },
        checkbox: {
            checked(val) {
                return val
            },
        },
    },

    data: () => ({
        menu: {},
        name: '',
        email: '',
        pesan: '',
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
    }),
    created() {
        this.getMenuData();
        this.setBreadcrumsData();
    },
    computed: {
        checkboxErrors() {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        selectErrors() {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
        },
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
        pesanErrors() {
            const errors = []
            if (!this.$v.pesan.$dirty) return errors
            !this.$v.pesan.required && errors.push('Pesan is required.')
 
            return errors
        },
        ...mapState(['settings'])
    },

    components: {
        Breadcrumbs
    },
    methods: {
        setBreadcrumsData() {
            const datas = {
                type: "informasi",
                items: [
                    {
                        text: 'Beranda',
                        disabled: false,
                        href: '/',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Kontak',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        color: "#BDBDBD"
                    },
                ],

            }
            this.$store.dispatch('breadcrumData', datas);

        },
        getMenuData() {
            this.menu = this.$store.state.settings['menu'];
        },
        submit() {
            this.$v.$touch()
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
    },
}
</script>