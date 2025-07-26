import { colorPalette } from '@/plugins/nuxtui'

/**
 * Utilitaire pour accéder facilement aux couleurs du thème
 */
export const colors = colorPalette

/**
 * Génère une classe Tailwind pour une couleur donnée
 */
export function getColorClass(type: 'bg' | 'text' | 'border', colorName: keyof typeof colorPalette, shade: string | number = 500): string {
  return `${type}-${String(colorName)}-${shade}`
}

/**
 * Obtient la valeur hexadécimale d'une couleur
 */
export function getColorValue(colorName: keyof typeof colorPalette, shade: string | number = 500): string {
  const colorGroup = colorPalette[colorName]
  if (typeof colorGroup === 'object' && colorGroup !== null) {
    const colorMap = colorGroup as Record<string | number, string>
    return colorMap[shade] || colorMap[500] || '#000000'
  }
  return '#000000'
}

/**
 * Génère un objet de styles CSS pour une couleur
 */
export function getColorStyle(property: 'backgroundColor' | 'color' | 'borderColor', colorName: keyof typeof colorPalette, shade: string | number = 500): Record<string, string> {
  return {
    [property]: getColorValue(colorName, shade)
  }
}

/**
 * Obtient toutes les teintes d'une couleur
 */
export function getColorShades(colorName: keyof typeof colorPalette): Record<string, string> {
  const colorGroup = colorPalette[colorName]
  if (typeof colorGroup === 'object' && colorGroup !== null) {
    return colorGroup as Record<string, string>
  }
  return {}
}

/**
 * Vérifie si une couleur est claire ou sombre (pour le contraste du texte)
 */
export function isLightColor(hex: string): boolean {
  const rgb = hexToRgb(hex)
  if (!rgb) return false

  // Calcul de la luminance relative
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
  return luminance > 0.5
}

/**
 * Convertit une couleur hexadécimale en RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

/**
 * Obtient la couleur de texte appropriée (noir ou blanc) pour un arrière-plan donné
 */
export function getContrastTextColor(backgroundColor: string): string {
  return isLightColor(backgroundColor) ? getColorValue('black', 900) : '#FFFFFF'
}

/**
 * Constantes utiles pour les couleurs les plus utilisées
 */
export const COLORS = {
  PRIMARY: getColorValue('primary'),
  PRIMARY_LIGHT: getColorValue('primary', 100),
  PRIMARY_DARK: getColorValue('primary', 700),

  SUCCESS: getColorValue('green', 500),
  WARNING: getColorValue('yellow', 500),
  ERROR: getColorValue('red', 500),
  INFO: getColorValue('blue', 500),

  TEXT_PRIMARY: getColorValue('black', 900),
  TEXT_SECONDARY: getColorValue('black', 500),
  TEXT_MUTED: getColorValue('grey', 600),

  BACKGROUND: getColorValue('grey', 50),
  SURFACE: '#FFFFFF',

  BORDER_LIGHT: '#EDEDF0',
  BORDER_DARK: '#CBD5E1'
} as const
