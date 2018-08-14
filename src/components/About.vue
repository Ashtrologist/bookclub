<template>
<div class="about">
  <div class="banner">
    <h1 class="header">About Us</h1>
  </div>
  <br>
  <div class="about">
    <h2>Meet the Team</h2>
    <v-layout justify-center row>
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
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
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
          <p>“Often we pass beside happiness without seeing it, without looking at it, or even if we have seen and looked at it, without recognizing it.”<br>-Alexandre Dumas"</p>
        </div>
      </div>
    </div>
    </div>

    <div>
    <h3>Secretary</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Jesus Cobas, Jr.</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Mechanical Engineering</p>
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
        </div>
      </div>
    </div>
    </div>
    </v-layout>

    <v-layout justify-center row class="row_two">
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
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
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
          <h3>Social Chair</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/jazlyn.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Health Science</p>
          <p>"It does not matter how slowly you go as long as you do not stop.<br>-Confucius</p>
        </div>
      </div>
    </div>
    </div>

    <div>
    <h3>Event Coordinator</h3>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Sami Bazzi</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Pre-Dental</p>
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
        </div>
      </div>
    </div>
    </div>
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
          <p>"What matters most are the simple pleasures so abundant that we can all enjoy them...Happiness doesn't lie in the objects we gather around us. To find it, all we need to do is open our eyes.”</p>
        </div>
      </div>
    </div>
    </div>
  </v-layout>

  <section class="contact">
    <h2>
      Contact Us
    </h2>
    <h3>We're Here to Help!</h3>
    <ul>
      <li>
        tele: 813.123.4567
      </li>
      <li>
        <p>
          <a href="mailto:usfdeadpoets@gmail.com?Subject=Interested%20in%20Joining" target="_top">usfdeadpoets@gmail.com</a>
        </p>
      </li>
    </ul>

  </section>

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
.about{
  background-color: #fff;
  min-height: 350px;
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
}
img {
    width:250px; /* you can use % */
    height: auto;
    /* position: absolute;
    left: 25%;
    top:10%; */
    /* clip: rect(0px,200px,200px,0px); */
}
h2 {
  font-size: 2em;
}
.contact {
  padding: 2em;
  line-height: 2em;
  font-size: 1em;
  width: 100%;
  margin: 0 auto;
  background-color: whitesmoke;
}
ul li {
  list-style-type: none;
}
.row_two {
  padding: 0 0 3em 0;
  margin:0 0 2em 0;
}
</style>
