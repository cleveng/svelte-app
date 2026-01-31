// 根目录 /+layout.server.ts
import { redirect } from '@sveltejs/kit'

import graffle from '$lib/graphql-client'

import { AuthDocument } from '@/generated/graphql'

/**
 * 根布局的服务端加载函数（全局路由守卫）
 * @param {Object} event - SvelteKit 事件对象，包含请求、会话、cookies 等信息
 */
export async function load({ locals, cookies, request }) {
  const token = cookies.get('token')
  if (token) {
    locals.token = token

    // ── 验证 token 有效性 ──
    try {
      const data = await graffle.gql(AuthDocument).$send()
      locals.loggedIn = !!data?.auth
      console.log('token 有效，用户保活成功！')
    } catch (error) {
      // token 无效，清除 cookie
      cookies.delete('token', { path: '/' })
      locals.loggedIn = false
      locals.token = null

      console.error(error, 'token 无效，正在清除 cookie')
    }
  }

  // 访问根页面时的重定向逻辑
  const pathname = new URL(request.url).pathname
  if (pathname === '/') {
    // 仅对根页面做重定向
    if (!locals.loggedIn) {
      // 未登录 → 跳转到登录页（对应 (auth)/signin 路由）
      throw redirect(307, '/signin')
    } else {
      // 已登录 → 跳转到仪表盘（对应 (authenticated)/dashboard 路由）
      throw redirect(307, '/dashboard')
    }
  }

  // 非根页面时，返回空对象即可（不影响其他路由）
  return {
    loggedIn: true,
    token: token,
  }
}
