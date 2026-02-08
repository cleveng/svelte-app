<script lang="ts">
  import BadgeCheck from '@lucide/svelte/icons/badge-check'
  import Bell from '@lucide/svelte/icons/bell'
  import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down'
  import CreditCard from '@lucide/svelte/icons/credit-card'
  import LogOut from '@lucide/svelte/icons/log-out'
  import Sparkles from '@lucide/svelte/icons/sparkles'

  import { page } from '$app/state'

  import SignOutDialog from '$lib/components/layout/sign-out-dialog.svelte'
  import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '$lib/components/ui/dropdown-menu'
  import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '$lib/components/ui/sidebar'

  const { isMobile } = useSidebar()

  let open = $state<boolean>(false)
  const profile = page.data?.profile
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
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage src={profile?.profile_url} alt={profile?.username} />
              <AvatarFallback class="rounded-lg">
                {profile?.username?.charAt(0) ?? 'M'}
              </AvatarFallback>
            </Avatar>

            <div class="grid flex-1 text-start text-sm leading-tight">
              <span class="truncate font-semibold">
                {profile?.username}
              </span>
              {#if profile?.email}
                <span class="truncate text-xs">{profile.email}</span>
              {/if}
            </div>

            <ChevronsUpDown class="ms-auto size-4" />
          </SidebarMenuButton>
        {/snippet}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        class="w-var(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage src={profile?.profile_url} alt={profile?.username} />
              <AvatarFallback class="rounded-lg">
                {profile?.username?.charAt(0) ?? 'M'}
              </AvatarFallback>
            </Avatar>

            <div class="grid flex-1 text-start text-sm leading-tight">
              <span class="truncate font-semibold">{profile?.username}</span>
              {#if profile?.email}
                <span class="truncate text-xs">{profile.email}</span>
              {/if}
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem onclick={() => {}}>
            <BadgeCheck />
            Account
          </DropdownMenuItem>

          <DropdownMenuItem onclick={() => {}}>
            <CreditCard />
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem onclick={() => {}}>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" onclick={() => (open = true)}>
          <LogOut />
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </SidebarMenuItem>
</SidebarMenu>

<SignOutDialog {open} onOpenChange={() => (open = false)} />
