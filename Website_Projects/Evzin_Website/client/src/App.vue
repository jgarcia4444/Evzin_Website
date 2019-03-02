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
        <li class="nav-item">
          <router-link to="/Art">
            <a class="nav-link" href="/Art">Art</a>
          </router-link>
        </li>
      </ul>
    </div>
    </nav>
    <!-- Where the page associated with the route is rendered -->
    <router-view/>
    <!-- Places a footer at the bottom of each page -->
    <div class="navbar navbar-default navbar-static-bottom navbar-fixed-bottom">
      <span class="text-muted">EVZIN Palm Springs &copy;</span>
      <!-- Phone number and address
            Save for later use -->
      <!--<div>
        Phone: (760) 656-8764 Address: 411 E Palm Canyon Dr, Palm Springs, CA 92264
      </div>-->
      <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#exampleModal">
        Menu
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">EVZIN Menu</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             Foooooooooooddddd 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div id="iconDiv">
        <a class="icon" target="_blank" href="https://www.facebook.com/evzinpalmsprings/posts/773926186120629"><img src="/media/img/facebook.png" alt=""></a>
        <a class="icon" target="_blank" href="https://www.instagram.com/evzinpalmsprings/"><img src="/media/img/instaIcon.png" alt=""></a>
      </div>
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

  .icon {
    float: right;
    margin-right: 10px;
  }

  .navbar-fixed-bottom {
    background-color:rgba(0, 0, 0, 0.9);
    margin-top: 20px;
  }

</style>
