<script lang="ts">
  import Check from '@lucide/svelte/icons/check'
  import Language from '@lucide/svelte/icons/languages'
  import { locale } from 'svelte-i18n'

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

  const lng = $derived($appStore.locale)
  const locales: API.Locale[] = ['zh-CN', 'en-US']

  let setLocale = (value: API.Locale) => {
    locale.set(value)
    appStore.update(state => ({ ...state, locale: value }))
  }
</script>

<DropdownMenu open={false}>
  <DropdownMenuTrigger>
    {#snippet child({ props })}
      <Button {...props} variant="ghost" size="icon" class="scale-95 rounded-full">
        <Language class="size-[1.2rem]" />
        <span class="sr-only">Toggle language</span>
      </Button>
    {/snippet}
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    {#each locales as item (item)}
      <DropdownMenuItem onclick={() => setLocale(item)}>
        {#if item === 'zh-CN'}简体中文
        {:else if item === 'en-US'}English
        {/if}
        {#if item === lng}
          <Check size={14} class={cn('ms-auto')} />
        {/if}
      </DropdownMenuItem>
    {/each}
  </DropdownMenuContent>
</DropdownMenu>
