<template>
  <main>
    <article>
      <div
        class="h-screen w-full md:h-0 md:relative md:pb-5/6 lg:pb-4/6"
        role="img"
      >
        <img
          class="w-full h-full object-cover object-center lg:object-bottom md:absolute md:inset-0"
          src="hero-bg-home.jpg"
          alt="Bifftek on the table"
        />
      </div>
    </article>
    <article class="bg-white text-black font-serif py-20">
      <h1
        class="max-w-xs mx-auto text-3xl font-medium leading-7 tracking-wide sm:max-w-lg md:max-w-2xl lg:max-w-4xl lg:text-4xl"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eligendi rerum repellat repudiandae earum, blanditiis, ut
        doloribus consectetur voluptatem quibusdam beatae, placeat
        veritatis qui nam cupiditate impedit laboriosam quasi enim
        magnam rem. Voluptas eveniet, illo ducimus nostrum voluptate
        consectetur voluptates deleniti.
      </h1>
    </article>
    <article class="bg-black">
      <section
        class="max-w-xs mx-auto text-white font-serif pb-24 sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
      >
        <h1
          class="italic font-semibold text-3xl capitalize pt-24 sm:text-4xl"
        >
          Our favorite foods
          <span class="not-italic">&#8212;</span>
        </h1>
        <div
          v-for="food in foodData"
          :key="food.title"
          class="mt-20 lg:hidden"
        >
          <figure>
            <div class="relative pb-2/3">
              <img
                class="absolute inset-0 w-full h-full object-cover object-center"
                :src="`/food-img/${food.img}`"
                :alt="food.title"
              />
            </div>
            <figcaption>
              <h2 class="text-2xl mt-6 font-semibold">
                {{ food.title }}
              </h2>
              <p class="text-lg leading-6 mt-4">
                {{ food.description }}
              </p>
            </figcaption>
          </figure>
        </div>
        <aside
          class="hidden lg:grid grid-cols-2 auto-rows-fr gap-x-4 gap-y-8 mt-24"
        >
          <div
            v-for="food in foodData"
            :key="food.title"
            class="p-1 w-1/2 lg:w-full row-span-1 col-span-1"
          >
            <figure>
              <div class="relative pb-2/3">
                <img
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  :src="`/food-img/${food.img}`"
                  :alt="food.title"
                />
              </div>
              <figcaption>
                <h2 class="text-2xl mt-6 font-semibold">
                  {{ food.title }}
                </h2>
                <p class="text-lg leading-6 mt-4">
                  {{ food.description }}
                </p>
              </figcaption>
            </figure>
          </div>
        </aside>
        <nuxt-link
          to="/menu"
          class="inline-block mt-24 italic font-semibold text-3xl capitalize border-b border-white transform transition-opacity hover:opacity-80 sm:text-4xl lg:text-5xl"
        >
          Our Menu
          <span class="not-italic">&#8212;</span>
        </nuxt-link>
      </section>
    </article>
    <article class="py-24">
      <section
        class="text-black font-serif max-w-xs mx-auto space-y-20 font-semibold sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
      >
        <div v-for="review in reviews" :key="review.author">
          <h4 class="text-xl lg:text-2xl">
            <q>{{ review.description }}</q>
          </h4>
          <div class="mt-4">
            <h5 class="text-base lg:text-lg">{{ review.author }}</h5>
            <h5 class="text-sm lg:text-base">
              &#8212; {{ review.magazin }}
            </h5>
          </div>
        </div>
        <nuxt-link
          to="/"
          class="inline-block mt-24 italic font-semibold text-3xl capitalize border-b border-black transform transition-opacity hover:opacity-50 sm:text-4xl lg:text-5xl"
        >
          Read more reviews
          <span class="not-italic">&#8212;</span>
        </nuxt-link>
      </section>
    </article>
  </main>
</template>

<script>
import { useAsync, useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    var { $content } = useContext();
    var foodData = useAsync(async () => {
      return await $content("food-data").limit(6).fetch();
    });
    var reviews = useAsync(async () => {
      return await $content("reviews").limit(3).fetch();
    });
    return {
      foodData,
      reviews,
    };
  },
};
</script>

<style></style>
