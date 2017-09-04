<template>
    <div class="search">
        <div>
            <input type="text" v-model="searchTerm"/>
            <button v-on:click="newSearch" ref="searchButton">Search</button>
        </div>
        <div class="results">
            <p v-for="t in tracks">
                <!-- <router-link :to="{ name: 'track', params: { id: t.id }}">{{ t.title }}</router-link> -->
                <a v-on:click.stop="activeTrack(t.id)">{{ t.title }}</a>
            </p>
        </div>
        <div v-if="showNext">
            <p><a v-on:click.stop="nextSearchResults">Next</a></p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
      ...mapGetters({
        tracks: 'allTracks',
        showNext: 'hasMoreResults'
    }),
    searchTerm: {
        get() { return this.$store.getters.searchTerm; },
        set( value ) {
            this.$store.commit('SET_SEARCH_TERM', value );
        }
    }
  },
  methods: {
    newSearch(event) {
        this.$store.dispatch('getTracks', { 
            searchTerm: this.searchTerm, 
            useNextHref: false 
        })
        this.$store.commit('ADD_SEARCH_TERM_HISTORY', this.searchTerm)
      },
      nextSearchResults(event) {
        this.$store.dispatch('getTracks', { searchTerm: this.searchTerm, useNextHref: true })
      },
      activeTrack(trackId) {
        this.$store.commit('SET_ACTIVE_TRACK', trackId);
      } 
  },
  created: function() {
      // console.log('created');
  },
  updated: function() {
      // console.log('updated')
  }
}
</script>

<style lang="scss">
.search { 
    float: left; 
    width: 400px; }
</style>
