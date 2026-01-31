// src/routes/login/+page.server.ts
import { fail, isRedirect, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms'
import { zod4 } from 'sveltekit-superforms/adapters'

import { signer } from '$lib/config'
import graffle from '$lib/graphql-client'

import { formSchema } from './schema'

import type { Actions, PageServerLoad } from './$types'

import { SigninDocument } from '@/generated/graphql'

// 在页面加载时自动执行一次
export const load: PageServerLoad = async ({ cookies }) => {
  // 检查是否已登录
  const token = cookies.get('token')
  if (token) {
    throw redirect(303, '/dashboard')
  }

  const form = await superValidate(zod4(formSchema))
  return { form }
}

// 只有在表单提交时触发
export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, zod4(formSchema))

    if (!form.valid) {
      return fail(400, { form })
    }

    // ✅ 从 POST 请求 URL 中获取 redirectTo
    const url = new URL(request.url)
    const redirectTo = url.searchParams.get('redirectTo') ?? '/dashboard'

    const params = signer.toBase64String({
      email: form.data.email,
      password: form.data.password,
    })

    try {
      const data = await graffle.gql(SigninDocument).$send({ input: params })
      if (!data?.signin) {
        return fail(401, {
          form,
          error: '登录失败：无效凭证',
        })
      }

      // ── 设置 HttpOnly cookie ──
      cookies.set('token', data.signin, {
        path: '/',
        httpOnly: true,
        secure: !import.meta.env.DEV,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30,
      })
      cookies.set('loggedIn', 'true', { path: '/', httpOnly: false })

      throw redirect(303, redirectTo)
    } catch (err: any) {
      // Redirect { status: 303, location: '/dashboard' }
      if (isRedirect(err)) throw err

      const message = err?.errors?.[0]?.message || err?.cause?.message || err?.message || '未知错误'

      return fail(500, {
        form,
        error: message,
      })
    }
  },
}
