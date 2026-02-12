<script lang="ts">
  import Telescope from '@lucide/svelte/icons/telescope'

  import { goto } from '$app/navigation'
  import { resolve } from '$app/paths'

  import { Button } from '$lib/components/ui/button'
</script>

<div class="h-svh">
  <div class="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
    <Telescope size={72} />
    <h1 class="text-4xl leading-tight font-bold">Coming Soon!</h1>
    <p class="text-center text-muted-foreground">
      This page has not been created yet. <br />
      Stay tuned though!
    </p>
    <div class="mt-6 flex gap-4">
      <Button variant="outline" onclick={() => goto(resolve('/'))}>Go Back</Button>
      <Button onclick={() => goto(resolve('/'))}>Back to Home</Button>
    </div>
  </div>
</div>
