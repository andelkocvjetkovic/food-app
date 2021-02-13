<template>
  <main class="font-serif">
    <div class="h-screen w-full">
      <img
        class="w-full h-full object-center object-cover"
        :src="`/team-img/${teamData.imgRestaurant}`"
        :alt="teamData.title"
      />
    </div>
    <section
      class="max-w-xs mx-auto mt-12 sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
    >
      <h1 class="text-3xl font-semibold">{{ teamData.title }}</h1>
      <p class="text-xl leading-6 mt-6">
        {{ teamData.description }}
      </p>
    </section>
    <article class="max-w-xs mx-auto py-24 sm:max-w-lg lg:max-w-4xl">
      <div class="relative pb-3/4 mt-6 lg:pb-2/4" role="img">
        <img
          class="absolute inset-0 w-full h-full object-center object-cover"
          src="/team-img/cheef.jpg"
          alt="our cheef"
        />
      </div>
      <nuxt-content
        class="mt-14 prose prose-sm sm:prose lg:prose-xl xl:prose-2xl mx-auto"
        :document="teamData"
      ></nuxt-content>
      <div class="relative pb-3/4 lg:pb-2/4 mt-6" role="img">
        <img
          class="absolute inset-0 w-full h-full object-center object-cover"
          src="/team-img/team.jpg"
          alt="Our team"
        />
      </div>
    </article>
  </main>
</template>

<script>
import { useAsync, useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    var { $content } = useContext();
    var teamData = useAsync(
      async () => await $content("our-team").fetch()
    );

    return {
      teamData,
    };
  },
};
</script>

<style></style>
