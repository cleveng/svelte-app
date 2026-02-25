<script lang="ts">
  import Bell from '@lucide/svelte/icons/bell'
  import Monitor from '@lucide/svelte/icons/monitor'
  import Palette from '@lucide/svelte/icons/palette'
  import UserCog from '@lucide/svelte/icons/user-cog'
  import Wrench from '@lucide/svelte/icons/wrench'

  import { resolve } from '$app/paths'

  import { buttonVariants } from '$lib/components/ui/button'
  import { ScrollArea } from '$lib/components/ui/scroll-area'
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select'

  import { cn } from '$lib/utils'

  const sidebarNavItems = [
    {
      title: 'Profile',
      href: '/settings',
      icon: UserCog,
    },
    {
      title: 'Account',
      href: '/settings/account',
      icon: Wrench,
    },
    {
      title: 'Appearance',
      href: '/settings/appearance',
      icon: Palette,
    },
    {
      title: 'Notifications',
      href: '/settings/notifications',
      icon: Bell,
    },
    {
      title: 'Display',
      href: '/settings/display',
      icon: Monitor,
    },
  ]
</script>

<div class="p-1 md:hidden">
  <Select type="single">
    <SelectTrigger class="h-12 sm:w-48">Theme</SelectTrigger>
    <SelectContent>
      {#each sidebarNavItems as item (item.title)}
        <SelectItem value={item.href}>
          <div class="flex gap-x-4 px-2 py-1">
            {#if item.icon}
              <item.icon size={18} />
            {/if}
            <span class="text-md">{item.title}</span>
          </div>
        </SelectItem>
      {/each}
    </SelectContent>
  </Select>
</div>

<ScrollArea type="always" class="hidden w-full min-w-40 bg-background px-1 py-2 md:block">
  <nav class="flex space-x-2 py-1 lg:flex-col lg:space-y-1 lg:space-x-0">
    {#each sidebarNavItems as item (item.title)}
      <a
        href={resolve('/')}
        class={cn(buttonVariants({ variant: 'ghost' }), 'hover:bg-accent hover:underline', 'justify-start')}
      >
        <span class="me-2">
          <item.icon size={18} />
        </span>
        {item.title}
      </a>
    {/each}
  </nav>
</ScrollArea>
