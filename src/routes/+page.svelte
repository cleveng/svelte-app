<script lang="ts">
  import { useStore } from '@tanstack/svelte-store'
  import { appStore, setTheme } from '$lib/stores/app.store'
  import { resolve } from '$app/paths'
  import * as Empty from '$lib/components/ui/empty/index.js'
  import { Button } from '$lib/components/ui/button/index.js'
  import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right'
  import House from '@lucide/svelte/icons/house'

  const theme = useStore(appStore, state => state.theme)
</script>

<Empty.Root>
  <Empty.Header>
    <Empty.Media variant="icon"><House /></Empty.Media>
    <Empty.Title>当前主题: {theme.current}</Empty.Title>
    <Empty.Description>
      You haven't created any projects yet. Get started by creating your first project.
    </Empty.Description>
  </Empty.Header>
  <Empty.Content>
    <div class="flex gap-2">
      <Button onclick={() => setTheme(theme.current === 'dark' ? 'light' : 'dark')}>Create Project</Button>
      <Button variant="outline">Import Project</Button>
    </div>
  </Empty.Content>
  <Button variant="link" class="text-muted-foreground" size="sm">
    <a href={resolve('/signin')}>
      Learn More <ArrowUpRightIcon class="inline-block" />
    </a>
  </Button>
</Empty.Root>
