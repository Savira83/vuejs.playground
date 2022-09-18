<template>
  <div>
    <header class="header">
      <h1>HELLO FROME HERE</h1>
    </header>
    <main class="main">
      <div><router-link to="/">Bitcoin</router-link></div>
      <div><router-link to="/addWorkers">Workers</router-link></div>
      <div><router-link to="/notFound">Broken link</router-link></div>
    
    <router-view></router-view>
    </main>
    <footer class="footer">
      <h1>HELLO FROME THERE</h1></footer>
  </div>
    
</template>

<script>

export default {
  name: 'App',
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  height: 100px;
  border: 1px solid;
  color: lightgray;

}
.main{
  display: inline-block;
}
</style>
