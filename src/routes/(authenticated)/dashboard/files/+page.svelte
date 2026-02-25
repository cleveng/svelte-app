<script lang="ts">
  import ArrowDownAZ from '@lucide/svelte/icons/arrow-down-a-z'
  import ArrowUpAZ from '@lucide/svelte/icons/arrow-up-a-z'
  import Eye from '@lucide/svelte/icons/eye'
  import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal'

  import { Main } from '$lib/components/layout'
  import { MediumUpload } from '$lib/components/medium-upload'
  import { Button } from '$lib/components/ui/button/index.js'
  import { Input } from '$lib/components/ui/input/index.js'
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select'
  import { Separator } from '$lib/components/ui/separator'

  import type { PageData } from './$types'

  const props = $props<{ data: PageData }>()

  let search = $state<string>('All Apps')

  const thumb = $state<string>()
  const media = $state<string[]>([])
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
    <label for="file-input">选择文件:</label>
    <MediumUpload {media} {thumb} maxCount={5} />
  </div>
</Main>
