<script setup>
const events = [
  { date: "12 Sep 2025", title: "Fintech 101 Workshop", desc: "An introductory workshop on fintech trends and careers." },
  { date: "30 Sep 2025", title: "Trading Strategy Bootcamp", desc: "Hands-on experience building quantitative trading strategies." },
  { date: "15 Oct 2025", title: "Blockchain Innovation Talk", desc: "Insights into Web3, DeFi, and the future of finance." },
]
</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-center text-blue-700 mb-10">Upcoming Events</h1>
    <div class="space-y-6">
      <div
        v-for="event in events"
        :key="event.title"
        class="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition"
      >
        <p class="text-blue-600 font-semibold">{{ event.date }}</p>
        <h2 class="text-xl font-semibold">{{ event.title }}</h2>
        <p class="text-gray-500">{{ event.desc }}</p>
      </div>
    </div>
  </section>
</template>
