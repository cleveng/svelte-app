// [urql-graphql](https://github.com/urql-graphql/urql)
import { Client, cacheExchange, fetchExchange } from '@urql/svelte'
import { useStore } from '@tanstack/svelte-store'
import { appStore } from '$lib/stores/app.store'

const client = new Client({
  url: import.meta.env.VITE_API_URL,
  exchanges: [cacheExchange, fetchExchange],
  requestPolicy: 'cache-and-network',
  fetchOptions: () => {
    const token = useStore(appStore, state => state.token)

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    }
  },
})

export default client
