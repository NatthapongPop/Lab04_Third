<template>
  <div class="home">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "../components/EventCard.vue";
import EventService from "@/services/EventService.js";
import NProgress from "nprogress";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEventsPass()
      .then((res) => {
        this.events = res.data;
        console.log(this.events);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  beforeRouteEnter() {
    NProgress.start();
    EventService.getEventsPass()

      .then((res) => {
        this.events = res.data;
        console.log(this.events);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        NProgress.done();
      });
  },
  beforeRouteUpdate(next) {
    EventService.getEventsPass()
      .then((response) => {
        this.events = response.data;
        next(); // <-----
      })

      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
