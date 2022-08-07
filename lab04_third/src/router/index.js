import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetails from "../views/EventDetailView.vue";
import AirlineDetails from "../views/AirlineDetails.vue";
import PageNotFound from "../views/events/PageNotFound.vue";
import ResourceNotFound from "../views/events/ResourceNotFound.vue";
import EventEditView from "@/views/events/EventEditView.vue";
import NProgress from "nprogress";
import EventService from "@/services/EventService.js";
import GStore from "@/store";

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
    beforeEnter: (to) => {
      // <- api here
      return EventService.getEventsAir(to.params.id)
        .then((response) => {
          //need data here
          GStore.event = response.data; // store the event
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: "404Resource",
              params: { resource: "event" },
            };
          } else {
            return console.log(error);
          }
        });
    },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
