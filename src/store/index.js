import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      mainPlayers: [
      {
       id: 1,
       title: "João Paulo",
       subtitle: "Goalkeeper",
       img: './photos/JoaoPaulo.jpg',
      },
      {
          id: 2,
          title: "Kaiky",
          subtitle: "Defender",
          img: './photos/Kaiky.jpg',
      },
      {
          id: 3,
          title: "Velazquez",
          subtitle: "Defender",
          img: './photos/Velasquez.jpg',
      },
      {
          id:4,
          title: "Sandry",
          subtitle: "Midfielder",
          img: './photos/Sandry.jpg',
      },
      {
          id:5,
          title: "Ângelo",
          subtitle: "Striker",
          img: './photos/Angelo.jpg',
      },
      {
          id:6,
          title: "Lucas Braga",
          subtitle: "Striker",
          img: './photos/LucasBraga.jpg',
      },
      {
          id:7,
          title: "Marcos Leonardo",
          subtitle: "Striker",
          img: './photos/MarcosLeonardo.jpg',
      },
      {
          id:8,
          title: "Marinho",
          subtitle: "Striker",
          img: './photos/Marinho3.jpg',
      },
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    allCards(state) {
        return state.mainPlayers;
      },
  }

})