<script lang="ts">
  import Menu from '@lucide/svelte/icons/menu'

  import { resolve } from '$app/paths'
  import { page } from '$app/state'

  import { Button } from '$lib/components/ui/button'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '$lib/components/ui/dropdown-menu'

  import { cn } from '$lib/utils'

  export let className: string = ''
  export let links: {
    title: string
    href: string
    disabled?: boolean
  }[] = []

  let currentPath = page.url.pathname

  $: activeLinks = links.map(link => ({
    ...link,
    isActive: currentPath === link.href || currentPath.startsWith(link.href + '/'),
  }))
</script>

<div class="flex items-center">
  <!-- 移动端 Hamburger + Dropdown -->
  <div class="lg:hidden">
    <DropdownMenu open={false}>
      <DropdownMenuTrigger>
        {#snippet child({ props })}
          <Button {...props} variant="outline" size="icon" class="md:size-7">
            <Menu class="h-5 w-5" />
          </Button>
        {/snippet}
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="start" class="w-48">
        {#each activeLinks as { title, href, isActive, disabled } (href)}
          <DropdownMenuItem>
            <a
              href={resolve('/')}
              class={cn(
                'flex items-center px-2 py-1.5 text-sm transition-colors',
                isActive ? 'font-medium text-foreground' : 'text-muted-foreground',
                disabled && 'pointer-events-none opacity-50'
              )}
              aria-disabled={disabled}
              data-sveltekit-preload-data="hover"
            >
              {title}
            </a>
          </DropdownMenuItem>
        {/each}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <!-- 桌面端 水平导航 -->
  <nav class={cn('hidden items-center space-x-4 lg:flex xl:space-x-6', className)}>
    {#each activeLinks as { title, href, isActive, disabled } (href)}
      <a
        href={resolve('/')}
        class={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          isActive ? 'text-foreground' : 'text-muted-foreground',
          disabled && 'pointer-events-none opacity-50'
        )}
        aria-disabled={disabled}
        data-sveltekit-preload-data="hover"
      >
        {title}
      </a>
    {/each}
  </nav>
</div>
