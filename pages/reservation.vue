<template>
  <main
    class="max-w-xs mx-auto font-serif mt-20 sm:max-w-lg lg:max-w-4xl"
  >
    <section>
      <h2 class="text-3xl font-semibold lg:text-4xl">Reservations</h2>
      <p class="mt-9 font-medium lg:max-w-xl lg:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate recusandae nesciunt similique qui! Deleniti
        consequuntur facere qui dicta nesciunt necessitatibus.
      </p>
    </section>
    <validation-observer v-slot="{ handleSubmit }">
      <form
        ref="myform"
        name="reservation"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="py-12"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="reservation" />
        <fieldset class="mt-12">
          <legend class="text-xl">
            Name <span aria-hidden="true" class="text-base">*</span>
          </legend>
          <div class="flex space-x-2 mt-4">
            <div class="w-1/2">
              <validation-provider
                v-slot="{ errors }"
                mode="eager"
                rules="min:3|required|max:25"
                name="First name"
              >
                <label for="firstName"
                  ><input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    name="firstName"
                    class="w-full p-2 bg-gray-100 ring-1 ring-gray-200"
                  /><span class="capitalize text-sm"
                    >First name</span
                  ></label
                >
                <span class="block text-sm text-red-500">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
            <div class="w-1/2">
              <validation-provider
                v-slot="{ errors }"
                mode="eager"
                rules="min:3|required|max:25"
                name="Last name"
              >
                <label for="lastName"
                  ><input
                    id="lastName"
                    v-model="form.lastName"
                    class="w-full p-2 bg-gray-100 ring-1 ring-gray-200"
                    type="text"
                    name="lastName"
                  /><span class="capitalize text-sm"
                    >Last name</span
                  ></label
                >
                <span class="block text-sm text-red-500">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
          </div>
        </fieldset>
        <div class="mt-12">
          <validation-provider
            v-slot="{ errors }"
            v-model="form.phoneNumber"
            mode="eager"
            name="Phone number"
            rules="required"
          >
            <label class="block text-xl" for="phoneNumber"
              >Phone Number <span class="text-base">*</span></label
            >
            <input
              id="phoneNumber"
              v-model="form.phoneNumber"
              class="mt-4 block w-full p-2 bg-gray-100 ring-1 ring-gray-200"
              type="tel"
              name="phoneNumber"
            />
            <span class="block text-sm text-red-500">{{
              errors[0]
            }}</span>
          </validation-provider>
        </div>
        <div class="mt-12">
          <validation-provider
            v-slot="{ errors }"
            mode="eager"
            rules="email"
            name="Email address"
          >
            <label class="block text-xl" for="email"
              >Email address</label
            >
            <input
              id="email"
              v-model="form.emailAddres"
              class="mt-4 block w-full p-2 bg-gray-100 ring-1 ring-gray-200"
              type="email"
              name="email"
            />
            <span class="block text-sm text-red-500">{{
              errors[0]
            }}</span>
          </validation-provider>
        </div>
        <fieldset class="mt-12">
          <legend class="text-2xl">
            Data <span class="text-base">*</span>
          </legend>
          <div class="flex space-x-2 mt-4">
            <div class="w-1/4">
              <validation-provider
                v-slot="{ errors }"
                mode="eager"
                rules="between:1,12|required"
                name="Month"
              >
                <label for="month"
                  ><input
                    id="month"
                    v-model="form.month"
                    class="w-full p-2 bg-gray-100 ring-1 ring-gray-200"
                    type="text"
                    name="month"
                  /><span>MM</span></label
                >
                <span class="block text-sm text-red-500">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
            <div class="w-1/4">
              <validation-provider
                v-slot="{ errors }"
                mode="eager"
                rules="between:1,31|required"
                name="Day"
              >
                <label for="day"
                  ><input
                    id="day"
                    v-model="form.day"
                    class="w-full p-2 bg-gray-100 ring-1 ring-gray-200"
                    type="text"
                    name="day"
                  /><span>DD</span></label
                ><span class="block text-sm text-red-500">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
            <div class="w-2/4">
              <validation-provider
                v-slot="{ errors }"
                mode="eager"
                rules="between:2020,2030|required"
                name="Year"
              >
                <label for="year"
                  ><input
                    id="year"
                    v-model="form.year"
                    class="w-full p-2 bg-gray-100 ring-1 ring-gray-200"
                    type="text"
                    name="year"
                  /><span>YYYY</span></label
                ><span class="block text-sm text-red-500">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
          </div>
        </fieldset>
        <div class="mt-12">
          <validation-provider
            v-slot="{ errors }"
            mode="eager"
            name="Number of Guests"
            rules="positive|required"
          >
            <label class="block text-xl" for="nmbGuests"
              >Number of Guests
              <span class="text-base">*</span></label
            >
            <input
              id="nmbGuests"
              v-model="form.numberOfGuests"
              class="mt-4 block w-full p-2 bg-gray-100 ring-1 ring-gray-200"
              type="text"
              name="nmbGuests"
            />
            <span class="block text-sm text-red-500">{{
              errors[0]
            }}</span>
          </validation-provider>
        </div>
        <button
          class="mt-12 px-6 py-2 lg:px-16 lg:py-3 bg-white border-2 border-black font-sans uppercase transform transition-colors hover:bg-black hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </validation-observer>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        emailAddres: "",
        phoneNumber: "",
        day: "",
        month: "",
        year: "",
        numberOfGuests: "",
      },
    };
  },
  methods: {
    async onSubmit(e) {
      try {
        await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: this.encode({
            "form-name": this.$refs.myform.getAttribute("name"),
            ...this.form,
          }),
        });
        alert(
          "Your reservation has been sucessfuly sent. Thank you "
        );
      } catch (e) {
        alert(e);
      } finally {
        this.$router.push("/");
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              data[key]
            )}`
        )
        .join("&");
    },
  },
};
</script>

<style></style>
