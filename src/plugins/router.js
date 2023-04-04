import { createRouter, createWebHistory } from "vue-router";
import AllerSimple from "../components/HeroForms/AllerSimple.vue";
import AllerRetour from "../components/HeroForms/AllerRetour.vue";
import Etape1 from "../views/AllerSimple/Etape1.vue";
import ValiderEtContinue from "../components/AllerSimple/ValiderEtContinue.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "",
        component: AllerSimple,
      },
      {
        path: "aller-retour",
        component: AllerRetour,
      },
      {
        path: "circuit",
        component: () => import("../components/HeroForms/Circuit.vue"),
      },
      {
        path: "transfert",
        component: () => import("../components/HeroForms/Transfert.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/login-transporteur",
    name: "login-transporteur",
    component: () => import("../views/LogInTransporteur.vue"),
  },
  {
    path: "/etape1",
    name: "etape1",
    component: Etape1,
  },
  {
    path: "/etape2",
    name: "etape2",
    component: () => import("../views/AllerSimple/Etape2.vue"),
    children: [
      {
        path: "",
        component: ValiderEtContinue,
      },
      {
        path: "4",
        component: () => import("../components/AllerSimple/LogIn.vue"),
      },
    ],
  },
  {
    path: "/aller-retour/etape1",
    name: "aller-retour etape1",
    component: () => import("../views/AllerRetour/Etape1.vue"),
  },
  {
    path: "/aller-retour/etape2",
    name: "aller-retour etape2",
    component: () => import("../views/AllerRetour/Etape2.vue"),
    children: [
      {
        path: "",
        component: ()=> import("../components/AllerRetour/ValiderEtContinue.vue"),
      },
      {
        path: "4",
        component: () => import("../components/AllerRetour/LogIn.vue"),
      },
    ],
  },
  {
    path: "/circuit/etape1",
    name: "circuit etape1",
    component: () => import("../views/Circuit/Etape1.vue"),
  },
  {
    path: "/circuit/etape2",
    name: "circuit etape2",
    component: () => import("../views/Circuit/Etape2.vue"),
    children: [
      {
        path: "",
        component: ()=> import("../components/Circuit/ValiderEtContinue.vue"),
      },
      {
        path: "4",
        component: () => import("../components/Circuit/LogIn.vue"),
      },
    ],
  },
  {
    path: "/transfert/etape1",
    name: "transfert etape1",
    component: () => import("../views/Transfert/Etape1.vue"),
  },
  {
    path: "/transfert/etape2",
    name: "transfert etape2",
    component: () => import("../views/Transfert/Etape2.vue"),
    children: [
      {
        path: "",
        component: ()=> import("../components/Transfert/ValiderEtContinue.vue"),
      },
      {
        path: "4",
        component: () => import("../components/Transfert/LogIn.vue"),
      },
    ],
  },
  {
    path: "/particulier",
    name: "particulier",
    component: () => import("../views/Particulier/Particulier.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
