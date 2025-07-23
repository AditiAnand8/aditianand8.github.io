<script setup lang="ts">
defineProps<{
  msg: string
}>()
// @ts-ignore
import { portfolioContent } from '../assets/about'

const portfolio = portfolioContent
</script>

<template>
  <div class="greetings">
    <h2 class="green font-mono">{{ msg }} | {{ portfolio.about.location }}</h2>
    <p>
      I'm a software engineer with a passion for building innovative solutions that
      make a difference. I'm currently working at Rivian as a Senior Software Engineer.
      I'm a quick learner and I'm always looking to improve my skills.
    </p>
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
