<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Evzin</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"          id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span   class="sr-only">(current)</span></a>
      </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Evzin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Catering</a>
        </li>
      </ul>
    </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
  body {
    width: 100%;
    height: auto;
    background-image: url('../public/media/img/chios_pattern.jpg');
    background-attachment: fixed;
  }
</style>
