// src/(auth)/signin/schema.ts
import { z } from 'zod'

// 定义登录表单的校验规则
export const formSchema = z.object({
  email: z.email({
    error: iss => (iss.input === '' ? '请输入邮箱地址' : undefined),
  }),
  password: z.string().min(6, '密码长度不能少于6位').max(20, '密码长度不能超过20位'),
  remember_me: z.boolean().optional().default(false),
})

// 导出Schema的类型，供TS类型推导使用
export type FormSchema = z.infer<typeof formSchema>
