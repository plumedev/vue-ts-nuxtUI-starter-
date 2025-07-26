<template>
  <div class="theme-selector">
    <label for="theme-select" class="block text-sm font-medium text-black-700 mb-2">
      Choisir un thème
    </label>
    <select
      id="theme-select"
      v-model="selectedTheme"
      @change="handleThemeChange"
      class="block w-full px-3 py-2 border border-grey-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
    >
      <option
        v-for="theme in availableThemes"
        :key="theme.key"
        :value="theme.key"
      >
        {{ theme.name }}
      </option>
    </select>

    <!-- Aperçu des couleurs du thème actuel -->
    <div class="mt-4 p-3 bg-grey-50 rounded-lg">
      <p class="text-sm font-medium text-black-700 mb-2">Aperçu des couleurs :</p>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(color, shade) in activeTheme.primary"
          :key="shade"
          class="flex flex-col items-center"
        >
          <div
            :style="{ backgroundColor: color }"
            class="w-8 h-8 rounded-full shadow-sm border border-grey-200"
            :title="`${shade}: ${color}`"
          ></div>
          <span class="text-xs text-black-500 mt-1">{{ shade }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/utils/useTheme'

const { currentTheme, activeTheme, availableThemes, setTheme, initTheme } = useTheme()

const selectedTheme = ref(currentTheme.value)

const handleThemeChange = () => {
  setTheme(selectedTheme.value)
}

onMounted(() => {
  initTheme()
  selectedTheme.value = currentTheme.value
})
</script>

<style scoped>
.theme-selector {
  @apply max-w-sm;
}
</style>
