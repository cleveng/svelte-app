<script lang="ts">
  import Menu from '@lucide/svelte/icons/menu'
  import X from '@lucide/svelte/icons/x'

  import { resolve } from '$app/paths'

  import { Button } from '$lib/components/ui/button/index.js'
  import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '$lib/components/ui/sidebar'

  import { cn } from '$lib/utils'

  const { setOpenMobile, toggle } = useSidebar()
</script>

<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton size="lg" class="gap-0 py-0 hover:bg-transparent active:bg-transparent">
      <div>
        <a
          href={resolve('/dashboard')}
          onclick={() => setOpenMobile(false)}
          class="grid flex-1 text-start text-sm leading-tight"
        >
          <span class="truncate font-bold">Shadcn-Admin</span>
          <span class="truncate text-xs">Vite + ShadcnUI</span>
        </a>
        <Button
          data-sidebar="trigger"
          data-slot="sidebar-trigger"
          class={cn(
            'aspect-square size-8 max-md:scale-125',
            'bg-transparent hover:bg-accent/50 active:bg-accent',
            'rounded-md transition-colors'
          )}
          onclick={() => toggle?.()}
          aria-label="Toggle Sidebar"
        >
          <X class="h-5 w-5 md:hidden" />
          <Menu class="h-5 w-5 max-md:hidden" />
          <span class="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
    </SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>
