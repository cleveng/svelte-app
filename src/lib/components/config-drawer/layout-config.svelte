<script lang="ts">
  import { RadioGroup } from 'radix-svelte'

  import IconLayoutCompact from '$lib/assets/custom/icon-layout-compact.svelte'
  import IconLayoutDefault from '$lib/assets/custom/icon-layout-default.svelte'
  import IconLayoutFull from '$lib/assets/custom/icon-layout-full.svelte'

  import { appStore } from '$lib/stores/app.store'
  import type { API } from '$lib/types/api'

  import RadioGroupItem from './radio-group-item.svelte'
  import SectionTitle from './section-title.svelte'

  const items = $state<API.ThemeItem[]>([
    {
      value: 'default',
      label: 'Default',
      icon: IconLayoutDefault,
    },
    {
      value: 'icon',
      label: 'Compact',
      icon: IconLayoutCompact,
    },
    {
      value: 'offcanvas',
      label: 'Full layout',
      icon: IconLayoutFull,
    },
  ])

  let collapsible = $derived($appStore.collapsible)

  const changeLayout = (value: API.Collapsible) => {
    if (value === 'default') return
    appStore.update(state => ({ ...state, collapsible: value }))
  }

  $effect(() => {
    changeLayout(collapsible)
  })
</script>

<div>
  <SectionTitle title="Layout" showReset={collapsible !== 'icon'} onReset={() => changeLayout('icon')} />
  <RadioGroup.Root
    bind:value={collapsible}
    class="grid w-full max-w-md grid-cols-3 gap-4"
    aria-label="Select layout style"
    aria-describedby="layout-description"
  >
    {#each items as v (v.value)}
      <RadioGroupItem item={v} />
    {/each}
  </RadioGroup.Root>
  <div id="theme-description" class="sr-only">
    Choose between default expanded, compact icon-only, or full layout mode
  </div>
</div>
