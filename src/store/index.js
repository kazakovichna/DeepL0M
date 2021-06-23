import { createStore } from 'vuex'

export default createStore({
    state: {
        isModalOpen: false,
        modalID: null
    },
    mutations: {
        OPEN_MODAL: (state) => {
            state.isModalOpen = !state.isModalOpen
        }
    },
    actions: {
        OPEN_MODAL({ commit, state }, id) {
            state.modalID = id
            console.log(state.modalID)
            commit('OPEN_MODAL')
        }
    },
    getters: {
        GET_MODAL_POS: state => {
            return state.isModalOpen
        }
    },
    modules: {}
})