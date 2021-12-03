import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: null,
  },
  mutations: {
    SET_PLAYERS(state,payload){
        state.players = payload;
      },
  },
  actions: {
    fetchPlayers() {
        fetch('./data/bd.json')
          .then((res) => {
            if(!res.ok)
              throw Error('Could not get players');
            
            return res.json();
          })
          .then((data) => {
            const payload = data.players;
            this.commit('SET_PLAYERS',payload);
          })
          .catch((error) => console.log(error));
      },
  },
  modules: {
  },
  getters:{
    allCards(state) {
        return state.players;
      },
  }

})