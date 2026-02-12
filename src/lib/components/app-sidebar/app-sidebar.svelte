<script lang="ts">
  import AudioWaveform from '@lucide/svelte/icons/audio-waveform'
  import Command from '@lucide/svelte/icons/command'
  import GalleryVerticalEnd from '@lucide/svelte/icons/gallery-vertical-end'

  import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '$lib/components/ui/sidebar'

  import { appStore } from '$lib/stores/app.store'

  import NavGroup from './nav-group.svelte'
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

  let collapsible = $derived($appStore.collapsible)
  let sidebar = $derived($appStore.sidebar)
</script>

<Sidebar {collapsible} variant={sidebar}>
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
