// src/routes/logout/+page.server.ts
import { redirect } from '@sveltejs/kit'

import graffle from '$lib/graphql-client'

import type { Actions } from './$types'

import { LogoutDocument } from '@/generated/graphql'

export const actions: Actions = {
  default: async ({ cookies }) => {
    // 告诉服务端 正常退出
    await graffle.gql(LogoutDocument).$send({ input: '' })

    // ✅ 删除 token cookie
    cookies.delete('token', { path: '/' })

    // 可选：删除 loggedIn 标记
    cookies.delete('loggedIn', { path: '/' })

    // ✅ 跳转回登录页
    throw redirect(303, '/signin')
  },
}
