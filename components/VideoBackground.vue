<template>
  <div class="fixed top-0 left-0 right-0 bottom-0 z-0">
    <video
      autoplay
      muted
      playsinline
      loop
      preload="true"
      poster="../assets/video/poster.jpg"
      class="w-full h-full object-cover opacity-50"
    >
      <source src="../assets/video/background.webm" type="video/webm">
      <source src="../assets/video/background.mp4" type="video/mp4">
    </video>
    <div class="bg-dark fixed top-0 left-0 right-0 bottom-0 z-10" style="mix-blend-mode: multiply" />
  </div>
</template>
