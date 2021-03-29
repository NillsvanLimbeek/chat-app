<script lang="ts">
    import type { Tab } from '../lib/types';

    import Button from '../components/Button.svelte';
    import Conversations from '../components/Conversations.svelte';
    import Contacts from '../components/Contacts.svelte';
    import Modal from '../components/Modal.svelte';
    import AddContact from '../components/forms/AddContact.svelte';
    import StartConversation from '../components/forms/StartConversation.svelte';

    export let id: string;
    let activeTab: Tab = 'conversations';
    let showModal = false;

    $: buttonLabel =
        activeTab === 'contacts' ? 'Add new contact' : 'Start new conversation';

    function closeModal() {
        showModal = false;
    }
</script>

<div class="p-4">
    <div class="w-80 h-full border border-gray-300 shadow-md rounded">
        <div class="flex w-full">
            <Button
                label="conversations"
                active={activeTab === 'conversations'}
                onClick={() => (activeTab = 'conversations')}
            />
            <Button
                label="contacts"
                active={activeTab === 'contacts'}
                onClick={() => (activeTab = 'contacts')}
            />
        </div>

        <div class="h-5/6">
            {#if activeTab === 'conversations'}
                <Conversations />
            {:else}
                <Contacts />
            {/if}
        </div>

        <div
            class="flex flex-col justify-between border-t border-gray-400"
            style={'height: 12.5%'}
        >
            <div class="mb-3">{id}</div>

            <Button
                label={buttonLabel}
                classes="w-full"
                active
                onClick={() => (showModal = true)}
            />
        </div>
    </div>
</div>

{#if showModal}
    <Modal on:close={closeModal}>
        {#if activeTab === 'contacts'}
            <AddContact on:close={closeModal} />
        {:else}
            <StartConversation on:close={closeModal} />
        {/if}
    </Modal>
{/if}
