import axios from "axios";
const state = {
  users: [],
  comments: [],
  posts: [],
};
const getters = {
  getAllUser: (state) => state.users,
  getUserComments: (state) => state.comments,
  getUserPosts: (state) => state.posts,
};
const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", response.data);
  },

  async fetchUserComments({ commit }, id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    commit("setUserComments", response.data);
  },

  async fetchUserPosts({ commit }, id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setUserPosts", { data: response.data, id });
  },
};
const mutations = {
  setUsers: (state, data) => (state.users = data),
  setUserComments: (state, data) => (state.comments = data),
  setUserPosts: (state, { data, id }) =>
    (state.posts = data.filter((item) => item.userId === parseInt(id))),
};

export default { state, getters, actions, mutations };
