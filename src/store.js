import Vue from 'vue';
import Vuex from 'vuex';
// import basic JSON with test data
// import TestData from './assets/TestData.json';

Vue.use(Vuex);

// let usersJSON = Object.assign({}, TestData.users);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    deleteUser(state, payload) {
      state.users.splice(payload, 1);
    },
    addUser(state, payload) {
      if(payload.length > 1) {
        payload.forEach(user => {
          state.users.push(user);
        })
      } else state.users.push(payload);
    },
    saveUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    deleteUser(context, payload) {
      context.commit('deleteUser', payload);
    },
    addUser(context, payload) {
      context.commit('addUser', payload);
    },
    saveUsers(context, payload) {
      context.commit('saveUsers', payload);
    },
  },
});
