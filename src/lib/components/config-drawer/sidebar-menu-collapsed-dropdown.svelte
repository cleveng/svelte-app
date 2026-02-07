<script lang="ts">
  import ChevronRight from '@lucide/svelte/icons/chevron-right'

  import { resolve } from '$app/paths'

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '$lib/components/ui/dropdown-menu'
  import { SidebarMenuButton, SidebarMenuItem } from '$lib/components/ui/sidebar'

  import type { API } from '$lib/types/api'

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
  <DropdownMenu>
    <DropdownMenuTrigger>
      <SidebarMenuButton tooltipContent={item.title} isActive={checkIsActive(href, item)}>
        {#if item.icon}
          <item.icon />
        {/if}
        <span>{item.title}</span>
        <ChevronRight class="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start" sideOffset={4}>
      <DropdownMenuLabel></DropdownMenuLabel>
      <DropdownMenuSeparator />
      {#each item.items as v (v.url)}
        <DropdownMenuItem>
          {#snippet child({ props })}
            <a href={resolve(v.url)} class={`${checkIsActive(v.url, v) ? 'active' : ''}`} {...props}>
              {#if v.icon}
                <v.icon />
              {/if}
              <span class="max-w-52 text-wrap">{v.title}</span>
            </a>
          {/snippet}
        </DropdownMenuItem>
      {/each}
    </DropdownMenuContent>
  </DropdownMenu>
</SidebarMenuItem>
