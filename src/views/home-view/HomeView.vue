<template>
  <div class="container" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem;">
    <div class="card" style="max-width: 600px; width: 100%;">
      <div class="text-center">
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: #333;">
          {{ $t('home.welcome') }}
        </h1>

        <p style="font-size: 1.25rem; margin-bottom: 2rem; color: #666;">
          {{ $t('home.subtitle') }}
        </p>

        <button
          @click="fetchData"
          :disabled="isLoading"
          class="btn btn-primary mb-4"
          style="min-width: 200px;"
        >
          <span v-if="isLoading" class="spinner"></span>
          {{ $t('home.fetchDataBtn') }}
        </button>

        <div
          v-if="isError"
          class="alert alert-error"
        >
          {{ errorMessage }}
        </div>

        <div
          v-if="data"
          class="alert alert-success"
        >
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">
            {{ $t('home.apiResponse') }}
          </h3>
          <pre style="font-size: 0.875rem; overflow: auto; max-height: 300px; background: #f8f9fa; padding: 1rem; border-radius: 0.25rem; text-align: left;">{{ JSON.stringify(data, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetExampleData } from './composables/useGetExampleData'

const { data, isLoading, isError, errorMessage, doRequest: fetchData } = useGetExampleData()
</script>
