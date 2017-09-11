import http from 'axios'

const clientId = 'ggX0UomnLs0VmW7qZnCzw'
const scApiBaseUrl = 'https://api.soundcloud.com/'
const scBaseUrl = 'http://soundcloud.com/'
const pageSize = 6

function tracksByUrl(url) {
  return http.get(url, { withCredentials: false }).then(response => {
    return {
      tracks: response.data.collection,
      nextTracks() {
        return tracksByUrl(response.data.next_href);
      }
    };
  });
}

export default {
  tracksBySearchTerm (searchTerm) {
    let initialUrl = `${scApiBaseUrl}tracks/?client_id=${clientId}&limit=${pageSize}&linked_partitioning=1`;
    if (searchTerm) {
        initialUrl += '&q=' + encodeURIComponent(searchTerm)
    }
    return tracksByUrl(initialUrl)
  },

  trackOembed(trackUrl, cb) {
    let url = scBaseUrl + 'oembed?auto_play=true&format=json&url=' + trackUrl

    http.get(url, { withCredentials: false })
      .then((result) => { cb(result.data) })
  }
}