<template>
  <div>
  <div class="banner">
    <h1 class="header">Meet the team</h1>
  </div>
  <br>

  <div>

    <v-layout justify-center row>
    <div class="team">
      <h2> President </h2>
      <img src="@/assets/book.jpg" alt="Sondos Hassan" height="300px" width="300px"/>
      <h3> Sondos Hassan </h3>
    </div>
    <div class="team">
      <h2> Vice President </h2>
      <img src="@/assets/book.jpg" alt="Sondos Hassan" height="300px" width="300px"/>
      <h3> Sondos Hassan </h3>
    </div>
    <div class="team">
      <h2> Treasurer </h2>
      <img src="@/assets/mateo.jpg" alt="Sondos Hassan" height="300px" width="300px"/>
      <h3> Mateo Knight </h3>
    </div>
    </v-layout>

    <v-layout justify-center row>
    <div class="team">
      <h2> Social Chair </h2>
      <img src="@/assets/book.jpg" alt="Sondos Hassan" height="300px" width="300px"/>
      <h3> Sondos Hassan </h3>
    </div>
    <div class="team">
      <h2> Secretary </h2>
      <img src="@/assets/book.jpg" alt="Sondos Hassan" height="300px" width="300px"/>
      <h3> Sondos Hassan </h3>
    </div>
    <div class="team">
      <h2> Event Coordinator </h2>
      <img src="@/assets/book.jpg" alt="Sondos Hassan" height="300px" width="300px"/>
      <h3> Mateo Knight </h3>
    </div>
    </v-layout>
  </div>

  </div>

</template>
<script>

export default {
  name: 'About',
  data () {
    return {
      count: 0
    }
  }
}

</script>

<style scoped>
.team{
  padding: 10px;
  margin: 15px
}
.banner{
  min-height: 350px;
  background-size: cover;
  max-height: 350px;
  background-image: url("https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=615eb020ee1d598fdd9b5c40ede9eccf&auto=format&fit=crop&w=1650&q=80");
}
.header{
  text-transform: uppercase;
  font-size: 60px;
  font-weight: bold;
  align-content: center;
  color: white;
  padding-top: 50px;
}
</style>
