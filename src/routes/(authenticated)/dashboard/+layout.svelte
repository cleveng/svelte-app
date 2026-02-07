<script lang="ts">
  import { page } from '$app/state'

  import { ConfigDrawer } from '$lib/components/config-drawer'
  import { AuthenticatedLayout, Header, ProfileDropdown, ThemeSwitch, TopNav, Search } from '$lib/components/layout'

  import { appStore } from '$lib/stores/app.store'

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
</script>

<svelte:head>
  <title>管理系统</title>
</svelte:head>

<AuthenticatedLayout>
  <Header>
    <TopNav links={topNav} />
    <div class="ms-auto flex items-center space-x-4">
      <Search />
      <ThemeSwitch />
      <ProfileDropdown />
      <ConfigDrawer />
    </div>
  </Header>
  {@render children()}
</AuthenticatedLayout>
