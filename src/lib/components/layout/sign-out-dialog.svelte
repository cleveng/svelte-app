<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { toast } from 'svelte-sonner'

  import { goto } from '$app/navigation'
  import { resolve } from '$app/paths'

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

  import graffle from '$lib/graphql-client'
  import { appStore } from '$lib/stores/app.store'

  import { LogoutDocument } from '@/generated/graphql'

  let { open, onOpenChange } = $props()

  let loading = $state<boolean>(false)
  const handleConfirm = async () => {
    if (loading) return
    loading = true

    try {
      await graffle.gql(LogoutDocument).$send({ input: '' })
      appStore.update(state => ({
        ...state,
        loggedIn: false,
        token: null,
      }))
      toast.success('退出成功，正在跳转...', {
        id: __TOAST_ID__,
        duration: 2500,
      })
    } catch (err) {
      console.log(err)
    } finally {
      loading = false
      goto(resolve('/'))
    }
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
      <Button
        onclick={handleConfirm}
        disabled={loading}
        variant="destructive"
        type="submit"
        class="w-full md:inline-block md:w-auto"
      >
        {#if loading}
          <span class="mr-2 h-4 w-4 animate-spin">⏳</span>
        {/if}
        {$_('button.confirm')}
      </Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
