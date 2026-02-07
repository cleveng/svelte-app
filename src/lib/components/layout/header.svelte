<script lang="ts">
  import { onDestroy, onMount } from 'svelte'

  import { browser } from '$app/environment'

  import { Separator } from '$lib/components/ui/separator'
  import { SidebarTrigger } from '$lib/components/ui/sidebar'

  import { cn } from '$lib/utils'

  export let fixed = false
  export let className = ''

  let offset = 0

  const onScroll = () => {
    if (!browser) return
    offset = document.body.scrollTop || document.documentElement.scrollTop
  }

  onMount(() => {
    if (browser) {
      document.addEventListener('scroll', onScroll, { passive: true })
    }
  })

  onDestroy(() => {
    if (browser) {
      document.removeEventListener('scroll', onScroll)
    }
  })
</script>

<header
  class={cn(
    'z-50 h-16',
    fixed && 'header-fixed peer/header sticky top-0 w-[inherit]',
    offset > 10 && fixed ? 'shadow' : 'shadow-none',
    className
  )}
  {...$$restProps}
>
  <div
    class={cn(
      'relative flex h-full items-center gap-3 p-4 sm:gap-4',
      offset > 10 && fixed && 'after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg'
    )}
  >
    <SidebarTrigger variant="outline" class="max-md:scale-125" />
    <Separator orientation="vertical" class="h-6" />
    <slot />
  </div>
</header>
