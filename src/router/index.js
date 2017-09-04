import Vue from 'vue'
import Router from 'vue-router'
import SearchPage from 'components/SearchPage'
import HomePage from 'components/HomePage'
import TrackPage from 'components/TrackPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/track/:id',
      name: 'track',
      component: TrackPage
    }
  ]
})