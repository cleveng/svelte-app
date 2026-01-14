import { Store } from '@tanstack/svelte-store'
import { browser } from '$app/environment'

import type { API } from '$lib/types/api'

export interface AppState {
  theme: 'light' | 'dark' | 'system'
  loggedIn: boolean
  token: string | null
  profile: API.Profile | null
  lng: string
}

const initialState: AppState = {
  theme: browser ? (localStorage.theme as AppState['theme']) || 'system' : 'system',
  loggedIn: false,
  token: null,
  profile: null,
  lng: 'en',
}

export const appStore = new Store<AppState>(initialState)

if (browser) {
  appStore.subscribe(state => {
    localStorage.theme = state.currentVal.theme
    document.documentElement.classList.toggle('dark', state.currentVal.theme === 'dark')
  })
}

export function setTheme(theme: AppState['theme']) {
  appStore.setState(prev => ({ ...prev, theme }))
}
