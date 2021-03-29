<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { v4 } from 'uuid';

    let dispatch = createEventDispatcher();
    let input: HTMLInputElement;

    function setId(id: string) {
        dispatch('id', id);
    }
</script>

<div class="h-screen w-screen flex justify-center">
    <form
        on:submit={() => setId(input.value)}
        class="flex flex-col w-1/4 mt-40"
    >
        <input
            type="text"
            bind:this={input}
            placeholder="Set your ID"
            class="border border-gray-400 rounded-sm px-3 py-2 mb-3"
        />

        <div class="flex">
            <button
                type="submit"
                class="w-1/2 bg-blue-500 text-white py-2 px-3 mr-3 rounded-sm"
                >Set ID</button
            >
            <button
                on:click={() => setId(v4())}
                class="w-1/2 bg-gray-300 py-2 px-3 rounded-sm"
            >
                Create new ID
            </button>
        </div>
    </form>
</div>
