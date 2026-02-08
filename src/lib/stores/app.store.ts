import * as devalue from 'devalue'
import { persisted } from 'svelte-persisted-store'

import { browser } from '$app/environment'

import type { API } from '$lib/types/api'

export interface AppState {
  theme: API.Theme
  loggedIn: boolean
  token: string | null
  profile: API.Profile | null
  dir: API.Direction
  collapsible: API.Collapsible
  sidebar: API.Variant
  locale: API.Locale
}

const initialState: AppState = {
  theme: browser ? (sessionStorage.theme as AppState['theme']) || 'system' : 'system',
  dir: browser ? (sessionStorage.dir as AppState['dir']) || 'ltr' : 'ltr',
  collapsible: browser ? (sessionStorage.collapsible as AppState['collapsible']) || 'icon' : 'icon',
  sidebar: browser ? (sessionStorage.collapsible as AppState['sidebar']) || 'inset' : 'inset',
  loggedIn: false,
  token: null,
  profile: null,
  locale: 'en-US',
}

export const appStore = persisted('session-storage', initialState, {
  serializer: devalue,
  storage: 'session',
})

if (browser) {
  appStore.subscribe(state => {
    // 切换主题
    document.documentElement.classList.toggle('dark', state.theme === 'dark')
    // 切换方向
    document.documentElement.setAttribute('dir', state.dir)
    // 切换语言
    document.documentElement.setAttribute('lang', state.locale)
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
