<script lang="ts">
  import RotateCcw from '@lucide/svelte/icons/rotate-ccw'

  import { Button } from '$lib/components/ui/button'

  import { cn } from '$lib/utils'

  const {
    title,
    showReset = false,
    onReset,
    className,
  } = $props<{
    title: string
    showReset?: boolean
    onReset?: () => void
    className?: string
  }>()
</script>

<div class={cn('mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground', className)}>
  {title}
  {#if showReset && onReset}
    <Button size="icon" variant="secondary" class="size-4 rounded-full" onclick={onReset}>
      <RotateCcw className="size-3" />
    </Button>
  {/if}
</div>
