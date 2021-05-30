<template>
  <ul class="nav">
    <li class="nav-item">
      <div class="logo">
        <center>
          <a href="/" target="_top"
            ><img
              src="https://cdn2.scratch.mit.edu/get_image/user/71379194_100x100.png"
              width="50px"
              height="50px"
          /></a>
        </center>
      </div>
    </li>
    <li class="nav-item">
      <div class="align-left">
        <div class="bg">
          <a href="/projects" target="_top">Projects</a>
        </div>
      </div>
    </li>
    <li class="nav-item">
      <div class="align-left">
        <div class="bg">
          <a href="/lol" target="_top">Memes</a>
        </div>
      </div>
    </li>
    <li class="nav-item">
      <div class="align-left">
        <div class="bg">
          <a href="/blog">Blog</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
ul {
  font-family: "Roboto", sans-serif;
  margin: 0;
  margin-left: 0px;
  margin-top: 0px;
  margin-right: 0px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #151618;
}
li .align-left a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-size: 55px;
  padding: 22px 16px;
  float: left;
  background-color: #151618;
}
li .align-right a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-size: 55px;
  padding: 22px 16px;
  float: right;
  background-color: #151618;
}
li .bg a:hover {
  background-color: #0000ff;
}
li .logo a {
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-size: 55px;
  padding: 0px 0px;
  float: left;
  background-color: #151618;
}
</style>