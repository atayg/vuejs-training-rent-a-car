<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card>
          <v-card-title>
            <v-icon>mdi-pencil</v-icon>
            {{ $t('pageTitle.contactUs') }}
          </v-card-title>
          <v-card-text>
            <v-text-field v-model="title" :label="$t('contactUs.labels.title')"></v-text-field>

            <v-text-field readonly v-model="name" :label="$t('contactUs.labels.name')"></v-text-field>

            <v-text-field readonly v-model="email" :label="$t('contactUs.labels.email')"></v-text-field>

            <v-text-field v-model="phone" :label="$t('contactUs.labels.phone')"></v-text-field>

            <v-autocomplete
              :label="$t('contactUs.labels.country')"
              :items="countries"
              v-model="country"
              item-text="name"
              item-value="id"
              clearable
            ></v-autocomplete>

            <v-textarea v-model="text" :label="$t('contactUs.labels.text')"></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue-grey" class="ma-2 white--text" @click="send">
              <v-icon left dark>fas fa-paper-plane</v-icon>
              {{ $t('contactUs.buttons.send') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mapGetters } from "vuex";

@Component({
  name: "contact-us",
  computed: {
    ...mapGetters(["getName", "getEmail"])
  }
})
export default class ContactUs extends Vue {
  
    private title = "";

    private name = "";

    private email = "";

    private phone = "";

    private text = "";    

    private country = "";


  private mounted(){
    this.name = this.$store.getters.getName;
    this.email = this.$store.getters.getEmail;
  }  

  private send() {

    const object: any = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      country: this.country,
      text: this.text
    }

    console.log(JSON.stringify(object));
  }

  private countries = [
    { id: "TR", name: "Turkey" },
    { id: "US", name: "United States of America" },
    { id: "GB", name: "United Kingdom" },
    { id: "DE", name: "Germany" },
    { id: "SE", name: "Sweden" },
    { id: "KE", name: "Kenya" },
    { id: "BR", name: "Brazil" },
    { id: "ZW", name: "Zimbabwe" }
  ];
}
</script>
