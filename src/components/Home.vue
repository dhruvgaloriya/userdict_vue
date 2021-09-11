<template>
  <div class="padding">
    <section class="container">
      <div class="user-card" v-for="user in getAllUser" :key="user.id">
        <div class="user-details">
          <div class="text">
            <span class="bold">Name:</span> {{ user.name }}
          </div>
          <div class="text">
            <span class="bold">Email:</span> {{ user.email }}
          </div>
          <div class="flex-button">
            <ntz-button theme="secondary" @click="viewUser(user.id)">
              View Comments
            </ntz-button>
            <ntz-button theme="secondary" @click="viewPost(user.id)">
              View Posts
            </ntz-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { NitrozenButton } from "@gofynd/nitrozen-vue";
export default {
  name: "Home",
  components: {
    "ntz-button": NitrozenButton,
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    viewUser: function(id) {
      this.$router.push("/comments/" + id);
    },
    viewPost: function(id) {
      this.$router.push("/post/" + id);
    },
  },
  computed: {
    ...mapGetters(["getAllUser"]),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style lang="less" scoped>
.container {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 18px;
  .user-card {
    border: 1px solid #e4e5e6;
    border-radius: 12px;
    padding: 20px;
    background-color: #ffffff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .bold {
    font-weight: 500;
    color: black;
  }
  .flex-button {
    display: flex;
    justify-content: space-between;
  }
}
</style>
