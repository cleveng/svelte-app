<script lang="ts">
  import { resolve } from '$app/paths'
  import { page } from '$app/state'

  import { Button } from '$lib/components/ui/button/index.js'

  import { appStore } from '$lib/stores/app.store'

  let { children } = $props()

  // 在服务端无法存储，只能在layout进行同步
  if (page.data?.token) {
    appStore.update(state => ({
      ...state,
      loggedIn: page.data?.loggedIn,
      token: page.data?.token,
    }))
  }
</script>

<svelte:head>
  <title>管理系统</title>
</svelte:head>

<div class="mx-auto max-w-3xl">
  <form method="POST" action="/logout">
    <button>退出</button>
  </form>
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
