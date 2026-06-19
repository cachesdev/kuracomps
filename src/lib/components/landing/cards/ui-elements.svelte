<script lang="ts">
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
  } from '$lib/components/ui/alert-dialog/index.js';
  import { Badge } from '$lib/components/ui/badge/index.js';
  import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
  import { ButtonGroup } from '$lib/components/ui/button-group/index.js';
  import { Card, CardContent } from '$lib/components/ui/card/index.js';
  import { Checkbox } from '$lib/components/ui/checkbox/index.js';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
  } from '$lib/components/ui/dropdown-menu/index.js';
  import { Field, FieldGroup } from '$lib/components/ui/field/index.js';
  import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText
  } from '$lib/components/ui/input-group/index.js';
  import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
  import { Switch } from '$lib/components/ui/switch/index.js';
  import { Textarea } from '$lib/components/ui/textarea/index.js';
  import { ArrowRightIcon, ArrowUpIcon, MagnifyingGlassIcon } from 'phosphor-svelte';
</script>

<Card class="w-full">
  <CardContent class="flex flex-col gap-6">
    <div class="flex flex-wrap gap-2">
      <Button>
        Button
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
    <FieldGroup>
      <Field>
        <InputGroup>
          <InputGroupInput placeholder="Name" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <MagnifyingGlassIcon />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Field>
        <Textarea placeholder="Message" class="resize-none" />
      </Field>
    </FieldGroup>
    <div class="flex items-center gap-2">
      <div class="flex gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
      <RadioGroup value="apple" class="ml-auto flex w-fit gap-3" aria-label="Fruit preference">
        <RadioGroupItem value="apple" aria-label="Apple" />
        <RadioGroupItem value="banana" aria-label="Banana" />
      </RadioGroup>
      <div class="flex gap-3">
        <Checkbox checked aria-label="Enable email alerts" />
        <Checkbox aria-label="Enable push alerts" />
      </div>
      <Switch checked aria-label="Enable compact notifications" />
    </div>
    <div class="flex items-center gap-4">
      <AlertDialog>
        <AlertDialogTrigger class={buttonVariants({ variant: 'outline' })}>
          Alert Dialog
        </AlertDialogTrigger>
        <AlertDialogContent size="sm" portalProps={{ disabled: true }}>
          <AlertDialogHeader>
            <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
            <AlertDialogDescription>
              Allow this accessory to connect and exchange device data?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Do not allow</AlertDialogCancel>
            <AlertDialogAction>Allow</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <ButtonGroup class="ml-auto">
        <Button variant="outline">Button Group</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            class={buttonVariants({ variant: 'outline', size: 'icon' })}
            aria-label="Open quick actions"
          >
            <ArrowUpIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top" class="w-40" portalProps={{ disabled: true }}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuItem>Mute Conversation</DropdownMenuItem>
              <DropdownMenuItem>Mark as Read</DropdownMenuItem>
              <DropdownMenuItem>Block User</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">Delete Conversation</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  </CardContent>
</Card>
