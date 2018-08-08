<template>
<div>
  <div justify-center class="banner">
    <div class="header">
      <vue-typer
        :text='["Welcome to the DeadPoets Society","Were glad that you decided to join us"]'
        :repeat='0'
        :shuffle='false'
        inital-action='typing'
        :pre-type-delay='2000'
        :type-delay='160'
        :erase-delay='100'
        erase-style='backspace'
        :erase-on-complete='false'
        caret-animation='blink'
      >
      </vue-typer>
    </div>
  </div>
  <div class="about">
    <h2 class="subheader"> About Us </h2>
    <p class="aboutText">
      The Dead Poets Society Book Club get’s its name from the timeless movie starring Robin Williams, where he plays the role of an influential teacher inspiring his students to surpass the seemingly mundane task of “reading” literature, rather feeling it, allowing its words to sink into the malleable minds of his students. This Book club serves the same purpose. To allow the flow of ideas, thoughts, and discussions from timeless works to dance between the minds of our members. Meetings will be intended for great minds to come together and lay out their thoughts, educated opinions, and most of all openness to more than one interpretation to varying ideas.<br>
    </p>
    <blockquote class="quote">
      "Every book is a world and every person is a world that has the potential to enrich your own world.”<br> -Shaykh Amr
    </blockquote>
  </div>
  <div class="club">
  <h1 class="subheader"> Why you should join the club </h1>
  <v-layout justify-center align-center row fill-height>
      <div class="spacing">
        <img src="@/assets/meeting.jpg" height="300" width="400"/>
        <h3> Meet new and interesting people </h3>
      </div>
    <div class="spacing">
      <img src="@/assets/favoritebook.jpg" alt="Book" height="300" width="400"/>
      <h3> Share your favorite books </h3>
      </div>
      <div class="spacing">
        <img src="@/assets/bookclub.jpg" height="300" width="400"/>
        <h3> Weekly gatherings </h3>
      </div>
  </v-layout>
  </div>
  <div class="popular">
  <h1 class="subheader"> Our favorite books </h1>
  <v-layout justify-center row fill-height>
    <div class="books">
      <img src="@/assets/inheritance.jpg" class="image"/>
      <h2> Inheritance</h2>
      <h4> By: Sharon Mualem </h4>
      <v-btn
        dark
        href="https://www.amazon.com/Inheritance-Genes-Change-Lives-Lives/dp/1455549436/ref=sr_1_1?s=books&ie=UTF8&qid=1533169607&sr=1-1&keywords=inheritance+sharon+moalem"
        target="_blank"
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
        target="_blank"
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
        target="_blank"
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
        target="_blank"
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
        target="_blank"
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
  name: 'Home',
  data () {
    return {
      count: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* These styles refer to the header portion of the page */
.banner{
  min-height: 350px;
  background-size: cover;
  max-height: 350px;
  background-image: url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=954560871844da528c60343dc344ccbf&auto=format&fit=crop&w=1950&q=80");
}

/* CSS for the typing header */
.vue-typer{
  text-transform: uppercase;
  font-size: 3.7em;
  color: white;
  font-weight: bold;
}

.header{
  padding-top: 100px;
  justify-content: center;
  align-content: center;
  text-align: center;
}

/* These styles refer to the about us section of the page */
.about{
  padding: 25px;
  background-color: #E0E0E0;
  min-height: 350px;
}
.aboutText{
  font-size: 1.8em;
  text-align: justify;
}
.quote{
  font-size: 1.8em;
  font-weight: bold;
  font-style: italic;
  justify-content: center;
  align-content: center;
  text-align: center;
}
/* This is for the sub headings */
.subheader{
  text-transform: uppercase;
  padding-bottom: 30px;
  font-size: 1.75rem;
  letter-spacing: 1px;

}

/* These styles refer to the join us section of the page */
.club{
  overflow: auto;
  background-color: #f7f2ee;
  padding: 45px 0 30px;
}

/* These styles refer to the popular books section of the page */
.popular{
  overflow: auto;
  background-color: #E0E0E0;
  padding: 45px 0 30px;
}
.spacing{
  padding: 20px;
  margin: 10px;
}
.books {
  padding: 15px;
  margin: 10px;
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
width: 180px;
height: 275px;
}

</style>
