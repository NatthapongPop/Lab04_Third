<template>
  <div class="event-card">
    <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
      <h1>Name: {{ event.first_name + " " + event.last_name }}</h1>
      <p>ID: {{ event.id }}</p>
      <p>TripsDate: {{ event.travelDate }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
