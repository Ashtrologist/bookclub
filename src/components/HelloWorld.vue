<template>
<div>
  <div>
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
    <div>
      <img src="@/assets/book.jpg" class="image"/>
      <h2> Little Fires Everywhere</h2>
      <h4> By: Random Author </h4>
    </div>

    <div>
      <img src="@/assets/book.jpg" class="image"/>
      <h2> Educated a memoir</h2>
      <h4> By: Random Author </h4>
    </div>

    <div>
      <img src="@/assets/book.jpg" class="image" alt="Book"/>
      <h2> The hate you give</h2>
      <h4> By: Random Author </h4>
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
  align-items: center;
  margin: 10px;
}

.books{
  padding: 20px;
  margin: 10px;
  
}

.image{
  height: 245px;
  width: 170px;
}

</style>
