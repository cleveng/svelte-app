<script lang="ts">
  import { Badge } from '$lib/components/ui/badge'

  let { children } = $props()
</script>

<Badge class="rounded-full px-1 py-0 text-xs">{@render children()}</Badge>
