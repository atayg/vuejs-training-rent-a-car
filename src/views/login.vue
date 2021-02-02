<template>
  <div class="text-xs-center">
    <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" v-if="!isAuthenticated">
          <v-avatar size="36px">
            <v-icon>fas fa-sign-in-alt</v-icon>
          </v-avatar>
          {{$t('login.buttons.login')}}
        </v-btn>
        <v-btn text v-on="on" v-else>
          <v-avatar size="36px">
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-avatar>
          {{$t('login.buttons.logout')}}
        </v-btn>
      </template>

      <v-card>
        <v-list v-if="!isAuthenticated">
          <v-list-item>
            <v-text-field v-model="name" :label="$t('login.labels.name')"></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="email" :label="$t('login.labels.email')"></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field v-model="password" type="password" :label="$t('login.labels.password')"></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-list-item-action></v-list-item-action>
            <v-list-item-title>
              <v-select
                v-model="locale"
                :items="languages"
                :label="$t('login.labels.language')"
                item-value="key"
                item-text="text"
              ></v-select>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-flex text-center>
          <v-btn
            v-if="isAuthenticated"
            block
            text
            @click="logoutClick"
          >{{ $t('login.buttons.logout') }}</v-btn>
          <v-btn v-else block text @click="loginClick">{{ $t('login.buttons.login') }}</v-btn>
        </v-flex>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import tr from "../resources/tr/tr";
import i18n from "../plugins/i18n";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { UserState } from "../store/user/user-state";

@Component({
  name: "Login",
  computed: {
    ...mapGetters(["isAuthenticated", "getName", "getLocale"]),
    ...mapMutations(["setUser", "setLocale"]),
    ...mapActions(["login", "logout"])
  }
})
export default class Login extends Vue {
  private name = "";

  private email = "";

  private password = "";

  get isAuthenticated(): string {
    return this.$store.getters.isAuthenticated;
  }

  // get getName() {
  //   return this.$store.getters.getName;
  // }

  get locale() {
    return this.$store.getters.getLocale;
  }

  set locale(value: string) {
    this.$store.commit("setLocale", value);
  }

  public get languages() {
    return [
      { key: "tr", text: "Türkçe" },
      { key: "en", text: "English" }
    ];
  }

  private loginClick() {
    const user: UserState = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    this.$store.dispatch("login", user);    
  }

  private logoutClick() {
    this.$store.dispatch("logout");
    this.name ="";
    this.email= "";
    this.password="";
  }
}
</script>