import http from 'axios'

const clientId = 'ggX0UomnLs0VmW7qZnCzw'
const scApiBaseUrl = 'https://api.soundcloud.com/'
const scBaseUrl = 'http://soundcloud.com/'
const pageSize = 6

export default { 
    tracksBySearchTerm (p, cb) {
        let initialUrl = scApiBaseUrl + 'tracks/' + '?client_id=' + clientId + '&limit=' + pageSize + 
            '&linked_partitioning=1'

        if (p.searchTerm) {
            initialUrl += '&q=' + encodeURIComponent(p.searchTerm)
        }

        let url = p.nextHref || initialUrl
        
        // console.log(url)

        http.get(url, { withCredentials: false })
            .then((result) => { cb( result.data )  } ) 
    },

    trackOembed(trackUrl, cb) {
        let url = scBaseUrl + 'oembed?auto_play=true&format=json&url=' + trackUrl
            
        http.get(url, { withCredentials: false })
            .then((result) => { cb(result.data)  } )         
    }
}