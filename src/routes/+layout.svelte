<script lang="ts">
  import { setContextClient } from '@urql/svelte'
  import { Toaster } from 'svelte-sonner'

  import favicon from '$lib/assets/favicon.svg'

  import '$lib/i18n'
  import client from '$lib/urql-client'

  import './layout.css'

  let { children } = $props()

  setContextClient(client)
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>首页</title>
</svelte:head>

<Toaster position="top-center" richColors />
{@render children()}
