<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full sm:max-w-lg md:max-w-xl">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-center mb-6 text-black-900">
          {{ $t('home.welcome') }}
        </h1>

        <p class="text-lg text-center mb-8 text-grey-700">
          {{ $t('home.subtitle') }}
        </p>

        <div class="text-center">
          <button
            @click="fetchData"
            :disabled="isLoading"
            class="btn-primary mb-4 min-w-[200px] relative"
          >
            <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
            </svg>
            {{ $t('home.fetchDataBtn') }}
          </button>

          <div
            v-if="isError"
            class="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded"
          >
            {{ errorMessage }}
          </div>

          <div
            v-if="data"
            class="mt-6 bg-green-50 border border-green-200 text-green-700 rounded-lg p-4"
          >
            <h3 class="text-lg font-semibold mb-2">
              {{ $t('home.apiResponse') }}
            </h3>
            <pre class="text-sm overflow-auto max-h-64 bg-white p-3 rounded border text-black-700">{{ JSON.stringify(data, null, 2) }}</pre>
          </div>

          <!-- Sélecteur de thème pour démonstration -->
          <div class="mt-8 pt-6 border-t border-grey-200">
            <ThemeSelector />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetExampleData } from './composables/useGetExampleData'
import ThemeSelector from '@/components/ThemeSelector.vue'

const { data, isLoading, isError, errorMessage, doRequest: fetchData } = useGetExampleData()
</script>
