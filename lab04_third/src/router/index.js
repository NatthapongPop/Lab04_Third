import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetails from "../views/EventDetailView.vue";
import AirlineDetails from "../views/AirlineDetails.vue";
import PageNotFound from "../views/events/PageNotFound.vue";
import ResourceNotFound from "../views/events/ResourceNotFound.vue";
import EventEditView from "@/views/events/EventEditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/passenger/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
    children: [
      {
        path: "edit",
        name: "EventEdit",
        props: true,
        component: EventEditView,
      },
    ],
  },
  {
    path: "/airline/:id",
    name: "AirlineDetails",
    component: AirlineDetails,
    props: true,
  },

  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: ResourceNotFound,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
