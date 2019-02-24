<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a class="navbar-brand" href="/">Evzin</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
    <router-view/>
    <div class="navbar navbar-default navbar-static-bottom navbar-fixed-bottom">
      <span class="text-muted">Evzin Palm Springs &copy; Jake Garcia</span>
    </div>
  </div>
</template>

<style>

  body {
    width: 100%;
    height: auto;
    background-color: rgba(0,0,0,0.0);
  }

  html { 
    background: url('../public/media/img/chios_pattern.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }


</style>
