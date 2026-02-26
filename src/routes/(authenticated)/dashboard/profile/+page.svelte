<script lang="ts">
  import { superForm } from 'sveltekit-superforms'
  import { zod4 } from 'sveltekit-superforms/adapters'

  import { Button } from '$lib/components/ui/button/index.js'
  import { Checkbox } from '$lib/components/ui/checkbox/index.js'
  import * as Form from '$lib/components/ui/form/index.js'
  import { Input } from '$lib/components/ui/input/index.js'
  import { Label } from '$lib/components/ui/label/index.js'
  import * as RadioGroup from '$lib/components/ui/radio-group/index.js'
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select'
  import { Switch } from '$lib/components/ui/switch/index.js'
  import { Textarea } from '$lib/components/ui/textarea/index.js'

  import { ContentSection } from './components'
  import { formSchema } from './schema'

  import type { PageData } from './$types'

  const props = $props<{ data: PageData }>()

  const form = superForm(props.data.form, {
    validators: zod4(formSchema),
  })

  const { form: _params, enhance } = form
</script>

<ContentSection title="Profile" description="This is how others will see you on the site.">
  <form method="POST" use:enhance class="space-y-8">
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Username</Form.Label>
          <Input {...props} />
        {/snippet}
      </Form.Control>
      <Form.Description>
        This is your public display name. It can be your real name or a pseudonym. You can only change this once every
        30 days.
      </Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Email</Form.Label>
          <Select {...props} type="single">
            <SelectTrigger class="w-36 truncate uppercase">All Apps</SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Apps</SelectItem>
              <SelectItem value="connected">Connected</SelectItem>
              <SelectItem value="notConnected">Not Connected</SelectItem>
            </SelectContent>
          </Select>
        {/snippet}
      </Form.Control>
      <Form.Description>You can manage verified email addresses in your email settings.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Username</Form.Label>
          <Textarea {...props} class="resize-none" placeholder="Type your message here." />
        {/snippet}
      </Form.Control>
      <Form.Description>
        This is your public display name. It can be your real name or a pseudonym. You can only change this once every
        30 days.
      </Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="username">
      <div class="flex flex-row items-center justify-between gap-2 rounded-lg border p-4">
        <Form.Control>
          {#snippet children({ props })}
            <div class="space-y-1.5">
              <Form.Label class="text-sm">Communication emails</Form.Label>
              <Form.Description>This is your public display name.</Form.Description>
            </div>
            <Switch {...props} />
          {/snippet}
        </Form.Control>
      </div>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Username</Form.Label>
          <RadioGroup.Root {...props} value="comfortable">
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="default" id="r1" />
              <Label for="r1">Default</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="comfortable" id="r2" />
              <Label for="r2">Comfortable</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroup.Item value="compact" id="r3" />
              <Label for="r3">Compact</Label>
            </div>
          </RadioGroup.Root>
        {/snippet}
      </Form.Control>
      <Form.Description>
        This is your public display name. It can be your real name or a pseudonym. You can only change this once every
        30 days.
      </Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <div class="flex items-start gap-3">
            <Checkbox {...props} checked />
            <div class="grid gap-2">
              <Form.Label>Accept terms and conditions</Form.Label>
              <Form.Description>By clicking this checkbox, you agree to the terms and conditions.</Form.Description>
            </div>
          </div>
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Button type="submit">Update profile</Button>
  </form>
</ContentSection>
