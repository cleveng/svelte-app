<script lang="ts">
  import { page } from '$app/state'

  import { AppSidebar } from '$lib/components/app-sidebar'
  import { SkipToMain } from '$lib/components/layout'
  import { SidebarInset, SidebarProvider } from '$lib/components/ui/sidebar'

  import LayoutProvider from '$lib/context/layout-provider.svelte'
  import SearchProvider from '$lib/context/search-provider.svelte'
  import { cn } from '$lib/utils'

  let { children } = $props()

  // sidebarState
  const sidebarState = $derived(page.data?.sidebarState)
</script>

<SearchProvider>
  <LayoutProvider>
    <SidebarProvider open={sidebarState}>
      <SkipToMain />
      <AppSidebar />
      <SidebarInset
        class={cn(
          // Set content container, so we can use container queries
          '@container/content',

          // If layout is fixed, set the height
          // to 100svh to prevent overflow
          'has-[[data-layout=fixed]]:h-svh',

          // If layout is fixed and sidebar is inset,
          // set the height to 100svh - spacing (total margins) to prevent overflow
          'peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]'
        )}
      >
        {@render children()}
      </SidebarInset>
    </SidebarProvider>
  </LayoutProvider>
</SearchProvider>
