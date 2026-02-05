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
}

const initialState: AppState = {
  theme: browser ? (sessionStorage.theme as AppState['theme']) || 'system' : 'system',
  loggedIn: false,
  token: null,
  profile: null,
  lng: 'en',
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

// devalue 明确不支持序列化 function
// writing value from persisted store "session-storage" to session DevalueError:
// Cannot stringify a function
export const toDestroy = () => {
  if (browser) {
    sessionStorage.clear()
  }
}
