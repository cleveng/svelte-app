import * as devalue from 'devalue'
import { persisted } from 'svelte-persisted-store'

import { browser } from '$app/environment'

import type { API } from '$lib/types/api'

export interface AppState {
  theme: API.Theme
  loggedIn: boolean
  token: string | null
  profile: API.Profile | null
  lng: string
  toDestroy: () => void
}

const initialState: AppState = {
  theme: browser ? (sessionStorage.theme as AppState['theme']) || 'system' : 'system',
  loggedIn: false,
  token: null,
  profile: null,
  lng: 'en',
  toDestroy: () => {
    if (browser) {
      sessionStorage.clear()
    }
  },
}

export const appStore = persisted('session-storage', initialState, {
  serializer: devalue,
  storage: 'session',
})

if (browser) {
  appStore.subscribe(state => {
    document.documentElement.classList.toggle('dark', state.theme === 'dark')
  })
}
