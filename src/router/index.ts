import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Главная",
      myProfile: true,
      otherProfile: false
    }
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile.vue"),
    meta: {
      title: "Профиль",
      myProfile: true,
      otherProfile: false
    },
    children: [
      {
        path: "",
        redirect: "games",
        meta: {
          title: "Профиль, игры",
          myProfile: true,
          otherProfile: false
        }
      },
      {
        path: "games",
        name: "games",
        component: () => import("@/components/Profile/Games.vue"),
        meta: {
          title: "Профиль, игры",
          myProfile: true,
          otherProfile: false
        }
      },
      {
        path: "finances",
        name: "finances",
        component: () => import("@/components/Profile/Finances.vue"),
        meta: {
          title: "Профиль, финансы",
          myProfile: true,
          otherProfile: false
        }
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "О сайте",
      myProfile: false,
      otherProfile: false
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
