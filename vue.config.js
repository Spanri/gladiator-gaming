module.exports = {
  assetsDir: "./",
  // publicPath: '/',
  publicPath: process.env.NODE_ENV === "production" ? "/westb/" : "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_general.scss";
          @import "@/assets/scss/mixins/_header.scss";
        `
      }
    }
  }
};
