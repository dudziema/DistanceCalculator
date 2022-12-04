module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/stylesheets/vars/index.scss";
        @import "@/assets/stylesheets/mixins/devices.scss";
        @import "@/assets/stylesheets/base/reset.scss";`
      }
    }
  }
}
