<script lang="ts">
  import { resolve } from '$app/paths'

  import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '$lib/components/ui/sidebar'

  import type { API } from '$lib/types/api'

  import NavBadge from './nav-badge.svelte'

  const { setOpenMobile } = useSidebar()

  let { item, href } = $props()

  const checkIsActive = (href: string, item: API.NavItem, mainNav = false): boolean => {
    return (
      href === item.url || // /endpoint?search=param
      href.split('?')[0] === item.url || // endpoint
      !!item?.items?.filter(i => i.url === href).length || // if child nav is active
      (mainNav && href.split('/')[1] !== '' && href.split('/')[1] === item?.url?.split('/')[1])
    )
  }
</script>

<SidebarMenuItem>
  <SidebarMenuButton isActive={checkIsActive(href, item)} tooltipContent={item.title}>
    {#snippet child({ props })}
      <a href={resolve(item.url)} {...props} onclick={() => setOpenMobile(false)}>
        {#if item.icon}
          <item.icon />
        {/if}
        <span>{item.title}{checkIsActive(href, item) ? '' : ''}</span>
        {#if item.badge}
          <NavBadge>{item.badge}</NavBadge>
        {/if}
      </a>
    {/snippet}
  </SidebarMenuButton>
</SidebarMenuItem>
