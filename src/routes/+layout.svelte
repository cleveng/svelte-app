<script lang="ts">
  import { Toaster } from 'svelte-sonner'

  import { page } from '$app/state'

  import favicon from '$lib/assets/favicon.svg'

  import { appStore } from '$lib/stores/app.store'

  import './layout.css'

  let { children } = $props()

  if (!page.data?.token) {
    appStore.update(state => ({
      ...state,
      loggedIn: false,
      token: null,
    }))
  }
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>首页</title>
</svelte:head>

<Toaster position="top-center" richColors />
{@render children()}
