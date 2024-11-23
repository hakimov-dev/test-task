<template>
  <div
    class="loading-container h-screen w-full overflow-hidden flex items-center justify-center"
  >
    <div class="loading-animation w-12 h-12"></div>
  </div>
</template>

<style scoped>
.loading-container {
  overflow: hidden;
}

.loading-animation {
  border: 5px solid var(--text-muted-color);
  border-top: 5px solid var(--secondary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
