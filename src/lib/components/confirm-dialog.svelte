<script lang="ts">
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

  import { cn } from '$lib/utils'

  export let open: boolean = false
  export let title: string | HTMLElement = '确认操作'
  export let desc: string | HTMLElement = '此操作无法撤销，请谨慎确认。'
  export let disabled: boolean = false
  export let cancelBtnText: string = '取消'
  export let confirmText: string | HTMLElement = '继续'
  export let destructive: boolean = false
  export let isLoading: boolean = false
  export let className: string = ''
  export let handleConfirm: () => void | Promise<void> = () => {}

  export let onOpenChange: (open: boolean) => void = () => {}
</script>

<AlertDialog bind:open {onOpenChange}>
  <AlertDialogContent class={cn(className)}>
    <AlertDialogHeader class="text-start">
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>
        {#snippet child({ props })}
          <div {...props}>{desc}</div>
        {/snippet}
      </AlertDialogDescription>
    </AlertDialogHeader>

    <slot />

    <AlertDialogFooter>
      <AlertDialogCancel disabled={isLoading}>
        {cancelBtnText}
      </AlertDialogCancel>

      <Button
        variant={destructive ? 'destructive' : 'default'}
        onclick={handleConfirm}
        disabled={disabled || isLoading}
        type="submit"
      >
        {#if isLoading}
          <span class="mr-2 h-4 w-4 animate-spin">⏳</span>
        {/if}
        {confirmText}
      </Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
