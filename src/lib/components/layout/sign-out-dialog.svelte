<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { toast } from 'svelte-sonner'

  import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from '$lib/components/ui/alert-dialog'
  import { Button } from '$lib/components/ui/button'

  let loading = $state<boolean>(false)
  let disabled = $state<boolean>(false)

  let { open, onOpenChange } = $props()

  const handleConfirm = () => {
    toast.success('退出成功，正在跳转...', {
      id: __TOAST_ID__,
      duration: 2500,
    })
  }
</script>

<AlertDialog bind:open>
  <AlertDialogContent>
    <AlertDialogHeader class="text-start">
      <AlertDialogTitle>{$_('signOut.title')}</AlertDialogTitle>
      <AlertDialogDescription>
        {#snippet child({ props })}
          <div {...props}>{$_('signOut.description')}</div>
        {/snippet}
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel disabled={loading} onclick={() => onOpenChange(false)} type="button">
        {$_('button.cancel')}
      </AlertDialogCancel>
      <form method="POST" action="/logout">
        <Button
          onclick={handleConfirm}
          disabled={disabled || loading}
          variant="destructive"
          type="submit"
          class="w-full md:inline-block md:w-auto"
        >
          {#if loading}
            <span class="mr-2 h-4 w-4 animate-spin">⏳</span>
          {/if}
          {$_('button.confirm')}
        </Button>
      </form>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
