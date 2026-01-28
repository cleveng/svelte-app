<script lang="ts">
  let { children } = $props()
</script>

<svelte:head>
  <title>应用管理</title>
</svelte:head>

{@render children()}
