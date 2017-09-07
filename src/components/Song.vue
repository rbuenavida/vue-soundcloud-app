<template>
  <div class="song">
    <img v-bind:src="artworkUrl" @click="embedTrack" />
    <div v-html="rawHtml"></div>
  </div>
</template>

<script>
  import sc from '../api/soundcloud'

  export default {
    computed: {
      artworkUrl() {
        return this.$store.state.tracks.activeTrack.artwork_url || ''
      }
    },
    methods: {
      embedTrack(event) {
        var setRawHtml = function(result) {
          this.rawHtml = result.html
        }

        sc.trackOembed(this.$store.state.tracks.activeTrack.permalink_url, setRawHtml.bind(this))
      }
    },
    data: function() {
      return { 
        rawHtml: ''
      }
    }
  }
</script>

<style lang="scss">
  .song {
    float: left;
    width: 200px;

    img {
      cursor: pointer;
    }
  }
</style>

