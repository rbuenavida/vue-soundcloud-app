<template>
  <div class="history">
    <h2>Recent searches</h2>
    <ul>
      <li v-for="(term, index) in searchTerms">
        <a @click="activateSearch(term, index)">{{ term }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as types from '../store/mutation-types'

  export default {
    computed: {
      searchTerms() { return this.$store.state.tracks.searchTerms }
    },
    methods: {
      activateSearch(term, index) {
        this.$store.dispatch('setSearchTerm', { term: this.searchTerms[index] })
      }
    }
  }
</script>

<style lang="scss">
  .history {
    float: left;
    width: 250px;

    a {
      cursor: pointer;
    }
  }
</style>
