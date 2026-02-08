<script lang="ts">
  import Settings from '@lucide/svelte/icons/settings'

  import { Button } from '$lib/components/ui/button'
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from '$lib/components/ui/sheet'

  import { appStore } from '$lib/stores/app.store'

  import DirConfig from './dir-config.svelte'
  import LayoutConfig from './layout-config.svelte'
  import SidebarConfig from './sidebar-config.svelte'
  import ThemeConfig from './theme-config.svelte'

  const handleReset = () => {
    appStore.update(state => ({ ...state, collapsible: 'icon', dir: 'ltr', sidebar: 'sidebar', theme: 'system' }))
  }
</script>

<Sheet>
  <SheetTrigger>
    <Button
      size="icon"
      variant="ghost"
      aria-label="Open theme settings"
      aria-describedby="config-drawer-description"
      class="rounded-full"
    >
      <Settings aria-hidden="true" />
    </Button>
  </SheetTrigger>
  <SheetContent class="flex flex-col">
    <SheetHeader class="pb-0 text-start">
      <SheetTitle>Theme Settings</SheetTitle>
      <SheetDescription id="config-drawer-description">
        Adjust the appearance and layout to suit your preferences.
      </SheetDescription>
    </SheetHeader>
    <div class="space-y-6 overflow-y-auto px-4">
      <ThemeConfig />
      <SidebarConfig />
      <LayoutConfig />
      <DirConfig />
    </div>
    <SheetFooter class="gap-2">
      <Button aria-label="Reset all settings to default values" onclick={handleReset}>Reset</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
