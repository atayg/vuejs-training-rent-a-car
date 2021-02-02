<template>
  <v-container >
    <v-card>
      <v-card-title>
        {{ $t('pageTitle.home') }} {{ getName }} 
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from 'vuex';

@Component({
  name: "home-page",
  computed:{
    ...mapGetters(['getName']),
  }
})
export default class HomePage extends Vue {


get getName() {
    return this.$store.getters.getName;
  }

}


</script>
