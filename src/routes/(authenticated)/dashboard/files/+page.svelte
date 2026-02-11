<script lang="ts">
  import ArrowDownAZ from '@lucide/svelte/icons/arrow-down-a-z'
  import ArrowUpAZ from '@lucide/svelte/icons/arrow-up-a-z'
  import Eye from '@lucide/svelte/icons/eye'
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal'
  import { toast } from 'svelte-sonner'
  import { superForm, fileProxy } from 'sveltekit-superforms'
  import { zod4Client } from 'sveltekit-superforms/adapters'

  import { Main } from '$lib/components/layout'
  import { Button } from '$lib/components/ui/button/index.js'
  import { Input } from '$lib/components/ui/input/index.js'
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select'
  import { Separator } from '$lib/components/ui/separator'

  import { formSchema } from './schema'

  import type { PageData } from './$types'

  const props = $props<{ data: PageData }>()
  let loading = $state<boolean>(false)

  const form = superForm(props.data.form, {
    validators: zod4Client(formSchema),
    onSubmit: () => {
      loading = true
    },
    onResult: async ({ result }) => {
      loading = false

      // ✅ 登录失败（fail(...)）
      if (result.type === 'failure') {
        toast.error(result.data?.error ?? '上传失败，请重试', {
          id: __TOAST_ID__,
        })
      }

      // ✅ 登录成功（redirect 会发生）
      if (result.type === 'success' && result.data?.success) {
        toast.success('上传成功', {
          id: __TOAST_ID__,
        })
      }
    },
  })

  const { form: params, enhance } = form
  const files = fileProxy(params, 'file')

  let search = $state<string>('All Apps')
</script>

<Main fixed>
  <div class="space-y-0.5">
    <h1 class="text-2xl font-bold tracking-tight md:text-3xl">附件管理</h1>
    <p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
  </div>

  <div class="my-4 flex items-end justify-between sm:my-0 sm:items-center">
    <div class="flex flex-col gap-4 sm:my-4 sm:flex-row">
      <Input placeholder="Filter apps..." class="h-9 w-40 lg:w-62.5" name="search" />
      <Select type="single" bind:value={search}>
        <SelectTrigger class="w-36 truncate uppercase">{search}</SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Apps</SelectItem>
          <SelectItem value="connected">Connected</SelectItem>
          <SelectItem value="notConnected">Not Connected</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Select type="single" bind:value={search}>
      <SelectTrigger class="w-16"><SlidersHorizontal /></SelectTrigger>
      <SelectContent>
        <SelectItem value="all">
          <div class="flex items-center gap-4">
            <ArrowUpAZ />
            <span>All Apps</span>
          </div>
        </SelectItem>
        <SelectItem value="connected">
          <div class="flex items-center gap-4">
            <ArrowDownAZ />
            <span>All Apps</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>

  <Separator class="shadow-sm" />

  <ul class="faded-bottom no-scrollbar grid gap-4 overflow-auto pt-4 pb-16 md:grid-cols-2 lg:grid-cols-3">
    <li class="rounded-lg border p-4 hover:shadow-md">
      <div class="mb-8 flex items-center justify-between">
        <div class="flex size-10 items-center justify-center rounded-lg bg-muted p-2">
          <Eye />
        </div>
        <Button
          variant="outline"
          size="sm"
          class="border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
        >
          Connected
        </Button>
      </div>
      <div>
        <h2 class="mb-1 font-semibold">Discord</h2>
        <p class="line-clamp-2 text-gray-500">Connect with Discord for seamless team communication.</p>
      </div>
    </li>
    <li class="rounded-lg border p-4 hover:shadow-md">
      <div class="mb-8 flex items-center justify-between">
        <div class="flex size-10 items-center justify-center rounded-lg bg-muted p-2">
          <Eye />
        </div>
        <Button variant="outline" size="sm">Connected</Button>
      </div>
      <div>
        <h2 class="mb-1 font-semibold">Discord</h2>
        <p class="line-clamp-2 text-gray-500">Connect with Discord for seamless team communication.</p>
      </div>
    </li>
  </ul>

  <form method="POST" enctype="multipart/form-data" use:enhance>
    <div>
      <label for="file-input">选择文件:</label>
      <Input disabled={loading} id="file-input" name="file" type="file" accept="*" bind:files={$files} required />
    </div>

    {#if $files.length > 0}
      <p>已选择文件: {$files[0].name}</p>
    {/if}

    <button type="submit">上传</button>
  </form>
</Main>
