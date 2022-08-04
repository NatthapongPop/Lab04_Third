<template>
  <div class="event" v-if="event">
    <h1>This is Airline Details Number: {{ event.id }}</h1>

    <h4>Name: {{ event.AirlineName }}</h4>
    <h4>E-mail: {{ event.email }}</h4>
    <h4>Address: {{ event.address }}</h4>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEventsAir()
      .then((res) => {
        res.data.forEach((obj) => {
          console.log();
          if (obj.id == this.id) {
            this.event = obj;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
