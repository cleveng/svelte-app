<script lang="ts">
  import Upload from '@lucide/svelte/icons/upload'
  import { toast } from 'svelte-sonner'
  import { superForm, fileProxy } from 'sveltekit-superforms'
  import { zod4Client } from 'sveltekit-superforms/adapters'

  import { Button } from '$lib/components/ui/button/index.js'
  import { Input } from '$lib/components/ui/input/index.js'

  import { formSchema } from './schema'

  type Props = {
    maxCount?: number
    acceptType?: string
    thumb?: string
    media?: string[]
  }

  const { maxCount = 1, acceptType = '.png,.jpeg,.jpg,.webp', thumb = '', media = [] }: Props = $props()

  // const extensions = $derived(acceptType.split(',').map(ext => ext.trim().replace(/^\./, '')))

  const fileUrls = $state<string[]>(maxCount === 1 ? (thumb ? [thumb] : []) : [...media])

  // 多选图片模式
  const multiple = $derived(maxCount > 1)

  // const isPrimary = $derived(maxCount === 1 ? false : thumb)

  let loading = $state<boolean>(false)

  const form = superForm(
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
  const files = fileProxy(params, 'file')

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

<form method="POST" enctype="multipart/form-data" use:enhance>
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
