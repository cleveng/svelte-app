<script lang="ts">
  import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down'
  import Plus from '@lucide/svelte/icons/plus'

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from '$lib/components/ui/dropdown-menu'
  import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '$lib/components/ui/sidebar'

  const { isMobile } = useSidebar()

  const { teams } = $props()

  let activeTeam = $state(teams[0])
</script>

<SidebarMenu>
  <SidebarMenuItem>
    <DropdownMenu>
      <DropdownMenuTrigger>
        {#snippet child({ props })}
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            {...props}
          >
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <activeTeam.logo class="size-4" />
            </div>

            <div class="grid flex-1 text-start text-sm leading-tight">
              <span class="truncate font-semibold">{activeTeam.name}</span>
              <span class="truncate text-xs">{activeTeam.plan}</span>
            </div>

            <ChevronsUpDown class="ms-auto" />
          </SidebarMenuButton>
        {/snippet}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        class="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="start"
        side={isMobile ? 'bottom' : 'right'}
        sideOffset={4}
      >
        <DropdownMenuLabel class="text-xs text-muted-foreground">Teams</DropdownMenuLabel>

        {#each teams as team, index (team.name)}
          <DropdownMenuItem class="gap-2 p-2" onclick={() => (activeTeam = team)}>
            <div class="flex size-6 items-center justify-center rounded-sm border">
              <team.logo class="size-4 shrink-0" />
            </div>
            {team.name}
            <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
          </DropdownMenuItem>
        {/each}

        <DropdownMenuSeparator />

        <DropdownMenuItem class="gap-2 p-2">
          <div class="flex size-6 items-center justify-center rounded-md border bg-background">
            <Plus class="size-4" />
          </div>
          <div class="font-medium text-muted-foreground">Add team</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </SidebarMenuItem>
</SidebarMenu>
