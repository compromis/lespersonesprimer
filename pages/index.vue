<template>
  <div class="container">
    <div>
      <bloc-logo />
      <compromis-logo />
      <animated-text />
    </div>
  </div>
</template>

<script>
import AnimatedText from '~/components/AnimatedText.vue'
import BlocLogo from '~/components/BlocLogo.vue'
import CompromisLogo from '~/components/CompromisLogo.vue'

export default {
  components: {
    AnimatedText,
    BlocLogo,
    CompromisLogo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
