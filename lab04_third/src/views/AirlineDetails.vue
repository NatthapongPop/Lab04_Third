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
var count = 0;
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
            count += 1;
          }
          if (count + Object.keys(obj).length == Object.keys(obj).length) {
            this.$router.push({
              name: "404Resource",
              params: { resource: this.id },
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
