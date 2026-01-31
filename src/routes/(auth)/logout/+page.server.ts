// src/routes/logout/+page.server.ts
import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ cookies }) => {
    // ✅ 删除 token cookie
    cookies.delete('token', { path: '/' })

    // 可选：删除 loggedIn 标记
    cookies.delete('loggedIn', { path: '/' })

    // ✅ 跳转回登录页
    throw redirect(303, '/signin')
  },
}
