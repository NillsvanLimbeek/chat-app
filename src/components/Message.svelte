<script lang="ts">
    import conversationStore from '../lib/stores/conversations';

    import type { Message } from '../lib/types';

    $: id = $conversationStore.id;

    export let message: Message;

    function checkSender() {
        return id === message.sender;
    }
</script>

<div class={`flex flex-col w-full mb-4 ${checkSender() ? 'items-end' : ''}`}>
    <div
        class={`py-2 px-3 rounded mb-1 w-min ${
            checkSender() ? 'bg-blue-400 text-white' : 'bg-gray-300'
        }`}
    >
        {message.text}
    </div>

    <p class="text-sm text-gray-500">{checkSender() ? 'You' : 'Not you'}</p>
</div>
