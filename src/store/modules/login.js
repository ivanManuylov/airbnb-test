const state = {
    isShowModal: false,
    formName: true,
};

const getters = {
    showModal : state => state.showModal,
    formName: state => state.formName,
};

const actions = {
    change({commit, state}) {
        commit('change', state);
    },
    'sign-in-form': function({commit, state}) {
        commit('sign-in-form', state);
    },
    'sign-up-form': function({commit, state}) {
        commit('sign-up-form', state);
    }
};

const mutations = {
    'sign-in-form': function(state) {
        state.formName = true;
    },
    'sign-up-form': function(state) {
        state.formName = false;
    },
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
