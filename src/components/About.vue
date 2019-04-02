<template>
<div class="about">
  <div class="banner">
    <h1 class="header">About Us</h1>
  </div>
  <section class="paragraph">
  <p>
    We are a group of college students with differing backgrounds coming together for a shared appreciation of great thoughts, ideas, and beliefs. Our collection of varied experiences aid in our ability to come together and discuss thought-provoking notions that help us connect with the world around us. That is why we are here…to connect, to understand, and most importantly, to think!
  </p>
</section>
    <h2>Meet the Bookworms</h2>
    <p>Hover over each e-board member to find out more about them</p>
  <div class="team">
    <v-layout justify-center row class="frame">
    <div>
    <h3>President</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/sondos.jpeg" height="auto" width="250px" alt="Sondos Hassan">
          <h3>Sondos Hassan</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/sondos.jpeg" height="auto" width="250px" alt="Sondos Hassan">
          <p class="major">Health Science</p>
          <p class="quote">"Think of yourself as dead. You have lived your life. Now take what's left and live it properly."<br>- Marcus Aurelius</p>
        </div>
      </div>
    </div>
    </div>
    <div>
    <h3>Vice President</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/obada.jpeg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Obada Kattih</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/obada.jpeg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Biomedical Science</p>
          <p class="quote">“Often we pass beside happiness without seeing it, without looking at it, or even if we have seen and looked at it, without recognizing it.”<br>-Alexandre Dumas"</p>
        </div>
      </div>
    </div>
    </div>
    </v-layout>

    <v-layout justify-center row class="frame">
     <div>
    <h3>Secretary</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/hikaru.jpg" alt="Sondos Hassan">
          <h3>Hikaru Kurasawa</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/hikaru.jpg" alt="Sondos Hassan">
          <p class="major">Health Science</p>
          <p class="quote">"Ambition should be made of sterner stuff “<br>- William Shakespeare"</p>
        </div>
      </div>
    </div>
    </div>
    <div>
    <h3>Treasurer</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/mateo.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Mateo Knight</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/mateo.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Health Science</p>
          <p class="quote">"We see the world, not as it is, but as we are--or, as we are conditioned to see it."</p>
        </div>
      </div>
    </div>
    </div>

    <div>
    <h3>Social Chair</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/jazlyn.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Jazlyn Vega</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/jazlyn.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Health Science</p>
          <p class="quote">"It does not matter how slowly you go as long as you do not stop.<br>-Confucius</p>
        </div>
      </div>
    </div>
    </div>
  </v-layout>
  <v-layout justify-center row class="frame">
  <div>
    <h3>Discussion Mediator</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/daniel.jpeg" alt="Daniel Usma">
          <h3>Daniel Usma</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/daniel.jpeg" alt="Daniel Usma">
          <p class="major">Biomedical Science</p>
          <p class="quote">"What matters most are the simple pleasures so abundant that we can all enjoy them...Happiness doesn't lie in the objects we gather around us. To find it, all we need to do is open our eyes.”</p>
        </div>
      </div>
    </div>
    </div>
    <div>
    <h3>Discussion Mediator</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/logan.jpg" alt="Logan Salzman">
          <h3>Logan Salzman</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/logan.jpg" alt="Logan Salzman">
          <p class="major">Health Science</p>
          <p class="quote">"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.”</p>
        </div>
      </div>
    </div>
    </div>
  </v-layout>
</div>
<section>
    <!-- <h2 class="contact">
      Contact Us
    </h2> -->
  <div class="contact">
    <h3>We're Here to Help!</h3>
      <p style="text-align: center;">
        Telephome: 813.123.4567
      <br>
        If you have any questions on how to become involved, please e-mail us at:<br>
        <a href="mailto:usfdeadpoets@gmail.com?Subject=Interested%20in%20Joining" target="_top">usfdeadpoets@gmail.com</a>
        <br>We are looking forward to hearing from you!<br>Go Bulls!
      </p>
  </div>
</section>
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
.team {
  max-width: 75%;
  margin: 0 auto;
  background-color: #007953;
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
.about{
  background-color: #E0E0E0;;
  box-shadow: 0px 2px 8px gray;
  /* padding-bottom: 0px;
  min-height: 350px; */
  /* width:75%;
  margin: 0 auto; */
}

/* entire container, keeps perspective */
.flip-container {
perspective: 1000px;
}
/* flip the pane when hovered */
.flip-container:hover .flipper, .flip-container.hover .flipper {
transform: rotateY(180deg);
}

.flip-container, .front, .back {
width: 320px;
height: 480px;
}

/* flip speed goes here */
.flipper {
transition: 0.6s;
transform-style: preserve-3d;

position: relative;
}

/* hide back of pane during swap */
.front, .back {
backface-visibility: hidden;

position: absolute;
top: 0;
left: 0;
}

/* front pane, placed above back */
.front {
z-index: 2;
/* for firefox 31 */
transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
transform: rotateY(180deg);
}
.opacity {
opacity: 0.5;
filter:alpha(opacity=50); /* For IE8 and earlier */
}

.major {
font-style: italic;
font-weight: bold;
text-align: center;
}
.quote {
  text-align: justify;
}
img {
    width:250px; /* you can use % */
    height: auto;
    border-radius: 8px;
    border: 1px solid #ddd;
    /* position: absolute;
    left: 25%;
    top:10%; */
    /* clip: rect(0px,200px,200px,0px); */
}
h2 {
  font-size: 2em;
  text-align: left;
  color: black;
  padding-left: .5em;
  padding-top: 2em;
  padding-bottom: .5em;
}
p {
  font-size: 1.2em;
  text-align: left;
  padding-left: 1em;
  padding-bottom: .5em;
}
.paragraph {
  padding: 4em;
  line-height: 2em;
  font-size: 1em;
  width: 100%;
  margin: 0 auto;
  background-color: #007953;
  color: white;
}
.contact {
  background-color: #007953;
  color: white;
  padding: 1.5em;
  padding-bottom: .5em;
  line-height: 2em;
  font-size: 1em;
  width: 100%;
  margin: 50px auto 0px auto;
  background-color: #36454f;
  font-size:20px;
}
ul li {
  list-style-type: none;
}
.row_two {
  padding: 0 0 0em 0;
  margin:0 0 0em 0;
  max-width: 75%;
  margin: 0 auto;
}
.frame {
  position: -webkit-static; /* Safari */
  position: static;
  top: 2em;
  /* background-color: #007953; */
  padding-top:1em;
  /* border: 1px solid gray; */
  /* box-shadow: 0px 2px 4px gray; */
  COLOR: WHITE;
  overflow: scroll;
}
a {
  color: white;
}
h3 {
  font-size: 1.5em
}

@media (max-width: 500px) {
  .team {
    max-width: 100%;
    margin: 0 auto;
    background-color: #007953;
    overflow: scroll;
  }
}
</style>
