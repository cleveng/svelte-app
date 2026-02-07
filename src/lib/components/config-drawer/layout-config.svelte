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

  let layout = $derived($appStore.layout)

  const changeLayout = (value: API.Collapsible) => {
    appStore.update(state => ({ ...state, layout: value }))
  }

  $effect(() => {
    changeLayout(layout)
  })
</script>

<div>
  <SectionTitle title="Layout" showReset={layout !== 'default'} onReset={() => changeLayout('default')} />
  <RadioGroup.Root
    bind:value={layout}
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
