import { Graffle } from 'graffle'
import { DocumentBuilder } from 'graffle/extensions/document-builder'
import { get } from 'svelte/store'

import { browser } from '$app/environment'
import { getRequestEvent } from '$app/server'

import { appStore } from '$lib/stores/app.store'

const graffle = Graffle.create()
  .transport({
    url: import.meta.env.VITE_API_URL,
    raw: { mode: 'cors' },
    headers: {
      Appid: import.meta.env.VITE_APPID, // 1.0 设置 appid
      // 在这里是无法设置动态的 Authorization
    },
  })
  .anyware(({ exchange }) => {
    // [dynamic-headers](https://graffle.js.org/examples/transport-http/dynamic-headers#dynamic-headers)
    const headers: Headers = new Headers(exchange.input.request.headers)
    headers.set('X-Sent-At-Time', Date.now().toString())

    let token: string | null = null
    if (browser) {
      token = get(appStore)?.token
    } else {
      const event = getRequestEvent()
      token = event.cookies.get('token') || null
    }

    // 设置动态的 Authorization
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return exchange({
      input: {
        ...exchange.input,
        request: {
          ...exchange.input.request,
          headers,
        },
      },
    })
  })
  .anyware(({ exchange }) => {
    console.log(exchange.input.request)
    return exchange()
  })
  .use(DocumentBuilder())

export default graffle
