<template>
<div class="about">
  <div class="banner">
    <h1 class="header">Meet the team</h1>
  </div>
  <br>
  <div class="about">
    <v-layout justify-center row>
    <div>
    <h2>President</h2>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/sondos.jpeg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Sondos Hassan</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/sondos.jpeg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Health Science</p>
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
        </div>
      </div>
    </div>
    </div>
    <div>
    <h2>Vice President</h2>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Ashton Rodriquez</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Computer Science</p>
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
        </div>
      </div>
    </div>
    </div>
    </v-layout>
    <v-layout justify-center row>
    <div>
    <h2>Secretary</h2>
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
    <div>
    <h2>Treasurer</h2>
    <div class="flip-container" ontoughstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <h3>Harishawn Ramrup</h3>
        </div>
        <div class="back">
          <img class="opacity" src="@/assets/book.jpg" height="300px" width="225px" alt="Sondos Hassan">
          <p class="major">Economics</p>
          <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."</p>
        </div>
      </div>
    </div>
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
.about{
  background-color: #E0E0E0;
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
</style>
