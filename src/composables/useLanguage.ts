import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()

  const changeLanguage = (lang: 'en' | 'es') => {
    locale.value = lang
    // Guardar preferencia en localStorage
    localStorage.setItem('preferred-language', lang)
  }

  // Cargar idioma preferido al iniciar
  const loadSavedLanguage = () => {
    const saved = localStorage.getItem('preferred-language')
    if (saved === 'en' || saved === 'es') {
      locale.value = saved
    }
  }

  return {
    locale,
    changeLanguage,
    loadSavedLanguage
  }
}
