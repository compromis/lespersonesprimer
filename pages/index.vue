<template>
  <div class="container mx-auto h-screen flex lg:items-center justify-center text-white">
    <transition name="slide" mode="out-in">
      <div v-if="!showModal" class="relative grid grid-cols-1 gap-6 lg:grid-cols-2 w-full m-4 z-20">
        <h2 class="text-orange pt-2 font-display text-5xl lg:text-6xl uppercase font-bold leading-none">
          Les <br class="hidden lg:block"> persones <br class="hidden lg:block"> Primer
        </h2>
        <animated-text class="lg:text-right lg:ml-auto min-h-15" />
        <div class="lg:col-span-2">
          <button class="appearance-none inline-flex flex-row text-xl mb-auto items-center origin-center transition-transform duration-200 transform scale-100 hover:scale-110 focus:outline-none focus:shadow-outline" @click="toggleModal">
            <span class="text-3xl mr-2">(>)</span> Vídeo
          </button>
        </div>
        <div class="flex flex-col mt-auto row-start-6 lg:row-start-3 mb-4 lg:mb-0">
          <div>
            <a href="https://compromis.net/coronavirus" target="_blank">
              <mask-icon class="h-4 w-4 mr-1 inline-block" />
              Informació sobre Covid-19
            </a>

            <div class="flex flex-col md:flex-row md:items-end mt-4">
              <a href="https://bloc.compromis.net" target="_blank">
                <bloc-logo class="h-8 current-color mb-3 md:mb-0 md:mr-4" />
              </a>
              <a href="https://compromis.net" target="_blank">
                <compromis-logo class="h-8 current-color mb-3 md:mb-0 md:mr-4" mono />
              </a>
              <a href="https://jovespv.org" target="_blank">
                <jovespv-logo class="h-8 current-color mb-3 md:mb-0 md:mr-4" mono />
              </a>
            </div>
          </div>
        </div>
        <div class="lg:ml-auto lg:text-right">
          <div class="text-xl mb-4">
            Apunta’t a la campanya
          </div>
          <signup-form />
        </div>
      </div>
      <div v-if="showModal" class="flex items-center justify-center z-30">
        <button class="text-5xl appearance-none text-white absolute top-0 right-0 w-16 focus:outline-none focus:shadow-outline" @click="toggleModal">
          ×
        </button>
        <iframe
          src="https://www.youtube.com/embed/md9HY2KhN5o"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-screen h-auto py-16 lg:h-screen lg:px-20"
        />
      </div>
    </transition>
    <video-background />
  </div>
</template>

<script>
import AnimatedText from '~/components/AnimatedText.vue'
import BlocLogo from '~/components/BlocLogo.vue'
import CompromisLogo from '~/components/CompromisLogo.vue'
import JovespvLogo from '~/components/JovespvLogo.vue'
import SignupForm from '~/components/SignupForm.vue'
import VideoBackground from '~/components/VideoBackground.vue'
import MaskIcon from '~/components/icons/MaskIcon.vue'

export default {
  components: {
    AnimatedText,
    BlocLogo,
    CompromisLogo,
    JovespvLogo,
    SignupForm,
    VideoBackground,
    MaskIcon
  },

  data () {
    return {
      showModal: false
    }
  },

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
  a {
    @apply text-white transition-all duration-150;
  }

  a:hover {
    @apply opacity-75;
  }

  .slide-enter-active {
    @apply transition-all duration-300;
  }

  .slide-leave-active {
    @apply transition-all duration-100;
  }

  .slide-enter, .slide-leave-to {
    @apply opacity-0 -translate-y-6;
  }

  @media (min-width: 1280px) {
    html {
      font-size: 1.25rem;
    }
  }
</style>
