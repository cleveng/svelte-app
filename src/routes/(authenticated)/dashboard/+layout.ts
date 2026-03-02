// src/routes/dashboard/+layout.ts
import { get } from 'svelte/store'

import { goto } from '$app/navigation'
import { resolve } from '$app/paths'

import { appStore } from '$lib/stores/app.store'
import type { API } from '$lib/types'
import client from '$lib/urql-client'

import { AuthDocument, ProfileDocument } from '@/generated/graphql'

export const load = async () => {
  const profile = get(appStore)?.profile
  try {
    // 1. 检查token有效性
    const res = await client.query(AuthDocument, {})
    if (!res.data?.auth) {
      console.error('token 无效，正在清除 cookie')
      appStore.update(state => ({
        ...state,
        loggedIn: false,
        token: null,
      }))

      goto(resolve('/signin'))
      return
    }

    // 2. 获取用户信息
    console.log('token 有效，用户保活成功！')
    if (!profile) {
      client.query(ProfileDocument, {}).subscribe(res => {
        if (res.data?.profile) {
          appStore.update(state => ({
            ...state,
            profile: res.data?.profile as unknown as API.Profile,
          }))
        }
      })
    }
  } catch (error) {
    console.error(error)
  }

  return {
    profile: profile,
  }
}
