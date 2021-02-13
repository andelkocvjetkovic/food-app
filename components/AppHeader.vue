<template>
  <header
    class="px-2 py-4 flex justify-center items-center relative z-10 md:py-6 lg:items-center lg:justify-between lg:px-8 lg:font-sans lg:uppercase lg:py-4 xl:px-12 2xl:px-16"
  >
    <nuxt-link to="/" class="w-1/2 lg:w-1/4">
      <app-logo class="block w-full h-full"></app-logo>
    </nuxt-link>
    <!-- just for mobile -->
    <button
      class="lg:hidden w-9 h-4 absolute right-2 sm:right-4 md:right-6 z-50 focus:outline-none"
      @click="toggleModal"
    >
      <app-ham-menu
        ref="hamMenu"
        class="block h-full w-full"
      ></app-ham-menu>
    </button>
    <!-- just for mobile -->
    <transition
      :css="false"
      mode="out-in"
      @before-enter="initAnimation"
      @enter="enterAnimation"
      @leave="leaveAnimation"
    >
      <nav
        v-if="isModalOpen"
        class="text-3xl font-serif fixed z-20 inset-0 bg-white text-black font-normal h-screen w-screen"
      >
        <ul
          class="flex flex-col justify-start items-start px-6 py-16 w-full h-full space-y-6"
          @click="closeModal"
        >
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li><nuxt-link to="/menu">Menu</nuxt-link></li>
          <li>
            <nuxt-link to="/reservation">Reservation</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/team">Our Team</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
    <ul
      class="hidden lg:flex order-first space-x-6 font-medium xl:text-xl"
    >
      <li
        class="relative"
        @dragstart.prevent.stop
        @mouseenter.stop="mouseOver"
        @mouseleave.stop="mouseLeave"
      >
        <nuxt-link class="focus:outline-none" to="/">Home</nuxt-link>
        <div
          role="presentation"
          class="w-full h-px absolute bottom-0 bg-black opacity-0 invisible transform scale-x-0"
        ></div>
      </li>
      <li
        class="relative"
        @dragstart.prevent.stop
        @mouseenter.stop="mouseOver"
        @mouseleave.stop="mouseLeave"
      >
        <nuxt-link to="/menu">Menu</nuxt-link>
        <div
          role="presentation"
          class="w-full h-px absolute bottom-0 bg-black opacity-0 invisible transform scale-x-0"
        ></div>
      </li>
    </ul>
    <ul class="hidden lg:flex space-x-6 xl:text-xl font-medium">
      <li
        class="relative"
        @dragstart.prevent.stop
        @mouseenter.stop="mouseOver"
        @mouseleave.stop="mouseLeave"
      >
        <nuxt-link to="/reservation">Reservation</nuxt-link>
        <div
          role="presentation"
          class="w-full h-px absolute bottom-0 bg-black opacity-0 invisible transform scale-x-0"
        ></div>
      </li>
      <li
        class="relative"
        @dragstart.prevent.stop
        @mouseenter.stop="mouseOver"
        @mouseleave.stop="mouseLeave"
      >
        <nuxt-link to="/team">Team</nuxt-link>
        <div
          role="presentation"
          class="w-full h-px absolute bottom-0 bg-black opacity-0 invisible transform scale-x-0"
        ></div>
      </li>
    </ul>
  </header>
</template>

<script>
import { onMounted, ref, useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    var { store } = useContext();
    var isModalOpen = ref(false);
    var gsap;
    var hamMenu = ref(null);
    var tlHamIcon;
    function toggleModal() {
      if (isModalOpen.value === true) {
        tlHamIcon.reverse();
      } else {
        tlHamIcon.play();
      }
      isModalOpen.value = !isModalOpen.value;
    }
    onMounted(() => {
      gsap = window.$nuxt.$gsap;
      var first = hamMenu.value.$refs.first;
      tlHamIcon = gsap.timeline({
        defaults: { ease: "back.in(1.7)" },
        paused: true,
      });
      tlHamIcon.to(first, {
        x: -50,
        autoAlpha: 0,
        duration: 0.2,
      });
    });
    function initAnimation(el) {
      gsap.set(el, {
        yPercent: -100,
        autoAlpha: 0,
      });
    }
    function enterAnimation(el, done) {
      gsap.to(el, {
        yPercent: 0,
        autoAlpha: 1,
        delay: 0.1,
        duration: 0.3,
        onComplete: () => {
          done();
          store.commit("togglModal", isModalOpen.value);
        },
      });
    }
    function leaveAnimation(el, done) {
      gsap.to(el, {
        yPercent: -100,
        autoAlpha: 0,
        delay: 0.1,
        duration: 0.3,
        onComplete: () => {
          done();
          store.commit("togglModal", isModalOpen.value);
        },
      });
    }
    function closeModal(e) {
      if (e.target.tagName == "A") {
        toggleModal();
      }
    }
    function mouseOver(e) {
      gsap.to(e.currentTarget.lastChild, {
        autoAlpha: 1,
        scaleX: 1,
        duration: 0.15,
        ease: "power4.out",
      });
    }
    function mouseLeave(e) {
      gsap.to(e.currentTarget.lastChild, {
        transformOrigin: "0% 100%",
        scaleX: 0,
        autoAlpha: 0,
        duration: 0.15,
        ease: "power4.in",
      });
    }
    return {
      hamMenu,
      isModalOpen,
      toggleModal,
      gsap,
      initAnimation,
      enterAnimation,
      leaveAnimation,
      tlHamIcon,
      closeModal,
      mouseOver,
      mouseLeave,
    };
  },
};
</script>

<style></style>
