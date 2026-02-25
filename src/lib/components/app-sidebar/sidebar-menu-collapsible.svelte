<script lang="ts">
  import ChevronRight from '@lucide/svelte/icons/chevron-right'

  import { resolve } from '$app/paths'

  import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '$lib/components/ui/collapsible'
  import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
  } from '$lib/components/ui/sidebar'

  import type { API } from '$lib/types/api'

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

<Collapsible class="group/collapsible" open={checkIsActive(href, item, true)}>
  <SidebarMenuItem>
    <CollapsibleTrigger>
      {#snippet child({ props })}
        <SidebarMenuButton {...props}>
          {#if item.icon}
            <item.icon />
          {/if}
          <span>{item.title}</span>
          <ChevronRight
            class="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180"
          />
        </SidebarMenuButton>
      {/snippet}
    </CollapsibleTrigger>
    <CollapsibleContent class="CollapsibleContent">
      <SidebarMenuSub>
        {#each item.items as v (v.url)}
          <SidebarMenuSubItem>
            <SidebarMenuSubButton isActive={checkIsActive(href, v)}>
              {#snippet child({ props })}
                <a href={resolve(v.url)} onclick={() => setOpenMobile(false)} {...props}>
                  {#if v.icon}
                    <v.icon />
                  {/if}
                  <span>{v.title}</span>
                </a>
              {/snippet}
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        {/each}
      </SidebarMenuSub>
    </CollapsibleContent>
  </SidebarMenuItem>
</Collapsible>
