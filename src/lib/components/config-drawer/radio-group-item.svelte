<script lang="ts">
  import CircleCheckBig from '@lucide/svelte/icons/circle-check-big'
  import { RadioGroup } from 'radix-svelte'

  import type { API } from '$lib/types/api'
  import { cn } from '$lib/utils'

  const { item, isTheme = false } = $props<{
    item: API.ThemeItem
    isTheme?: boolean
  }>()
</script>

<RadioGroup.Item
  value={item.value}
  class={cn('group outline-none', 'transition duration-200 ease-in')}
  aria-label={`Select ${item.label.toLowerCase()}`}
  aria-describedby={`${item.value}-description`}
>
  <div
    class={cn(
      'relative rounded-[6px] ring-[1px] ring-border',
      'group-data-[state=checked]:shadow-2xl group-data-[state=checked]:ring-primary',
      'group-focus-visible:ring-2'
    )}
    role="img"
    aria-hidden="false"
    aria-label={`${item.label} option preview`}
  >
    <CircleCheckBig
      class={cn(
        'size-6 fill-primary stroke-white dark:stroke-indigo-600',
        'group-data-[state=unchecked]:hidden',
        'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'
      )}
      aria-hidden="true"
    />
    <item.icon
      dir={item.dir}
      class={cn(
        !isTheme &&
          'fill-primary stroke-primary group-data-[state=unchecked]:fill-muted-foreground group-data-[state=unchecked]:stroke-muted-foreground',
        item.dir === 'rtl' && 'rotate-y-180'
      )}
      aria-hidden="true"
    />
  </div>
  <div class="mt-1 text-xs" id={`${item.value}-description`} aria-live="polite">
    {item.label}
  </div>
</RadioGroup.Item>
