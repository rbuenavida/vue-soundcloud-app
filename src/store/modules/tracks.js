import sc from '../../api/soundcloud'
import * as types from '../mutation-types'

// initial state
const state = {
  allTracks: [],
  getNextTracks: null,
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
  setSearchTerm ({ commit }, params) {
    commit(types.SET_SEARCH_TERM, params.term)
    
    sc.tracksBySearchTerm(params.term).then(results => {
      commit(types.TRACKS_FETCHED, results);
    })

    if (params.history) {
      commit(types.ADD_SEARCH_TERM_HISTORY, params.term)
    }
  },
  getNextTracks ({ commit }) {
    state.getNextTracks().then(results => {
      commit(types.TRACKS_FETCHED, results)
    });
  }
}

// mutations
const mutations = {
  [types.TRACKS_FETCHED] (state, results) {
    state.allTracks = results.tracks
    state.getNextTracks = results.nextTracks;
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