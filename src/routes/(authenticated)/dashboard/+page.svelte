<script lang="ts">
  import { onMount } from 'svelte'
  import { toast } from 'svelte-sonner'

  import { resolve } from '$app/paths'

  import { Main } from '$lib/components/layout'
  import { Button } from '$lib/components/ui/button/index.js'
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs'

  onMount(() => {
    toast.dismiss(__TOAST_ID__)
  })
</script>

<Main>
  <div class="mb-2 flex items-center justify-between space-y-2">
    <h1 class="text-2xl font-bold tracking-tight">Dashboard</h1>
    <div class="flex items-center space-x-2">
      <Button>Download</Button>
    </div>
  </div>
  <Tabs orientation="vertical" value="overview" class="space-y-4">
    <div class="w-full overflow-x-auto pb-2">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
    </div>
    <TabsContent value="overview" class="space-y-4">
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
    </TabsContent>
  </Tabs>
</Main>
