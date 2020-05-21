<template>
  <div class="container mx-auto h-screen flex lg:items-center justify-center">
    <div class="relative grid grid-cols-1 gap-6 lg:grid-cols-2 m-4 z-20">
      <h2 class="pt-2 font-display text-white text-5xl lg:text-6xl uppercase font-bold leading-none">
        Les <br class="hidden lg:block"> persones <br class="hidden lg:block"> Primer
      </h2>
      <animated-text class="lg:text-right max-w-md text-white min-h-15" />
      <div class="lg:col-span-2 text-white">
        <a href="#" class="flex flex-row text-xl mb-auto items-center">
          <svg
            version="1.1"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 82 82"
            xml:space="preserve"
            class="mr-3 fill-current"
          >
            <g transform="translate(0,-952.36218)">
              <path
                d="M41,952.4c-22.6,0-41,18.4-41,41c0,22.6,18.4,41,41,41s41-18.4,41-41C82,970.7,63.6,952.4,41,952.4L41,952.4z M41,956.4
                c20.5,0,37,16.5,37,37c0,20.5-16.5,37-37,37s-37-16.5-37-37S20.5,956.4,41,956.4L41,956.4z M33.1,972.4c-1.1,0-2.2,0.3-3.1,0.9
                c-1.8,1.1-3,3.2-3,5.6c0,0,0,0,0,0.1v28.8c0,0,0,0,0,0c0.1,2.4,1.2,4.5,3,5.6c1.8,1.1,4.2,1.3,6.3,0.1c0,0,0,0,0,0L59.9,999
                c1.9-1.2,3.1-3.3,3.1-5.7c0-2.4-1.2-4.5-3.1-5.6l-23.5-14.5c0,0,0,0,0,0C35.3,972.6,34.2,972.3,33.1,972.4L33.1,972.4z M33.2,976.3
                c0.3,0,0.7,0.1,1.1,0.3c0,0,0,0,0.1,0l23.5,14.4c0.7,0.4,1.2,1.2,1.2,2.2s-0.5,1.8-1.2,2.3L34.3,1010c0,0,0,0-0.1,0
                c-0.8,0.4-1.5,0.4-2.1,0c-0.6-0.4-1.1-1.2-1.2-2.3v0V979v0c0-1.1,0.5-1.9,1.2-2.3C32.5,976.4,32.8,976.3,33.2,976.3z"
              />
            </g>
          </svg>
          Video</a>
      </div>
      <div class="flex flex-col text-white mt-auto row-start-6 lg:row-start-3 mb-4 lg:mb-0">
        <div>
          <a href="#" class="text-white underline">Informació sobre Covid-19</a>
          <div class="flex flex-row items-end mt-2">
            <bloc-logo class="h-8 current-color text-white mr-4" />
            <compromis-logo class="h-8 current-color text-white mr-4" mono />
            <jovespv-logo class="h-8 current-color text-white mr-4" mono />
          </div>
        </div>
      </div>
      <div class="lg:ml-auto lg:text-right">
        <div class="text-xl text-white mb-4">
          Apunta't a la campanya
        </div>
        <signup-form />
      </div>
    </div>
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

export default {
  components: {
    AnimatedText,
    BlocLogo,
    CompromisLogo,
    JovespvLogo,
    SignupForm,
    VideoBackground
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
</style>
