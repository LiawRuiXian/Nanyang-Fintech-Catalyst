<script setup>
const projects = [
  { title: "Algo Trading Bot", desc: "A Python-based trading bot leveraging Alpaca API." },
  { title: "Blockchain Explorer", desc: "A web-based explorer for analyzing on-chain activity." },
  { title: "AI Credit Scoring", desc: "Machine learning model to predict creditworthiness." },
]
</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-blue-700 mb-10 text-center">Our Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transition"
      >
        <h2 class="text-xl font-semibold text-blue-600 mb-2">{{ project.title }}</h2>
        <p class="text-gray-500">{{ project.desc }}</p>
      </div>
    </div>
  </section>
</template>
