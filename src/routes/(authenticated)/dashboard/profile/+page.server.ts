import { fail, isRedirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms'
import { zod4 } from 'sveltekit-superforms/adapters'

import graffle from '$lib/graphql-client'

import { formSchema } from './schema'

import type { Actions, PageServerLoad } from './$types.js'

import { UploadFileDocument } from '@/generated/graphql.js'

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod4(formSchema)),
  }
}

export const actions: Actions = {
  default: async event => {
    const form = await superValidate(event, zod4(formSchema))
    if (!form.valid) {
      return fail(400, { form })
    }

    try {
      const file = form.data.file as File
      if (!file) {
        return fail(400, { form })
      }

      const data = await graffle.gql(UploadFileDocument).$send({
        file,
      })

      // 上传完成后
      form.data.file = undefined as any

      return {
        form,
        success: `文件上传成功: ${file.name}`,
        data: data?.uploadFile,
      }
    } catch (err: any) {
      if (isRedirect(err)) throw err

      const message = err?.errors?.[0]?.message || err?.cause?.message || err?.message || '未知错误'

      form.data.file = undefined as any

      return fail(500, {
        form,
        error: message,
      })
    }
  },
}
