export const state = () => ({
  modalOpen: false,
});

export const getters = {
  isModalOpen: (state) => {
    return state.modalOpen;
  },
};

export const mutations = {
  togglModal: (state, payload) => {
    state.modalOpen = payload;
  },
};

// export const actions = {
//   updateActionValue({ commit }) {
//     commit("updateValue");
//   },
// };
