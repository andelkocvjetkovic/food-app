<template>
  <div>
    <app-header></app-header>
    <Nuxt />
    <app-footer></app-footer>
  </div>
</template>
<script>
import { computed, useContext, watch } from "@nuxtjs/composition-api";
export default {
  setup() {
    var { store } = useContext();
    var isOpenModal = computed(() => store.getters.isModalOpen);
    watch(isOpenModal, (newValue) => {
      if (newValue) {
        const scrollY = window.screenY;
        const body = document.body;
        body.style.position = "fixed";
        body.style.top = `-${scrollY}`;
      } else {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = "";
        body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    });
    return {};
  },
};
</script>
<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
body {
  @apply min-w-full;
}

.nuxt-link-exact-active {
  @apply font-bold;
  @apply italic;
}
</style>
