import { ref, computed } from 'vue'
import { colorPalette } from '@/plugins/nuxtui'

// Types pour la configuration des thèmes
export interface Theme {
  name: string
  primary: typeof colorPalette.primary
  colors: typeof colorPalette
}

// Thèmes prédéfinis
const themes: Record<string, Theme> = {
  default: {
    name: 'Thème par défaut',
    primary: colorPalette.primary,
    colors: colorPalette
  },
  blue: {
    name: 'Thème Bleu',
    primary: { ...colorPalette.blue, DEFAULT: colorPalette.blue[500] },
    colors: {
      ...colorPalette,
      primary: { ...colorPalette.blue, DEFAULT: colorPalette.blue[500] }
    }
  },
  green: {
    name: 'Thème Vert',
    primary: { ...colorPalette.green, DEFAULT: colorPalette.green[500] },
    colors: {
      ...colorPalette,
      primary: { ...colorPalette.green, DEFAULT: colorPalette.green[500] }
    }
  },
  orange: {
    name: 'Thème Orange',
    primary: { ...colorPalette.orange, DEFAULT: colorPalette.orange[500] },
    colors: {
      ...colorPalette,
      primary: { ...colorPalette.orange, DEFAULT: colorPalette.orange[500] }
    }
  }
}

// État réactif du thème actuel
const currentTheme = ref<string>('default')

export function useTheme() {
  // Getters
  const activeTheme = computed(() => themes[currentTheme.value])
  const availableThemes = computed(() => Object.entries(themes).map(([key, theme]) => ({
    key,
    name: theme.name
  })))

  // Actions
  const setTheme = (themeKey: string) => {
    if (themes[themeKey]) {
      currentTheme.value = themeKey
      updateCSSVariables(themes[themeKey])

      // Sauvegarder dans le localStorage
      localStorage.setItem('app-theme', themeKey)
    }
  }

  const initTheme = () => {
    // Charger le thème depuis le localStorage
    const savedTheme = localStorage.getItem('app-theme')
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme)
    } else {
      setTheme('default')
    }
  }

  // Mettre à jour les variables CSS personnalisées
  const updateCSSVariables = (theme: Theme) => {
    const root = document.documentElement

    // Mettre à jour les couleurs primaires
    Object.entries(theme.primary).forEach(([shade, color]) => {
      if (shade !== 'DEFAULT') {
        root.style.setProperty(`--color-primary-${shade}`, color)
      } else {
        root.style.setProperty('--color-primary', color)
      }
    })

    // Mettre à jour toutes les couleurs si nécessaire
    Object.entries(theme.colors).forEach(([colorName, colorShades]) => {
      if (typeof colorShades === 'object' && colorShades !== null) {
        Object.entries(colorShades).forEach(([shade, color]) => {
          if (shade !== 'DEFAULT' && typeof color === 'string') {
            root.style.setProperty(`--color-${colorName}-${shade}`, color)
          }
        })
      }
    })
  }

  // Créer un thème personnalisé
  const createCustomTheme = (name: string, primaryColor: typeof colorPalette.primary) => {
    const customKey = `custom-${Date.now()}`
    themes[customKey] = {
      name,
      primary: primaryColor,
      colors: {
        ...colorPalette,
        primary: primaryColor
      }
    }
    return customKey
  }

  return {
    // État
    currentTheme: computed(() => currentTheme.value),
    activeTheme,
    availableThemes,

    // Actions
    setTheme,
    initTheme,
    createCustomTheme,

    // Utilitaires
    themes: computed(() => themes)
  }
}
