<script lang="ts">
  import Bell from '@lucide/svelte/icons/bell'
  import CircleQuestionMark from '@lucide/svelte/icons/circle-question-mark'
  import Cog from '@lucide/svelte/icons/cog'
  import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard'
  import ListTodo from '@lucide/svelte/icons/list-todo'
  import MessagesSquare from '@lucide/svelte/icons/messages-square'
  import Monitor from '@lucide/svelte/icons/monitor'
  import Package from '@lucide/svelte/icons/package'
  import Palette from '@lucide/svelte/icons/palette'
  import UserCog from '@lucide/svelte/icons/user-cog'
  import Users from '@lucide/svelte/icons/users'
  import Wrench from '@lucide/svelte/icons/wrench'

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
      url: '/dashboard/menus#tasks',
      icon: ListTodo,
      items: [],
    },
    {
      title: 'Apps',
      url: '/dashboard/menus#apps',
      icon: Package,
      items: [],
    },
    {
      title: 'Messages',
      url: '/dashboard/menus#messages',
      icon: MessagesSquare,
      items: [],
      badge: 5,
    },
    {
      title: 'Users',
      url: '/dashboard/menus#users',
      icon: Users,
      items: [],
      badge: 5,
    },
    {
      title: 'Settings',
      url: '/dashboard/profile',
      icon: Cog,
      items: [
        {
          title: 'Profile',
          url: '/dashboard/profile#user-cog',
          icon: UserCog,
        },
        {
          title: 'Account',
          url: '/dashboard/profile#account',
          icon: Wrench,
        },
        {
          title: 'Account',
          url: '/dashboard/profile#appearance',
          icon: Palette,
        },
        {
          title: 'Notifications',
          url: '/dashboard/profile#notifications',
          icon: Bell,
        },
        {
          title: 'Monitor',
          url: '/dashboard/profile#monitor',
          icon: Monitor,
        },
      ],
    },
    {
      title: 'Help Center',
      url: '/help-center',
      icon: CircleQuestionMark,
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
