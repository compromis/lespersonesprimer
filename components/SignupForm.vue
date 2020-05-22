<template>
  <form
    action="https://compromis.us18.list-manage.com/subscribe/post?u=548d01f210a82f864a46690ac&amp;id=75e80c8517"
    method="post"
    target="_blank"
  >
    <div class="field flex items-center mb-3">
      <input
        id="name"
        class="w-full block appearance-none border-2 bg-transparent py-1 px-2 mr-0 rounded placeholder-semitransparent focus:outline-none focus:border-orange"
        type="text"
        value=""
        name="FNAME"
        placeholder="Nom"
      >
      <label for="name" class="hidden lg:block w-32 mr-2 opacity-0 transition-opacity duration-200 order-first">Nom</label>
    </div>

    <div class="field flex items-center">
      <input
        id="email"
        class="w-full block appearance-none border-2 bg-transparent py-1 px-2 mr-0 rounded placeholder-semitransparent focus:outline-none focus:border-orange"
        type="email"
        value=""
        name="EMAIL"
        placeholder="E-mail"
        required
      >
      <label for="email" class="hidden lg:block w-32 mr-2 opacity-0 transition-opacity duration-200 order-first">E-mail</label>
    </div>

    <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input
        type="text"
        name="b_548d01f210a82f864a46690ac_75e80c8517"
        tabindex="-1"
        value=""
      >
    </div>

    <button type="submit" class="bg-orange hover:bg-white text-white hover:text-orange font-bold py-2 px-4 rounded mt-4">
      M’apunte
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  input:not(:placeholder-shown) + label {
    @apply opacity-100;
  }
</style>
