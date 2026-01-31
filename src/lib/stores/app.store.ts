import * as devalue from 'devalue'
import { persisted } from 'svelte-persisted-store'

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

export const appStore = persisted('local-storage', initialState, {
  serializer: devalue,
  storage: 'session',
})

if (browser) {
  appStore.subscribe(state => {
    document.documentElement.classList.toggle('dark', state.theme === 'dark')
  })
}

export function setTheme(theme: AppState['theme']) {
  appStore.update(prev => ({ ...prev, theme }))
}
