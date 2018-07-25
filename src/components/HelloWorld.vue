<template>
<div>
  <div class="header">
    <h1> Welcome to the Dead Poets Society </h1>
  </div>
  <div>
    <h2> About Us </h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
  <div class="row">
    <h1> Why you should join the club </h1>

  <div class="flexbox">
    <div class="spacing">
      <img src="@/assets/meeting.jpg" height="300" width="400"/>
      <h3> Meet new and interesting people </h3>
    </div>

    <div class="spacing">
      <img src="@/assets/calendar.jpg" height="300" width="400"/>
      <h3> Weekly gatherings </h3>
    </div>

    <div class="spacing">
      <img src="@/assets/favoritebook.jpg" alt="Book" height="300" width="400"/>
      <h3> Share your favorite books </h3>
    </div>

  </div>

  </div>

  <div class="row">
    <h1> Most popular books </h1>

  <div class="flexbox">
    <div class="books">
      <img src="@/assets/book.jpg" class="image"/>
      <h2> Little Fires Everywhere</h2>
      <h4> By: Random Author </h4>
    </div>

    <div class="books">
      <img src="@/assets/book.jpg" class="image"/>
      <h2> Educated a memoir</h2>
      <h4> By: Random Author </h4>
    </div>

    <div class="books">
      <img src="@/assets/book.jpg" class="image" alt="Book"/>
      <h2> The hate you give</h2>
      <h4> By: Random Author </h4>
    </div>

    <div class="books">
      <img src="@/assets/book.jpg" class="image"/>
      <h2> The hate you give</h2>
      <h4> By: Random Author </h4>
    </div>

    <div class="books">
      <img src="@/assets/book.jpg" class="image"/>
      <h2> The hate you give</h2>
      <h4> By: Random Author </h4>
    </div>
    </div>
   </div>
  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flexbox{
  display: flex;
  overflow: scroll;
  align-content: center;
  margin: 10px;
}
.spacing{
  padding: 20px;
  margin: 10px;
}
.books {
  /* box-sizing: border-box; */
  width: 100%;
  padding: 20px;
  margin: 10px;
  width: 20%;
}
.books:hover {
  padding:0;
  -webkit-transition: all width 0.05s;
  -moz-transition: all width 0.05s;
  -ms-transition: all width 0.05s;
  -o-transition: all width 0.05s;
  transition: all 0.05s;
}

.books:hover img {
}

.image{
width: 200px;
height: 300px;
}

</style>
