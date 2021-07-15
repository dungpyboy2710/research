import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import TutorialsList from "./components/TutorialsList.vue"
import TutorialDetails from "./components/TutorialDetails.vue"
import AddTutorial from "./components/AddTutorial.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: TutorialsList,
  },
  {
    path: "/tutorials",
    component: TutorialsList,
  },
  {
    path: "/tutorials/:id",
    component: TutorialDetails,
  },
  {
    path: "/add",
    component: AddTutorial,
  },
];

const history = createWebHistory();
const router = createRouter({ history, routes });

export default router;
