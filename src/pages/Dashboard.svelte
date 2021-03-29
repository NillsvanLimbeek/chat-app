<script lang="ts">
    import conversationsStore from '../lib/stores/conversations';

    import Sidebar from '../components/Sidebar.svelte';
    import OpenConversation from '../components/OpenConversation.svelte';

    $: selectedConversation = $conversationsStore.selectedConversation;
    export let id: string;
</script>

<div class="flex h-full">
    <Sidebar {id} />
    <OpenConversation conversation={selectedConversation} />
</div>
