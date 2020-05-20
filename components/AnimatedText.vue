<template>
  <div>
    <h2>
      <span>Si penses que...</span>
      <div class="sentences">
        <transition name="fade" mode="out-in">
          <template v-for="(sentence, i) in sentences">
            <div v-if="showing === i" :key="i">
              <span v-for="(word, w) in sentence.split(' ')" :key="w" class="word" :style="{ animationDelay: `${100 * (w + 1)}ms` }">
                {{ word }}&nbsp;
              </span>
            </div>
          </template>
        </transition>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sentences: [
        'esta crisi no la poden pagar els de sempre',
        "s'ha de blindar la sanitat pública i dotar-la dels recursos que necessita",
        'les persones van primer'
      ],
      showing: 0
    }
  },

  mounted () {
    this.iterate()
  },

  methods: {
    iterate () {
      setTimeout(() => {
        const max = this.sentences.length - 1
        this.showing = this.showing === max ? 0 : this.showing + 1
        this.iterate()
      }, 4000)
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(-1rem);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}

.word {
  display: inline-block;
  animation-name: fadeUp;
  animation-duration: 200ms;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
