<template>
  <StyleProvider>
    <ExampleProvider>
      <div class="min-h-screen main-bg">
        <RouterView />
      </div>
    </ExampleProvider>
  </StyleProvider>
</template>

<script lang="ts" setup>
import ExampleProvider from './providers/ExampleProvider.vue'
import StyleProvider from './providers/StyleProvider.vue'
</script>
