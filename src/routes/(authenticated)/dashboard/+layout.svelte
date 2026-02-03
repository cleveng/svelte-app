<script lang="ts">
  import { page } from '$app/state'

  import { AppSidebar, Header, ProfileDropdown, ThemeSwitch, TopNav, Search } from '$lib/components/layout'
  import SkipToMain from '$lib/components/skip-to-main.svelte'
  import { SidebarInset, SidebarProvider } from '$lib/components/ui/sidebar'

  import LayoutProvider from '$lib/context/layout-provider.svelte'
  import SearchProvider from '$lib/context/search-provider.svelte'
  import { appStore } from '$lib/stores/app.store'
  import { cn } from '$lib/utils'

  let { children } = $props()

  // 在服务端无法存储，只能在layout进行同步
  if (page.data?.token) {
    appStore.update(state => ({
      ...state,
      loggedIn: page.data?.loggedIn,
      token: page.data?.token,
    }))
  }

  const topNav = [
    {
      title: 'Overview',
      href: '/dashboard/overview',
      isActive: true,
      disabled: false,
    },
    {
      title: 'Customers',
      href: '/dashboard/customers',
      isActive: false,
      disabled: false,
    },
    {
      title: 'Products',
      href: '/dashboard/products',
      isActive: false,
      disabled: false,
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      isActive: false,
      disabled: false,
    },
  ]

  // sidebarState
  const sidebarState = $derived(page.data?.sidebarState)
</script>

<svelte:head>
  <title>管理系统</title>
</svelte:head>

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
        <Header>
          <TopNav links={topNav} />
          <div class="ms-auto flex items-center space-x-4">
            <Search />
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </Header>
        {@render children()}
      </SidebarInset>
    </SidebarProvider>
  </LayoutProvider>
</SearchProvider>
