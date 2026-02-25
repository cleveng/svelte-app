// schema.ts
import { z } from 'zod'

export const formSchema = z.object({
  file: z.any().refine(f => f instanceof File, '请选择文件'),
})

export type FormSchema = z.infer<typeof formSchema>
