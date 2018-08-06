<template>
  <div class="design">
  <div class="banner">
    <h1 class="header">Our weekly events will be posted here</h1>
  </div>
    <br>
    <iframe src="https://calendar.google.com/calendar/embed?src=usfdeadpoets%40gmail.com&ctz=America%2FNew_York" style="border: 0" width="1000" height="800" frameborder="0" scrolling="no"></iframe>
  </div>

</template>
<script>

export default {
  name: 'Calendar',
  data () {
    return {
      count: 0
    }
  }
}

</script>

<style scoped>
.design{
  background-color: #FDD835;
}
.banner{
  min-height: 350px;
  max-height: 350px;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab3ab3da37d9c3cff72666376c089e3c&auto=format&fit=crop&w=1648&q=80");
}
.header{
  text-transform: uppercase;
  font-size: 60px;
  align-content: center;
  font-weight: bold;
  padding-top: 50px;
}

</style>
