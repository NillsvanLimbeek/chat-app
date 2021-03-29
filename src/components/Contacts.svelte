<script lang="ts">
    import { contacts } from '../lib/stores/contacts';
</script>

{#if $contacts !== null}
    {#each $contacts as contact}
        <p class="py-2 px-4 border-b border-gray-200">{contact.name}</p>
    {/each}
{/if}
