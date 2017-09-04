<template>
    <div class="history">
        <h2>Recent searches</h2>
        <ul>
            <li v-for="(term, index) in searchTerms">
                <a v-on:click="activateSearch(term, index)">{{ term }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  computed: {
      searchTerms() { return this.$store.getters.searchTerms }
  },
  methods: {
      activateSearch: function(term, index) {
        this.$store.commit("SET_SEARCH_TERM", this.searchTerms[index] );
        this.$store.dispatch('getTracks', { searchTerm: this.searchTerms[index], useNextHref: false })
      }
  }
}
</script>

<style>
.history {
    float: left; 
    width: 250px;
}
</style>
