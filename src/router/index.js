import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Projects from "../views/portifolio/Projects.vue";
import Arerorero from "../views/portifolio/Arerorero.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/projects",
        name: "projects",
        component: Projects,
      },
      {
        path: "/",
        name: "about-arerorero",
        component: Arerorero,
      },
    ],
  },
  // error 404
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
