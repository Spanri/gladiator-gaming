<template>
  <div class="content">
    <div class="content__profile">
      <div class="content__profile-img">Фото</div>
      <div class="content__profile-info">
        <span>{{ profile.nickname }}</span>
        <span>{{ profile.status }}</span>
        <span>AUTH TRUE PROFILE TRUE</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeaderAuthTrueProfileTrue",

  props: {
    msg: String
  },

  computed: {
    profile() {
      return {
        nickname: "Nagibator_123",
        status: "Роза упала на лапу Азора"
      };
    }
  },

  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  margin: 30px;
  margin-bottom: 15px;

  &__profile {
    display: flex;
    flex-direction: row;

    &-img {
      min-width: 64px;
      background: $white;
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    &-info {
      display: flex;
      flex-direction: column;

      padding: 5px 10px 5px 20px;
      color: $white;
      min-width: 300px;
    }
  }
}
</style>
