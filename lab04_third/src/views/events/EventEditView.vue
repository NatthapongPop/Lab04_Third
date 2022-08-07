<template>
  <router-link :to="{ name: 'home' }">
    <button @click="edit">edit update</button>
  </router-link>
</template>

<script>
export default {
  props: ["id"],
  inject: ["GStore"],
  methods: {
    edit() {
      this.GStore.flashMessage = "Passengers deatils has been update.";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 5000);

      this.$router.push({
        name: "EventDetails",
        params: { id: this.event.id },
      });
    },
  },
};
</script>
