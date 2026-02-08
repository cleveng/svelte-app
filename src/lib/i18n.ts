import { getLocaleFromNavigator, init, register } from 'svelte-i18n'

import { browser } from '$app/environment'

register('en-US', () => import('./locales/en-US.json'))
register('zh-CN', () => import('./locales/zh-CN.json'))

init({
  fallbackLocale: 'en-US',
  initialLocale: browser ? getLocaleFromNavigator() : 'en-US',
})
