// src/hooks.server.ts
import { redirect, type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

export const handle: Handle = sequence(
  // 1. 打印请求时长
  async ({ event, resolve }) => {
    const start = Date.now()
    console.log(`→ ${event.request.method} ${event.url.pathname}`)

    const response = await resolve(event)
    console.log(`← ${event.request.method} ${event.url.pathname} ` + `${response.status} in ${Date.now() - start}ms`)

    return response
  },

  // 2. 设置请求头部信息
  async ({ event, resolve }) => {
    const response = await resolve(event)

    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')

    return response
  },

  // 3. 应用场景：身份验证
  async ({ event, resolve }) => {
    // 尝试从 cookies 中获取 token 字段值
    const token = event.cookies.get('token') || event.locals.token
    if (token) {
      console.log('获取到 token: ', token)
    }

    // ✅ 受保护路由列表
    const pathname = event.url.pathname
    const protectedRoutes = ['/dashboard']
    const isProtected = protectedRoutes.some(path => pathname.startsWith(path))

    // ✅ 未登录访问受保护页面 → 跳转
    if (!token && isProtected) {
      console.log('未登录，跳转到登录页')
      throw redirect(302, `/signin?redirectTo=${pathname}`)
    }

    return resolve(event)
  },

  // 4. 最后: 实际上要渲染页面/调用端点
  async ({ event, resolve }) => {
    // You can also short-circuit requests here
    // if (event.url.pathname.startsWith('/admin') && !event.locals.user?.role?.includes('admin')) {
    //   return new Response('Forbidden', { status: 403 })
    // }

    return resolve(event)
  }
)
