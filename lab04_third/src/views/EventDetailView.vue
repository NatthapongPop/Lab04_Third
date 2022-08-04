<template>
  <div class="event" v-if="event">
    <h1>Name: {{ event.first_name + " " + event.last_name }}</h1>
    <p>ID: {{ event.id }}</p>
    <p>TripsDate: {{ event.travelDate }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
var count = 0;
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEventsPass()
      .then((res) => {
        console.log();
        if (res.id == this.id) {
          this.event = res;
          count += 1;
        }
        if (count + Object.keys(res).length == Object.keys(res).length) {
          this.$router.push({
            name: "404Resource",
            params: { resource: this.id },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
