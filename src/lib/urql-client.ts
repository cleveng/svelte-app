import { Client, cacheExchange, fetchExchange } from '@urql/svelte'
import { get } from 'svelte/store'

import { appStore } from '$lib/stores/app.store'

// @urql/exchange-persisted 会将 query 强制变成 GET 请求
const client = new Client({
  url: import.meta.env.VITE_API_URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = get(appStore)?.token
    return {
      method: 'POST',
      headers: {
        Appid: __APPID__,
        AppVersion: __VERSION__,
        // 'Content-Type': 'application/json', // 上传附件，不能写死
        'X-Sent-At-Time': Date.now().toString(),
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
  },
  preferGetMethod: false, // 所有 query 用 POST
})

export default client
