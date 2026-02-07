<script lang="ts">
  import AudioWaveform from '@lucide/svelte/icons/audio-waveform'
  import Command from '@lucide/svelte/icons/command'
  import GalleryVerticalEnd from '@lucide/svelte/icons/gallery-vertical-end'

  import { NavGroup } from '$lib/components/config-drawer'
  import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '$lib/components/ui/sidebar'

  import NavUser from './nav-user.svelte'
  import TeamSwitcher from './team-switcher.svelte'

  const teams = $state([
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ])
</script>

<Sidebar>
  <SidebarHeader>
    <TeamSwitcher {teams} />
  </SidebarHeader>
  <SidebarContent>
    <NavGroup />
  </SidebarContent>
  <SidebarFooter>
    <NavUser />
  </SidebarFooter>
  <SidebarRail />
</Sidebar>
