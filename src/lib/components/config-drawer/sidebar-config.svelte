<script lang="ts">
  import { RadioGroup } from 'radix-svelte'

  import IconSidebarFloating from '$lib/assets/custom/icon-sidebar-floating.svelte'
  import IconSidebarInset from '$lib/assets/custom/icon-sidebar-inset.svelte'
  import IconSidebarSidebar from '$lib/assets/custom/icon-sidebar-sidebar.svelte'

  import { appStore } from '$lib/stores/app.store'
  import type { API } from '$lib/types/api'

  import RadioGroupItem from './radio-group-item.svelte'
  import SectionTitle from './section-title.svelte'

  const items = $state<API.ThemeItem[]>([
    {
      value: 'inset',
      label: 'Inset',
      icon: IconSidebarInset,
    },
    {
      value: 'floating',
      label: 'Floating',
      icon: IconSidebarFloating,
    },
    {
      value: 'sidebar',
      label: 'Sidebar',
      icon: IconSidebarSidebar,
    },
  ])

  let sidebar = $derived($appStore.sidebar)

  const changeSidebar = (value: API.Variant) => {
    appStore.update(state => ({ ...state, sidebar: value }))
  }

  $effect(() => {
    changeSidebar(sidebar)
  })
</script>

<div>
  <SectionTitle title="Sidebar" showReset={sidebar === 'inset'} onReset={() => changeSidebar('inset')} />
  <RadioGroup.Root
    bind:value={sidebar}
    class="grid w-full max-w-md grid-cols-3 gap-4"
    aria-label="Select sidebar style"
    aria-describedby="sidebar-description"
  >
    {#each items as v (v.value)}
      <RadioGroupItem item={v} />
    {/each}
  </RadioGroup.Root>
  <div id="theme-description" class="sr-only">Choose between inset, floating, or standard sidebar layout</div>
</div>
