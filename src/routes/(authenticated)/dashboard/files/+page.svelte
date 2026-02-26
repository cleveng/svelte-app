<script lang="ts">
  import ArrowDownAZ from '@lucide/svelte/icons/arrow-down-a-z'
  import ArrowUpAZ from '@lucide/svelte/icons/arrow-up-a-z'
  import Eye from '@lucide/svelte/icons/eye'
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal'
  import Upload from '@lucide/svelte/icons/upload'
  import { toast } from 'svelte-sonner'
  import { superForm, fileProxy } from 'sveltekit-superforms'
  import { zod4Client } from 'sveltekit-superforms/adapters'

  import { Main } from '$lib/components/layout'

  import { Button } from '$lib/components/ui/button/index.js'
  import { Input } from '$lib/components/ui/input/index.js'
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select'
  import { Separator } from '$lib/components/ui/separator'

  import { formSchema, type FormSchema } from './schema'

  import type { PageData } from './$types'

  const props = $props<{ data: PageData }>()

  let search = $state<string>('All Apps')

  const thumb = $state<string>()
  const media = $state<string[]>([])

  const maxCount = $derived(1)
  const acceptType = $derived('.png,.jpeg,.jpg,.webp')
  const fileUrls = $derived<string[]>(maxCount === 1 ? (thumb ? [thumb] : []) : [...media])

  // 多选图片模式
  const multiple = $derived(maxCount > 1)

  let loading = $state<boolean>(false)
  const form = superForm<FormSchema>(
    {
      file: undefined,
    },
    {
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
    }
  )

  const { form: params, enhance } = form
  const files = fileProxy(params, 'file') // Argument of type '"file"' is not assignable to parameter of type 'never'

  // 图片上传组件
  let fileInput = $state<HTMLInputElement | null>(null)
  const open = () => {
    fileInput?.click()
  }

  const sortByIndex = (index: number) => {
    const [moved] = fileUrls.splice(index, 1)
    fileUrls.unshift(moved)
    toast.success('设为主图', {
      id: __TOAST_ID__,
    })
  }

  const onDelete = (idx: number) => {
    fileUrls.splice(idx, 1)
  }
</script>

<Main>
  <div {...props} class="space-y-0.5">
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

  <div class="mb-30">
    <form method="POST" enctype="multipart/form-data" use:enhance>
      <label for="file-input">选择文件:</label>
      <Input
        bind:ref={fileInput}
        disabled={loading}
        id="file-input"
        name="file"
        type="file"
        accept={acceptType}
        bind:files={$files}
        class="hidden"
        required
        {multiple}
        onchange={() => {
          fileInput?.form?.requestSubmit()
        }}
      />
    </form>
    <div class="mt-1.5 flex gap-3">
      {#each fileUrls as medium, i (i)}
        <div class="group relative flex h-32 w-32 flex-col items-center justify-center overflow-hidden rounded-md">
          <!-- 主图badge 开始 -->
          {#if multiple && medium === thumb && i === 0}
            <span
              class="absolute top-1 -left-7 z-10 -rotate-45 transform cursor-pointer bg-red-600 px-8 py-0.5 text-xs text-white"
            >
              主图
            </span>
          {/if}
          <!-- 主图badge 结束 -->
          <!-- 多图模式下 且非主图进行显示 -->
          {#if multiple && medium !== thumb}
            <div
              class="invisible absolute top-0 right-0 bottom-0 left-0 mx-auto bg-black/50 text-center transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100"
            >
              <div class="flex h-full flex-col items-center justify-center space-y-1.5">
                <Button size="sm" onclick={() => sortByIndex(i)}>设为主图</Button>
                <Button size="sm" variant="destructive" onclick={() => onDelete(i)}>删除图片</Button>
              </div>
            </div>
          {/if}
          <img src={medium} alt="" />
        </div>
      {/each}
      <!-- 是否显示图片上传组件 -->
      {#if fileUrls.length < maxCount}
        <button
          tabindex={0}
          onclick={open}
          class="flex h-32 w-32 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-border p-8 text-center"
        >
          <div class="mb-2 rounded-full bg-muted p-3">
            <Upload size={18} />
          </div>
          <p class="text-sm font-medium text-foreground">Upload</p>
        </button>
      {/if}
    </div>
  </div>
</Main>
