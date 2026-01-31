<script lang="ts">
  import Eye from '@lucide/svelte/icons/eye'
  import Lock from '@lucide/svelte/icons/lock'
  import MailIcon from '@lucide/svelte/icons/mail'
  import { toast } from 'svelte-sonner'
  import { superForm } from 'sveltekit-superforms'
  import { zod4 } from 'sveltekit-superforms/adapters'

  import { resolve } from '$app/paths'

  import { Button } from '$lib/components/ui/button/index.js'
  import { Checkbox } from '$lib/components/ui/checkbox/index.js'
  import * as Form from '$lib/components/ui/form/index.js'
  import * as InputGroup from '$lib/components/ui/input-group/index.js'
  import { Label } from '$lib/components/ui/label/index.js'
  import { Spinner } from '$lib/components/ui/spinner/index.js'

  import { formSchema } from './schema'

  import type { PageData } from './$types'

  const props = $props<{ data: PageData }>()
  let loading = $state<boolean>(false)

  const form = superForm(props.data.form, {
    validators: zod4(formSchema),
    onSubmit: () => {
      loading = true
    },
    onResult: ({ result }) => {
      loading = false

      // ✅ 登录失败（fail(...)）
      if (result.type === 'failure') {
        toast.error(result.data?.error ?? '登录失败')
      }

      // ✅ 登录成功（redirect 会发生）
      if (result.type === 'success') {
        toast.success('登录成功，正在跳转...')
      }
    },
  })

  const { form: params, enhance } = form
</script>

<div class="flex h-screen w-full">
  <div class="hidden w-full md:inline-block">
    <img
      class="h-full"
      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
      alt="leftSideImage"
    />
  </div>

  <div class="flex w-full flex-col items-center justify-center">
    <div class="flex w-80 flex-col items-center justify-center md:w-96">
      <h2 class="text-4xl font-medium text-gray-900">登 录</h2>
      <p class="mt-3 text-sm text-gray-500/90">欢迎回来！请登录以继续使用。</p>

      <Button class="mt-8 h-11 w-full " size="lg" variant="secondary">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
          alt="googleLogo"
        />
      </Button>

      <div class="my-5 flex w-full items-center gap-4">
        <div class="h-px w-full bg-gray-300/90"></div>
        <p class="w-full text-sm text-nowrap text-gray-500/90">或者使用电子邮件进行登录</p>
        <div class="h-px w-full bg-gray-300/90"></div>
      </div>

      <form class="w-full space-y-6" method="POST" use:enhance>
        <Form.Field {form} name="email">
          <Form.Control>
            {#snippet children({ props })}
              <InputGroup.Root class="h-11">
                <InputGroup.Input
                  {...props}
                  bind:value={$params.email}
                  type="email"
                  placeholder="请输入您的电子邮件...."
                />
                <InputGroup.Addon>
                  <MailIcon />
                </InputGroup.Addon>
              </InputGroup.Root>
            {/snippet}
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
        <Form.Field {form} name="password">
          <Form.Control>
            {#snippet children({ props })}
              <InputGroup.Root class="h-11">
                <InputGroup.Input
                  {...props}
                  bind:value={$params.password}
                  type="password"
                  placeholder="请输入密码...."
                />
                <InputGroup.Addon>
                  <Lock />
                </InputGroup.Addon>
                <InputGroup.Addon align="inline-end" class="cursor-pointer">
                  <Eye />
                </InputGroup.Addon>
              </InputGroup.Root>
            {/snippet}
          </Form.Control>
          <Form.FieldErrors />
        </Form.Field>
        <div class="flex w-full items-center justify-between text-gray-500/80">
          <Form.Field {form} class="flex items-center gap-2" name="remember_me">
            <Form.Control>
              {#snippet children({ props })}
                <Checkbox {...props} id="remember_me" bind:checked={$params.remember_me} />
                <Label for="remember_me">记住密码</Label>
              {/snippet}
            </Form.Control>
            <Form.FieldErrors />
          </Form.Field>
          <a class="text-sm underline" href={resolve('/forgot-password')}>忘记密码?</a>
        </div>
        <Form.Button
          class="h-11 w-full bg-indigo-500 text-white transition-opacity hover:bg-indigo-500 hover:opacity-90"
          size="lg"
          disabled={loading}
          type="submit"
        >
          {#if loading}
            <Spinner />
          {/if}
          登 录
        </Form.Button>
      </form>

      <p class="mt-4 text-sm text-gray-500/90">
        还没有账号? 前往<a class="ml-0.5 text-indigo-400 hover:underline" href={resolve('/signup')}>注册</a>
      </p>
    </div>
  </div>
</div>
