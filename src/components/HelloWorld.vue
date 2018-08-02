<template>
<div>
  <div justify-center class="banner">
    <h1 class="header"> Welcome to the Dead Poets Society </h1>
  </div>
  <div>
    <h2> About Us </h2>
    <p>
      The Dead Poets Society Book Club get’s its name from the timeless movie starring Robin Williams, where he plays the role of an influential teacher inspiring his students to surpass the seemingly mundane task of “reading” literature, rather feeling it, allowing its words to sink into the malleable minds of his students. This Book club serves the same purpose. To allow the flow of ideas, thoughts, and discussions from timeless works to dance between the minds of our members. Meetings will be intended for great minds to come together and lay out their thoughts, educated opinions, and most of all openness to more than one interpretation to varying ideas. every book is a world and every person is a world that has the potential to enrich your own world.” ~Shaykh Amr
    </p>
  </div>

  <h1> Why you should join the club </h1>
  <v-layout justify-center align-center row fill-height>
    <div class="flexbox">
      <div class="spacing">
        <img src="@/assets/meeting.jpg" height="300" width="400"/>
        <h3> Meet new and interesting people </h3>
      </div>

    <div class="spacing">
      <img src="@/assets/favoritebook.jpg" alt="Book" height="300" width="400"/>
      <h3> Share your favorite books </h3>
      </div>
    </div>
      <div class="spacing">
        <img src="@/assets/bookclub.jpg" height="300" width="400"/>
        <h3> Weekly gatherings </h3>
      </div>
  </v-layout>

  <h1> Our favorite books </h1>
  <div class="flexbox">
  <v-layout justify-center row fill-height>
    <div class="books">
      <img src="@/assets/inheritance.jpg" class="image"/>
      <h2> Inheritance</h2>
      <h4> By: Sharon Mualem </h4>
      <v-btn
        dark
        href="https://www.amazon.com/Inheritance-Genes-Change-Lives-Lives/dp/1455549436/ref=sr_1_1?s=books&ie=UTF8&qid=1533169607&sr=1-1&keywords=inheritance+sharon+moalem"
      >
       Buy it on amazon
      </v-btn>
    </div>

     <div class="books">
      <img src="@/assets/1984.jpg" class="image"/>
      <h2> 1984 </h2>
      <h4> By: George Orwell</h4>
      <v-btn
        dark
        href="https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934/ref=sr_1_1?s=books&ie=UTF8&qid=1533170874&sr=1-1&keywords=1984+by+george+orwell&smid=ATVPDKIKX0DER"
      >
       Buy it on amazon
       </v-btn>
    </div>

    <div class="books">
      <img src="@/assets/essays.jpg" class="image" alt="Book"/>
      <h2> Essays</h2>
      <h4> By: Michel de Montaigne </h4>
      <v-btn
        dark
        href="https://www.amazon.com/Montaigne-Essays-Michel/dp/014017897X/ref=sr_1_2?s=books&ie=UTF8&qid=1533170750&sr=1-2&keywords=essays+michel+de+montaigne"
      >
       Buy it on amazon
     </v-btn>
    </div>

    <div class="books">
      <img src="@/assets/wind.jpg" class="image"/>
      <h2> The Name of the Wind</h2>
      <h4> By: Patrick Rothfuss </h4>
      <v-btn
        dark
        href="https://www.amazon.com/Name-Wind-Patrick-Rothfuss/dp/0756404746/ref=sr_1_1?s=books&ie=UTF8&qid=1533168766&sr=1-1&keywords=the+name+of+the+wind"
      >
      Buy it on amazon
      </v-btn>

    </div>

     <div class="books">
      <img src="@/assets/kybalion.jpeg" class="image"/>
      <h2> The Kybalion</h2>
      <h4> By: Three Initiates </h4>
      <v-btn
        dark
        href="https://www.amazon.com/Kybalion-Centenary-Three-Initiates/dp/0143131680/ref=sr_1_2?ie=UTF8&qid=1533168071&sr=8-2&keywords=the+kybalion"
      >
        Buy it on amazon
      </v-btn>
    </div>
  </v-layout>
  </div>
</div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      // image: 'http://1.bp.blogspot.com/-8PfnHfgrH4I/TylX2v8pTMI/AAAAAAAAJJ4/TICBoSEI57o/s1600/search_by_image_image.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.banner{
  min-height: 350px;
  max-height: 350px;
  background-image: url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=954560871844da528c60343dc344ccbf&auto=format&fit=crop&w=1950&q=80");
}
.header{
  text-transform: uppercase;
  font-size: 60px;
  align-content: center;
  color: white;
  padding-top: 50px;
}
.flexbox{
  display: flex;
  overflow: auto;
  margin: 10px;
}
.spacing{
  padding: 20px;
  margin: 10px;
}
.books {
  /* box-sizing: border-box; */
  /* width: 100%; */
  padding: 15px;
  margin: 10px;
  /* width: 20%; */
}

/* Hoover animations when mouse is over books */
.books:hover {
  padding:0;
  -webkit-transition: all width 0.3s;
  -moz-transition: all width 0.3s;
  -ms-transition: all width 0.3s;
  -o-transition: all width 0.3s;
  transition: all 0.3s ease;
}
.books:hover img {
}

/* Styling for the image sizes  */
.image{
width: 200px;
height: 300px;
}

</style>
