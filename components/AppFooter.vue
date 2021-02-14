<template>
  <footer class="bg-black text-white font-serif py-24">
    <article
      class="max-w-xs mx-auto space-y-20 sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
    >
      <section>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl">Location</h2>
        <address class="mt-4 text-lg sm:text-base lg:text-lg">
          1531 Orphan Road Crivitz, Wisconsin 54114 USA
        </address>
      </section>
      <section>
        <h2 class="text-3x sm:text-4xl lg:text-5xl">Hours</h2>
        <p class="mt-4 text-lg sm:text-base lg:text-lg">
          Thu - Thu, 8 am - 10 pm <br />Fri - Sun, 8 am - 11 pm
        </p>
      </section>
      <section>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl">Contact</h2>
        <a
          class="block mt-4 text-lg sm:text-xl lg:text-2xl"
          href="tel:+0000000000"
          >0000000000</a
        >
        <a
          class="block text-lg sm:text-xl lg:text-2xl"
          href="mailto:and3lko@gmail.com"
          >and3lko@gmail.com</a
        >
      </section>
      <nuxt-link
        to="/reservation"
        class="inline-block mt-24 italic font-semibold text-3xl capitalize border-b border-white transform transition-opacity hover:opacity-50 sm:text-4xl lg:text-5xl"
      >
        Make a reservation
        <span class="not-italic">&#8212;</span>
      </nuxt-link>
      <section class="text-2xl sm:text-3xl">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> |
        <a href="#">Twitter</a>
      </section>
      <div class="text-gray-100 text-center">
        Powerd by Andelko Cvjetkovic
      </div>
    </article>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
