<template>
  <div id="app">
    <search></search>
    <song></song>
    <recent-searches></recent-searches>
  </div>
</template>

<script>
import Search from 'components/Search'
import Song from 'components/Song'
import RecentSearches from 'components/RecentSearches'

export default {
  name: 'app',
  components: {
    Search,
    Song,
    RecentSearches
  }
}
</script>

<style lang="scss">
@import "~normalize.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
