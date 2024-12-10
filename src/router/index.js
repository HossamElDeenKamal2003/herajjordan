import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import detailsPage from "../views/showDetails.vue";
import profileComponent from "../views/profileComponent.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: detailsPage
  },
  {
    path: '/profile',
    name: "profileComponent",
    component: profileComponent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
