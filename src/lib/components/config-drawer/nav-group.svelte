<script lang="ts">
  import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard'

  import { SidebarGroup, SidebarGroupLabel, SidebarMenu, useSidebar } from '$lib/components/ui/sidebar'

  import SidebarMenuCollapsedDropdown from './sidebar-menu-collapsed-dropdown.svelte'
  import SidebarMenuCollapsible from './sidebar-menu-collapsible.svelte'
  import SidebarMenuLink from './sidebar-menu-link.svelte'

  const { state, isMobile } = useSidebar()

  const navGroups = [
    {
      title: 'Dashboard',
      url: '/dashboard/accounts',
      icon: LayoutDashboard,
      items: [
        {
          title: 'create',
          url: '/dashboard/accounts/create',
        },
      ],
      badge: 3,
    },
    {
      title: 'Tasks',
      url: '/dashboard/menus',
      icon: LayoutDashboard,
      items: [],
    },
  ]
</script>

<SidebarGroup>
  <SidebarGroupLabel>General</SidebarGroupLabel>
  <SidebarMenu>
    {#each navGroups as group (group)}
      {#if group?.items.length === 0}
        <SidebarMenuLink item={group} href={group.url} />
      {:else if state === 'collapsed' && !isMobile}
        <SidebarMenuCollapsedDropdown item={group} href={group.url} />
      {:else}
        <SidebarMenuCollapsible item={group} href={group.url} />
      {/if}
    {/each}
  </SidebarMenu>
</SidebarGroup>
