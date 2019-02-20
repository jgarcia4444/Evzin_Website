<template>
  <div class="container-fluid mt-5">
    <div class="row text-center">
      <div class="col">
        <h1>Evzin</h1>
      </div>
    </div>
    <div class="row text-center mt-4">
      <div class="row">
        <div class="col-sm-4">
          <h3>
            John Tsoutis
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi inventore cumque veritatis deserunt doloremque facere sunt suscipit? Similique, omnis qui inventore a praesentium voluptatem expedita. Fuga fugiat quisquam aut?
          </p>
          <router-link to="./About">
            <button type="button" class="btn btn-dark">
              About Evzin
            </button>
          </router-link>
        </div>
        <div class="col-sm-4">
          <h3>
            Private Events
          </h3>
          <p>
            We offer services for any kind of event inside and outside of the restaurant. Whether it is a private birthday in the bar with family style starters and entrees, or a wedding that wants amazing mediterranean food. If you would like to see our catering menu and pricing
          </p>
          <router-link to="./Catering">
            <button type="button" class="btn btn-dark">Menu and Pricing</button>
          </router-link>
        </div>
        <div class="col-sm-4">
          <h3>Order Online</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sequi vero explicabo repudiandae voluptatem id adipisci dignissimos nihil error voluptas quisquam minus, enim provident impedit distinctio a quae? Ad, numquam.
          </p>
          <router-link to="./order_Online">
            <button type="button" class="btn btn-dark">Order Online</button>
          </router-link>
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
