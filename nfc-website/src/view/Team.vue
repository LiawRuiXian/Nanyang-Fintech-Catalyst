<script setup>
const teamMembers = [
  { name: "John Tan", role: "President", img: "/team/john.jpg" },
  { name: "Sarah Lee", role: "Vice President", img: "/team/sarah.jpg" },
  { name: "Michael Ong", role: "Tech Lead", img: "/team/michael.jpg" },
  { name: "Emily Chen", role: "Project Manager", img: "/team/emily.jpg" },
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-center text-blue-700 mb-10">Meet Our Team</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-xl transition"
      >
        <img
          :src="member.img"
          alt="Profile"
          class="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h2 class="text-lg font-semibold">{{ member.name }}</h2>
        <p class="text-gray-500">{{ member.role }}</p>
      </div>
    </div>
  </section>
</template>
