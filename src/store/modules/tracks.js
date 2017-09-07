import sc from '../../api/soundcloud'
import * as types from '../mutation-types'

// initial state
const state = {
  allTracks: [],
  nextHref: '',
  activeTrack: {},
  searchTerm: '',
  searchTerms: ['trey', '3', 'lebens']
}

// getters
const getters = {
  /*
  getTrackById: (state, getters) => (id) => {
    return state.allTracks.find(track => track.id === id)
  },
  */
}

// actions
const actions = {
  getTracks ({ commit }, params) {
    let p = { 
        searchTerm: params.searchTerm,
        nextHref: (params.useNextHref) ? state.nextHref : ''
    }

    sc.tracksBySearchTerm(p, tracks => {
      commit(types.TRACKS_FETCHED, { tracks })
    })
  }
}

// mutations
const mutations = {
  [types.TRACKS_FETCHED] (state, { tracks, chTerm }) {
    state.allTracks = tracks.collection
    state.nextHref = tracks.next_href
  },

  [types.SET_ACTIVE_TRACK] (state, trackId) {
    state.activeTrack = state.allTracks.find(t => t.id === trackId)
  },

  [types.SET_SEARCH_TERM] (state, searchTerm) {
    state.searchTerm = searchTerm;
  },

  [types.ADD_SEARCH_TERM_HISTORY] (state, searchTerm) {
    state.searchTerms.push(searchTerm)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}