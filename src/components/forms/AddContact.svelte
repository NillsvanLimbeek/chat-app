<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import { contacts } from '../../lib/stores';
    import type { Contact, FormEvent } from '../../lib/types';

    import Button from '../../components/Button.svelte';

    let dispatch = createEventDispatcher();
    let nameInput: HTMLInputElement;
    let idInput: HTMLInputElement;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const newContact: Contact = {
            id: idInput.value,
            name: nameInput.value,
        };

        // set in local storage
        localStorage.setItem(
            'contacts',
            JSON.stringify([...$contacts, newContact])
        );

        // update the contacts store
        contacts.update((contacts) => (contacts = [...contacts, newContact]));

        dispatch('close');
    }
</script>

<h2 class="text-3xl pb-3 mb-3 border-b border-gray-400">Add Contact</h2>

<form on:submit={(e) => handleSubmit(e)}>
    <div class="mb-3">
        <label for="name">Name</label>
        <input type="text" name="name" bind:this={nameInput} />
    </div>

    <div class="mb-3">
        <label for="id">ID</label>
        <input type="text" name="id" bind:this={idInput} />
    </div>

    <Button type="submit" active label="Add Contact" />
</form>
