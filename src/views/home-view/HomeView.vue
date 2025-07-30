<template>
  <UContainer class="min-h-screen flex items-center justify-center py-8 bg-white">
    <UCard class="max-w-4xl w-full bg-neutral-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4 text-neutral-700">
          {{ $t('home.welcome') }}
        </h1>

        <p class="text-xl mb-8 text-neutral-600">
          {{ $t('home.subtitle') }}
        </p>

        <!-- Boutons d'exemple avec votre palette -->
        <div class="mb-8 bg-neutral-100 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4 text-neutral-700">
            Palette Simple - Bleu, Rouge, Gris
          </h2>
          <div class="flex flex-wrap gap-4 justify-center">
            <UButton
              class="bg-brand-600 text-white hover:bg-brand-700"
              size="lg"
              variant="solid"
            >
              Primary (Bleu)
            </UButton>
            <UButton
              class="bg-stone-600 text-white hover:bg-stone-700"
              size="lg"
              variant="solid"
            >
              Secondary (Rouge)
            </UButton>
            <UButton
              class="bg-brand-600 text-white hover:bg-brand-700"
              size="lg"
              variant="solid"
            >
              Success (Bleu)
            </UButton>
            <UButton
              class="bg-yellow-600 text-white hover:bg-yellow-700"
              size="lg"
              variant="solid"
            >
              Warning (Jaune)
            </UButton>
            <UButton
              class="bg-red-600 text-white hover:bg-red-700"
              size="lg"
              variant="solid"
            >
              Error (Rouge)
            </UButton>
            <UButton
              class="bg-neutral-600 text-white hover:bg-neutral-700"
              size="lg"
              variant="solid"
            >
              Neutral (Gris)
            </UButton>
          </div>
        </div>

        <!-- Votre palette de couleurs personnalisée -->
        <div class="mb-8 bg-neutral-100 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4 text-neutral-700">
            Palette Simple - Couleurs Personnalisées
          </h2>

          <!-- Couleurs principales -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <!-- Brand (Bleu) -->
            <div class="bg-neutral-100 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-neutral-700">Brand (Bleu)</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-50"></div>
                  <span class="text-xs text-neutral-600">50 - Très clair</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-100"></div>
                  <span class="text-xs text-neutral-600">100</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-200"></div>
                  <span class="text-xs text-neutral-600">200</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-300"></div>
                  <span class="text-xs text-neutral-600">300</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-400 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">400 - Bleu (#60a5fa)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-500"></div>
                  <span class="text-xs text-neutral-600">500 - Bleu moyen (#3b82f6)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-600"></div>
                  <span class="text-xs text-neutral-600">600 - Bleu foncé (#2563eb)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-700"></div>
                  <span class="text-xs text-neutral-600">700 - Bleu très foncé (#1d4ed8)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-800"></div>
                  <span class="text-xs text-neutral-600">800</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-brand-900"></div>
                  <span class="text-xs text-neutral-600">900</span>
                </div>
              </div>
            </div>

            <!-- Stone (Rouge) -->
            <div class="bg-neutral-100 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-neutral-700">Stone (Rouge)</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-50"></div>
                  <span class="text-xs text-neutral-600">50</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-100"></div>
                  <span class="text-xs text-neutral-600">100</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-200"></div>
                  <span class="text-xs text-neutral-600">200</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-300"></div>
                  <span class="text-xs text-neutral-600">300</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-400 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">400 - Rouge (#f87171)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-500"></div>
                  <span class="text-xs text-neutral-600">500 - Rouge moyen (#ef4444)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-600 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">600 - Rouge foncé (#dc2626)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-700"></div>
                  <span class="text-xs text-neutral-600">700 - Rouge très foncé (#b91c1c)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-800"></div>
                  <span class="text-xs text-neutral-600">800</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-stone-900"></div>
                  <span class="text-xs text-neutral-600">900</span>
                </div>
              </div>
            </div>

            <!-- Neutral (Gris) -->
            <div class="bg-neutral-100 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-neutral-700">Neutral (Gris)</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-50"></div>
                  <span class="text-xs text-neutral-600">50</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-100 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">100 - Gris clair (#f3f4f6)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-200 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">200 - Gris moyen (#e5e7eb)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-300"></div>
                  <span class="text-xs text-neutral-600">300</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-400"></div>
                  <span class="text-xs text-neutral-600">400</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-500 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">500 - Gris principal (#6b7280)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-600 border-2 border-neutral-300"></div>
                  <span class="text-xs font-bold text-neutral-700">600 - Gris foncé (#4b5563)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-700"></div>
                  <span class="text-xs text-neutral-600">700 - Gris très foncé (#374151)</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-800"></div>
                  <span class="text-xs text-neutral-600">800</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-neutral-900"></div>
                  <span class="text-xs text-neutral-600">900</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Exemples d'utilisation -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Arrière-plans -->
            <div class="bg-neutral-100 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-neutral-700">Arrière-plans</h3>
              <div class="space-y-2">
                <div class="h-8 rounded bg-brand-400 flex items-center justify-center text-white text-sm">
                  bg-brand-400 (Bleu)
                </div>
                <div class="h-8 rounded bg-stone-400 flex items-center justify-center text-white text-sm">
                  bg-stone-400 (Rouge)
                </div>
                <div class="h-8 rounded bg-neutral-100 flex items-center justify-center text-neutral-600 text-sm">
                  bg-neutral-100 (Gris clair)
                </div>
                <div class="h-8 rounded bg-neutral-200 flex items-center justify-center text-neutral-600 text-sm">
                  bg-neutral-200 (Gris moyen)
                </div>
              </div>
            </div>

            <!-- Textes -->
            <div class="bg-neutral-100 p-4 rounded-lg">
              <h3 class="font-semibold mb-3 text-neutral-700">Textes</h3>
              <div class="space-y-2">
                <div class="text-brand-600 text-sm">text-brand-600 (Bleu foncé)</div>
                <div class="text-stone-600 text-sm">text-stone-600 (Rouge foncé)</div>
                <div class="text-neutral-600 text-sm">text-neutral-600 (Gris)</div>
                <div class="text-brand-400 text-sm">text-brand-400 (Bleu)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bouton de test API -->
        <UButton
          @click="handleFetchData"
          :loading="isLoading"
          class="bg-brand-600 text-white hover:bg-brand-700 mb-6"
          size="lg"
          variant="solid"
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
        <div v-if="isError" class="text-xs text-neutral-600 mt-2">
          Debug - isError: {{ isError }}, errorMessage: "{{ errorMessage }}"
        </div>

        <UCard
          v-if="data"
          class="bg-neutral-100 text-left"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-neutral-700">
              {{ $t('home.apiResponse') }}
            </h3>
          </template>

          <pre class="text-sm overflow-auto max-h-80 bg-neutral-100 p-4 rounded-md text-left text-neutral-600">
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
