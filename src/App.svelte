<script lang="ts">
    import { onMount } from 'svelte';

    import Tailwind from './Tailwind.svelte';
    import Login from './pages/Login.svelte';
    import Dashboard from './pages/Dashboard.svelte';

    let globalId: string;

    onMount(() => {
        globalId = localStorage.getItem('chat-app-id');
    });

    function setId(id: CustomEvent<string>) {
        globalId = id.detail;
        localStorage.setItem('chat-app-id', id.detail);
    }
</script>

<!-- tailwind styles -->
<Tailwind />

<!-- main app -->
{#if globalId !== null}
    <Dashboard id={globalId} />
{:else}
    <Login on:id={setId} />
{/if}
