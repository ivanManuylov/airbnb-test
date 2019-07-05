const state = {
    isShowModal: false,
};

const getters = {
    showModal : state => state.showModal
};

const actions = {
    change({commit, state}) {
        commit('change', state);
    },
};

const mutations = {
    change(state) {
        state.isShowModal = !state.isShowModal;
    },
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}
