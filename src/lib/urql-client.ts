import { Client, cacheExchange, fetchExchange } from '@urql/svelte'
import { get } from 'svelte/store'

import { appStore } from '$lib/stores/app.store'

const client = new Client({
  url: import.meta.env.VITE_API_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = get(appStore)?.token
    return {
      headers: {
        Appid: __APPID__,
        AppVersion: __VERSION__,
        'X-Sent-At-Time': Date.now().toString(),
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  },
})

export default client
