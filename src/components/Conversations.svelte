<script lang="ts">
    import conversationsStore from '../lib/stores/conversations';
    import { parseRecipients } from '../lib/utils';

    conversationsStore.init();

    $: conversations = $conversationsStore.conversations;
    $: selectedConversationIndex =
        $conversationsStore.selectedConversationIndex;

    function handleClick(index: number) {
        conversationsStore.setSelectedConversation(index);
    }
</script>

{#if conversations}
    {#each conversations as conversation, index}
        <div
            on:click={() => handleClick(index)}
            class={selectedConversationIndex === index
                ? 'py-2 px-4 capitalize border-b border-gray-200 bg-gray-300'
                : 'py-2 px-4 capitalize border-b border-gray-200'}
        >
            {parseRecipients(conversation.recipients)}
        </div>
    {/each}
{/if}
