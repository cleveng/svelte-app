<script lang="ts">
  import Check from '@lucide/svelte/icons/check'
  import Moon from '@lucide/svelte/icons/moon'
  import Sun from '@lucide/svelte/icons/sun'

  import { Button } from '$lib/components/ui/button'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '$lib/components/ui/dropdown-menu'

  import { appStore } from '$lib/stores/app.store'
  import type { API } from '$lib/types/api'
  import { cn } from '$lib/utils'

  let theme = $derived($appStore.theme)
  const themes: API.Theme[] = ['light', 'dark', 'system']

  let setTheme = (value: API.Theme) => {
    appStore.update(state => ({ ...state, theme: value }))
  }
</script>

<DropdownMenu open={false}>
  <DropdownMenuTrigger>
    {#snippet child({ props })}
      <Button {...props} variant="ghost" size="icon" class="scale-95 rounded-full">
        <Sun class="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon class="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    {/snippet}
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    {#each themes as item (item)}
      <DropdownMenuItem onclick={() => setTheme(item)}>
        {#if item === 'light'}亮色模式
        {:else if item === 'dark'}暗色模式
        {:else}跟随系统{/if}
        {#if item === theme}
          <Check size={14} class={cn('ms-auto')} />
        {/if}
      </DropdownMenuItem>
    {/each}
  </DropdownMenuContent>
</DropdownMenu>
