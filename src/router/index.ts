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
    path: "/users/:nickname",
    component: () => import("@/views/User.vue"),
    props: true,
    meta: {
      title: "Профиль"
    },
    children: [
      {
        path: "",
        redirect: "games",
        meta: {
          title: "Gladiator Gaming, профиль, игры"
        }
      },
      {
        path: "games",
        name: "games",
        component: () => import("@/components/Profile/Games.vue"),
        meta: {
          title: "Gladiator Gaming, профиль, игры"
        }
      },
      {
        path: "finances",
        name: "finances",
        component: () => import("@/components/Profile/Finances.vue"),
        meta: {
          title: "Gladiator Gaming, профиль, финансы"
        }
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: "Gladiator Gaming, вход"
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/Signup.vue"),
    meta: {
      title: "Gladiator Gaming, регистрация"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "Gladiator Gaming, О сайте"
    }
  },
  {
    path: "*",
    name: "other",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "Gladiator Gaming, О сайте"
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
