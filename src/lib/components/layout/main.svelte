<script lang="ts">
  import { cn } from '$lib/utils'

  export let fixed = false
  export let fluid = false
  export let className = ''
</script>

<main
  data-layout={fixed ? 'fixed' : 'auto'}
  class={cn(
    'px-4 py-6',
    fixed && 'flex grow flex-col overflow-hidden',
    !fluid && '@7xl/content:mx-auto @7xl/content:w-full @7xl/content:max-w-7xl',
    className
  )}
  {...$$restProps}
>
  <slot />
</main>
