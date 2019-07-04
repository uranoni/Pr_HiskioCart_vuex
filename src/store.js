import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

export default new Vuex.Store({
  state: {
    lessons: []
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    }
  },
  actions: {
    fetchLessons({ commit }) {
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          // const lessons = rs.courses;
          commit('setLessons', rs.courses)
        })
    }
  }
})
