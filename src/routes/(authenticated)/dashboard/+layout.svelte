<script lang="ts">
  import { resolve } from '$app/paths'
  import { Button } from '$lib/components/ui/button/index.js'
  let { children } = $props()
</script>

<svelte:head>
  <title>管理系统</title>
</svelte:head>

<div class="mx-auto max-w-3xl">
  <div class="grid grid-cols-5 gap-4">
    <Button variant="link" class="text-muted-foreground" size="sm">
      <a href={resolve('/dashboard/accounts')}> accounts </a>
    </Button>
    <Button variant="link" class="text-muted-foreground" size="sm">
      <a href={resolve('/dashboard/menus')}> menus </a>
    </Button>
    <Button variant="link" class="text-muted-foreground" size="sm">
      <a href={resolve('/dashboard/permissions')}> permissions </a>
    </Button>
    <Button variant="link" class="text-muted-foreground" size="sm">
      <a href={resolve('/dashboard/roles')}> roles </a>
    </Button>
    <Button variant="link" class="text-muted-foreground" size="sm">
      <a href={resolve('/dashboard/articles')}> articles </a>
    </Button>
  </div>
</div>

{@render children()}
