<script lang="ts">
  import { RadioGroup } from 'radix-svelte'

  import IconThemeDark from '$lib/assets/custom/icon-theme-dark.svelte'
  import IconThemeLight from '$lib/assets/custom/icon-theme-light.svelte'
  import IconThemeSystem from '$lib/assets/custom/icon-theme-system.svelte'

  import { appStore } from '$lib/stores/app.store'
  import type { API } from '$lib/types/api'

  import RadioGroupItem from './radio-group-item.svelte'
  import SectionTitle from './section-title.svelte'

  const items = $state<API.ThemeItem[]>([
    {
      value: 'system',
      label: 'System',
      icon: IconThemeSystem,
    },
    {
      value: 'light',
      label: 'Light',
      icon: IconThemeLight,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: IconThemeDark,
    },
  ])

  let theme = $derived($appStore.theme)

  const changeTheme = (value: API.Theme) => {
    appStore.update(state => ({ ...state, theme: value }))
  }

  $effect(() => {
    changeTheme(theme)
  })
</script>

<div>
  <SectionTitle title="Theme" showReset={theme !== 'system'} onReset={() => changeTheme('system')} />
  <RadioGroup.Root
    bind:value={theme}
    class="grid w-full max-w-md grid-cols-3 gap-4"
    aria-label="Select theme preference"
    aria-describedby="theme-description"
  >
    {#each items as v (v.value)}
      <RadioGroupItem item={v} />
    {/each}
  </RadioGroup.Root>
  <div id="theme-description" class="sr-only">在系统预设、亮模式或暗模式之间进行选择。</div>
</div>
