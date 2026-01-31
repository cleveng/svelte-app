<script lang="ts">
  import { resolve } from '$app/paths'

  import { Button } from '$lib/components/ui/button/index.js'
  import * as Field from '$lib/components/ui/field/index.js'
  import { Input } from '$lib/components/ui/input/index.js'
  import { Spinner } from '$lib/components/ui/spinner/index.js'
</script>

<main class="flex h-screen w-full items-center justify-center px-4">
  <form class="flex w-full max-w-96 flex-col">
    <a href={resolve('/')} class="mb-8" title="Go to PrebuiltUI">
      <svg class="size-10" width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m8 4.55 6.75 3.884 6.75-3.885M8 27.83v-7.755L1.25 16.19m27 0-6.75 3.885v7.754M1.655 8.658l13.095 7.546 13.095-7.546M14.75 31.25V16.189m13.5 5.976V10.212a2.98 2.98 0 0 0-1.5-2.585L16.25 1.65a3.01 3.01 0 0 0-3 0L2.75 7.627a3 3 0 0 0-1.5 2.585v11.953a2.98 2.98 0 0 0 1.5 2.585l10.5 5.977a3.01 3.01 0 0 0 3 0l10.5-5.977a3 3 0 0 0 1.5-2.585"
          stroke="#1d293d"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>

    <div>
      <Field.Group>
        <Field.Set>
          <Field.Legend><h2 class="text-4xl font-medium text-gray-900">忘记密码</h2></Field.Legend>
          <Field.Description class="mt-4 text-base text-gray-500/90">请输入电子邮件以进行密码找回。</Field.Description>
          <Field.Group class="mt-8">
            <Field.Field>
              <Field.Label class="text-base" for="email">邮箱</Field.Label>
              <Input class="h-11" id="email" placeholder="请输入您的电子邮件...." required />
            </Field.Field>
            <Field.Field>
              <Field.Label class="text-base" for="code">验证码</Field.Label>
              <Input class="h-11" id="code" placeholder="请输入您的验证码...." required />
            </Field.Field>
          </Field.Group>
        </Field.Set>

        <Field.Field class="mt-6">
          <Button
            class="h-11 w-full bg-indigo-500 text-white transition-opacity hover:bg-indigo-500 hover:opacity-90"
            size="lg"
          >
            <Spinner />登 录
          </Button>
        </Field.Field>
      </Field.Group>
    </div>

    <p class="py-8 text-center text-sm text-gray-500/90">
      记得密码? 前往<a href={resolve('/signin')} class="ml-0.5 text-indigo-400 hover:underline">登录</a>
    </p>
  </form>
</main>
