<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import { contacts } from '../../lib/stores';
    import type { Conversation, Contact } from '../../lib/types';

    import Button from '../Button.svelte';

    let dispatch = createEventDispatcher();
    let contactIds: Contact[] = [];

    function handleOnChange(newContact: Contact) {
        if (contactIds.find((contact) => contact.id === newContact.id)) {
            contactIds = contactIds.filter(
                (contact) => contact.id !== newContact.id
            );
        } else {
            contactIds = [...contactIds, newContact];
        }
    }

    function handleClick() {
        let newConversations: Conversation[] = [];
        const oldConversations: Conversation[] = JSON.parse(
            localStorage.getItem('conversations')
        );

        if (oldConversations !== null) {
            newConversations = [
                ...oldConversations,
                { recipients: contactIds, messages: [] },
            ];
        } else {
            newConversations = [{ recipients: contactIds, messages: [] }];
        }

        localStorage.setItem('conversations', JSON.stringify(newConversations));
        // conversationsStore.set({ conversations: newConversations });

        dispatch('close');
    }
</script>

<h2 class="text-3xl pb-3 mb-3 border-b border-gray-400">Start conversation</h2>

{#each $contacts as contact}
    <div class="flex items-center mb-3">
        <input
            type="checkbox"
            name={contact.name}
            class="mr-4"
            on:change={() => handleOnChange(contact)}
        />
        <label for={contact.name}>{contact.name}</label>
    </div>
{/each}

<Button
    active
    label="Start conversation"
    onClick={handleClick}
    type="button"
    classes="w-full"
/>
