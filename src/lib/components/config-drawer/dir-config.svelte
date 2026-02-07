<script lang="ts">
  import { RadioGroup } from 'radix-svelte'

  import IconDir from '$lib/assets/custom/icon-dir.svelte'

  import { appStore } from '$lib/stores/app.store'
  import type { API } from '$lib/types/api'

  import RadioGroupItem from './radio-group-item.svelte'
  import SectionTitle from './section-title.svelte'

  const items = $state<API.ThemeItem[]>([
    {
      value: 'ltr',
      label: 'Left to Right',
      icon: IconDir,
      dir: 'ltr',
    },
    {
      value: 'rtl',
      label: 'Right to Left',
      icon: IconDir,
      dir: 'rtl',
    },
  ])

  let dir = $derived($appStore.dir)

  const changeDir = (value: API.Direction) => {
    appStore.update(state => ({ ...state, dir: value }))
  }

  $effect(() => {
    changeDir(dir)
  })
</script>

<div>
  <SectionTitle title="Direction" showReset={dir !== 'ltr'} onReset={() => changeDir('ltr')} />
  <RadioGroup.Root
    bind:value={dir}
    class="grid w-full max-w-md grid-cols-3 gap-4"
    aria-label="Select site direction"
    aria-describedby="direction-description"
  >
    {#each items as v (v.value)}
      <RadioGroupItem item={v} />
    {/each}
  </RadioGroup.Root>
  <div id="theme-description" class="sr-only">
    Choose between default expanded, compact icon-only, or full layout mode
  </div>
</div>
