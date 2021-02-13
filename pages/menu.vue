<template>
  <main>
    <section class="bg-black text-white font-serif py-12 lg:py-24">
      <h1
        class="mx-auto text-center text-5xl font-semibold sm:text-6xl md:text-7xl"
      >
        Menu
      </h1>
      <p
        class="mt-4 max-w-xs mx-auto text-lg leading-7 tracking-tight font-medium sm:max-w-lg md:max-w-2xl md:text-xl lg:text-2xl lg:mt-8"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veniam sapiente odit aliquid atque soluta reprehenderit earum
        unde, iusto fuga ad numquam quisquam cum aperiam nostrum,
        tenetur temporibus perspiciatis modi. Nesciunt! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. A, beatae. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Sit,
        maxime! Molestias aspernatur officia nostrum, at animi ducimus
        fugit. Eius, mollitia?
      </p>
    </section>
    <section
      class="max-w-xs mx-auto py-20 font-serif sm:max-w-lg md:max-w-2xl lg:max-w-4xl lg:py-24"
    >
      <h1 class="italic font-medium text-3xl md:text-4xl lg:text-5xl">
        Breakfast
        <span class="not-italic">&#8212;</span>
        Served daily from
        <span>12 <span class="not-italic">&#8212;</span> 4 pm</span>
      </h1>
      <div
        role="presentation"
        class="py-6 border-b border-black border-opacity-25 lg:border-b-2"
      ></div>
      <div
        v-for="food in breakfastMenu"
        :key="food.title"
        class="mt-14 lg:hidden"
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
            <p class="text-lg leading-6 mt-4 font-medium">
              {{ food.description }}
            </p>
          </figcaption>
        </figure>
      </div>
      <aside
        class="hidden lg:grid lg:mt-16 grid-cols-2 auto-rows-fr gap-x-4 gap-y-16"
      >
        <div
          v-for="food in breakfastMenu"
          :key="food.title"
          class="w-full h-full row-span-1 col-span-1"
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
              <p class="text-lg leading-6 mt-4 font-medium">
                {{ food.description }}
              </p>
            </figcaption>
          </figure>
        </div>
      </aside>
    </section>
    <section
      class="max-w-xs mx-auto py-20 font-serif sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
    >
      <h1
        class="italic font-medium text-3xl capitalize md:text-4xl lg:text-5xl"
      >
        Lunch
        <span class="not-italic">&#8212;</span>
        Served daily from
        <span>7 <span class="not-italic">&#8212;</span> 11 am</span>
      </h1>
      <div
        role="presentation"
        class="py-6 border-b border-black border-opacity-25"
      ></div>
      <div
        v-for="food in luncMenu"
        :key="food.title"
        class="mt-14 lg:hidden"
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
            <p class="text-lg leading-6 mt-4 font-medium">
              {{ food.description }}
            </p>
          </figcaption>
        </figure>
      </div>
      <aside
        class="hidden lg:grid lg:mt-16 grid-cols-2 auto-rows-fr gap-x-4 gap-y-16"
      >
        <div
          v-for="food in luncMenu"
          :key="food.title"
          class="w-full h-full row-span-1 col-span-1"
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
              <p class="text-lg leading-6 mt-4 font-medium">
                {{ food.description }}
              </p>
            </figcaption>
          </figure>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
import { useAsync, useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    var { $content } = useContext();
    var breakfastMenu = useAsync(
      async () =>
        await $content("food-data")
          .where({ type: "breakfast" })
          .fetch()
    );
    var luncMenu = useAsync(
      async () =>
        await $content("food-data").where({ type: "lunch" }).fetch()
    );
    return { breakfastMenu, luncMenu };
  },
};
</script>

<style></style>
