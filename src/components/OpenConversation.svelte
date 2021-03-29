<script lang="ts">
    import type { Conversation, FormEvent } from '../lib/types';
    import { parseRecipients } from '../lib/utils';
    import conversationsStore from '../lib/stores/conversations';

    import Button from './Button.svelte';
    import Message from './Message.svelte';

    export let conversation: Conversation;
    let textInput: HTMLInputElement;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        conversationsStore.addMessageToConversation({
            recipients: conversation.recipients,
            text: textInput.value,
            sender: $conversationsStore.id,
        });
    }
</script>

<div class="w-full h-full py-4 pr-4">
    <div class="h-full border border-gray-300 rounded shadow-md">
        <div class="h-16 flex items-center bg-gray-300 pl-10">
            <h2 class="capitalize font-light text-xl">
                {parseRecipients(conversation.recipients)}
            </h2>
        </div>

        <div
            class="h-full flex flex-col p-5 overflow-scroll"
            style={'height: calc(100% - 64px - 74px)'}
        >
            {#each conversation.messages as message}
                <Message {message} />
            {/each}
        </div>

        <form on:submit={(e) => handleSubmit(e)} class="flex p-4">
            <input type="text" bind:this={textInput} class="mr-5" />
            <Button active label="Send" type="submit" />
        </form>
    </div>
</div>
