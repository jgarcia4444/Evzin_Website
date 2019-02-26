<template>
  <div id="app">
    <!-- Add the navbar at the top of each page that is rendered -->
    <!-- The nav links collaspe into a hamburger button icon that when clicked expands the navabr -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a class="navbar-brand" href="/">Evzin</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Nav Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </router-link>
      </li>
        <li class="nav-item">
          <router-link to="/About">
            <a class="nav-link" href="/About">About Evzin</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Catering">
            <a class="nav-link" href="/Catering">Catering</a>
          </router-link>
        </li>
      </ul>
    </div>
    </nav>
    <!-- Where the page associated with the route is rendered -->
    <router-view/>
    <!-- Places a footer at the bottom of each page -->
    <div class="navbar navbar-default navbar-static-bottom navbar-fixed-bottom">
      <span class="text-muted">EVZIN Palm Springs &copy; Jake Garcia</span>
      <a href="https://www.facebook.com/evzinpalmsprings/posts/773926186120629"><img src="/media/img/facebook.png" alt=""></a>
      <a href="https://www.instagram.com/evzinpalmsprings/"><img src="/media/img/instaIcon.png" alt=""></a>
    </div>
  </div>
</template>

<style>

  body {
    width: 100%;
    height: auto;
    background-color: rgba(0,0,0,0.0);
    font-family: sans-serif;
  }
  /* sets the background image and fixes it to cover the screen. */
  html { 
    background: url('../public/media/img/chios_pattern.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }


</style>
