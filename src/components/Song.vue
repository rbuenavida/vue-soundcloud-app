<template>
    <div class="song">
        <img v-bind:src="activeTrack.artwork_url" v-on:click="embedTrack" />
        <div v-html="rawHtml"></div>
    </div>  
</template>

<script>
import { mapGetters } from 'vuex'
import sc from '../api/soundcloud'

export default {
  computed: mapGetters({
      'activeTrack': 'activeTrack'
  }),
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
        currentlyEmbededTrackId: '', 
        rawHtml: '' 
    }
  }
}
</script>

<style>
.song { 
    float: left;
    width: 200px; }
</style>

