<template>
  <UContainer class="min-h-screen flex items-center justify-center py-8">
    <UCard class="max-w-2xl w-full">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ $t('home.welcome') }}
        </h1>

        <p class="text-xl mb-8 text-gray-600 dark:text-gray-300">
          {{ $t('home.subtitle') }}
        </p>

        <UButton
          @click="handleFetchData"
          :loading="isLoading"
          color="primary"
          size="lg"
          class="mb-6"
        >
          {{ $t('home.fetchDataBtn') }}
        </UButton>

        <UAlert
          v-if="isError"
          color="error"
          variant="soft"
          class="mb-4"
        >
          Erreur: {{ errorMessage || 'Aucun message d\'erreur' }}
        </UAlert>

        <!-- Debug info -->
        <div v-if="isError" class="text-xs text-gray-500 mt-2">
          Debug - isError: {{ isError }}, errorMessage: "{{ errorMessage }}"
        </div>

        <UCard
          v-if="data"
          color="green"
          variant="soft"
          class="text-left"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ $t('home.apiResponse') }}
            </h3>
          </template>

          <pre class="text-sm overflow-auto max-h-80 bg-gray-50 dark:bg-gray-800 p-4 rounded-md text-left text-gray-900 dark:text-gray-100">
            {{ JSON.stringify(data, null, 2) }}
          </pre>
        </UCard>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { useGetExampleData } from './composables/useGetExampleData'

const { data, isLoading, isError, errorMessage, doRequest: fetchData } = useGetExampleData()

const handleFetchData = async () => {
  await fetchData()
}
</script>
