import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Главная"
    }
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      title: "Профиль"
    },
    children: [
      {
        path: "",
        redirect: "games",
        meta: {
          title: "Профиль, игры"
        }
      },
      {
        path: "games",
        name: "games",
        component: () => import("@/components/Profile/Games.vue"),
        meta: {
          title: "Профиль, игры"
        }
      },
      {
        path: "finances",
        name: "finances",
        component: () => import("@/components/Profile/Finances.vue"),
        meta: {
          title: "Профиль, финансы"
        }
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "О сайте"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'Gladiator Gaming';
  });
});

export default router;
