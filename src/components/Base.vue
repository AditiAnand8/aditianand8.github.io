<script setup lang="ts">
defineProps<{
  msg: string
}>()
import { portfolioContent } from '../../dist/assets/about';
const portfolio = portfolioContent;
</script>

<template>
  <div class="greetings">
    <h2 class="green font-mono">{{ msg }} | {{ portfolio.about.location }}</h2>
    <h3>
      Turning coding chaos into smooth sailing, managing teams with style, and mentoring like it's a game show where everyone wins. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
