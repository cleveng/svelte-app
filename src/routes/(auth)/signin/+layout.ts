// +layout.ts
// client-side redirect
import { redirect } from '@sveltejs/kit'
import { get } from 'svelte/store'

import { appStore } from '$lib/stores/app.store'
export const load = () => {
  const { token } = get(appStore)
  if (token) {
    throw redirect(302, '/dashboard')
  }

  return {}
}
