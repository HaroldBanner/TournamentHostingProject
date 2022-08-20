<template>
  <div id="app" class="fixed-bg bg-1">
    <header>
      <TopNavbar />
    </header>
  <router-view id="main-view" />


  
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar';
export default {
  name: 'app',
  components: {
    TopNavbar
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
 font-family: 'montserrat', sans-serif;
 padding: 0;
  margin: 0;
  
}
#main-view {
 
   margin-left: 140px;
   padding-left: 1rem;
}
div {
  background-color: #023047;
}
header {
  width: 100vw;
  background-color: #023047;
  padding: 20px;
}
body, html {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  margin: px;
  padding: 10px;
  color: #8ecae6;
  background-color: #023047;
  
}
a, a:visited {
 /* background-color: #023047;   */
 color: #e0fbfc; 
}

</style>

