<template>
  <div id="app">
    <v-app>
      <page-header></page-header>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
        <page-footer/>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
import PageFooter from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.container{
  padding: 0!important;
}
.vue-typer .left{
  float: none !important;
}

.vue-typer .typed{
  color: white;
}
</style>
