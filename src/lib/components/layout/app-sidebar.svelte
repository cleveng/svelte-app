<script lang="ts">
  import AppTitle from './app-title.svelte'
  import NavUser from './nav-user.svelte'

  import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
</script>

<Sidebar>
  <SidebarHeader>
    <AppTitle />
  </SidebarHeader>
  <SidebarContent></SidebarContent>
  <SidebarFooter>
    <NavUser />
  </SidebarFooter>
  <SidebarRail />
</Sidebar>
