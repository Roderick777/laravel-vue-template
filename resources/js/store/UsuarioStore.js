import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        usuarios: null,
    },
    
    mutations: {
        setUsuarios(state, usuarios) {
            state.usuarios = usuarios;
        }
    },

    actions: {
        async getUsuarios(context) {
            let response = await axios.get('/api/users');
            context.commit('setUsuarios', response.data);
        },

    }
})