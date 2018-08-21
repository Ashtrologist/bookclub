<template>
  <v-footer relative height="auto" class="footer">
    <v-layout justify-center row wrap>
      <v-cardv-card-text class="hidden-sm-and-down">
        <v-btn dark flat to="Home">HOME</v-btn>
        <v-btn dark flat to="Calendar">CALENDAR</v-btn>
        <v-btn dark flat to="About">ABOUT US</v-btn>
      </v-cardv-card-text>
      <v-flex dark py-3 text-xs-center white--text xs12>
        &copy;2018 — <strong>Dead Poets Society</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  .footer{
    background-color: #191918
  }

</style>
