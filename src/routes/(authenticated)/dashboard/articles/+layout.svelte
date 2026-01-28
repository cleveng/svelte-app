<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>文章管理</title>
</svelte:head>

{@render children()}
