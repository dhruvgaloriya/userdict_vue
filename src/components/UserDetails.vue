<template>
  <div class="padding">
    <ntz-button theme="secondary" v-flat-btn @click="backToHome">
      Home
    </ntz-button>
    <section class="container">
      <div
        class="user-comment"
        v-for="comment in getUserComments"
        :key="comment.id"
      >
        <div class="comment-details">
          <div class="text">
            <span class="bold">Name:</span>
            {{ comment.name }}
          </div>
          <div class="text">
            <span class="bold">Email:</span>
            {{ comment.email }}
          </div>
          <div class="text">
            <span class="bold">Comment:</span>
            {{ comment.body }}
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
  name: "UserDetails",
  props: ["id"],
  components: {
    "ntz-button": NitrozenButton,
  },
  methods: {
    ...mapActions(["fetchUserComments"]),
    backToHome: function() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["getUserComments"]),
  },
  mounted() {
    this.fetchUserComments(this.id);
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
  margin-top: 10px;
  .user-comment {
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
}
</style>
