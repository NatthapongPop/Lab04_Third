<template>
  <div class="event" v-if="event">
    <div id="nav">
      <router-link :to="{ name: 'EventEdit' }">Edit_User_Data</router-link>
    </div>
    <router-view :event="event" />
    <h3>Name: {{ event.first_name + " " + event.last_name }}</h3>
    <p>Gender: {{ event.gender }}</p>
    <p>E-mail: {{ event.email }}</p>
    <p>TripsDate: {{ event.travelDate }}</p>
    <p>AirlineID: {{ event.airlineId }}</p>
    <router-link
      :to="{ name: 'AirlineDetails', params: { id: event.airlineId } }"
    >
      Airline Details
    </router-link>
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
