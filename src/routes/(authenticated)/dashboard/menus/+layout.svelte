<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>菜单管理</title>
</svelte:head>

{@render children()}
