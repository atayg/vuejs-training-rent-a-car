<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <v-icon>fas fa-car-side</v-icon>
        {{ $t('pageTitle.app') }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-list dense class="d-flex">
          <v-list-item link to="/" v-if="isAuthenticated">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('menuTitle.home') }}</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/ContactUs" v-if="isAuthenticated">
            <v-list-item-icon>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('menuTitle.contactUs') }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <login></login>
          </v-list-item>
        </v-list>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute left>
      <v-list nav dense class="mt-12">
        <v-list-item>
          <login></login>
        </v-list-item>
        <v-list-item link to="/" v-if="isAuthenticated">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('menuTitle.home') }}</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/ContactUs" v-if="isAuthenticated">
          <v-list-item-icon>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('menuTitle.contactUs') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <span>2021 - Gökhan Atay</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ContactUs from "./views/contact-us.vue";
import HomePage from "./views/home-page.vue";
import Login from "./views/login.vue";
import { mapGetters } from 'vuex';

@Component({
  name: "App",
  components: {
    "home-page": HomePage,
    "contact-us": ContactUs,
    login: Login
  },
  computed:{
    ...mapGetters(['isAuthenticated'])
  }
})
export default class App extends Vue {
  private drawer = false;

  private loginClicked = false;
}
</script>

