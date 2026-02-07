<script lang="ts">
  import Search from '@lucide/svelte/icons/search'

  import { Button } from '$lib/components/ui/button'

  import { cn } from '$lib/utils'

  let {
    placeholder = 'Search',
    className,
    ...props
  } = $props<{
    placeholder?: string
    className?: string
  }>()
</script>

<Button
  variant="outline"
  class={cn(
    'group relative h-8 w-full flex-1 justify-start rounded-md bg-muted/25 text-sm font-normal text-muted-foreground shadow-none hover:bg-accent sm:w-40 sm:pe-12 md:flex-none lg:w-52 xl:w-64',
    className
  )}
  onclick={() => {}}
  {...props}
>
  <Search aria-hidden="true" class="absolute start-1.5 top-1/2 -translate-y-1/2" size={16} />
  <span class="ms-4">{placeholder}</span>

  <kbd
    class="pointer-events-none absolute end-[0.3rem] top-[0.3rem] hidden h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 select-none group-hover:bg-accent sm:flex"
  >
    <span class="text-xs">⌘</span>K
  </kbd>
</Button>
