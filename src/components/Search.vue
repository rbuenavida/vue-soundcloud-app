<template>
  <div class="search">
    <div>
      <input type="text" v-model="searchTerm" />
      <button @click="newSearch">Search</button>
    </div>
    <div class="results">
      <p v-for="t in tracks">
        <!-- <router-link :to="{ name: 'track', params: { id: t.id }}">{{ t.title }}</router-link> -->
        <a @click.stop="activeTrack(t.id)">{{ t.title }}</a>
      </p>
    </div>
    <div v-if="showNext">
      <p>
        <a @click.stop="nextSearchResults">Next</a>
      </p>
    </div>
  </div>
</template>

<script>
  import * as types from '../store/mutation-types'

  export default {
    computed: {
      showNext() {
        return this.$store.state.tracks.nextHref && (this.$store.state.tracks.allTracks.length > 5)
      },
      tracks() {
        return this.$store.state.tracks.allTracks
      },
      searchTerm: {
        get() { return this.$store.state.tracks.searchTerm },
        set(value) {
          this.$store.commit(types.SET_SEARCH_TERM, value)
        }
      }
    },
    methods: {
      newSearch(event) {
        this.$store.dispatch('getTracks', {
          searchTerm: this.searchTerm
        })
        this.$store.commit(types.ADD_SEARCH_TERM_HISTORY, this.searchTerm)
      },
      nextSearchResults(event) {
        this.$store.dispatch('getTracks', {
          searchTerm: this.searchTerm,
          useNextHref: true
        })
      },
      activeTrack(trackId) {
        this.$store.commit(types.SET_ACTIVE_TRACK, trackId)
      }
    }
  }
</script>

<style lang="scss">
  .search {
    float: left;
    width: 400px;

    a {
      cursor: pointer;
    }
  }
</style>
