<template>
  <div>
    <h2>
      <span>Si penses que...</span>
      <div class="sentences">
        <transition name="fade" mode="out-in">
          <template v-for="(sentence, i) in sentences">
            <div v-if="showing === i" :key="i">
              {{ sentence }}
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
  transform: translateY(1rem);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}
</style>
