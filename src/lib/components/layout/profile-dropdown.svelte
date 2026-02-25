<script lang="ts">
  import { resolve } from '$app/paths'
  import { page } from '$app/state'

  import SignOutDialog from '$lib/components/layout/sign-out-dialog.svelte'
  import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar'
  import { Button } from '$lib/components/ui/button'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from '$lib/components/ui/dropdown-menu'

  const profile = page.data?.profile

  let open = $state<boolean>(false)
</script>

<DropdownMenu open={false}>
  <DropdownMenuTrigger>
    {#snippet child({ props })}
      <Button {...props} variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar class="h-8 w-8">
          <AvatarImage src={profile?.profile_url} alt={profile?.username} />
          <AvatarFallback class="uppercase">
            {profile?.username?.charAt(0) ?? 'M'}
          </AvatarFallback>
        </Avatar>
      </Button>
    {/snippet}
  </DropdownMenuTrigger>

  <DropdownMenuContent class="w-56" align="end">
    <DropdownMenuLabel class="font-normal">
      <div class="flex flex-col gap-1.5">
        <p class="text-sm leading-none font-medium">
          {profile?.username ?? 'User'}
        </p>
        {#if profile?.email}
          <p class="text-xs leading-none text-muted-foreground">
            {profile.email}
          </p>
        {/if}
      </div>
    </DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuGroup>
      <DropdownMenuItem>
        <a
          href={resolve('/dashboard/profile')}
          class="flex w-full items-center justify-between"
          data-sveltekit-preload-data="hover"
        >
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </a>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <a href={resolve('/')} class="flex w-full items-center justify-between" data-sveltekit-preload-data="hover">
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </a>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <a href={resolve('/')} class="flex w-full items-center justify-between" data-sveltekit-preload-data="hover">
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </a>
      </DropdownMenuItem>

      <DropdownMenuItem>New Team</DropdownMenuItem>
    </DropdownMenuGroup>

    <DropdownMenuSeparator />

    <DropdownMenuItem variant="destructive" class="cursor-pointer" onclick={() => (open = true)}>
      Sign Out
      <DropdownMenuShortcut class="text-current">⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

<SignOutDialog {open} onOpenChange={() => (open = false)} />
