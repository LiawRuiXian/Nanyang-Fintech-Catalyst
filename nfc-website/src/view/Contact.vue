<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)

const handleSubmit = (e) => {
  e.preventDefault()
  // Here you can integrate Formspree or EmailJS later
  success.value = true
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-center text-blue-700 mb-8">Contact Us</h1>
    <form @submit="handleSubmit" class="bg-white shadow-lg rounded-xl p-8 border">
      <div class="mb-4">
        <label class="block text-gray-700">Name</label>
        <input v-model="name" type="text" class="w-full p-3 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input v-model="email" type="email" class="w-full p-3 border rounded-lg" required />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Message</label>
        <textarea v-model="message" class="w-full p-3 border rounded-lg" rows="4" required></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
      >
        Send Message
      </button>

      <p v-if="success" class="text-green-600 mt-4">
        ✅ Thank you! We’ve received your message.
      </p>
    </form>
  </section>
</template>
