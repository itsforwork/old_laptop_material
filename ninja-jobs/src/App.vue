<template>
  <nav>
     <!-- router links : dont need to create a href tag for redirecting to another com -->
    <router-link to="/">Home</router-link> |
    <!-- dynamic way of writing router link by binding to element and write name instaed of path -->
    <router-link :to="{name : 'About'}">About</router-link> |
    <router-link :to="{name : 'Jobs'}">Jobs</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
