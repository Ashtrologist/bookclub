<template>
  <v-footer fixed height="auto" color="grey">
    <v-layout justify-center row wrap>
      <v-cardv-card-text class="hidden-sm-and-down">
        <v-btn dark flat to="HelloWorld">HOME</v-btn>
        <v-btn dark flat to="Books">BOOKS</v-btn>
        <v-btn dark flat to="Calendar">CALENDAR</v-btn>
        <v-btn dark flat to="About">ABOUT US</v-btn>
      </v-cardv-card-text>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2018 — <strong>Vuetify</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
