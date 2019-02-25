<template>
  <div class="container">
    <div class="jumbotron text-center">
      <div class="container">
        <h1 class="display-4">Evzin</h1>
        <p class="lead">In the beautiful cities of Palm Springs and Palm Desert.</p>
      </div>
    </div>
    <div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/media/img/evzin1.jpg" class="d-block w-100" alt="Evzin">
        </div>
        <div class="carousel-item">
          <img src="/media/img/evzin2.jpg" class="d-block w-100" alt="Evzin">
        </div>
        <div class="carousel-item">
          <img src="/media/img/evzin3.jpg" class="d-block w-100" alt="Evzin">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container">
      <div class="row text-center mt-4">
        <div class="row">
          <div class="col">
            <h3>
              John Tsoutis
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi inventore cumque veritatis deserunt doloremque facere sunt suscipit? Similique, omnis qui inventore a praesentium voluptatem expedita. Fuga fugiat quisquam aut?
            </p>
          </div>
          <div class="col">
            <h3>
              Private Events
            </h3>
            <p>
              We offer services for any kind of event inside and outside of the restaurant. Whether it is a private birthday in the bar with family style starters and entrees, or a wedding that wants amazing mediterranean food. If you would like to see our catering menu and pricing
            </p>
          </div>
          <div class="col">
            <h3>Order Online</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sequi vero explicabo repudiandae voluptatem id adipisci dignissimos nihil error voluptas quisquam minus, enim provident impedit distinctio a quae? Ad, numquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  
};
</script>
<style>

  .carousel {
    width: 80%;
    margin: auto;
    align-content: center;
    text-align: center;
  }

  .jumbotron {
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .col {
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid black;
    border-radius: 5px;
    margin: 1em;
}

  .container {
    align-content: center;
}
</style>

